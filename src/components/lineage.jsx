/* Prophetic lineage tree: an SVG family tree drawn from lineage.js.
   Desktop: the line meanders down the page in full-width serpentine rows,
   so the page scrolls downward only, never sideways. Branches (Hud;
   Ishaq -> Yaqub -> Yusuf) fork into the gaps between rows.
   Small screens: a single vertical column with indented branches. */
import { useState, useRef, useEffect } from 'react';
import { lineageSpine, lineageBranches } from '../data/lineage.js';

const NW = 132;
const NH = 58;
const PITCH_X = 166;
const ROW_H = 172;
const PAD_X = 28;
const TOP_PAD = 26;
const MOBILE_BP = 700;

function useWidth(ref) {
  const [w, setW] = useState(1200);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const nw = el.clientWidth;
      if (nw > 0) setW(nw);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return w;
}

function layoutDesktop(w, spine, branches) {
  const perRow = Math.max(3, Math.floor((w - PAD_X * 2) / PITCH_X));
  const pos = spine.map((s, i) => {
    const row = Math.floor(i / perRow);
    const k = i % perRow;
    const col = row % 2 === 0 ? k : perRow - 1 - k;
    return { ...s, x: PAD_X + col * PITCH_X, y: TOP_PAD + row * ROW_H, row, col, i };
  });
  const rows = Math.ceil(spine.length / perRow);
  const links = [];
  for (let i = 1; i < pos.length; i++) {
    const a = pos[i - 1];
    const b = pos[i];
    if (a.row === b.row) {
      const x1 = a.x < b.x ? a.x + NW : a.x;
      const x2 = a.x < b.x ? b.x : b.x + NW;
      links.push({ d: `M ${x1} ${a.y + NH / 2} H ${x2}` });
    } else {
      // serpentine elbow at the shared edge
      const edgeLeft = a.col === 0;
      const ex = edgeLeft ? a.x : a.x + NW;
      const ox = edgeLeft ? ex - 26 : ex + 26;
      const bx = edgeLeft ? b.x : b.x + NW;
      links.push({
        d: `M ${ex} ${a.y + NH / 2} H ${ox} V ${b.y + NH / 2} H ${bx}`,
      });
    }
  }
  // branches
  const bnodes = [];
  branches.forEach((br) => {
    const from = pos.find((p) => p.n === br.from);
    if (!from) return;
    if (br.nodes.length === 1) {
      const above = from.row > 0;
      const by = above ? from.y - ROW_H / 2 : from.y + ROW_H / 2;
      const bn = { ...br.nodes[0], x: from.x, y: by };
      bnodes.push(bn);
      const cx = from.x + NW / 2;
      links.push({
        d: above
          ? `M ${cx} ${by + NH} V ${from.y}`
          : `M ${cx} ${from.y + NH} V ${by}`,
      });
    } else {
      const dir0 = from.row % 2 === 0 ? 1 : -1;
      const need = (br.nodes.length - 1) * PITCH_X;
      let dir = dir0;
      if (from.x + dir * need > w - PAD_X - NW) dir = -1;
      if (from.x + dir * need < PAD_X) dir = 1;
      const by = from.y + ROW_H / 2;
      let prev = null;
      br.nodes.forEach((n, j) => {
        const bx = from.x + dir * j * PITCH_X;
        const bn = { ...n, x: bx, y: by };
        bnodes.push(bn);
        if (j === 0) {
          const cx = from.x + NW / 2;
          links.push({ d: `M ${cx} ${from.y + NH} V ${by}` });
        } else {
          const x1 = dir > 0 ? prev.x + NW : prev.x;
          const x2 = dir > 0 ? bx : bx + NW;
          links.push({ d: `M ${x1} ${by + NH / 2} H ${x2}` });
        }
        prev = bn;
      });
    }
  });
  const height = TOP_PAD * 2 + rows * ROW_H;
  return { nodes: [...pos, ...bnodes], links, width: w, height };
}

function layoutMobile(w, spine, branches) {
  // Flattened tree list: spine rows at indent 0, branch rows indented.
  const rows = [];
  const branchByParent = {};
  branches.forEach((br) => {
    branchByParent[br.from] = br.nodes;
  });
  spine.forEach((s) => {
    rows.push({ ...s, indent: 0, parent: null });
    (branchByParent[s.n] || []).forEach((b, j, arr) => {
      rows.push({
        ...b,
        indent: 1,
        parent: j === 0 ? s.n : arr[j - 1].n,
        branchStart: j === 0,
      });
    });
  });
  const x0 = Math.max(8, w / 2 - NW / 2 - 20);
  const x1 = Math.min(x0 + 76, w - NW - 8);
  const rh = NH + 30;
  rows.forEach((r, i) => {
    r.x = r.indent === 0 ? x0 : x1;
    r.y = TOP_PAD + i * rh;
  });
  const byName = {};
  rows.forEach((r) => {
    byName[r.n] = r;
  });
  const links = [];
  rows.forEach((r, i) => {
    if (r.indent === 0) {
      // spine link: to previous indent-0 row (the vertical line passes
      // behind any branch rows between them)
      for (let j = i - 1; j >= 0; j--) {
        if (rows[j].indent === 0) {
          const a = rows[j];
          links.push({
            d: `M ${a.x + NW / 2} ${a.y + NH} V ${r.y}`,
          });
          break;
        }
      }
    } else if (r.branchStart) {
      const a = byName[r.parent];
      const cx = a.x + NW / 2;
      links.push({ d: `M ${cx} ${a.y + NH} V ${r.y + NH / 2} H ${r.x}` });
    } else {
      const a = byName[r.parent];
      links.push({
        d: `M ${a.x + NW / 2} ${a.y + NH} V ${r.y}`,
      });
    }
  });
  const height = TOP_PAD * 2 + rows.length * rh;
  return { nodes: rows, links, width: w, height };
}

function Node({ n }) {
  const seal = n.p === 2;
  const fill = seal ? '#a87f2a' : n.p === 1 ? '#fffdf4' : '#fbf7ea';
  const stroke = seal ? '#8a6420' : n.p === 1 ? '#a87f2a' : '#c9b98f';
  const cx = n.x + NW / 2;
  return (
    <g>
      <rect
        x={n.x}
        y={n.y}
        width={NW}
        height={NH}
        rx={10}
        fill={fill}
        stroke={stroke}
        strokeWidth={seal ? 0 : 1.6}
      />
      <text
        x={cx}
        y={n.y + (n.h ? 26 : 36)}
        textAnchor="middle"
        className={'lt-name' + (seal ? ' lt-seal-name' : '')}
      >
        {n.n}
      </text>
      {n.h && (
        <text
          x={cx}
          y={n.y + 45}
          textAnchor="middle"
          className={'lt-honor' + (seal ? ' lt-seal-honor' : '')}
        >
          {n.h}
        </text>
      )}
    </g>
  );
}

export function LineageTree() {
  const ref = useRef(null);
  const w = useWidth(ref);
  const mobile = w < MOBILE_BP;
  const L = mobile
    ? layoutMobile(w, lineageSpine, lineageBranches)
    : layoutDesktop(w, lineageSpine, lineageBranches);
  return (
    <div ref={ref} className="lineage-wrap">
      <svg
        viewBox={`0 0 ${L.width} ${L.height}`}
        width="100%"
        role="img"
        aria-label="Family tree of the prophets from Adam to Muhammad"
        style={{ display: 'block', height: 'auto' }}
      >
        {L.links.map((l, i) => (
          <path key={i} d={l.d} className="lt-link" />
        ))}
        {L.nodes.map((n, i) => (
          <Node key={n.n + '-' + i} n={n} />
        ))}
      </svg>
    </div>
  );
}

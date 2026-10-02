/* Prophetic lineage tree: an SVG family tree drawn from lineage.js.
   Desktop: the line meanders down the page in full-width serpentine rows,
   so the page scrolls downward only, never sideways. Branches (Hud;
   Ishaq -> Yaqub -> Yusuf) fork into the gaps between rows.
   Small screens: a single vertical column with indented branches. */
import { useState, useRef, useEffect } from 'react';
import { lineageSpine, lineageBranches } from '../data/lineage.js';

const NW = 168;
const NH = 60;
const PITCH_X = 204;
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
  // Vertical chart: central spine flowing top-down (like the reference chart),
  // Hud branching to the side of Shalikh, Ishaq -> Yaqub -> Yusuf as a
  // side column from Ibrahim.
  const GAP = 34;
  const spineX = Math.max(PAD_X, Math.round(w * 0.36 - NW / 2));
  const pos = spine.map((s, i) => ({
    ...s,
    x: spineX,
    y: TOP_PAD + i * (NH + GAP),
    i,
  }));
  const links = [];
  for (let i = 1; i < pos.length; i++) {
    const a = pos[i - 1];
    const b = pos[i];
    links.push({ d: `M ${a.x + NW / 2} ${a.y + NH} V ${b.y}` });
  }
  const bnodes = [];
  const branchGapX = 80;
  branches.forEach((br) => {
    const from = pos.find((p) => p.n === br.from);
    if (!from) return;
    const cy = from.y + NH / 2;
    if (br.nodes.length === 1) {
      // single branch: prefer the left side, fall back to the right
      const xl = spineX - NW - branchGapX;
      const xr = spineX + NW + branchGapX;
      const bx = xl >= PAD_X ? xl : xr;
      const bn = { ...br.nodes[0], x: bx, y: from.y };
      bnodes.push(bn);
      if (bx < spineX) {
        links.push({ d: `M ${spineX} ${cy} H ${bx + NW}` });
      } else {
        links.push({ d: `M ${spineX + NW} ${cy} H ${bx}` });
      }
    } else {
      // chain branch: side column to the right of the parent
      const bx = spineX + NW + branchGapX;
      let prev = null;
      br.nodes.forEach((n, j) => {
        const by = from.y + j * (NH + GAP);
        const bn = { ...n, x: bx, y: by };
        bnodes.push(bn);
        if (j === 0) {
          links.push({ d: `M ${spineX + NW} ${cy} H ${bx + NW / 2} V ${by}` });
        } else {
          links.push({ d: `M ${bx + NW / 2} ${prev.y + NH} V ${by}` });
        }
        prev = bn;
      });
    }
  });
  const allBottom = [...pos, ...bnodes].map((n) => n.y + NH);
  const height = Math.max(...allBottom) + TOP_PAD;
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
  const x1 = Math.min(x0 + 96, w - NW - 8);
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

/* Chart-style cards: prophets get a deep-green card with a circular Arabic
   medallion seal and a number badge; Muhammad ﷺ gets the gold seal card. */
function ProphetCard({ n }) {
  const seal = n.p === 2;
  const cx = n.x + 32;
  const cy = n.y + NH / 2;
  const cardFill = seal ? '#a87f2a' : '#236b3d';
  const ringFill = seal ? '#8a6420' : '#174e2b';
  const ringStroke = seal ? '#f3e6c3' : '#d9bd76';
  const keyline = seal ? '#f3e6c3' : '#d9bd76';
  const badgeFill = seal ? '#fffdf4' : '#d9bd76';
  const badgeText = seal ? '#8a6420' : '#174e2b';
  return (
    <g filter="url(#lt-shadow)">
      <rect x={n.x} y={n.y} width={NW} height={NH} rx={8} fill={cardFill} />
      <rect
        x={n.x + 4}
        y={n.y + 4}
        width={NW - 8}
        height={NH - 8}
        rx={5}
        fill="none"
        stroke={keyline}
        strokeWidth="1"
        opacity="0.75"
      />
      <circle cx={cx} cy={cy} r={21} fill={ringFill} stroke={ringStroke} strokeWidth="2" />
      <text
        x={cx}
        y={cy + 4}
        textAnchor="middle"
        fontSize="12"
        fill={seal ? '#fffdf4' : '#f3e6c3'}
        textLength="30"
        lengthAdjust="spacingAndGlyphs"
      >
        {n.ar}
      </text>
      <text x={n.x + 60} y={n.y + 27} className={'lt-name' + (seal ? ' lt-seal-name' : ' lt-card-name')}>
        {n.n}
      </text>
      <text x={n.x + 60} y={n.y + 45} className={'lt-honor' + (seal ? ' lt-seal-honor' : ' lt-card-honor')}>
        {n.h}
      </text>
      <circle cx={n.x + NW - 10} cy={n.y + 12} r={10} fill={badgeFill} />
      <text
        x={n.x + NW - 10}
        y={n.y + 16}
        textAnchor="middle"
        fontSize="10.5"
        fontWeight="bold"
        fill={badgeText}
      >
        {n.num}
      </text>
    </g>
  );
}

function PlainCard({ n }) {
  return (
    <g>
      <rect
        x={n.x}
        y={n.y}
        width={NW}
        height={NH}
        rx={8}
        fill="#fbf7ea"
        stroke="#c9b98f"
        strokeWidth="1.2"
      />
      <text x={n.x + NW / 2} y={n.y + 37} textAnchor="middle" className="lt-name lt-plain">
        {n.n}
      </text>
    </g>
  );
}

function Node({ n }) {
  if (n.p) return <ProphetCard n={n} />;
  return <PlainCard n={n} />;
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
        <defs>
          <filter id="lt-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="2.5"
              stdDeviation="3"
              floodColor="#4a3a20"
              floodOpacity="0.22"
            />
          </filter>
          <marker
            id="lt-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 9 5 L 0 9 z" fill="#2e7d43" />
          </marker>
        </defs>
        {L.links.map((l, i) => (
          <path key={i} d={l.d} className="lt-link" markerEnd="url(#lt-arrow)" />
        ))}
        {L.nodes.map((n, i) => (
          <Node key={n.n + '-' + i} n={n} />
        ))}
      </svg>
      <p className="lineage-legend">
        <span><i className="sw sw-green" aria-hidden="true"></i>Prophet</span>
        <span><i className="sw sw-gold" aria-hidden="true"></i>Muhammad ﷺ</span>
        <span className="legend-note">Numbered in order</span>
      </p>
    </div>
  );
}

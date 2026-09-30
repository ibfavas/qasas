import fs from 'fs';
const s = fs.readFileSync('index.html', 'utf8');
const openTag = '<div class="timeline-rail"';
const openIdx = s.indexOf(openTag);
const openEnd = s.indexOf('>', openIdx) + 1;
const hintIdx = s.indexOf('timeline-hint', openEnd);
const rail = s.slice(openEnd, s.lastIndexOf('</div>', hintIdx));

const grabAll = (re) => {
  const out = [];
  let m;
  while ((m = re.exec(rail))) out.push(m);
  return out;
};

const opens = grabAll(/<(a|span) class="prophet( soon)?" role="listitem"(?: href="([^"]+)")?(?: aria-label="([^"]+)")?>/g);
const svgTags = grabAll(/<svg viewBox="0 0 48 48"[^>]*>/g);
const svgInners = grabAll(/<svg viewBox="0 0 48 48"[^>]*>([\s\S]*?)<\/svg>/g);
const pnums = grabAll(/<span class="pnum">([\s\S]*?)<\/span>/g);
const pnames = grabAll(/<span class="pname">([\s\S]*?)<\/span>/g);

if (![opens, svgTags, svgInners, pnums, pnames].every((a) => a.length === 25)) {
  throw new Error('count mismatch: ' + [opens.length, svgTags.length, svgInners.length, pnums.length, pnames.length].join(','));
}

const out = opens.map((o, i) => ({
  tag: o[1],
  soon: !!o[2],
  href: o[3] || null,
  aria: o[4] || null,
  svgAttrs: svgTags[i][0]
    .replace(/^<svg viewBox="0 0 48 48"/, '')
    .replace(/>$/, '')
    .replace(/ aria-hidden="true"/, ''),
  svgInner: svgInners[i][1],
  pnum: pnums[i][1],
  pname: pnames[i][1],
}));

fs.mkdirSync('src/data', { recursive: true });
fs.writeFileSync(
  'src/data/prophets.js',
  '/* Prophet rail data — extracted verbatim from index.html. Re-run scripts/extract-prophets.js to refresh. */\nexport const prophets = ' +
    JSON.stringify(out, null, 2) +
    ';\n'
);
console.log('prophets:', out.length, '| first:', out[0].pname, '| last:', out[24].pname);

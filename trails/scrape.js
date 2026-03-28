const https = require('https');

const BASE = 'https://cdn.trails-game.com/wp-content/uploads/';

const catMap = {
  'kuro-kai': '黎界轨迹', 'hajimari': '创之轨迹', 'sen': '闪之轨迹',
  'zeroao': '零碧轨迹', 'sora': '空之轨迹',
  'calvard': '卡尔瓦德共和国', 'aramis': '亚拉密斯学院', 'heiyue': '黑月',
  'basel-institute-of-science': '巴泽尔理科大学', 'marduk': '马尔铎克警备公司',
  'garden': '庭园', 'almata': '阿玛塔', 'ered-principality': '艾尔萨姆公国',
  'erebonia': '埃雷波尼亚帝国', 'class-vii': 'Ⅶ班',
  'ironbloods': '铁血之子', 'iron-blood': '铁血之子',
  'imperial-government-military': '帝国政府&军队', 'imperial-authority': '帝国政府&军队',
  'imperial-nobility': '帝国皇族&贵族', 'thors': '托尔兹军官学院',
  'thors-branch': '托尔兹第Ⅱ分校', 'elf': '帝国解放战线',
  'new-elf': '新生帝国解放战线', 'witch-gnome': '魔女&地精', 'hexan_gnome': '魔女&地精',
  'crossbell': '克洛斯贝尔自治州', 'sss': '特务支援课',
  'special-support-section': '特务支援课',
  'crossbell-gov': '克州公务员', 'crossbell-authority': '克州公务员',
  'liberl': '利贝尔王国',
  'liberl-government-military': '利贝尔政府&军队', 'liberl-authority': '利贝尔政府&军队',
  'north-ambria': '诺森比亚', 'northambria': '诺森比亚',
  'remiferia': '雷米菲利亚', '278': '艾尔萨姆公国',
  'ouroboros': '噬身之蛇', 'gralsritter': '星杯骑士团',
  'monk': '僧兵厅', 'papal-guard': '僧兵厅',
  'bracer': '游击士协会', 'jaeger': '猎兵',
  'calvard-gov': '卡尔瓦德公务员', 'calvard-authority': '卡尔瓦德公务员'
};

const seriesCats = new Set(['kuro-kai','hajimari','sen','zeroao','sora']);

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  console.log('Fetching page...');
  const html = await fetch('https://trails-game.com/characters/');
  console.log('Page fetched, length:', html.length);

  // Parse articles using regex
  const articleRegex = /<article[^>]*class="([^"]*dt_team[^"]*)"[^>]*>([\s\S]*?)<\/article>/g;
  const characters = [];
  let match;

  while ((match = articleRegex.exec(html)) !== null) {
    const classes = match[1];
    const content = match[2];

    // Extract name from h3 title
    const nameMatch = content.match(/<h3[^>]*class="ele-entry-title"[^>]*>[\s\S]*?<a[^>]*>([^<]+)<\/a>/);
    if (!nameMatch) continue;
    const name = nameMatch[1].trim();

    // Extract image URL
    let imgUrl = '';
    // Try src first
    const srcMatch = content.match(/<img[^>]*\ssrc="(https:\/\/cdn\.trails-game\.com\/wp-content\/uploads\/[^"]+)"/);
    if (srcMatch) {
      imgUrl = srcMatch[1];
    } else {
      // Try data-src
      const dataSrcMatch = content.match(/<img[^>]*\sdata-src="(https:\/\/[^"]+)"/);
      if (dataSrcMatch) imgUrl = dataSrcMatch[1];
      else {
        const lazyMatch = content.match(/<img[^>]*\sdata-lazy-src="(https:\/\/[^"]+)"/);
        if (lazyMatch) imgUrl = lazyMatch[1];
        else {
          const srcsetMatch = content.match(/<img[^>]*\s(?:data-)?srcset="(https:\/\/cdn\.trails-game\.com\/[^\s,"]+)/);
          if (srcsetMatch) imgUrl = srcsetMatch[1];
        }
      }
    }

    // Extract categories from class
    const rawCats = (classes.match(/dt_team_category-([\w-]+)/g) || []).map(c => c.replace('dt_team_category-', ''));
    const series = rawCats.filter(c => seriesCats.has(c)).map(c => catMap[c] || c);
    const affiliation = rawCats.filter(c => !seriesCats.has(c)).map(c => catMap[c] || c);

    characters.push({ name, img: imgUrl, series, affiliation });
  }

  console.log('Extracted', characters.length, 'characters');
  console.log('With images:', characters.filter(c => c.img).length);

  // Generate JS file
  const lines = characters.map(c => {
    return `  { name: ${JSON.stringify(c.name)}, img: ${JSON.stringify(c.img)}, series: ${JSON.stringify(c.series)}, affiliation: ${JSON.stringify(c.affiliation)} }`;
  });
  const jsCode = 'const trailsDatabase = [\n' + lines.join(',\n') + '\n];\n';

  require('fs').writeFileSync('trails_data.js', jsCode, 'utf8');
  console.log('Written trails_data.js:', jsCode.length, 'bytes');
}

main().catch(console.error);

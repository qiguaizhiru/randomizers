const https = require('https');
const fs = require('fs');

function fetch(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 20000 }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve(d));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
  });
}

// EN village -> CN mapping
const villageCN = {
  'Konohagakure': '木叶隐村', 'Sunagakure': '砂隐村', 'Kirigakure': '雾隐村',
  'Kumogakure': '云隐村', 'Iwagakure': '岩隐村', 'Otogakure': '音隐村',
  'Amegakure': '雨隐村', 'Takigakure': '瀑隐村', 'Kusagakure': '草隐村',
  'Yugakure': '汤隐村', 'Hoshigakure': '星隐村', 'Uzushiogakure': '涡潮隐村',
  'Akatsuki': '晓组织', 'Allied Shinobi Forces': '忍者联军',
  'Taki': '瀑隐村', 'Root': '根', 'Kara': '壳组织',
  'Mount Myōboku': '妙木山', "Ryūchi Cave": '龙地洞', 'Shikkotsu Forest': '湿骨林',
  'Yukigakure': '雪隐村', 'Yumegakure': '梦隐村',
  'Nadeshiko Village': '抚子村', 'Tsuchigumo Village': '土蜘蛛一族',
  'Land of Fire': '火之国', 'Land of Wind': '风之国', 'Land of Water': '水之国',
  'Land of Lightning': '雷之国', 'Land of Earth': '土之国',
  'Land of Iron': '铁之国', 'Land of Snow': '雪之国',
  'Land of Waves': '波之国', 'Land of Rivers': '川之国',
  'Land of Tea': '�的之国', 'Land of Sound': '音之国',
  'Land of Valleys': '谷之国', 'Land of Birds': '�的之国',
  'Land of Demons': '鬼之国', 'Land of the Moon': '月之国',
  'Land of Vegetables': '菜之国', 'Land of Hot Water': '汤之国',
  'Land of the Sea': '海之国', 'Land of Stone': '石之国',
  'Land of Forests': '林之国', 'Land of Silence': '静之国',
  'Land of Frost': '霜之国', 'Land of Fangs': '牙之国',
  'Land of Bamboo': '竹之国', 'Land of Ancestors': '祖之国',
  'Land of Redaku': '乐园之国', 'Land of the Sky': '空之国',
  'Land of Neck': '首之国', 'Land of Noodles': '面之国',
  'Land of Honey': '蜜之国', 'Land of Mountains': '山之国',
  'Land of Woods': '木之国', 'Land of This': '此之国', 'Land of That': '彼之国',
  'Moon': '月球', 'Ōtsutsuki Clan': '大筒木一族',
  'Takumi Village': '匠之里', 'Tonika Village': '托尼卡村',
  'Rōran': '楼兰',
};

// EN name -> CN name mapping (main characters)
const nameCN = {
  'Naruto Uzumaki': '漩涡鸣人', 'Sasuke Uchiha': '宇智波佐助', 'Sakura Haruno': '春野樱',
  'Kakashi Hatake': '旗木卡卡西', 'Hinata Hyūga': '日向雏田', 'Shikamaru Nara': '奈良鹿丸',
  'Ino Yamanaka': '山中井野', 'Chōji Akimichi': '秋道丁次', 'Rock Lee': '李洛克',
  'Neji Hyūga': '日向宁次', 'Tenten': '天天', 'Might Guy': '迈特凯',
  'Kiba Inuzuka': '犬冢牙', 'Shino Aburame': '油女志乃', 'Kurenai Yūhi': '夕日红',
  'Asuma Sarutobi': '猿飞阿斯玛', 'Jiraiya': '自来也', 'Tsunade': '纲手',
  'Orochimaru': '大蛇丸', 'Kabuto Yakushi': '药师兜', 'Sai': '佐井',
  'Yamato': '大和', 'Minato Namikaze': '波风水门', 'Kushina Uzumaki': '漩涡玖辛奈',
  'Madara Uchiha': '宇智波斑', 'Hashirama Senju': '千手柱间', 'Tobirama Senju': '千手扉间',
  'Hiruzen Sarutobi': '猿飞日斩', 'Itachi Uchiha': '宇智波鼬', 'Obito Uchiha': '宇智波带土',
  'Shisui Uchiha': '宇智波止水', 'Konan': '小南', 'Pain': '培因',
  'Nagato': '长门', 'Deidara': '迪达拉', 'Sasori': '蝎', 'Hidan': '飞段',
  'Kakuzu': '角都', 'Kisame Hoshigaki': '干柿鬼鲛', 'Zetsu': '绝',
  'Gaara': '我爱罗', 'Temari': '手�的', 'Kankurō': '勘九郎',
  'Chiyo': '千代婆婆', 'Killer B': '奇拉比', 'A': '雷影艾',
  'Darui': '达鲁伊', 'Mei Terumī': '照美冥', 'Chōjūrō': '长十郎',
  'Zabuza Momochi': '桃地再不斩', 'Haku': '白', 'Ōnoki': '大野木',
  'Kurotsuchi': '黑土', 'Akatsuchi': '赤土',
  'Kaguya Ōtsutsuki': '大筒木辉夜', 'Hagoromo Ōtsutsuki': '大筒木羽衣',
  'Hamura Ōtsutsuki': '大筒木羽村', 'Indra Ōtsutsuki': '因陀罗',
  'Asura Ōtsutsuki': '阿修罗', 'Toneri Ōtsutsuki': '大筒木舍人',
  'Momoshiki Ōtsutsuki': '大筒木桃式', 'Kinshiki Ōtsutsuki': '大筒木金式',
  'Isshiki Ōtsutsuki': '大筒木一式',
  'Danzō Shimura': '志村团藏', 'Konohamaru Sarutobi': '猿飞木叶丸',
  'Iruka Umino': '海野伊鲁卡', 'Anko Mitarashi': '御手洗红豆',
  'Ibiki Morino': '森乃伊比喜', 'Genma Shiranui': '不知火玄间',
  'Hayate Gekkō': '月光疾风', 'Kurama': '九喇嘛',
  'Fugaku Uchiha': '宇智波富岳', 'Mikoto Uchiha': '宇智波美琴',
  'Hiashi Hyūga': '日向日足', 'Hanabi Hyūga': '日向花火',
  'Kimimaro': '君麻吕', 'Tayuya': '多由也', 'Kidōmaru': '鬼童丸',
  'Sakon and Ukon': '左近/右近', 'Jirōbō': '次郎坊',
  'Suigetsu Hōzuki': '鬼灯水月', 'Karin': '香燐', 'Jūgo': '重吾',
  'Konan': '小南', 'Yahiko': '弥彦',
  'Might Duy': '迈特戴', 'Shikaku Nara': '奈良鹿久',
  'Inoichi Yamanaka': '山中亥一', 'Chōza Akimichi': '秋道丁座',
  'Tsunade': '纲手', 'Temari': '手鞠',
  'Ao': '青', 'Utakata': '泡沫',
  'Yagura Karatachi': '矢仓', 'Rōshi': '老紫', 'Han': '汉',
  'Fū': '芙', 'Yugito Nii': '二位柚木斗',
  'Ginkaku': '银角', 'Kinkaku': '金角',
  'Karui': '卡�的伊', 'Omoi': '奥摩伊', 'Samui': '萨木伊',
  'Mifune': '三船', 'Hanzō': '山椒鱼半藏',
  'Boruto Uzumaki': '漩涡博人', 'Sarada Uchiha': '宇智波佐良娜',
  'Mitsuki': '巳月', 'Kawaki': '川木',
  'Shin Uchiha': '宇智波信',
  'Rin Nohara': '野原琳', 'Shizune': '静音',
  'Izumo Kamizuki': '神月出云', 'Kotetsu Hagane': '卫门�的铁',
  'Ebisu': '惠比寿', 'Gai': '迈特凯',
};

async function main() {
  console.log('Fetching Naruto characters from API...');

  const allChars = [];
  let page = 1;

  while (true) {
    console.log('Page', page, '...');
    try {
      const raw = await fetch(`https://dattebayo-api.onrender.com/characters?page=${page}&limit=50`);
      const json = JSON.parse(raw);
      const chars = json.characters || [];
      if (chars.length === 0) break;

      chars.forEach(c => {
        const img = (c.images && c.images[0]) || '';
        const aff = c.personal?.affiliation || [];
        const clan = c.personal?.clan;
        const sex = c.personal?.sex || '';

        // Get primary village
        let primaryAff = Array.isArray(aff) ? (aff[0] || '') : (typeof aff === 'string' ? aff : '');
        // Clean up messy affiliation strings
        if (primaryAff) primaryAff = primaryAff.replace(/File:[^\s]+ /g, '').replace(/\s*\(.*?\)\s*/g, '').replace(/"[^"]*"/g, '').trim();
        const village = villageCN[primaryAff] || (primaryAff.includes('Land of') ? '其他' : primaryAff) || '未知';

        // Get Chinese name
        const cnName = nameCN[c.name] || c.name;

        allChars.push({
          name: cnName,
          enName: c.name,
          img: img,
          village: village,
          clan: clan || '',
        });
      });

      page++;
      // Small delay to be nice to the API
      await new Promise(r => setTimeout(r, 500));
    } catch (e) {
      console.log('Error on page', page, ':', e.message);
      break;
    }
  }

  console.log('Total characters fetched:', allChars.length);

  // Filter: only keep characters with images and reasonable data
  const filtered = allChars.filter(c => c.img);
  console.log('With images:', filtered.length);

  // Deduplicate by name
  const seen = new Set();
  const deduped = filtered.filter(c => {
    if (seen.has(c.name)) return false;
    seen.add(c.name);
    return true;
  });
  console.log('After dedup:', deduped.length);

  // Generate JS file
  const lines = deduped.map(c =>
    `  { name: ${JSON.stringify(c.name)}, img: ${JSON.stringify(c.img)}, village: ${JSON.stringify(c.village)}, clan: ${JSON.stringify(c.clan)} }`
  );
  const jsCode = 'const narutoDatabase = [\n' + lines.join(',\n') + '\n];\n';

  fs.writeFileSync('naruto_data.js', jsCode, 'utf8');
  console.log('Written naruto_data.js:', jsCode.length, 'bytes');

  // Print village distribution
  const villages = {};
  deduped.forEach(c => { villages[c.village] = (villages[c.village] || 0) + 1; });
  Object.entries(villages).sort((a, b) => b[1] - a[1]).slice(0, 15).forEach(([k, v]) => console.log('  ' + k + ': ' + v));
}

main().catch(console.error);

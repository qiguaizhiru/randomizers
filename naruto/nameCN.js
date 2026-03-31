// Naruto character English name → Chinese name mapping
// Compiled from: naruto_data.js (existing scraped DB), zh.wikipedia.org/wiki/火影忍者角色列表,
// and scrape.js partial table. Format matches scrape.js usage:
//   const cnName = nameCN[c.name] || c.name;

const nameCN = {
  // ── Protagonists ───────────────────────────────────────────────────────────
  'Naruto Uzumaki': '漩涡鸣人',
  'Sasuke Uchiha': '宇智波佐助',
  'Sakura Haruno': '春野樱',
  'Kakashi Hatake': '旗木卡卡西',
  'Boruto Uzumaki': '漩涡博人',
  'Sarada Uchiha': '宇智波佐良娜',
  'Mitsuki': '巳月',
  'Kawaki': '川木',

  // ── Hokage ────────────────────────────────────────────────────────────────
  'Hashirama Senju': '千手柱间',
  'Tobirama Senju': '千手扉间',
  'Hiruzen Sarutobi': '猿飞日斩',
  'Minato Namikaze': '波风水门',
  'Tsunade': '纲手',
  'Shikamaru Nara': '奈良鹿丸',

  // ── Team 7 / Kakashi ──────────────────────────────────────────────────────
  'Yamato': '大和',
  'Sai': '佐井',

  // ── Team Guy ──────────────────────────────────────────────────────────────
  'Might Guy': '迈特凯',
  'Might Duy': '迈特戴',
  'Gai': '迈特凯',
  'Rock Lee': '李洛克',
  'Metal Lee': '李钢丸',
  'Neji Hyūga': '日向宁次',
  'Neji Hyuga': '日向宁次',
  'Tenten': '天天',

  // ── Team Kurenai ──────────────────────────────────────────────────────────
  'Kurenai Yūhi': '夕日红',
  'Kurenai Yuhi': '夕日红',
  'Hinata Hyūga': '日向雏田',
  'Hinata Hyuga': '日向雏田',
  'Kiba Inuzuka': '犬冢牙',
  'Shino Aburame': '油女志乃',

  // ── Team Asuma ────────────────────────────────────────────────────────────
  'Asuma Sarutobi': '猿飞阿斯玛',
  'Ino Yamanaka': '山中井野',
  'Chōji Akimichi': '秋道丁次',
  'Choji Akimichi': '秋道丁次',

  // ── Hyūga Clan ────────────────────────────────────────────────────────────
  'Hiashi Hyūga': '日向日足',
  'Hiashi Hyuga': '日向日足',
  'Hanabi Hyūga': '日向花火',
  'Hanabi Hyuga': '日向花火',
  'Hizashi Hyūga': '日向一指',
  'Hizashi Hyuga': '日向一指',

  // ── Yamanaka Clan ─────────────────────────────────────────────────────────
  'Inoichi Yamanaka': '山中亥一',
  'Inojin Yamanaka': '山中猪猪',

  // ── Akimichi Clan ─────────────────────────────────────────────────────────
  'Chōza Akimichi': '秋道丁座',
  'Choza Akimichi': '秋道丁座',
  'Chōchō Akimichi': '秋道丁丁',
  'Chocho Akimichi': '秋道丁丁',

  // ── Nara Clan ─────────────────────────────────────────────────────────────
  'Shikaku Nara': '奈良鹿久',
  'Shikadai Nara': '奈良鹿台',

  // ── Uchiha Clan ───────────────────────────────────────────────────────────
  'Itachi Uchiha': '宇智波鼬',
  'Obito Uchiha': '宇智波带土',
  'Madara Uchiha': '宇智波斑',
  'Fugaku Uchiha': '宇智波富岳',
  'Mikoto Uchiha': '宇智波美琴',
  'Shisui Uchiha': '宇智波止水',
  'Shin Uchiha': '宇智波信',

  // ── Sannin ────────────────────────────────────────────────────────────────
  'Jiraiya': '自来也',
  'Orochimaru': '大蛇丸',
  'Kabuto Yakushi': '药师兜',

  // ── ROOT / ANBU ───────────────────────────────────────────────────────────
  'Danzō Shimura': '志村团藏',
  'Danzo Shimura': '志村团藏',

  // ── Konoha misc ───────────────────────────────────────────────────────────
  'Konohamaru Sarutobi': '猿飞木叶丸',
  'Mirai Sarutobi': '猿飞未来',
  'Biwako Sarutobi': '猿飞毕华子',
  'Shizune': '静音',
  'Anko Mitarashi': '御手洗红豆',
  'Iruka Umino': '海野伊鲁卡',
  'Ibiki Morino': '森乃伊比喜',
  'Genma Shiranui': '不知火玄间',
  'Hayate Gekkō': '月光疾风',
  'Hayate Gekko': '月光疾风',
  'Izumo Kamizuki': '神月出云',
  'Kotetsu Hagane': '卫门钢铁',
  'Ebisu': '惠比寿',
  'Rin Nohara': '野原琳',
  'Dan Katō': '香刀·丹',
  'Dan Kato': '香刀·丹',
  'Kushina Uzumaki': '漩涡玖辛奈',
  'Nawaki': '纲树',
  'Mito Uzumaki': '漩涡密特',
  'Sakumo Hatake': '旗木银牙',
  'Udon Ise': '伊势乌冬',
  'Moegi Kazamatsuri': '风祭萌木',
  'Aoba Yamashiro': '山城葵叶',
  'Hana Inuzuka': '犬冢花',
  'Tsume Inuzuka': '犬冢爪',
  'Shibi Aburame': '油女志比',
  'Raidō Namiashi': '浪足雷道',
  'Raido Namiashi': '浪足雷道',
  'Koharu Utatane': '歌棚小春',
  'Homura Mitokado': '水户门炎',
  'Shinku Yūhi': '夕日真红',

  // Civilians
  'Teuchi': '手打',
  'Ayame': '菖蒲',
  'Shinobu Mibu': '壬生忍',
  'Mai Kagetsu': '影月舞',

  // ── Sand Village ──────────────────────────────────────────────────────────
  'Gaara': '我爱罗',
  'Temari': '手鞠',
  'Kankurō': '勘九郎',
  'Kankuro': '勘九郎',
  'Chiyo': '千代',
  'Baki': '巴奇',
  'Yashamaru': '夜沙丸',
  'Rasa': '拉沙',
  'Karura': '卡鲁拉',
  'Pakura': '帕库拉',
  'Ebizō': '海王星',
  'Ebizo': '海王星',
  'Shinki': '信鬼',

  // ── Cloud Village ─────────────────────────────────────────────────────────
  'Killer B': '奇拉比',
  'A': '雷影艾',
  'A (Fourth Raikage)': '四代目雷影·A',
  'A (Third Raikage)': '三代目雷影·A',
  'A (Second Raikage)': '二代目雷影',
  'A (First Raikage)': '初代雷影',
  'Darui': '达鲁伊',
  'Samui': '萨木伊',
  'Atsui': '阿楚伊',
  'Omoi': '奥摩伊',
  'Karui': '卡鲁伊',
  'C': '希伊',
  'Mabui': '马布伊',
  'Yugito Nii': '二位柚木斗',
  'Motoi': '元井',
  'Dodai': '多代',
  'Kinkaku': '金角',
  'Ginkaku': '银角',
  'Kiyoi Yotsuki': '四月清伊',

  // ── Stone Village ─────────────────────────────────────────────────────────
  'Ōnoki': '大野木',
  'Onoki': '大野木',
  'Kurotsuchi': '黑土',
  'Akatsuchi': '赤土',
  'Han': '汉',
  'Rōshi': '老紫',
  'Roshi': '老紫',
  'Deidara': '迪达拉',
  'Kitsuchi': '奇土知',

  // ── Mist Village ──────────────────────────────────────────────────────────
  'Zabuza Momochi': '桃地再不斩',
  'Haku': '白',
  'Kisame Hoshigaki': '干柿鬼鲛',
  'Mei Terumī': '照美冥',
  'Mei Terumi': '照美冥',
  'Chōjūrō': '长十郎',
  'Chojuro': '长十郎',
  'Ao': '青',
  'Suigetsu Hōzuki': '鬼灯水月',
  'Suigetsu Hozuki': '鬼灯水月',
  'Mangetsu Hōzuki': '鬼灯满月',
  'Mangetsu Hozuki': '鬼灯满月',
  'Gengetsu Hōzuki': '鬼灯幻月',
  'Gengetsu Hozuki': '鬼灯幻月',
  'Yagura Karatachi': '矢仓',
  'Yagura': '矢仓',
  'Utakata': '泡沫',
  'Kagura Karatachi': '枳棘花春',

  // ── Rain Village ──────────────────────────────────────────────────────────
  'Nagato': '长门',
  'Konan': '小南',
  'Yahiko': '弥彦',
  'Hanzō': '山椒鱼半藏',
  'Hanzo': '山椒鱼半藏',

  // ── Sound Village / Sound Four ────────────────────────────────────────────
  'Kimimaro': '君麻吕',
  'Tayuya': '多由也',
  'Jirōbō': '次郎坊',
  'Jirobo': '次郎坊',
  'Kidōmaru': '鬼童丸',
  'Kidomaru': '鬼童丸',
  'Sakon': '左近',
  'Ukon': '右近',
  'Sakon and Ukon': '左近/右近',
  'Karin': '香燐',
  'Jūgo': '重吾',
  'Jugo': '重吾',

  // ── Akatsuki ──────────────────────────────────────────────────────────────
  'Pain': '培因',
  'Hidan': '飞段',
  'Kakuzu': '角都',
  'Sasori': '蝎',
  'Zetsu': '绝',
  'Black Zetsu': '黑泽图',
  'White Zetsu': '白泽图',

  // ── Tailed Beasts ─────────────────────────────────────────────────────────
  'Kurama': '九喇嘛',
  'Shukaku': '守鹤',
  'Matatabi': '又旅',
  'Isobu': '磯撫',
  'Son Gokū': '孙悟空',
  'Son Goku': '孙悟空',
  'Kokuō': '穆穆',
  'Kokuo': '穆穆',
  'Saiken': '犀犬',
  'Chōmei': '重明',
  'Chomei': '重明',
  'Gyūki': '牛鬼',
  'Gyuki': '牛鬼',
  'Ten-Tails': '十尾',
  'Fū': '芙',
  'Fu': '芙',

  // ── Ōtsutsuki Clan ────────────────────────────────────────────────────────
  'Kaguya Ōtsutsuki': '大筒木辉夜',
  'Kaguya Otsutsuki': '大筒木辉夜',
  'Hagoromo Ōtsutsuki': '大筒木羽衣',
  'Hagoromo Otsutsuki': '大筒木羽衣',
  'Hamura Ōtsutsuki': '大筒木羽村',
  'Hamura Otsutsuki': '大筒木羽村',
  'Indra Ōtsutsuki': '因陀罗',
  'Indra Otsutsuki': '因陀罗',
  'Asura Ōtsutsuki': '阿修罗',
  'Asura Otsutsuki': '阿修罗',
  'Toneri Ōtsutsuki': '大筒木舍人',
  'Toneri Otsutsuki': '大筒木舍人',
  'Momoshiki Ōtsutsuki': '大筒木桃式',
  'Momoshiki Otsutsuki': '大筒木桃式',
  'Kinshiki Ōtsutsuki': '大筒木金式',
  'Kinshiki Otsutsuki': '大筒木金式',
  'Isshiki Ōtsutsuki': '大筒木一式',
  'Isshiki Otsutsuki': '大筒木一式',
  'Urashiki Ōtsutsuki': '大筒木浦罗仙',
  'Urashiki Otsutsuki': '大筒木浦罗仙',

  // ── Boruto era / Kara ─────────────────────────────────────────────────────
  'Delta': '德尔塔',
  'Code': '科德',
  'Jigen': '次元',
  'Ada': '爱达',
  'Daemon': '达蒙',
  'Amado Sanzu': '阿玛多',
  'Amado': '阿玛多',
  'Deepa': '迪帕',
  'Boro': '博罗',
  'Victor': '维克托',
  'Koji Kashin': '加志因·柯基',
  'Sumire Kakei': '挂井澄铃',
  'Denki Kaminarimon': '神雷门电气',
  'Wasabi Izuno': '泉野芥末',
  'Iwabee Yuino': '唯野岩壁',

  // ── Iron Country ──────────────────────────────────────────────────────────
  'Mifune': '三船',
};

if (typeof module !== 'undefined') {
  module.exports = { nameCN };
}

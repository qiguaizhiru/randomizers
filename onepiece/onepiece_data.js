const onepieceDatabase = [
  // ── 草帽海贼团 ─────────────────────────────────────────────────────
  {
    name: "娜美", alias: "猫贼娜美", role: "草帽海贼团·航海士",
    faction: "草帽海贼团",
    img: "https://bkimg.cdn.bcebos.com/pic/d62a6059252dd42a28347432fa6f4cb5c9ea15ce1257"
  },
  {
    name: "妮可·罗宾", alias: "恶魔之子", role: "草帽海贼团·考古学家",
    faction: "草帽海贼团",
    img: "https://bkimg.cdn.bcebos.com/pic/8b82b9014a90f603738da42ae64ba41bb051f819471e"
  },

  // ── 海军 ────────────────────────────────────────────────────────────
  {
    name: "塔希提", alias: "小南刀", role: "海军大佐·剑术家",
    faction: "海军",
    img: ""
  },
  {
    name: "霞", alias: "黑樊", role: "海军中将·笼笼果实能力者",
    faction: "海军",
    img: ""
  },

  // ── 七武海 ──────────────────────────────────────────────────────────
  {
    name: "波雅·汉库克", alias: "女帝·蛇姬", role: "七武海·亚马逊百合女王",
    faction: "七武海",
    img: "https://bkimg.cdn.bcebos.com/pic/b8014a90f603738da97759683e4ba751f81986184662"
  },

  // ── 大妈海贼团 ─────────────────────────────────────────────────────
  {
    name: "夏洛特·玲玲", alias: "大妈", role: "四皇·大妈海贼团船长",
    faction: "大妈海贼团",
    img: "https://bkimg.cdn.bcebos.com/pic/c9fcc3cec3fdfc039245908eb96d9094a4c27d1e88f1"
  },
  {
    name: "夏洛特·普丁", alias: "", role: "大妈女儿·三眼族·记忆果实",
    faction: "大妈海贼团",
    img: ""
  },
  {
    name: "夏洛特·布蕾", alias: "镜子恶魔", role: "大妈女儿·镜镜果实能力者",
    faction: "大妈海贼团",
    img: ""
  },
  {
    name: "夏洛特·斯慕久", alias: "", role: "大妈女儿·汁汁果实·三灾",
    faction: "大妈海贼团",
    img: ""
  },
  {
    name: "夏洛特·阿曼多", alias: "", role: "大妈女儿·刀剑高手",
    faction: "大妈海贼团",
    img: ""
  },
  {
    name: "夏洛特·加拉黛特", alias: "", role: "大妈女儿·大妈海贼团",
    faction: "大妈海贼团",
    img: ""
  },
  {
    name: "维尼斯莫克·雷久", alias: "毒性少女", role: "北海暗杀部队·毒能力者",
    faction: "大妈海贼团",
    img: ""
  },

  // ── 亚马逊百合 ────────────────────────────────────────────────────
  {
    name: "波雅·马利柔", alias: "蛇后二姐", role: "亚马逊百合·海王类能力者",
    faction: "亚马逊百合",
    img: ""
  },
  {
    name: "波雅·珊达洛西", alias: "蛇后三妹", role: "亚马逊百合·海王类能力者",
    faction: "亚马逊百合",
    img: ""
  },
  {
    name: "玛格丽特", alias: "", role: "亚马逊百合战士",
    faction: "亚马逊百合",
    img: ""
  },
  {
    name: "斯薇特皮", alias: "", role: "亚马逊百合战士",
    faction: "亚马逊百合",
    img: ""
  },

  // ── 阿拉巴斯坦 ───────────────────────────────────────────────────
  {
    name: "娜法塔利·薇薇", alias: "薇薇公主", role: "阿拉巴斯坦王国公主",
    faction: "阿拉巴斯坦",
    img: ""
  },
  {
    name: "娜法塔利·蒂蒂", alias: "", role: "阿拉巴斯坦已故王后",
    faction: "阿拉巴斯坦",
    img: ""
  },

  // ── 鱼人岛 ────────────────────────────────────────────────────────
  {
    name: "希罗希罗", alias: "人鱼公主·波塞冬", role: "鱼人岛海王类公主",
    faction: "鱼人岛",
    img: "https://bkimg.cdn.bcebos.com/pic/5bafa40f4bfbfbedab64136eb2a6e036afc37931b1de"
  },
  {
    name: "凯米", alias: "", role: "章鱼鱼人·飞鱼骑士队",
    faction: "鱼人岛",
    img: ""
  },

  // ── 德雷斯罗萨 ───────────────────────────────────────────────────
  {
    name: "薇奥拉", alias: "副总督", role: "德雷斯罗萨公主·觉觉果实",
    faction: "德雷斯罗萨",
    img: ""
  },
  {
    name: "贝宝·五", alias: "", role: "顿基何德海贼团·分分果实",
    faction: "德雷斯罗萨",
    img: ""
  },
  {
    name: "勒贝卡", alias: "", role: "德雷斯罗萨斗技场战士",
    faction: "德雷斯罗萨",
    img: ""
  },

  // ── 和之国 ────────────────────────────────────────────────────────
  {
    name: "光月日和", alias: "小紫", role: "光月家族·和之国大奥",
    faction: "和之国",
    img: "https://bkimg.cdn.bcebos.com/pic/83025aafa40f4bfbfbedf31e821f6ff0f736afc3b263"
  },
  {
    name: "御玉", alias: "小玉", role: "鬼佐贺村民·动动果实·年糕",
    faction: "和之国",
    img: ""
  },
  {
    name: "大和", alias: "鬼岛的鬼", role: "百兽海贼团·凯多之女·犬鬼果实",
    faction: "和之国",
    img: ""
  },
  {
    name: "菊之丞", alias: "铁之菊", role: "九红鞘·光月家族武士",
    faction: "和之国",
    img: ""
  },
  {
    name: "小雪", alias: "", role: "和之国大奥侍女",
    faction: "和之国",
    img: ""
  },

  // ── 革命军 ────────────────────────────────────────────────────────
  {
    name: "科阿拉", alias: "", role: "革命军参谋长·鱼人空手道",
    faction: "革命军",
    img: ""
  },
  {
    name: "碧娅·贝蒂", alias: "解放女战神", role: "革命军东军指挥官·激化果实",
    faction: "革命军",
    img: ""
  },

  // ── 世界政府/CP ──────────────────────────────────────────────────
  {
    name: "卡莉法", alias: "", role: "CP9成员·泡泡果实能力者",
    faction: "世界政府",
    img: ""
  },
  {
    name: "斯图西", alias: "CP0玫瑰", role: "CP0特工·克隆天使",
    faction: "世界政府",
    img: ""
  },

  // ── 超新星 ────────────────────────────────────────────────────────
  {
    name: "珠宝·邦妮", alias: "大食鬼", role: "超新星·年年果实能力者",
    faction: "超新星",
    img: ""
  },

  // ── 佩罗娜 / 其他 ────────────────────────────────────────────────
  {
    name: "佩罗娜", alias: "幽灵公主", role: "毛罗战士·空鬼系果实",
    faction: "其他",
    img: "https://bkimg.cdn.bcebos.com/pic/29381f30e924b8998e44bd206a061d950a7bf6aa"
  },
  {
    name: "阿尔维达", alias: "铁棍女", role: "克里克海盗·蜡蜡果实能力者",
    faction: "其他",
    img: ""
  },
  {
    name: "谢克", alias: "双刀谢克", role: "香蒂亚传说·暗黑海贼",
    faction: "其他",
    img: ""
  },
  {
    name: "卡雅", alias: "", role: "赛肺村富家少女",
    faction: "其他",
    img: ""
  },
  {
    name: "雪野", alias: "雪女", role: "凯撒克朗研究所·翼翼果实",
    faction: "其他",
    img: ""
  },
  {
    name: "科伊娜", alias: "", role: "奥罗杰克森号厨师·革命军",
    faction: "其他",
    img: ""
  },
];

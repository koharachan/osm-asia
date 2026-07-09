import { ref } from 'vue'

const locales = ['zh-CN', 'zh-TW', 'ja', 'ko', 'en', 'de', 'my', 'eo']

const labels = {
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
  ja: '日本語',
  ko: '한국어',
  en: 'English',
  de: 'Deutsch',
  my: 'မြန်မာ',
  eo: 'Esperanto'
}

const baseDownload = {
  eyebrow: 'Mirror Downloads'
}

const chinaRegionNames = {
  'zh-CN': {
    fujian: '福建',
    chongqing: '重庆',
    beijing: '北京',
    anhui: '安徽',
    zhejiang: '浙江',
    yunnan: '云南',
    xinjiang: '新疆',
    tibet: '西藏',
    tianjin: '天津',
    sichuan: '四川',
    shanxi: '山西',
    shanghai: '上海',
    shandong: '山东',
    shaanxi: '陕西',
    qinghai: '青海',
    ningxia: '宁夏',
    macau: '澳门',
    liaoning: '辽宁',
    jilin: '吉林',
    jiangxi: '江西',
    jiangsu: '江苏',
    'inner-mongolia': '内蒙古',
    hunan: '湖南',
    hubei: '湖北',
    henan: '河南',
    heilongjiang: '黑龙江',
    hebei: '河北',
    guangxi: '广西',
    guizhou: '贵州',
    hainan: '海南',
    gansu: '甘肃',
    guangdong: '广东',
    longyan: '龙岩',
    nanping: '南平',
    sanming: '三明',
    baiyin: '白银',
    dingxi: '定西',
    jiayuguan: '嘉峪关',
    jinchang: '金昌',
    jiuquan: '酒泉',
    lanzhou: '兰州',
    linxia: '临夏',
    longnan: '陇南',
    pingliang: '平凉',
    qingyang: '庆阳',
    tianshui: '天水',
    'wuwei-gansu': '武威',
    zhangye: '张掖',
    chaozhou: '潮州',
    dongguan: '东莞',
    foshan: '佛山',
    guangzhou: '广州',
    heyuan: '河源',
    huizhou: '惠州',
    jiangmen: '江门',
    jieyang: '揭阳',
    maoming: '茂名',
    meizhou: '梅州',
    shantou: '汕头',
    qingyuan: '清远',
    shanwei: '汕尾',
    shaoguan: '韶关',
    shenzhen: '深圳',
    yangjiang: '阳江',
    yunfu: '云浮',
    zhuhai: '珠海',
    zhongshan: '中山',
    zhaoqing: '肇庆',
    zhanjiang: '湛江',
    guigang: '贵港',
    fangchenggang: '防城港',
    chongzuo: '崇左',
    beihai: '北海',
    baise: '百色',
    guilin: '桂林',
    hechi: '河池',
    hezhou: '贺州',
    laibin: '来宾',
    liuzhou: '柳州',
    nanning: '南宁',
    qinzhou: '钦州',
    wuzhou: '梧州',
    anshun: '安顺',
    bijie: '毕节',
    guiyang: '贵阳',
    liupanshui: '六盘水',
    qiannan: '黔南',
    qiandongnan: '黔东南',
    qianxinan: '黔西南',
    tongren: '铜仁',
    zunyi: '遵义',
    danzhou: '儋州',
    sanya: '三亚',
    haikou: '海口',
    baoding: '保定',
    chengde: '承德',
    cangzhou: '沧州',
    hengshui: '衡水',
    handan: '邯郸',
    langfang: '廊坊',
    qinhuangdao: '秦皇岛',
    shijiazhuang: '石家庄',
    tangshan: '唐山',
    xingtai: '邢台',
    zhangjiakou: '张家口',
    harbin: '哈尔滨',
    daqing: '大庆',
    'daxing-anling': '大兴安岭',
    hegang: '鹤岗',
    heihe: '黑河',
    jiamusi: '佳木斯',
    jixi: '鸡西',
    mudanjiang: '牡丹江',
    qiqihar: '齐齐哈尔',
    qitaihe: '七台河',
    shuangyashan: '双鸭山',
    suihua: '绥化',
    'yichun-heilongjiang': '伊春',
    bishan: '璧山',
    banan: '巴南',
    beibei: '北碚',
    dadukou: '大渡口',
    changshou: '长寿',
    chengkou: '城口',
    dazu: '大足',
    fengjie: '奉节',
    dianjiang: '垫江',
    fengdu: '丰都',
    fuling: '涪陵',
    hechuan: '合川',
    jiangjin: '江津',
    jiulongpo: '九龙坡',
    kaizhou: '开州',
    nanchuan: '南川',
    liangping: '梁平',
    nanan: '南岸',
    'pengshui-miao-and-tujia-autonomous': '彭水苗族土家族自治县',
    qianjiang: '黔江',
    shapingba: '沙坪坝',
    rongchang: '荣昌',
    qijiang: '綦江',
    'shizhu-tujia-autonomous': '石柱土家族自治县',
    tongliang: '铜梁',
    tongnan: '潼南',
    wanzhou: '万州',
    wuxi: '巫溪',
    wulong: '武隆',
    wushan: '巫山',
    'xiushan-miao-and-tujia-autonomous': '秀山土家族苗族自治县',
    yongchuan: '永川',
    'youyang-miao-and-tujia-autonomous': '酉阳土家族苗族自治县',
    yunyang: '云阳',
    yuzhong: '渝中',
    zhong: '忠县',
    changping: '昌平',
    chaoyang: '朝阳',
    daxing: '大兴',
    fangshan: '房山',
    dongcheng: '东城',
    fengtai: '丰台',
    miyun: '密云',
    huairou: '怀柔',
    haidian: '海淀',
    mentougou: '门头沟',
    pinggu: '平谷',
    shijingshan: '石景山',
    shunyi: '顺义',
    tongzhou: '通州',
    yanqing: '延庆',
    ziyang: '资阳',
    zigong: '自贡',
    yibin: '宜宾',
    yaan: '雅安',
    suining: '遂宁',
    panzhihua: '攀枝花',
    neijiang: '内江',
    'ngawa-tibetan-and-qiang-autonomous': '阿坝藏族羌族自治州',
    mianyang: '绵阳',
    nanchong: '南充',
    luzhou: '泸州',
    meishan: '眉山',
    leshan: '乐山',
    guangyuan: '广元',
    guangan: '广安',
    deyang: '德阳',
    dazhou: '达州',
    bazhong: '巴中',
    chengdu: '成都'
  },
  'zh-TW': {
    fujian: '福建',
    chongqing: '重慶',
    beijing: '北京',
    anhui: '安徽',
    zhejiang: '浙江',
    yunnan: '雲南',
    xinjiang: '新疆',
    tibet: '西藏',
    tianjin: '天津',
    sichuan: '四川',
    shanxi: '山西',
    shanghai: '上海',
    shandong: '山東',
    shaanxi: '陝西',
    qinghai: '青海',
    ningxia: '寧夏',
    macau: '澳門',
    liaoning: '遼寧',
    jilin: '吉林',
    jiangxi: '江西',
    jiangsu: '江蘇',
    'inner-mongolia': '內蒙古',
    hunan: '湖南',
    hubei: '湖北',
    henan: '河南',
    heilongjiang: '黑龍江',
    hebei: '河北',
    guangxi: '廣西',
    guizhou: '貴州',
    hainan: '海南',
    gansu: '甘肅',
    guangdong: '廣東',
    longyan: '龍岩',
    nanping: '南平',
    sanming: '三明',
    baiyin: '白銀',
    dingxi: '定西',
    jiayuguan: '嘉峪關',
    jinchang: '金昌',
    jiuquan: '酒泉',
    lanzhou: '蘭州',
    linxia: '臨夏',
    longnan: '隴南',
    pingliang: '平涼',
    qingyang: '慶陽',
    tianshui: '天水',
    'wuwei-gansu': '武威',
    zhangye: '張掖',
    chaozhou: '潮州',
    dongguan: '東莞',
    foshan: '佛山',
    guangzhou: '廣州',
    heyuan: '河源',
    huizhou: '惠州',
    jiangmen: '江門',
    jieyang: '揭陽',
    maoming: '茂名',
    meizhou: '梅州',
    shantou: '汕頭',
    qingyuan: '清遠',
    shanwei: '汕尾',
    shaoguan: '韶關',
    shenzhen: '深圳',
    yangjiang: '陽江',
    yunfu: '雲浮',
    zhuhai: '珠海',
    zhongshan: '中山',
    zhaoqing: '肇慶',
    zhanjiang: '湛江',
    guigang: '貴港',
    fangchenggang: '防城港',
    chongzuo: '崇左',
    beihai: '北海',
    baise: '百色',
    guilin: '桂林',
    hechi: '河池',
    hezhou: '賀州',
    laibin: '來賓',
    liuzhou: '柳州',
    nanning: '南寧',
    qinzhou: '欽州',
    wuzhou: '梧州',
    anshun: '安順',
    bijie: '畢節',
    guiyang: '貴陽',
    liupanshui: '六盤水',
    qiannan: '黔南',
    qiandongnan: '黔東南',
    qianxinan: '黔西南',
    tongren: '銅仁',
    zunyi: '遵義',
    danzhou: '儋州',
    sanya: '三亞',
    haikou: '海口',
    baoding: '保定',
    chengde: '承德',
    cangzhou: '滄州',
    hengshui: '衡水',
    handan: '邯鄲',
    langfang: '廊坊',
    qinhuangdao: '秦皇島',
    shijiazhuang: '石家莊',
    tangshan: '唐山',
    xingtai: '邢台',
    zhangjiakou: '張家口',
    harbin: '哈爾濱',
    daqing: '大慶',
    'daxing-anling': '大興安嶺',
    hegang: '鶴崗',
    heihe: '黑河',
    jiamusi: '佳木斯',
    jixi: '雞西',
    mudanjiang: '牡丹江',
    qiqihar: '齊齊哈爾',
    qitaihe: '七台河',
    shuangyashan: '雙鴨山',
    suihua: '綏化',
    'yichun-heilongjiang': '伊春',
    bishan: '璧山',
    banan: '巴南',
    beibei: '北碚',
    dadukou: '大渡口',
    changshou: '長壽',
    chengkou: '城口',
    dazu: '大足',
    fengjie: '奉節',
    dianjiang: '墊江',
    fengdu: '豐都',
    fuling: '涪陵',
    hechuan: '合川',
    jiangjin: '江津',
    jiulongpo: '九龍坡',
    kaizhou: '開州',
    nanchuan: '南川',
    liangping: '梁平',
    nanan: '南岸',
    'pengshui-miao-and-tujia-autonomous': '彭水苗族土家族自治縣',
    qianjiang: '黔江',
    shapingba: '沙坪壩',
    rongchang: '榮昌',
    qijiang: '綦江',
    'shizhu-tujia-autonomous': '石柱土家族自治縣',
    tongliang: '銅梁',
    tongnan: '潼南',
    wanzhou: '萬州',
    wuxi: '巫溪',
    wulong: '武隆',
    wushan: '巫山',
    'xiushan-miao-and-tujia-autonomous': '秀山土家族苗族自治縣',
    yongchuan: '永川',
    'youyang-miao-and-tujia-autonomous': '酉陽土家族苗族自治縣',
    yunyang: '雲陽',
    yuzhong: '渝中',
    zhong: '忠縣',
    changping: '昌平',
    chaoyang: '朝陽',
    daxing: '大興',
    fangshan: '房山',
    dongcheng: '東城',
    fengtai: '豐台',
    miyun: '密雲',
    huairou: '懷柔',
    haidian: '海淀',
    mentougou: '門頭溝',
    pinggu: '平谷',
    shijingshan: '石景山',
    shunyi: '順義',
    tongzhou: '通州',
    yanqing: '延慶',
    ziyang: '資陽',
    zigong: '自貢',
    yibin: '宜賓',
    yaan: '雅安',
    suining: '遂寧',
    panzhihua: '攀枝花',
    neijiang: '內江',
    'ngawa-tibetan-and-qiang-autonomous': '阿壩藏族羌族自治州',
    mianyang: '綿陽',
    nanchong: '南充',
    luzhou: '瀘州',
    meishan: '眉山',
    leshan: '樂山',
    guangyuan: '廣元',
    guangan: '廣安',
    deyang: '德陽',
    dazhou: '達州',
    bazhong: '巴中',
    chengdu: '成都'
  },
  en: {
    fujian: 'Fujian',
    chongqing: 'Chongqing',
    beijing: 'Beijing',
    anhui: 'Anhui',
    zhejiang: 'Zhejiang',
    yunnan: 'Yunnan',
    xinjiang: 'Xinjiang',
    tibet: 'Tibet',
    tianjin: 'Tianjin',
    sichuan: 'Sichuan',
    shanxi: 'Shanxi',
    shanghai: 'Shanghai',
    shandong: 'Shandong',
    shaanxi: 'Shaanxi',
    qinghai: 'Qinghai',
    ningxia: 'Ningxia',
    macau: 'Macau',
    liaoning: 'Liaoning',
    jilin: 'Jilin',
    jiangxi: 'Jiangxi',
    jiangsu: 'Jiangsu',
    'inner-mongolia': 'Inner Mongolia',
    hunan: 'Hunan',
    hubei: 'Hubei',
    henan: 'Henan',
    heilongjiang: 'Heilongjiang',
    hebei: 'Hebei',
    guangxi: 'Guangxi',
    guizhou: 'Guizhou',
    hainan: 'Hainan',
    gansu: 'Gansu',
    guangdong: 'Guangdong',
    longyan: 'Longyan',
    nanping: 'Nanping',
    sanming: 'Sanming',
    baiyin: 'Baiyin',
    dingxi: 'Dingxi',
    jiayuguan: 'Jiayuguan',
    jinchang: 'Jinchang',
    jiuquan: 'Jiuquan',
    lanzhou: 'Lanzhou',
    linxia: 'Linxia',
    longnan: 'Longnan',
    pingliang: 'Pingliang',
    qingyang: 'Qingyang',
    tianshui: 'Tianshui',
    'wuwei-gansu': 'Wuwei',
    zhangye: 'Zhangye',
    chaozhou: 'Chaozhou',
    dongguan: 'Dongguan',
    foshan: 'Foshan',
    guangzhou: 'Guangzhou',
    heyuan: 'Heyuan',
    huizhou: 'Huizhou',
    jiangmen: 'Jiangmen',
    jieyang: 'Jieyang',
    maoming: 'Maoming',
    meizhou: 'Meizhou',
    shantou: 'Shantou',
    qingyuan: 'Qingyuan',
    shanwei: 'Shanwei',
    shaoguan: 'Shaoguan',
    shenzhen: 'Shenzhen',
    yangjiang: 'Yangjiang',
    yunfu: 'Yunfu',
    zhuhai: 'Zhuhai',
    zhongshan: 'Zhongshan',
    zhaoqing: 'Zhaoqing',
    zhanjiang: 'Zhanjiang',
    guigang: 'Guigang',
    fangchenggang: 'Fangchenggang',
    chongzuo: 'Chongzuo',
    beihai: 'Beihai',
    baise: 'Baise',
    guilin: 'Guilin',
    hechi: 'Hechi',
    hezhou: 'Hezhou',
    laibin: 'Laibin',
    liuzhou: 'Liuzhou',
    nanning: 'Nanning',
    qinzhou: 'Qinzhou',
    wuzhou: 'Wuzhou',
    anshun: 'Anshun',
    bijie: 'Bijie',
    guiyang: 'Guiyang',
    liupanshui: 'Liupanshui',
    qiannan: 'Qiannan',
    qiandongnan: 'Qiandongnan',
    qianxinan: 'Qianxinan',
    tongren: 'Tongren',
    zunyi: 'Zunyi',
    danzhou: 'Danzhou',
    sanya: 'Sanya',
    haikou: 'Haikou',
    baoding: 'Baoding',
    chengde: 'Chengde',
    cangzhou: 'Cangzhou',
    hengshui: 'Hengshui',
    handan: 'Handan',
    langfang: 'Langfang',
    qinhuangdao: 'Qinhuangdao',
    shijiazhuang: 'Shijiazhuang',
    tangshan: 'Tangshan',
    xingtai: 'Xingtai',
    zhangjiakou: 'Zhangjiakou',
    harbin: 'Harbin',
    daqing: 'Daqing',
    'daxing-anling': 'Daxing Anling',
    hegang: 'Hegang',
    heihe: 'Heihe',
    jiamusi: 'Jiamusi',
    jixi: 'Jixi',
    mudanjiang: 'Mudanjiang',
    qiqihar: 'Qiqihar',
    qitaihe: 'Qitaihe',
    shuangyashan: 'Shuangyashan',
    suihua: 'Suihua',
    'yichun-heilongjiang': 'Yichun',
    bishan: 'Bishan',
    banan: "Ba'nan",
    beibei: 'Beibei',
    dadukou: 'Dadukou',
    changshou: 'Changshou',
    chengkou: 'Chengkou',
    dazu: 'Dazu',
    fengjie: 'Fengjie',
    dianjiang: 'Dianjiang',
    fengdu: 'Fengdu',
    fuling: 'Fuling',
    hechuan: 'Hechuan',
    jiangjin: 'Jiangjin',
    jiulongpo: 'Jiulongpo',
    kaizhou: 'Kaizhou',
    nanchuan: 'Nanchuan',
    liangping: 'Liangping',
    nanan: "Nan'an",
    'pengshui-miao-and-tujia-autonomous': 'Pengshui Miao and Tujia Autonomous County',
    qianjiang: 'Qianjiang',
    shapingba: 'Shapingba',
    rongchang: 'Rongchang',
    qijiang: 'Qijiang',
    'shizhu-tujia-autonomous': 'Shizhu Tujia Autonomous County',
    tongliang: 'Tongliang',
    tongnan: 'Tongnan',
    wanzhou: 'Wanzhou',
    wuxi: 'Wuxi',
    wulong: 'Wulong',
    wushan: 'Wushan',
    'xiushan-miao-and-tujia-autonomous': 'Xiushan Miao and Tujia Autonomous County',
    yongchuan: 'Yongchuan',
    'youyang-miao-and-tujia-autonomous': 'Youyang Miao and Tujia Autonomous County',
    yunyang: 'Yunyang',
    yuzhong: 'Yuzhong',
    zhong: 'Zhong County',
    changping: 'Changping',
    chaoyang: 'Chaoyang',
    daxing: 'Daxing',
    fangshan: 'Fangshan',
    dongcheng: 'Dongcheng',
    fengtai: 'Fengtai',
    miyun: 'Miyun',
    huairou: 'Huairou',
    haidian: 'Haidian',
    mentougou: 'Mentougou',
    pinggu: 'Pinggu',
    shijingshan: 'Shijingshan',
    shunyi: 'Shunyi',
    tongzhou: 'Tongzhou',
    yanqing: 'Yanqing',
    ziyang: 'Ziyang',
    zigong: 'Zigong',
    yibin: 'Yibin',
    yaan: "Ya'an",
    suining: 'Suining',
    panzhihua: 'Panzhihua',
    neijiang: 'Neijiang',
    'ngawa-tibetan-and-qiang-autonomous': 'Ngawa Tibetan and Qiang Autonomous Prefecture',
    mianyang: 'Mianyang',
    nanchong: 'Nanchong',
    luzhou: 'Luzhou',
    meishan: 'Meishan',
    leshan: 'Leshan',
    guangyuan: 'Guangyuan',
    guangan: "Guang'an",
    deyang: 'Deyang',
    dazhou: 'Dazhou',
    bazhong: 'Bazhong',
    chengdu: 'Chengdu'
  }
}

const sichuanCityIds = [
  'ziyang',
  'zigong',
  'yibin',
  'yaan',
  'suining',
  'panzhihua',
  'neijiang',
  'ngawa-tibetan-and-qiang-autonomous',
  'mianyang',
  'nanchong',
  'luzhou',
  'meishan',
  'leshan',
  'guangyuan',
  'guangan',
  'deyang',
  'dazhou',
  'bazhong',
  'chengdu'
]

const chongqingDistrictIds = [
  'bishan',
  'banan',
  'beibei',
  'dadukou',
  'changshou',
  'chengkou',
  'dazu',
  'fengjie',
  'dianjiang',
  'fengdu',
  'fuling',
  'hechuan',
  'jiangjin',
  'jiulongpo',
  'kaizhou',
  'nanchuan',
  'liangping',
  'nanan',
  'pengshui-miao-and-tujia-autonomous',
  'qianjiang',
  'shapingba',
  'rongchang',
  'qijiang',
  'shizhu-tujia-autonomous',
  'tongliang',
  'tongnan',
  'wanzhou',
  'wuxi',
  'wulong',
  'wushan',
  'xiushan-miao-and-tujia-autonomous',
  'yongchuan',
  'youyang-miao-and-tujia-autonomous',
  'yunyang',
  'yuzhong',
  'zhong'
]

const beijingDistrictIds = [
  'changping',
  'chaoyang',
  'daxing',
  'fangshan',
  'dongcheng',
  'fengtai',
  'miyun',
  'huairou',
  'haidian',
  'mentougou',
  'pinggu',
  'shijingshan',
  'shunyi',
  'tongzhou',
  'yanqing'
]

const fujianCityIds = [
  'longyan',
  'nanping',
  'sanming'
]

const gansuCityIds = [
  'baiyin',
  'dingxi',
  'jiayuguan',
  'jinchang',
  'jiuquan',
  'lanzhou',
  'linxia',
  'longnan',
  'pingliang',
  'qingyang',
  'tianshui',
  'wuwei-gansu',
  'zhangye'
]

const guangdongCityIds = [
  'chaozhou',
  'dongguan',
  'foshan',
  'guangzhou',
  'heyuan',
  'huizhou',
  'jiangmen',
  'jieyang',
  'maoming',
  'meizhou',
  'shantou',
  'qingyuan',
  'shanwei',
  'shaoguan',
  'shenzhen',
  'yangjiang',
  'yunfu',
  'zhuhai',
  'zhongshan',
  'zhaoqing',
  'zhanjiang'
]

const guangxiCityIds = [
  'guigang',
  'fangchenggang',
  'chongzuo',
  'beihai',
  'baise',
  'guilin',
  'hechi',
  'hezhou',
  'laibin',
  'liuzhou',
  'nanning',
  'qinzhou',
  'wuzhou'
]

const guizhouCityIds = [
  'anshun',
  'bijie',
  'guiyang',
  'liupanshui',
  'qiannan',
  'qiandongnan',
  'qianxinan',
  'tongren',
  'zunyi'
]

const hainanCityIds = [
  'danzhou',
  'sanya',
  'haikou'
]

const hebeiCityIds = [
  'baoding',
  'chengde',
  'cangzhou',
  'hengshui',
  'handan',
  'langfang',
  'qinhuangdao',
  'shijiazhuang',
  'tangshan',
  'xingtai',
  'zhangjiakou'
]

const heilongjiangCityIds = [
  'harbin',
  'daqing',
  'daxing-anling',
  'hegang',
  'heihe',
  'jiamusi',
  'jixi',
  'mudanjiang',
  'qiqihar',
  'qitaihe',
  'shuangyashan',
  'suihua',
  'yichun-heilongjiang'
]

const chinaRegionSubtitles = {
  'zh-CN': '中国区域 PBF',
  'zh-TW': '中國區域 PBF',
  ja: '中国地域の PBF',
  ko: '중국 지역 PBF',
  en: 'China regional PBF',
  de: 'Regionales PBF für China',
  my: 'China regional PBF',
  eo: 'Regiona PBF por Ĉinio'
}

const sichuanCitySubtitles = {
  'zh-CN': '四川市级 PBF',
  'zh-TW': '四川市級 PBF',
  ja: '四川省の市級 PBF',
  ko: '쓰촨 시급 PBF',
  en: 'Sichuan city-level PBF',
  de: 'PBF auf Stadtebene in Sichuan',
  my: 'Sichuan city-level PBF',
  eo: 'Urbonivela PBF por Siĉuano'
}

const chongqingDistrictSubtitles = {
  'zh-CN': '重庆区县 PBF',
  'zh-TW': '重慶區縣 PBF',
  ja: '重慶市の区県 PBF',
  ko: '충칭 구현 PBF',
  en: 'Chongqing district/county PBF',
  de: 'PBF auf Bezirks- und Kreisebene in Chongqing',
  my: 'Chongqing district/county PBF',
  eo: 'Distrikta kaj gubernia PBF por Ĉongĉingo'
}

const beijingDistrictSubtitles = {
  'zh-CN': '北京区级 PBF',
  'zh-TW': '北京區級 PBF',
  ja: '北京市の区級 PBF',
  ko: '베이징 구급 PBF',
  en: 'Beijing district-level PBF',
  de: 'PBF auf Bezirksebene in Peking',
  my: 'Beijing district-level PBF',
  eo: 'Distriktnivela PBF por Pekino'
}

const fujianCitySubtitles = {
  'zh-CN': '福建市级 PBF',
  'zh-TW': '福建市級 PBF',
  ja: '福建省の市級 PBF',
  ko: '푸젠 시급 PBF',
  en: 'Fujian city-level PBF',
  de: 'PBF auf Stadtebene in Fujian',
  my: 'Fujian city-level PBF',
  eo: 'Urbonivela PBF por Fuĝjano'
}

const gansuCitySubtitles = {
  'zh-CN': '甘肃市级 PBF',
  'zh-TW': '甘肅市級 PBF',
  ja: '甘粛省の市級 PBF',
  ko: '간쑤 시급 PBF',
  en: 'Gansu city-level PBF',
  de: 'PBF auf Stadtebene in Gansu',
  my: 'Gansu city-level PBF',
  eo: 'Urbonivela PBF por Gansuo'
}

const guangdongCitySubtitles = {
  'zh-CN': '广东市级 PBF',
  'zh-TW': '廣東市級 PBF',
  ja: '広東省の市級 PBF',
  ko: '광둥 시급 PBF',
  en: 'Guangdong city-level PBF',
  de: 'PBF auf Stadtebene in Guangdong',
  my: 'Guangdong city-level PBF',
  eo: 'Urbonivela PBF por Gŭangdongo'
}

const guangxiCitySubtitles = {
  'zh-CN': '广西市级 PBF',
  'zh-TW': '廣西市級 PBF',
  ja: '広西の市級 PBF',
  ko: '광시 시급 PBF',
  en: 'Guangxi city-level PBF',
  de: 'PBF auf Stadtebene in Guangxi',
  my: 'Guangxi city-level PBF',
  eo: 'Urbonivela PBF por Gŭangŝjio'
}

const guizhouCitySubtitles = {
  'zh-CN': '贵州市级 PBF',
  'zh-TW': '貴州市級 PBF',
  ja: '貴州省の市級 PBF',
  ko: '구이저우 시급 PBF',
  en: 'Guizhou city-level PBF',
  de: 'PBF auf Stadtebene in Guizhou',
  my: 'Guizhou city-level PBF',
  eo: 'Urbonivela PBF por Gŭiĝoŭo'
}

const hainanCitySubtitles = {
  'zh-CN': '海南市级 PBF',
  'zh-TW': '海南市級 PBF',
  ja: '海南省の市級 PBF',
  ko: '하이난 시급 PBF',
  en: 'Hainan city-level PBF',
  de: 'PBF auf Stadtebene in Hainan',
  my: 'Hainan city-level PBF',
  eo: 'Urbonivela PBF por Hajnano'
}

const hebeiCitySubtitles = {
  'zh-CN': '河北市级 PBF',
  'zh-TW': '河北市級 PBF',
  ja: '河北省の市級 PBF',
  ko: '허베이 시급 PBF',
  en: 'Hebei city-level PBF',
  de: 'PBF auf Stadtebene in Hebei',
  my: 'Hebei city-level PBF',
  eo: 'Urbonivela PBF por Hebejo'
}

const heilongjiangCitySubtitles = {
  'zh-CN': '黑龙江市级 PBF',
  'zh-TW': '黑龍江市級 PBF',
  ja: '黒竜江省の市級 PBF',
  ko: '헤이룽장 시급 PBF',
  en: 'Heilongjiang city-level PBF',
  de: 'PBF auf Stadtebene in Heilongjiang',
  my: 'Heilongjiang city-level PBF',
  eo: 'Urbonivela PBF por Hejlongĝjango'
}

const chinaRegions = (locale) => Object.fromEntries(
  Object.entries(chinaRegionNames[locale] || chinaRegionNames.en)
    .map(([id, name]) => [
      id,
      {
        name,
        subtitle: chongqingDistrictIds.includes(id)
          ? chongqingDistrictSubtitles[locale] || chongqingDistrictSubtitles.en
          : beijingDistrictIds.includes(id)
          ? beijingDistrictSubtitles[locale] || beijingDistrictSubtitles.en
          : sichuanCityIds.includes(id)
            ? sichuanCitySubtitles[locale] || sichuanCitySubtitles.en
            : fujianCityIds.includes(id)
              ? fujianCitySubtitles[locale] || fujianCitySubtitles.en
              : gansuCityIds.includes(id)
                ? gansuCitySubtitles[locale] || gansuCitySubtitles.en
                : guangdongCityIds.includes(id)
                  ? guangdongCitySubtitles[locale] || guangdongCitySubtitles.en
                  : guangxiCityIds.includes(id)
                    ? guangxiCitySubtitles[locale] || guangxiCitySubtitles.en
                    : guizhouCityIds.includes(id)
                      ? guizhouCitySubtitles[locale] || guizhouCitySubtitles.en
                      : hainanCityIds.includes(id)
                        ? hainanCitySubtitles[locale] || hainanCitySubtitles.en
                        : hebeiCityIds.includes(id)
                          ? hebeiCitySubtitles[locale] || hebeiCitySubtitles.en
                          : heilongjiangCityIds.includes(id)
                            ? heilongjiangCitySubtitles[locale] || heilongjiangCitySubtitles.en
                            : chinaRegionSubtitles[locale] || chinaRegionSubtitles.en
      }
    ])
)

const msgs = {
  'zh-CN': {
    language: { label: '语言' },
    site: { subtitle: 'OpenStreetMap 亚洲镜像下载站' },
    hero: {
      kicker: 'OSM.Asia Mirror',
      title: '快速、稳定、免费的全球 OSM 数据镜像',
      desc: '不限速下载，可跑满宽带；支持正常分片下载和 IDM、FDM 等多线程下载工具。',
      stats: { latest: '最新批次', format: '数据格式', speedValue: '不限速', tools: '跑满宽带' }
    },
    tags: ['不限速下载（跑满宽带）', 'IDM / FDM 兼容', '历史版本保留'],
    theme: { light: '浅色', dark: '深色' },
    download: {
      ...baseDownload,
      title: '下载区域',
      count: ' 个',
      download: '下载',
      downloadLatest: '下载最新版',
      updated: '更新于',
      helper: '优先展示最新版，同时保留可直接点击的历史版本。',
      history: '历史版本',
      regions: '地区镜像',
      empty: '该大洲暂无可用数据'
    },
    continents: { all: '全部', asia: '亚洲', oceania: '大洋洲', america: '美洲', global: '全球', other: '其他' },
    datasets: {
      china: { name: '中国', subtitle: '中国全量 PBF' },
      asia: { name: '亚洲', subtitle: '亚洲地区 PBF' },
      'australia-oceania': { name: '澳大利亚 / 大洋洲', subtitle: '澳大利亚和大洋洲 PBF' },
      planet: { name: 'Planet PBF', subtitle: '全球完整数据包' }
    },
    regions: {
      ...chinaRegions('zh-CN'),
      hongkong: { name: '香港', subtitle: '中国香港' },
      newyork: { name: '纽约州', subtitle: '美国纽约州' },
      pennsylvania: { name: '宾夕法尼亚州', subtitle: '美国宾夕法尼亚州' },
      canada: { name: '加拿大', subtitle: '北美洲国家' },
      mexico: { name: '墨西哥', subtitle: '北美洲国家' },
      greenland: { name: '格陵兰', subtitle: '北极地区岛屿' },
      antarctica: { name: '南极洲', subtitle: '南极地区' }
    },
    links: { title: '相关链接' },
    footer: {
      disclaimer: '这不是 OSM 官方网站 · 仅供镜像下载使用',
      copyright: '地图数据 © OpenStreetMap 贡献者，基于 ODbL 协议'
    }
  },
  'zh-TW': {
    language: { label: '語言' },
    site: { subtitle: 'OpenStreetMap 亞洲鏡像下載站' },
    hero: {
      kicker: 'OSM.Asia Mirror',
      title: '快速、穩定、免費的全球 OSM 資料鏡像',
      desc: '不限速下載，可跑滿頻寬；支援正常分片下載和 IDM、FDM 等多線程下載工具。',
      stats: { latest: '最新批次', format: '資料格式', speedValue: '不限速', tools: '跑滿頻寬' }
    },
    tags: ['不限速下載（跑滿頻寬）', 'IDM / FDM 相容', '保留歷史版本'],
    theme: { light: '淺色', dark: '深色' },
    download: {
      ...baseDownload,
      title: '下載區域',
      count: ' 個',
      download: '下載',
      downloadLatest: '下載最新版',
      updated: '更新於',
      helper: '優先展示最新版，同時保留可直接點擊的歷史版本。',
      history: '歷史版本',
      regions: '地區鏡像',
      empty: '此大洲暫無可用資料'
    },
    continents: { all: '全部', asia: '亞洲', oceania: '大洋洲', america: '美洲', global: '全球', other: '其他' },
    datasets: {
      china: { name: '中國', subtitle: '中國全量 PBF' },
      asia: { name: '亞洲', subtitle: '亞洲地區 PBF' },
      'australia-oceania': { name: '澳大利亞 / 大洋洲', subtitle: '澳大利亞與大洋洲 PBF' },
      planet: { name: 'Planet PBF', subtitle: '全球完整資料包' }
    },
    regions: {
      ...chinaRegions('zh-TW'),
      hongkong: { name: '香港', subtitle: '中國香港' },
      newyork: { name: '紐約州', subtitle: '美國紐約州' },
      pennsylvania: { name: '賓夕法尼亞州', subtitle: '美國賓夕法尼亞州' },
      canada: { name: '加拿大', subtitle: '北美洲國家' },
      mexico: { name: '墨西哥', subtitle: '北美洲國家' },
      greenland: { name: '格陵蘭', subtitle: '北極地區島嶼' },
      antarctica: { name: '南極洲', subtitle: '南極地區' }
    },
    links: { title: '相關連結' },
    footer: {
      disclaimer: '這不是 OSM 官方網站 · 僅供鏡像下載使用',
      copyright: '地圖資料 © OpenStreetMap 貢獻者，基於 ODbL 協議'
    }
  },
  ja: {
    language: { label: '言語' },
    site: { subtitle: 'OpenStreetMap アジアミラー' },
    hero: {
      kicker: 'OSM.Asia Mirror',
      title: '高速・安定・無料のグローバル OSM データミラー',
      desc: '速度制限なしで回線を最大限に使えます。通常の分割ダウンロードと IDM / FDM に対応します。',
      stats: { latest: '最新版', format: '形式', speedValue: '無制限', tools: '帯域を最大活用' }
    },
    tags: ['速度制限なし', 'IDM / FDM 対応', '過去版を保持'],
    theme: { light: 'ライト', dark: 'ダーク' },
    download: {
      ...baseDownload,
      title: 'ダウンロード',
      count: ' 件',
      download: '取得',
      downloadLatest: '最新版を取得',
      updated: '更新日',
      helper: '最新版を優先表示し、過去バージョンにも直接アクセスできます。',
      history: '履歴',
      regions: '地域ミラー',
      empty: 'この地域のデータはありません'
    },
    continents: { all: 'すべて', asia: 'アジア', oceania: 'オセアニア', america: 'アメリカ', global: 'グローバル', other: 'その他' },
    datasets: {
      china: { name: '中国', subtitle: '中国全体の PBF' },
      asia: { name: 'アジア', subtitle: 'アジア地域の PBF' },
      'australia-oceania': { name: 'オーストラリア / オセアニア', subtitle: 'オーストラリアとオセアニアの PBF' },
      planet: { name: 'Planet PBF', subtitle: '世界全体のデータパック' }
    },
    regions: {
      ...chinaRegions('ja'),
      hongkong: { name: '香港', subtitle: '中国香港' },
      newyork: { name: 'ニューヨーク州', subtitle: '米国ニューヨーク州' },
      pennsylvania: { name: 'ペンシルベニア州', subtitle: '米国ペンシルベニア州' },
      canada: { name: 'カナダ', subtitle: '北米の国' },
      mexico: { name: 'メキシコ', subtitle: '北米の国' },
      greenland: { name: 'グリーンランド', subtitle: '北極圏の島' },
      antarctica: { name: '南極大陸', subtitle: '南極地域' }
    },
    links: { title: 'リンク' },
    footer: {
      disclaimer: 'OSM 公式サイトではありません · ミラーダウンロード専用',
      copyright: 'Data © OpenStreetMap contributors, ODbL'
    }
  },
  ko: {
    language: { label: '언어' },
    site: { subtitle: 'OpenStreetMap 아시아 미러' },
    hero: {
      kicker: 'OSM.Asia Mirror',
      title: '빠르고 안정적인 무료 글로벌 OSM 데이터 미러',
      desc: '속도 제한 없이 회선을 최대한 활용하며, 일반 분할 다운로드와 IDM / FDM을 지원합니다.',
      stats: { latest: '최신 배치', format: '형식', speedValue: '무제한', tools: '대역폭 최대 사용' }
    },
    tags: ['속도 제한 없음', 'IDM / FDM 지원', '이전 버전 보관'],
    theme: { light: '라이트', dark: '다크' },
    download: {
      ...baseDownload,
      title: '다운로드',
      count: '개',
      download: '다운로드',
      downloadLatest: '최신 다운로드',
      updated: '업데이트',
      helper: '최신 버전을 먼저 보여주고 이전 버전 링크도 제공합니다.',
      history: '이전 버전',
      regions: '지역 미러',
      empty: '이 대륙에는 데이터가 없습니다'
    },
    continents: { all: '전체', asia: '아시아', oceania: '오세아니아', america: '아메리카', global: '글로벌', other: '기타' },
    datasets: {
      china: { name: '중국', subtitle: '중국 전체 PBF' },
      asia: { name: '아시아', subtitle: '아시아 지역 PBF' },
      'australia-oceania': { name: '호주 / 오세아니아', subtitle: '호주와 오세아니아 PBF' },
      planet: { name: 'Planet PBF', subtitle: '전 세계 전체 데이터 팩' }
    },
    regions: {
      ...chinaRegions('ko'),
      hongkong: { name: '홍콩', subtitle: '중국 홍콩' },
      newyork: { name: '뉴욕주', subtitle: '미국 뉴욕주' },
      pennsylvania: { name: '펜실베이니아주', subtitle: '미국 펜실베이니아주' },
      canada: { name: '캐나다', subtitle: '북아메리카 국가' },
      mexico: { name: '멕시코', subtitle: '북아메리카 국가' },
      greenland: { name: '그린란드', subtitle: '북극권의 섬' },
      antarctica: { name: '남극', subtitle: '남극 지역' }
    },
    links: { title: '링크' },
    footer: {
      disclaimer: 'OSM 공식 사이트가 아닙니다 · 미러 다운로드 전용',
      copyright: 'Data © OpenStreetMap contributors, ODbL'
    }
  },
  en: {
    language: { label: 'Language' },
    site: { subtitle: 'OpenStreetMap Asia Mirror' },
    hero: {
      kicker: 'OSM.Asia Mirror',
      title: 'Fast, Stable, Free Global OSM Data Mirror',
      desc: 'Unthrottled downloads that can saturate your bandwidth, with normal ranged downloads and IDM / FDM support.',
      stats: { latest: 'Latest batch', format: 'Format', speedValue: 'No throttle', tools: 'Full bandwidth' }
    },
    tags: ['Unthrottled downloads', 'IDM / FDM Compatible', 'Version History'],
    theme: { light: 'Light', dark: 'Dark' },
    download: {
      ...baseDownload,
      title: 'Downloads',
      count: ' regions',
      download: 'Download',
      downloadLatest: 'Download latest',
      updated: 'Updated',
      helper: 'Latest files are promoted first, with older versions kept one click away.',
      history: 'History',
      regions: 'Regional mirrors',
      empty: 'No data available for this continent'
    },
    continents: { all: 'All', asia: 'Asia', oceania: 'Oceania', america: 'Americas', global: 'Global', other: 'Other' },
    datasets: {
      china: { name: 'China', subtitle: 'Full China PBF' },
      asia: { name: 'Asia', subtitle: 'Asia regional PBF' },
      'australia-oceania': { name: 'Australia-Oceania', subtitle: 'Australia and Oceania PBF' },
      planet: { name: 'Planet PBF', subtitle: 'Complete global data package' }
    },
    regions: {
      ...chinaRegions('en'),
      hongkong: { name: 'Hong Kong', subtitle: 'Hong Kong, China' },
      newyork: { name: 'New York', subtitle: 'New York, United States' },
      pennsylvania: { name: 'Pennsylvania', subtitle: 'Pennsylvania, United States' },
      canada: { name: 'Canada', subtitle: 'North American country' },
      mexico: { name: 'Mexico', subtitle: 'North American country' },
      greenland: { name: 'Greenland', subtitle: 'Arctic island region' },
      antarctica: { name: 'Antarctica', subtitle: 'Antarctic region' }
    },
    links: { title: 'Links' },
    footer: {
      disclaimer: 'Not an official OSM website · Mirror downloads only',
      copyright: 'Data © OpenStreetMap contributors, ODbL'
    }
  },
  de: {
    language: { label: 'Sprache' },
    site: { subtitle: 'OpenStreetMap Asien-Spiegel' },
    hero: {
      kicker: 'OSM.Asia Mirror',
      title: 'Schneller, stabiler und kostenloser OSM-Datenspiegel',
      desc: 'Downloads ohne Drosselung, die die Bandbreite ausnutzen können, mit Range-Requests sowie IDM / FDM-Unterstützung.',
      stats: { latest: 'Aktueller Satz', format: 'Format', speedValue: 'Ungedrosselt', tools: 'Volle Bandbreite' }
    },
    tags: ['Ungedrosselte Downloads', 'IDM / FDM kompatibel', 'Versionsverlauf'],
    theme: { light: 'Hell', dark: 'Dunkel' },
    download: {
      ...baseDownload,
      title: 'Downloads',
      count: ' Regionen',
      download: 'Download',
      downloadLatest: 'Neueste Version',
      updated: 'Aktualisiert',
      helper: 'Die neueste Datei steht zuerst, ältere Versionen bleiben direkt erreichbar.',
      history: 'Verlauf',
      regions: 'Regionale Spiegel',
      empty: 'Für diesen Kontinent sind keine Daten verfügbar'
    },
    continents: { all: 'Alle', asia: 'Asien', oceania: 'Ozeanien', america: 'Amerika', global: 'Global', other: 'Andere' },
    datasets: {
      china: { name: 'China', subtitle: 'Vollständiges China-PBF' },
      asia: { name: 'Asien', subtitle: 'Regionales PBF für Asien' },
      'australia-oceania': { name: 'Australien / Ozeanien', subtitle: 'PBF für Australien und Ozeanien' },
      planet: { name: 'Planet PBF', subtitle: 'Vollständiges globales Datenpaket' }
    },
    regions: {
      ...chinaRegions('de'),
      hongkong: { name: 'Hongkong', subtitle: 'Hongkong, China' },
      newyork: { name: 'New York', subtitle: 'New York, Vereinigte Staaten' },
      pennsylvania: { name: 'Pennsylvania', subtitle: 'Pennsylvania, Vereinigte Staaten' },
      canada: { name: 'Kanada', subtitle: 'Nordamerikanischer Staat' },
      mexico: { name: 'Mexiko', subtitle: 'Nordamerikanischer Staat' },
      greenland: { name: 'Grönland', subtitle: 'Arktische Inselregion' },
      antarctica: { name: 'Antarktis', subtitle: 'Antarktische Region' }
    },
    links: { title: 'Links' },
    footer: {
      disclaimer: 'Keine offizielle OSM-Website · Nur Mirror-Downloads',
      copyright: 'Daten © OpenStreetMap contributors, ODbL'
    }
  },
  my: {
    language: { label: 'Language' },
    site: { subtitle: 'OpenStreetMap Asia Mirror' },
    hero: {
      kicker: 'OSM.Asia Mirror',
      title: 'မြန်ဆန်ပြီး တည်ငြိမ်သော OSM Data Mirror',
      desc: 'Unthrottled downloads with normal ranged requests and IDM / FDM support.',
      stats: { latest: 'နောက်ဆုံး', format: 'Format', speedValue: 'No throttle', tools: 'Full bandwidth' }
    },
    tags: ['Unthrottled downloads', 'IDM / FDM', 'Version History'],
    theme: { light: 'Light', dark: 'Dark' },
    download: {
      ...baseDownload,
      title: 'Downloads',
      count: ' ခု',
      download: 'Download',
      downloadLatest: 'Download latest',
      updated: 'Updated',
      helper: 'Latest files first, with history links kept available.',
      history: 'History',
      regions: 'Regional mirrors',
      empty: 'No data available'
    },
    continents: { all: 'All', asia: 'Asia', oceania: 'Oceania', america: 'Americas', global: 'Global', other: 'Other' },
    datasets: {
      china: { name: 'China', subtitle: 'Full China PBF' },
      asia: { name: 'Asia', subtitle: 'Asia regional PBF' },
      'australia-oceania': { name: 'Australia-Oceania', subtitle: 'Australia and Oceania PBF' },
      planet: { name: 'Planet PBF', subtitle: 'Complete global data package' }
    },
    regions: {
      ...chinaRegions('my'),
      hongkong: { name: 'Hong Kong', subtitle: 'Hong Kong, China' },
      newyork: { name: 'New York', subtitle: 'New York, United States' },
      pennsylvania: { name: 'Pennsylvania', subtitle: 'Pennsylvania, United States' },
      canada: { name: 'Canada', subtitle: 'North American country' },
      mexico: { name: 'Mexico', subtitle: 'North American country' },
      greenland: { name: 'Greenland', subtitle: 'Arctic island region' },
      antarctica: { name: 'Antarctica', subtitle: 'Antarctic region' }
    },
    links: { title: 'Links' },
    footer: {
      disclaimer: 'Not an official OSM website · Mirror downloads only',
      copyright: 'Data © OpenStreetMap contributors, ODbL'
    }
  },
  eo: {
    language: { label: 'Lingvo' },
    site: { subtitle: 'OpenStreetMap Azia Spegulo' },
    hero: {
      kicker: 'OSM.Asia Mirror',
      title: 'Rapida, Stabila, Senpaga Tutmonda OSM-Datumo Spegulo',
      desc: 'Senlimigitaj elŝutoj, kiuj povas uzi plenan bendolarĝon, kun normalaj partaj elŝutoj kaj IDM / FDM-subteno.',
      stats: { latest: 'Lasta aro', format: 'Formato', speedValue: 'Sen limo', tools: 'Plena bendolarĝo' }
    },
    tags: ['Senlimigita elŝuto', 'IDM / FDM', 'Versia historio'],
    theme: { light: 'Hela', dark: 'Malhela' },
    download: {
      ...baseDownload,
      title: 'Elŝutoj',
      count: ' regionoj',
      download: 'Elŝuti',
      downloadLatest: 'Elŝuti lastan',
      updated: 'Ĝisdatigita',
      helper: 'La plej nova dosiero aperas unue, kun rektaj ligiloj al antaŭaj versioj.',
      history: 'Historio',
      regions: 'Regionaj speguloj',
      empty: 'Neniu datumo por ĉi tiu kontinento'
    },
    continents: { all: 'Ĉiuj', asia: 'Azio', oceania: 'Oceanio', america: 'Ameriko', global: 'Tutmonda', other: 'Aliaj' },
    datasets: {
      china: { name: 'Ĉinio', subtitle: 'Plena PBF por Ĉinio' },
      asia: { name: 'Azio', subtitle: 'Regiona PBF por Azio' },
      'australia-oceania': { name: 'Aŭstralio / Oceanio', subtitle: 'PBF por Aŭstralio kaj Oceanio' },
      planet: { name: 'Planet PBF', subtitle: 'Kompleta tutmonda datumpako' }
    },
    regions: {
      ...chinaRegions('eo'),
      hongkong: { name: 'Honkongo', subtitle: 'Honkongo, Ĉinio' },
      newyork: { name: 'Novjorkio', subtitle: 'Novjorkio, Usono' },
      pennsylvania: { name: 'Pensilvanio', subtitle: 'Pensilvanio, Usono' },
      canada: { name: 'Kanado', subtitle: 'Nordamerika lando' },
      mexico: { name: 'Meksiko', subtitle: 'Nordamerika lando' },
      greenland: { name: 'Gronlando', subtitle: 'Arkta insula regiono' },
      antarctica: { name: 'Antarkto', subtitle: 'Antarkta regiono' }
    },
    links: { title: 'Ligiloj' },
    footer: {
      disclaimer: 'Ne oficiala OSM retejo · Nur spegula elŝuto',
      copyright: 'Datumoj © OpenStreetMap contributors, ODbL'
    }
  }
}

function detectLocale() {
  const saved = localStorage.getItem('locale')
  if (saved && locales.includes(saved)) return saved

  const browser = navigator.language || ''
  if (browser.startsWith('zh')) {
    return browser === 'zh-TW' || browser === 'zh-HK' || browser === 'zh-MO' ? 'zh-TW' : 'zh-CN'
  }
  if (browser.startsWith('ja')) return 'ja'
  if (browser.startsWith('ko')) return 'ko'
  if (browser.startsWith('de')) return 'de'
  if (browser.startsWith('my')) return 'my'
  if (browser.startsWith('eo')) return 'eo'
  return 'en'
}

const locale = ref(detectLocale())

export function useI18n() {
  const t = (path) => {
    const keys = path.split('.')
    let result = msgs[locale.value] || msgs.en
    for (const key of keys) {
      if (result == null) return path
      result = result[key]
    }
    return result ?? path
  }

  const currentLabel = () => labels[locale.value]

  const setLocale = (nextLocale) => {
    if (!locales.includes(nextLocale)) return
    locale.value = nextLocale
    localStorage.setItem('locale', locale.value)
  }

  const cycleLocale = () => {
    const idx = locales.indexOf(locale.value)
    const next = (idx + 1) % locales.length
    setLocale(locales[next])
  }

  return { t, locale, locales, labels, currentLabel, setLocale, cycleLocale }
}

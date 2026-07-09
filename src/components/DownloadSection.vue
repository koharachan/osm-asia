<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '../i18n.js'

const { t } = useI18n()

const continentKeys = ['all', 'asia', 'oceania', 'america', 'global', 'other']
const contentTypeKeys = ['all', 'datasets', 'regions']
const sortKeys = ['default', 'nameAsc', 'sizeDesc', 'sizeAsc']
const activeContinent = ref('all')
const activeContentType = ref('all')
const activeSort = ref('default')
const searchQuery = ref('')
const directSource = { source: '直链', sourceKind: 'direct' }

const downloads = [
  {
    id: 'asia',
    continent: 'asia',
    accent: 'border-primary',
    featured: true,
    versions: [
      {
        label: '2026-07-08',
        file: 'asia-260708.osm.pbf',
        size: '15+ GB',
        source: '123盘',
        sourceKind: '123pan',
        url: 'https://1851405391.share.123pan.cn/123pan/f9Bavd-lzPy3'
      },
      {
        label: '2026-05-22',
        file: 'asia-260522.osm.pbf',
        size: '14.7 GB',
        source: '123盘',
        sourceKind: '123pan',
        url: 'https://1851405391.share.123pan.cn/123pan/f9Bavd-Z0Oy3'
      }
    ]
  },
  {
    id: 'china',
    continent: 'asia',
    accent: 'border-lime-500',
    versions: [
      {
        label: '2026-07-08',
        file: 'china-260708.osm.pbf',
        size: '1.56 GB',
        source: '123盘',
        sourceKind: '123pan',
        url: 'https://1851405391.share.123pan.cn/123pan/f9Bavd-EU1V3'
      },
      {
        label: '2026-05-22',
        file: 'china-260522.osm.pbf',
        size: '1.2 GB',
        sizeBytes: 1520326289,
        source: '直链',
        sourceKind: 'direct',
        url: 'https://pan.qzyun.net/f/Y16DiR/china-260522.osm.pbf'
      }
    ]
  },
  {
    id: 'australia-oceania',
    continent: 'oceania',
    accent: 'border-amber-500',
    versions: [
      {
        label: '2026-05-22',
        file: 'australia-oceania-260522.osm.pbf',
        size: '1.1 GB',
        sizeBytes: 1531588866,
        source: '直链',
        sourceKind: 'direct',
        url: 'https://pan.qzyun.net/f/n094Sx/australia-oceania-260522.osm.pbf'
      }
    ]
  },
  {
    id: 'planet',
    continent: 'global',
    accent: 'border-indigo-500',
    versions: [
      {
        label: '2026-06-29',
        file: 'planet-260629.osm.pbf',
        size: '86+ GB',
        source: '123盘',
        sourceKind: '123pan',
        url: 'https://1851405391.share.123pan.cn/123pan/f9Bavd-7zPy3'
      },
      {
        label: '2026-04-27',
        file: 'planet-260427.osm.pbf',
        size: '86.23 GB',
        source: '123盘',
        sourceKind: '123pan',
        url: 'https://1851405391.share.123pan.cn/123pan/f9Bavd-riPy3'
      }
    ]
  }
]

const regions = [
  { id: 'fujian', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/x5ljtn/fujian-latest.osm.pbf', size: '39.4 MB', sizeBytes: 41352092, ...directSource }] },
  { id: 'longyan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Q5X3CX/longyan-latest.osm.pbf', size: '3 MB', sizeBytes: 3113074, ...directSource }] },
  { id: 'nanping', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/y3OmUy/nanping-latest.osm.pbf', size: '4.1 MB', sizeBytes: 4283342, ...directSource }] },
  { id: 'sanming', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/5oNOtR/sanming-latest.osm.pbf', size: '2.8 MB', sizeBytes: 2916905, ...directSource }] },
  { id: 'chongqing', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Bpl9hZ/chongqing-latest.osm.pbf', size: '29 MB', sizeBytes: 30406108, ...directSource }] },
  { id: 'bishan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/lKYPfP/bishan-latest.osm.pbf', size: '997.2 KB', sizeBytes: 1021116, ...directSource }] },
  { id: 'banan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/pQrXSe/banan-latest.osm.pbf', size: '1.6 MB', sizeBytes: 1696252, ...directSource }] },
  { id: 'beibei', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/MJKWf0/beibei-latest.osm.pbf', size: '1.2 MB', sizeBytes: 1241667, ...directSource }] },
  { id: 'dadukou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/vPaniL/dadukou-latest.osm.pbf', size: '372.9 KB', sizeBytes: 381851, ...directSource }] },
  { id: 'changshou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/0LwVsK/changshou-latest.osm.pbf', size: '883.9 KB', sizeBytes: 905107, ...directSource }] },
  { id: 'chengkou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/9og4iB/chengkou-latest.osm.pbf', size: '565.4 KB', sizeBytes: 579001, ...directSource }] },
  { id: 'dazu', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/oPeOhB/dazu-latest.osm.pbf', size: '751.4 KB', sizeBytes: 769478, ...directSource }] },
  { id: 'fengjie', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/EX2mTp/fengjie-latest.osm.pbf', size: '645.9 KB', sizeBytes: 661422, ...directSource }] },
  { id: 'dianjiang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/ZnwQFX/dianjiang-latest.osm.pbf', size: '458 KB', sizeBytes: 468969, ...directSource }] },
  { id: 'fengdu', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/mP1PIN/fengdu-latest.osm.pbf', size: '582.9 KB', sizeBytes: 596896, ...directSource }] },
  { id: 'fuling', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/W1ovCB/fuling-latest.osm.pbf', size: '1.1 MB', sizeBytes: 1175443, ...directSource }] },
  { id: 'hechuan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/jGKXuP/hechuan-latest.osm.pbf', size: '1.7 MB', sizeBytes: 1831835, ...directSource }] },
  { id: 'jiangjin', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/eKoouE/jiangjin-latest.osm.pbf', size: '1.7 MB', sizeBytes: 1821454, ...directSource }] },
  { id: 'jiulongpo', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/1MweU1/jiulongpo-latest.osm.pbf', size: '1.5 MB', sizeBytes: 1528037, ...directSource }] },
  { id: 'kaizhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/PvXru3/kaizhou-latest.osm.pbf', size: '844.1 KB', sizeBytes: 864394, ...directSource }] },
  { id: 'nanchuan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/rQeZS5/nanchuan-latest.osm.pbf', size: '717.3 KB', sizeBytes: 734511, ...directSource }] },
  { id: 'liangping', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/6oAQfD/liangping-latest.osm.pbf', size: '624.5 KB', sizeBytes: 639536, ...directSource }] },
  { id: 'nanan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/J5YVTY/nan-an-latest.osm.pbf', size: '986.2 KB', sizeBytes: 1009919, ...directSource }] },
  { id: 'pengshui-miao-and-tujia-autonomous', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/2kwEhj/pengshui-miao-and-tujia-autonomous-latest.osm.pbf', size: '540.4 KB', sizeBytes: 553398, ...directSource }] },
  { id: 'qianjiang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/wyXQuR/qianjiang-latest.osm.pbf', size: '571 KB', sizeBytes: 584726, ...directSource }] },
  { id: 'shapingba', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/XX3gsO/shapingba-latest.osm.pbf', size: '1.2 MB', sizeBytes: 1244346, ...directSource }] },
  { id: 'rongchang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/bZP3Ia/rongchang-latest.osm.pbf', size: '397.1 KB', sizeBytes: 406624, ...directSource }] },
  { id: 'qijiang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/YXM2uR/qijiang-latest.osm.pbf', size: '864.4 KB', sizeBytes: 885117, ...directSource }] },
  { id: 'shizhu-tujia-autonomous', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/nPebIx/shizhu-tujia-autonomous-latest.osm.pbf', size: '508.3 KB', sizeBytes: 520467, ...directSource }] },
  { id: 'tongliang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/44kOuo/tongliang-latest.osm.pbf', size: '1 MB', sizeBytes: 1085296, ...directSource }] },
  { id: 'tongnan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/k4e2SY/tongnan-latest.osm.pbf', size: '793.7 KB', sizeBytes: 812797, ...directSource }] },
  { id: 'wanzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/KX2WHE/wanzhou-latest.osm.pbf', size: '1.1 MB', sizeBytes: 1195061, ...directSource }] },
  { id: 'wuxi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/GnKAIp/wuxi-latest.osm.pbf', size: '469.5 KB', sizeBytes: 480775, ...directSource }] },
  { id: 'wulong', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/N2NKfa/wulong-latest.osm.pbf', size: '544.4 KB', sizeBytes: 557469, ...directSource }] },
  { id: 'wushan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/O4eai5/wushan-latest.osm.pbf', size: '615.6 KB', sizeBytes: 630344, ...directSource }] },
  { id: 'xiushan-miao-and-tujia-autonomous', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/R1nzTO/xiushan-miao-and-tujia-autonomous-latest.osm.pbf', size: '390.9 KB', sizeBytes: 400232, ...directSource }] },
  { id: 'yongchuan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/DoG3Up/yongchuan-latest.osm.pbf', size: '1019.6 KB', sizeBytes: 1044023, ...directSource }] },
  { id: 'youyang-miao-and-tujia-autonomous', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/VJ3GH1/youyang-miao-and-tujia-autonomous-latest.osm.pbf', size: '560.1 KB', sizeBytes: 573593, ...directSource }] },
  { id: 'yunyang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/x5nKHn/yunyang-latest.osm.pbf', size: '730.7 KB', sizeBytes: 748268, ...directSource }] },
  { id: 'yuzhong', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/BpemtZ/yuzhong-latest.osm.pbf', size: '463.2 KB', sizeBytes: 474314, ...directSource }] },
  { id: 'zhong', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/zXROTw/zhong-latest.osm.pbf', size: '630.3 KB', sizeBytes: 645445, ...directSource }] },
  { id: 'beijing', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/zXaGSw/beijing-latest.osm.pbf', size: '34.7 MB', sizeBytes: 36371986, ...directSource }] },
  { id: 'changping', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/L24yc5/changping-latest.osm.pbf', size: '3.7 MB', sizeBytes: 3902605, ...directSource }] },
  { id: 'chaoyang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/gEKOck/chaoyang-latest.osm.pbf', size: '3.9 MB', sizeBytes: 4108663, ...directSource }] },
  { id: 'daxing', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/3b0Jim/daxing-latest.osm.pbf', size: '2.4 MB', sizeBytes: 2468236, ...directSource }] },
  { id: 'fangshan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/lKYDcP/fangshan-latest.osm.pbf', size: '4.3 MB', sizeBytes: 4479082, ...directSource }] },
  { id: 'dongcheng', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/pQrJUe/dongcheng-latest.osm.pbf', size: '1.3 MB', sizeBytes: 1375604, ...directSource }] },
  { id: 'fengtai', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/MJKxH0/fengtai-latest.osm.pbf', size: '2.3 MB', sizeBytes: 2385235, ...directSource }] },
  { id: 'miyun', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/zXxOIw/miyun-latest.osm.pbf', size: '1.6 MB', sizeBytes: 1696192, ...directSource }] },
  { id: 'huairou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Q5w3fX/huairou-latest.osm.pbf', size: '1.8 MB', sizeBytes: 1938155, ...directSource }] },
  { id: 'haidian', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/y3Vmty/haidian-latest.osm.pbf', size: '4.2 MB', sizeBytes: 4397660, ...directSource }] },
  { id: 'mentougou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/5onOhR/mentougou-latest.osm.pbf', size: '3.3 MB', sizeBytes: 3491608, ...directSource }] },
  { id: 'pinggu', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/AKXDIe/pinggu-latest.osm.pbf', size: '728.1 KB', sizeBytes: 745612, ...directSource }] },
  { id: 'shijingshan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/aZX0uA/shijingshan-latest.osm.pbf', size: '810.7 KB', sizeBytes: 830203, ...directSource }] },
  { id: 'shunyi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/L24oT5/shunyi-latest.osm.pbf', size: '1.5 MB', sizeBytes: 1522088, ...directSource }] },
  { id: 'tongzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/gEK2hk/tongzhou-latest.osm.pbf', size: '2 MB', sizeBytes: 2126565, ...directSource }] },
  { id: 'yanqing', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/3b0eUm/yanqing-latest.osm.pbf', size: '2.2 MB', sizeBytes: 2352120, ...directSource }] },
  { id: 'xicheng', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/y35rIy/xicheng-latest.osm.pbf', size: '96.9 KB', sizeBytes: 99273, ...directSource }] },
  { id: 'anhui', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Q5P6TX/anhui-latest.osm.pbf', size: '40.8 MB', sizeBytes: 42828685, ...directSource }] },
  { id: 'xuancheng', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/lKO1cP/xuancheng-latest.osm.pbf', size: '2.8 MB', sizeBytes: 2954031, ...directSource }] },
  { id: 'wuhu', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/pQxKHe/wuhu-latest.osm.pbf', size: '2 MB', sizeBytes: 2084885, ...directSource }] },
  { id: 'tongling', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/MJwNh0/tongling-latest.osm.pbf', size: '0 B', sizeBytes: 0, ...directSource }] },
  { id: 'suzhou-anhui', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/zX34iw/suzhou-latest.osm.pbf', size: '0 B', sizeBytes: 0, ...directSource }] },
  { id: 'maanshan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Q50ksX/ma-anshan-latest.osm.pbf', size: '0 B', sizeBytes: 0, ...directSource }] },
  { id: 'luan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/y3grHy/lu-an-latest.osm.pbf', size: '0 B', sizeBytes: 0, ...directSource }] },
  { id: 'huangshan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/5owxfR/huangshan-latest.osm.pbf', size: '4.5 MB', sizeBytes: 4737153, ...directSource }] },
  { id: 'huainan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/AK4aIe/huainan-latest.osm.pbf', size: '1.7 MB', sizeBytes: 1808365, ...directSource }] },
  { id: 'huaibei', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/aZnGfA/huaibei-latest.osm.pbf', size: '772.2 KB', sizeBytes: 790748, ...directSource }] },
  { id: 'hefei', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/L2wpT5/hefei-latest.osm.pbf', size: '8 MB', sizeBytes: 8377288, ...directSource }] },
  { id: 'fuyang-anhui', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/gEnrHk/fuyang-latest.osm.pbf', size: '2.6 MB', sizeBytes: 2707732, ...directSource }] },
  { id: 'chuzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/3bGWcm/chuzhou-latest.osm.pbf', size: '3.6 MB', sizeBytes: 3801862, ...directSource }] },
  { id: 'chizhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/lKOyfP/chizhou-latest.osm.pbf', size: '1.3 MB', sizeBytes: 1311937, ...directSource }] },
  { id: 'bozhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/pQxlfe/bozhou-latest.osm.pbf', size: '1.1 MB', sizeBytes: 1169496, ...directSource }] },
  { id: 'bengbu', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/MJwmF0/bengbu-latest.osm.pbf', size: '1.1 MB', sizeBytes: 1197473, ...directSource }] },
  { id: 'anqing', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/vPA0cL/anqing-latest.osm.pbf', size: '2.5 MB', sizeBytes: 2587692, ...directSource }] },
  { id: 'zhejiang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/y3AXiy/zhejiang-latest.osm.pbf', size: '84.8 MB', sizeBytes: 88922410, ...directSource }] },
  { id: 'zhoushan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/0LpQhK/zhoushan-latest.osm.pbf', size: '2.3 MB', sizeBytes: 2385791, ...directSource }] },
  { id: 'wenzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/9oKDTB/wenzhou-latest.osm.pbf', size: '8.3 MB', sizeBytes: 8667683, ...directSource }] },
  { id: 'quzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/oPVDsB/quzhou-latest.osm.pbf', size: '9.7 MB', sizeBytes: 10131151, ...directSource }] },
  { id: 'taizhou-zhejiang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/EXGBCp/taizhou-latest.osm.pbf', size: '5.5 MB', sizeBytes: 5819106, ...directSource }] },
  { id: 'shaoxing', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Zn0afX/shaoxing-latest.osm.pbf', size: '6.1 MB', sizeBytes: 6365969, ...directSource }] },
  { id: 'ningbo', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/mPRJSN/ningbo-latest.osm.pbf', size: '11.9 MB', sizeBytes: 12426545, ...directSource }] },
  { id: 'jinhua', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/W1jDTB/jinhua-latest.osm.pbf', size: '6.9 MB', sizeBytes: 7253445, ...directSource }] },
  { id: 'jiaxing', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/jGAYfP/jiaxing-latest.osm.pbf', size: '6.2 MB', sizeBytes: 6449723, ...directSource }] },
  { id: 'lishui', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/eKBPuE/lishui-latest.osm.pbf', size: '7.7 MB', sizeBytes: 8054254, ...directSource }] },
  { id: 'hangzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/1Mojc1/hangzhou-latest.osm.pbf', size: '19.1 MB', sizeBytes: 20074801, ...directSource }] },
  { id: 'huzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/PvOwf3/huzhou-latest.osm.pbf', size: '3.4 MB', sizeBytes: 3542753, ...directSource }] },
  { id: 'yunnan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/5o5YCR/yunnan-latest.osm.pbf', size: '86.5 MB', sizeBytes: 90688521, ...directSource }] },
  { id: 'zhaotong', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/rQDni5/zhaotong-latest.osm.pbf', size: '4.2 MB', sizeBytes: 4375247, ...directSource }] },
  { id: 'yuxi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/6ovXID/yuxi-latest.osm.pbf', size: '3.4 MB', sizeBytes: 3553106, ...directSource }] },
  { id: 'xishuangbanna', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/J5Z5cY/xishuangbanna-latest.osm.pbf', size: '2.8 MB', sizeBytes: 2932793, ...directSource }] },
  { id: 'wenshan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/2kvMSj/wenshan-latest.osm.pbf', size: '4 MB', sizeBytes: 4177209, ...directSource }] },
  { id: 'qujing', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/wyQRfR/qujing-latest.osm.pbf', size: '3.9 MB', sizeBytes: 4059646, ...directSource }] },
  { id: 'puer', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/XXy3fO/pu-er-latest.osm.pbf', size: '5.5 MB', sizeBytes: 5725534, ...directSource }] },
  { id: 'dali-bai-autonomous', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/bZD2Ca/dali-bai-autonomous-latest.osm.pbf', size: '10.1 MB', sizeBytes: 10641925, ...directSource }] },
  { id: 'lincang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/YX59HR/lincang-latest.osm.pbf', size: '3.2 MB', sizeBytes: 3341964, ...directSource }] },
  { id: 'lijiang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/nP3Zix/lijiang-latest.osm.pbf', size: '6.2 MB', sizeBytes: 6524412, ...directSource }] },
  { id: 'kunming', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/44rBfo/kunming-latest.osm.pbf', size: '12.8 MB', sizeBytes: 13408012, ...directSource }] },
  { id: 'honghe', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/k4aZUY/honghe-latest.osm.pbf', size: '6.5 MB', sizeBytes: 6770265, ...directSource }] },
  { id: 'dehong', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/KXZKhE/dehong-latest.osm.pbf', size: '3.3 MB', sizeBytes: 3455158, ...directSource }] },
  { id: 'baoshan-yunnan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Gn66cp/baoshan-latest.osm.pbf', size: '3.6 MB', sizeBytes: 3816559, ...directSource }] },
  { id: 'chuxiong', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/N2nVfa/chuxiong-latest.osm.pbf', size: '4.8 MB', sizeBytes: 5039864, ...directSource }] },
  { id: 'xinjiang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/AKlxfe/xinjiang-latest.osm.pbf', size: '44.8 MB', sizeBytes: 46930142, ...directSource }] },
  { id: 'tacheng', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/O4ZgC5/tacheng-latest.osm.pbf', size: '2.9 MB', sizeBytes: 3025829, ...directSource }] },
  { id: 'ili', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/R1DriO/ili-latest.osm.pbf', size: '5.2 MB', sizeBytes: 5435894, ...directSource }] },
  { id: 'hotan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/DoZ5sp/hotan-latest.osm.pbf', size: '3.9 MB', sizeBytes: 4102439, ...directSource }] },
  { id: 'altay', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/VJznh1/altay-latest.osm.pbf', size: '3.8 MB', sizeBytes: 4006236, ...directSource }] },
  { id: 'aksu', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/x5y2In/aksu-latest.osm.pbf', size: '2.5 MB', sizeBytes: 2582525, ...directSource }] },
  { id: 'tibet', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/aZzyFA/tibet-latest.osm.pbf', size: '45.7 MB', sizeBytes: 47969234, ...directSource }] },
  { id: 'nyingchi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/BpZYfZ/nyingchi-latest.osm.pbf', size: '5.7 MB', sizeBytes: 6010170, ...directSource }] },
  { id: 'ngari', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/zXA4Uw/ngari-latest.osm.pbf', size: '5.7 MB', sizeBytes: 5980939, ...directSource }] },
  { id: 'tianjin', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/L2ayC5/tianjin-latest.osm.pbf', size: '14.1 MB', sizeBytes: 14745676, ...directSource }] },
  { id: 'xiqing', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Q5RkuX/xiqing-latest.osm.pbf', size: '1.3 MB', sizeBytes: 1329616, ...directSource }] },
  { id: 'wuqing', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/5oGxiR/wuqing-latest.osm.pbf', size: '1.2 MB', sizeBytes: 1234331, ...directSource }] },
  { id: 'ninghe', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/AKjaTe/ninghe-latest.osm.pbf', size: '1.2 MB', sizeBytes: 1254315, ...directSource }] },
  { id: 'nankai', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/aZRGsA/nankai-latest.osm.pbf', size: '565.7 KB', sizeBytes: 579317, ...directSource }] },
  { id: 'lunan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/L2YpC5/lunan-latest.osm.pbf', size: '131.4 KB', sizeBytes: 134506, ...directSource }] },
  { id: 'jizhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/gEQrCk/jizhou-latest.osm.pbf', size: '922.9 KB', sizeBytes: 945073, ...directSource }] },
  { id: 'jinnan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/3bvWIm/jinnan-latest.osm.pbf', size: '902.1 KB', sizeBytes: 923716, ...directSource }] },
  { id: 'jinghai', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/lKLyHP/jinghai-latest.osm.pbf', size: '1.1 MB', sizeBytes: 1152915, ...directSource }] },
  { id: 'hongqiao', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/pQOlCe/hongqiao-latest.osm.pbf', size: '286.4 KB', sizeBytes: 293252, ...directSource }] },
  { id: 'hexi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/MJ1mh0/hexi-latest.osm.pbf', size: '521.4 KB', sizeBytes: 533935, ...directSource }] },
  { id: 'heping', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/vPz0SL/heping-latest.osm.pbf', size: '902.2 KB', sizeBytes: 923847, ...directSource }] },
  { id: 'beichen', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/0LXQtK/beichen-latest.osm.pbf', size: '1.1 MB', sizeBytes: 1185847, ...directSource }] },
  { id: 'hebei-tianjin', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/9omDfB/hebei-latest.osm.pbf', size: '465 KB', sizeBytes: 476183, ...directSource }] },
  { id: 'hedong', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/oPlDHB/hedong-latest.osm.pbf', size: '557.2 KB', sizeBytes: 570546, ...directSource }] },
  { id: 'dongli', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/EXZBip/dongli-latest.osm.pbf', size: '1.2 MB', sizeBytes: 1237687, ...directSource }] },
  { id: 'baodi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/ZnAaFX/baodi-latest.osm.pbf', size: '961.1 KB', sizeBytes: 984152, ...directSource }] },
  { id: 'sichuan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/gELOCk/sichuan-latest.osm.pbf', size: '99 MB', sizeBytes: 103847385, ...directSource }] },
  { id: 'ziyang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/YXrvuR/ziyang-latest.osm.pbf', size: '1.6 MB', sizeBytes: 1699686, ...directSource }] },
  { id: 'zigong', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/nPLLCx/zigong-latest.osm.pbf', size: '3.3 MB', sizeBytes: 3423338, ...directSource }] },
  { id: 'yibin', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/44Gkto/yibin-latest.osm.pbf', size: '4 MB', sizeBytes: 4227600, ...directSource }] },
  { id: 'yaan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/k4KoIY/ya-an-latest.osm.pbf', size: '2.8 MB', sizeBytes: 2916644, ...directSource }] },
  { id: 'suining', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/KX4PHE/suining-latest.osm.pbf', size: '1.6 MB', sizeBytes: 1725057, ...directSource }] },
  { id: 'panzhihua', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Gn45cp/panzhihua-latest.osm.pbf', size: '1.7 MB', sizeBytes: 1783536, ...directSource }] },
  { id: 'neijiang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/N2wota/neijiang-latest.osm.pbf', size: '1.4 MB', sizeBytes: 1422495, ...directSource }] },
  { id: 'ngawa-tibetan-and-qiang-autonomous', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/O4wyS5/ngawa-tibetan-and-qiang-autonomous-latest.osm.pbf', size: '5.9 MB', sizeBytes: 6134721, ...directSource }] },
  { id: 'mianyang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/R12wFO/mianyang-latest.osm.pbf', size: '5.5 MB', sizeBytes: 5784759, ...directSource }] },
  { id: 'nanchong', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/DoEZfp/nanchong-latest.osm.pbf', size: '3.3 MB', sizeBytes: 3444117, ...directSource }] },
  { id: 'luzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/VJLah1/luzhou-latest.osm.pbf', size: '5.2 MB', sizeBytes: 5471946, ...directSource }] },
  { id: 'meishan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/x5DjSn/meishan-latest.osm.pbf', size: '2.2 MB', sizeBytes: 2271806, ...directSource }] },
  { id: 'leshan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/BpK9tZ/leshan-latest.osm.pbf', size: '2.6 MB', sizeBytes: 2690888, ...directSource }] },
  { id: 'guangyuan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/zXxGTw/guangyuan-latest.osm.pbf', size: '6.7 MB', sizeBytes: 7026585, ...directSource }] },
  { id: 'guangan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Q5w6HX/guang-an-latest.osm.pbf', size: '2.4 MB', sizeBytes: 2464247, ...directSource }] },
  { id: 'deyang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/y3VXsy/deyang-latest.osm.pbf', size: '2.4 MB', sizeBytes: 2479361, ...directSource }] },
  { id: 'dazhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/5onYtR/dazhou-latest.osm.pbf', size: '4.7 MB', sizeBytes: 4961247, ...directSource }] },
  { id: 'bazhong', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/AKXxHe/bazhong-latest.osm.pbf', size: '2.5 MB', sizeBytes: 2586952, ...directSource }] },
  { id: 'chengdu', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/aZXyfA/chengdu-latest.osm.pbf', size: '15.9 MB', sizeBytes: 16708432, ...directSource }] },
  { id: 'shanxi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/3bjJUm/shanxi-latest.osm.pbf', size: '29.3 MB', sizeBytes: 30679814, ...directSource }] },
  { id: 'shuozhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/eKkRhE/shuozhou-latest.osm.pbf', size: '1.7 MB', sizeBytes: 1770303, ...directSource }] },
  { id: 'yuncheng', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/1MD9C1/yuncheng-latest.osm.pbf', size: '2.9 MB', sizeBytes: 3045841, ...directSource }] },
  { id: 'yangquan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/PvoeF3/yangquan-latest.osm.pbf', size: '1.4 MB', sizeBytes: 1504367, ...directSource }] },
  { id: 'taiyuan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/rQplI5/taiyuan-latest.osm.pbf', size: '2.7 MB', sizeBytes: 2867343, ...directSource }] },
  { id: 'lvliang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/6oQghD/l-liang-latest.osm.pbf', size: '2.5 MB', sizeBytes: 2635327, ...directSource }] },
  { id: 'xinzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/J5XNSY/xinzhou-latest.osm.pbf', size: '3.7 MB', sizeBytes: 3897816, ...directSource }] },
  { id: 'linfen', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/2kV0hj/linfen-latest.osm.pbf', size: '3.4 MB', sizeBytes: 3549530, ...directSource }] },
  { id: 'jinzhong', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/wyeluR/jinzhong-latest.osm.pbf', size: '0 B', sizeBytes: 0, ...directSource }] },
  { id: 'jincheng', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/XXD5hO/jincheng-latest.osm.pbf', size: '2.2 MB', sizeBytes: 2326654, ...directSource }] },
  { id: 'datong', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/bZLoUa/datong-latest.osm.pbf', size: '2.5 MB', sizeBytes: 2637336, ...directSource }] },
  { id: 'changzhi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/YXVztR/changzhi-latest.osm.pbf', size: '3.4 MB', sizeBytes: 3573778, ...directSource }] },
  { id: 'shanghai', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/lKVDCP/shanghai-latest.osm.pbf', size: '24.3 MB', sizeBytes: 25528846, ...directSource }] },
  { id: 'xuhui', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/nPrVcx/xuhui-latest.osm.pbf', size: '1.2 MB', sizeBytes: 1241872, ...directSource }] },
  { id: 'putuo', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/4459Fo/putuo-latest.osm.pbf', size: '1.1 MB', sizeBytes: 1158589, ...directSource }] },
  { id: 'yangpu', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/k4ZOCY/yangpu-latest.osm.pbf', size: '991.4 KB', sizeBytes: 1015237, ...directSource }] },
  { id: 'songjiang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/KXxJtE/songjiang-latest.osm.pbf', size: '2.1 MB', sizeBytes: 2165922, ...directSource }] },
  { id: 'qingpu', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/GnOXip/qingpu-latest.osm.pbf', size: '2.3 MB', sizeBytes: 2389318, ...directSource }] },
  { id: 'jinshan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/N2Q4fa/jinshan-latest.osm.pbf', size: '1.2 MB', sizeBytes: 1232362, ...directSource }] },
  { id: 'pudong', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/O4y4I5/pudong-latest.osm.pbf', size: '6.6 MB', sizeBytes: 6927352, ...directSource }] },
  { id: 'minhang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/R1aNUO/minhang-latest.osm.pbf', size: '2.3 MB', sizeBytes: 2394600, ...directSource }] },
  { id: 'jiading', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/DoaEcp/jiading-latest.osm.pbf', size: '1.7 MB', sizeBytes: 1792299, ...directSource }] },
  { id: 'baoshan-shanghai', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/VJm3t1/baoshan-latest.osm.pbf', size: '1.2 MB', sizeBytes: 1285797, ...directSource }] },
  { id: 'huangpu', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/x5QEUn/huangpu-latest.osm.pbf', size: '942.7 KB', sizeBytes: 965352, ...directSource }] },
  { id: 'hongkou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Bp5ouZ/hongkou-latest.osm.pbf', size: '691.2 KB', sizeBytes: 707833, ...directSource }] },
  { id: 'fengxian', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/zX52iw/fengxian-latest.osm.pbf', size: '1.1 MB', sizeBytes: 1167164, ...directSource }] },
  { id: 'chongming', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Q5ArcX/chongming-latest.osm.pbf', size: '1.5 MB', sizeBytes: 1619268, ...directSource }] },
  { id: 'changning', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/y3yyTy/changning-latest.osm.pbf', size: '894.5 KB', sizeBytes: 915934, ...directSource }] },
  { id: 'shandong', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/pQeJse/shandong-latest.osm.pbf', size: '67.2 MB', sizeBytes: 70486662, ...directSource }] },
  { id: 'zibo', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/5oAwfR/zibo-latest.osm.pbf', size: '2.2 MB', sizeBytes: 2295628, ...directSource }] },
  { id: 'zaozhuang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/AKyjfe/zaozhuang-latest.osm.pbf', size: '2.1 MB', sizeBytes: 2187402, ...directSource }] },
  { id: 'taian', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/aZ6BfA/tai-an-latest.osm.pbf', size: '3.7 MB', sizeBytes: 3875241, ...directSource }] },
  { id: 'yantai', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/L2BAC5/yantai-latest.osm.pbf', size: '11.3 MB', sizeBytes: 11875997, ...directSource }] },
  { id: 'weifang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/gE9NUk/weifang-latest.osm.pbf', size: '6.2 MB', sizeBytes: 6513495, ...directSource }] },
  { id: 'weihai', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/3by1cm/weihai-latest.osm.pbf', size: '7 MB', sizeBytes: 7297217, ...directSource }] },
  { id: 'rizhao', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/lKX1CP/rizhao-latest.osm.pbf', size: '2.5 MB', sizeBytes: 2627796, ...directSource }] },
  { id: 'qingdao', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/pQ9Kfe/qingdao-latest.osm.pbf', size: '8.1 MB', sizeBytes: 8535505, ...directSource }] },
  { id: 'liaocheng', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/MJzNt0/liaocheng-latest.osm.pbf', size: '1.8 MB', sizeBytes: 1908827, ...directSource }] },
  { id: 'linyi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/vPBGcL/linyi-latest.osm.pbf', size: '6.1 MB', sizeBytes: 6435688, ...directSource }] },
  { id: 'jining', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/0LB5uK/jining-latest.osm.pbf', size: '3.2 MB', sizeBytes: 3361654, ...directSource }] },
  { id: 'jinan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/9oOJTB/jinan-latest.osm.pbf', size: '7.8 MB', sizeBytes: 8162512, ...directSource }] },
  { id: 'heze', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/oP9ysB/heze-latest.osm.pbf', size: '2.6 MB', sizeBytes: 2760550, ...directSource }] },
  { id: 'dezhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/EXLlCp/dezhou-latest.osm.pbf', size: '2.1 MB', sizeBytes: 2186374, ...directSource }] },
  { id: 'dongying', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/ZnmGfX/dongying-latest.osm.pbf', size: '1.5 MB', sizeBytes: 1528687, ...directSource }] },
  { id: 'binzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/mPWGSN/binzhou-latest.osm.pbf', size: '1.7 MB', sizeBytes: 1762377, ...directSource }] },
  { id: 'shaanxi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/MJPxF0/shaanxi-latest.osm.pbf', size: '82.6 MB', sizeBytes: 86628817, ...directSource }] },
  { id: 'qinghai', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/vPe1SL/qinghai-latest.osm.pbf', size: '30.8 MB', sizeBytes: 32285126, ...directSource }] },
  { id: 'haidong', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/XXw5FO/haidong-latest.osm.pbf', size: '2 MB', sizeBytes: 2129494, ...directSource }] },
  { id: 'xining', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/bZNoTa/xining-latest.osm.pbf', size: '1.4 MB', sizeBytes: 1422197, ...directSource }] },
  { id: 'haixi-mongol-and-tibetan-autonomous', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/YXmzhR/haixi-mongol-and-tibetan-autonomous-latest.osm.pbf', size: '4.1 MB', sizeBytes: 4291979, ...directSource }] },
  { id: 'ningxia', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/0Le3HK/ningxia-latest.osm.pbf', size: '7.9 MB', sizeBytes: 8264729, ...directSource }] },
  { id: 'zhongwei', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/nPDVSx/zhongwei-latest.osm.pbf', size: '1.4 MB', sizeBytes: 1441186, ...directSource }] },
  { id: 'wuzhong', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/44p9so/wuzhong-latest.osm.pbf', size: '1.9 MB', sizeBytes: 2003596, ...directSource }] },
  { id: 'yinchuan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/k4nOTY/yinchuan-latest.osm.pbf', size: '2.2 MB', sizeBytes: 2340150, ...directSource }] },
  { id: 'shizuishan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/KXKJsE/shizuishan-latest.osm.pbf', size: '915.5 KB', sizeBytes: 937426, ...directSource }] },
  { id: 'guyuan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/GnwXCp/guyuan-latest.osm.pbf', size: '1.9 MB', sizeBytes: 1981094, ...directSource }] },
  { id: 'macau', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/9oGNHB/macau-latest.osm.pbf', size: '2.8 MB', sizeBytes: 2943942, ...directSource }] },
  { id: 'coloane', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/N2J4ta/coloane-latest.osm.pbf', size: '367.8 KB', sizeBytes: 376621, ...directSource }] },
  { id: 'taipa', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/O4r4U5/taipa-latest.osm.pbf', size: '642.2 KB', sizeBytes: 657610, ...directSource }] },
  { id: 'liaoning', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/oPzZHB/liaoning-latest.osm.pbf', size: '26 MB', sizeBytes: 27269168, ...directSource }] },
  { id: 'benxi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/R1wNsO/benxi-latest.osm.pbf', size: '1.5 MB', sizeBytes: 1529839, ...directSource }] },
  { id: 'anshan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/DowEIp/anshan-latest.osm.pbf', size: '1.7 MB', sizeBytes: 1778687, ...directSource }] },
  { id: 'huludao', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/VJX3h1/huludao-latest.osm.pbf', size: '1.7 MB', sizeBytes: 1828624, ...directSource }] },
  { id: 'chaoyang-liaoning', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/x5LEhn/chaoyang-latest.osm.pbf', size: '1.5 MB', sizeBytes: 1603268, ...directSource }] },
  { id: 'dalian', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/BpwofZ/dalian-latest.osm.pbf', size: '6.5 MB', sizeBytes: 6769557, ...directSource }] },
  { id: 'dandong', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/zX32Cw/dandong-latest.osm.pbf', size: '2.5 MB', sizeBytes: 2672898, ...directSource }] },
  { id: 'fushun', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Q50rIX/fushun-latest.osm.pbf', size: '1.7 MB', sizeBytes: 1822938, ...directSource }] },
  { id: 'fuxin', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/y3gySy/fuxin-latest.osm.pbf', size: '898.4 KB', sizeBytes: 919957, ...directSource }] },
  { id: 'jinzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/5owwHR/jinzhou-latest.osm.pbf', size: '1.4 MB', sizeBytes: 1479441, ...directSource }] },
  { id: 'liaoyang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/AK4jHe/liaoyang-latest.osm.pbf', size: '811.8 KB', sizeBytes: 831264, ...directSource }] },
  { id: 'panjin', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/aZnBHA/panjin-latest.osm.pbf', size: '787.9 KB', sizeBytes: 806822, ...directSource }] },
  { id: 'yingkou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/L2wAc5/yingkou-latest.osm.pbf', size: '1 MB', sizeBytes: 1061775, ...directSource }] },
  { id: 'tieling', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/gEnNFk/tieling-latest.osm.pbf', size: '1.2 MB', sizeBytes: 1252895, ...directSource }] },
  { id: 'shenyang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/3bG1Im/shenyang-latest.osm.pbf', size: '3.4 MB', sizeBytes: 3585623, ...directSource }] },
  { id: 'jilin', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/EXYzUp/jilin-latest.osm.pbf', size: '25.2 MB', sizeBytes: 26469225, ...directSource }] },
  { id: 'changchun', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/0LR5HK/changchun-latest.osm.pbf', size: '5 MB', sizeBytes: 5208118, ...directSource }] },
  { id: 'baicheng', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/9oAJIB/baicheng-latest.osm.pbf', size: '1.3 MB', sizeBytes: 1383545, ...directSource }] },
  { id: 'baishan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/oP0yFB/baishan-latest.osm.pbf', size: '1.8 MB', sizeBytes: 1910739, ...directSource }] },
  { id: 'jilin-city', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/EXrlcp/jilin-latest.osm.pbf', size: '3.4 MB', sizeBytes: 3549170, ...directSource }] },
  { id: 'liaoyuan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/ZnxGuX/liaoyuan-latest.osm.pbf', size: '680 KB', sizeBytes: 696345, ...directSource }] },
  { id: 'siping', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/mP3GcN/siping-latest.osm.pbf', size: '1.1 MB', sizeBytes: 1195839, ...directSource }] },
  { id: 'songyuan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/W1R3IB/songyuan-latest.osm.pbf', size: '1.2 MB', sizeBytes: 1230370, ...directSource }] },
  { id: 'tonghua', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/jGWpSP/tonghua-latest.osm.pbf', size: '2.6 MB', sizeBytes: 2754707, ...directSource }] },
  { id: 'jiangxi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/ZnvLHX/jiangxi-latest.osm.pbf', size: '46.8 MB', sizeBytes: 49036938, ...directSource }] },
  { id: 'fuzhou-jiangxi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/y3pyFy/fuzhou-latest.osm.pbf', size: '2.9 MB', sizeBytes: 2991271, ...directSource }] },
  { id: 'ganzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/5ozwTR/ganzhou-latest.osm.pbf', size: '11.2 MB', sizeBytes: 11697856, ...directSource }] },
  { id: 'jian', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/AKGjie/ji-an-latest.osm.pbf', size: '3.7 MB', sizeBytes: 3844312, ...directSource }] },
  { id: 'nanchang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/aZaBFA/nanchang-latest.osm.pbf', size: '9 MB', sizeBytes: 9444983, ...directSource }] },
  { id: 'jingdezhen', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/L2GAT5/jingdezhen-latest.osm.pbf', size: '1.5 MB', sizeBytes: 1584203, ...directSource }] },
  { id: 'jiujiang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/gEYNuk/jiujiang-latest.osm.pbf', size: '4.5 MB', sizeBytes: 4667478, ...directSource }] },
  { id: 'shangrao', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/3bx1Cm/shangrao-latest.osm.pbf', size: '8 MB', sizeBytes: 8436795, ...directSource }] },
  { id: 'pingxiang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/lKm1tP/pingxiang-latest.osm.pbf', size: '982.6 KB', sizeBytes: 1006228, ...directSource }] },
  { id: 'yichun-jiangxi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/pQpKIe/yichun-latest.osm.pbf', size: '4 MB', sizeBytes: 4167830, ...directSource }] },
  { id: 'xinyu', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/MJnNh0/xinyu-latest.osm.pbf', size: '984.6 KB', sizeBytes: 1008280, ...directSource }] },
  { id: 'yingtan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/vPEGUL/yingtan-latest.osm.pbf', size: '1.2 MB', sizeBytes: 1224711, ...directSource }] },
  { id: 'jiangsu', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/mPxpCN/jiangsu-latest.osm.pbf', size: '74.6 MB', sizeBytes: 78266552, ...directSource }] },
  { id: 'changzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Q5rNUX/changzhou-latest.osm.pbf', size: '7.2 MB', sizeBytes: 7574239, ...directSource }] },
  { id: 'huaian', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/y3pJhy/huai-an-latest.osm.pbf', size: '2 MB', sizeBytes: 2135546, ...directSource }] },
  { id: 'lianyungang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/5ozDSR/lianyungang-latest.osm.pbf', size: '3.2 MB', sizeBytes: 3398151, ...directSource }] },
  { id: 'nanjing', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/AKGnCe/nanjing-latest.osm.pbf', size: '10.4 MB', sizeBytes: 10953484, ...directSource }] },
  { id: 'nantong', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/aZa1hA/nantong-latest.osm.pbf', size: '6.9 MB', sizeBytes: 7233313, ...directSource }] },
  { id: 'suqian', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/L2G2c5/suqian-latest.osm.pbf', size: '8.7 MB', sizeBytes: 9149446, ...directSource }] },
  { id: 'suzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/gEYLfk/suzhou-latest.osm.pbf', size: '11.5 MB', sizeBytes: 12105319, ...directSource }] },
  { id: 'taizhou-jiangsu', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/3bx0cm/taizhou-latest.osm.pbf', size: '4.2 MB', sizeBytes: 4444261, ...directSource }] },
  { id: 'wuxi-jiangsu', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/lKmesP/wuxi-latest.osm.pbf', size: '6.6 MB', sizeBytes: 6951540, ...directSource }] },
  { id: 'xuzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/pQpMTe/xuzhou-latest.osm.pbf', size: '2.8 MB', sizeBytes: 2981182, ...directSource }] },
  { id: 'yangzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/MJnju0/yangzhou-latest.osm.pbf', size: '4.4 MB', sizeBytes: 4615872, ...directSource }] },
  { id: 'yancheng', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/zXn2Cw/yancheng-latest.osm.pbf', size: '3.1 MB', sizeBytes: 3289649, ...directSource }] },
  { id: 'zhenjiang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Q5rrHX/zhenjiang-latest.osm.pbf', size: '4.9 MB', sizeBytes: 5163226, ...directSource }] },
  { id: 'inner-mongolia', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/W1vMuB/inner-mongolia-latest.osm.pbf', size: '39.5 MB', sizeBytes: 41400155, ...directSource }] },
  { id: 'alxa', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/k45AUY/alxa-latest.osm.pbf', size: '2.4 MB', sizeBytes: 2522513, ...directSource }] },
  { id: 'baotou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/KXREuE/baotou-latest.osm.pbf', size: '2.8 MB', sizeBytes: 2987389, ...directSource }] },
  { id: 'bayannur', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Gn5yUp/bayannur-latest.osm.pbf', size: '2.2 MB', sizeBytes: 2262114, ...directSource }] },
  { id: 'chifeng', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/N2xOta/chifeng-latest.osm.pbf', size: '5.4 MB', sizeBytes: 5678578, ...directSource }] },
  { id: 'hinggan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/O4BmC5/hinggan-latest.osm.pbf', size: '2 MB', sizeBytes: 2104503, ...directSource }] },
  { id: 'hohhot', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/R1yLtO/hohhot-latest.osm.pbf', size: '2.6 MB', sizeBytes: 2764331, ...directSource }] },
  { id: 'ordos', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Dozxhp/ordos-latest.osm.pbf', size: '4.7 MB', sizeBytes: 4955025, ...directSource }] },
  { id: 'tongliao', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/VJoQu1/tongliao-latest.osm.pbf', size: '2.5 MB', sizeBytes: 2665688, ...directSource }] },
  { id: 'ulanqab', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/x5wRun/ulanqab-latest.osm.pbf', size: '3.1 MB', sizeBytes: 3218002, ...directSource }] },
  { id: 'wuhai', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/BpxVuZ/wuhai-latest.osm.pbf', size: '735.1 KB', sizeBytes: 752765, ...directSource }] },
  { id: 'xilingol', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/zXnocw/xilingol-latest.osm.pbf', size: '930.4 KB', sizeBytes: 952687, ...directSource }] },
  { id: 'hunan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/jGRDSP/hunan-latest.osm.pbf', size: '47.3 MB', sizeBytes: 49559675, ...directSource }] },
  { id: 'changde', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/jGy4fP/changde-latest.osm.pbf', size: '3.1 MB', sizeBytes: 3212988, ...directSource }] },
  { id: 'changsha', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/eKVjhE/changsha-latest.osm.pbf', size: '7.6 MB', sizeBytes: 7952095, ...directSource }] },
  { id: 'hengyang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/1MK2C1/hengyang-latest.osm.pbf', size: '5.1 MB', sizeBytes: 5299830, ...directSource }] },
  { id: 'chenzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/PvznF3/chenzhou-latest.osm.pbf', size: '4.5 MB', sizeBytes: 4757617, ...directSource }] },
  { id: 'huaihua', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/rQZ4I5/huaihua-latest.osm.pbf', size: '3.4 MB', sizeBytes: 3599762, ...directSource }] },
  { id: 'loudi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/6oxlCD/loudi-latest.osm.pbf', size: '2.2 MB', sizeBytes: 2269070, ...directSource }] },
  { id: 'shaoyang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/J5OzsY/shaoyang-latest.osm.pbf', size: '2.8 MB', sizeBytes: 2931741, ...directSource }] },
  { id: 'xiangxi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/2kORUj/xiangxi-latest.osm.pbf', size: '2 MB', sizeBytes: 2094165, ...directSource }] },
  { id: 'xiangtan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/wyN5cR/xiangtan-latest.osm.pbf', size: '2.2 MB', sizeBytes: 2293146, ...directSource }] },
  { id: 'yiyang-hunan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/XXMGhO/yiyang-latest.osm.pbf', size: '3.4 MB', sizeBytes: 3565950, ...directSource }] },
  { id: 'yongzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/bZOJUa/yongzhou-latest.osm.pbf', size: '4.7 MB', sizeBytes: 4884045, ...directSource }] },
  { id: 'yueyang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/YXeptR/yueyang-latest.osm.pbf', size: '4.8 MB', sizeBytes: 5056702, ...directSource }] },
  { id: 'zhangjiajie', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/nPZ9cx/zhangjiajie-latest.osm.pbf', size: '1.7 MB', sizeBytes: 1808901, ...directSource }] },
  { id: 'zhuzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/44DNfo/zhuzhou-latest.osm.pbf', size: '2 MB', sizeBytes: 2148982, ...directSource }] },
  { id: 'hubei', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/eKeEiE/hubei-latest.osm.pbf', size: '52.1 MB', sizeBytes: 54615557, ...directSource }] },
  { id: 'enshi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/gEBLuk/enshi-latest.osm.pbf', size: '4.5 MB', sizeBytes: 4690115, ...directSource }] },
  { id: 'ezhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/3bR0Cm/ezhou-latest.osm.pbf', size: '820 KB', sizeBytes: 839635, ...directSource }] },
  { id: 'huanggang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/lKAetP/huanggang-latest.osm.pbf', size: '5.9 MB', sizeBytes: 6220719, ...directSource }] },
  { id: 'huangshi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/pQWMIe/huangshi-latest.osm.pbf', size: '0 B', sizeBytes: 0, ...directSource }] },
  { id: 'jingmen', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/MJVjs0/jingmen-latest.osm.pbf', size: '1.7 MB', sizeBytes: 1764832, ...directSource }] },
  { id: 'jingzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/vPZZTL/jingzhou-latest.osm.pbf', size: '2.1 MB', sizeBytes: 2201667, ...directSource }] },
  { id: 'shiyan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/0LKRtK/shiyan-latest.osm.pbf', size: '4.5 MB', sizeBytes: 4710916, ...directSource }] },
  { id: 'suizhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/9oQOtB/suizhou-latest.osm.pbf', size: '1.5 MB', sizeBytes: 1567366, ...directSource }] },
  { id: 'wuhan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/oPXVfB/wuhan-latest.osm.pbf', size: '12.2 MB', sizeBytes: 12840997, ...directSource }] },
  { id: 'xiangyang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/EXQZcp/xiangyang-latest.osm.pbf', size: '5.7 MB', sizeBytes: 5961607, ...directSource }] },
  { id: 'xianning', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/ZnPlsX/xianning-latest.osm.pbf', size: '1.8 MB', sizeBytes: 1913595, ...directSource }] },
  { id: 'xiaogan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/mPaQcN/xiaogan-latest.osm.pbf', size: '1.8 MB', sizeBytes: 1930452, ...directSource }] },
  { id: 'yichang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/W1gEHB/yichang-latest.osm.pbf', size: '5.1 MB', sizeBytes: 5373713, ...directSource }] },
  { id: 'hongkong', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/1Mr3t1/hong-kong-latest.osm.pbf', size: '35.5 MB', sizeBytes: 37237014, ...directSource }] },
  { id: 'hong-kong-island', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/AKVnte/hong-kong-island-latest.osm.pbf', size: '0 B', sizeBytes: 0, ...directSource }] },
  { id: 'kowloon', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/aZP1sA/kowloon-latest.osm.pbf', size: '0 B', sizeBytes: 0, ...directSource }] },
  { id: 'new-territories', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/L2D2C5/new-territories-latest.osm.pbf', size: '22.9 MB', sizeBytes: 23977803, ...directSource }] },
  { id: 'henan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/PvP6u3/henan-latest.osm.pbf', size: '45.6 MB', sizeBytes: 47779558, ...directSource }] },
  { id: 'anyang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/YX9psR/anyang-latest.osm.pbf', size: '3.1 MB', sizeBytes: 3280419, ...directSource }] },
  { id: 'hebi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/nP59Ux/hebi-latest.osm.pbf', size: '1.4 MB', sizeBytes: 1491949, ...directSource }] },
  { id: 'jiaozuo', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/44zNto/jiaozuo-latest.osm.pbf', size: '1.8 MB', sizeBytes: 1930972, ...directSource }] },
  { id: 'kaifeng', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/k4zAIY/kaifeng-latest.osm.pbf', size: '1.8 MB', sizeBytes: 1916185, ...directSource }] },
  { id: 'luohe', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/KXPEfE/luohe-latest.osm.pbf', size: '1.7 MB', sizeBytes: 1815178, ...directSource }] },
  { id: 'luoyang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/GnjySp/luoyang-latest.osm.pbf', size: '4.6 MB', sizeBytes: 4805656, ...directSource }] },
  { id: 'nanyang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/N2jOfa/nanyang-latest.osm.pbf', size: '5 MB', sizeBytes: 5207570, ...directSource }] },
  { id: 'pingdingshan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/O49mS5/pingdingshan-latest.osm.pbf', size: '2.6 MB', sizeBytes: 2735129, ...directSource }] },
  { id: 'puyang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/R19LSO/puyang-latest.osm.pbf', size: '2.5 MB', sizeBytes: 2642271, ...directSource }] },
  { id: 'sanmenxia', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Do6xFp/sanmenxia-latest.osm.pbf', size: '1.6 MB', sizeBytes: 1673549, ...directSource }] },
  { id: 'xinyang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/VJ9Qs1/xinyang-latest.osm.pbf', size: '4.6 MB', sizeBytes: 4775972, ...directSource }] },
  { id: 'shangqiu', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/x5gRsn/shangqiu-latest.osm.pbf', size: '2.9 MB', sizeBytes: 2997130, ...directSource }] },
  { id: 'xinxiang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/BpoVsZ/xinxiang-latest.osm.pbf', size: '3 MB', sizeBytes: 3158159, ...directSource }] },
  { id: 'zhengzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/zX2oCw/zhengzhou-latest.osm.pbf', size: '5.5 MB', sizeBytes: 5721712, ...directSource }] },
  { id: 'xuchang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Q5QNSX/xuchang-latest.osm.pbf', size: '1.2 MB', sizeBytes: 1281496, ...directSource }] },
  { id: 'zhoukou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/y3ZJSy/zhoukou-latest.osm.pbf', size: '1.5 MB', sizeBytes: 1610771, ...directSource }] },
  { id: 'zhumadian', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/5oVDTR/zhumadian-latest.osm.pbf', size: '0 B', sizeBytes: 0, ...directSource }] },
  { id: 'heilongjiang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/rQvPs5/heilongjiang-latest.osm.pbf', size: '34.4 MB', sizeBytes: 36038778, ...directSource }] },
  { id: 'harbin', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/mPyQUN/harbin-latest.osm.pbf', size: '8.7 MB', sizeBytes: 9141152, ...directSource }] },
  { id: 'daqing', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/W12EcB/daqing-latest.osm.pbf', size: '1.8 MB', sizeBytes: 1860886, ...directSource }] },
  { id: 'daxing-anling', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/jGB4SP/daxing-anling-latest.osm.pbf', size: '2.7 MB', sizeBytes: 2882593, ...directSource }] },
  { id: 'hegang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/eKOjIE/hegang-latest.osm.pbf', size: '700.7 KB', sizeBytes: 717514, ...directSource }] },
  { id: 'heihe', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/1MV2s1/heihe-latest.osm.pbf', size: '2 MB', sizeBytes: 2083949, ...directSource }] },
  { id: 'jiamusi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Pvrnt3/jiamusi-latest.osm.pbf', size: '2.1 MB', sizeBytes: 2208205, ...directSource }] },
  { id: 'jixi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/rQN4F5/jixi-latest.osm.pbf', size: '3.7 MB', sizeBytes: 3866832, ...directSource }] },
  { id: 'mudanjiang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/6oyliD/mudanjiang-latest.osm.pbf', size: '3.2 MB', sizeBytes: 3330547, ...directSource }] },
  { id: 'qiqihar', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/J5PzCY/qiqihar-latest.osm.pbf', size: '2.6 MB', sizeBytes: 2709086, ...directSource }] },
  { id: 'qitaihe', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/2kxRSj/qitaihe-latest.osm.pbf', size: '641.9 KB', sizeBytes: 657285, ...directSource }] },
  { id: 'shuangyashan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/wyr5CR/shuangyashan-latest.osm.pbf', size: '1.5 MB', sizeBytes: 1574397, ...directSource }] },
  { id: 'suihua', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/XXjGtO/suihua-latest.osm.pbf', size: '2.3 MB', sizeBytes: 2367883, ...directSource }] },
  { id: 'yichun-heilongjiang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/bZrJCa/yichun-latest.osm.pbf', size: '1.1 MB', sizeBytes: 1146640, ...directSource }] },
  { id: 'hebei', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/6oJVSD/hebei-latest.osm.pbf', size: '101.5 MB', sizeBytes: 106427769, ...directSource }] },
  { id: 'baoding', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/gEDLIk/baoding-latest.osm.pbf', size: '5.7 MB', sizeBytes: 6015297, ...directSource }] },
  { id: 'chengde', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/3bB0im/chengde-latest.osm.pbf', size: '5.1 MB', sizeBytes: 5390008, ...directSource }] },
  { id: 'cangzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/lKQeTP/cangzhou-latest.osm.pbf', size: '4.6 MB', sizeBytes: 4783782, ...directSource }] },
  { id: 'hengshui', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/pQ3MFe/hengshui-latest.osm.pbf', size: '2.8 MB', sizeBytes: 2907103, ...directSource }] },
  { id: 'handan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/MJjju0/handan-latest.osm.pbf', size: '4.1 MB', sizeBytes: 4271164, ...directSource }] },
  { id: 'langfang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/vPgZIL/langfang-latest.osm.pbf', size: '3.5 MB', sizeBytes: 3671757, ...directSource }] },
  { id: 'qinhuangdao', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/0LDRhK/qinhuangdao-latest.osm.pbf', size: '2.3 MB', sizeBytes: 2444298, ...directSource }] },
  { id: 'shijiazhuang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/9o3OhB/shijiazhuang-latest.osm.pbf', size: '4.2 MB', sizeBytes: 4450423, ...directSource }] },
  { id: 'tangshan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/oPAVuB/tangshan-latest.osm.pbf', size: '11.4 MB', sizeBytes: 11945020, ...directSource }] },
  { id: 'xingtai', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/EXjZIp/xingtai-latest.osm.pbf', size: '3.3 MB', sizeBytes: 3442345, ...directSource }] },
  { id: 'zhangjiakou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/ZnrltX/zhangjiakou-latest.osm.pbf', size: '8.2 MB', sizeBytes: 8650313, ...directSource }] },
  { id: 'guangxi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/J5GMtY/guangxi-latest.osm.pbf', size: '48.8 MB', sizeBytes: 51127298, ...directSource }] },
  { id: 'guigang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/O4XaI5/guigang-latest.osm.pbf', size: '1.9 MB', sizeBytes: 1967511, ...directSource }] },
  { id: 'fangchenggang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/R1jzhO/fangchenggang-latest.osm.pbf', size: '3 MB', sizeBytes: 3186004, ...directSource }] },
  { id: 'chongzuo', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Do43ip/chongzuo-latest.osm.pbf', size: '2.4 MB', sizeBytes: 2515157, ...directSource }] },
  { id: 'beihai', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/VJMGf1/beihai-latest.osm.pbf', size: '965.7 KB', sizeBytes: 988889, ...directSource }] },
  { id: 'baise', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/x5EKcn/baise-latest.osm.pbf', size: '8.8 MB', sizeBytes: 9190302, ...directSource }] },
  { id: 'guilin', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Bp0msZ/guilin-latest.osm.pbf', size: '0 B', sizeBytes: 0, ...directSource }] },
  { id: 'hechi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/zX9OIw/hechi-latest.osm.pbf', size: '0 B', sizeBytes: 0, ...directSource }] },
  { id: 'hezhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Q543sX/hezhou-latest.osm.pbf', size: '0 B', sizeBytes: 0, ...directSource }] },
  { id: 'laibin', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/y39mty/laibin-latest.osm.pbf', size: '2.2 MB', sizeBytes: 2283184, ...directSource }] },
  { id: 'liuzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/5o1OsR/liuzhou-latest.osm.pbf', size: '4.3 MB', sizeBytes: 4522357, ...directSource }] },
  { id: 'nanning', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/AK0Dte/nanning-latest.osm.pbf', size: '5.6 MB', sizeBytes: 5871604, ...directSource }] },
  { id: 'qinzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/aZW0sA/qinzhou-latest.osm.pbf', size: '2 MB', sizeBytes: 2137692, ...directSource }] },
  { id: 'wuzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/L2Qoc5/wuzhou-latest.osm.pbf', size: '2.2 MB', sizeBytes: 2341326, ...directSource }] },
  { id: 'guizhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/2krzUj/guizhou-latest.osm.pbf', size: '27 MB', sizeBytes: 28363511, ...directSource }] },
  { id: 'anshun', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/gE62Tk/anshun-latest.osm.pbf', size: '2.1 MB', sizeBytes: 2177863, ...directSource }] },
  { id: 'bijie', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/3bkeCm/bijie-latest.osm.pbf', size: '4.3 MB', sizeBytes: 4542185, ...directSource }] },
  { id: 'guiyang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/lKgPSP/guiyang-latest.osm.pbf', size: '2.8 MB', sizeBytes: 2985442, ...directSource }] },
  { id: 'liupanshui', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/pQMXhe/liupanshui-latest.osm.pbf', size: '2 MB', sizeBytes: 2121298, ...directSource }] },
  { id: 'qiannan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/MJyWf0/qiannan-latest.osm.pbf', size: '3.5 MB', sizeBytes: 3620135, ...directSource }] },
  { id: 'qiandongnan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/zXMocw/qiandongnan-latest.osm.pbf', size: '3.6 MB', sizeBytes: 3725160, ...directSource }] },
  { id: 'qianxinan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Q5mNtX/qianxinan-latest.osm.pbf', size: '2.8 MB', sizeBytes: 2943218, ...directSource }] },
  { id: 'tongren', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/y3PJhy/tongren-latest.osm.pbf', size: '2.4 MB', sizeBytes: 2556019, ...directSource }] },
  { id: 'zunyi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/5oQDIR/zunyi-latest.osm.pbf', size: '4.6 MB', sizeBytes: 4859064, ...directSource }] },
  { id: 'hainan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/wyRwcR/hainan-latest.osm.pbf', size: '9.3 MB', sizeBytes: 9769692, ...directSource }] },
  { id: 'danzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/AK3nhe/danzhou-latest.osm.pbf', size: '850.8 KB', sizeBytes: 871178, ...directSource }] },
  { id: 'sanya', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/aZk1tA/sanya-latest.osm.pbf', size: '2 MB', sizeBytes: 2084713, ...directSource }] },
  { id: 'haikou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/L2j2T5/haikou-latest.osm.pbf', size: '1.7 MB', sizeBytes: 1801074, ...directSource }] },
  { id: 'gansu', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/XXeJsO/gansu-latest.osm.pbf', size: '53.5 MB', sizeBytes: 56087805, ...directSource }] },
  { id: 'baiyin', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/AKvDTe/baiyin-latest.osm.pbf', size: '6 MB', sizeBytes: 6298566, ...directSource }] },
  { id: 'dingxi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/aZ40fA/dingxi-latest.osm.pbf', size: '4.9 MB', sizeBytes: 5190113, ...directSource }] },
  { id: 'jiayuguan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/L2eoC5/jiayuguan-latest.osm.pbf', size: '518.5 KB', sizeBytes: 530954, ...directSource }] },
  { id: 'jinchang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/gEe2tk/jinchang-latest.osm.pbf', size: '710.2 KB', sizeBytes: 727214, ...directSource }] },
  { id: 'jiuquan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/3bneim/jiuquan-latest.osm.pbf', size: '3.3 MB', sizeBytes: 3417646, ...directSource }] },
  { id: 'lanzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/lKePHP/lanzhou-latest.osm.pbf', size: '6.6 MB', sizeBytes: 6949519, ...directSource }] },
  { id: 'linxia', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/pQaXUe/linxia-latest.osm.pbf', size: '3.3 MB', sizeBytes: 3482150, ...directSource }] },
  { id: 'longnan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/MJeWH0/longnan-latest.osm.pbf', size: '7.9 MB', sizeBytes: 8295058, ...directSource }] },
  { id: 'pingliang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/vPMnCL/pingliang-latest.osm.pbf', size: '3.7 MB', sizeBytes: 3900661, ...directSource }] },
  { id: 'qingyang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/0L9VuK/qingyang-latest.osm.pbf', size: '5.1 MB', sizeBytes: 5360130, ...directSource }] },
  { id: 'tianshui', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/9ob4CB/tianshui-latest.osm.pbf', size: '5.3 MB', sizeBytes: 5550954, ...directSource }] },
  { id: 'wuwei-gansu', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/oPrOtB/wuwei-latest.osm.pbf', size: '2.3 MB', sizeBytes: 2446145, ...directSource }] },
  { id: 'zhangye', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/EXOmIp/zhangye-latest.osm.pbf', size: '2.3 MB', sizeBytes: 2385700, ...directSource }] },
  { id: 'guangdong', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/bZbZIa/guangdong-latest.osm.pbf', size: '160.4 MB', sizeBytes: 168172516, ...directSource }] },
  { id: 'chaozhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/ZnWQhX/chaozhou-latest.osm.pbf', size: '3 MB', sizeBytes: 3184763, ...directSource }] },
  { id: 'dongguan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/mPMPTN/dongguan-latest.osm.pbf', size: '6.2 MB', sizeBytes: 6505882, ...directSource }] },
  { id: 'foshan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/W1rvfB/foshan-latest.osm.pbf', size: '7.5 MB', sizeBytes: 7828464, ...directSource }] },
  { id: 'guangzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/jGlXfP/guangzhou-latest.osm.pbf', size: '18.4 MB', sizeBytes: 19331915, ...directSource }] },
  { id: 'heyuan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/eKXofE/heyuan-latest.osm.pbf', size: '2.6 MB', sizeBytes: 2736578, ...directSource }] },
  { id: 'huizhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/1Meei1/huizhou-latest.osm.pbf', size: '6.9 MB', sizeBytes: 7224270, ...directSource }] },
  { id: 'jiangmen', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Pvart3/jiangmen-latest.osm.pbf', size: '8.5 MB', sizeBytes: 8863816, ...directSource }] },
  { id: 'jieyang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/rQ0ZU5/jieyang-latest.osm.pbf', size: '2.1 MB', sizeBytes: 2235566, ...directSource }] },
  { id: 'maoming', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/6obQHD/maoming-latest.osm.pbf', size: '5.6 MB', sizeBytes: 5849224, ...directSource }] },
  { id: 'meizhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/J5BVHY/meizhou-latest.osm.pbf', size: '7.5 MB', sizeBytes: 7889290, ...directSource }] },
  { id: 'shantou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/2keEtj/shantou-latest.osm.pbf', size: '2.6 MB', sizeBytes: 2753710, ...directSource }] },
  { id: 'qingyuan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/wybQfR/qingyuan-latest.osm.pbf', size: '5.4 MB', sizeBytes: 5617947, ...directSource }] },
  { id: 'shanwei', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/XXPgtO/shanwei-latest.osm.pbf', size: '1.8 MB', sizeBytes: 1911213, ...directSource }] },
  { id: 'shaoguan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/bZ23Ca/shaoguan-latest.osm.pbf', size: '5.1 MB', sizeBytes: 5364542, ...directSource }] },
  { id: 'shenzhen', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/YXk2sR/shenzhen-latest.osm.pbf', size: '16 MB', sizeBytes: 16817737, ...directSource }] },
  { id: 'yangjiang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/nPnbTx/yangjiang-latest.osm.pbf', size: '2 MB', sizeBytes: 2069666, ...directSource }] },
  { id: 'yunfu', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/44eOFo/yunfu-latest.osm.pbf', size: '3.1 MB', sizeBytes: 3294303, ...directSource }] },
  { id: 'zhuhai', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/k4o2CY/zhuhai-latest.osm.pbf', size: '6.1 MB', sizeBytes: 6432974, ...directSource }] },
  { id: 'zhongshan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/KXzWfE/zhongshan-latest.osm.pbf', size: '3.5 MB', sizeBytes: 3657372, ...directSource }] },
  { id: 'zhaoqing', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/GnDATp/zhaoqing-latest.osm.pbf', size: '6.5 MB', sizeBytes: 6845467, ...directSource }] },
  { id: 'zhanjiang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/N25Kta/zhanjiang-latest.osm.pbf', size: '3.5 MB', sizeBytes: 3657832, ...directSource }] },
  { id: 'newyork', continent: 'america', versions: [{ label: '2026-05-12', url: 'https://pan.qzyun.net/f/lM31iP/new-york-260512.osm.pbf', size: '467.2 MB', sizeBytes: 489919136, ...directSource }] },
  { id: 'pennsylvania', continent: 'america', versions: [{ label: '2026-05-12', url: 'https://pan.qzyun.net/f/3z61cm/pennsylvania-260512.osm.pbf', size: '319.8 MB', sizeBytes: 335377699, ...directSource }] },
  { id: 'canada', continent: 'america', versions: [{ label: '2026-05-12', url: 'https://pan.qzyun.net/f/pPvKce/canada-260512.osm.pbf', size: '5.91 GB', sizeBytes: 6345934937, ...directSource }] },
  { id: 'mexico', continent: 'america', versions: [{ label: '2026-05-12', url: 'https://pan.qzyun.net/f/546DfR/mexico-260512.osm.pbf', size: '596.1 MB', sizeBytes: 625045592, ...directSource }] },
  { id: 'greenland', continent: 'america', versions: [{ label: '2026-05-12', url: 'https://pan.qzyun.net/f/yNrJTy/greenland-260512.osm.pbf', size: '24.1 MB', sizeBytes: 25260243, ...directSource }] },
  { id: 'antarctica', continent: 'other', versions: [{ label: '2026-05-12', url: 'https://pan.qzyun.net/f/wwB5UR/antarctica-260512.osm.pbf', size: '31.6 MB', sizeBytes: 33083052, ...directSource }] }
]

const latestVersion = (item) => item.versions[0]
const historyVersions = (item) => item.versions.slice(1)
const datasetName = (item) => t(`datasets.${item.id}.name`)
const datasetSubtitle = (item) => t(`datasets.${item.id}.subtitle`)
const regionName = (item) => t(`regions.${item.id}.name`)
const regionSubtitle = (item) => t(`regions.${item.id}.subtitle`)
const sourceClass = (version) => version.sourceKind === '123pan'
  ? 'bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:ring-emerald-800'
  : version.sourceKind === 'direct'
    ? 'bg-sky-50 text-sky-700 ring-sky-200 dark:bg-sky-950/50 dark:text-sky-300 dark:ring-sky-800'
  : 'bg-gray-100 text-gray-500 ring-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-700'

const normalizedSearch = computed(() => searchQuery.value.trim().toLowerCase())
const searchableVersionText = (item) => item.versions
  .flatMap((version) => [version.label, version.file, version.url, version.source])
  .filter(Boolean)
  .join(' ')
  .toLowerCase()
const matchesSearch = (item, kind) => {
  if (!normalizedSearch.value) return true

  const labels = kind === 'dataset'
    ? [datasetName(item), datasetSubtitle(item)]
    : [regionName(item), regionSubtitle(item)]

  return [
    item.id,
    item.continent,
    ...labels,
    searchableVersionText(item)
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()
    .includes(normalizedSearch.value)
}
const matchesContinent = (item) => activeContinent.value === 'all' || item.continent === activeContinent.value
const parseSizeBytes = (size) => {
  if (!size) return Number.NaN

  const match = String(size).replace('+', '').trim().match(/^([\d.]+)\s*([kmgt]?b)$/i)
  if (!match) return Number.NaN

  const units = { b: 1, kb: 1024, mb: 1024 ** 2, gb: 1024 ** 3, tb: 1024 ** 4 }
  return Number(match[1]) * units[match[2].toLowerCase()]
}
const versionSizeBytes = (version) => version.sizeBytes ?? parseSizeBytes(version.size)
const itemSizeBytes = (item) => versionSizeBytes(latestVersion(item))
const itemName = (item, kind) => kind === 'dataset' ? datasetName(item) : regionName(item)
const sortItems = (items, kind) => {
  if (activeSort.value === 'default') return items

  return [...items].sort((a, b) => {
    if (activeSort.value === 'nameAsc') {
      return itemName(a, kind).localeCompare(itemName(b, kind))
    }

    const aSize = itemSizeBytes(a)
    const bSize = itemSizeBytes(b)
    const aMissing = Number.isNaN(aSize)
    const bMissing = Number.isNaN(bSize)
    if (aMissing && bMissing) return 0
    if (aMissing) return 1
    if (bMissing) return -1

    return activeSort.value === 'sizeAsc' ? aSize - bSize : bSize - aSize
  })
}

const filteredDownloads = computed(() => {
  if (activeContentType.value === 'regions') return []
  return sortItems(downloads.filter((item) => matchesContinent(item) && matchesSearch(item, 'dataset')), 'dataset')
})

const filteredRegions = computed(() => {
  if (activeContentType.value === 'datasets') return []
  return sortItems(regions.filter((item) => matchesContinent(item) && matchesSearch(item, 'region')), 'region')
})

const totalCount = computed(() => filteredDownloads.value.length + filteredRegions.value.length)
</script>

<template>
  <section class="mb-14">
    <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-6">
      <div>
        <p class="text-sm font-semibold text-primary mb-2">{{ t('download.eyebrow') }}</p>
        <h3 class="text-2xl font-bold text-gray-950 dark:text-white">
          {{ t('download.title') }}
          <span class="ml-2 text-base font-normal text-gray-400 dark:text-gray-500">{{ totalCount }}{{ t('download.count') }}</span>
        </h3>
        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">{{ t('download.helper') }}</p>
      </div>

      <div class="inline-flex flex-wrap gap-1 rounded-xl border border-gray-200 bg-white p-1 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <button
          v-for="key in continentKeys"
          :key="key"
          @click="activeContinent = key"
          :class="[
            'px-3 py-1.5 rounded-lg text-sm font-medium transition-colors',
            activeContinent === key
              ? 'bg-gray-950 text-white dark:bg-white dark:text-gray-950'
              : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white'
          ]"
        >
          {{ t(`continents.${key}`) }}
        </button>
      </div>
    </div>

    <div class="mb-6 grid gap-3 lg:grid-cols-[1fr_auto_auto]">
      <label class="relative block">
        <span class="sr-only">{{ t('download.searchLabel') }}</span>
        <input
          v-model="searchQuery"
          type="search"
          :placeholder="t('download.searchPlaceholder')"
          class="h-11 w-full rounded-lg border border-gray-200 bg-white px-4 pr-10 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500"
        >
        <button
          v-if="searchQuery"
          type="button"
          @click="searchQuery = ''"
          :aria-label="t('download.clearSearch')"
          class="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-gray-200"
        >
          ×
        </button>
      </label>

      <div class="inline-flex flex-wrap gap-1 rounded-xl border border-gray-200 bg-white p-1 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <button
          v-for="key in contentTypeKeys"
          :key="key"
          @click="activeContentType = key"
          :class="[
            'px-3 py-1.5 rounded-lg text-sm font-medium transition-colors',
            activeContentType === key
              ? 'bg-primary text-white'
              : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white'
          ]"
        >
          {{ t(`download.typeLabels.${key}`) }}
        </button>
      </div>

      <label class="relative block">
        <span class="sr-only">{{ t('download.sortLabel') }}</span>
        <select
          v-model="activeSort"
          class="h-11 w-full rounded-lg border border-gray-200 bg-white px-3 pr-9 text-sm font-medium text-gray-700 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 lg:w-44"
        >
          <option
            v-for="key in sortKeys"
            :key="key"
            :value="key"
          >
            {{ t(`download.sortOptions.${key}`) }}
          </option>
        </select>
      </label>
    </div>

    <div v-if="filteredDownloads.length" class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
      <article
        v-for="item in filteredDownloads"
        :key="item.id"
        :class="[
          'rounded-lg border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:bg-gray-900 dark:border-gray-800',
          item.accent,
          item.featured ? 'lg:col-span-2 ring-1 ring-primary/30' : ''
        ]"
      >
        <div class="flex items-start justify-between gap-4">
          <div class="min-w-0">
            <p
              :class="[
                'inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset',
                sourceClass(latestVersion(item))
              ]"
            >
              {{ latestVersion(item).source }}
            </p>
            <h4 class="mt-1 text-xl font-bold text-gray-950 dark:text-white">{{ datasetName(item) }}</h4>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">{{ datasetSubtitle(item) }}</p>
          </div>
          <span class="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-200">
            {{ latestVersion(item).size }}
          </span>
        </div>

        <div class="mt-5 rounded-md bg-gray-50 px-3 py-2 text-sm text-gray-600 dark:bg-gray-800/70 dark:text-gray-300">
          <div class="font-medium text-gray-900 dark:text-white">{{ latestVersion(item).file }}</div>
          <div>{{ t('download.updated') }} {{ latestVersion(item).label }}</div>
        </div>

        <div class="mt-5 flex flex-wrap items-center gap-3">
          <a
            :href="latestVersion(item).url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
          >
            <span aria-hidden="true">↓</span>
            {{ t('download.downloadLatest') }}
          </a>

          <div v-if="historyVersions(item).length" class="flex flex-wrap items-center gap-2 text-sm">
            <span class="text-gray-400 dark:text-gray-500">{{ t('download.history') }}</span>
            <a
              v-for="version in historyVersions(item)"
              :key="version.file"
              :href="version.url"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded-md border border-gray-200 px-2.5 py-1 font-medium text-gray-600 transition hover:border-primary hover:text-primary dark:border-gray-700 dark:text-gray-300"
            >
              {{ version.label }}
            </a>
          </div>
        </div>
      </article>
    </div>

    <div v-if="filteredRegions.length" class="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div class="border-b border-gray-200 px-4 py-3 dark:border-gray-800">
        <h4 class="font-semibold text-gray-950 dark:text-white">{{ t('download.regions') }}</h4>
      </div>
      <div class="divide-y divide-gray-100 dark:divide-gray-800">
        <a
          v-for="item in filteredRegions"
          :key="item.id"
          :href="latestVersion(item).url"
          target="_blank"
          rel="noopener noreferrer"
          class="grid grid-cols-[1fr_auto] gap-4 px-4 py-3 transition hover:bg-gray-50 dark:hover:bg-gray-800/70"
        >
          <span>
            <span class="block text-sm font-semibold text-gray-900 dark:text-white">{{ regionName(item) }}</span>
            <span class="block text-xs text-gray-500 dark:text-gray-400">{{ regionSubtitle(item) }} · {{ t('download.updated') }} {{ latestVersion(item).label }}</span>
            <span v-if="historyVersions(item).length" class="mt-1 flex flex-wrap gap-2 text-xs">
              <span class="text-gray-400 dark:text-gray-500">{{ t('download.history') }}</span>
              <a
                v-for="version in historyVersions(item)"
                :key="version.label"
                :href="version.url"
                target="_blank"
                rel="noopener noreferrer"
                class="font-semibold text-primary hover:underline"
                @click.stop
              >
                {{ version.label }}
              </a>
            </span>
          </span>
          <span class="flex shrink-0 items-center gap-2 self-center">
            <span
              v-if="latestVersion(item).size"
              class="text-xs font-medium text-gray-500 dark:text-gray-400"
            >
              {{ latestVersion(item).size }}
            </span>
            <span
              v-if="latestVersion(item).source"
              :class="[
                'rounded-full px-2 py-0.5 text-xs font-semibold ring-1 ring-inset',
                sourceClass(latestVersion(item))
              ]"
            >
              {{ latestVersion(item).source }}
            </span>
            <span class="text-sm font-semibold text-primary">{{ t('download.download') }}</span>
          </span>
        </a>
      </div>
    </div>

    <p v-if="totalCount === 0" class="py-12 text-center text-sm text-gray-400 dark:text-gray-500">
      {{ t('download.empty') }}
    </p>
  </section>
</template>

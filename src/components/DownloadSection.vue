<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '../i18n.js'

const { t } = useI18n()

const continentKeys = ['all', 'asia', 'oceania', 'america', 'global', 'other']
const activeContinent = ref('all')
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
  { id: 'fujian', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/x5ljtn/fujian-latest.osm.pbf', ...directSource }] },
  { id: 'longyan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Q5X3CX/longyan-latest.osm.pbf', ...directSource }] },
  { id: 'nanping', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/y3OmUy/nanping-latest.osm.pbf', ...directSource }] },
  { id: 'sanming', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/5oNOtR/sanming-latest.osm.pbf', ...directSource }] },
  { id: 'chongqing', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Bpl9hZ/chongqing-latest.osm.pbf', ...directSource }] },
  { id: 'bishan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/lKYPfP/bishan-latest.osm.pbf', ...directSource }] },
  { id: 'banan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/pQrXSe/banan-latest.osm.pbf', ...directSource }] },
  { id: 'beibei', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/MJKWf0/beibei-latest.osm.pbf', ...directSource }] },
  { id: 'dadukou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/vPaniL/dadukou-latest.osm.pbf', ...directSource }] },
  { id: 'changshou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/0LwVsK/changshou-latest.osm.pbf', ...directSource }] },
  { id: 'chengkou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/9og4iB/chengkou-latest.osm.pbf', ...directSource }] },
  { id: 'dazu', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/oPeOhB/dazu-latest.osm.pbf', ...directSource }] },
  { id: 'fengjie', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/EX2mTp/fengjie-latest.osm.pbf', ...directSource }] },
  { id: 'dianjiang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/ZnwQFX/dianjiang-latest.osm.pbf', ...directSource }] },
  { id: 'fengdu', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/mP1PIN/fengdu-latest.osm.pbf', ...directSource }] },
  { id: 'fuling', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/W1ovCB/fuling-latest.osm.pbf', ...directSource }] },
  { id: 'hechuan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/jGKXuP/hechuan-latest.osm.pbf', ...directSource }] },
  { id: 'jiangjin', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/eKoouE/jiangjin-latest.osm.pbf', ...directSource }] },
  { id: 'jiulongpo', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/1MweU1/jiulongpo-latest.osm.pbf', ...directSource }] },
  { id: 'kaizhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/PvXru3/kaizhou-latest.osm.pbf', ...directSource }] },
  { id: 'nanchuan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/rQeZS5/nanchuan-latest.osm.pbf', ...directSource }] },
  { id: 'liangping', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/6oAQfD/liangping-latest.osm.pbf', ...directSource }] },
  { id: 'nanan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/J5YVTY/nan-an-latest.osm.pbf', ...directSource }] },
  { id: 'pengshui-miao-and-tujia-autonomous', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/2kwEhj/pengshui-miao-and-tujia-autonomous-latest.osm.pbf', ...directSource }] },
  { id: 'qianjiang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/wyXQuR/qianjiang-latest.osm.pbf', ...directSource }] },
  { id: 'shapingba', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/XX3gsO/shapingba-latest.osm.pbf', ...directSource }] },
  { id: 'rongchang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/bZP3Ia/rongchang-latest.osm.pbf', ...directSource }] },
  { id: 'qijiang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/YXM2uR/qijiang-latest.osm.pbf', ...directSource }] },
  { id: 'shizhu-tujia-autonomous', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/nPebIx/shizhu-tujia-autonomous-latest.osm.pbf', ...directSource }] },
  { id: 'tongliang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/44kOuo/tongliang-latest.osm.pbf', ...directSource }] },
  { id: 'tongnan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/k4e2SY/tongnan-latest.osm.pbf', ...directSource }] },
  { id: 'wanzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/KX2WHE/wanzhou-latest.osm.pbf', ...directSource }] },
  { id: 'wuxi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/GnKAIp/wuxi-latest.osm.pbf', ...directSource }] },
  { id: 'wulong', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/N2NKfa/wulong-latest.osm.pbf', ...directSource }] },
  { id: 'wushan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/O4eai5/wushan-latest.osm.pbf', ...directSource }] },
  { id: 'xiushan-miao-and-tujia-autonomous', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/R1nzTO/xiushan-miao-and-tujia-autonomous-latest.osm.pbf', ...directSource }] },
  { id: 'yongchuan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/DoG3Up/yongchuan-latest.osm.pbf', ...directSource }] },
  { id: 'youyang-miao-and-tujia-autonomous', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/VJ3GH1/youyang-miao-and-tujia-autonomous-latest.osm.pbf', ...directSource }] },
  { id: 'yunyang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/x5nKHn/yunyang-latest.osm.pbf', ...directSource }] },
  { id: 'yuzhong', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/BpemtZ/yuzhong-latest.osm.pbf', ...directSource }] },
  { id: 'zhong', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/zXROTw/zhong-latest.osm.pbf', ...directSource }] },
  { id: 'beijing', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/zXaGSw/beijing-latest.osm.pbf', ...directSource }] },
  { id: 'changping', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/L24yc5/changping-latest.osm.pbf', ...directSource }] },
  { id: 'chaoyang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/gEKOck/chaoyang-latest.osm.pbf', ...directSource }] },
  { id: 'daxing', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/3b0Jim/daxing-latest.osm.pbf', ...directSource }] },
  { id: 'fangshan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/lKYDcP/fangshan-latest.osm.pbf', ...directSource }] },
  { id: 'dongcheng', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/pQrJUe/dongcheng-latest.osm.pbf', ...directSource }] },
  { id: 'fengtai', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/MJKxH0/fengtai-latest.osm.pbf', ...directSource }] },
  { id: 'miyun', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/zXxOIw/miyun-latest.osm.pbf', ...directSource }] },
  { id: 'huairou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Q5w3fX/huairou-latest.osm.pbf', ...directSource }] },
  { id: 'haidian', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/y3Vmty/haidian-latest.osm.pbf', ...directSource }] },
  { id: 'mentougou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/5onOhR/mentougou-latest.osm.pbf', ...directSource }] },
  { id: 'pinggu', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/AKXDIe/pinggu-latest.osm.pbf', ...directSource }] },
  { id: 'shijingshan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/aZX0uA/shijingshan-latest.osm.pbf', ...directSource }] },
  { id: 'shunyi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/L24oT5/shunyi-latest.osm.pbf', ...directSource }] },
  { id: 'tongzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/gEK2hk/tongzhou-latest.osm.pbf', ...directSource }] },
  { id: 'yanqing', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/3b0eUm/yanqing-latest.osm.pbf', ...directSource }] },
  { id: 'anhui', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Q5P6TX/anhui-latest.osm.pbf', ...directSource }] },
  { id: 'zhejiang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/y3AXiy/zhejiang-latest.osm.pbf', ...directSource }] },
  { id: 'yunnan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/5o5YCR/yunnan-latest.osm.pbf', ...directSource }] },
  { id: 'xinjiang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/AKlxfe/xinjiang-latest.osm.pbf', ...directSource }] },
  { id: 'tibet', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/aZzyFA/tibet-latest.osm.pbf', ...directSource }] },
  { id: 'tianjin', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/L2ayC5/tianjin-latest.osm.pbf', ...directSource }] },
  { id: 'sichuan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/gELOCk/sichuan-latest.osm.pbf', ...directSource }] },
  { id: 'ziyang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/YXrvuR/ziyang-latest.osm.pbf', ...directSource }] },
  { id: 'zigong', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/nPLLCx/zigong-latest.osm.pbf', ...directSource }] },
  { id: 'yibin', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/44Gkto/yibin-latest.osm.pbf', ...directSource }] },
  { id: 'yaan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/k4KoIY/ya-an-latest.osm.pbf', ...directSource }] },
  { id: 'suining', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/KX4PHE/suining-latest.osm.pbf', ...directSource }] },
  { id: 'panzhihua', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Gn45cp/panzhihua-latest.osm.pbf', ...directSource }] },
  { id: 'neijiang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/N2wota/neijiang-latest.osm.pbf', ...directSource }] },
  { id: 'ngawa-tibetan-and-qiang-autonomous', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/O4wyS5/ngawa-tibetan-and-qiang-autonomous-latest.osm.pbf', ...directSource }] },
  { id: 'mianyang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/R12wFO/mianyang-latest.osm.pbf', ...directSource }] },
  { id: 'nanchong', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/DoEZfp/nanchong-latest.osm.pbf', ...directSource }] },
  { id: 'luzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/VJLah1/luzhou-latest.osm.pbf', ...directSource }] },
  { id: 'meishan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/x5DjSn/meishan-latest.osm.pbf', ...directSource }] },
  { id: 'leshan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/BpK9tZ/leshan-latest.osm.pbf', ...directSource }] },
  { id: 'guangyuan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/zXxGTw/guangyuan-latest.osm.pbf', ...directSource }] },
  { id: 'guangan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Q5w6HX/guang-an-latest.osm.pbf', ...directSource }] },
  { id: 'deyang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/y3VXsy/deyang-latest.osm.pbf', ...directSource }] },
  { id: 'dazhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/5onYtR/dazhou-latest.osm.pbf', ...directSource }] },
  { id: 'bazhong', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/AKXxHe/bazhong-latest.osm.pbf', ...directSource }] },
  { id: 'chengdu', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/aZXyfA/chengdu-latest.osm.pbf', ...directSource }] },
  { id: 'shanxi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/3bjJUm/shanxi-latest.osm.pbf', ...directSource }] },
  { id: 'shanghai', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/lKVDCP/shanghai-latest.osm.pbf', ...directSource }] },
  { id: 'shandong', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/pQeJse/shandong-latest.osm.pbf', ...directSource }] },
  { id: 'shaanxi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/MJPxF0/shaanxi-latest.osm.pbf', ...directSource }] },
  { id: 'qinghai', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/vPe1SL/qinghai-latest.osm.pbf', ...directSource }] },
  { id: 'ningxia', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/0Le3HK/ningxia-latest.osm.pbf', ...directSource }] },
  { id: 'macau', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/9oGNHB/macau-latest.osm.pbf', ...directSource }] },
  { id: 'liaoning', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/oPzZHB/liaoning-latest.osm.pbf', ...directSource }] },
  { id: 'jilin', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/EXYzUp/jilin-latest.osm.pbf', ...directSource }] },
  { id: 'jiangxi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/ZnvLHX/jiangxi-latest.osm.pbf', ...directSource }] },
  { id: 'jiangsu', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/mPxpCN/jiangsu-latest.osm.pbf', ...directSource }] },
  { id: 'inner-mongolia', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/W1vMuB/inner-mongolia-latest.osm.pbf', ...directSource }] },
  { id: 'hunan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/jGRDSP/hunan-latest.osm.pbf', ...directSource }] },
  { id: 'hubei', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/eKeEiE/hubei-latest.osm.pbf', ...directSource }] },
  { id: 'hongkong', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/1Mr3t1/hong-kong-latest.osm.pbf', ...directSource }] },
  { id: 'henan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/PvP6u3/henan-latest.osm.pbf', ...directSource }] },
  { id: 'heilongjiang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/rQvPs5/heilongjiang-latest.osm.pbf', ...directSource }] },
  { id: 'harbin', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/mPyQUN/harbin-latest.osm.pbf', ...directSource }] },
  { id: 'daqing', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/W12EcB/daqing-latest.osm.pbf', ...directSource }] },
  { id: 'daxing-anling', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/jGB4SP/daxing-anling-latest.osm.pbf', ...directSource }] },
  { id: 'hegang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/eKOjIE/hegang-latest.osm.pbf', ...directSource }] },
  { id: 'heihe', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/1MV2s1/heihe-latest.osm.pbf', ...directSource }] },
  { id: 'jiamusi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Pvrnt3/jiamusi-latest.osm.pbf', ...directSource }] },
  { id: 'jixi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/rQN4F5/jixi-latest.osm.pbf', ...directSource }] },
  { id: 'mudanjiang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/6oyliD/mudanjiang-latest.osm.pbf', ...directSource }] },
  { id: 'qiqihar', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/J5PzCY/qiqihar-latest.osm.pbf', ...directSource }] },
  { id: 'qitaihe', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/2kxRSj/qitaihe-latest.osm.pbf', ...directSource }] },
  { id: 'shuangyashan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/wyr5CR/shuangyashan-latest.osm.pbf', ...directSource }] },
  { id: 'suihua', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/XXjGtO/suihua-latest.osm.pbf', ...directSource }] },
  { id: 'yichun-heilongjiang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/bZrJCa/yichun-latest.osm.pbf', ...directSource }] },
  { id: 'hebei', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/6oJVSD/hebei-latest.osm.pbf', ...directSource }] },
  { id: 'baoding', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/gEDLIk/baoding-latest.osm.pbf', ...directSource }] },
  { id: 'chengde', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/3bB0im/chengde-latest.osm.pbf', ...directSource }] },
  { id: 'cangzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/lKQeTP/cangzhou-latest.osm.pbf', ...directSource }] },
  { id: 'hengshui', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/pQ3MFe/hengshui-latest.osm.pbf', ...directSource }] },
  { id: 'handan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/MJjju0/handan-latest.osm.pbf', ...directSource }] },
  { id: 'langfang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/vPgZIL/langfang-latest.osm.pbf', ...directSource }] },
  { id: 'qinhuangdao', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/0LDRhK/qinhuangdao-latest.osm.pbf', ...directSource }] },
  { id: 'shijiazhuang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/9o3OhB/shijiazhuang-latest.osm.pbf', ...directSource }] },
  { id: 'tangshan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/oPAVuB/tangshan-latest.osm.pbf', ...directSource }] },
  { id: 'xingtai', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/EXjZIp/xingtai-latest.osm.pbf', ...directSource }] },
  { id: 'zhangjiakou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/ZnrltX/zhangjiakou-latest.osm.pbf', ...directSource }] },
  { id: 'guangxi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/J5GMtY/guangxi-latest.osm.pbf', ...directSource }] },
  { id: 'guigang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/O4XaI5/guigang-latest.osm.pbf', ...directSource }] },
  { id: 'fangchenggang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/R1jzhO/fangchenggang-latest.osm.pbf', ...directSource }] },
  { id: 'chongzuo', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Do43ip/chongzuo-latest.osm.pbf', ...directSource }] },
  { id: 'beihai', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/VJMGf1/beihai-latest.osm.pbf', ...directSource }] },
  { id: 'baise', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/x5EKcn/baise-latest.osm.pbf', ...directSource }] },
  { id: 'guilin', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Bp0msZ/guilin-latest.osm.pbf', ...directSource }] },
  { id: 'hechi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/zX9OIw/hechi-latest.osm.pbf', ...directSource }] },
  { id: 'hezhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Q543sX/hezhou-latest.osm.pbf', ...directSource }] },
  { id: 'laibin', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/y39mty/laibin-latest.osm.pbf', ...directSource }] },
  { id: 'liuzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/5o1OsR/liuzhou-latest.osm.pbf', ...directSource }] },
  { id: 'nanning', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/AK0Dte/nanning-latest.osm.pbf', ...directSource }] },
  { id: 'qinzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/aZW0sA/qinzhou-latest.osm.pbf', ...directSource }] },
  { id: 'wuzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/L2Qoc5/wuzhou-latest.osm.pbf', ...directSource }] },
  { id: 'guizhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/2krzUj/guizhou-latest.osm.pbf', ...directSource }] },
  { id: 'anshun', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/gE62Tk/anshun-latest.osm.pbf', ...directSource }] },
  { id: 'bijie', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/3bkeCm/bijie-latest.osm.pbf', ...directSource }] },
  { id: 'guiyang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/lKgPSP/guiyang-latest.osm.pbf', ...directSource }] },
  { id: 'liupanshui', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/pQMXhe/liupanshui-latest.osm.pbf', ...directSource }] },
  { id: 'qiannan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/MJyWf0/qiannan-latest.osm.pbf', ...directSource }] },
  { id: 'qiandongnan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/zXMocw/qiandongnan-latest.osm.pbf', ...directSource }] },
  { id: 'qianxinan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Q5mNtX/qianxinan-latest.osm.pbf', ...directSource }] },
  { id: 'tongren', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/y3PJhy/tongren-latest.osm.pbf', ...directSource }] },
  { id: 'zunyi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/5oQDIR/zunyi-latest.osm.pbf', ...directSource }] },
  { id: 'hainan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/wyRwcR/hainan-latest.osm.pbf', ...directSource }] },
  { id: 'danzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/AK3nhe/danzhou-latest.osm.pbf', ...directSource }] },
  { id: 'sanya', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/aZk1tA/sanya-latest.osm.pbf', ...directSource }] },
  { id: 'haikou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/L2j2T5/haikou-latest.osm.pbf', ...directSource }] },
  { id: 'gansu', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/XXeJsO/gansu-latest.osm.pbf', ...directSource }] },
  { id: 'baiyin', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/AKvDTe/baiyin-latest.osm.pbf', ...directSource }] },
  { id: 'dingxi', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/aZ40fA/dingxi-latest.osm.pbf', ...directSource }] },
  { id: 'jiayuguan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/L2eoC5/jiayuguan-latest.osm.pbf', ...directSource }] },
  { id: 'jinchang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/gEe2tk/jinchang-latest.osm.pbf', ...directSource }] },
  { id: 'jiuquan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/3bneim/jiuquan-latest.osm.pbf', ...directSource }] },
  { id: 'lanzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/lKePHP/lanzhou-latest.osm.pbf', ...directSource }] },
  { id: 'linxia', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/pQaXUe/linxia-latest.osm.pbf', ...directSource }] },
  { id: 'longnan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/MJeWH0/longnan-latest.osm.pbf', ...directSource }] },
  { id: 'pingliang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/vPMnCL/pingliang-latest.osm.pbf', ...directSource }] },
  { id: 'qingyang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/0L9VuK/qingyang-latest.osm.pbf', ...directSource }] },
  { id: 'tianshui', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/9ob4CB/tianshui-latest.osm.pbf', ...directSource }] },
  { id: 'wuwei-gansu', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/oPrOtB/wuwei-latest.osm.pbf', ...directSource }] },
  { id: 'zhangye', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/EXOmIp/zhangye-latest.osm.pbf', ...directSource }] },
  { id: 'guangdong', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/bZbZIa/guangdong-latest.osm.pbf', ...directSource }] },
  { id: 'chaozhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/ZnWQhX/chaozhou-latest.osm.pbf', ...directSource }] },
  { id: 'dongguan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/mPMPTN/dongguan-latest.osm.pbf', ...directSource }] },
  { id: 'foshan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/W1rvfB/foshan-latest.osm.pbf', ...directSource }] },
  { id: 'guangzhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/jGlXfP/guangzhou-latest.osm.pbf', ...directSource }] },
  { id: 'heyuan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/eKXofE/heyuan-latest.osm.pbf', ...directSource }] },
  { id: 'huizhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/1Meei1/huizhou-latest.osm.pbf', ...directSource }] },
  { id: 'jiangmen', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/Pvart3/jiangmen-latest.osm.pbf', ...directSource }] },
  { id: 'jieyang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/rQ0ZU5/jieyang-latest.osm.pbf', ...directSource }] },
  { id: 'maoming', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/6obQHD/maoming-latest.osm.pbf', ...directSource }] },
  { id: 'meizhou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/J5BVHY/meizhou-latest.osm.pbf', ...directSource }] },
  { id: 'shantou', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/2keEtj/shantou-latest.osm.pbf', ...directSource }] },
  { id: 'qingyuan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/wybQfR/qingyuan-latest.osm.pbf', ...directSource }] },
  { id: 'shanwei', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/XXPgtO/shanwei-latest.osm.pbf', ...directSource }] },
  { id: 'shaoguan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/bZ23Ca/shaoguan-latest.osm.pbf', ...directSource }] },
  { id: 'shenzhen', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/YXk2sR/shenzhen-latest.osm.pbf', ...directSource }] },
  { id: 'yangjiang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/nPnbTx/yangjiang-latest.osm.pbf', ...directSource }] },
  { id: 'yunfu', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/44eOFo/yunfu-latest.osm.pbf', ...directSource }] },
  { id: 'zhuhai', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/k4o2CY/zhuhai-latest.osm.pbf', ...directSource }] },
  { id: 'zhongshan', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/KXzWfE/zhongshan-latest.osm.pbf', ...directSource }] },
  { id: 'zhaoqing', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/GnDATp/zhaoqing-latest.osm.pbf', ...directSource }] },
  { id: 'zhanjiang', continent: 'asia', versions: [{ label: 'latest', url: 'https://pan.qzyun.net/f/N25Kta/zhanjiang-latest.osm.pbf', ...directSource }] },
  { id: 'newyork', continent: 'america', versions: [{ label: '2026-05-12', url: 'https://pan.qzyun.net/f/lM31iP/new-york-260512.osm.pbf', ...directSource }] },
  { id: 'pennsylvania', continent: 'america', versions: [{ label: '2026-05-12', url: 'https://pan.qzyun.net/f/3z61cm/pennsylvania-260512.osm.pbf', ...directSource }] },
  { id: 'canada', continent: 'america', versions: [{ label: '2026-05-12', url: 'https://pan.qzyun.net/f/pPvKce/canada-260512.osm.pbf', ...directSource }] },
  { id: 'mexico', continent: 'america', versions: [{ label: '2026-05-12', url: 'https://pan.qzyun.net/f/546DfR/mexico-260512.osm.pbf', ...directSource }] },
  { id: 'greenland', continent: 'america', versions: [{ label: '2026-05-12', url: 'https://pan.qzyun.net/f/yNrJTy/greenland-260512.osm.pbf', ...directSource }] },
  { id: 'antarctica', continent: 'other', versions: [{ label: '2026-05-12', url: 'https://pan.qzyun.net/f/wwB5UR/antarctica-260512.osm.pbf', ...directSource }] }
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

const filteredDownloads = computed(() => {
  if (activeContinent.value === 'all') return downloads
  return downloads.filter((item) => item.continent === activeContinent.value)
})

const filteredRegions = computed(() => {
  if (activeContinent.value === 'all') return regions
  return regions.filter((item) => item.continent === activeContinent.value)
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

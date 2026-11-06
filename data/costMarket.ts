// /cost/ 冒頭の「公式料金から計算した相場」。
// 値はすべて checked の日に各ジムの公式サイトを開いて確認したもの（税込）。確認日を変えるときは全行を再確認する。
// 中央値・幅はこの配列から計算する（手で書かない）。low は各社の下限（同じプランで店舗・地域により差がある場合は最も安い値）。

export const COST_MARKET_CHECKED = '2026年11月6日'

export type CourseRow = {
  name: string
  sourceUrl: string
  plan: string
  low: number
  high?: number
  joinFee: number
  joinFeeLabel: string
  women: boolean
  womenLabel: string
  note?: string
}

export type MonthlyRow = {
  name: string
  sourceUrl: string
  plan: string
  low: number
  high?: number
  women: boolean
  womenLabel: string
}

export const COURSE_ROWS: CourseRow[] = [
  { name: 'HPER', sourceUrl: 'https://hper-gym.com/location/naganonanase/', plan: 'スタンダード 2ヶ月16回', low: 85800, joinFee: 11000, joinFeeLabel: '11,000円', women: false, womenLabel: '女性専用の記載なし' },
  { name: 'E9th PRIVATE GYM', sourceUrl: 'https://e9thprivategym.work/gallery_access/naganoekimae/', plan: 'スタンダード 2ヶ月', low: 148500, joinFee: 10000, joinFeeLabel: '10,000円', women: false, womenLabel: '男女共用', note: '公式は「148,500円〜」' },
  { name: 'ビーコンセプト', sourceUrl: 'https://b-concept.tokyo/course/', plan: '太ももダイエット 2ヶ月18回', low: 179685, joinFee: 0, joinFeeLabel: '0円', women: true, womenLabel: '女性専用' },
  { name: 'OUTLINE', sourceUrl: 'https://www.outline-gym.com/service', plan: 'フルサポート／通常 16回', low: 184800, high: 220000, joinFee: 0, joinFeeLabel: '0円', women: true, womenLabel: '女性専用', note: 'フルサポート（184,800円）は終了後に月2回以上・最低3ヶ月の継続が必要で、公式の費用例は計247,500円' },
  { name: 'リボーンマイセルフ', sourceUrl: 'https://www.shapes-international.co.jp/store/yokohama/', plan: 'ショートコース 2ヶ月16回', low: 202400, high: 220000, joinFee: 22000, joinFeeLabel: '22,000円', women: true, womenLabel: '女性専用', note: '横浜店 202,400円・東京店 220,000円（店舗で差）' },
  { name: 'CLUB-J', sourceUrl: 'https://clubjfit.com/plan/', plan: 'プレミアム 2ヶ月18回', low: 207000, joinFee: 33000, joinFeeLabel: '33,000円', women: false, womenLabel: '女性専用の記載なし' },
  { name: 'Lastyle', sourceUrl: 'https://www.last-style.com/ikebukuro/', plan: 'スタンダード16回', low: 211200, joinFee: 27500, joinFeeLabel: '27,500円', women: false, womenLabel: '女性専用の記載なし', note: '公式の1回単価13,200円×16回で計算。入会金は公式の半額キャンペーン表記' },
  { name: 'BEYOND', sourceUrl: 'https://beyond-gym.com/price/', plan: 'ライフプランニング 16回／2ヶ月', low: 290400, joinFee: 0, joinFeeLabel: '0円', women: false, womenLabel: '男女共用' },
]

export const MONTHLY_ROWS: MonthlyRow[] = [
  { name: 'エクササイズコーチ', sourceUrl: 'https://exercisecoach.co.jp/store/ginza/', plan: 'スタンダード（銀座店。平日日中のデイプランは14,960円）', low: 17600, women: false, womenLabel: '男女利用可' },
  { name: 'リボーンマイセルフ', sourceUrl: 'https://www.shapes-international.co.jp/store/chiba-ekimae/', plan: '30分制 フルタイム（千葉駅前店）', low: 19800, women: true, womenLabel: '女性専用' },
  { name: 'BARE FITNESS studio', sourceUrl: 'https://barefitnessstudio.com/', plan: 'ベーシック 50分（30分のライトは19,500円）', low: 27000, women: true, womenLabel: '女性専用' },
  { name: 'UNDEUX SUPERBODY', sourceUrl: 'https://www.diet-undeux.jp/price/', plan: 'スタンダード ALL会員（仙台 29,700円・銀座 34,800円）', low: 29700, high: 34800, women: true, womenLabel: '女性専用' },
  { name: 'かたぎり塾', sourceUrl: 'https://katagirijuku.jp/price', plan: '月4プラン 60分（静岡店 30,800円・飯田橋店 33,000円）', low: 30800, high: 33000, women: false, womenLabel: '男女利用可（女性専門店あり）' },
  { name: 'eviGym', sourceUrl: 'https://evigym.com/plan/', plan: '月4回プラン（東京・神奈川の店舗）', low: 38000, women: false, womenLabel: '女性専用の記載なし' },
  { name: 'AGLAIA', sourceUrl: 'https://aglaia-gym.com/', plan: '週1回／月4回', low: 50000, women: true, womenLabel: '女性専用' },
]

export function median(values: number[]): number {
  const s = [...values].sort((a, b) => a - b)
  const m = Math.floor(s.length / 2)
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2
}

export const yen = (n: number) => `${n.toLocaleString('ja-JP')}円`

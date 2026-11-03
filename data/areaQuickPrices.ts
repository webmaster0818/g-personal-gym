// エリアページ冒頭の「掲載店の料金早見表」。
// 値はすべて各ジムの公式サイトを確認日に開いて確認したもの（税込・税抜は公式の表記どおり）。
// 公式に記載がない項目は「公式に記載なし」と書く（推測で埋めない）。
// 確認日を変えるときは、全行を公式で再確認してから。

export type QuickPriceRow = {
  name: string
  sourceUrl: string
  plan: string
  joinFee: string
  trial: string
  access: string
  women: string
  facilities: string
}

export type AreaQuickPrice = {
  checked: string
  rows: QuickPriceRow[]
  note?: string
}

export const AREA_QUICK_PRICES: Record<string, AreaQuickPrice> = {
  sapporo: {
    checked: '2026年11月3日',
    rows: [
      {
        name: 'ビーコンセプト 札幌大通店',
        sourceUrl: 'https://b-concept.tokyo/clublist/sapporo-odori/',
        plan: '太ももダイエットプログラム 月額89,842円×2ヶ月（総額179,685円・税込）／トライアルプラン 4回44,000円（税込）',
        joinFee: '太ももダイエットプログラムは無料／トライアルプランは38,500円（税込・カウンセリング当日入会で無料）',
        trial: '無料カウンセリング・体験トレーニングあり（体験の料金は公式に記載なし）',
        access: '地下鉄 大通駅から徒歩5分',
        women: '女性専用・完全個室',
        facilities: '個室シャワー・着替えスペース／お子様連れ可（ベビーカー入店可）／託児所費用を1回1,000円まで補助',
      },
      {
        name: 'BEYOND 札幌ANNEX店',
        sourceUrl: 'https://beyond-gym.com/gym/gym-sapporoannex/',
        plan: '回数券10回 102,300円／ライフプランニング16回（2ヶ月・食事管理付き）290,400円（税込）',
        joinFee: '公式に記載なし',
        trial: '無料カウンセリング・体験トレーニング（初回のみ無料）',
        access: '地下鉄東西線 西11丁目駅から徒歩5分（3番出口から約3分）',
        women: '男女共用（会員の6〜7割が女性）・女性トレーナーの所属なし',
        facilities: 'シャワールーム・ロッカー・レンタルウェア／シューズ',
      },
      {
        name: '骨格調整パーソナルジムNANA 札幌店',
        sourceUrl: 'https://nana-gym.com/',
        plan: 'コース料金は公式に記載なし（分割払いは月々6,700円〜）',
        joinFee: '公式に記載なし',
        trial: '初回体験（骨格調整×トレーニング80分・カウンセリング含む／公式は「無料体験」と案内）',
        access: '札幌市中央区南2条西1丁目（最寄り駅の記載なし）',
        women: '女性専用',
        facilities: '公式に記載なし',
      },
    ],
  },
  toyama: {
    checked: '2026年11月3日',
    rows: [
      {
        name: 'BEYOND 富山店',
        sourceUrl: 'https://beyond-gym.com/gym/gym-toyama/',
        plan: '回数券10回 102,300円／ライフプランニング16回（2ヶ月・食事管理付き）290,400円／終了後の継続プラン マンスリー月2回 17,600円（税込）',
        joinFee: '公式に記載なし',
        trial: '無料カウンセリング・体験トレーニング（初回のみ無料）',
        access: '富山駅（南口）から徒歩5分',
        women: '男女共用（会員の6〜7割が女性）・女性トレーナーの所属なし',
        facilities: 'シャワールーム・ロッカー・レンタルウェア／シューズ',
      },
      {
        name: 'Paw women\'s fitness 富山店',
        sourceUrl: 'https://paw-fit.jp/toyama/lp/',
        plan: 'デイタイム会員 月6,380円／レギュラー会員 月9,680円（キャンセル待ち）／パーソナル1回50分 5,500円（税込）',
        joinFee: '入会金6,050円＋事務手数料3,630円（税込）',
        trial: 'パーソナルの各コースに初回カウンセリング（15〜20分）付き（体験の記載なし）',
        access: '富山市鍋田（無料駐車場15台・駐輪場あり）',
        women: '女性専用（24時間営業）',
        facilities: 'シャワー・更衣室・パウダールーム・鍵付きロッカー',
      },
      {
        name: 'subrina（サブリナ）',
        sourceUrl: 'https://subrina-gym.com/',
        plan: 'パーソナル 月4回 33,000円／月8回 61,600円／1回券 8,800円（税込）',
        joinFee: '入会金・事務手数料 5,500円（税込）',
        trial: 'Web・LINEで予約・相談（体験の料金は公式に記載なし）',
        access: '富山市二口町一丁目（最寄り駅の記載なし）',
        women: '女性専用・女性トレーナーが指導',
        facilities: '公式に記載なし',
      },
      {
        name: 'ゆめたかトレーニングジム',
        sourceUrl: 'https://yumetakagym.jp/',
        plan: '2か月ダイエット全16回 48,000円／1回15分 3,850円・30分 7,150円・45分 10,450円（税込）',
        joinFee: '公式に記載なし',
        trial: '体験レッスン（Web申込・料金は公式に記載なし）',
        access: '南富山駅から車で8分（駐車場あり）',
        women: '男女共用（産後のママトレコースは生後半年〜3歳のお子様同伴可）',
        facilities: '女性用更衣室あり（鍵付きロッカー・シャワーはなし）',
      },
    ],
  },
  namba: {
    checked: '2026年11月3日',
    rows: [
      {
        name: 'リボーンマイセルフ なんばスカイオ店',
        sourceUrl: 'https://www.shapes-international.co.jp/store/nambaskyo/',
        plan: '30分制の月額プラン 月2回 10,450円〜月8回 35,200円（平日12〜16時のデイタイムは月2回 8,360円〜・税込）',
        joinFee: '22,000円（公式掲載のキャンペーン中は無料）',
        trial: 'カウンセリング0円・体験トレーニング0円',
        access: '南海 難波駅直結（なんばスカイオ6階）',
        women: '女性専用・トレーナーも全員女性',
        facilities: 'ウェア・タオル無料貸し出し／お子様の入店は不可',
      },
      {
        name: 'Amazones（アマゾネス）難波本店',
        sourceUrl: 'https://amazones.fit/storelist/namba/',
        plan: 'スタンダード会員 月額9,900円／パーソナルプラン（ライト・月4回）月額22,000円（税区分の記載なし）',
        joinFee: '入会金・事務手数料 11,000円＋セキュリティ登録料 5,500円',
        trial: '無料体験・見学（入会時にパーソナル4回が無料）',
        access: 'JR難波駅から徒歩2分／四つ橋線・近鉄なんば駅から徒歩3分',
        women: '女性専用（24時間営業）・トレーナーも全員女性',
        facilities: '無料の鍵付きロッカー・プロテインサーバー・水素水サーバー',
      },
    ],
  },
}

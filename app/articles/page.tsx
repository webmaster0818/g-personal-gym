import { pageUrlMeta } from '@/lib/seo'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { AREA_COUNT } from '@/lib/site'
import { GYM_SURVEY } from '@/data/gymSurvey'

export const metadata: Metadata = {
  title: '女性専用パーソナルジムの記事一覧｜選び方・産後・ブライダル・年代別ガイド',
  description:
    `女性専用パーソナルジム選びに役立つ記事一覧です。産後ダイエット・ブライダル・40代50代の選び方、女性専用と男女共用の違い、全国${GYM_SURVEY.areas}エリア${GYM_SURVEY.listings}ジムの独自調査データを掲載しています。目的に合った1社を選ぶ際の参考にしてください。`,
  ...pageUrlMeta('/articles/'),
}

const articles = [
  { href: '/articles/josei-gym-data/', tag: '独自調査', title: '女性向けパーソナルジム実態調査2026', desc: `全国${GYM_SURVEY.areas}エリア・${GYM_SURVEY.listings}ジムを独自集計しています。女性専用46%・体験無料60%など、選ぶ前に知りたい実態を数字で公開しています。` },
  { href: '/articles/joseisenyo-vs-kyoyo/', tag: '比較', title: '女性専用と男女共用、どっちを選ぶ？', desc: 'プライバシー・料金・店舗数・相談しやすさの4軸で比較しています。ご自身に合うのはどちらかを判断できます。' },
  { href: '/articles/josei-trainer/', tag: 'トレーナー', title: '女性トレーナーを指名できるジムの選び方', desc: '男性トレーナーには相談しにくい体の悩みもあります。女性トレーナーのみ在籍・指名可の違いと確認ポイントを、独自調査とあわせて解説します。' },
  { href: '/articles/private-kanshitsu/', tag: '完全個室', title: '完全個室・プライベートジムで選ぶ', desc: '人目が気になって続かなかった方に向いています。完全個室・個室対応28%のデータと、個室タイプの違い・確認ポイントを解説します。' },
  { href: '/articles/sango-diet/', tag: '産後', title: '産後ダイエットの選び方（いつから・子連れ・骨盤ケア）', desc: '開始時期の目安、子連れOKジムの探し方、骨盤底筋ケアの重要性です。産後ママのジム選びを解説します。' },
  { href: '/articles/bridal-diet/', tag: 'ブライダル', title: 'ブライダルダイエットの期間別プラン', desc: '結婚式まで3ヶ月・2ヶ月・1ヶ月の逆算プランです。二の腕・背中・デコルテを狙うドレス映え対策です。' },
  { href: '/articles/40dai-50dai/', tag: '年代別', title: '40代・50代女性のパーソナルジムの選び方', desc: '代謝低下・更年期・関節への配慮です。無理なく続く頻度と、年代特化ジムという選択肢を解説します。' },
  { href: '/articles/kyakuyase/', tag: '部位別', title: '脚やせ・下半身太りに強いジムの選び方', desc: '脚が痩せにくい理由、脚やせ特化メソッドの見分け方、自己流との違いなど、下半身の悩みに強いジムの選び方を解説します。' },
  { href: '/articles/kouka-itsukara/', tag: '効果', title: '効果はいつから？何ヶ月で痩せる目安', desc: '「20回で見た目が変わる」の目安、週1・2・3回別の到達時期、効果が出ない原因と続け方を解説します。' },
  { href: '/articles/taiken-nagare/', tag: '体験', title: '無料体験・カウンセリングの流れと持ち物', desc: '当日の流れ・持ち物・所要時間と、その場で契約しない断り方・勧誘対策です。体験無料60%のデータもあります。' },
  { href: '/articles/iryo-renkei/', tag: '専門家監修', title: '理学療法士・医師監修ジムの選び方', desc: '腰痛・膝痛・産後など、体に不安がある方に向いています。専門家監修（全体の14%）の見分け方と注意点を、事実にもとづいて解説します。' },
  { href: '/articles/diet/', tag: '目的別', title: 'ダイエット目的のパーソナルジムの選び方', desc: '食事指導の有無・リバウンド対策・続けやすさなど、減量目的で選ぶときのポイントを実態データとあわせて解説します。' },
  { href: '/articles/bodymake/', tag: '目的別', title: 'ボディメイク・くびれ作りに強いジムの選び方', desc: '減量との違い、くびれ・メリハリの筋トレ設計、期間の目安です。造形目的のジム選びを解説します。' },
  { href: '/articles/shisei/', tag: 'お悩み', title: '姿勢改善・反り腰・猫背に強いジムの選び方', desc: '姿勢が崩れる理由、フォーム指導・専門家監修の見分け方、自宅ケア併用のコツを、事実にもとづいて解説します。' },
  { href: '/articles/ryokin-osaeru/', tag: '料金', title: '女性専用パーソナルジムの料金を抑えるコツ', desc: '料金の内訳、無料体験・キャンペーンの活用、頻度の調整など、安さと続けやすさのバランスを解説します。' },
  { href: '/articles/shippai/', tag: '選び方', title: '失敗しないための注意点（よくある失敗例）', desc: '料金・勧誘・相性・解約条件など、後悔しがちな7つの失敗例と回避策をまとめました。' },
  { href: '/articles/jijuu-training/', tag: '筋トレ', title: '自重トレーニングとは（頻度・強度・消費エネルギー）', desc: '厚生労働省のガイド2023にもとづく頻度・負荷の目安と、メッツ表から計算した女性の30分あたりの消費エネルギーを掲載しています。' },
  { href: '/articles/kahanshin-kintore/', tag: '筋トレ', title: '下半身の筋トレ（スクワット・ランジのフォームと回数）', desc: 'e-ヘルスネットと日本整形外科学会「ロコトレ」が示すフォーム・回数・頻度を、出典ごとに並べて整理しています。' },
  { href: '/articles/ninoude-diet/', tag: '部位別', title: '二の腕ダイエットの考え方', desc: '部分やせについての公的な記載と、腕立て伏せで体脂肪1kg分のエネルギーを消費するのに必要な回数の計算です。' },
  { href: '/articles/toushitsu-seigen/', tag: '食事', title: '糖質制限ダイエットとは（炭水化物の公的な目安）', desc: '食事摂取基準2025年版の炭水化物の目標量をグラムに換算した表と、日本糖尿病学会ガイドライン2024の記載を整理しています。' },
  { href: '/articles/kiso-taisha/', tag: '代謝', title: '基礎代謝を上げるには（女性の目安と筋肉1kgの増加量）', desc: '女性の年齢別の基礎代謝量と、筋肉が1kg増えたときの基礎代謝の増加量を公的なデータで計算しています。' },
  { href: '/articles/kintore-yaseru/', tag: '筋トレ', title: '筋トレで痩せる？（体脂肪1kgまでの週数）', desc: '厚生労働省ガイド2023のメッツ表から、筋トレ30分の消費量と体脂肪1kg分（約7,000kcal）に届くまでの週数を計算しています。' },
  { href: '/articles/yusanso-musanso/', tag: '運動', title: '有酸素運動と無酸素運動の違い', desc: 'ガイド2023の定義・効果・推奨量と、歩行・ジョギング・水泳・筋トレの30分の消費エネルギーを比較しています。' },
  { href: '/articles/diet-tabemono/', tag: '食事', title: 'ダイエット中の食べ物の選び方（食事バランスガイド）', desc: '女性の1日の目安（主食・副菜・主菜など）を、炭水化物・たんぱく質・野菜のグラム数に換算しています。' },
  { href: '/articles/diet-calorie/', tag: '食事', title: 'ダイエット中の摂取カロリーの目安', desc: '女性の推定エネルギー必要量と、減らしたい体重・期間から1日に減らす量の計算表、年代別の目標BMIの体重範囲です。' },
  { href: '/articles/diet-tsuzukanai/', tag: '継続', title: 'ダイエットが続かないときの考え方', desc: '運動習慣がある女性は16.9%です。ガイド2023の「最短時間はない」「＋10分」をもとに、目標を小さくする方法を整理しています。' },
  { href: '/articles/60dai-diet/', tag: '年代別', title: '60代女性のダイエット（目標BMIと運動・たんぱく質）', desc: '食事摂取基準の目標BMIが65歳から上がる点と、ガイド2023の成人・高齢者の運動量の違い、たんぱく質の目標量のグラム換算を整理しています。' },
  { href: '/articles/personal-training/', tag: '基礎知識', title: 'パーソナルトレーニングとは（指導の中身と1回あたりの費用）', desc: 'ガイド2023の「個別性の原則」との関係と、公式料金から見た1回あたりの費用（約4,400〜13,750円）を整理しています。' },
  { href: '/articles/1kagetsu-5kg/', tag: '減量', title: '1ヶ月で5キロ痩せるには（1日に減らす量）', desc: '体脂肪1kg＝約7,000kcalで計算した1日あたりの量と、厚生労働省の保健指導の教材の目安（1か月1〜2kg）から見た期間を整理しています。' },
  { href: '/articles/taiju-heranai/', tag: '減量', title: '体重が減らない原因（減り方が鈍る仕組み）', desc: '食事摂取基準の式で、1日100〜300kcal減らした女性の体重が最終的にどこまで減るかを計算し、見直す点をまとめています。' },
  { href: '/articles/onaka-shibou/', tag: '部位別', title: 'お腹の脂肪を落とす方法（腹囲1cm＝約7,000kcal）', desc: '厚生労働省の保健指導の目安から、減らしたい腹囲ごとの期間・1日の量・速歩の時間を計算しています。' },
  { href: '/articles/tsudobarai/', tag: '料金', title: 'パーソナルジムの都度払い・チケット制', desc: '女性専用4ブランドと男女共用2ブランドの公式料金から、1回単位で買えるか・最初に支払う額・1回あたりを比較しています。' },
  { href: '/articles/kinniku-iji/', tag: '減量', title: '減量中に筋肉を維持するには（筋トレとたんぱく質）', desc: '厚生労働省の資料が示す食事制限と筋肉量の関係、ガイド2023の筋トレの目安、たんぱく質の目標量を摂取カロリー別のグラムに換算しています。' },
  { href: '/articles/fukusou/', tag: '体験', title: 'パーソナルトレーニングの服装（ウェア・シューズの貸出）', desc: '6ブランドの公式サイトで、ウェア・シューズ・タオルの無料貸出と持ち物の案内を比較しています。' },
  { href: '/articles/pfc-balance/', tag: '食事', title: 'PFCバランスとは（女性の目標量をグラムに換算）', desc: '食事摂取基準（2020年版）のたんぱく質・脂質・炭水化物の目標量を、1日1,400〜2,050kcal別のグラム数に換算しています。' },
  { href: '/articles/kintore-mainichi/', tag: '筋トレ', title: '筋トレは毎日やるべき？（週2〜3日の理由）', desc: 'ガイド2023の「週2〜3日」と、週あたりの筋トレ時間とリスクの関係（約40〜60分で最も低い）を、毎日行う場合の時間と比べています。' },
  { href: '/articles/walking-diet/', tag: '減量', title: 'ウォーキングダイエットの目安（速さ別の消費カロリー）', desc: '歩く速さ・体重別の30分の消費量と、体脂肪1kg（約7,000kcal）に届く日数、女性の歩数の目標8,000歩との差を計算しています。' },
  { href: '/articles/shokuji-shidou/', tag: '食事', title: 'パーソナルジムの食事指導はどこまで？（5ブランド比較）', desc: 'UNDEUX・リボーンマイセルフ・OUTLINE・ビーコンセプト・かたぎり塾の公式サイトに書かれた食事指導の内容と、毎日の管理にかかる料金を比べています。' },
  { href: '/articles/riso-taikei/', tag: '体型', title: '女性の理想の体型は？（目標BMIと身長別の体重）', desc: '食事摂取基準の目標とするBMIから身長145〜170cmの体重範囲を計算し、20代女性のやせの割合（令和4年）とやせのリスクをまとめています。' },
  { href: '/articles/undou-busoku/', tag: '健康', title: '運動不足で起こりやすい病気（ガイド2023）', desc: 'ガイド2023が示す運動不足・座りすぎと病気のリスク、女性の平均歩数と推奨の約8,000歩の差を歩く時間に換算しています。' },
  { href: '/articles/jinko-kanmiryo/', tag: '食事', title: '人工甘味料はダイエットに効果がある？（WHOの見解）', desc: 'WHOの2023年ガイドラインの内容と、アスパルテームの許容一日摂取量を体重別のmgとダイエット飲料の缶数に換算しています。' },
  { href: '/articles/hindo/', tag: '通い方', title: 'パーソナルジムは週何回通う？（公式の回数と週2〜3日）', desc: 'リボーンマイセルフ・ビーコンセプト・UNDEUX・OUTLINE・かたぎり塾の公式のコース回数を週あたりに換算し、厚労省ガイド2023の筋トレ週2〜3日と比べています。' },
  { href: '/articles/shijo-kibo/', tag: '市場', title: 'パーソナルジムの市場規模（全国2,368施設）', desc: '矢野経済研究所の調査（2025年8月時点）の業態別施設数と新規開業に占める割合、女性専用6ブランドの公式店舗数を集計しています。' },
  { href: '/articles/heiten/', tag: '契約', title: 'パーソナルジムが閉店したら？（閉店・募集停止の事例）', desc: '当サイトが公式サイトで確認した閉店・新規募集停止の事例と、国民生活センターの相談件数、前払いを抑える月額制・返金保証の条件をまとめています。' },
  { href: '/articles/20dai/', tag: '年代別', title: '20代女性のパーソナルジムの選び方', desc: '20代の目的の傾向と予算、料金を抑える工夫、続けやすさについて解説します。はじめての一歩を後押しする選び方です。' },
]

export default function Page() {
  return (
    <>
      <Navigation />
      <main data-reveal className="pt-16">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="eyebrow mb-3">Articles</p>
            <h1 className="text-2xl md:text-4xl font-bold text-ink mb-4 leading-snug">女性専用パーソナルジムの記事一覧</h1>
            <p className="text-ink-soft text-sm md:text-base leading-relaxed">目的・ライフステージ別に、失敗しないジム選びをサポートしています。独自調査データにもとづく事実にもとづく記事をお届けします。</p>
          </div>
        </section>

        <section className="py-3 bg-white border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-ink-faint"><Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}<span className="text-ink-soft">記事一覧</span></nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 gap-5">
              {articles.map((a) => (
                <Link key={a.href} href={a.href} className="block border border-line rounded-xl p-6 hover:border-accent hover:shadow-lg transition bg-white">
                  <span className="inline-block bg-accent-tint text-accent-dark text-xs font-medium px-2.5 py-0.5 rounded-full border border-accent-soft mb-3">{a.tag}</span>
                  <h2 className="text-lg font-bold text-ink mb-2 leading-snug">{a.title}</h2>
                  <p className="text-ink-soft text-sm leading-relaxed">{a.desc}</p>
                  <span className="text-accent text-sm font-medium mt-3 inline-block">記事を読む →</span>
                </Link>
              ))}
            </div>

            <div className="mt-12 bg-ivory border border-line rounded-xl p-6 text-center">
              <p className="text-ink font-bold mb-2">お住まいのエリアからジムを探す</p>
              <p className="text-ink-soft text-sm mb-5">全国{AREA_COUNT}エリアの女性向けパーソナルジムを、料金・体験・特徴で比較できます。</p>
              <Link href="/" className="inline-block btn-primary text-sm !py-2.5 !px-7 !rounded-full">エリアから探す</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

import { pageUrlMeta } from '@/lib/seo'
import type { Metadata } from 'next'
import { ArticleShell } from '@/components/ArticleShell'

// 掲載内容は 2026年11月25日 に各公式サイトで確認
// - UNDEUX SUPERBODY 料金 https://www.diet-undeux.jp/price/ ：スタンダード 月額18,200円〜（トレーニング2〜8回・食事指導と簡易相談・宅配食はオプション）／
//   コミット 月額79,200円 全店舗共通（トレーニング6回・食事指導あり・栄養士が管理（毎日）・宅配食30食が無料（初月のみ））
//   食事 https://www.diet-undeux.jp/meal/ ：管理栄養士による食事改善サポート。コミットプランの初月に宅配食30食無料（送料別途）
// - リボーンマイセルフ https://www.shapes-international.co.jp/ （よくある質問）：一人ひとりの目標に合わせて摂取エネルギーを設定し、その範囲内で3食。
//   無理な食事制限は行わない。1ヶ月で現在の体重の5%減を目安にトレーニングと食事を行う（個人差あり）
// - OUTLINE https://www.outline-gym.com/service ：コースに含まれるサービス「食事指導・トレーニングのアドバイス（日々の食事や運動について相談できます）」。16回 184,800円（フルサポート）／220,000円（通常）
// - ビーコンセプト https://b-concept.tokyo/ ：「3食しっかり食べれる 無理のない食事指導」。よくある質問「無理な食事制限は致しません」「ライフスタイルに合わせた、食事指導」
// - かたぎり塾 https://katagirijuku.jp/price ：料金に含まれるサービス「トレーニング合間の食事の相談」。LINE食事サポート 2週間 10,000円（税込11,000円）
//   ※かたぎり塾は男女とも利用できるジム（女性専門店のみ女性専用）
// - 厚生労働省「健康づくりのための身体活動・運動ガイド2023」 https://www.mhlw.go.jp/content/001194020.pdf （INFORMATION 8：体脂肪1kg≒7,000kcal）

export const metadata: Metadata = {
  title: 'パーソナルジムの食事指導はどこまで？女性専用5ブランドの公式内容と、追加料金の有無を比較',
  description:
    'パーソナルジムの食事指導は、料金に含まれる相談から、栄養士が毎日管理するプランまで内容に差があります。UNDEUX・リボーンマイセルフ・OUTLINE・ビーコンセプト・かたぎり塾の公式の記載を比べ、追加料金の有無をまとめました。',
  ...pageUrlMeta('/articles/shokuji-shidou/'),
}

// リボーンマイセルフ公式「1ヶ月で現在の体重の5%減を目安」→ 体重別の減量幅と、体脂肪1kg≒7,000kcal（ガイド2023）での1日あたりの差
const KCAL_PER_KG = 7000
const DAYS = 30
const weights = [50, 55, 60, 65]
const loss = (kg: number) => kg * 0.05

const faqs = [
  {
    question: 'パーソナルジムの食事指導は料金に含まれていますか？',
    answer:
      '当サイトで公式サイトを確認した5ブランドでは、いずれも食事について相談できる仕組みがあります。OUTLINEはコースに「食事指導・トレーニングのアドバイス」が含まれ、かたぎり塾は料金に「トレーニング合間の食事の相談」が含まれます。毎日の食事を管理してもらう形は、UNDEUX SUPERBODYのコミットプラン（月額79,200円）や、かたぎり塾のLINE食事サポート（2週間 税込11,000円）のように、プランや追加料金で分かれています（2026年11月25日確認）。',
  },
  {
    question: '厳しい食事制限はありますか？',
    answer:
      'リボーンマイセルフは「無理な食事制限は行っていません」とし、目標に合わせて摂取エネルギーを設定し、その範囲内で3食とる形と案内しています。ビーコンセプトも「3食きちんと食べながら」「無理な食事制限は致しません」と公式サイトに記載しています。',
  },
  {
    question: '栄養士に相談できるジムはありますか？',
    answer:
      'UNDEUX SUPERBODYは、管理栄養士による食事改善サポートを案内しており、コミットプランでは栄養士が毎日食事を管理すると記載しています。他の4ブランドの公式ページでは、食事指導の担当者の資格は確認できませんでした（リボーンマイセルフは栄養士の資格を持つトレーナーの紹介があります）。',
  },
]

const related = [
  { href: '/articles/diet-calorie/', label: 'ダイエットの摂取カロリーの決め方' },
  { href: '/articles/pfc-balance/', label: 'PFCバランスとは' },
  { href: '/articles/diet-tabemono/', label: 'ダイエット中の食べ物の選び方' },
  { href: '/articles/personal-training/', label: 'パーソナルトレーニングとは' },
  { href: '/cost/', label: 'パーソナルジムの料金相場' },
]

export default function Page() {
  return (
    <ArticleShell
      eyebrow="Meal Guidance"
      title="パーソナルジムの食事指導はどこまで？5ブランドの公式内容"
      updated="2026年11月25日"
      lead="パーソナルジムの食事指導は、トレーニングの合間に相談できるものから、栄養士が毎日の食事を管理するものまで内容に差があります。当サイトで公式サイトを確認した5ブランドでは、相談はいずれも料金の範囲で受けられ、毎日の管理はUNDEUX SUPERBODYのコミットプランやかたぎり塾のLINE食事サポートなど、プランや追加料金で分かれていました（2026年11月25日確認）。"
      breadcrumb="パーソナルジムの食事指導"
      faqs={faqs}
      related={related}
    >
      <h2>5ブランドの食事指導の内容（公式サイトの記載）</h2>
      <table>
        <thead>
          <tr>
            <th>ブランド</th>
            <th>公式サイトの記載</th>
            <th>毎日の管理・追加料金</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>UNDEUX SUPERBODY（女性専用）</td><td>管理栄養士による食事改善サポート。スタンダードプラン（月額18,200円〜・月2〜8回）は「食事指導と簡易相談」</td><td>コミットプラン 月額79,200円（全店舗共通・月6回）で「栄養士が管理（毎日）」。初月は宅配食30食が無料（送料別途）</td></tr>
          <tr><td>リボーンマイセルフ（女性専用）</td><td>目標に合わせて摂取エネルギーを設定し、その範囲内で3食。無理な食事制限は行わない。1ヶ月で現在の体重の5%減が目安</td><td>公式トップページのよくある質問には、食事指導の料金の記載なし（料金は店舗ページで確認）</td></tr>
          <tr><td>OUTLINE（女性専用）</td><td>コースに含まれるサービスとして「食事指導・トレーニングのアドバイス」（日々の食事や運動について相談できる）</td><td>16回コース 184,800円（フルサポート）／220,000円（通常）に含まれる</td></tr>
          <tr><td>ビーコンセプト（女性専用）</td><td>3食しっかり食べられる無理のない食事指導。ライフスタイルに合わせた食事指導</td><td>公式トップページに、食事指導の追加料金の記載なし</td></tr>
          <tr><td>かたぎり塾（男女利用可・女性専門店あり）</td><td>料金に「トレーニング合間の食事の相談」が含まれる</td><td>LINE食事サポート 2週間 10,000円（税込11,000円）。毎日の食事をトレーナーと共有して改善</td></tr>
        </tbody>
      </table>
      <p>
        掲載内容は2026年11月25日に各公式サイトの料金・サービスのページで確認したものです。店舗によって異なる場合があるため、カウンセリングの際に、食事指導の頻度・方法（対面・LINEなど）・担当者をご確認ください。各ブランドの店舗と料金は<a href="/ranking/">おすすめランキング</a>、料金の相場は<a href="/cost/">パーソナルジムの料金相場</a>で比較しています。
      </p>

      <h2>食事指導の形は大きく3つ</h2>
      <ul>
        <li><strong>トレーニング時の相談</strong>：OUTLINE・かたぎり塾のように、通常の料金の範囲で食事について相談できる形です。</li>
        <li><strong>摂取エネルギーを決めて3食とる</strong>：リボーンマイセルフ・ビーコンセプトは、食事を抜かずに3食とる方針を公式に示しています。</li>
        <li><strong>毎日の食事を報告・管理する</strong>：UNDEUX SUPERBODYのコミットプランや、かたぎり塾のLINE食事サポートのように、毎日の食事を共有する形です。料金はプランの差額や追加料金として発生します。</li>
      </ul>

      <h2>「1ヶ月で体重の5%減」は1日あたりどのくらいか（当サイト計算）</h2>
      <p>
        リボーンマイセルフは、1ヶ月で現在の体重の5%減を目安としています（個人差ありと記載）。厚生労働省のガイド2023が示す「体脂肪1kg≒7,000kcal」で、体重別に1日あたりのエネルギーの差を計算しました。体重の減少をすべて体脂肪とみなした概算です。
      </p>
      <table>
        <thead>
          <tr>
            <th>今の体重</th>
            <th>1ヶ月の5%</th>
            <th>体脂肪換算</th>
            <th>1日あたり（30日）</th>
          </tr>
        </thead>
        <tbody>
          {weights.map((kg) => (
            <tr key={kg}>
              <td>{kg}kg</td>
              <td>{loss(kg).toFixed(2)}kg</td>
              <td>約{Math.round(loss(kg) * KCAL_PER_KG).toLocaleString()}kcal</td>
              <td>約{Math.round((loss(kg) * KCAL_PER_KG) / DAYS).toLocaleString()}kcal</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="callout">
        <p>
          体重55kgの人が1ヶ月で5%（2.75kg）減らすには、体脂肪換算で1日約{Math.round((loss(55) * KCAL_PER_KG) / DAYS).toLocaleString()}kcalの差が必要です。食事と運動の両方で差をつくる計算になるため、食事指導でどの程度の摂取エネルギーに設定するのかを、事前に確認しておくと安心です。減らす量と期間の考え方は<a href="/articles/diet-calorie/">ダイエットの摂取カロリー</a>で解説しています。
        </p>
      </div>

      <h2>食事指導で確認しておきたいこと</h2>
      <ul>
        <li><strong>コース終了後も続くか</strong>：OUTLINEはコース終了後の月額プラン（クラブメンバー）を設けています。食事の相談がいつまで受けられるかを確認してください。</li>
        <li><strong>担当者の資格</strong>：管理栄養士・栄養士が関わるかどうかはブランドで異なります。</li>
        <li><strong>持病・妊娠中・授乳中の方</strong>：食事の制限が必要な場合は、主治医の指示を優先し、カウンセリングで伝えてください。</li>
      </ul>
      <p>
        食事の基本となるたんぱく質・脂質・炭水化物の目安は<a href="/articles/pfc-balance/">PFCバランスとは</a>、食品の選び方は<a href="/articles/diet-tabemono/">ダイエット中の食べ物の選び方</a>でまとめています。
      </p>

      <h2>出典</h2>
      <ul>
        <li><a href="https://www.diet-undeux.jp/price/" target="_blank" rel="noopener noreferrer">UNDEUX SUPERBODY 料金</a>・<a href="https://www.diet-undeux.jp/meal/" target="_blank" rel="noopener noreferrer">食事</a></li>
        <li><a href="https://www.shapes-international.co.jp/" target="_blank" rel="noopener noreferrer">リボーンマイセルフ 公式サイト（よくある質問）</a></li>
        <li><a href="https://www.outline-gym.com/service" target="_blank" rel="noopener noreferrer">OUTLINE 料金・サービス</a></li>
        <li><a href="https://b-concept.tokyo/" target="_blank" rel="noopener noreferrer">ビーコンセプト 公式サイト</a></li>
        <li><a href="https://katagirijuku.jp/price" target="_blank" rel="noopener noreferrer">かたぎり塾 料金</a></li>
        <li><a href="https://www.mhlw.go.jp/content/001194020.pdf" target="_blank" rel="noopener noreferrer">厚生労働省「健康づくりのための身体活動・運動ガイド2023」</a>（INFORMATION 8：体脂肪1kg≒7,000kcal）</li>
      </ul>
      <p>2026年11月25日に確認しました。</p>
    </ArticleShell>
  )
}

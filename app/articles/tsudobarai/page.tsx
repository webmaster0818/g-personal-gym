import { pageUrlMeta } from '@/lib/seo'
import type { Metadata } from 'next'
import { ArticleShell } from '@/components/ArticleShell'

// 出典（2026年11月20日 各公式サイトの料金ページ・FAQ・店舗ページの生HTMLで確認）
// - UNDEUX SUPERBODY 料金 https://www.diet-undeux.jp/price/ ／FAQ https://www.diet-undeux.jp/faq/ （単発チケットはプラン契約会員のみ・1回50分）
// - OUTLINE サービス・料金 https://www.outline-gym.com/service/ （入会金0円・16/24/32回コース・ミニマムコース30分1回5,500円・クラブメンバー月2回〜）
// - ビーコンセプト コース https://b-concept.tokyo/course/ （太ももダイエットプログラム179,685円・トライアル4回44,000円）
// - リボーンマイセルフ 東京店 https://www.shapes-international.co.jp/store/tokyo/ （入会金22,000円・チケットプラン8〜48回、店舗により変動）
// - かたぎり塾 料金 https://katagirijuku.jp/price （無期限チケット1回8,800円・有効期限なし・入会金は店舗により異なる・男女利用可、女性専門店あり）
// - エクササイズコーチ https://exercisecoach.co.jp/ （月4回17,600円〜・1回20分・男女利用可）

export const metadata: Metadata = {
  title: 'パーソナルジムの都度払い・チケット制｜女性専用4ブランドと男女共用2ブランドの公式料金を比較',
  description:
    '女性専用パーソナルジムの主要4ブランド（UNDEUX・OUTLINE・ビーコンセプト・リボーンマイセルフ）の公式料金ページには、1回ずつ支払う都度払いの記載はありませんでした。1回から買えるチケットはかたぎり塾（男女利用可）の8,800円です。最初に支払う額と1回あたりを比較しました。',
  ...pageUrlMeta('/articles/tsudobarai/'),
}

const yen = (n: number) => Math.round(n).toLocaleString()

type Row = {
  brand: string
  women: string
  system: string
  single: string
  start: string
  startYen: number
  times: number
}

const rows: Row[] = [
  { brand: 'UNDEUX SUPERBODY', women: '女性専用', system: '月額制（月2〜8回から月ごとに選択）', single: '単発チケットはプラン契約中の会員のみ購入可', start: 'スタンダードプラン 月2回（グレードB）', startYen: 20500, times: 2 },
  { brand: 'OUTLINE', women: '女性専用', system: '回数コース（16・24・32回）→終了後に月額のクラブメンバー', single: '記載なし（ミニマムコース「30分・1回5,500円」の購入単位は料金ページに記載なし）', start: 'フルサポートコース 16回', startYen: 184800, times: 16 },
  { brand: 'ビーコンセプト', women: '女性専用', system: '2ヶ月のプログラム／トライアルプラン', single: '記載なし', start: 'トライアルプラン 4回', startYen: 44000, times: 4 },
  { brand: 'リボーンマイセルフ', women: '女性専用', system: 'コース（2〜3ヶ月）／チケットプラン（8〜48回）', single: '記載なし（チケットは8回から）', start: 'チケットプラン 8回（東京店・フルタイム）', startYen: 105600, times: 8 },
  { brand: 'かたぎり塾', women: '男女利用可（女性専門店あり）', system: '月額制（月4・月8）／無期限チケット', single: '無期限チケット 1回8,800円（有効期限なし）', start: '無期限チケット 1回', startYen: 8800, times: 1 },
  { brand: 'エクササイズコーチ', women: '男女利用可', system: '月額制（月4・6・8回）', single: '記載なし', start: 'スタンダード 月4回', startYen: 17600, times: 4 },
]

const faqs = [
  {
    question: '女性専用で都度払いができるパーソナルジムはありますか？',
    answer:
      '当サイトが掲載している女性専用の主要4ブランド（UNDEUX SUPERBODY・OUTLINE・ビーコンセプト・リボーンマイセルフ）の公式料金ページでは、入会せずに1回ずつ支払う都度払いの記載は確認できませんでした（2026年11月20日）。回数の少ないプランは、UNDEUX SUPERBODYの月2回の月額制、ビーコンセプトの4回のトライアルプランなどです。',
  },
  {
    question: '1回から買えるチケットがあるのはどこですか？',
    answer:
      'かたぎり塾は、有効期限のない無期限チケットを1回8,800円（税込）で案内しており、比較表でも「回数券1枚販売 あり」としています。ただし、かたぎり塾は男女とも利用できるジムで、女性専用ではありません。料金ページの店舗一覧には「女性専門店」と付く店舗もあります。入会金は店舗により異なります。',
  },
  {
    question: 'UNDEUX SUPERBODYで月の回数を1回だけ増やせますか？',
    answer:
      '公式のよくある質問では、「単発チケット」を購入すればトレーニングを追加でき、単発チケットはプラン契約されている会員のみ購入可能と案内されています。',
  },
  {
    question: '都度払いと回数コースはどちらが安いですか？',
    answer: `1回あたりで比べると、回数が多いコースほど安くなる料金設定が一般的です。たとえばOUTLINEのフルサポートコースは16回で1回11,550円、32回で1回10,450円です。一方で、最初に支払う額は大きくなります。通える回数と、途中でやめた場合の扱い（返金・繰り越し）を確認してから選ぶことをおすすめします。`,
  },
]

const related = [
  { href: '/articles/ryokin-osaeru/', label: '女性専用パーソナルジムの料金を抑えるコツ' },
  { href: '/articles/personal-training/', label: 'パーソナルトレーニングとは（1回あたりの費用）' },
  { href: '/cost/', label: '女性専用パーソナルジムの料金相場' },
  { href: '/articles/taiken-nagare/', label: '無料体験・カウンセリングの流れ' },
  { href: '/articles/shippai/', label: '失敗しないための注意点' },
  { href: '/articles/heiten/', label: 'パーソナルジムが閉店したら？' },
  { href: '/areas/nihonbashi/', label: '日本橋の女性専用パーソナルジム' },
]

export default function Page() {
  return (
    <ArticleShell
      eyebrow="Pay per Session"
      title="パーソナルジムの都度払い・チケット制｜主要6ブランドの公式料金で比較"
      updated="2026年11月20日"
      lead="女性専用パーソナルジムの主要4ブランド（UNDEUX SUPERBODY・OUTLINE・ビーコンセプト・リボーンマイセルフ）の公式料金ページには、入会せずに1回ずつ支払う「都度払い」の記載はありませんでした（2026年11月20日確認）。1回から購入できるチケットを公式で案内しているのは、男女とも利用できるかたぎり塾の無期限チケット（1回8,800円・税込）です。このページでは、6ブランドの料金の仕組みと、最初に支払う額・1回あたりの費用を公式の料金で並べています。"
      breadcrumb="パーソナルジムの都度払い・チケット制"
      faqs={faqs}
      related={related}
    >
      <h2>6ブランドの料金の仕組み（2026年11月20日 公式で確認）</h2>
      <table>
        <thead>
          <tr>
            <th>ブランド</th>
            <th>利用者</th>
            <th>料金の仕組み</th>
            <th>1回単位の購入</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.brand}>
              <td>{r.brand}</td>
              <td>{r.women}</td>
              <td>{r.system}</td>
              <td>{r.single}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>いずれも税込です。料金は店舗やエリアで異なる場合があります（UNDEUX SUPERBODYのスタンダードプランはエリア別料金、リボーンマイセルフとかたぎり塾は店舗により変動すると公式に記載）。</p>

      <h2>最も少ない回数で始める場合の支払額と1回あたり（当サイト計算）</h2>
      <p>各ブランドの公式料金ページに記載された、回数が最も少ないプランの料金を回数で割りました。入会金は含みません。</p>
      <table>
        <thead>
          <tr>
            <th>ブランド</th>
            <th>プラン</th>
            <th>支払額</th>
            <th>1回あたり</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.brand}>
              <td>{r.brand}</td>
              <td>{r.start}</td>
              <td>{yen(r.startYen)}円</td>
              <td>約{yen(r.startYen / r.times)}円</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul>
        <li>UNDEUX SUPERBODYの月2回20,500円は、公式の継続割引の説明に例として記載されたグレードBの料金です。スタンダードプランは「月額18,200円〜」で、エリアにより異なります。2ヶ月目から継続割引（最大10%）が適用されます。1回は50分です。</li>
        <li>OUTLINEは入会金0円です。フルサポートコースは終了後に月額のクラブメンバーへ自動で移行し、月2回以上・最低3ヶ月の継続が必要です（16回コースからの移行で月2回20,900円）。通常コースは16回220,000円（1回13,750円）で、終了後の移行は任意です。</li>
        <li>ビーコンセプトのトライアルプランは4回44,000円で、入会金38,500円はカウンセリング当日の入会で無料と案内されています。2ヶ月の太ももダイエットプログラムは支払総額179,685円です。</li>
        <li>リボーンマイセルフは入会金22,000円です。東京店のチケットプランは、平日12〜16時のデイタイムなら8回96,800円（1回12,100円）で、お弁当は付きません。</li>
        <li>かたぎり塾の月4プランは〜33,000円（1回〜8,250円）、月8プランは59,400円（1回7,425円）で、無期限チケットより1回あたりは低くなります。1回は60分です。</li>
        <li>エクササイズコーチは1回20分のトレーニングで、平日17時までのデイプランは月4回14,960円です。</li>
      </ul>

      <h2>都度払いを探すときに確認したい点</h2>
      <ol>
        <li><strong>入会金の有無</strong>：1回ずつ買える場合でも、入会金がかかることがあります。かたぎり塾の入会金は店舗により異なり、公式の比較表では0円〜55,000円とされています。</li>
        <li><strong>有効期限と繰り越し</strong>：かたぎり塾の無期限チケットは有効期限がありません。OUTLINEのクラブメンバーは、使いきれなかったチケットを1ヶ月繰り越せると案内しています。</li>
        <li><strong>途中でやめた場合の扱い</strong>：リボーンマイセルフは、返金保証制度を利用する場合、残りのセッション分から解約手数料または残金の20%のいずれか低い額を差し引いて返金すると記載しています。ほかのブランドも契約前に申込書面で確認してください。</li>
        <li><strong>女性専用かどうか</strong>：1回から利用しやすい料金体系のブランドは、男女とも利用できるジムでした。女性専用を優先する場合は、月2回の月額制や4回のトライアルなど、回数の少ないプランから比較する方法があります。違いは<a href="/articles/joseisenyo-vs-kyoyo/">女性専用と男女共用の比較</a>で整理しています。</li>
      </ol>
      <p>
        各ブランドの料金と店舗は<a href="/brands/">ブランド一覧</a>、エリアごとの比較は<a href="/areas/">エリア一覧</a>からご覧いただけます。料金やキャンペーンは変わることがあるため、契約前に各公式サイトで最新の情報をご確認ください。
      </p>

      <h2>出典</h2>
      <ul>
        <li><a href="https://www.diet-undeux.jp/price/" target="_blank" rel="noopener noreferrer">UNDEUX SUPERBODY 料金</a>・<a href="https://www.diet-undeux.jp/faq/" target="_blank" rel="noopener noreferrer">よくある質問</a></li>
        <li><a href="https://www.outline-gym.com/service/" target="_blank" rel="noopener noreferrer">OUTLINE サービス・料金</a></li>
        <li><a href="https://b-concept.tokyo/course/" target="_blank" rel="noopener noreferrer">ビーコンセプト コース・料金</a></li>
        <li><a href="https://www.shapes-international.co.jp/store/tokyo/" target="_blank" rel="noopener noreferrer">リボーンマイセルフ 東京店</a></li>
        <li><a href="https://katagirijuku.jp/price" target="_blank" rel="noopener noreferrer">かたぎり塾 料金</a></li>
        <li><a href="https://exercisecoach.co.jp/" target="_blank" rel="noopener noreferrer">エクササイズコーチ 公式サイト</a></li>
      </ul>
      <p>いずれも2026年11月20日に確認しました。</p>
    </ArticleShell>
  )
}

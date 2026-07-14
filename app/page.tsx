import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import { FAQSchema } from '@/components/FAQSchema'
import ScrollReveal from '@/components/ScrollReveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

const topGyms = [
  { name: 'ビーコンセプト（B CONCEPT）', feature: '下半身・太もも痩せ特化', price: '月々5,545円〜（税込・分割）', badge: '女性専用' },
  { name: 'リボーンマイセルフ', feature: '女性トレーナーのみ在籍', price: '入会金38,000円＋コース料金', badge: '女性専用' },
  { name: 'UNDEUX SUPERBODY', feature: '食事管理・宅配食付き', price: '2ヶ月16回 220,000円〜', badge: '女性専用' },
  { name: 'OUTLINE（アウトライン）', feature: '完全個室・生涯サポート', price: '16回 184,800円〜（税込）', badge: '女性専用' },
  { name: 'Bodyke（ボディーク）', feature: '糖質制限なしボディメイク', price: '2ヶ月 215,600円〜（税込）', badge: 'ボディメイク特化' },
]

const strengths = [
  {
    title: '女性専用のプライベート空間',
    desc: '完全個室や女性専用フロアで、人目を気にせずトレーニングに集中できます。清潔感のある空間で、はじめての方も安心です。',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10 20 L24 9 L38 20 V39 H10 Z" />
        <path d="M19 39 V28 h10 v11" />
      </svg>
    ),
  },
  {
    title: '女性トレーナーが多数在籍',
    desc: '体型や産後のデリケートな悩みも、同じ目線で相談できます。マンツーマンで一人ひとりに寄り添い、丁寧に伴走します。',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="24" cy="16" r="7" />
        <path d="M11 39 c0-8 6-13 13-13 s13 5 13 13" />
      </svg>
    ),
  },
  {
    title: '目的別の専用プログラム',
    desc: '下半身痩せ・産後ダイエット・ブライダルなど、なりたい姿から逆算した設計。無理のない食事サポートまで含めて整えます。',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="24" cy="24" r="14" />
        <circle cx="24" cy="24" r="6" />
        <path d="M24 10 V4 M24 44 V38 M10 24 H4 M44 24 H38" />
      </svg>
    ),
  },
]

const areas = [
  { name: '渋谷', slug: 'shibuya', desc: '駅チカ多数' },
  { name: '新宿', slug: 'shinjuku', desc: '選択肢豊富' },
  { name: '池袋', slug: 'ikebukuro', desc: 'コスパ充実' },
  { name: '銀座', slug: 'ginza', desc: '高級感あり' },
  { name: '六本木', slug: 'roppongi', desc: '駅近好立地' },
  { name: '恵比寿', slug: 'ebisu', desc: 'おしゃれ街' },
  { name: '自由が丘', slug: 'jiyugaoka', desc: '子連れ充実' },
  { name: '表参道', slug: 'omotesando', desc: '美容特化' },
  { name: '吉祥寺', slug: 'kichijoji', desc: '住みたい街' },
  { name: '二子玉川', slug: 'futakotamagawa', desc: 'ママに人気' },
  { name: '立川', slug: 'tachikawa', desc: '多摩の中心' },
  { name: '町田', slug: 'machida', desc: '相場安め' },
  { name: '横浜', slug: 'yokohama', desc: '神奈川No.1' },
  { name: '川崎', slug: 'kawasaki', desc: '通勤途中に' },
  { name: '藤沢', slug: 'fujisawa', desc: '湘南エリア' },
  { name: '大宮', slug: 'omiya', desc: '埼玉の中心' },
  { name: '大阪', slug: 'osaka', desc: '梅田・心斎橋' },
  { name: '名古屋', slug: 'nagoya', desc: '名駅・栄' },
  { name: '福岡', slug: 'fukuoka', desc: '天神・博多' },
  { name: '札幌', slug: 'sapporo', desc: '大通・すすきの' },
]

const faqs = [
  { question: '女性専用パーソナルジムとは？', answer: '女性専用パーソナルジムは、女性のみが利用できるパーソナルトレーニングジムです。女性トレーナーのみが在籍している場合も多く、女性特有の悩み（下半身太り、産後ダイエット、ブライダルダイエットなど）に特化したプログラムを提供しています。完全個室で人目を気にせずトレーニングに集中できます。' },
  { question: 'パーソナルジムの料金相場はどのくらい？', answer: '女性専用パーソナルジムの2ヶ月コース（16回）の料金相場は約18万〜25万円（税込）です。入会金は2万〜5万円程度。月額制のジムでは月1万〜6万円程度から通えるプランもあります。体験レッスンは無料〜5,000円程度で受けられます。' },
  { question: '初心者でも大丈夫ですか？', answer: 'はい、大丈夫です。パーソナルジムは一人ひとりのレベルに合わせてトレーニングメニューを組むため、運動が苦手な方や初心者の方こそおすすめです。トレーナーがマンツーマンで丁寧に指導してくれるので安心です。' },
  { question: 'どのくらいの期間で効果が出ますか？', answer: '個人差はありますが、2ヶ月（16回）のコースで平均5〜8kgの減量効果が期待できます。見た目の変化（ウエストダウン、ヒップアップなど）は1ヶ月目から感じる方が多いです。' },
  { question: '食事制限は厳しいですか？', answer: 'ジムによって異なります。ビーコンセプトは医師監修の食事指導、UNDEUX SUPERBODYは糖質オフ宅配食を提供。Bodykeは糖質制限なしで好きなものを食べながらダイエットを目指します。無理な食事制限ではなく、栄養バランスの取れた食生活を指導するジムがほとんどです。' },
  { question: '子連れでも通えるジムはありますか？', answer: 'はい、あります。ビーコンセプトは託児所費用を最大1,000円/回まで補助。OUTLINEは全店にベビーサークルを完備し、子連れOKです。リボーンマイセルフも一部店舗で託児サービスを提供しています。' },
  { question: 'リバウンドしないか心配です', answer: 'OUTLINEは業界初の「生涯無料アフターサポート」を提供しており、卒業後もずっと無料でサポートが受けられます。多くのジムでは卒業後のリバウンド防止プログラムや、食事管理のフォローアップが含まれています。' },
  { question: '体験レッスンでは何をしますか？', answer: 'カウンセリング（目標・悩みのヒアリング）→ 体組成測定 → 実際のトレーニング体験 → 今後のプラン提案、という流れが一般的です。所要時間は60〜90分程度。無料カウンセリングのみのジムもあります。' },
  { question: 'ウェアやシューズは必要ですか？', answer: 'ほとんどの女性専用パーソナルジムでは、ウェア・タオル・シューズなどのレンタルが無料です。手ぶらで通えるジムがほとんどなので、仕事帰りにも気軽に立ち寄れます。' },
  { question: '産後ダイエットにも対応していますか？', answer: 'はい。ビーコンセプト、リボーンマイセルフ、UNDEUX SUPERBODYなど多くの女性専用ジムが産後ダイエットコースを用意しています。産後の体の回復に配慮したプログラムで、骨盤矯正や体型戻しをサポートします。' },
]

function SectionHeading({ en, title, lead }: { en: string; title: string; lead?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12 fade-up">
      <p className="eyebrow mb-4">{en}</p>
      <h2 className="font-serif text-2xl md:text-[2rem] leading-snug text-ink">{title}</h2>
      {lead && <p className="text-ink-soft text-sm md:text-[0.95rem] leading-relaxed mt-4">{lead}</p>}
    </div>
  )
}

export default function Home() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Navigation />
      <main>
        {/* Hero（画像を背景に敷き、その上にテキストを重ねるフルブリード構成） */}
        <section className="relative overflow-hidden flex items-center min-h-[78vh] md:min-h-[680px]">
          {/* 背景画像 */}
          <Image
            src="/images/hero-trainer.webp"
            alt="女性トレーナーが笑顔で女性トレーニーを指導している様子"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center] -z-20"
          />
          {/* 清潔感を保つ白の透明グラデーション（やや薄め・暗い被せなし・文字の可読性は確保） */}
          <div className="absolute inset-0 -z-10 bg-white/25 md:hidden" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-white via-white/35 to-white/25 md:bg-gradient-to-r md:from-white md:via-white/55 md:to-transparent" />
          <div className="relative max-w-6xl mx-auto px-6 lg:px-8 w-full pt-28 pb-14 md:py-32">
            <div className="max-w-xl fade-up">
              <p className="eyebrow mb-5">Women&rsquo;s Personal Gym Guide</p>
              <h1 className="font-serif text-[2.1rem] sm:text-4xl md:text-[3rem] leading-[1.3] text-ink mb-6">
                「変わりたい」を、<br />
                <span className="text-accent">一緒に</span>叶える場所へ。
              </h1>
              <p className="text-ink-soft text-[0.95rem] md:text-base leading-loose mb-9 max-w-lg">
                女性専用パーソナルジムだけを厳選しご紹介しております。料金・口コミ・特徴を、清潔感のある視点でていねいに比較します。あなたに合う一つが、きっと見つかります。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/ranking/" className="btn-primary text-sm md:text-base !px-9 !py-4 text-center">
                  おすすめランキングを見る
                </Link>
                <Link href="/guide/" className="btn-secondary text-sm md:text-base !px-9 !py-4 text-center">
                  選び方ガイドを読む
                </Link>
              </div>
              <div className="flex items-center gap-7 mt-10 text-ink-soft">
                <div>
                  <span className="font-display text-3xl text-accent leading-none">102</span>
                  <span className="text-xs ml-1.5">エリア対応</span>
                </div>
                <span className="w-px h-8 bg-line" />
                <div>
                  <span className="font-display text-3xl text-accent leading-none">546</span>
                  <span className="text-xs ml-1.5">ジムを独自調査</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strengths */}
        <section className="py-20 md:py-24 bg-ivory">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <SectionHeading
              en="Why Choose Us"
              title="女性が安心して続けられる理由"
              lead="清潔感のある環境と、女性に寄り添う設計。はじめての一歩を、気持ちよく踏み出せます。"
            />
            <div className="grid md:grid-cols-3 gap-8 md:gap-6">
              {strengths.map((s, i) => (
                <div key={i} className="fade-up text-center md:px-6">
                  <div className="w-14 h-14 mx-auto mb-6 text-accent">{s.icon}</div>
                  <h3 className="font-serif text-lg text-ink mb-3">{s.title}</h3>
                  <p className="text-ink-soft text-sm leading-loose">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gym Comparison */}
        <section className="py-20 md:py-24 bg-white" id="comparison">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <SectionHeading
              en="Comparison"
              title="人気の女性専用ジムを比較"
              lead="主要な女性専用パーソナルジム5社を、特徴と料金の目安で一覧にしました。"
            />
            <div className="fade-up overflow-x-auto rounded-2xl border border-line shadow-[0_18px_40px_-30px_rgba(38,34,30,0.3)]">
              <table className="w-full border-collapse text-sm bg-white min-w-[640px]">
                <thead>
                  <tr className="border-b-2 border-accent/30">
                    <th className="px-5 py-4 text-left font-semibold text-ink whitespace-nowrap">ジム名</th>
                    <th className="px-5 py-4 text-left font-semibold text-ink whitespace-nowrap">特徴</th>
                    <th className="px-5 py-4 text-left font-semibold text-ink whitespace-nowrap">料金目安</th>
                    <th className="px-5 py-4 text-center font-semibold text-ink whitespace-nowrap">タイプ</th>
                  </tr>
                </thead>
                <tbody>
                  {topGyms.map((gym, i) => (
                    <tr key={i} className={`border-b border-line last:border-0 ${i % 2 === 1 ? 'bg-ivory/60' : 'bg-white'}`}>
                      <td className="px-5 py-4 font-medium text-ink whitespace-nowrap">{gym.name}</td>
                      <td className="px-5 py-4 text-ink-soft">{gym.feature}</td>
                      <td className="px-5 py-4 text-ink-soft whitespace-nowrap">{gym.price}</td>
                      <td className="px-5 py-4 text-center">
                        <span className="inline-block bg-accent-tint text-accent-dark text-xs px-3 py-1 rounded-full whitespace-nowrap">{gym.badge}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-ink-faint text-xs mt-4 text-right">※料金は税込・目安です。最新情報は各公式サイトでご確認ください。</p>
          </div>
        </section>

        {/* Areas */}
        <section className="py-20 md:py-24 bg-ivory" id="areas">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <SectionHeading en="Area" title="エリアから探す" lead="全国102エリアの女性専用パーソナルジム情報をまとめています。主要エリアはこちら。" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 fade-up">
              {areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}/`}
                  className="group block bg-white border border-line rounded-xl px-4 py-5 text-center transition card-hover hover:border-accent/50"
                >
                  <span className="text-base font-medium text-ink block mb-1 group-hover:text-accent transition-colors">{area.name}</span>
                  <span className="text-ink-faint text-xs">{area.desc}</span>
                </Link>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-2 text-sm fade-up">
              <span className="text-ink-faint text-xs self-center mr-1">注目:</span>
              <Link href="/areas/naha/" className="px-3 py-1.5 bg-white border border-accent/40 rounded-full text-ink hover:border-accent transition">那覇</Link>
              <Link href="/areas/toyama/" className="px-3 py-1.5 bg-white border border-accent/40 rounded-full text-ink hover:border-accent transition">富山</Link>
              <Link href="/areas/sangenjaya/" className="px-3 py-1.5 bg-white border border-accent/40 rounded-full text-ink hover:border-accent transition">三軒茶屋</Link>
              <Link href="/areas/wakayama/" className="px-3 py-1.5 bg-white border border-accent/40 rounded-full text-ink hover:border-accent transition">和歌山</Link>
              <Link href="/areas/nagano/" className="px-3 py-1.5 bg-white border border-accent/40 rounded-full text-ink hover:border-accent transition">長野</Link>
              <Link href="/cost/" className="px-3 py-1.5 bg-accent text-white rounded-full hover:opacity-90 transition">料金相場ガイド</Link>
            </div>
            <div className="text-center mt-6">
              <Link href="/areas/" className="btn-outline text-sm inline-block">全国102エリアをすべて見る →</Link>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <SectionHeading en="Contents" title="ジム選びに役立つ情報" lead="はじめてでも迷わないためのガイドをご用意しています。" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { href: '/ranking/', n: '01', title: 'ランキングTOP10', desc: '女性専用パーソナルジムの人気ランキング。料金・口コミ・特徴を比較。' },
                { href: '/cost/', n: '02', title: '料金相場ガイド', desc: '2ヶ月コース・月額制・都度払いの料金を、わかりやすく徹底解説。' },
                { href: '/guide/', n: '03', title: '選び方ガイド', desc: '失敗しないパーソナルジムの選び方を、5つのポイントで解説。' },
              ].map((c) => (
                <Link key={c.href} href={c.href} className="group fade-up block bg-ivory border border-line rounded-2xl p-8 transition card-hover hover:border-accent/40">
                  <span className="font-display text-4xl text-accent/70 leading-none block mb-5">{c.n}</span>
                  <h3 className="font-serif text-lg text-ink mb-2.5 group-hover:text-accent transition-colors">{c.title}</h3>
                  <p className="text-ink-soft text-sm leading-loose">{c.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-accent text-xs mt-5 tracking-wide">
                    詳しく見る
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 目的・お悩みから探す（コラム導線） */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <SectionHeading en="Columns" title="目的・お悩みから探す" lead="女性トレーナー・完全個室・料金・目的別に、選び方をていねいに解説しています。" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 fade-up">
              {[
                { href: '/articles/josei-trainer/', label: '女性トレーナーで選ぶ' },
                { href: '/articles/private-kanshitsu/', label: '完全個室・プライベート' },
                { href: '/articles/ryokin-osaeru/', label: '料金を抑えるコツ' },
                { href: '/articles/joseisenyo-vs-kyoyo/', label: '女性専用 vs 男女共用' },
                { href: '/articles/shippai/', label: '失敗しない注意点' },
                { href: '/articles/josei-gym-data/', label: '独自調査（546ジム）' },
                { href: '/articles/diet/', label: 'ダイエット目的で選ぶ' },
                { href: '/articles/bodymake/', label: 'ボディメイクで選ぶ' },
                { href: '/articles/', label: '記事をすべて見る →' },
              ].map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="block bg-ivory border border-line rounded-xl px-4 py-4 text-center text-sm text-ink-soft transition card-hover hover:border-accent/50 hover:text-accent"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-24 bg-ivory" id="faq">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <SectionHeading en="FAQ" title="よくある質問" lead="パーソナルジム選びの疑問に、ていねいにお答えします。" />
            <div className="space-y-3">
              {faqs.slice(0, 5).map((faq, index) => (
                <details key={index} className="group fade-up bg-white border border-line rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer">
                    <h3 className="font-medium text-ink text-sm md:text-[0.95rem]">{faq.question}</h3>
                    <svg className="w-4 h-4 text-accent group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="px-5 pb-5 text-ink-soft leading-loose text-sm">{faq.answer}</div>
                </details>
              ))}
            </div>
            <div className="text-center mt-10 fade-up">
              <Link href="/faq/" className="inline-flex items-center gap-1.5 text-accent hover:text-accent-dark font-medium text-sm tracking-wide">
                すべての質問を見る
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="fade-up grid md:grid-cols-2 rounded-[1.6rem] overflow-hidden border border-line shadow-[0_30px_60px_-36px_rgba(38,34,30,0.3)]">
              <div className="bg-accent-tint px-8 py-12 md:px-12 md:py-16 flex flex-col justify-center">
                <p className="eyebrow mb-4">Start Today</p>
                <h2 className="font-serif text-2xl md:text-[1.85rem] leading-snug text-ink mb-5">
                  まずは、無料カウンセリングから。
                </h2>
                <p className="text-ink-soft text-sm leading-loose mb-8">
                  気になるジムの体験から始めてみましょう。いくつか比べてみると、あなたに合う一つが見えてきます。
                </p>
                <div>
                  <Link href="/ranking/" className="btn-primary text-sm md:text-base !px-9 !py-4 inline-block">
                    おすすめランキングを見る
                  </Link>
                </div>
              </div>
              <div className="relative min-h-[260px] md:min-h-0">
                <Image
                  src="/images/cta-woman.webp"
                  alt="明るく清潔感のあるスタジオに立つ女性"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <ScrollReveal />
    </>
  )
}

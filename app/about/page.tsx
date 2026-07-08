import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/about/' },
  title: '運営者情報',
  description: 'G-PersonalGymの運営者情報ページです。',
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main data-reveal className="pt-16">
        <section className="bg-gradient-to-br from-ivory via-ivory to-sand py-12">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h1 className="text-2xl md:text-3xl font-bold text-brand-text">運営者情報</h1>
          </div>
        </section>
        <section className="py-3 bg-white border-b border-line">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light"><Link href="/" className="hover:text-accent transition">ホーム</Link>{' > '}<span className="text-brand-muted">運営者情報</span></nav>
          </div>
        </section>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-white border border-line rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-line"><th className="px-6 py-4 bg-ivory text-left font-bold text-brand-text w-1/3">サイト名</th><td className="px-6 py-4 text-brand-muted">G-PersonalGym</td></tr>
                  <tr className="border-b border-line"><th className="px-6 py-4 bg-ivory text-left font-bold text-brand-text">URL</th><td className="px-6 py-4 text-brand-muted">https://woman-gym.com</td></tr>
                  <tr className="border-b border-line"><th className="px-6 py-4 bg-ivory text-left font-bold text-brand-text">運営者</th><td className="px-6 py-4 text-brand-muted">G-PersonalGym編集部</td></tr>
                  <tr className="border-b border-line"><th className="px-6 py-4 bg-ivory text-left font-bold text-brand-text">コンテンツ</th><td className="px-6 py-4 text-brand-muted">女性専用パーソナルジムの比較・ランキング・口コミ情報</td></tr>
                  <tr><th className="px-6 py-4 bg-ivory text-left font-bold text-brand-text">お問い合わせ</th><td className="px-6 py-4 text-brand-muted">サイト内のお問い合わせフォームよりご連絡ください</td></tr>
                </tbody>
              </table>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-bold text-brand-text mb-4">サイトについて</h2>
              <p className="text-brand-muted leading-relaxed mb-4">G-PersonalGymは、女性専用パーソナルジムの情報を比較・紹介するメディアです。実際のジム情報、料金、口コミなどを調査し、ジム選びに役立つ情報を提供しています。</p>
              <p className="text-brand-muted leading-relaxed mb-4">掲載情報は定期的に更新していますが、最新の料金やキャンペーン情報は各ジムの公式サイトでご確認ください。</p>
              <p className="text-brand-muted leading-relaxed">当サイトの記事には、アフィリエイトリンクが含まれている場合があります。</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

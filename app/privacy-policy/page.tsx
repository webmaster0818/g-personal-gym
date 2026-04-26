import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: 'G-PersonalGymのプライバシーポリシーです。',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <section className="bg-gradient-to-br from-rose-100 via-rose-50 to-purple-50 py-12">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h1 className="text-2xl md:text-3xl font-bold text-brand-text">プライバシーポリシー</h1>
          </div>
        </section>
        <section className="py-3 bg-white border-b border-rose-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-brand-light"><Link href="/" className="hover:text-rose-500 transition">ホーム</Link>{' > '}<span className="text-brand-muted">プライバシーポリシー</span></nav>
          </div>
        </section>
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8">
            <div>
              <h2 className="text-lg font-bold text-brand-text mb-3">1. 個人情報の取り扱いについて</h2>
              <p className="text-brand-muted text-sm leading-relaxed">当サイト（G-PersonalGym）は、ユーザーの個人情報を適切に管理し、法令および社会規範を遵守して取り扱います。</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-brand-text mb-3">2. 個人情報の収集</h2>
              <p className="text-brand-muted text-sm leading-relaxed">当サイトでは、お問い合わせの際にメールアドレスなどの個人情報をご提供いただく場合があります。これらの情報は、お問い合わせへの回答やサービス向上のためにのみ使用し、その他の目的で使用することはありません。</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-brand-text mb-3">3. アクセス解析ツールについて</h2>
              <p className="text-brand-muted text-sm leading-relaxed">当サイトでは、アクセス解析のためにGoogle Analyticsを使用する場合があります。Google Analyticsはトラフィックデータの収集のためにCookieを使用しています。トラフィックデータは匿名で収集されており、個人を特定するものではありません。</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-brand-text mb-3">4. 広告について</h2>
              <p className="text-brand-muted text-sm leading-relaxed">当サイトでは、第三者配信の広告サービスを利用する場合があります。広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-brand-text mb-3">5. アフィリエイトプログラムについて</h2>
              <p className="text-brand-muted text-sm leading-relaxed">当サイトは、各種アフィリエイトプログラムに参加しています。当サイトのリンクを経由して商品・サービスの購入等が行われた場合、当サイトに紹介料が支払われる場合があります。</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-brand-text mb-3">6. 免責事項</h2>
              <p className="text-brand-muted text-sm leading-relaxed">当サイトの情報は、できる限り正確な情報を提供するよう努めていますが、正確性や安全性を保証するものではありません。掲載情報をご利用いただく際は、各公式サイトで最新情報をご確認ください。</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-brand-text mb-3">7. プライバシーポリシーの変更</h2>
              <p className="text-brand-muted text-sm leading-relaxed">当サイトは、必要に応じてプライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当サイトに掲載した時点から効力を生じるものとします。</p>
            </div>
            <div className="border-t border-rose-100 pt-6">
              <p className="text-brand-light text-xs">制定日：2026年4月13日</p>
              <p className="text-brand-light text-xs">G-PersonalGym編集部</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

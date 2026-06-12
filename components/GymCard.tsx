'use client'

import { useState } from 'react'

type Review = {
  author: string
  rating: number
  date: string
  text: string
}

export type Gym = {
  officialUrl?: string
  name: string
  rating: number
  reviewCount?: number
  reviews?: Review[]
  price: string
  trial: string
  features: string[]
  description: string
  access: string
  address?: string
  popularPlan?: {
    name: string
    description: string
    price: string
  }
  options?: string[]
  userProfile?: {
    ageRange: string
    genderRatio: string
    purpose: string[]
  }
  basicInfo?: {
    hours: string
    closed: string
    facilities: string[]
  }
}

type GymCardProps = {
  gym: Gym
  index: number
}

// ジム運営元 → 公式サイトキャプチャ画像のマッピング（実在の公式サイトを撮影・目視検証済）
const GYM_IMAGES: { match: string; slug: string }[] = [
  { match: 'ビーコンセプト', slug: 'b-concept' },
  { match: 'OUTLINE', slug: 'outline' },
  { match: 'リボーンマイセルフ', slug: 'reborn-myself' },
  { match: 'エクササイズコーチ', slug: 'exercise-coach' },
  { match: '24/7', slug: '247workout' },
  { match: 'BEYOND', slug: 'beyond' },
  { match: 'Bodies', slug: 'bodies' },
  { match: 'Apple GYM', slug: 'apple-gym' },
  { match: 'UNDEUX', slug: 'undeux' },
  { match: 'かたぎり塾', slug: 'katagirijuku' },
]

function gymOfficialImage(name: string): string | null {
  const hit = GYM_IMAGES.find((g) => name.includes(g.match))
  return hit ? `/images/gyms/${hit.slug}.webp` : null
}

export function GymCard({ gym, index }: GymCardProps) {
  const [activeTab, setActiveTab] = useState<'plan' | 'options' | 'users' | 'basic' | 'map'>('plan')
  const [showReviews, setShowReviews] = useState(false)

  return (
    <div id={`gym-${index + 1}`} className="bg-white border border-line rounded-xl overflow-hidden hover:shadow-lg transition-shadow scroll-mt-24">
      {gymOfficialImage(gym.name) && (
        <div className="relative w-full h-44 sm:h-56 bg-ivory border-b border-line overflow-hidden">
          <img
            src={gymOfficialImage(gym.name)!}
            alt={`${gym.name}の公式サイト`}
            loading="lazy"
            className="w-full h-full object-cover object-top"
          />
          <span className="absolute bottom-2 right-2 bg-black/55 text-white text-[10px] px-2 py-0.5 rounded">
            公式サイトより
          </span>
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-brand-text">{index + 1}. {gym.name}</h3>
          <button
            onClick={() => setShowReviews(!showReviews)}
            className="flex items-center cursor-pointer hover:opacity-70 transition-opacity"
            title="口コミを表示"
          >
            <span className="text-yellow-500 mr-1">★</span>
            <span className="font-bold text-brand-text">{gym.rating}</span>
            {gym.reviewCount && <span className="text-brand-light text-xs ml-1">({gym.reviewCount})</span>}
            <svg className={`w-3 h-3 ml-1 text-brand-light transition-transform ${showReviews ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
        </div>

        {showReviews && gym.reviews && gym.reviews.length > 0 && (
          <div className="mb-4 bg-ivory border border-line rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-brand-text text-sm">利用者の口コミ</h4>
              <button onClick={() => setShowReviews(false)} className="text-brand-light hover:text-brand-text text-xs">閉じる</button>
            </div>
            <div className="space-y-3">
              {gym.reviews.slice(0, 3).map((review, i) => (
                <div key={i} className="bg-white border border-line rounded p-3">
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, starIndex) => (
                        <span key={starIndex} className={starIndex < review.rating ? 'text-yellow-500' : 'text-gray-300'}>★</span>
                      ))}
                    </div>
                    <span className="text-brand-light text-xs ml-2">{review.date}</span>
                  </div>
                  <p className="text-brand-muted text-sm leading-relaxed">{review.text}</p>
                </div>
              ))}
            </div>
            <p className="text-brand-light text-xs mt-3 text-center">※ 口コミはGoogle Mapsの投稿を参考に要約・再構成したものです</p>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {gym.features.map((feature, i) => (
            <span key={i} className="bg-ivory text-accent-dark px-3 py-1 rounded-full text-xs font-medium border border-line">
              {feature}
            </span>
          ))}
        </div>
        <p className="text-brand-muted text-sm leading-relaxed mb-4">{gym.description}</p>

        {/* Tab Navigation */}
        <div className="mb-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {(['plan', 'options', 'users', 'basic', 'map'] as const).map((tab) => {
              const labels = { plan: '人気プラン', options: 'オプション', users: 'ユーザー層', basic: '基本情報', map: '地図' }
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-medium whitespace-nowrap rounded-full transition-colors ${
                    activeTab === tab
                      ? 'bg-accent text-white'
                      : 'bg-ivory text-brand-muted hover:bg-accent-tint'
                  }`}
                >
                  {labels[tab]}
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-ivory border border-line rounded-lg p-4 min-h-[160px]">
          {activeTab === 'plan' && (
            <div>
              <h4 className="font-bold text-brand-text mb-2">{gym.popularPlan?.name || '基本コース'}</h4>
              <p className="text-brand-muted text-sm mb-3">{gym.popularPlan?.description || `${gym.name}の人気プラン。`}</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <span className="text-brand-light font-medium w-24">料金：</span>
                  <span className="text-brand-text font-bold">{gym.price}</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-brand-light font-medium w-24">体験：</span>
                  <span className="text-brand-text font-bold">{gym.trial}</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'options' && (
            <div>
              <h4 className="font-bold text-brand-text mb-3">サービス・オプション</h4>
              <ul className="space-y-2 text-sm text-brand-muted">
                {(gym.options || ['ウェアレンタル無料', 'タオル完備', 'シャワー完備', '食事指導あり']).map((option, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-accent mr-2">・</span>
                    <span>{option}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'users' && (
            <div>
              <h4 className="font-bold text-brand-text mb-3">利用者層</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-brand-light font-medium">年齢層：</span>
                  <span className="text-brand-text ml-2">{gym.userProfile?.ageRange || '20代〜40代が中心'}</span>
                </div>
                <div>
                  <span className="text-brand-light font-medium">男女比：</span>
                  <span className="text-brand-text ml-2">{gym.userProfile?.genderRatio || '女性100%'}</span>
                </div>
                <div>
                  <span className="text-brand-light font-medium">目的：</span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {(gym.userProfile?.purpose || ['ダイエット', 'ボディメイク', '姿勢改善']).map((purpose, i) => (
                      <span key={i} className="bg-white text-brand-muted px-3 py-1 rounded-full text-xs border border-line">{purpose}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'basic' && (
            <div>
              <h4 className="font-bold text-brand-text mb-3">基本情報</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-brand-light font-medium">営業時間：</span>
                  <span className="text-brand-text ml-2">{gym.basicInfo?.hours || '10:00〜22:00'}</span>
                </div>
                <div>
                  <span className="text-brand-light font-medium">定休日：</span>
                  <span className="text-brand-text ml-2">{gym.basicInfo?.closed || '不定休'}</span>
                </div>
                <div>
                  <span className="text-brand-light font-medium">アクセス：</span>
                  <span className="text-brand-text ml-2">{gym.access}</span>
                </div>
                <div>
                  <span className="text-brand-light font-medium">設備：</span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {(gym.basicInfo?.facilities || ['完全個室', 'シャワー', 'ロッカー']).map((f, i) => (
                      <span key={i} className="bg-white text-brand-muted px-3 py-1 rounded-full text-xs border border-line">{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'map' && (
            <div>
              <h4 className="font-bold text-brand-text mb-3">アクセス情報</h4>
              <div className="mb-4">
                <p className="text-brand-light text-xs font-medium mb-2">最寄駅からのアクセス</p>
                <p className="text-brand-text text-sm">{gym.access}</p>
              </div>
              {gym.address && (
                <div className="mb-4">
                  <p className="text-brand-light text-xs font-medium mb-2">住所</p>
                  <p className="text-brand-text text-sm">{gym.address}</p>
                </div>
              )}
              {gym.address && (
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${gym.name} ${gym.address}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-accent text-white px-4 py-3 rounded-lg text-sm font-medium hover:bg-accent-dark transition"
                >
                  Google Mapで見る
                </a>
              )}
            </div>
          )}
        </div>

        <div className="mt-4">
          <a href={gym.officialUrl || `https://www.google.com/search?q=${encodeURIComponent(gym.name + ' 公式')}`} target="_blank" rel={gym.officialUrl ? 'noopener noreferrer sponsored' : 'noopener noreferrer'} className="inline-block bg-accent text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-accent-dark transition">
            公式サイトを見る
          </a>
        </div>
      </div>
    </div>
  )
}

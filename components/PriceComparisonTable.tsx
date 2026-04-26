'use client'

import { Gym } from './GymCard'

type Props = {
  gyms: Gym[]
  areaName: string
}

function hasFeature(features: string[], pattern: RegExp): boolean {
  return features.some(f => pattern.test(f))
}

function Badge({ active, label }: { active: boolean; label: string }) {
  if (!active) return null
  return (
    <span className="inline-block bg-rose-50 text-rose-600 text-[10px] px-1.5 py-0.5 rounded font-medium border border-rose-200">
      {label}
    </span>
  )
}

export function PriceComparisonTable({ gyms, areaName }: Props) {
  const isWomenOnly = (f: string[]) => hasFeature(f, /女性専用|女性限定/)
  const isPrivateRoom = (f: string[]) => hasFeature(f, /完全個室|個室/)
  const hasMealGuide = (f: string[]) => hasFeature(f, /食事指導|食事管理|栄養/)

  return (
    <section className="py-8 bg-white" id="price-comparison">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <h2 className="text-xl md:text-2xl font-bold text-brand-text mb-1 text-center">
          {areaName}の女性向けパーソナルジム 料金比較表
        </h2>
        <p className="text-brand-light text-xs text-center mb-4">
          {gyms.length}ジムの料金・特徴を一覧で比較
        </p>

        {/* Mobile */}
        <div className="md:hidden space-y-1.5">
          {gyms.map((gym, i) => (
            <a
              key={i}
              href={`#gym-${i + 1}`}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-rose-100 hover:border-rose-300 transition bg-white"
            >
              <span className="text-rose-400 text-xs font-bold w-5 shrink-0">{i + 1}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-brand-text text-sm truncate">{gym.name}</span>
                  {gym.rating ? (
                    <span className="text-xs text-brand-light shrink-0">
                      <span className="text-yellow-500">★</span>{gym.rating}
                    </span>
                  ) : null}
                </div>
                <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                  <span className="text-brand-muted text-xs font-medium">{gym.price}</span>
                  <span className="text-brand-light text-[10px]">|</span>
                  <span className="text-brand-light text-[10px]">{gym.trial}</span>
                </div>
                <div className="flex gap-1 mt-1">
                  <Badge active={isWomenOnly(gym.features)} label="女性専用" />
                  <Badge active={isPrivateRoom(gym.features)} label="完全個室" />
                  <Badge active={hasMealGuide(gym.features)} label="食事指導" />
                </div>
              </div>
              <svg className="w-4 h-4 text-rose-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-rose-500 text-white">
                <th className="px-3 py-2.5 text-left font-bold whitespace-nowrap">ジム名</th>
                <th className="px-3 py-2.5 text-left font-bold whitespace-nowrap">料金</th>
                <th className="px-3 py-2.5 text-center font-bold whitespace-nowrap">評価</th>
                <th className="px-3 py-2.5 text-center font-bold whitespace-nowrap">体験</th>
                <th className="px-3 py-2.5 text-center font-bold whitespace-nowrap">女性専用</th>
                <th className="px-3 py-2.5 text-center font-bold whitespace-nowrap">完全個室</th>
                <th className="px-3 py-2.5 text-center font-bold whitespace-nowrap">食事指導</th>
              </tr>
            </thead>
            <tbody>
              {gyms.map((gym, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-rose-50/50'}>
                  <td className="px-3 py-2 font-medium text-brand-text whitespace-nowrap">
                    <a href={`#gym-${i + 1}`} className="hover:text-rose-500 transition underline decoration-dotted underline-offset-2">
                      {i + 1}. {gym.name}
                    </a>
                  </td>
                  <td className="px-3 py-2 text-brand-muted font-medium whitespace-nowrap">{gym.price}</td>
                  <td className="px-3 py-2 text-center">
                    {gym.rating ? (
                      <>
                        <span className="text-yellow-500">★</span>
                        <span className="text-brand-muted font-medium">{gym.rating}</span>
                      </>
                    ) : <span className="text-gray-300">-</span>}
                  </td>
                  <td className="px-3 py-2 text-center text-brand-muted text-xs">{gym.trial}</td>
                  <td className="px-3 py-2 text-center">{isWomenOnly(gym.features) ? <span className="text-rose-500 font-bold">○</span> : <span className="text-gray-300">-</span>}</td>
                  <td className="px-3 py-2 text-center">{isPrivateRoom(gym.features) ? <span className="text-purple-500 font-bold">○</span> : <span className="text-gray-300">-</span>}</td>
                  <td className="px-3 py-2 text-center">{hasMealGuide(gym.features) ? <span className="text-green-500 font-bold">○</span> : <span className="text-gray-300">-</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-brand-light text-xs mt-2 text-right">※ 料金は税込表示。最新の料金は各ジム公式サイトでご確認ください。</p>
      </div>
    </section>
  )
}

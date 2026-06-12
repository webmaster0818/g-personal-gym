export function WhyWomenOnly({ area }: { area?: string }) {
  const items = [
    { t: "人目を気にせず集中できる", d: "男性の視線がない環境で、初心者でも安心してトレーニングに取り組めます。完全個室ならさらにプライベートが守られます。" },
    { t: "女性の体に合わせた指導", d: "生理周期やホルモンバランス、産後の体型変化など、女性特有の悩みを踏まえたメニュー設計を受けられます。" },
    { t: "設備・アメニティの配慮", d: "パウダールームやアメニティが充実している店舗が多く、仕事帰りや外出ついでにも通いやすい環境です。" },
    { t: "続けやすい雰囲気", d: "同じ目的を持つ女性が多く、スタッフも女性の利用に慣れているため、相談しやすく継続しやすいのが魅力です。" },
  ]
  return (
    <section className="py-12 bg-ivory">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-brand-text mb-6">
          なぜ「女性専用」パーソナルジムを選ぶのか
        </h2>
        <p className="text-brand-muted leading-relaxed mb-6">
          {area ? `${area}でジムを選ぶなら、` : ''}女性専用パーソナルジムには、一般的なジムにはないメリットがあります。ボディメイクやダイエットを無理なく続けるために、次の4つの観点をチェックしましょう。
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((it, i) => (
            <div key={i} className="bg-white border border-line rounded-xl p-5">
              <p className="font-bold text-brand-text mb-2"><span className="text-accent mr-1">●</span>{it.t}</p>
              <p className="text-sm text-brand-muted leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-brand-light mt-4">
          ※ サービス内容・設備は店舗により異なります。詳細は各ジムの無料カウンセリングでご確認ください。
        </p>
      </div>
    </section>
  )
}

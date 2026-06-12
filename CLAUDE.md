# woman-gym.com（G-PersonalGym）— 女性専用パーソナルジム比較

Discord ch: `1497147533535744143` / source=webmaster0818/g-personal-gym(§16トークンHTTPS)→g-personal-gym-deploy

## 作業ログ

### 2026-06-12 MediaXAI依頼: 最短・最大成長戦略（ASP以外）
GSC実数診断（URL-prefix https://woman-gym.com/）:
- 28日: クリック0・表示5・ホームのみ＝実質ゼロ地点（データ開始5月末）
- サイト=37ページ（TOP/ranking/cost/guide/faq＋東京中心エリア約30）
- 市場=最激戦区。勝ち筋①エリア×ロングテール（pilates方式移植）②ニッチ切り口（産後/ブライダル/年代別/医療提携）

戦略（Discord報告済み・承認待ち）:
- Phase 0 = 既存37ページ土台整備（タイトル鮮度/相互リンク/Indexing API/実在ジム情報拡充）
- Phase 1 = エリア面拡大（東京残り駅＋横浜大阪名古屋の区、週20-30、実在ジム2-4件/エリア）
- Phase 2 = ニッチKnow記事クラスタ＋独自データ比較
- KPI: 8月末 月50クリック・エリア100本

### 2026-06-12 Phase 0実行（MediaXAI承認）
- タイトル鮮度32ページ／GymCardにofficialUrl対応（無ければGoogle検索フォールバック・rel sponsored）／6ブランドの公式URL（全てfetch実在確認）を131件注入／Indexing API 37/37成功
- ⚠️注意: クレビック公式が521停止中（閉業疑い・リンク未設定）。リボーンマイセルフは店舗一覧が3店舗に縮小（掲載整合の確認要）
- ⚠️教訓: deployの .txt 一括削除が **robots.txt を消した**（即復元済み）。今後は `-name '*.txt' ! -name 'robots.txt'` で除外すること
- レビュー/評価データの出所が未検証（pilatesはGoogleマップ実数に更新した経緯あり）→Phase 1で要確認

# Koetyping

Koetyping は Next.jsで作られたタイピングアプリです。

## 主な機能

- 2つの入力モード: 音声認識モード（Web Speech API を使用）とキーボードモード（テキスト入力）
- 単語単位の正誤判定: 各文は単語（`text` と `yomi`）に分割し、漢字または読みで一致を判定します
- スコア保存とランキング: `POST /api/score`（`app/api/score/route.ts`）でスコアを検証・保存し、`GET /api/score` でランキングを取得できます。

## 前提条件

- Node.js 18 以上
- PostgreSQL（ローカルまたは外部ホスティング）

## セットアップ（ローカル開発）

1. 依存関係をインストールします。

```bash
npm install
```

2. プロジェクトルートに `.env` を作り、Postgres の接続文字列を設定します

```env
DATABASE_URL=""
```

3. Prisma クライアントを生成し、マイグレーションを適用します。

```bash
npx prisma generate
```

4. 開発サーバーを起動します。

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開いてアプリを確認してください。

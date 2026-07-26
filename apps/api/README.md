# Tomokichi API

Cloudflare Workers 上で動作する Hono API です。

## ローカル開発

依存関係はリポジトリルートでインストールします。

```sh
pnpm install
pnpm --filter @tomokichi/api dev
```

お問い合わせメールを実際には送らずに API を確認する場合:

```sh
pnpm --filter @tomokichi/api exec wrangler dev --port 8787 --var SUPPORT_MOCK_DELIVERY:true
```

実際に Resend へ送信する場合は、Git の追跡対象外である `.dev.vars` を作り、
`RESEND_API_KEY=re_xxxxxxxxx` の形式で有効なキーを設定してください。

## 検証

```sh
pnpm --filter @tomokichi/api check
pnpm --filter @tomokichi/api test
pnpm --filter @tomokichi/api build
```

## デプロイ

最初に本番 Secret を対話形式で登録します。

```sh
cd apps/api
pnpm wrangler secret put RESEND_API_KEY
```

その後、リポジトリルートからデプロイします。

```sh
pnpm --filter @tomokichi/api deploy
```

設定変更後は Worker 型を更新します。

```sh
pnpm --filter @tomokichi/api cf-typegen
```

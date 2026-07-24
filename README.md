# tomokichi app studio

Tomokichiの小さなアプリをまとめたpnpm + Turborepo monorepoです。

## Local development

```bash
pnpm install
pnpm dev
```

各アプリは個別にも起動できます。

```bash
pnpm --filter @tomokichi/main dev     # http://localhost:4321
pnpm --filter @tomokichi/remeet dev   # http://localhost:4322
pnpm --filter @tomokichi/tripory dev  # http://localhost:4323
pnpm --filter @tomokichi/api dev      # http://localhost:8787
```

## Checks

```bash
pnpm check
pnpm test
pnpm build
```

## Cloudflare deployment

各アプリは専用のWrangler設定を持つCloudflare Workers Static Assetsとして個別にデプロイできます。

- `apps/main/wrangler.jsonc` → `tomokichi-main`
- `apps/remeet/wrangler.jsonc` → `tomokichi-remeet`
- `apps/tripory/wrangler.jsonc` → `tomokichi-tripory`
- `apps/api/wrangler.jsonc` → `tomokichi-api`

GitHub ActionsのRepository secretsに `CLOUDFLARE_API_TOKEN` と `CLOUDFLARE_ACCOUNT_ID` を設定し、Repository variable `CLOUDFLARE_DEPLOY_ENABLED=true` を設定してください。`main`ブランチに変更をpushすると、変更されたアプリだけがビルド・デプロイされます。Cloudflareの設定前はデプロイjobが自動的にskipされるため、CIを赤くしません。各デプロイworkflowはActionsから手動実行もできます。

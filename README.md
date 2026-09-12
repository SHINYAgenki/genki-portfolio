# ポートフォリオサイト

## 技術スタック

- React 19.2.8
- TypeScript 6.0.2
- Vite 8.3.0
- oxlint 1.81.0（Linter）
- oxfmt 0.67.0（Formatter）

## 実行環境

- Node.js 24.14.0
- npm 11.9.0

`.nvmrc` を同梱しているので、`nvm use` を実行するとこのプロジェクトが想定するNode.jsバージョンに切り替えられます。

## Lint・フォーマット

| コマンド               | 内容                                                         |
| ---------------------- | ------------------------------------------------------------ |
| `npm run lint`         | oxlintでコードの問題をチェックする                           |
| `npm run format`       | oxfmtでファイルを整形する（ファイルを書き換える）            |
| `npm run format:check` | 整形されていないファイルがないかチェックする（書き換えない） |

フォーマットの設定は `.oxfmtrc.json` にあります。

GitHub Actions（`lint-check`）では、`main` ブランチへのpush・プルリクエスト時に `npm run lint` と `npm run format:check` を実行します。整形漏れがあるとCIが失敗するので、コミット前に `npm run format` を実行してください。

## GitHub Actionsのバージョン管理

pinactを使用して、GitHub Actionsのアクションのバージョンをコミットハッシュで固定しています。

- [pinact](https://github.com/suzuki-shunsuke/pinact)

**サプライチェーン攻撃のリスクを減らすため、原則として7日間のクールダウン期間 `--min-age 7`を設定してください。**

```shell
# 固定
pinact run --min-age 7

# 更新
pinact run --update --min-age 7
```

# ポートフォリオサイト

## 技術スタック
- React 19.2.8
- TypeScript 6.0.2
- Vite 8.3.0
- oxlint 1.81.0（Linter）

## 実行環境
- Node.js 24.14.0
- npm 11.9.0

`.nvmrc` を同梱しているので、`nvm use` を実行するとこのプロジェクトが想定するNode.jsバージョンに切り替えられます。

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
# YouTube Account Switcher

YouTube視聴目的別アカウント自動切り替え拡張機能

## 🎯 機能

- YouTubeアクセス時に視聴目的を選択
- 目的に応じて適切なGoogleアカウントに自動切り替え
- 視覚的で直感的なUI

## ✅ 対応ブラウザ

- Google Chrome
- Brave

## 📋 必要な環境

- Node.js (v18以上推奨)
- npm または yarn

## 📋 事前準備

**重要**: この拡張機能を使用する前に、ブラウザで複数のGoogleアカウントにログインしておく必要があります。

1. YouTube (https://www.youtube.com) にアクセス
2. 右上のプロフィールアイコンをクリック
3. 「アカウントを追加」から4つのGoogleアカウントを追加
4. すべてのアカウントでログイン状態を維持

### アカウントの対応表

| 目的 | アカウント順序 | 推奨用途 |
|------|---------------|---------|
| 👤 デフォルト | 1番目 | メインアカウント |
| 📚 学習 | 2番目 | プログラミング、チュートリアル |
| 🎮 遊び | 3番目 | ゲーム実況、エンタメ動画 |
| 🎵 音楽 | 4番目 | ミュージックビデオ、ライブ |

## 🚀 インストール方法

### 1. 依存パッケージのインストール

```bash
cd youtube-account-switcher
npm install
```

### 2. ビルド

```bash
npm run build
```

成功すると `dist/` フォルダが作成されます。

### 3. ブラウザに拡張機能を追加

#### Google Chrome

1. Chromeブラウザを開く
2. アドレスバーに `chrome://extensions/` と入力してアクセス
3. 右上の「デベロッパーモード」をオンにする
4. 「パッケージ化されていない拡張機能を読み込む」ボタンをクリック
5. プロジェクトの `dist` フォルダを選択
6. 拡張機能がインストールされ、ツールバーにアイコンが表示される

#### Brave

1. Braveブラウザを開く
2. アドレスバーに `brave://extensions/` と入力してアクセス
3. 右上の「デベロッパーモード」をオンにする
4. 「パッケージ化されていない拡張機能を読み込む」ボタンをクリック
5. プロジェクトの `dist` フォルダを選択
6. 拡張機能がインストールされ、ツールバーにアイコンが表示される

## 📖 使い方

1. ツールバーの拡張機能アイコンをクリック
2. 視聴目的を選択
3. 該当するアカウントに自動切り替え

## 🛠️ 開発

```bash
# 開発モード（ホットリロード）
npm run dev

# ビルド
npm run build
```

コード変更後は再ビルドし、ブラウザの拡張機能ページで「再読み込み」をクリックしてください。

## ⚙️ カスタマイズ

### デザインの変更

`src/popup/Popup.jsx` の `purposes` 配列を編集:

```jsx
const purposes = [
  {
    id: 'custom',
    emoji: '✨',           // 絵文字を変更
    label: 'カスタム',      // ラベルを変更
    accountIndex: 0,
    color: '#ff69b4',      // 色を変更
    description: 'あなた専用の目的'
  },
  // ...
];
```

変更後は `npm run build` で再ビルドが必要です。

## 📂 ファイル構成

```
youtube-account-switcher/
├── manifest.json           # 拡張機能の設定
├── package.json            # npm設定
├── vite.config.js          # Viteビルド設定
├── src/
│   └── popup/              # ポップアップ画面
│       ├── popup.html
│       ├── Popup.jsx
│       └── Popup.module.scss
└── public/
    └── icons/              # 拡張機能アイコン
        └── ICON_GUIDE.md
```

## 🔧 技術スタック

- **React 18** - UIフレームワーク
- **SCSS Modules** - スコープ付きスタイリング
- **Vite** - 高速ビルドツール
- **Chrome Extension Manifest V3** - 最新仕様

## 🎨 カラースキーム

- デフォルト: `#a0aec0` (グレー)
- 学習: `#4ecdc4` (青緑)
- 遊び: `#ff6b6b` (赤)
- 音楽: `#ffe66d` (黄)

## 🐛 トラブルシューティング

### ビルドエラー

**Windows:**
```cmd
# キャッシュをクリアして再ビルド
rmdir /s /q node_modules dist
npm install
npm run build
```

**Mac/Linux:**
```bash
# キャッシュをクリアして再ビルド
rm -rf node_modules dist
npm install
npm run build
```

### 拡張機能が動作しない

1. ブラウザのコンソール (F12) でエラーを確認
2. 拡張機能が有効になっているか確認
3. 拡張機能ページで「再読み込み」をクリック

### アカウントが切り替わらない

- YouTubeに複数のGoogleアカウントでログインしているか確認
- 各アカウントでログイン状態が維持されているか確認

**Q: 開発モードで使いたい**
A: `npm run dev` でホットリロード可能です。

## ⚠️ 注意事項

- Googleアカウントは事前に追加しておく必要があります
- プライベートウィンドウ/シークレットモードでは動作しません
- 初回アクセス時、一部アカウントで再ログインが必要な場合があります
- Manifest V3形式のため、Firefox等の非Chromiumブラウザでは動作しない可能性があります

## 📦 本番環境向けビルド

```bash
# 本番ビルド
npm run build
```

**Windows (PowerShell):**
```powershell
# distフォルダをzipに圧縮（Chrome Web Store公開用）
Compress-Archive -Path dist\* -DestinationPath youtube-account-switcher.zip -Force
```

**Mac/Linux:**
```bash
# distフォルダをzipに圧縮（Chrome Web Store公開用）
cd dist
zip -r ../youtube-account-switcher.zip .
```

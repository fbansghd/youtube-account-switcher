# YouTube Account Switcher - プロジェクトサマリー

## 📁 ファイル構成

```
youtube-account-switcher/
├── README.md                              # プロジェクト概要
├── SETUP.md                               # セットアップ完全ガイド
├── package.json                           # npm設定
├── vite.config.js                         # Viteビルド設定
├── manifest.json                          # 拡張機能マニフェスト
├── .gitignore                            # Git除外設定
│
├── public/
│   └── icons/                            # 拡張機能アイコン
│       ├── ICON_GUIDE.md                 # アイコン作成ガイド
│       ├── icon16.png                    # (要作成) 16x16アイコン
│       ├── icon48.png                    # (要作成) 48x48アイコン
│       └── icon128.png                   # (要作成) 128x128アイコン
│
└── src/
    ├── content/                          # コンテンツスクリプト
    │   ├── content.jsx                   # エントリーポイント
    │   ├── AccountSwitcher.jsx           # メインモーダルコンポーネント
    │   └── AccountSwitcher.module.scss   # モーダルスタイル
    │
    └── popup/                            # 設定画面
        ├── popup.html                    # ポップアップHTML
        ├── Popup.jsx                     # 設定画面コンポーネント
        └── Popup.module.scss             # 設定画面スタイル
```

## 🎯 各ファイルの役割

### ルートファイル

- **README.md**: プロジェクトの概要、機能説明、インストール方法
- **SETUP.md**: 詳細なセットアップ手順とトラブルシューティング
- **package.json**: プロジェクトの依存関係とスクリプト定義
- **vite.config.js**: ViteとCRXプラグインの設定
- **manifest.json**: Chrome拡張機能の設定（permissions、content_scriptsなど）

### src/content/ (YouTubeページに注入される部分)

- **content.jsx**: 
  - Reactのルート作成
  - DOMへのマウント処理
  - ページ読み込みタイミングの制御

- **AccountSwitcher.jsx**:
  - 視聴目的選択モーダルのReactコンポーネント
  - アカウント切り替えロジック (authuser パラメータ)
  - Chrome Storage APIとの連携

- **AccountSwitcher.module.scss**:
  - モーダルのスタイル定義
  - アニメーション (fadeIn, slideUp, bounce)
  - レスポンシブデザイン

### src/popup/ (拡張機能アイコンクリック時の設定画面)

- **popup.html**:
  - ポップアップのHTMLテンプレート
  - Reactのマウントポイント

- **Popup.jsx**:
  - アカウント名のカスタマイズUI
  - Chrome Storage APIへの保存処理
  - 設定の読み込み・更新

- **Popup.module.scss**:
  - 設定画面のスタイル定義
  - 入力フォームのデザイン
  - 保存ボタンのアニメーション

## 🔧 技術スタック

- **React 18**: UIコンポーネント
- **SCSS Modules**: スコープ付きスタイリング
- **Vite**: 高速ビルドツール
- **@crxjs/vite-plugin**: Chrome拡張機能ビルド
- **Chrome Extension Manifest V3**: 最新の拡張機能仕様

## 🎨 デザインシステム

### カラーパレット

```scss
// メイングラデーション
$gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

// 目的別カラー
$color-gaming: #ff6b6b;    // 赤 (ゲーム・エンタメ)
$color-learning: #4ecdc4;  // 青緑 (学習・技術)
$color-music: #ffe66d;     // 黄 (音楽)
$color-work: #a8dadc;      // 水色 (仕事)
```

### アニメーション

- **fadeIn**: 0.3s - オーバーレイの表示
- **slideUp**: 0.4s - モーダルのスライドアップ
- **bounce**: 1s infinite - アイコンの上下運動
- **spin**: 0.8s infinite - ローディングスピナー

## 🔄 データフロー

```
1. YouTube訪問
   ↓
2. content.jsx がページに注入される
   ↓
3. AccountSwitcher.jsx がモーダル表示
   ↓
4. Chrome Storage から保存済みアカウント名を読み込み
   ↓
5. ユーザーが目的を選択
   ↓
6. authuser パラメータ付きでURLを更新
   ↓
7. ページリロード → 選択したアカウントで表示
```

## 📦 ビルドプロセス

```bash
npm run build
   ↓
Vite + @crxjs/vite-plugin
   ↓
React/JSX → JavaScript変換
SCSS Modules → CSS変換
   ↓
dist/ に出力
   ├── manifest.json
   ├── src/content/content.js
   ├── src/content/content.css
   ├── src/popup/popup.html
   ├── src/popup/popup.js
   └── icons/
```

## ⚙️ Chrome Extension API 使用状況

### Storage API
```javascript
// 保存
chrome.storage.local.set({ accounts })

// 読み込み
chrome.storage.local.get(['accounts'], (result) => { ... })
```

### Permissions
- `storage`: アカウント名の保存
- `https://www.youtube.com/*`: YouTubeページへのアクセス

## 🚀 次のステップ

### 必須タスク
1. ✅ プロジェクトファイル作成完了
2. ⏳ アイコン画像の作成 (public/icons/)
3. ⏳ npm install の実行
4. ⏳ npm run build の実行
5. ⏳ Braveへのインストール

### オプション機能（今後追加可能）
- [ ] 視聴履歴に基づく自動推奨
- [ ] 時間帯別の自動切り替え
- [ ] カスタムテーマカラー設定
- [ ] ショートカットキー対応
- [ ] 統計ダッシュボード

## 📞 サポート

問題が発生した場合:
1. SETUP.md のトラブルシューティングを確認
2. ブラウザのコンソール (F12) でエラーログを確認
3. `npm run build` で再ビルド
4. Braveで拡張機能を再読み込み

# YouTube Account Switcher

YouTube視聴目的別アカウント自動切り替え拡張機能

## 🎯 機能

- YouTubeアクセス時に視聴目的を選択
- 目的に応じて適切なGoogleアカウントに自動切り替え
- 視覚的で直感的なUI

## 📋 事前準備

**重要**: この拡張機能を使用する前に、Braveで複数のGoogleアカウントにログインしておく必要があります。

1. YouTube (https://www.youtube.com) にアクセス
2. 右上のプロフィールアイコンをクリック
3. 「アカウントを追加」から最大4つのGoogleアカウントを追加
4. すべてのアカウントでログイン状態を維持

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

### 3. Braveに拡張機能を追加

1. Braveブラウザを開く
2. `brave://extensions/` にアクセス
3. 右上の「デベロッパーモード」を有効化
4. 「パッケージ化されていない拡張機能を読み込む」をクリック
5. `dist` フォルダを選択

## 📖 使い方

1. YouTubeにアクセス
2. 視聴目的選択モーダルが表示される
3. 目的を選択すると、該当するアカウントに自動切り替え

## ⚙️ カスタマイズ

拡張機能のアイコンをクリックして、各アカウントの名前をカスタマイズできます。

## 🛠️ 開発

```bash
# 開発モード
npm run dev

# ビルド
npm run build
```

## 📂 ファイル構成

```
youtube-account-switcher/
├── manifest.json           # 拡張機能の設定
├── src/
│   ├── content/           # コンテンツスクリプト
│   │   ├── content.jsx
│   │   ├── AccountSwitcher.jsx
│   │   └── AccountSwitcher.module.scss
│   ├── popup/             # 設定画面
│   │   ├── popup.html
│   │   ├── Popup.jsx
│   │   └── Popup.module.scss
│   └── background/        # バックグラウンドスクリプト
│       └── background.js
└── public/
    └── icons/
```

## 🎨 カラースキーム

- ゲーム・エンタメ: `#ff6b6b` (赤)
- 学習・技術系: `#4ecdc4` (青緑)
- 音楽: `#ffe66d` (黄)
- 仕事関連: `#a8dadc` (水色)

## ⚠️ 注意事項

- Googleアカウントは事前に追加しておく必要があります
- プライベートウィンドウでは動作しません
- 初回アクセス時、一部アカウントで再ログインが必要な場合があります

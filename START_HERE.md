# 🎉 YouTube Account Switcher - 完成！

YouTube視聴目的別アカウント自動切り替え拡張機能が完成しました！

## 📦 納品内容

```
youtube-account-switcher/
│
├── 📖 ドキュメント
│   ├── README.md              プロジェクト概要
│   ├── QUICKSTART.md          5分でインストール（推奨）
│   ├── SETUP.md               詳細セットアップガイド
│   └── PROJECT_SUMMARY.md     技術仕様・ファイル構成
│
├── ⚙️ 設定ファイル
│   ├── package.json           依存関係定義
│   ├── vite.config.js         ビルド設定
│   ├── manifest.json          拡張機能設定
│   └── .gitignore            Git除外設定
│
├── 🎨 ソースコード
│   └── src/
│       ├── content/           コンテンツスクリプト
│       │   ├── content.jsx
│       │   ├── AccountSwitcher.jsx
│       │   └── AccountSwitcher.module.scss
│       │
│       └── popup/             設定画面
│           ├── popup.html
│           ├── Popup.jsx
│           └── Popup.module.scss
│
└── 🖼️ アイコン（要作成）
    └── public/icons/
        └── ICON_GUIDE.md      アイコン作成ガイド
```

## 🚀 今すぐ始める

### 最短手順（5分）

```bash
# 1. ディレクトリに移動
cd youtube-account-switcher

# 2. パッケージインストール
npm install

# 3. ビルド
npm run build

# 4. Braveで brave://extensions/ を開く
# 5. デベロッパーモードON
# 6. 「パッケージ化されていない拡張機能を読み込む」
# 7. dist/ フォルダを選択
```

詳細は **QUICKSTART.md** を参照してください。

## ✨ 主な機能

### 1. 視聴目的選択モーダル
- YouTubeアクセス時に自動表示
- 4つの目的から選択
- 美しいグラデーションUI

### 2. 自動アカウント切り替え
- Googleの複数アカウント機能を活用
- authuser パラメータで切り替え
- 完全自動、手動操作不要

### 3. カスタマイズ可能
- アカウント名の設定
- 拡張機能アイコンから簡単設定

## 🎨 UI/UXの特徴

### デザイン
- モダンなグラデーション (#667eea → #764ba2)
- スムーズなアニメーション
- 直感的なカード型UI

### アニメーション
- フェードイン/アウト
- スライドアップ
- バウンス効果
- ホバーエフェクト

### カラースキーム
- 🎮 ゲーム: `#ff6b6b` (赤)
- 📚 学習: `#4ecdc4` (青緑)
- 🎵 音楽: `#ffe66d` (黄)
- 💼 仕事: `#a8dadc` (水色)

## 🛠️ 技術スタック

- **React 18** - UIフレームワーク
- **SCSS Modules** - スコープ付きスタイリング
- **Vite** - 高速ビルドツール
- **Chrome Extension Manifest V3** - 最新仕様

## 📝 開発の流れ

### 初回セットアップ
```bash
npm install        # 依存関係インストール
npm run build      # ビルド
```

### 開発中
```bash
npm run dev        # 開発モード（ホットリロード）
```

### コード変更後
```bash
npm run build      # 再ビルド
# → Braveで拡張機能を再読み込み
```

## ⚠️ 重要な注意点

### 1. Googleアカウントの事前準備が必須
YouTubeで複数のGoogleアカウントにログインしておく必要があります。

### 2. アイコンについて
開発中はアイコンなしでも動作しますが、公開時には必要です。
`public/icons/ICON_GUIDE.md` を参照して作成してください。

### 3. プライベートウィンドウでは動作しません
通常のウィンドウで使用してください。

## 🎯 使用例

### 平日の朝
目的: 📚 学習・技術系
→ プログラミングチュートリアル用アカウント

### 仕事中
目的: 💼 仕事関連
→ ビジネス・セミナー用アカウント

### 休日の夜
目的: 🎮 ゲーム・エンタメ
→ ゲーム実況・エンタメ用アカウント

### リラックスタイム
目的: 🎵 音楽
→ ミュージックビデオ専用アカウント

## 🔧 カスタマイズ例

### 目的を変更したい場合
`src/content/AccountSwitcher.jsx` の `purposes` 配列を編集:

```jsx
{
  id: 'custom',
  emoji: '✨',
  label: 'カスタム',
  accountIndex: 0,
  color: '#ff69b4',
  description: 'あなた専用の目的'
}
```

### スタイルを変更したい場合
`src/content/AccountSwitcher.module.scss` を編集

## 📚 参考ドキュメント

| ファイル | 内容 |
|---------|------|
| QUICKSTART.md | 最速インストールガイド |
| SETUP.md | 詳細セットアップ手順 |
| PROJECT_SUMMARY.md | 技術仕様とファイル構成 |
| public/icons/ICON_GUIDE.md | アイコン作成方法 |

## 🎊 完成チェックリスト

- [x] プロジェクト構造の作成
- [x] Reactコンポーネントの実装
- [x] SCSSスタイリングの実装
- [x] ビルド設定の完了
- [x] ドキュメントの作成
- [ ] npm install の実行
- [ ] アイコンの作成
- [ ] ビルドの実行
- [ ] Braveへのインストール
- [ ] 動作テスト

## 🚀 次のステップ

1. **QUICKSTART.md** を読む
2. `npm install` を実行
3. アイコンを作成（オプション）
4. `npm run build` を実行
5. Braveにインストール
6. YouTubeでテスト！

---

**開発を楽しんでください！** 🎉

質問や問題があれば、各ドキュメントのトラブルシューティングセクションを確認してください。

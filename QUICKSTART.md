# ⚡ クイックスタート

最短で拡張機能を動かす手順です。

## 📝 5分でインストール

### 1. 依存パッケージのインストール

```bash
cd youtube-account-switcher
npm install
```

### 2. 仮アイコンの作成（開発用）

アイコンがなくてもビルドできますが、警告が出ます。
以下のコマンドで簡易アイコンを作成できます:

```bash
# public/iconsディレクトリに移動
cd public/icons

# macOSの場合（sipsコマンド使用）
# 128x128の赤い正方形を作成
sips -s format png -z 128 128 --setProperty formatOptions normal -c 128 128 icon128.png 2>/dev/null || echo "Skip icon generation"

# または、ImageMagickを使用（インストール済みの場合）
convert -size 128x128 xc:'#667eea' icon128.png
convert -size 48x48 xc:'#667eea' icon48.png
convert -size 16x16 xc:'#667eea' icon16.png
```

**アイコンがない場合でも、後で追加できます！**

### 3. ビルド

```bash
# プロジェクトルートに戻る
cd ../..

# ビルド実行
npm run build
```

成功すると `dist/` フォルダが作成されます。

### 4. Braveにインストール

1. Braveを開く
2. アドレスバーに `brave://extensions/` と入力
3. 右上の「デベロッパーモード」を **ON**
4. 「パッケージ化されていない拡張機能を読み込む」
5. `youtube-account-switcher/dist` フォルダを選択

### 5. Googleアカウントを追加

1. [YouTube](https://www.youtube.com) を開く
2. 右上のプロフィールアイコン → 「アカウントを追加」
3. 最大4つのGoogleアカウントでログイン

### 6. テスト

YouTubeを開くと、視聴目的選択モーダルが表示されます！

## 🎨 カスタマイズしたい場合

### アカウント名の変更

1. 拡張機能アイコンをクリック
2. 各アカウント名を編集
3. 「設定を保存」

### デザインの変更

```bash
# src/content/AccountSwitcher.jsx を編集
# 絵文字、色、ラベルなどを変更

# 変更後は再ビルド
npm run build

# Braveで拡張機能を再読み込み
```

## 🐛 うまく動かない場合

```bash
# キャッシュをクリアして再ビルド
rm -rf node_modules dist
npm install
npm run build

# ブラウザで brave://extensions/ を開いて
# 拡張機能の「再読み込み」ボタンをクリック
```

## 📚 詳細ドキュメント

- 完全なセットアップ手順: [SETUP.md](./SETUP.md)
- プロジェクト構成: [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)
- アイコン作成方法: [public/icons/ICON_GUIDE.md](./public/icons/ICON_GUIDE.md)

## 💡 よくある質問

**Q: アイコンは必須？**
A: いいえ。開発中はなくても動作します。公開時に追加してください。

**Q: モーダルが表示されない**
A: F12でコンソールを開き、エラーがないか確認してください。

**Q: アカウントが切り替わらない**
A: YouTube に複数のGoogleアカウントでログインしているか確認してください。

**Q: 開発モードで使いたい**
A: `npm run dev` でホットリロード可能です。

---

🎉 **完成です！YouTubeで視聴目的を選んでアカウントを切り替えましょう！**

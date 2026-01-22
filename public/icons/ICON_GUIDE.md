# アイコンの作成方法

拡張機能には以下のサイズのアイコンが必要です:

- icon16.png (16x16 ピクセル)
- icon48.png (48x48 ピクセル)
- icon128.png (128x128 ピクセル)

## 簡単な作成方法

### 方法1: オンラインツールを使用

1. [Canva](https://www.canva.com/) にアクセス
2. カスタムサイズで 128x128 の新規デザインを作成
3. 📺 絵文字を配置してデザイン
4. PNG形式でダウンロード
5. [iLoveIMG](https://www.iloveimg.com/ja/resize-image) などでリサイズ

### 方法2: Figmaを使用

1. 128x128 のフレームを作成
2. YouTubeテーマのアイコンをデザイン
3. 各サイズでエクスポート

### 方法3: 既存の画像を使用

```bash
# ImageMagickをインストール (macOS)
brew install imagemagick

# リサイズ
convert source.png -resize 16x16 icon16.png
convert source.png -resize 48x48 icon48.png
convert source.png -resize 128x128 icon128.png
```

## 推奨デザイン

- 📺 絵文字をベースにしたシンプルなデザイン
- 背景: グラデーション (#667eea → #764ba2)
- 白い絵文字または文字

## 配置場所

作成したアイコンを以下のディレクトリに配置:

```
public/icons/
├── icon16.png
├── icon48.png
└── icon128.png
```

## 仮のアイコンで開発する場合

開発中は、単色の正方形でも動作します。Chrome拡張機能ストアに公開する際に、正式なアイコンに差し替えてください。

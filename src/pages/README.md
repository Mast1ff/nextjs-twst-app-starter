# Pages
リクエストURLに対応したページテンプレートとそのロジックを記述します。  
ページのレイアウトは`/src/_layouts`で作成するため、ここではAPI連携とデータの受け渡しやStoreへの登録のみを行います。

## `index.tsx`
ルートURLで表示するホームページ

## `_document.tsx`
htmlタグを含めたページの全体設定用コンポーネントファイル

## `_app.tsx`
共通読込のライブラリやcssファイルなどの読込を行うためのコンポーネントファイル

## `404.tsx`
404エラー用のレイアウトページ

## `/pages/**.tsx`, `/pages/**/index.tsx`
`https://example.com/**`にアクセスした場合の静的ルート

## `/pages/**/[*].tsx`
`https://example.com/**/1234`にアクセスした場合に、非同期メソッド内の引数、`ctx.params.*`で1234を取得。  
値によって表示するデータを定義できる動的ルート

## `/pages/api/**.ts`
fetch APIなどでアクセスできるAPIルート
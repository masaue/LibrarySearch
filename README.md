# LibrarySearch - 図書館検索

## ビルド方法

1. 以下リンク先の `Installing dependencies
` に従いビルド環境を構築する  
https://reactnative.dev/docs/environment-setup
2. カーリル図書館APIを利用できるよう、以下サイトでアプリケーションキーを申請する  
https://calil.jp/doc/api_ref.html
3. `.env.example` をコピーし `.env` を作成、↑で申請したアプリケーションキーを `CALIL_API_KEY` に記載する
4. 以下コマンドを実行する
```
# Androidで実行
npm run android

# iOSで実行
npm run ios
```
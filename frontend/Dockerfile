FROM node:22.10-alpine

# 作業ディレクトリを指定
WORKDIR /app

# package.jsonをコピーして依存関係をインストール
COPY package*.json ./
RUN npm install

# アプリケーションのソースをコピー
COPY . .

# ポート3000を開放 (Next.jsデフォルト)
EXPOSE 3000

# 開発環境用コマンド
CMD ["npm", "run", "dev"]
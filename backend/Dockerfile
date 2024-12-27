# Node.js イメージを使う
FROM node:20

# 作業ディレクトリを設定
WORKDIR /app

# パッケージをインストール
COPY package*.json ./
RUN npm install

# サーバーコードをコンテナ内にコピー
COPY . .  

# ポートを開放 (API用)
EXPOSE 3010

# サーバーを起動
CMD ["node", "server.js"]  

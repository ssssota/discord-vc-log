# discord-vc-log

discordのボイスチャット入退室時にシステムチャンネル※にメッセージを流す。

※サーバに新しい人が参加したときにメッセージが来るチャンネル

## usage(without docker)

### setup

```sh
npm install
npm run build
```

`.env`ファイルに

```env
DISCORD_TOKEN=XXXXXXXXXXXX
```

など、Discord developerページから取得したボットのトークンを記載する

### launch

```sh
npm start
```

## usage(with docker)

### setup

```sh
docker build . -t discord-vclog
```

### launch

任意の方法で環境変数に`DISCORD_TOKEN`を付与する

```sh
docker run -it --env DISCORD_TOKEN=$DISCORD_TOKEN discord-vclog
```

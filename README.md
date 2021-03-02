## 🛡 Installation


## 🛠 How To Insatll Node.js & Module

If there is a faulty module, install that module as well.

npm insatll
npm i ffmpeg-static



Let's start downloading.
Go to the folder `config` then the file `config.json`.
For the bot to be able to start, please complete the file with your credentials as follows

```
{
    "game": "GAME",
    "prefix": "PREFIX",
    "token_bot": "TOKEN"
}
```

Reminder :

- `game`, the status of the bot.
- `prefix`, the prefix that will be set to use the bot.
- `token_bot`, the token of the bot available on the [Discord Developers](https://discordapp.com/developers/applications) section.

To customize the emojis go to the file `emojis.json`.
Emojis are already defined by default but you can modify them if you wish.

```
{
    "music": ":musical_note:",
    "queue": ":bar_chart:",
    "error": ":x:",
    "success": ":white_check_mark:"
}
```

To start the bot :

```
#With Node
node index.js

## 🎵 Music commands

play <name>, play music in a voice channel.
stop, stop all music.
skip, skip to next music.
loop, to enable or disable the repeat function.

# 💡 General commands

```
help, see the list of available commands.

```


import Bot from './lib/Bot'

const bot = new Bot()

bot.listen().then(() => console.log(`Bot is listening...`))

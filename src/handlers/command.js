import emoji from 'node-emoji'
import moment from 'moment'

import Api from '../services/api'

const api = new Api()
console.log(emoji.find('🌡'))
export default class Command {
  constructor () {
    this.opts = {
      'parse_mode': 'Markdown'
    }
  }
  sendMessageWelcome (message, text, bot) {
    bot.sendMessage(message.chat, text, {
      'reply_markup': {
        'resize_keyboard': true,
        'keyboard': [[`${emoji.get('clipboard')} Menu`]]
      }
    })
  }

  sendMessageMenu (message, text, bot) {
    bot.sendMessage(message.chat, text, {
      'reply_markup': {
        'resize_keyboard': true,
        'keyboard': [[`${emoji.get('control_knobs')} Mostrar Info. Nós`], [`${emoji.get('level_slider')} Monstrar Info. Sensores`], [`${emoji.get('clipboard')} Help`]]
      }
    })
  }

  sendInfoNodes (message, text, bot) {
    api.getAllNodes().then((response) => {
      response.data.registros.slice(Math.max(response.data.registros.length - 5, 1)).forEach((item) => {
        bot.sendMessage(message.chat, this.makerMessageNodeInfo(item), this.opts)
      })
    })
  }
  sendMessageHelp (message, text, bot) {
    let response = 'texto'
    bot.sendMessage(message.chat, text).then(() => {
      bot.sendMessage(message.chat, response, {
        'reply_markup': {
          'resize_keyboard': true,
          'keyboard': [[`${emoji.get('clipboard')} Menu`]]
        }
      })
    })
  }

  makerMessageNodeInfo (item) {
    return `
      * ID do Nó: ${item.noid}* \n
      ${emoji.get('calendar')} - ${moment(item.data).format('DD/MM/YYYY HH:mm')}
      ${emoji.get('battery')} - ${item.bv}v
      ${emoji.get('sunny')} - ${item.sv}v
      ${emoji.get('thermometer')} - ${Math.round(item.tempInterna)}º\n\n
    `
  }
}

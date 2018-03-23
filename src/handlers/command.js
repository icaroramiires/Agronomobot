import emoji from 'node-emoji'
import moment from 'moment'

import Api from '../services/api'

const api = new Api()

export default class Command {
  constructor () {
    this.opts = {
      parse_mode: 'Markdown'
    }
  }
  sendMessageWelcome (message, text, bot) {
    bot.sendMessage(message.chat, text, {
      reply_markup: {
        resize_keyboard: true,
        keyboard: [[`${emoji.get('clipboard')} Menu`]]
      }
    })
  }

  sendMessageMenu (message, text, bot) {
    bot.sendMessage(message.chat, text, {
      reply_markup: {
        resize_keyboard: true,
        keyboard: [
          [`${emoji.get('control_knobs')} Mostrar Info. Nós`],
          [`${emoji.get('level_slider')} Monstrar Info. Sensores`],
          [`${emoji.get('clipboard')} Help`]
        ]
      }
    })
  }

  sendInfoNodes (message, text, bot) {
    api.getAllNodes().then(response => {
      response.data.registros
        .slice(Math.max(response.data.registros.length - 5, 1))
        .forEach(item => {
          bot.sendMessage(
            message.chat,
            this.makerMessageNodeInfo(item),
            this.opts
          )
        })
    })
  }

  sendInfoSensorsMolhamentoFoliar (message, text, bot) {
    api.getAllMoliamentoFoliar().then(response => {
      response.data.registros
        .slice(Math.max(response.data.registros.length - 2, 1))
        .forEach(item => {
          bot.sendMessage(
            message.chat,
            this.makeMessageSensorMolhamentoFoliar(item),
            this.opts
          )
        })
    })
  }

  sendInfoSensorsRadiacaoSolar (message, text, bot) {
    api.getAllRadiacaoSolar().then(response => {
      response.data.registros
        .slice(Math.max(response.data.registros.length - 3, 1))
        .forEach(item => {
          bot.sendMessage(
            message.chat,
            this.makeMessageSensorRadiacaoSolar(item),
            this.opts
          )
        })
    })
  }

  sendInfoSensorsUmidade (message, text, bot) {
    api.getOtherSensors().then(response => {
      response.data.registros
        .slice(Math.max(response.data.registros.length - 2, 1))
        .forEach(item => {
          bot.sendMessage(
            message.chat,
            this.makeMessageSensorUmidade(item),
            this.opts
          )
        })
    })
  }

  sendInfoSensorsTemperatura (message, text, bot) {
    api.getOtherSensors().then(response => {
      response.data.registros
        .slice(Math.max(response.data.registros.length - 2, 1))
        .forEach(item => {
          bot.sendMessage(
            message.chat,
            this.makeMessageSensorTemperatura(item),
            this.opts
          )
        })
    })
  }
  sendMessageHelp (message, text, bot) {
    let response = 'texto'
    bot.sendMessage(message.chat, text).then(() => {
      bot.sendMessage(message.chat, response, {
        reply_markup: {
          resize_keyboard: true,
          keyboard: [[`${emoji.get('clipboard')} Menu`]]
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

  makeMessageSensorMolhamentoFoliar (item) {
    return `
      * Molhamento Foliar*\n
      ${emoji.get('satellite')} ${item.noid}
      ${emoji.get('calendar')} - ${moment(item.data).format('DD/MM/YYYY HH:mm')}
      ${emoji.get('seedling')} -  ${Math.round(item.moliamentoFoliar)}\n\n
    `
  }

  makeMessageSensorRadiacaoSolar (item) {
    return `
      * Radiação Solar*\n
      ${emoji.get('satellite')} ${item.noid}
      ${emoji.get('calendar')} - ${moment(item.data).format('DD/MM/YYYY HH:mm')}
      ${emoji.get('sunny')} -  ${Math.round(item.radiacaoSolar)}\n\n
    `
  }

  makeMessageSensorUmidade (item) {
    return `
      * Umidade *\n
      ${emoji.get('satellite')} ${item.noid}
      ${emoji.get('calendar')} - ${moment(item.data).format('DD/MM/YYYY HH:mm')}
      ${emoji.get('sweat_drops')} -  ${Math.round(item.umidade)}\n\n
    `
  }

  makeMessageSensorTemperatura (item) {
    return `
      * Temperatura *\n
      ${emoji.get('satellite')} ${item.noid}
      ${emoji.get('calendar')} - ${moment(item.data).format('DD/MM/YYYY HH:mm')}
      ${emoji.get('thermometer')} -  ${Math.round(item.temperatura)}º\n\n
    `
  }
}

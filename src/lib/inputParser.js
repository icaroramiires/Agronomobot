'use strict'

export default class InputParser {
  isAskingForWelcome (response) {
    return response.intents.length > 0 && response.intents[0].intent === 'Welcome'
  }

  isAskingForMenu (response) {
    return response.intents.length > 0 && response.intents[0].intent === 'Menu'
  }

  isAskingForInfoNodes (response) {
    return response.intents.length > 0 && response.intents[0].intent === 'Node'
  }

  isAskingForHelp (response) {
    return response.intents.length > 0 && response.intents[0].intent === 'Help'
  }
}

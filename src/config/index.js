export default {
  telegram: {
    token:
      process.env.TELEGRAM_TOKEN ||
      '366349913:AAFVwB7Z6nTkHMNy1orCKmxVwtRTC0eKwvc',
    externalUrl: process.env.CUSTOM_ENV_VARIABLE || 'agronomobot.herokuapp.com',
    port: process.env.PORT || 443,
    host: '0.0.0.0'
  },
  watson: {
    conversation: {
      username: 'c76ea5e1-ce63-4a61-84ba-ef0f5af79e72',
      password: 'nsM637KEdybB',
      version: 'v1',
      version_date: '2017-05-26'
    },
    workspace_id: '8934a2a3-db6e-4cd8-8156-f5a86a6478d6'
  }
}

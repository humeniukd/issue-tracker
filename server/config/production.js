import base from './development.js'

const port = process.env.PORT || 80

const config = { ...base, port }

export default config

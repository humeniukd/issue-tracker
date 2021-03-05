import development from './development.js'
import production from './production.js'

export default { development, production }[ process.env.NODE_ENV || 'development' ]

import crypto from 'crypto'

const __data = {}

const statuses = {
  OPEN: 0,
  PENDING: 1,
  CLOSED: 2,
}

// init
for (let i = 0; i < 10; i++) {
  const id = crypto.randomBytes(16).toString('hex')

  __data[id] = {
    id,
    status: statuses.OPEN,
    title: `Task ${i}`,
    description: 'Lorem ipsum dolor sit amet'
  }
}

export const list = async () => {
  const items = Object.values(__data)

  return items
}

export default {
  list
}

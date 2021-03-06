import crypto from 'crypto'
const __data = {}

const STATUSES = {
  OPEN: 0,
  PENDING: 1,
  CLOSED: 2,
}

// init
for (let i = 0; i < 10; i++) {
  const id = crypto.randomBytes(16).toString('hex')

  __data[id] = {
    id,
    status: Math.floor(Math.random() * Math.floor(3)),
    title: `Task ${i}`,
    description: 'Lorem ipsum dolor sit amet'
  }
}

export const list = async () => {
  const items = Object.values(__data)

  return items
}

export const patch = async (id, status) => {
  const item = __data[id]

  switch (item.status) {
    case STATUSES.OPEN:
      if (status !== STATUSES.PENDING)
        throw 'Wrong status'
      break
    case STATUSES.PENDING:
      if (status !== STATUSES.CLOSED)
        throw 'Wrong status'
      break
    default:
      throw 'Wrong status'
  }

  __data[id] = {
    ...item,
    status
  }
  return __data[id]
}

export default {
  list,
  patch
}

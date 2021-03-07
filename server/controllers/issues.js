import issues from '../issues.js'

const list = async () => {
  const items = await issues.list()
  return items
}

const patch = async (req) => {
  const { params, body } = req
  const item = await issues.patch(params.id, body.status)
  return item
}

export default {
  list,
  patch
}

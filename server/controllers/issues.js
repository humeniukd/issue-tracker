import issues from '../issues.js'

const list = async (req, res) => {
  const items = await issues.list()
  res.send(items)
}

const patch = async (req, res) => {
  const { params, body } = req
  const item = await issues.patch(params.id, body.status)
  res.send(item)
}

export default {
  list,
  patch
}

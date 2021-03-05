import issues from '../issues.js'

const list = async (req, res) => {
  const items = await issues.list()

  res.send(items)
}

export default {
  list
}

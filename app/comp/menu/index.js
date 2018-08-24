import './index.scss'

export default obj => {
  console.log('from menu component')

  for (const [k, v] of Object.entries(obj))
    console.log(k, v)
}

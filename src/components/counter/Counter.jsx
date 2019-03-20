import Icon from 'components/icon/Icon'
import PropTypes from 'prop-types'

const Counter = ({ count, add, remove }) => {
  const onAdd = () => add()
  const onRemove = () => remove()
  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={onAdd}>
        <Icon name={'plus'} /> Add
      </button>
      <button onClick={onRemove}>
        <Icon name={'minus'} /> Remove
      </button>
    </>
  )
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
}

export default Counter

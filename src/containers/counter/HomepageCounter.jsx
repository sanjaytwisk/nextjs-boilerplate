import { increment, decrement } from 'store/counter/counterActions'
import Counter from 'components/counter/Counter'
import { connect } from 'react-redux'

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
})

const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(increment),
  remove: () => dispatch(decrement),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

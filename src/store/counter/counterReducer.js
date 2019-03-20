import { COUNTER_INCREMENT, COUNTER_DECREMENT } from './counterActions'

const initialCounterState = {
  count: 0,
}

/**
 * Counter Reducer
 */
export default (state = initialCounterState, action) => {
  const { count } = state
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        ...state,
        count: count + 1,
      }
    case COUNTER_DECREMENT:
      return {
        ...state,
        count: count > 0 ? count - 1 : 0,
      }
    default:
      return state
  }
}

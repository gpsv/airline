import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { bookingReducer } from '../reducers/bookingReducer';
import { flightReducer } from '../reducers/flightReducer';
import { formReducer } from '../reducers/formReducer';
import { modalReducer } from '../reducers/modalReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const reducers = combineReducers({
  booking: bookingReducer,
  form: formReducer,
  home: flightReducer,
  modal: modalReducer
});

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);
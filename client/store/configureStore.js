import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { syncHistory } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../rootReducer';

const logger = createLogger({
  level: 'info',
  collapsed: true,
});


export default function configureStore(browserHistory) {
  const reduxRouterMiddleware = syncHistory(browserHistory);
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, logger, reduxRouterMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}


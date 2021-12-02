import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from '../reducers';

import Layout from 'Layout/Layout';

import '../styles/style.scss';

function MyApp({ Component, pageProps }) {
  const store = createStore(reducers, compose(applyMiddleware(thunk)));

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;

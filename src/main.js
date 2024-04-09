import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/common/Header.jsx/Header';
import { RouterProvider } from 'react-router-dom';
import route from './route/AppRoute';
import { Provider } from 'react-redux';
import store, { persistedStore } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';



function main() {
  return (
        
      <Provider store={store} >
        <PersistGate persistor={persistedStore} loading={null}>
          <RouterProvider router={route}/>
        </PersistGate>
      </Provider>

  );
}

export default main;

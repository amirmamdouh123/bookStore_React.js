import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/common/Header.jsx/Header';
import { RouterProvider } from 'react-router-dom';
import route from './route/AppRoute';
import { Provider } from 'react-redux';
import store from './store/store';



function main() {
  return (
    <Provider store={store} >
      <RouterProvider router={route}/>
    </Provider>
  );
}

export default main;

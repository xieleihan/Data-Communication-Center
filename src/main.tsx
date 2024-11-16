import { createRoot } from 'react-dom/client'
import './index.less'
import 'lib-flexible/flexible'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import routes from './router/routes';
import 'antd/dist/reset.css';
// 导入store
import { Provider } from 'react-redux';
import store from './store/index';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children && route.children.map((child, childIndex) => (
              <Route key={childIndex} path={child.path} element={child.element} />
            ))}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  </Provider>,
)

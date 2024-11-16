import { createRoot } from 'react-dom/client'
import './index.less'
import 'lib-flexible/flexible'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import routes from './router/routes';
import 'antd/dist/reset.css';

createRoot(document.getElementById('root')!).render(
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
  </BrowserRouter>,
)

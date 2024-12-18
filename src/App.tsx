import './App.less';
import { Outlet, useNavigate } from 'react-router-dom';
import React, { useState, createContext } from 'react';
// 导入store
import { Provider } from 'react-redux';
import store from './store/index';

export const AppContext = createContext({
  showContent: true,
  setShowContent: (value: boolean) => { console.log(value); },
});

function App() {
  const navigate = useNavigate();

  // 添加状态来控制是否显示页面内容
  const [showContent, setShowContent] = useState(true);

  const background: { pic: string; text: string }[] = [
    {
      pic: '/images/1.jpg',
      text: '向前走,总会求得始终,不要回头',
    },
    {
      pic: '/images/2.jpg',
      text: '没有比脚更长的路,没有比人更高的山',
    },
    {
      pic: '/images/3.jpg',
      text: '致敬伟大的画家莫奈-日出印象',
    },
    {
      pic: '/images/4.jpg',
      text: '暖阳下的海风还是一样',
    },
    {
      pic: '/images/5.jpg',
      text: '致敬伟大的画家梵高-星月夜',
    },
  ];

  const index: number = Math.floor(Math.random() * background.length);

  return (
    <AppContext.Provider value={{ showContent, setShowContent }} >
    <>
      {showContent && (
        <div
          className="main"
          style={{
            backgroundImage: `url(${background[index].pic})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="leftcontent">
            <span>{`${background[index].text}`}</span>
          </div>
          <div className="startpages">
            <div className="content">
              <div className="logo">
                <img src="/icon/favicon.png" alt="" />
              </div>
              <div className="function">
                <button
                  className="btn"
                  onClick={() => {
                    setShowContent(false); // 隐藏内容
                    navigate('/login');
                  }}
                >
                  登录
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    setShowContent(false); // 隐藏内容
                    navigate('/register');
                  }}
                >
                  注册
                </button>
              </div>
            </div>
          </div>
        </div>
        )}
        <Provider store={store}>
          <Outlet />
        </Provider>
    </>  
    </AppContext.Provider >
  );
}

export default App;

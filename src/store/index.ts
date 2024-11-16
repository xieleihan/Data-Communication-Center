// 仓库入口文件
import reducer from './reducer.ts';
// 创建仓库
import { legacy_createStore as createStore } from 'redux'

const store = createStore(reducer);

export default store;
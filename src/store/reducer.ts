// 默认状态
const defaultState = {
    topIndex: '1', // 顶部导航栏索引
};

// 浅拷贝函数（可替换为更简单的方式）
function copy<T extends object>(options: T): T {
    return { ...options }; // 使用展开运算符代替循环浅拷贝
}

// Reducer 函数
const reducer = (state = defaultState, action: { type: string; value:string }) => {
    const newState = copy(state);
    switch (action.type) {
        case 'changeTopIndex':
            
            return { ...newState, topIndex: action.value }; // 返回一个新状态
        default:
            return state;
    }
};

export default reducer;

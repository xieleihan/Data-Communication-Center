import '../static/css/returnbtn.less'
import leftIcon from '../assets/icon/left.png';
import { AppContext } from '../App';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function ReturnBtn() {
    const navigate = useNavigate();

    const { setShowContent } = useContext(AppContext); // 获取上下文方法

    const handleClick = () => {
        setShowContent(true); // 改变 showContent 为 true
        navigate('/'); // 返回上一页
    };

    return (
        <div className='returnbtn' onClick={handleClick}>
            <img src={leftIcon} alt="" />
        </div>
    );
}

export default ReturnBtn;
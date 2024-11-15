import ReturnBtn from '../components/returnBtn.tsx'
import '../static/css/register.less'
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    return (
        <div className='register'>
            <ReturnBtn></ReturnBtn>
            <div className="container">
                <div className="login-box">
                    <div className='title'>注册</div>
                    <div className='desc'>Register in</div>
                    <div className="login-form">
                        <div className="input-box">
                            <input type="text" placeholder="请输入用户名" />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="请输入邮箱" />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="请输入密码" />
                        </div>
                        <div className="input-box">
                            <button>注册</button>
                            <span onClick={() => { navigate('/login') }}>已有账号,去登录</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
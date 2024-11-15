import '../static/css/login.less'
import ReturnBtn from '../components/returnBtn.tsx'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    return (
        <div className="login">
            <ReturnBtn />
            <div className="container">
                <div className="login-box">
                    <div className='title'>登录</div>
                    <div className='desc'>Login in</div>
                    <div className="login-form">
                        <div className="input-box">
                            <input type="text" placeholder="请输入用户名" />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="请输入密码" />
                        </div>
                        <div className="input-box">
                            <button>登录</button>
                            <span onClick={()=>{navigate('/register')}}>还没账号,去注册</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
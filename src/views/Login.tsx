import '../static/css/login.less'
import ReturnBtn from '../components/returnBtn.tsx'
import { useNavigate } from 'react-router-dom';
import { login } from '../api/index.ts';
import { message } from "antd";
import { useState } from 'react';

function Login() {
    const navigate = useNavigate();

    const [inputUsername, setInputUsername] = useState('') // 用户名
    const [inputPassword, setInputPassword] = useState('') // 密码

    const handleLogin = () => {
        if (!inputUsername) {
            message.error('请输入用户名')
            return
        }
        if (!inputPassword) {
            message.error('请输入密码')
            return
        }
        // 用户名非法字符排除
        const usernameReg = /^[a-zA-Z0-9_]{1,}$/
        if (!usernameReg.test(inputUsername)) {
            message.error('用户名只能包含字母、数字、下划线')
            return
        }
        login({
            username: inputUsername,
            password: inputPassword
        }).then(res => {

            if (JSON.parse(JSON.stringify(res)).code === 200) {
                message.success('登录成功')
                setInputUsername('')
                setInputPassword('')
                localStorage.setItem('AUTO_TOKEN', JSON.parse(JSON.stringify(res)).token)
                setTimeout(() => {
                    navigate('/home')
                }, 2000)

            } else {
                message.error(JSON.parse(JSON.stringify(res)).message)
            }
        }).catch(err => {
            console.log(err)
            message.error('登录失败')
        })
    }

    return (
        <div className="login">
            <ReturnBtn />
            <div className="container">
                <div className="login-box">
                    <div className='title'>登录</div>
                    <div className='desc'>Login in</div>
                    <div className="login-form">
                        <div className="input-box">
                            <input value={inputUsername} type="text" placeholder="请输入用户名" onChange={(e) => setInputUsername(e.target.value)} />
                        </div>
                        <div className="input-box">
                            <input value={inputPassword} onChange={(e)=>{setInputPassword(e.target.value)}} type="password" placeholder="请输入密码" />
                        </div>
                        <div className="input-box">
                            <button onClick={()=>{handleLogin()}}>登录</button>
                            <span onClick={()=>{navigate('/register')}}>还没账号,去注册</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
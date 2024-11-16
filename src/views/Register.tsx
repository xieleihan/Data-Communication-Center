import ReturnBtn from '../components/returnBtn.tsx'
import '../static/css/register.less'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { register } from '../api/index.ts';
import { message } from "antd";

function Register() {
    const navigate = useNavigate();

    const [inputUsername, setInputUsername] = useState('') // 用户名
    const [inputEmail, setInputEmail] = useState('') // 邮箱
    const [inputPassword, setInputPassword] = useState('') // 密码

    const openMessage = () => {

        if (!inputUsername) {
            message.error('请输入用户名')
            return
        }
        if (!inputEmail) {
            message.error('请输入邮箱')
            return
        }
        if (!inputPassword) {
            message.error('请输入密码')
            return
        }
        // 邮箱正则
        const emailReg = /^([a-zA-Z0-9]+[-_.]?)+@[a-zA-Z0-9]+\.[a-z]+$/
        if (!emailReg.test(inputEmail)) {
            message.error('请输入正确的邮箱')
            return
        }
        // 用户名非法字符排除
        const usernameReg = /^[a-zA-Z0-9_]{1,}$/
        if (!usernameReg.test(inputUsername)) {
            message.error('用户名只能包含字母、数字、下划线')
            return
        }
        register({
            username: inputUsername,
            email: inputEmail,
            password: inputPassword
        }).then(res => {
            
            if (JSON.parse(JSON.stringify(res)).code === 200) {
                message.success('注册成功')
                setInputUsername('')
                setInputEmail('')
                setInputPassword('')
                setTimeout(() => {
                    navigate('/login')
                },2000)
                
            } else {
                message.error(JSON.parse(JSON.stringify(res)).message)
            }
        }).catch(err => {
            console.log(err)
            message.error('注册失败')
        })
    };

    return (
        <div className='register'>
            <ReturnBtn></ReturnBtn>
            <div className="container">
                <div className="login-box">
                    <div className='title'>注册</div>
                    <div className='desc'>Register in</div>
                    <div className="login-form">
                        <div className="input-box">
                            <input value={inputUsername} type="text" placeholder="请输入用户名" onChange={(e) => setInputUsername(e.target.value)} />
                        </div>
                        <div className="input-box">
                            <input value={inputEmail} onChange={(e)=>{setInputEmail(e.target.value)}} type="email" placeholder="请输入邮箱" />
                        </div>
                        <div className="input-box">
                            <input value={inputPassword} onChange={(e)=>{setInputPassword(e.target.value)}} type="password" placeholder="请输入密码" />
                        </div>
                        <div className="input-box">
                            <button onClick={() => {
                                openMessage()
                                
                            }}>注册</button>
                            <span onClick={() => { navigate('/login') }}>已有账号,去登录</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
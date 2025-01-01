import React, { useState } from 'react'
import '../css/login.css'
import { Link } from 'react-router-dom';

const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (

        <div className='loginCont'>
            <div className='loginWrapper'>
                <div className='loginImgBox'>
                    <img style={{ position: 'absolute', left: '4rem', top: '20%' }} src="/img/Doggie.png" alt="" />
                </div>
                <div className='loginTextBox'>
                    <Link to={"/"}>
                        <h2>Login</h2>
                    </Link>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">user_Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="이메일을 입력하세요"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="비밀번호를 입력하세요"
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
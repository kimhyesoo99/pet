import React, { useState } from 'react'
import '../css/signup.css'
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    }


    return (
        <div className='signUpCont'>
            <div className='signUpWrapper'>
                <div className='signUpImgBox'>
                    <img style={{ position: 'absolute', left: '4rem', top: '20%' }} src="/img/Doggie.png" alt="" />
                </div>
                <div className='signUpTextBox'>
                    <Link to={"/"}>
                        <h2>SignUP</h2>
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
                            <label htmlFor="name">user_Name</label>
                            <input
                                type="name"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                placeholder="이름을 입력하세요"
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
                            <input type="submit" value="SignUP" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp
import React, {useState} from 'react';
import '../../css/register.css'
import '../../css/login.css'
import useInputValue from "../../hooks/useInputValue";
import {useDispatch} from "react-redux";
import {login} from "../../redux/actions/auth";
import {Link, useHistory} from 'react-router-dom'

const Login = () => {
    const email = useInputValue('')
    const password = useInputValue('')
    const dispatch = useDispatch()
    const history = useHistory()
    const [errorMessage, setErrorMessage] = useState('')
    const submitHandler = async () => {
        const error = await dispatch(login(email.value(), password.value()))
        if (error) return setErrorMessage(error)
        history.push('/')
    }

    return (
        <div className='register'>
            <div className="container">
                <div className="register__inner">
                    <div className="register__form">
                        <div className="form__paragraph">
                            Авторизация
                        </div>
                        <div className="form__inputs">
                            <input {...email.bind} type="text" placeholder='Эл.адрес'/>
                            <input  {...password.bind} type="password" placeholder='Пароль'/>
                        </div>
                        <div className="form__button register-btn">
                            <button onClick={submitHandler}>Войти</button>
                        </div>
                        <div className='error'>
                            {errorMessage}
                        </div>
                        <div className="form__login-link">
                            <span className='login-link__text'>
                               У вас нет аккаунта?
                            </span>
                            <Link to ="/register">Зарегистрироваться</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
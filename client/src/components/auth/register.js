import React, {useState} from 'react';
import '../../css/register.css'
import useInputValue from "../../hooks/useInputValue";
import {Link, useHistory} from "react-router-dom";
import axios from 'axios';

const Register = () => {
    const email = useInputValue('')
    const password = useInputValue('')
    const [registerError, setRegisterError] = useState('')
    const history = useHistory()

    const [errorMessage, setErrorMessage] = useState({
        email: null,
        password: null,
    })

    const validateInputs = () => {
        let emailError = null
        let passwordError = null

        if (!email.value().includes('@'))
            emailError = 'Неверный формат почты'
        if (password.value().length < 5 || password.value().length > 12)
            passwordError = 'Длина пароля должна быть от 5 до 12 символов'

        setErrorMessage({
            email: emailError,
            password: passwordError,
        })

        return !(emailError || passwordError);
    }

    const submitHandler = async () => {

        const validated = validateInputs()
        if (!validated) return


        const response = await axios.post('http://localhost:8000/auth/registration',
            {email : email.value(), password: password.value()})
            .catch(error => {
                setRegisterError(error.response.data.message)
                return {error : error.response.data.message}
            })

        if(response.error) return

        email.clear()
        password.clear()

        history.push('/login')
    }

    return (
        <div className='register'>
            <div className="container">
                <div className="register__inner">
                    <div className="register__form">
                        <div className="form__paragraph">
                            Зарегистрируйтесь, чтобы смотреть список репозиториев
                        </div>

                        <div className="form__inputs">
                            <input {...email.bind} type="text" placeholder='Эл.адрес'/>
                            <small className='error'>{errorMessage.email}</small>
                            <input  {...password.bind} type="password" placeholder='Пароль'/>
                            <small className='error'>{errorMessage.password}</small>
                        </div>
                        <div className="form__button register-btn">
                            <button onClick={submitHandler}>Регистрация</button>
                        </div>
                        <div className="error">
                            {registerError}
                        </div>

                        <div className="form__login-link">
                            <span className='login-link__text'>
                                Есть аккаунт?
                            </span>
                            <Link to="/login">Вход</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
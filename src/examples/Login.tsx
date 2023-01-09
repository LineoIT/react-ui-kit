import React, { FC } from 'react'
import Button from './Button'

import './login.css'

const Login = () => {
    const [error, setError] = React.useState()
    const [loading, setLoading] = React.useState(true)

    return <div className="login">
            <form className="flex flex-col login-form" >
                <div className="brand-logo flex items-center">
                    <div className="logo">
                        <svg enableBackground="new 0 0 503.589 503.589"
                            viewBox="0 0 503.589 503.589" xmlns="http://www.w3.org/2000/svg">
                            <g><path d="m69.954 459.229 168.711-291.214-71.765-123.863-166.9 290.897z" />
                                <path d="m503.355 319.98-166.877-290.858h-143.615l168.521 290.858z" />
                                <path d="m167.917 349.98-72.12 124.488h337.666l70.126-124.488z" />
                            </g>
                        </svg>
                    </div>
                    <div className="logo-text">Logo</div>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-center">
                        <h1 className="login-heading">Вход</h1>
                    </div>
                    {error && <div className="error-panel">
                        <p>{error}</p>
                    </div>}
                    <div className="input-group">
                        <input type="text" className="input"
                            placeholder="Адрес эл. почты"
                            name="email"
                        />
                       <small className="text-error">some errors</small>
                    </div>
                    <div className="input-group">
                        <input type="password" className="input"
                            placeholder="Пароль"
                            name="password"
                        />
                    </div>
                    <div className="alt-link  flex flex-col">
                        <div>
                            Нет учетной записи? <a href="/register" >Создайте ее!</a>
                        </div>
                    </div>
                    <div className="input-group flex flex-col">
                        <Button className="btn  w-full" type="submit"
                            loading={loading}
                        >Войти</Button>
                    </div>
                </div>
            </form>
        </div>
}


export default Login
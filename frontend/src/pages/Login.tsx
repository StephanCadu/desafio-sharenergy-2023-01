import React, { FunctionComponent, ChangeEvent, useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router";
import { IUser } from "../interfaces";

interface LoginProps {}
 
const Login: FunctionComponent<LoginProps> = () => {
  const [user, setUser] = useState<IUser>({ username: '', password: '' });
  const navigate = useNavigate();
  
  const handleChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setUser((prev) => ({ ...prev, [name]: value }));
  }

  const loginAuthorized = (usr: IUser) => usr.username === 'desafiosharenergy' && usr.password === 'sh@r3n3rgy';

  const login = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (loginAuthorized(user)) {
      localStorage.setItem('login', JSON.stringify(user));
      navigate('/');
    }
  }

  useEffect(() => {
    const savedUser: IUser = JSON.parse(localStorage.getItem('login') || '{}');
    if (loginAuthorized(savedUser)) {
      localStorage.setItem('login', JSON.stringify(user));
      navigate('/');
    }
  }, [])

  return (
    <form className="loginForm" onSubmit={ login }>
      <h1 className="loginTitle">Wellcome!</h1>

      <label htmlFor="username" className="loginLabel">
        username
        <input
          id="username"
          type="text"
          name="username"
          value={ user.username } 
          onChange={ (e) => handleChange(e) } 
          className="loginInput"
          placeholder="sharenergy"
        />
      </label>

      <label htmlFor="username" className="loginLabel">
        password
        <input
          id="password"
          type="password" 
          name="password" 
          value={ user.password } 
          onChange={ (e) => handleChange(e) }
          className="loginInput"
          placeholder="*******"
        />
      </label>
      <button
        className="loginButton"
      >
        LOGIN
      </button>
    </form>
  );
}
 
export default Login;
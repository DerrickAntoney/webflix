import { useState } from 'react'
import './register.scss'
import { useRef } from 'react'

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = () => {
        console.log(emailRef.current.value)
        setEmail(emailRef.current.value)
    }
    const handleFinish = () => {
        console.log(passwordRef.current.value)
        setPassword(passwordRef.current.value)
    }
  return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
                <img className='logo' src="../../../assets/netflix-3.svg" alt="page logo" />
                <button className="loginButton">Sign In</button>
            </div>
        </div>
        <div className="container">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
                Ready to watch? Enter your email to create or restart your membership.
            </p>
            {!email ? (
                <div className="input">
                    <input type="email" placeholder="email address" ref={emailRef}/>
                    <button className="registerButton" onClick={handleStart}>Get Started</button>
                </div>
            ):(
                <form className="input">
                    <input type="password" placeholder="password" ref={passwordRef}/>
                    <button className="registerButton" onClick={handleFinish}>Start</button>
                </form>
            )}
            
        </div>
    </div>
  )
}

export default Register
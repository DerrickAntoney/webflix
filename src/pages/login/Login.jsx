import './login.scss'

const Login = () => {

  return (
    <div className='login'>
        <div className="top">
            <div className="wrapper">
                <img className='logo' src="../../../assets/netflix-3.svg" alt="page logo" />
            </div>
        </div>
        <div className="container">
            <form>
                <h2>Sign In</h2>
                <input type="email" placeholder='Email or phone number'/>
                <input type="password" placeholder='Password'/>
                <button className='loginButton'>Sign In</button>
                <span>New to Netflix? <b>Sign up now.</b></span>
                <small>This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b></small>
            </form>
            
        </div>
        
    </div>
  )
}

export default Login
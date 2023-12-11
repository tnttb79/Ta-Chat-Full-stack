import "./index.css";

const Auth = () => {
  return (
    <div className='login-page'>
      <div className='login-wrapper'>
        <div className='login-text'>
          <h1 className='headline-text'>TaChat</h1>
          <p className='headline-description'>
            Welcome back, please sign in to connect with friends.
          </p>
        </div>

        <form className='login-form-wrapper'>
          <div className='login-form'>
            <input type='text' id='username' placeholder='User name' />
            <input type='password' id='password' placeholder='Password' />
            <button>Sign In</button>
            <a>Forget password</a>
            <button className='new-account-button'>Create New Account</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;

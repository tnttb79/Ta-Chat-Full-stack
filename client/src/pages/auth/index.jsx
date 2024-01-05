import "./index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate()

  const signUpSwitch = (e) => {
    e.preventDefault();
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/chat")
  };
  return (
    <div className='login-page'>
      <div className='login-wrapper'>
        <div className='login-text'>
          <h1 className='headline-text'>TaChat</h1>
          <p className='headline-description'>
            {isSignUp
              ? "Create a new account to connect with friends around the world."
              : "Welcome back, sign in to connect with friends around the world."}
          </p>
        </div>

        <form className='login-form-wrapper' onSubmit={handleSubmit}>
          <div className='login-form'>
            <input type='text' id='username' placeholder='User name' />
            <input type='password' id='password' placeholder='Password' />
            {isSignUp && (
              <input
                type='password'
                id='password'
                placeholder='Confirm password'
              />
            )}
            <button>{!isSignUp ? "Sign In" : "Sign Up"}</button>
            {!isSignUp && <a>Forget password</a>}
            {isSignUp ? (
              <p>
                Already have an account? <a onClick={signUpSwitch}>Sign in</a>
              </p>
            ) : (
              <p>
                Don&apos;t have an account?{" "}
                <a onClick={signUpSwitch}>Sign Up</a>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;

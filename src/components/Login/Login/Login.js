import React from "react";
import { Button } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";
const Login = () => {
  const {
    signInUsingGoogle,
    handleRegistration,
    isLogin,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    toggleLogin,
    error,
  } = useAuth();
  return (
    <div className='mb-5'>
      <div className='container'>
        <form onSubmit={handleRegistration}>
          <div class='container'>
            <div class='row justify-content-center'>
              <div class='col-md-5'>
                <div class='card'>
                  <h2 class='card-title text-center'>
                    {isLogin ? "Login" : "Register"}
                  </h2>
                  <div className='row mb-3 text-danger'> {error}</div>
                  <div class='card-body py-md-4'>
                    {!isLogin && (
                      <div class='form-group'>
                        <input
                          type='text'
                          class='form-control'
                          id='name'
                          onBlur={handleNameChange}
                          placeholder='Name'
                        />
                      </div>
                    )}

                    <div class='form-group'>
                      <input
                        onBlur={handleEmailChange}
                        type='email'
                        class='form-control'
                        id='email'
                        placeholder='Email'
                      />
                    </div>

                    <div class='form-group'>
                      <input
                        onBlur={handlePasswordChange}
                        type='password'
                        class='form-control'
                        id='password'
                        placeholder='Password'
                      />
                    </div>
                    <div class='form-group'>
                      <div className='form-check'>
                        <label
                          className='form-check-label'
                          htmlFor='gridCheck1'
                        >
                          <input
                            onChange={toggleLogin}
                            className='form-check-input'
                            type='checkbox'
                            id='gridCheck1'
                          />
                          Already Registered.?
                        </label>
                      </div>
                    </div>
                    <div class='d-flex flex-row align-items-center justify-content-between'>
                      <button
                        style={{ backgroundColor: "orange" }}
                        type='submit'
                        className='btn btn-primary'
                      >
                        {isLogin ? "Login" : "Register"}
                      </button>
                    </div>
                    <Button
                      className='m-3 btn btn-danger'
                      onClick={signInUsingGoogle}
                    >
                      <i class='fab fa-google'></i> Sign In With Google
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

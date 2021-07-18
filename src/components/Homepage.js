import React from 'react'
import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from "react-redux";
import '../styling/home.css';
import {
    selectSignedIn,
    setSignedIn,
    setUserData,
  } from "../features/userSlice";

const Homepage = () => {
    const isSignedIn = useSelector(selectSignedIn);
    const dispatch = useDispatch()

    const login = (response) => {
        console.log(response)
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj));
        console.log(response.profileObj)
    }
    return (
        <div className="home__page" style={{ display: isSignedIn ? "none" : "" }}>
            {!isSignedIn ? (
                <div className="login__message">
                    <h2>📗</h2>
                    <h2 className="heading">Reading is key for success</h2>
                    <p>
                       High qaulity of blogs we are providing to you.
                       Have a great journey of reading.
                    </p>
                    <GoogleLogin
                        clientId="852420734619-r0f82e09fipeafkmtmerptciciv2klks.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <button
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className="login__button"
                            >
                                Login with Google
                            </button>
                        )}
                        onSuccess={login}
                        onFailure={login}
                        isSignedIn={true}
                        cookiePolicy={"single_host_origin"}
                    />
                </div>
            ) : (
                ""
            )}
        </div>
    )
}

export default Homepage;

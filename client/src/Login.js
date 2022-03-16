import { useState } from "react";
import LoginForm from './components/LoginForm';
import SignUpForm from "./components/SignUpForm";
import ResetPasswordForm from './components/ResetPasswordForm';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


function Login({ onLogin }){
    const [showResetForm, setShowResetForm] = useState(false)
    const [showLogin, setShowLogin] = useState(true);

    return (        
        <Container className="mt-5">
                    { showLogin ? (
                        <>
                            <LoginForm onLogin={onLogin} />
                            <Box  sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              
            }}>Don't have an account? &nbsp;
                                <Button variant="contained" onClick={() => setShowLogin(false)}>
                                    Sign Up
                                </Button>
                                <Button sx={{marginTop: 5}}  onClick={() => setShowResetForm(!showResetForm)} className="m-3" variant="contained"> {showResetForm?"Cancel Reset Password":"Reset Password"}</Button>
                                {showResetForm ? <ResetPasswordForm setShowResetForm={setShowResetForm} /> : null}
                            </Box>
                        </>
                    ): (
                        <>
                            <SignUpForm onLogin={onLogin} />
                            <Box  sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
                                Already have an account? &nbsp;
                                <Button  className="m-3" variant="contained" onClick={() => setShowLogin(true)}>
                                    Log In
                                </Button>
                            </Box>
                        </>
                    )
                    }
        </Container>
    )
}
export default Login;
import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorEmail, setShowErrorEmail] = useState(false);
  const [showErrorPassword, setShowErrorPassword] = useState(false);
  const [showEnterPassword, setShowEnterPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [checkPassword, setcheckPassword] = useState(false);

  useEffect(() => {
    setShowErrorEmail(false);
    setShowErrorPassword(false);
    setShowEnterPassword(false);
    setConfirmPassword(false);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleEmail = (e) => {
    if (e.target.value === '') {
      setShowErrorEmail(true);
    } else {
      setShowErrorEmail(false);
    }
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    if (e.target.value === '') {
      setShowErrorPassword(false);
      setShowEnterPassword(true);
    } else if (password.length < 7) {
      setShowEnterPassword(false);
      setShowErrorPassword(true);
    } else {
      setShowErrorPassword(false);
      setShowEnterPassword(false);
    }
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    if (e.target.value !== password) {
      setConfirmPassword(true);
      console.log(confirmPassword);
    } else {
      setConfirmPassword(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleEmail}
                />
              </Grid>
              {showErrorEmail && (
                <Typography
                  variant="body1"
                  style={{ color: 'red', marginLeft: '20px' }}
                >
                  please enter email
                </Typography>
              )}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handlePassword}
                />
              </Grid>
              {showErrorPassword && (
                <Typography
                  variant="body1"
                  style={{ color: 'red', marginLeft: '20px' }}
                >
                  please enter password more than 8 charter
                </Typography>
              )}
              {showEnterPassword && (
                <Typography
                  variant="body1"
                  style={{ color: 'red', marginLeft: '20px' }}
                >
                  please enter password
                </Typography>
              )}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Confirm password"
                  label="Confirm password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  onChange={handleConfirmPassword}
                />
              </Grid>
              {confirmPassword && (
                <Typography
                  variant="body1"
                  style={{ color: 'red', marginLeft: '20px' }}
                >
                  Passwords are not the same
                </Typography>
              )}
            </Grid>
            {!confirmPassword && email && password ? (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            ) : (
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: 'gray' }}
              >
                {' '}
                Sign Up
              </Button>
            )}
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

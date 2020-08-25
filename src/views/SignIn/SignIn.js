import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Button,
  IconButton,
  TextField,
  Link,
  Typography,
  Snackbar
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import axios from 'axios';
import { getData } from 'httprequests';
import auth from 'auth.js';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const schema = {
  phonenumber: {
    presence: { allowEmpty: false, message: 'is required' },
    //email: true,
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128
    }
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%'
  },
  grid: {
    height: '100%'
  },
  quoteContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  resetPassword: {
    marginTop: theme.spacing(2)
},
  quote: {
    backgroundColor: theme.palette.neutral,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/images/auth.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  quoteInner: {
    textAlign: 'center',
    flexBasis: '600px'
  },
  quoteText: {
    color: theme.palette.white,
    fontWeight: 300
  },
  name: {
    marginTop: theme.spacing(3),
    color: theme.palette.white
  },
  bio: {
    color: theme.palette.white
  },
  contentContainer: {},
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    }
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  logoImage: {
    marginLeft: theme.spacing(4)
  },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: 700,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  title: {
    marginTop: theme.spacing(1)
  },
  socialButtons: {
    marginTop: theme.spacing(3)
  },
  socialIcon: {
    marginRight: theme.spacing(1)
  },
  sugestion: {
    marginTop: theme.spacing(2)
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  signInButton: {
    margin: theme.spacing(2, 0)
  }
}));

const SignIn = props => {
  const { history } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  
  const [severity, setSeverity] = useState('success');
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleBack = () => {
    history.goBack();
  };

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  // const handleSignIn = event => {
  //   event.preventDefault();
  //   history.push('/');
  // };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

    const showSnackBar = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

  const handleLogin = async () => {
    console.log(username + password);

    console.log('is loadin 1 ' + isLoading);
    let data = {};

    setIsLoading(true);
    //http://54.202.230.57:8081/swagger-ui.html
    try {
      const musername = 'testjwtclientid';
      const mpassword = 'XY7kmzoNzl100';
      const encrptedPass = Buffer.from(
        `${musername}:${mpassword}`,
        'utf8'
      ).toString('base64');
      //http://18.218.36.165:8081
      const url = `http://18.218.36.165:8081/oauth/token?grant_type=password&username=${username}&password=${password}`;
      console.log('encrypred pass' + encrptedPass);

      const res = await axios.post(url, data, {
        headers: {
          Authorization: `Basic ${encrptedPass}`,
          'Content-type': 'application/json',
          Accept: 'application/json'
        },
        rejectUnauthorized: false
      });
      console.log('access_token status', res.status);

      if (res.data.access_token) {
        console.log('access_token', res.data.access_token);
        localStorage.setItem('access_token', res.data.access_token);
        getData('users').then(res => {
          console.log('profile data>>>>>' + JSON.stringify(res.data));
          if (res.status === 200) {
            localStorage.setItem('username', res.data.username);
            localStorage.setItem('fullname',res.data.full_name);
            localStorage.setItem('email', res.data.email);
            localStorage.setItem('usertype', res.data.user_type_enum);
            localStorage.setItem('membertype', res.data.membership_type_enum);
            localStorage.setItem('phonenumber', res.data.phone_number);
            localStorage.setItem('dob', res.data.date_of_birth);
            localStorage.setItem('verified', res.data.verified);
            localStorage.setItem('constituency', res.data.constituency);
            localStorage.setItem('county', res.data.county);
            localStorage.setItem('otp', res.data.otp);
            localStorage.setItem('residence', res.data.residence);
            localStorage.setItem('ward', res.data.ward);
            localStorage.setItem('gender', res.data.gender);
            auth.login(() => {
              history.push('/');
              // props.history.push("/app");
            });
         }

          console.log('stop get profile');
       });
      } else if(res.status===400){
        
        setSeverity('error');
        setOpen(true);
        setMessage('Invalid login credentials');
      }
       else {

        setSeverity('error');
        setOpen(true);
        setMessage('Invalid login credentials');
      }
    } catch (err) {
      setSeverity('error');
      setIsLoading(false);
      console.log('error' + err);
      setOpen(true);
      setMessage("Invalid login credentials");
    }

    setIsLoading(false);

    console.log('is loadin 2 ' + isLoading);
  };

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container>
        <Grid className={classes.quoteContainer} item lg={5}>
          <div className={classes.quote}>
            <div className={classes.quoteInner}>
              <Typography
                className={classes.quoteText}
                variant="h1"
                style={{
                  color: '#1034a6'
                }}>
                Welcome text goes here
              </Typography>
              <div className={classes.person}>
                <Typography
                  className={classes.name}
                  variant="body1"
                  style={{
                    color: '#1034a6'
                  }}>
                  Sample text
                </Typography>
                <Typography
                  className={classes.bio}
                  variant="body2"
                  style={{
                    color: '#1034a6'
                  }}>
                  Sample text
                </Typography>
              </div>
            </div>
          </div>
        </Grid>

        <Grid className={classes.content} item lg={7} xs={12}>
          <div className={classes.content}>
            <div className={classes.contentHeader}>
              <IconButton onClick={handleBack}>
                <ArrowBackIcon />
              </IconButton>
            </div>
            <div className={classes.contentBody}>
              <form className={classes.form} 
              // onSubmit={()=>
              //   handleLogin
              //   }
                >
                <Typography className={classes.title} variant="h2">
                  Sign in
                </Typography>

                <TextField
                  className={classes.textField}
                  error={hasError('phonenumber')}
                  fullWidth
                  helperText={
                    hasError('phonenumber')
                      ? formState.errors.phonenumber[0]
                      : null
                  }
                  label="Phone Number"
                  name="phonenumber"
                  onChange={e => setUsername(e.target.value)}
                  type="text"
                  //value={formState.values.phonenumber || ''}
                  variant="outlined"
                />
                <TextField
                  className={classes.textField}
                  error={hasError('password')}
                  fullWidth
                  helperText={
                    hasError('password') ? formState.errors.password[0] : null
                  }
                  label="Password"
                  name="password"
                  onChange={e => setPassword(e.target.value)}
                  type="password"
                  //value={formState.values.password || ''}
                  variant="outlined"
                />
                <Typography gutterBottom color="textSecondary" variant="body1"
                                    className={
                                        classes.resetPassword
                                    }>
                                    Forgot your password?{' '}
                                    <Link style={
                                        { color: "#1034a6" }
                                    }
                                        component={RouterLink}
                                        to="/reset-password"
                                        variant="h6">
                                        Reset Password
                                    </Link>
                                </Typography>
                <Button
                  className={classes.signInButton}
                  color="primary"
                  disabled={isLoading}
                  fullWidth
                  size="large"
                  //type="submit"
                  variant="contained"
                  onClick={() => handleLogin()}
                  >
                  {isLoading ? (
                    <div>Please Wait...</div>
                  ) : (
                    <div>Sign in now</div>
                  )}
                </Button>
                <Typography color="textSecondary" variant="body1">
                  Don't have an account?{' '}
                  <Link component={RouterLink} to="/sign-up" variant="h6">
                    Sign up
                  </Link>
                </Typography>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Note archived">
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

SignIn.propTypes = {
  history: PropTypes.object
};

export default withRouter(SignIn);

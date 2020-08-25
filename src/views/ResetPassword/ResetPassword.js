import React, { useState, useEffect, forwardRef } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';
import {
    Grid,
    Button,
    TextField,
    Link,
    Typography,
    Snackbar
} from '@material-ui/core';
import auth from "auth.js";
import Box from '@material-ui/core/Box';
import { registerUser } from 'httprequests';
import InputAdornment from '@material-ui/core/InputAdornment';
import { ErrorAlert } from '../../common/alerts';
import EmailIcon from '@material-ui/icons/Email';
import { useForm } from 'react-hook-form';
import DialpadIcon from '@material-ui/icons/Dialpad';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';
import { MAINURL } from 'common/constants';
import LockIcon from '@material-ui/icons/Lock';


const CustomRouterLink = forwardRef((props, ref) => (
    <div
        ref={ref}
    //style={{ flexGrow: 1 }}
    >
        <RouterLink {...props} />
    </div>
));


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#ffffff',
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
    quote: {
        backgroundColor: theme.palette.neutral,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundImage: 'url(/images/logos/mrescurelogobig.jpeg)',
        backgroundSize: 'box',
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
        flexDirection: 'column'
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
        marginTop: 60,
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
        //marginTop: theme.spacing(1)
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
        backgroundColor: '#1034a6',
        margin: theme.spacing(2, 0),
        '&:hover': {
            backgroundColor: "#e53935",
            color: "#ffffff",
            '& $icon': {
                color: "#ffffff"
            }
        }

    },

    resetPassword: {
        marginTop: theme.spacing(2)
    }
}));

function Alert(props) {
    return <MuiAlert elevation={6}
        variant="filled"
        {...props} />;
}

const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    style: {
        width: '500px',
        height: '500px'
    },
    borderColor: '#b2b2b2b2',
    align: 'center',
    marginTop: '30px',
    alignItems: 'center'

};

const CssTextField = withStyles({
    root: {
        // '& label.Mui-focused': {
        //     color: '#008000'
        // },
        // '& .MuiInput-underline:after': {
        //     borderBottomColor: '#008000'
        // },
        // '& .MuiOutlinedInput-root': {
        //     '& fieldset': {
        //         borderColor: '#b2b2b2'
        //     },
        //     '&:hover fieldset': {
        //         borderColor: '#fad201'
        //     },
        //     '&.Mui-focused fieldset': {
        //         borderColor: '#008000'
        //     }

        // }
    }


})(TextField);

const ResetPassword = props => {
    const defaultValues = {};
    const history = useHistory();
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [otpcode, setOtpcode] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [helperText, /* setHelperText */
    ] = useState('');
    const [error, /* setError */
    ] = useState(false);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [emailScreen, setEmailscreen] = useState(true);
    const [otpScreen, setOtpScreen] = useState(true);
    const { register, handleSubmit, errors, reset, control } = useForm({ defaultValues });
    const [severity, setSeverity] = useState('success');

    const showSnackBar = () => {
        setOpen(true);
    };



    const handleReset = async (data) => {
        //console.log('data for send==>' + data)
        setIsLoading(true);

        let res;
        try {
            //http://localhost:18080/api/user/resetPassword?email=sb-805n92553143%40personal.example.com
            res = await axios.post(`${MAINURL}users/resetPassword?email=${data.email}`);
           // console.log('response reset' + JSON.stringify(res.body))
            if (res.status === 201) {
                setSeverity('success');
                
                setMessage(res.data.message);
                showSnackBar();
                setEmailscreen(false);

            } else {
                console.log('minor error')
                setSeverity('error');
                setMessage(res.data.message);
                showSnackBar();

            }
        } catch (e) {
            console.log('major error' + JSON.stringify(e))
            setSeverity('error');
            setMessage(e.response.data.message);
            showSnackBar();


        }
        setIsLoading(false);

    }

    const submitOTP = async (data) => {
        //console.log('data for send==>' + data)
        setIsLoading(true);

        let res;
        try {
            //http://localhost:18080/api/reset-password
            res = await registerUser('reset-password', data);
            if (res.status === 200) {
                setSeverity('success');
                setMessage(res.data.message);
                showSnackBar();
                setOtpScreen(false);

            } else {
                console.log('minor error')
                setSeverity('error');
                setMessage(res.data.message);
                showSnackBar();

            }
        } catch (e) {
            console.log('major error')
            setSeverity('error');
            setMessage(e.response.data.message);
            showSnackBar();


        }
        setIsLoading(false);

    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    return (
        <div className={
            classes.root
        }>
            <Grid className={
                classes.grid
            }
                container>
                <Grid className={
                    classes.content
                }
                    item
                    lg={7}
                    xs={12}>
                    <div className={
                        classes.content
                    }>

                        <div className={
                            classes.contentBody
                        }>
                            <form className={
                                classes.form
                            }
                                // onSubmit={handleSignIn}
                                noValidate
                                autoComplete="off"
                            >
                                <Link style={
                                    {
                                        color: "#1034a6",

                                    }
                                }
                                    component={RouterLink}
                                    to="/sign-in"
                                    variant="h6">
                                    {'< '}Go back to login
                                    </Link>
                                <Typography
                                    style={
                                        {
                                            marginTop: "20px",
                                            //marginBottom: "10px"
                                        }
                                    }
                                    color="textSecondary" variant='h5'>
                                    Philial login help
                                </Typography>

                                {emailScreen ? <div>

                                    <Typography className={
                                        classes.title
                                    }
                                        variant="h3">
                                        Reset your password
                                    </Typography>
                                    <form
                                        onSubmit={handleSubmit(async (data) => {
                                            console.log('reset email is' + JSON.stringify(data))
                                            handleReset(data);
                                            reset()
                                        }
                                        )}
                                    >
                                        <CssTextField
                                            className={classes.textField}
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            name="email"
                                            inputRef={register({ required: true })}
                                            error={errors.email}
                                            helperText={errors.email && 'Email address required'}
                                            placeholder="Enter email address"
                                            type="text"
                                            variant="outlined"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <EmailIcon style={{ fontSize: 35, color: '#1034a6' }} />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />

                                        <Button className={
                                            classes.signInButton
                                        }
                                            color="primary"
                                            fullWidth
                                            size="large"
                                            type='submit'
                                            variant="contained"
                                        //disabled={isButtonDisabled}
                                        >
                                            {
                                                isLoading ? (
                                                    <div>Please Wait...</div>
                                                ) : (
                                                        <div>
                                                            Reset Password</div>
                                                    )
                                            } </Button>
                                    </form>


                                </div> : (otpScreen ? <div>
                                    <Typography className={
                                        classes.title
                                    }
                                        variant="h3">
                                        Enter the code we sent to your email
                                </Typography>
                                    <form
                                        onSubmit={handleSubmit(async (data) => {
                                            console.log('reset code is' + JSON.stringify(data))
                                            submitOTP(data)
                                        }
                                        )}
                                    >
                                        <CssTextField
                                            autoComplete='off'
                                            className={classes.textField}
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="otpcode"
                                            name="otpcode"
                                            inputRef={register({ required: true })}
                                            error={errors.code}
                                            helperText={errors.code && 'Code required'}
                                            placeholder="Enter code sent to your email address"
                                            type="text"
                                            variant="outlined"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <DialpadIcon style={{ fontSize: 35, color: '#1034a6' }} />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />

                                        <CssTextField
                                            className={classes.textField}
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="new_password"
                                            name="new_password"
                                            inputRef={register({ required: true })}
                                            error={errors.new_password}
                                            helperText={errors.new_password && 'New password required'}
                                            placeholder="Enter new password"
                                            type="text"
                                            variant="outlined"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <LockIcon style={{ fontSize: 35, color: '#1034a6' }} />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />

                                        <Button className={
                                            classes.signInButton
                                        }
                                            color="primary"
                                            fullWidth
                                            size="large"
                                            type='submit'
                                            variant="contained"
                                        //disabled={isButtonDisabled}
                                        >
                                            {
                                                isLoading ? (
                                                    <div>Please Wait...</div>
                                                ) : (
                                                        <div>
                                                            Submit</div>
                                                    )
                                            } </Button>

                                    </form>
                                </div> :





                                    <div>
                                        <Typography className={
                                            classes.title
                                        }
                                            variant="h3">
                                            Password reset successful!
                                </Typography>
                                        <Button className={
                                            classes.signInButton
                                        }
                                            color="primary"
                                            fullWidth
                                            size="large"
                                            component={RouterLink}
                                            to="/sign-in"
                                            variant="contained"
                                        //disabled={isButtonDisabled}
                                        >
                                            {
                                                isLoading ? (
                                                    <div>Please Wait...</div>
                                                ) : (
                                                        <div>
                                                            Login</div>
                                                    )
                                            } </Button>

                                    </div>)}

                               




                                <Typography variant="body1" align='center'>
                                    &copy;{' '}
                                    <Link component="a" href="https://www.philial.com/" target="_blank"
                                        style={
                                            { color: "#1034a6" }
                                        }>
                                        Philial
                                    </Link>
                                    . 2020
                                </Typography>
                                <Typography variant="body1" align='center'>
                                    Powered by EastBytes Ltd
                                </Typography>
                            </form>

                        </div>

                    </div>
                </Grid>
                <Grid className={
                    classes.quoteContainer
                }
                    item
                    lg={5}>
                    <Box border={1}
                        borderRadius={5}
                        {...defaultProps}>
                        <div className={
                            classes.quote
                        }><img src='/images/auth.jpg' alt="Philial logo" height="300px" width="300px" />
                        </div>
                    </Box>
                </Grid>
            </Grid>
            <Snackbar anchorOrigin={
                {
                    vertical: 'top',
                    horizontal: 'right'
                }
            }
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Note archived"
            >
                <Alert onClose={handleClose}
                    severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
};

ResetPassword.propTypes = {
    history: PropTypes.object
};

export default withRouter(ResetPassword);

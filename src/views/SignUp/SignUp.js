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
  FormHelperText,
  Checkbox,
  Typography,
  Snackbar,
  Select,
  InputLabel,
  MenuItem
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MuiAlert from '@material-ui/lab/Alert';
import { registerUser } from 'httprequests';
import { useForm, Controller } from 'react-hook-form';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const schema = {
  firstName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  lastName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128
    }
  },
  policy: {
    presence: { allowEmpty: false, message: 'is required' },
    checked: true
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
    flexDirection: 'row'
  },
  contentHeader: {
    //  display: 'flex',
    // alignItems: 'center',
    // paddingTop: theme.spacing(5),
    // paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(0)
    // paddingRight: theme.spacing(2)
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
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 125,
    flexBasis: 700,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  title: {
    marginTop: theme.spacing(0)
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  policy: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'center'
  },
  policyCheckbox: {
    marginLeft: '-14px'
  },
  signUpButton: {
    margin: theme.spacing(2, 0)
  }
}));

const SignUp = props => {
  const { history } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

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

  const defaultValues = {
    email: '',
    name: '',
    payer_id: 0,
    phone: '',
    roles: [],
    user_type: '',
    username: ''
  };

  var genderoptions = ['Male', 'Female', 'Other'];
  var maritaloptions = ['Single', 'Married'];
  var membershiptypes = ['Individual', 'Junior', 'Corporate'];

  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('success');
  const [message, setMessage] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const [dobdate, setDOBDate] = useState(null);
  const [constituency, setConstituency] = useState('');
  const [county, setCounty] = useState('');
  const [email, setEmail] = useState('');
  const [fullname, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [idnumber, setIDNumber] = useState('');
  const [maritalstatus, setMaritalStatus] = useState('');
  const [membertype, setMemberType] = useState('');
  const [password, setPassword] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [religion, setReligion] = useState('');
  const [residence, setResidence] = useState('');
  const [ward, setWard] = useState('');

  const { register, handleSubmit, errors, reset, control } = useForm({
    defaultValues
  });

  const handleDOBDateChange = date => {
    setDOBDate(date.toISOString().split('T')[0]);
  };

  const handleBack = () => {
    history.goBack();
  };

  // const handleSignUp = event => {
  //   event.preventDefault();
  //   history.push('/');
  // };

  const goLogin=()=>{
    history.push("/sign-in");
  }

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  const handleSignUp = async data => {
    console.log('data for send==>' + data)
    setIsLoading(true);

    let res;
    try {
      res = await registerUser('users', data);
      if (res.status === 200) {
        setSeverity('success');
        setMessage(res.data.message);
        showSnackBar();
        //goLogin();
        
        // props.history.push("/app");
      } else {
        setSeverity('error');
        setMessage(res.data.message);
        showSnackBar();
      }
    } catch (e) {
      setSeverity('error');
      setMessage(e.response.data.message);
      showSnackBar();
    }
    setIsLoading(false);
  };

  const showSnackBar = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container>
        <Grid className={classes.quoteContainer} item lg={4}>
          <div className={classes.quote}>
            <div className={classes.quoteInner}>
              <Typography
                className={classes.quoteText}
                variant="h1"
                style={{
                  color: '#1034a6'
                }}>
                Sample text goes here
              </Typography>
              <div className={classes.person}>
                <Typography
                  className={classes.name}
                  variant="body1"
                  style={{
                    color: '#1034a6'
                  }}>
                  Sample Text
                </Typography>
                <Typography
                  className={classes.bio}
                  variant="body2"
                  style={{
                    color: '#1034a6'
                  }}>
                  Sample Text
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item lg={8} xs={12}>
          <Grid className={classes.content} container direction="column">
            <div className={classes.content}>
              <div className={classes.contentBody}>
                <form
                  className={classes.form}
                  onSubmit={handleSubmit(async data => {
                    var outdata = {
                      constituency: constituency,
                      county: county,
                      date_of_birth: dobdate,
                      email: email,
                      full_name: fullname,
                      gender: data.gender,
                      id_number: idnumber,
                      marital_status: data.marital_status,
                      membership_type_enum:data.membership_type_enum,
                      otp: true,
                      password: password,
                      phone_number: phonenumber,
                      religion: religion,
                      residence: residence,
                      user_type_enum: 'Subscriber',
                      ward: ward
                    };
                    console.log('signup data', JSON.stringify(outdata));

                   handleSignUp(outdata);
                    reset();
                  })}
                  noValidate
                  autoComplete="off">
                  <div className={classes.contentHeader}>
                    <IconButton onClick={handleBack} style={{ paddingLeft: 0 }}>
                      <ArrowBackIcon />
                    </IconButton>
                  </div>
                  <Typography className={classes.title} variant="h2">
                    Create new account
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    Use your email to create new account
                  </Typography>
                  <Grid container direction="row" spacing={2}>
                    <Grid item lg={6} xs={12}>
                      <InputLabel
                        htmlFor="outlined-Name"
                        style={{ marginTop: 0, marginBottom: 3 }}
                        id="demo-simple-select-placeholder-label-label">
                        Membership Type
                      </InputLabel>
                      <Controller
                        className={classes.formControl}
                        as={
                          <Select
                            labelId="demo-simple-select-placeholder-label-label"
                            id="membership_type_enum"
                            displayEmpty
                            // inputProps={{
                            //   name: 'Name',
                            //   id: 'outlined-Name'
                            // }}

                            // value={
                            //     allTypes[getTypeIndex(selectedType.type_id, allTypes)] || ''
                            // }
                            //  onChange={handleChange2}
                          >
                            {membershiptypes.map(m => (
                              <MenuItem key={m} value={m}>
                                {' '}
                                {m}{' '}
                              </MenuItem>
                            ))}
                          </Select>
                        }
                        name="membership_type_enum"
                        control={control}
                        fullWidth
                        defaultValue={'None'}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                      <TextField
                        className={classes.textField}
                        //error={hasError('firstName')}
                        fullWidth
                        // helperText={
                        //   hasError('firstName')
                        //     ? formState.errors.firstName[0]
                        //     : null
                        // }
                        label="Full Name"
                        name="full_name"
                        onChange={e => setFullName(e.target.value)}
                        type="text"
                        //value={formState.values.firstName || ''}
                        variant="outlined"
                      />
                    </Grid>

                    <Grid item lg={6} xs={12}>
                      <TextField
                        className={classes.textField}
                        //error={hasError('lastName')}
                        fullWidth
                        // helperText={
                        //   hasError('lastName')
                        //     ? formState.errors.lastName[0]
                        //     : null
                        // }
                        label="Phone Number"
                        name="phone_number"
                        onChange={e => setPhoneNumber(e.target.value)}
                        type="text"
                        //value={formState.values.lastName || ''}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                      <TextField
                        className={classes.textField}
                        //error={hasError('lastName')}
                        fullWidth
                        // helperText={
                        //   hasError('lastName')
                        //     ? formState.errors.lastName[0]
                        //     : null
                        // }
                        label="Email Address"
                        name="email"
                        onChange={e => setEmail(e.target.value)}
                        type="text"
                        //value={formState.values.lastName || ''}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                      <InputLabel
                        style={{ marginTop: 17 }}
                        htmlFor="input-with-icon-adornment"></InputLabel>

                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                          inputVariant="outlined"
                          margin="normal"
                          id="date-picker-dialog"
                          label="Date Of Birth"
                          format="MM/dd/yyyy"
                          value={dobdate}
                          onChange={handleDOBDateChange}
                          KeyboardButtonProps={{
                            'aria-label': 'change date'
                          }}
                          style={{ width: 293, marginTop: 0 }}
                        />
                      </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item lg={6} xs={12}>
                      <InputLabel
                        style={{ marginTop: 0, marginBottom: 3 }}
                        id="demo-simple-select-placeholder-label-label2">
                        Gender
                      </InputLabel>
                      <Controller
                        className={classes.formControl}
                        as={
                          <Select
                            labelId="demo-simple-select-placeholder-label-label2"
                            id="gender"
                            displayEmpty

                            // value={
                            //     allTypes[getTypeIndex(selectedType.type_id, allTypes)] || ''
                            // }
                            //  onChange={handleChange2}
                          >
                            {genderoptions.map(m => (
                              <MenuItem key={m} value={m}>
                                {' '}
                                {m}{' '}
                              </MenuItem>
                            ))}
                          </Select>
                        }
                        name="gender"
                        control={control}
                        fullWidth
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                      <InputLabel
                        style={{ marginTop: 0, marginBottom: 3 }}
                        id="demo-simple-select-placeholder-label-label3">
                        Marital Status
                      </InputLabel>
                      <Controller
                        className={classes.formControl}
                        as={
                          <Select
                            labelId="demo-simple-select-placeholder-label-label3"
                            id="marital_status"
                            displayEmpty

                            // value={
                            //     allTypes[getTypeIndex(selectedType.type_id, allTypes)] || ''
                            // }
                            //  onChange={handleChange2}
                          >
                            {maritaloptions.map(m => (
                              <MenuItem key={m} value={m}>
                                {' '}
                                {m}{' '}
                              </MenuItem>
                            ))}
                          </Select>
                        }
                        name="marital_status"
                        control={control}
                        fullWidth
                        variant="outlined"
                      />
                    </Grid>

                    <Grid item lg={6} xs={12}>
                      <TextField
                        className={classes.textField}
                        //error={hasError('email')}
                        fullWidth
                        // helperText={
                        //   hasError('email') ? formState.errors.email[0] : null
                        // }
                        label="ID number"
                        name="id_number"
                        onChange={e => setIDNumber(e.target.value)}
                        type="text"
                        //value={formState.values.email || ''}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                      <TextField
                        className={classes.textField}
                        //error={hasError('email')}
                        fullWidth
                        // helperText={
                        //   hasError('email') ? formState.errors.email[0] : null
                        // }
                        label="County"
                        name="county"
                        onChange={e => setCounty(e.target.value)}
                        type="text"
                        //value={formState.values.email || ''}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                      <TextField
                        className={classes.textField}
                        //error={hasError('email')}
                        fullWidth
                        // helperText={
                        //   hasError('email') ? formState.errors.email[0] : null
                        // }
                        label="Constituency"
                        name="constituency"
                        onChange={e => setConstituency(e.target.value)}
                        type="text"
                        //value={formState.values.email || ''}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                      <TextField
                        className={classes.textField}
                        //error={hasError('email')}
                        fullWidth
                        // helperText={
                        //   hasError('email') ? formState.errors.email[0] : null
                        // }
                        label="Ward"
                        name="ward"
                        onChange={e => setWard(e.target.value)}
                        type="text"
                        //value={formState.values.email || ''}
                        variant="outlined"
                      />
                    </Grid>

                    <Grid item lg={6} xs={12}>
                      <TextField
                        className={classes.textField}
                        //error={hasError('email')}
                        fullWidth
                        // helperText={
                        //   hasError('email') ? formState.errors.email[0] : null
                        // }
                        label="Residence"
                        name="residence"
                        onChange={e => setResidence(e.target.value)}
                        type="text"
                        //value={formState.values.email || ''}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                      <TextField
                        className={classes.textField}
                        //error={hasError('email')}
                        fullWidth
                        // helperText={
                        //   hasError('email') ? formState.errors.email[0] : null
                        // }
                        label="Religion"
                        name="religion"
                        onChange={e => setReligion(e.target.value)}
                        type="text"
                        //value={formState.values.email || ''}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                      <TextField
                        className={classes.textField}
                        //error={hasError('password')}
                        fullWidth
                        // helperText={
                        //   hasError('password')
                        //     ? formState.errors.password[0]
                        //     : null
                        // }
                        label="Password"
                        name="password"
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        //value={formState.values.password || ''}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <div className={classes.policy}>
                    {/* <Checkbox
                      checked={formState.values.policy || false}
                      className={classes.policyCheckbox}
                      color="primary"
                      name="policy"
                      //onChange={handleChange}
                    /> */}
                    <Typography
                      className={classes.policyText}
                      color="textSecondary"
                      variant="body1">
                      By clicking the sign up button, you have read and agreed
                      to the{' '}
                      <Link
                        color="primary"
                        component={RouterLink}
                        to="#"
                        underline="always"
                        variant="h6">
                        Terms and Conditions
                      </Link>{' '}
                      .
                    </Typography>
                  </div>
                  {hasError('policy') && (
                    <FormHelperText error>
                      {formState.errors.policy[0]}
                    </FormHelperText>
                  )}
                  <Button
                    className={classes.signUpButton}
                    color="primary"
                    // disabled={!formState.isValid}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained">
                     {
                    isLoading ? (
                      <div>Please Wait...</div>
                    ) : (
                        <div>
                          Sign up now</div>
                      )
                  }
                  </Button>
                  <Typography color="textSecondary" variant="body1">
                    Have an account?{' '}
                    <Link component={RouterLink} to="/sign-in" variant="h6">
                      Sign in
                    </Link>
                  </Typography>
                </form>
              </div>
            </div>
          </Grid>
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

SignUp.propTypes = {
  history: PropTypes.object
};

export default withRouter(SignUp);

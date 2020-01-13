import React, { useState } from "react";
import AuthorizationCode from './AuthorizationCode';
import AddCode from './AddCode';
import PatientToggle from './PatientToggle';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { randomCodeGenerator } from '../../helpers/randomCodeGenerator';
import './PatientSettings.scss';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function PatientSettings(props) {
  const classes = useStyles();
  console.log("SETTINGS OBJECT",props.settings)
  const [addressOne, setAddressOne] = useState("")
  const [addressTwo, setAddressTwo] = useState("")
  const [city, setCity] = useState("")
  const [province, setProvince] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [country, setCountry] = useState("")  
  const [code, setCode] = useState(props.user.auth_code);
  const [disableButton, setDisableButton] = useState(!props.user.is_patient && props.user.auth_code ? true : false);
  const [togglePatient, setPatient] = useState({
    patient: false,
  });
  const [isToggleVisisble, setToggleVisibility] = useState(!props.user.is_patient && props.user.auth_code? true : false);

  const handleChange = name => event => {
    setPatient({ ...togglePatient, [name]: event.target.checked });
  };

  const settingsSave = {}

  
  const add = () => {
    //send axios 
    //is success
    if (code.length >= 5) {
      settingsSave.code = code
      setToggleVisibility(true);
    }
    console.log("THIS IS>>>>", settingsSave)
  }

  const save = () => {
    settingsSave.addressOne = addressOne 
    settingsSave.addressTwo = addressTwo
    settingsSave.city = city
    settingsSave.province = province
    settingsSave.postalCode = postalCode
    settingsSave.country = country
    // settingsSave.code = code
  }

  return (
    <div>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
            Settings
        </Typography>
        <AuthorizationCode 
          code={code} 
          disableButton={disableButton} 
          onClick={() => randomCodeGenerator(5, setCode, setDisableButton)}
          onChange={setCode}
          />
        <AddCode onClick={add} disableButton={disableButton} />
        { isToggleVisisble === true && <div>
        <PatientToggle checked={togglePatient.patient} onChange={handleChange('patient')} />
        {togglePatient.patient === false && <div>
        <Typography component="h2">
            Patient Address
        </Typography>
        <form className={classes.form} noValidate onSubmit={event => event.preventDefault()}>
        <Grid container spacing={2}>
        <Grid item xs={12}> 
        <TextField
          required
          id="outlined-disabled"
          label="Address 1"
          name={addressOne}
          variant="outlined"
          onChange={event => setAddressOne(event.target.value)}
        />
        </Grid>
        <Grid item xs={12}> 
        <TextField
          required
          id="outlined-disabled"
          label="Address 2"
          name={addressTwo}
          variant="outlined"
          onChange={event => setAddressTwo(event.target.value)}
        />
        </Grid>
        <Grid item xs={12}> 
        <TextField
          required
          id="outlined-disabled"
          label="City"
          name={city}
          variant="outlined"
          onChange={event => setCity(event.target.value)}
        />
        </Grid>
        <Grid item xs={12}> 
         <TextField
          required
          id="outlined-disabled"
          label="Province"
          name={province}
          variant="outlined"
          onChange={event => setProvince(event.target.value)}
        />
        </Grid>
        <Grid item xs={12}> 
        <TextField
          required
          id="outlined-disabled"
          label="Postal Code"
          name={postalCode}
          variant="outlined"
          onChange={event => setPostalCode(event.target.value)}
        />
        </Grid>
        <Grid item xs={12}> 
      <TextField
          required
          id="outlined-disabled"
          label="Country"
          name={country}
          variant="outlined"
          onChange={event => setCountry(event.target.value)}
        />
        </Grid>
        </Grid> 
        </form>
        <Button
            type="submit"
            width={1/4}
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={save}
          >
            Save
          </Button> 
        </div>} </div> }
      </div>
    </Container>
    </div>
  );
}


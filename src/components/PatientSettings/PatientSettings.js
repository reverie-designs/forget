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
  const getAddress=(addressString, user)=>{
    if(user.name && addressString){
      const addressArray = addressString.split(" ");
      let city = addressArray[4];
      let country = addressArray[6];
      let province = addressArray[5];
      let address = [];
      address.push(addressArray[0], addressArray[1], addressArray[2], addressArray[3].replace(",",""));
      const finalAddress ={address: address.join(" "), city: city.replace(",",""), province: province, country: country}
      return finalAddress
    }
  }

  const currentAddress = getAddress(props.settings.address, props.user);
  const [addressOne, setAddressOne] = useState(props.user && props.settings.address && currentAddress.address ? currentAddress.address : "")
  const [addressTwo, setAddressTwo] = useState("")
  const [city, setCity] = useState(currentAddress && props.user ? currentAddress.city :"")
  const [province, setProvince] = useState(currentAddress && props.user ? currentAddress.province :"")
  const [country, setCountry] = useState(currentAddress && props.user ? currentAddress.country :"")  
  const [code, setCode] = useState(props.user.auth_code? props.user.auth_code: "");
  const [disableButton, setDisableButton] = useState(props.user && props.user.auth_code ? true : false);
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
  const settings={user_id: 2, address1: '662 King Street West', address2: "", city: "Toronto", province:"ON", country: "Canada", auth_code: code, is_patient: false}
  const save = () => {
    settingsSave.addressOne = addressOne 
    settingsSave.addressTwo = addressTwo
    settingsSave.city = city
    settingsSave.province = province
    settingsSave.country = country
    settingsSave.user_id = props.user.user_id
    settingsSave.auth_code = props.user.auth_code
    settingsSave.is_patient = props.user.is_patient
    props.updateSettings(settingsSave)
  }
  
  return (
    <div>
    {console.log(props.settings.address)}
    {/* {getAddress(props.settings.address, props.user)} */}
    <Container component="main" maxWidth="xs">
      {/* {getAddress(props.settings, props.user)} */}
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
          value={addressOne}
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
          value={city}
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
          value={province}
          variant="outlined"
          onChange={event => setProvince(event.target.value)}
        />
        </Grid>
        <Grid item xs={12}> 
      <TextField
          required
          id="outlined-disabled"
          label="Country"
          name={country}
          value={country}
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


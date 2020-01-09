import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './PatientSettings.scss';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [addressOne, setAddressOne] = useState("")
  const [addressTwo, setAddressTwo] = useState("")
  const [city, setCity] = useState("")
  const [province, setProvince] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [country, setCountry] = useState("")  

  const addressSave = {}

  const save = () => {
    addressSave.addressOne = addressOne 
    addressSave.addressTwo = addressTwo
    addressSave.city = city
    addressSave.province = province
    addressSave.postalCode = postalCode
    addressSave.country = country
    // console.log("THIS IS>>>>>", addressSave.addressOne, addressSave.addressTwo, addressSave.city, addressSave.province, addressSave.postalCode, addressSave.country)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
            Settings
        </Typography>
        <Typography component="h3">
            Patient Address
        </Typography>
        <form className={classes.form} noValidate onSubmit={event => event.preventDefault()}>
        <TextField
          required
          id="outlined-disabled"
          label="Address 1"
          name={addressOne}
          variant="outlined"
          onChange={event => setAddressOne(event.target.value)}
        />
        <TextField
          required
          id="outlined-disabled"
          label="Address 2"
          name={addressTwo}
          variant="outlined"
          onChange={event => setAddressTwo(event.target.value)}
        />
        <div className="city-province">
        <TextField
          required
          id="outlined-disabled"
          label="City"
          name={city}
          variant="outlined"
          onChange={event => setCity(event.target.value)}

        />
         <TextField
          required
          id="outlined-disabled"
          label="Province"
          name={province}
          variant="outlined"
          onChange={event => setProvince(event.target.value)}
        />
        </div>
        <TextField
          required
          id="outlined-disabled"
          label="Postal Code"
          name={postalCode}
          variant="outlined"
          onChange={event => setPostalCode(event.target.value)}
        />
      <TextField
          required
          id="outlined-disabled"
          label="Country"
          name={country}
          variant="outlined"
          onChange={event => setCountry(event.target.value)}
        />
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
        <Typography component="h2">
          Authorization Code
        </Typography>
        <form className={classes.form} noValidate>
        <TextField
          id="outlined-disabled"
          label=""
          defaultValue=""
          variant="outlined"
        />
        </form>
        <Button
            type="submit"
            width={1/4}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Generate
          </Button>
      </div>
    </Container>
  );
}

//
// DIVIDEEEE
//
//


// const useStyles = makeStyles(theme => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function FormPropsTextFields() {
//   const classes = useStyles();

//   return (

//     <div className={classes.paper}>
//     <form className={classes.form} noValidate>
//         <TextField
//           required
//           id="outlined-disabled"
//           label="Address 1"
//           defaultValue=""
//           variant="outlined"
//         />
//         <TextField
//           required
//           id="outlined-disabled"
//           label="Address 2"
//           defaultValue=""
//           variant="outlined"
//         />
//         <TextField
//           id="outlined-password-input"
//           label="Password"
//           type="password"
//           autoComplete="current-password"
//           variant="outlined"
//         />
//         <TextField
//           id="outlined-number"
//           label="Number"
//           type="number"
//           InputLabelProps={{
//             shrink: true
//           }}
//           variant="outlined"
//         />
//         <TextField
//           id="outlined-search"
//           label="Search field"
//           type="search"
//           variant="outlined"
//         />
//         <TextField
//           id="outlined-helperText"
//           label="Helper text"
//           defaultValue="Default Value"
//           helperText="Some important text"
//           variant="outlined"
//         />
//       </form>
//     </div>
//   );
// }

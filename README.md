# ⏰ Forget Me Not ⏰ 

Forget Me Not is there to assist families with family members who have dementia. The application allows caregivers to create notifications (reminders to eat medince, food, and about doctor's appointments) for their loved ones while also keeping track of the location. If the patient leaves the geofence of their location, the caregiver will receive an alert notifying them that their family member has left the safety radius. Forget Me Not is a tool helping families and family members living with dementia keep living independently. 

Tech Stack

Front-end: React JS, Material UI
Back-end: Node JS, Express, Axios
Database: PostgreSQL 

## 🔔 How Forget Me Not works 🔔

Here's a sneak-peek of what the application looks like: 

<b>Saving an appointment</b>

!["Saving an appointment"](https://github.com/fatimaaltaf/scheduler/blob/master/public/GIFS/saving_appointments.gif)

<b>Deleting an appointment</b>

!["Deleting an appointment"](https://github.com/fatimaaltaf/scheduler/blob/master/public/GIFS/Deleting_Appointment.gif)

<b>Editing an appointment</b>

!["Editing an appointment"](https://github.com/fatimaaltaf/scheduler/blob/master/public/GIFS/Editing_Appointment.gif)

## 💻 How to use  💻

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm start` command. The app will be served at <http://localhost:5050/>. 
5. Both servers run concurrently; requests are proxied from the Webpack development server to the API server. To run forget-api, fork the respository here: https://github6.com/reverie-designs/forget-api. 
6. Install dependencies using the `npm install` command.
7. Create an .env.development file and paste code from .env.example into the development file. 
8. Start the web server using the `npm start` command. The app will be served at <http://localhost:8001/>. 
9. To reset the database, visit http://localhost:8001/api/debug/reset.

## ⬆️ Dependencies ⬆️

  "@date-io/date-fns": "^1.3.13",
  "@material-ui/core": "^4.8.3",
  "@material-ui/icons": "^4.5.1",
  "@material-ui/lab": "^4.0.0-alpha.39",
  "@material-ui/pickers": "^3.2.8",
  "@testing-library/jest-dom": "^4.2.4",
  "@testing-library/react": "^9.4.0",
  "@testing-library/user-event": "^7.2.1",
  "axios": "^0.19.0",
  "classnames": "^2.2.6",
  "date-fns": "^2.8.1",
  "google-maps-api-loader": "1.1.1",
  "material-auto-rotating-carousel": "^3.0.2",
  "moment": "^2.24.0",
  "node-sass": "^4.13.0",
  "notistack": "^0.9.7",
  "prop-types": "^15.7.2",
  "react": "^16.12.0",
  "react-big-calendar": "^0.23.0",
  "react-dom": "^16.12.0",
  "react-google-maps": "^9.4.5",
  "react-router-dom": "^5.1.2",
  "react-scripts": "3.3.0",
  "react-swipeable-views": "^0.13.3",
  "react-tackle-box": "^2.1.0",
  "react-toastify": "^5.5.0",
  "typescript": "^3.7.4"

## ⬆️Dev-Dependencies⬆️


## 📌Features📌

1. Caregiver and patient connect with authentication code
2. Caregiver can create notifications to remind patient of eating medicine and food, and upcoming appointments.
3. Caregiver can see location of patient while patient is at home. If they leave the 3km safety radius, the caregiver will receive an alert letting them know patient has left geofence. Caregiver can also have a calendar view to see all notifications they have created. 
4. Patient has a day and night mode to help distinguish between different times of the day. Notifications pop up on patient's homepage which they can close and check as complete. 

## Authors
Dasha Frumovitch
Fatima Altaf
Arvind John

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

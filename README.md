# ⏰ Forget Me Not ⏰ 

Forget Me Not is there to assist families with family members who have dementia. The application allows caregivers to create notifications (reminders to eat medince, food, and about doctor's appointments) for their loved ones while also keeping track of their location. If the patient leaves the 3 KM geofence, the caregiver will receive an alert notifying them that their family member has left the safety radius. The family member with dementia will see pop up notifications on their homepage and have a day and night display to help distinguish different times of day. 

## 🧱 Tech Stack 🧱

* Front-end: React JS, Material UI
* Back-end: Node JS, Express, Axios
* Database: PostgreSQL 

## 🔔 How Forget Me Not works 🔔

Here's a sneak-peek of what the application looks like: 

<b>Intro carousel</b>

![]()

<b>Caregiver view</b>

![]()

<b>Patient view</b>

![]()

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

 * "@date-io/date-fns": "^1.3.13",
 * "@material-ui/core": "^4.8.3",
 * "@material-ui/icons": "^4.5.1",
 * "@material-ui/lab": "^4.0.0-alpha.39",
 * "@material-ui/pickers": "^3.2.8",
 * "@testing-library/jest-dom": "^4.2.4",
 * "@testing-library/react": "^9.4.0",
 * "@testing-library/user-event": "^7.2.1",
 * "axios": "^0.19.0",
 * "classnames": "^2.2.6",
 * "date-fns": "^2.8.1",
 * "google-maps-api-loader": "1.1.1",
 * "material-auto-rotating-carousel": "^3.0.2",
 * "moment": "^2.24.0",
 * "node-sass": "^4.13.0",
 * "notistack": "^0.9.7",
 * "prop-types": "^15.7.2",
 * "react": "^16.12.0",
 * "react-big-calendar": "^0.23.0",
 * "react-dom": "^16.12.0",
 * "react-google-maps": "^9.4.5",
 * "react-router-dom": "^5.1.2",
 * "react-scripts": "3.3.0",
 * "react-swipeable-views": "^0.13.3",
 * "react-tackle-box": "^2.1.0",
 * "react-toastify": "^5.5.0",
 * "typescript": "^3.7.4"

## 📌Features📌

1. Caregiver and patient connect with authentication code
2. Caregiver can create notifications to remind patient of eating medicine and food, and upcoming appointments.
3. Caregiver can see location of patient while patient is at home. If they leave the 3km safety radius, the caregiver will receive an alert letting them know patient has left geofence. Caregiver can also have a calendar view to see all notifications they have created. 
4. Patient has a day and night mode to help distinguish between different times of the day. Notifications pop up on patient's homepage which they can close and check as complete. 

## 🕺Creators 💃🏻
* Dasha Frumovitch
* Fatima Altaf
* Arvind John



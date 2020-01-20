# ⏰ Forget Me Not ⏰ 

Forget Me Not is there to assist families with family members who have dementia. The application allows caregivers to create notifications (reminders to eat medicine, food, and about doctor's appointments) for their loved ones while also keeping track of their location. If the patient leaves the 3 KM geofence, the caregiver will receive an alert notifying them that their family member has left the safety radius. The family member with dementia will see pop up notifications on their homepage and have a day and night display to help distinguish different times of day. 


## 🔔 Preview of the Application 🔔

Here's a sneak-peek of what the application looks like: 

<b>Splash Page</b>

<img src="https://github.com/reverie-designs/forget/blob/master/public/docs/splash-page.gif" alt="Forget Me Not slideshow of main features" height="450" >

<b>Caregiver view GeoFence</b>

<img src="https://github.com/reverie-designs/forget/blob/master/public/docs/geo-fence.gif" alt="view map with patient's current location, a safety radius and their home base location" height="450" >

<b>Create Notification</b>

<img src="https://github.com/reverie-designs/forget/blob/master/public/docs/create-notification.gif" alt="create a new notification by setting time, date,info and category" height="450" >

<b>Calendar View</b>

<img src="https://github.com/reverie-designs/forget/blob/master/public/docs/calendar-view.gif" alt="view all notifications in the calendar" height="450" >

<b>Patient view</b>

<img src="https://github.com/reverie-designs/forget/blob/master/public/docs/patient-view.gif" alt="day or night display with timed greeting and notification" height="450" >


## 🕺Creators 💃🏻
* [@reverie-designs](https://github.com/reverie-designs)
* [@fatimaaltaf](https://github.com/fatimaaltaf)
* [@johnarvi](https://github.com/johnarvi)


## 💻 Getting Started  💻

1. Install dependencies using the `npm install` command.
2. Create an .env file using the .env.example file (you will need a google maps api key in order to run the map feature of this project)
3. Start the web server using the `npm start` command. The app will be served at <http://localhost:5050/>.
4. Please reffer to [forget-api](https://github.com/reverie-designs/forget-api/) for set up instructions of the database server. 

* Note that both servers must be running concurently in order for this app to work.


## ⬆️ Dependencies ⬆️

 * "react": "^16.12.0"
 * "typescript": "^3.7.4"
 * "classnames": "^2.2.6",
 * "node-sass": "^4.13.0",
 * "prop-types": "^15.7.2",
 * "react-router-dom": "^5.1.2",
 * "axios": "^0.19.0",
 * "react-dom": "^16.12.0",
 * "react-google-maps": "^9.4.5",
 * "google-maps-api-loader": "1.1.1",
 * "@date-io/date-fns": "^1.3.13",
 * "react-scripts": "3.3.0",
 * "react-swipeable-views": "^0.13.3",
 * "react-tackle-box": "^2.1.0",
 * "react-toastify": "^5.5.0",
 
 * "@material-ui/core": "^4.8.3"
 * "@material-ui/icons": "^4.5.1",
 * "@material-ui/lab": "^4.0.0-alpha.39",
 * "@material-ui/pickers": "^3.2.8",
 * "material-auto-rotating-carousel": "^3.0.2",
 * "react-big-calendar": "^0.23.0",
 * "@testing-library/jest-dom": "^4.2.4",
 * "@testing-library/react": "^9.4.0",
 * "@testing-library/user-event": "^7.2.1",
 

## 📌Features📌

1. Caregiver and patient connect with authentication code
2. Caregiver can create notifications to remind patient of eating, taking medicine, and upcoming appointments.
3. Caregiver can see location of patient while patient is at home. If they leave the 3km safety radius, the caregiver will receive an alert letting them know patient has left geofence. 
4. Caregiver has a calendar view of past and upcoming notifications that have been set for the patient. 
5. Patient has a greeting, and day and night mode to help distinguish between different times of the day. 
6. Notifications pop up on patient's homepage which they can close and check as complete. 





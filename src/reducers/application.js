export const SET_USER = "SET_USER"
export const SET_NOTIFICATIONS_DATA = "SET_NOTIFICATIONS_DATA"
export const SET_NOTIFICATIONS_DAY = "SET_NOTIFICATIONS_DAY"
export const SET_SETTINGS = "SET_SETTINGS"
export const SET_ERROR = "SET_ERROR"
export const SET_GEOFENCE = "SET_GEOFENCE"
export const SET_LOCATION = "SET_LOCATION"
export const SET_MYEVENTS = "SET_MYEVENTS"

export default function reducer(state, action) {

  switch (action.type) {

    case SET_USER:
      return { ...state, user: action.user }

    case SET_NOTIFICATIONS_DATA:
      return { ...state, notifications: action.notifications}

    case SET_MYEVENTS:
        return { ...state, myEvents: action.myEvents }

    case SET_NOTIFICATIONS_DAY: 
      return {...state, todays_notifications: action.todays_notifications}
    
    case SET_SETTINGS:
      return {...state, settings: action.settings}

    case SET_ERROR:
      return {...state, error: action.error}  

    case SET_GEOFENCE:
      return {...state, geofence: action.geofence }

    case SET_LOCATION:
        return {...state, location: action.location }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      )
  }
}
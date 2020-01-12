export const SET_USER = "SET_USER"
export const SET_NOTIFICATIONS_DATA = "SET_NOTIFICATIONS_DATA"
export const SET_NOTIFICATIONS_DAY = "SET_NOTIFICATIONS_DAY"
export const SET_SETTINGS = "SET_SETTINGS"


export default function reducer(state, action) {
  
  switch (action.type) {

    case SET_USER:
      return { ...state, user: action.user }

    case SET_NOTIFICATIONS_DATA:
      return { ...state, notifications: action.notifications}

    case SET_NOTIFICATIONS_DAY: 
      return {...state, todays_notifications}
    
    case SET_SETTINGS:
      return {...state, settings}

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      )
  }
}
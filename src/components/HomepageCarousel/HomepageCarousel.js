import React, { useState} from 'react';

import AutoRotatingCarousel from './AutoRotatingCarousel';
import Slide from './Slide';
import { blue, cyan } from '@material-ui/core/colors';
import ElderlyCouple from './elderly.png';

export default function HomepageCarousel() {
  
const [carouselState, setCarouselState] = useState(
  {open: true 
  })

return (
<div style={{ position: 'relative', width: '100%', height: 500 }}>
  <AutoRotatingCarousel
    label='Sign Up'
    open={carouselState.open}
    onClose={() => setCarouselState({ open: false })}
    onStart={() => setCarouselState({ open: false })}
    style={{ position: 'absolute' }}
  >
     <Slide
      media={<img alt="Smiling elderly couple holding photo frame" src={ElderlyCouple} />}
      mediaBackgroundStyle={{ backgroundColor: cyan[400] }}
      style={{ backgroundColor: cyan[600] }}
      title='Forget Me Not'
      subtitle='The ideal solution to assist you in helping your family member with dementia continue to live an independent life.'
    />
     <Slide
      media={<img alt="Map with pinned address" src='https://image.flaticon.com/icons/svg/854/854878.svg' />}
      mediaBackgroundStyle={{ backgroundColor: blue[400] }}
      style={{ backgroundColor: blue[600] }}
      title="Current location"
      subtitle='You can also set a geofence for safety!'
    />
    <Slide
      media={<img alt="A cellphone with a pill icon on top of it" src='https://image.flaticon.com/icons/svg/843/843220.svg' />}
      mediaBackgroundStyle={{ backgroundColor: cyan[400] }}
      style={{ backgroundColor: cyan[600] }}
      title='Create reminders and appointments'
      subtitle=''
    />
    <Slide
      media={<img alt="Calendar with one day selected" src='https://image.flaticon.com/icons/svg/123/123392.svg' />}
      mediaBackgroundStyle={{ backgroundColor: blue[400] }}
      style={{ backgroundColor: blue[600] }}
      title='View all notifications you created'
      subtitle='Calendar for easy viewing'
    />
  </AutoRotatingCarousel> 
  </div>
  )
}
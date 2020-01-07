import React, { useState} from 'react';

import AutoRotatingCarousel from './AutoRotatingCarousel';
import Slide from './Slide';
import { red, blue, green } from '@material-ui/core/colors';

export default function HomepageCarousel() {

  const [state, setState] = useState(true)

  return (

    <div style={{ position: 'relative', width: '100%', height: 500 }}>
      <AutoRotatingCarousel
        open={state.open}
        onClose={() => setState({ open: false })}
        onStart={() => setState({ open: false })}
        style={{ position: 'absolute' }}
      >
         <Slide
          media={<img src='https://image.flaticon.com/icons/svg/843/843220.svg' />}
          aria-label="Grandmother and grandfather standing together"
          mediaBackgroundStyle={{ backgroundColor: red[400] }}
          style={{ backgroundColor: red[600] }}
          title='This is a very cool feature'
          subtitle='Just using this will blow your mind.'
        />
        <Slide
          media={<img src='https://image.flaticon.com/icons/svg/843/843220.svg' />}
          mediaBackgroundStyle={{ backgroundColor: red[400] }}
          style={{ backgroundColor: red[600] }}
          title='This is a very cool feature'
          subtitle='Just using this will blow your mind.'
        />
        <Slide
          media={<img src='https://image.flaticon.com/icons/svg/854/854878.svg' />}
          mediaBackgroundStyle={{ backgroundColor: blue[400] }}
          style={{ backgroundColor: blue[600] }}
          title='Ever wanted to be popular?'
          subtitle='Well just mix two colors and your are good to go!'
        />
        <Slide
          media={<img src='https://image.flaticon.com/icons/svg/123/123392.svg' />}
          mediaBackgroundStyle={{ backgroundColor: green[400] }}
          style={{ backgroundColor: green[600] }}
          title='May the force be with you'
          subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
        />
      </AutoRotatingCarousel>
    </div>
  )
}

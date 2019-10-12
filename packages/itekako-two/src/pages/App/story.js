import React from 'react';
import { storiesOf } from '@storybook/react';

import TwoApp from './';

const stories = storiesOf('App', module);

stories.add('Itekako Two App', () => (
  <TwoApp />
));
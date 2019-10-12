import React from 'react';
import { storiesOf } from '@storybook/react';

import OneApp from './';

const stories = storiesOf('App', module);

stories.add('Itekako One App', () => (
  <OneApp />
));
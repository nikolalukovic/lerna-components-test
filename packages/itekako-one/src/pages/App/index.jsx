import React from 'react';

import OneButton from '../../components/Button';
import FlexRow from '../../containers/FlexRow';
import { StyledApp } from './styles';

const App = props => {
    console.log('One props', props);
    return (
        <div className={props.className}>
            <FlexRow>
                <OneButton />
            </FlexRow>
        </div>
    );
};

const SApp = StyledApp(App);

export default SApp;

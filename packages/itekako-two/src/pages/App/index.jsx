import React from 'react';

import TwoButton from '../../components/Button';
import FlexRow from '../../containers/FlexRow';
import { StyledApp } from './styles';

const App = props => {
    console.log('Two props', props);
    return (
        <div className={props.className}>
            <FlexRow>
                <TwoButton />
            </FlexRow>
        </div>
    );
};

const SApp = StyledApp(App);

export default SApp;

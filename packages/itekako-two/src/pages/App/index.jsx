import React from 'react';

import TwoButton from '../../components/Button';
import FlexRow from '../../containers/FlexRow';
import { StyledApp } from './styles';

const App = ({ className }) => {
    return (
        <div className={className}>
            <FlexRow>
                <TwoButton />
            </FlexRow>
        </div>
    );
};

const SApp = StyledApp(App);

export default SApp;

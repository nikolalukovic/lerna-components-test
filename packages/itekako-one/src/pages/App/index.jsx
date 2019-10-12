import React from 'react';

import OneButton from '../../components/Button';
import FlexRow from '../../containers/FlexRow';
import { StyledApp } from './styles';

const App = ({ className }) => {
    return (
        <div className={className}>
            <FlexRow>
                <OneButton />
            </FlexRow>
        </div>
    );
};

const SApp = StyledApp(App);

export default SApp;

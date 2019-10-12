import React from 'react';

import OneButton from '../../components/Button';
import FlexRow from '../../containers/FlexRow';
import { StyledApp } from './styles';

const App = () => {
    return (
        <FlexRow>
            <OneButton />
        </FlexRow>
    );
};

export default StyledApp(App);

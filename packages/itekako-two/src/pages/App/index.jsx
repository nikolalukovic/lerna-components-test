import React from 'react';

import TwoButton from '../../components/Button';
import FlexRow from '../../containers/FlexRow';
import { StyledApp } from './styles';

const App = () => {
    return (
        <FlexRow>
            <TwoButton />
        </FlexRow>
    );
};

export default StyledApp(App);

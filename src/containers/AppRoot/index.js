import React from 'react';
import { Route } from 'react-router-dom';

import AppMain from '../AppMain';

const AppRoot = () => (
    <Route path="/claimsui" component={AppMain} />
);

export default AppRoot;

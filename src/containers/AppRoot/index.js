import React from 'react';
import { Route } from 'react-router-dom';

import AppMain from '../AppMain';

export const AppRoot = () => (
    <Route path="/" component={AppMain} />
);

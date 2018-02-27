import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import CSSModules from 'react-css-modules';

import styles from './styles.scss';

const AppMain = ({ match: { path } }) => (
  <div styleName="main-container">
    'Test'
  </div>
);

AppMain.propTypes = {
  match: PropTypes.object.isRequired,
};

export default CSSModules(AppMain, styles);

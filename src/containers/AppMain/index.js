import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import CSSModules from 'react-css-modules';

import ErrorModal from '../../components/Error';
import PolicyLookUp from '../PolicyLookUp';

import styles from './styles.scss';

const AppMain = ({ match: { path } }) => (
  <div className={styles.mainContainer}>
    <ErrorModal />
    <Switch>
      {/* <Route exact path={path} component={Login} /> */}
      <Route path={`${path}`} component={PolicyLookUp} />
    </Switch>
  </div>
);

AppMain.propTypes = {
  match: PropTypes.object.isRequired,
};

export default CSSModules(AppMain, styles);

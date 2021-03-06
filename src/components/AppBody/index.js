import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import CSSModules from 'react-css-modules';

import styles from './index.style.scss';

export class AppBody extends Component {

  render() {
    return (
      <Row className="container">
        <Col xs={12} sm={12} md={12}>
					{this.props.children}
        </Col>
      </Row>
    );
  }
}

AppBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

export default CSSModules(AppBody, styles);
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'react-bootstrap';

import { requestPolicySearch } from '../../actions/action-creators/policyLookUp';
import { addErrors, toggleModal } from '../../actions/action-creators/app';

const mapStateToProps = ({ policyLookUp }) => ({
    policyLookUp
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        addErrors,
        toggleModal,
        requestPolicySearch
    },
    dispatch)
);

class PolicyLookUp extends Component {
    handleSearch = () => {
        const { addError, requestPolicySearch } = this.props;
        const policyNumber = this.textInput.value;

        if (policyNumber === null && policyNumber === '') {
          addErrors({
            message: 'Should not be empty'
          });
          toggleModal({
            modal: 'errorModal',
            active: true,
            properties: {messages: 'Should not be empty'}
          })
        }

        if (policyNumber !== null && policyNumber !== '') {
            requestPolicySearch(policyNumber);
            requestPolicySerach
        }
    }

    clearField = () => {
        this.textInput.value = '';
    }

    render() {
        return (
            <Row>
                <Col xs={12} sm={12} md={12}>
                PolicyNumber
                <input
                    ref={(input) => { this.textInput = input; }}
                    type="number"
                />
                <button onClick={this.clearField}> clear</button>
                <button onClick={this.handleSearch}> Submit </button>
                </Col>
            </Row>
        )
    }
}

PolicyLookUp.propTypes = {
    clearField: PropTypes.func.isRequired,
    requestPolicySearch: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(PolicyLookUp);

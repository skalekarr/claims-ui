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
    showError = (message) => {
        const { addErrors, toggleModal } = this.props;

        addErrors({
            message: message
          });
          toggleModal({
            modal: 'errorModal',
            active: true,
            properties: {messages: message}
          });
    }

    handleSearch = () => {
        const { requestPolicySearch } = this.props;
        const policyNumber = this.textInput.value;

        if (policyNumber === null || policyNumber === '') {
            this.showError('Policy Number cannot be Empty. Please Enter a Valid Policy Number')
        } else if (isNaN(policyNumber)) {
            this.showError('Policy Number can be only Numbers. Please Enter a Valid Policy Number')
        } else if (policyNumber.length !== 8) {
            this.showError('Policy Number should be of 8 characters. Please Enter a Valid Policy Number')
        } else {
            requestPolicySearch(policyNumber);
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
                    type="text"
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, PageHeader, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

import { requestPolicySearch } from '../../actions/action-creators/policyLookUp';
import { addErrors, toggleModal } from '../../actions/action-creators/app';

import AppBody from '../../components/AppBody';
import { NavigationBar } from '../../components/NavigationBar/index';

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
            properties: { messages: message }
        });
    }

    handleSearch = () => {
        const { requestPolicySearch } = this.props;
        const policyNumber = this.textInput.value;

        if (policyNumber === undefined || policyNumber === '') {
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
            <AppBody>
                <PageHeader>
                    Mutual of Omaha
                </PageHeader>
                <NavigationBar />
                <hr/>
                <form>
                    <FormGroup
                        controlId="policyLookUp"
                    >
                        <Row>
                            <Col md={6} xs={6}>
                                <ControlLabel>PolicyNumber</ControlLabel>
                            </Col>
                            <Col md={6} xs={6}>
                                <FormControl
                                    inputRef={input => this.textInput = input}
                                    type="text"
                                />
                            </Col>
                        </Row>
                    </FormGroup>
                </form>
                <Row>
                    <Col md={6} xs={6}>
                        <Button className="btn btn-primary " onClick={this.clearField}>Clear</Button>
                    </Col>
                    <Col md={6} xs={6}>
                        <Button className="btn btn-primary pull-right" onClick={this.handleSearch}>Submit</Button>
                    </Col>
                </Row>
            </AppBody>
        )
    }
}

PolicyLookUp.propTypes = {
    requestPolicySearch: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(PolicyLookUp);

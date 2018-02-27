import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { clearField, requestPolicySearch } from '../../actions/action-creators/policyLookUp';

const mapStateToProps = ({ policyLookUp }) => ({
    policyLookUp
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ 
        clearField, 
        requestPolicySearch 
    }, 
    dispatch)
);

class PolicyLookUp extends Component {
    handleSearch = () => {
        const { requestPolicySearch } = this.props;
        const policyNumber = this.textInput.value

        if (policyNumber !== null && policyNumber !== '') {
            requestPolicySearch(policyNumber);
        }
    }

    clearField = () => {
        this.textInput.value = '';
    }

    render() {
        return (
            <div>
                PolicyNumber
                <input 
                    ref={(input) => { this.textInput = input; }}
                    type="number"
                />
                <button onClick={this.clearField}> Clear </button>
                <button onClick={this.handleSearch}> Submit </button>
            </div>
        )
    }
}

PolicyLookUp.propTypes = {
    clearField: PropTypes.func.isRequired,
    requestPolicySearch: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(PolicyLookUp);

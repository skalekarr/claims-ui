import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button, Modal } from 'react-bootstrap';

import { toggleModal, clearErrors } from '../../actions/action-creators/app';

const mapStateToProps = ({ app: { modals: { errorModal: modal }, errors } }) => ({
  modal,
  errors,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ toggleModal, clearErrors }, dispatch)
);

export class ErrorModal extends Component {
  constructor(props) {
    super(props);
  }

  close = () => {
    const { clearErrors, modal, toggleModal } = this.props;

    toggleModal({
      modal: 'errorModal',
      active: false,
      properties: modal.properties,
    });

    clearErrors();
  }

  render() {
    const { errors } = this.props;
    return (
      <Modal show={this.props.modal.active} onHide={this.close}>
        <Modal.Header>
					<Modal.Title className="modal-title" style={{ display: 'inline-block' }}>Error{errors.length > 1 && <span>s</span>} Encountered</Modal.Title>
          <Button className="close" bsStyle="link" onClick={this.close} style={{ display: 'inline-block', float: 'right' }}>
            <span>&times;</span>
          </Button>
        </Modal.Header>
        <Modal.Body>
          { Object.keys(errors).map((error, i, arr) => (
                <div key={error}>
                  {errors[error].error &&
                    <h4 id="default_error_text" className="zone-red-bold">{errors[error].error}</h4>
                  }
                  {errors[error].message &&
                    <p>{errors[error].message}</p>
                  }
                  {errors[error].exception &&
                    <p>{errors[error].exception}</p>
                  }
                  {(arr.length - 1) !== i &&
                    <hr />
                  }
                </div>
              ),
            )
          }
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close} bsStyle="warning">Dismiss Error{errors.length > 1 && <span>s</span>}</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

ErrorModal.defaultProps = {
  errors: {},
  modal: {
    active: false, // modal closed by default
    properties: {
      message: 'An error occured.',
    },
  },
};

ErrorModal.propTypes = {
  errors: PropTypes.object.isRequired,
  modal: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorModal);

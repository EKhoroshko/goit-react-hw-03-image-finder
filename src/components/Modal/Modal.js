import PropTypes from 'prop-types';
import { Component } from 'react';
import css from '../Modal/Modal.module.css';
import { createPortal } from 'react-dom';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onClickEscClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onClickEscClose);
  }

  onClickEscClose = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  onClickOverlayClose = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL } = this.props;
    return createPortal(
      <div className={css.Overlay} onClick={this.onClickOverlayClose}>
        <div className={css.Modal}>
          <img src={largeImageURL} alt="img" />
        </div>
      </div>,
      document.getElementById('portal'),
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string,
  onClose: PropTypes.func,
};

export default Modal;

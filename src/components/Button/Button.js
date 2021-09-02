import PropTypes from 'prop-types';
import css from '../Button/Button.module.css';

function Button({ onClick} ){
    return(
        <button className={css.button} onClick={onClick}>
            Load more
        </button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func,
  };

export default Button;
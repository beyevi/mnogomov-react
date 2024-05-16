import PropTypes from 'prop-types'; // Import PropTypes for type validation
import styles from './Button.module.css';

function Button({ type, children, onClick }) {
    return (
        <button type={type} className={styles.Button} onClick={onClick}>{children}</button>
    );
}

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']), // Validate type prop
    children: PropTypes.node.isRequired // Validate children prop
  };
  
  Button.defaultProps = {
    type: 'button' // Default to 'button' type if not provided
  };

export default Button;
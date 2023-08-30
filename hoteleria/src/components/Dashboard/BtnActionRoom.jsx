import styles from './BtnActionRoom.module.css'
import PropTypes from 'prop-types'

function BtnActionRoom({ text, children, handleClick }) {
  return (
    <div
      className={`${styles.btn} ${
        text === 'Eliminar'
          ? styles.delete
          : text === 'Editar'
          ? styles.edit
          : styles.hiden
      }`}
      onClick={handleClick}
    >
      {text} {children}
    </div>
  )
}
BtnActionRoom.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
  handleClick: PropTypes.func,
}
export default BtnActionRoom

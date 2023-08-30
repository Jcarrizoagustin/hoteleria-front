import styles from './DashboardButton.module.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function DashboardButton({ to, title }) {
  return (
    <Link className={styles.button} to={to}>
      {title}
    </Link>
  )
}

DashboardButton.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
}

export default DashboardButton

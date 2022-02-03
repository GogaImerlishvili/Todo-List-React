import PropTypes from 'prop-types'
import React, { useEffect } from 'react';

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  },[list]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

Alert.propTypes = {

    type: PropTypes.bool,
    msg: PropTypes.string,
    removeAlert: PropTypes.bool,
    list: PropTypes.string
}

export default Alert;



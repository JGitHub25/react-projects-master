import React, { useEffect } from "react";

const Alert = ({ msg, type, updateAlertValues, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      updateAlertValues();
    }, 800);
    return () => {
      clearTimeout(timeout);
    };
  }, [list]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;

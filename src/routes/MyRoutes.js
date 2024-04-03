import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function MyRoute({ PageComponent, isClosed, ...rest }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const location = useLocation();

  if (isClosed && !isLoggedIn) {
    return (
      <Navigate
        to={{
          pathname: '/login',
          state: { prevPath: location.pathname },
        }}
        replace
      />
    );
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PageComponent {...rest} />;
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  PageComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};

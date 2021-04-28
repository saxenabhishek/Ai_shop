import React from 'react';
// import PropTypes from 'prop-types';

// import './ionicons.min.css';
// import './linearicons.min.css';

const Icon = props => {
  console.log(props)
  const { icon, className, color, type } = props;
  let { fontSize } = props;
  fontSize = fontSize ? fontSize + 'px' : '14px';

  // Icons can be in different types. User can choose the type
  const suffix =
    type === 'o' ? '-outline' : type === 's' ? '-sharp' : '';

  // const classNames = [prefix + icon, className].join(' ');
  return <ion-icon Name={icon+suffix} style={{ fontSize, color }} />;
};

// Icon.propTypes = {
//   icon: PropTypes.string,
//   className: PropTypes.string,
//   color: PropTypes.string,
//   type: PropTypes.string,
// };

// Icon.defaultProps = {
//   color: '',
//   type: 'linear',
// };

export default Icon;

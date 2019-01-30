import React from 'react';
import PropTypes from 'prop-types';


const HomeScreen = ({ name }) => (
  <div className="HomeScreen">
  HomeScreen
    {name}
  </div>
);

HomeScreen.propTypes = ({
  name: PropTypes.string,
});

HomeScreen.defaultProps = {
  name: 'Welington',
};

export default HomeScreen;

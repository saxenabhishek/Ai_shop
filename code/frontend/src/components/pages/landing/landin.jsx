import React from 'react';
import { Helmet } from 'react-helmet';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

// import ProductsListWithTabs from '../../compositions/ProductsListWithTabs/ProductsListWithTabs';
// import { LANDING as landingTitle } from '../../constants/titles';

const LandingPage = props => {
  return (
    <div>
      <Helmet defer={false}>
        <title>LandingPage</title>
      </Helmet>
      <ProductsListWithTabs lists={props.lists} />
      <h2>landing page</h2>
    </div>
  );
};

// LandingPage.propTypes = {
//   lists: PropTypes.arrayOf(PropTypes.object),
// };

// const mapStateToProps = state => {
//   return {
//     lists: state.lists.listsConfigs,
//   };
// };

export default LandingPage;

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import spinner from "../../ui/spinner/Spinner";
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

// import ProductsListWithTabs from '../../compositions/ProductsListWithTabs/ProductsListWithTabs';
// import { LANDING as landingTitle } from '../../constants/titles';
import ProductsList from "./productlist";
const LandingPage = (props) => {
  const [lists, setLists] = useState([0, 0]);
  console.log(props);
  useEffect(() => {
    fetch("/api/prod")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setLists(result);
      });
  }, []);
  if (lists == [0, 0]) {
    return spinner;
  } else {
    return (
      <div>
        <Helmet defer={false}>
          <title>LandingPage</title>
        </Helmet>
        <ProductsList lists={lists} />
        <h2>landing page</h2>
      </div>
    );
  }
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

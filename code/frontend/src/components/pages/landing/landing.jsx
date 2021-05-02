import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Spinner from "../../ui/spinner/Spinner";
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

// import ProductsListWithTabs from '../../compositions/ProductsListWithTabs/ProductsListWithTabs';
// import { LANDING as landingTitle } from '../../constants/titles';
import ProductsList from "./productlist";

const LandingPage = (props) => {
  const [lists, setLists] = useState([null]);
  console.log("from landing page", props);
  useEffect(() => {
    fetch("/api/prod")
      .then((res) => res.json())
      .then((result) => {
        setLists(result);
      });
  }, []);
  return (
    <div>
      <Helmet defer={false}>
        <title>Welcome</title>
      </Helmet>
      {lists[0] != null ? (
        <ProductsList lists={lists} />
      ) : (
        <Spinner type="big" />
      )}
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

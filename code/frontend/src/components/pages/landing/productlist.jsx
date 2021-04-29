import React, { useState, useEffect } from "react";
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import posed from 'react-pose';

import ProductThumb from "./prodthumb";
import styles from "./ProductsList.module.css";
import Spinner from "../../ui/spinner/Spinner";
// import * as actions from '../../store/actions';

// const AnimatedContainer = posed.ul({
//   enter: {
//     opacity: 1,
//     staggerChildren: 50,
//     beforeChildren: true,
//   },
//   leave: {
//     opacity: 0,
//     staggerChildren: 20,
//     staggerDirection: -1,
//   },
//   initialPose: 'leave',
// });

// const AnimatedChild = posed.li({
//   enter: {
//     x: '0%',
//     y: 0,
//     opacity: 1,
//   },
//   leave: {
//     x: '-100%',
//     y: 80,
//     opacity: 0,
//   },
// });

const ProductsList = (props) => {
  const [isOpened, setIsOpened] = useState(false);

  // useEffect(() => {
  //   async function fetchList(id) {
  //     if (!props.lists[props.id]) {
  //       await props.onFetchList(props.id);
  //       setIsOpened(true);
  //     }
  //   }

  //   fetchList(props.id);
  // }, [props.id]);

  // const addToCartHandler = (e, item) => {
  //   e.preventDefault();

  //   const { id, title, thumbnails, price } = item;

  //   props.onAddToCart({
  //     amount: 1,
  //     id,
  //     product: {
  //       id,
  //       price,
  //       title,
  //       thumbnail: thumbnails[0],
  //     },
  //     updated: false,
  //   });
  // };

  // const toggleWishlistHandler = item => {
  //   const { id, title, price, thumbnails } = item;

  //   if (props.wishlist.hasOwnProperty(id)) {
  //     // Delete if it is in wishlist
  //     props.onRemoveFromWishlist(id);
  //   } else {
  //     // Add if it is not in wishlist
  //     props.onAddToWishlist({
  //       id,
  //       title,
  //       price,
  //       thumbnail: thumbnails[0],
  //     });
  //   }
  // };
  console.log(props);
  const renderProducts = () => {
    let count = 0;
    return props.lists.map((p) => {
      // Sorry for so long name )
      let id = 0;
      count += 1;
      console.log(count, p);
      const isTogglingWishlist =
        props.isAddingToWishlist || props.isRemovingFromWishlist;

      return (
        <li className={styles.Column}>
          <ProductThumb
            key={count}
            item={p}
            // onAddToCart={e => addToCartHandler(e, p)}
            // addingToCart={props.isAddingToCart}
            // inCart={props.cart.hasOwnProperty(id)}
            // toggleWishlist={() => toggleWishlistHandler(p)}
            // togglingWishlist={isTogglingWishlist}
            // inWishlist={props.wishlist.hasOwnProperty(id)}
          />
        </li>
      );
    });
  };

  // const ID = props.id;
  // // render the Spinner initially
  // let productsList = <Spinner />;
  // render the real component if
  // products are received and valid
  // if (props.lists.length > 1) {
  let productsList = (
    <section className={styles.Grid}>
      <ul className={styles.Row}>{renderProducts()}</ul>
      {/* <AnimatedContainer
          pose={isOpened ? 'enter' : 'leave'}
          className={styles.Row}
          withParent={false}
        >
        </AnimatedContainer> */}
    </section>
  );
  // console.log('aaaaaaaaaaaaa');
  // }

  return <div>{productsList}</div>;
};

export default ProductsList;

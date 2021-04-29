import React from "react";

import styles from "./RatingStars.module.css";
import Icon from "../icon/Icon";
/**
 * This component generates the rating
 * stars by item's rates
 */
const RatingStars = ({ rating }) => {
  console.log(rating);
  let theme = "yellow";
  let ratingLimit = 5;
  const stars = [];
  // the initial className is only applied for unfilled stars
  const initialClass = [styles.Star];
  for (let i = 0; i < ratingLimit; i++) {
    if (rating > i) {
      // this className defines className of the
      // filled star depending on the style prop
      const className = [...initialClass, styles[theme]].join(" ");
      console.log(className);
      // this is the fillled star
      stars.push(
        <Icon
          type=" "
          icon="star"
          className={className}
          key={i}
          color="#e3b622"
        />
      );
    } else {
      // this is the unfilled star
      stars.push(
        <Icon type="o" icon="star" key={i} className={initialClass.join(" ")} />
      );
    }
  }

  return stars;
};

export default RatingStars;

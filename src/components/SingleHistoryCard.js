// import React, { useState, useEffect, Fragment } from "react";
// import { SingleProductCard } from ".";
// import { getInventoryById } from "../api";
// import "./SingleHistoryCard.css";

// const SingleHistoryCard = ({ history }) => {
//   //   console.log(history, "history in history card");
//   const [orderHistory, setOrderHistory] = useState([]);
//   const productArray = history.productArray;
//   const priceArray = history.historicalPrice;

//   const handleHistory = async () => {
//     productArray.map(async (id) => {
//       const product = await getInventoryById(id);
//       setOrderHistory([product, ...orderHistory]);
//     });
//   };

//   useEffect(() => {
//     handleHistory();
//   }, []);

//   console.log(orderHistory, "order history in history card");

//   return (
//     <div className="history-main-container">
//       <p>Content</p>
//       {orderHistory.map((product) => {
//         console.log(product, "product in map in order history");
//         return (
//           <Fragment key={`order history: ${product.id}`}>
//             <SingleProductCard product={product} />
//           </Fragment>
//         );
//       })}
//     </div>
//   );
// };

// export default SingleHistoryCard;

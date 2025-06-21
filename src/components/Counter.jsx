// import React, { useState } from "react";
// export const Counter = ({counters, setCounters}) => {

//     const addCounter = () => {
//       setCounters([...counters, 0]); 
//     };
  
//     const updateCounter = (index, value) => {
//       const newCounters = [...counters];
//       newCounters[index] += value;
//       setCounters(newCounters);
//     };
//   return (
// <div className="addCounter text-center mt-5">
//         <button className="btn-lg" onClick={addCounter}>
//           Add Counter
//         </button>

//         <div className="plusMnus mt-4 d-flex flex-column gap-3 align-items-center">
//           {counters.map((value, index) => (
//             <div
//               key={index}
//               className="d-flex gap-3 align-items-center justify-content-center"
//             >

//               <button
//                 className="btn-lg"
//                 onClick={() => updateCounter(index, 1)}
//               >

//                 +
//               </button>
//               <p className="h4 mb-0">{value}</p>
//               <button
//                 className="btn-lg"
//                 onClick={() => updateCounter(index, -1)}
//               >
//                 -
//               </button>

//             </div>
//           ))}
//         </div>
//       </div>
//   )
// }

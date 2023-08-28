// import { useState } from "react";

// function Date() {
//   setInterval(updateDate);
//   const today = new Date().toLocaleDateString();
//   const [Date, setDate] = useState(today);

//   function updateDate() {
//     const newDate = new Date().toLocaleDateString();
//     setDate(newDate);
//   }
//   return (
//     <div className="date">
//       <h3>{Date}</h3>
//     </div>
//   );
// }
// export default Date;

import React from "react";

// Import the Date object
import { Date } from "somewhere";
// or simply use it directly without importing
// import 'somewhere';

function YourComponent() {
  // Now you can use the Date object here
  const currentDate = new Date();
  // ... rest of your component code
}

export default YourComponent;

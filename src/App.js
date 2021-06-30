import React from 'react';
// import './App.css';
import Card from "./Card";
import Sdata from "./Sdata";

const App = () => (

  <>

    <h1 className="heading_style">List of top 7 Netflix Series in 2020</h1>
    {Sdata.map((val, index) => {
      return (
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
    })}

  </>
)




// function App() {

//   let curDate = new Date(2020, 5, 5, 15);
//   curDate = curDate.getHours();
//   let greeting = "";
//   const cssStyle = {};

//   if (curDate >= 1 && curDate < 12) {
//     greeting = "Good Morning";
//     cssStyle.color = "lightgreen";
//   } else if (curDate >= 12 && curDate < 19) {
//     greeting = "Good Evening";
//     cssStyle.color = "orange";
//   } else {
//     greeting = "Good Night";
//     cssStyle.color = "black";
//   }

//   return (
//     <>
//       <div className="container">
//         <h1 className="heading">
//           <p>
//             Hello sir, <span style={cssStyle}> {greeting} </span>

//           </p>
//         </h1>
//       </div>
//     </>
//   );

// }

export default App;




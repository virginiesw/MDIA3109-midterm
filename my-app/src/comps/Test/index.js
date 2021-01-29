// import React, { useState, useEffect } from "react";
// // import "./styles.css";
// import styled from 'styled-components';


// const Container = styled.div`

// display:${props=>props.checked ? "hidden" : "inline-flex"};
// opacity:${props=>props.checked? 1 : 0};
// display:flex;
// flex-direction:column;

// max-height:	70px;
// max-width: 311px;
// border: 1px solid black;
// border-radius: 5px;
// background-color:#FFF;
// align-items: center;
// justify-content: center;
// align-slef:center;
// font-size:24px;
// color:${props=>props.expanded ? "#DAD":"#00000"};
// .topcont{
//     display:flex;
//     margin-bottom:-15px;


// `;
// const TopCont = styled.div`
//     display:flex;
   
// img{
//     position: absolute;
//         top: 18px;
//         left: 20px;
// }
// `;
// const SliderCont = styled.div`

// align-content:center;
// align-items:flex-end;
// display: flex;
// top:0;
// flex:1;
// align-items: center;
// justify-content: center;
// div{
//  margin:1%;
//     align-items: center;
//     justify-content: center;
//     align-slef:center;
// }
// img{
//     width:100%;
//     height:100%;
// }

// `;





// const Indicator = ({text,expand}) => {
//     const [checked,setChecked] = useState(true);
//     // const [focused,setFocused] = useState(true);
//     const [expanded, setExpanded] = useState(true);
   
//     useEffect(()=>{
//         setExpanded(expand)
//     },[expand])
    
//     return <Container checked={checked}  >
//         <TopCont expanded={expanded}>
//         <div className="topcont" >

//        <div className="close" onClick={()=>{
//               setChecked(false);
//          }} ><img src="img/close.png"/></div>
         
//           <div className="text" onClick={()=>{
//             setExpanded(!expanded);}}>{text}</div>
//           </div>
//         </TopCont>
      
//       <SliderCont>
          
//       <div >
//           <img src="img/completed.png"/>
//           </div>
          

// <div><img src="img/empty.png"/></div>
//      </SliderCont>

  
//      </Container>

// }


// Indicator.defaultProps = {
//     text:"Dinner",

//      expanded:false
    
  

// }
    


// const allImages = [
//   {
//     id: 1,
//     imgUrl: "img/close.png"
//   },
//   {
//     id: 2,
//     imgUrl: "https://via.placeholder.com/100"
//   },
//   {
//     id: 3,
//     imgUrl: "https://via.placeholder.com/100"
//   }
// ];

// const App = () => {
//   const [pics, setPics] = useState([]);

//   const removeImage = (id) => {
//     setPics((oldState) => oldState.filter((item) => item.id !== id));
//   };

//   useEffect(() => {
//     //fake fetch data
//     setPics(allImages);
//   }, []);
//   return (
//     <div className="App">
//       {pics.map((pic) => {
//         return (
//           <div style={{ marginBottom: "100px" }}>
//             {pic.id}
//             <img
//               src={pic.imgUrl}
//               width="10px"
//               height="10px"
//               alt="placeholder grey 100px"
//             />
//             <button onClick={() => removeImage(pic.id)}>X</button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default App;

// import React,{useState, useEffect} from 'react';

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

// .topcont{
//     display:flex;
//     margin-bottom:-15px;

//     .text{
//      color:${props=>props.expanded ? "#FF9E44":"#FFFFF"};
//     }
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

// const Slider =styled.div`

// height: 13px;
// width: 48px;
// border: 1px solid #FF9E44;
// box-sizing: border-box;
// border-radius: 5px;
// display:flex;
// background-color:${props=>props.expanded ? "#FF9E44":"#FFFFF"};
// align-item:center;
// align-self:center;



// `;



// const Indicator2 = ({text,expand}) => {
//     const [checked,setChecked] = useState(true);
//     // const [focused,setFocused] = useState(true);
//     const [expanded, setExpanded] = useState(true);
   
//     useEffect(()=>{
//         setExpanded(expand)
//     },[expand])
    
//     return <Container checked={checked}  >
//         <TopCont >
//         <div className="topcont" >

//        <div className="close" onClick={()=>{
//               setChecked(false);
//          }} ><img src="img/close.png"/></div>
         
//           <div className="text" expanded={expanded} onClick={()=>{
//             setExpanded(!expanded);}}>{text}</div>
//           </div>
//         </TopCont>
      
//       <SliderCont>
          
//       <div >
//           <img src="img/completed.png"/>
//           </div>
//           <div>
//        <Slider expanded={expanded} onClick={()=>{
//         setExpanded(!expanded) ;
//        }} />
// </div>
// <div>
//        <Slider expanded={expanded} onClick={()=>{
//         setExpanded(!expanded);
//        }} />
// </div>
// <div>
//        <Slider expanded={expanded} onClick={()=>{
//         setExpanded(!expanded);
//        }} />
// </div>
// <div>
//        <Slider expanded={expanded} onClick={()=>{
//         setExpanded(!expanded);
//        }} />
// </div>

// <div><img src="img/empty.png"/></div>
//      </SliderCont>

  
//      </Container>

// }


// Indicator2.defaultProps = {
//     text:"Dinner",

//      expanded:false
    
  

// }
    
// export default Indicator2;


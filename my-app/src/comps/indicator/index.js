import React, { useState, useEffect } from 'react';
import close from '../../img/close.png';
import styled from 'styled-components';
import "./indicator.css";
import ProgressBar from '../ProgressBar';

// const Container = styled.div`

// display:${props => props.checked ? "hidden" : "inline-flex"};
// opacity:${props => props.checked ? 1 : 0};
// display:flex;
// flex-direction:column;
// margin-top: 8px;
// max-height:	70px;
// max-width: 311px;
// border: 1px solid black;
// border-radius: 5px;
// background-color:#FFF;
// align-items: center;
// justify-content: center;
// align-slef:center;
// font-size:24px;
// margin-bottom: 12px;
// position: relative;

// .topcont{
//     display:flex;
//     margin-bottom:-15px;
//         // .text{
//         //     color:${props => props.expanded ? "#FF9E44" : "#FFFFF"};
//         // }

// `;

// const TopCont = styled.div`
// display:flex;
// margin-top: 15px;
//     img{
//         // position: absolute;
//             top: 20px;
//             left: 20px;
//     }
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

// const Slider = styled.div`

// height: 13px;
// width: 48px;
// border: 1px solid #FF9E44;
// box-sizing: border-box;
// border-radius: 5px;
// display:flex;
// background-color:${props => props.expanded ? "#FF9E44" : "#FFFFF"};
// background-color:${props => props.expanded1 ? "#FF9E44" : "#FFFFF"};
// background-color:${props => props.expanded2 ? "#FF9E44" : "#FFFFF"};
// background-color:${props => props.expanded3 ? "#FF9E44" : "#FFFFF"};
// align-item:center;
// align-self:center;
// cursor: pointer;
// `;

// const CloseImg = styled.img`
// width: 20px;
// margin: 5px;
// position: absolute;
// top: 0;
// left: 0;
// `;



// const Indicator = ({ text, fill, fill1, fill2, fill3 }) => {
//     const [checked, setChecked] = useState(true);
//     // const [focused,setFocused] = useState(true);
//     const [completion, setCompletion] = useState(0)
//     const [stateE, setStateE] = useState("");
//     const [expanded, setExpanded] = useState(fill);
//     const [expanded1, setExpanded1] = useState(fill1);
//     const [expanded2, setExpanded2] = useState(fill2);
//     const [expanded3, setExpanded3] = useState(fill3);
//     console.log(fill, fill1, fill2, fill3);

//     const clearState = () => {
//         setExpanded(false);
//         setExpanded1(false);
//         setExpanded2(false);
//         setExpanded3(false);
//     }

//     useEffect(() => {
//         setExpanded(expanded)
//     }, [expanded])

//     useEffect(() => {
//         setExpanded(expanded1)
//         console.log("expanded 2nd", expanded1);
//     }, [expanded1])

//     useEffect(() => {
//         setExpanded(expanded2)
//         setExpanded1(expanded2)
//         console.log("expanded 3rd", expanded2);
//     }, [expanded2])

//     useEffect(() => {
//         setExpanded(expanded3)
//         setExpanded1(expanded3)
//         setExpanded2(expanded3)
//         console.log("expanded 4th", expanded3);
//     }, [expanded3])

//     return <Container checked={checked}  >
//          <CloseImg onClick={() => {
//                     setChecked(false);
//                 }}  src={close}></CloseImg>
//         <TopCont >
//             <div className="topcont" >
// {/* 
//                 <div className="close" onClick={() => {
//                     setChecked(false);
//                 }} >

//                     </div> */}

//                 <div className="text"> {text}</div>
//             </div>
//         </TopCont>

//         <SliderCont>

//             <div >
//                 <img src="img/empty.png" />
//             </div>
//             <div>
//                 <Slider expanded={expanded} onClick={() => {
//                     clearState();

//                     setExpanded(!expanded);
//                     setCompletion(1);
//                 }} />
//             </div>
//             <div>
//                 <Slider expanded={expanded1} onClick={() => {
//                     clearState();
//                     setExpanded1(!expanded1);
//                     setCompletion(2);
//                 }} />
//             </div>
//             <div>
//                 <Slider expanded={expanded2} onClick={() => {
//                     clearState();
//                     setExpanded2(!expanded2);
//                     setCompletion(3);
//                 }} />
//             </div>
//             <div>
//                 <Slider expanded={expanded3} onClick={() => {
//                     clearState();
//                     setExpanded3(!expanded3);
//                     setCompletion(4);
//                 }} />
//             </div>

//             <div><img src="img/completed.png" /></div>
//         </SliderCont>


//     </Container>

// }


// Indicator.defaultProps = {

//     text: "Dinner",
//     // expanded: true,
//     // expanded1: true,
//     // expanded2: true,
//     // expanded3: true,
//     fill: true,
//     fill1: true,
//     fill2: true,
//     fill3: false,

//     completion: 0
// }

// export default Indicator;

const Indicator = ({onClick, mealname, handleDelete, clickLess, clickMore, perc, id, completed}) => {



    return <div onClick={() =>
        onClick(id, completed)} className="container">{id}  {completed}
        <img className="closeimg"
            onClick={() => handleDelete()}
            src={close}></img>
        <h2>{mealname}</h2>
        <div className="bar">
            <button id="button" src="img/empty.png" onClick={() => { clickLess(mealname) }}>
                <img className="bowlicon" src="img/completed.png" alt="ate more" />
            </button>
            <ProgressBar percentage={perc} />
            <button id="button" onClick={() => { clickMore(mealname) }}>
                <img className="bowlicon" src="img/empty.png" alt="ate less" />
            </button>
        </div>
    </div>
}


Indicator.defaultProps = {
    mealname: "breakfast",
    perc: 25,
    clickLess: ()=>{},
    clickMore: ()=>{},
    handleDelete: ()=>{},
    id: null,
    completed: null
}


export default Indicator;
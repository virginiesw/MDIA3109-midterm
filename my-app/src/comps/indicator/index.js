import React,{useState, useEffect} from 'react';

import styled from 'styled-components';


const Container = styled.div`

display:${props=>props.checked ? "hidden" : "inline-flex"};
opacity:${props=>props.checked? 1 : 0};
display:flex;
flex-direction:column;

max-height:	70px;
max-width: 311px;
border: 1px solid black;
border-radius: 5px;
background-color:#FFF;
align-items: center;
justify-content: center;
align-slef:center;
font-size:24px;

.topcont{
    display:flex;
    margin-bottom:-15px;

    .text{
     color:${props=>props.expanded ? "#FF9E44":"#FFFFF"};
    }
`;

const TopCont = styled.div`

    display:flex;
   
img{
    position: absolute;
        top: 18px;
        left: 20px;
}
`;
const SliderCont = styled.div`

align-content:center;
align-items:flex-end;
display: flex;
top:0;
flex:1;
align-items: center;
justify-content: center;
div{
 margin:1%;
    align-items: center;
    justify-content: center;
    align-slef:center;
}
img{
    width:100%;
    height:100%;
}

`;

const Slider =styled.div`

height: 13px;
width: 48px;
border: 1px solid #FF9E44;
box-sizing: border-box;
border-radius: 5px;
display:flex;
background-color:${props=>props.expanded ? "#FF9E44":"#FFFFF"};
background-color:${props=>props.expanded1 ? "#FF9E44":"#FFFFF"};
background-color:${props=>props.expanded2 ? "#FF9E44":"#FFFFF"};
background-color:${props=>props.expanded3 ? "#FF9E44":"#FFFFF"};
align-item:center;
align-self:center;



`;



const Indicator = ({text,expand}) => {
    const [checked,setChecked] = useState(true);
    // const [focused,setFocused] = useState(true);
    const [expanded, setExpanded] = useState(false);
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);
    useEffect(()=>{
        setExpanded(expand)
    },[expand])
    useEffect(()=>{
        setExpanded(expanded1)
    },[expanded1])
    useEffect(()=>{
        setExpanded(expanded2)
        setExpanded1(expanded2)
    },[expanded2])
    useEffect(()=>{
        setExpanded(expanded3)
        setExpanded1(expanded3)
        setExpanded2(expanded3)
    },[expanded3])
    
    return <Container checked={checked}  >
        <TopCont >
        <div className="topcont" >

       <div className="close" onClick={()=>{
              setChecked(false);
         }} ><img src="img/close.png"/></div>
         
          <div className="text" expanded={expanded} onClick={()=>{
            setExpanded(!expanded);}}>{text}</div>
          </div>
        </TopCont>
      
      <SliderCont>
          
      <div >
          <img src="img/completed.png"/>
          </div>
          <div>
       <Slider expanded={expanded} onClick={()=>{
        setExpanded(!expanded) ;
       }} />
</div>
<div>
       <Slider expanded1={expanded1} onClick={()=>{
        setExpanded1(!expanded1);
       }} />
</div>
<div>
       <Slider expanded2={expanded2} onClick={()=>{
        setExpanded2(!expanded2);
       }} />
</div>
<div>
       <Slider expanded3={expanded3} onClick={()=>{
        setExpanded3(!expanded3);
       }} />
</div>

<div><img src="img/empty.png"/></div>
     </SliderCont>

  
     </Container>

}


Indicator.defaultProps = {
    text:"Dinner",

     expanded:true,
     expanded1:true,
     expanded2:true,
     expanded3:true
     

    
  

}
    
export default Indicator;


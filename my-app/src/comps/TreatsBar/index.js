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


`;
const TopCont = styled.div`
    display:flex;
   
img{
    position: absolute;
        top: 40px;
        left: 40px;
        width:10px;
        height:10px;
}
`;
const Bar = styled.div`

align-content:center;
align-items:flex-end;
display: flex;
top:0;
align-items: center;
justify-content: center;
div{
 margin:1%;
    align-items: center;
    justify-content: center;
    align-slef:center;
    display:flex;
}
img{
    width:10px;
    height:10px;
}

`;

const allImages = [
    {
        id: 1,
      imgUrl: "img/treat.png"
    },
    {
        id: 2,
        imgUrl: "img/treat.png"
      },
      {
        id: 3,
        imgUrl: "img/treat.png"
      },
      {
        id: 4,
        imgUrl: "img/treat.png"
      },
      {
        id: 5,
        imgUrl: "img/treat.png"
      }
  ];





const TreatsBar = ({text,expand}) => {
    const [checked,setChecked] = useState(true);
    const [pics, setPics] = useState([]);
    const removeImage = (id) => {
        setPics((oldState) => oldState.filter((item) => item.id !== id));
      };

      useEffect(() => {
        //fake fetch data
        setPics(allImages);
      }, []);
    
    return <Container checked={checked}  >
        <TopCont>
        <div className="topcont" >

           
          <div className="text">{text}</div>
          </div>
          <div className="add" ><img src="img/add.png"/></div>
         
        </TopCont>
        <Bar>
        <div className="App">
        {pics.map((pic) => {
         return (
        
          <div style={{ display:"flex",width:"20px",height:"20px"}}>
           {/* {pic.id} */}
               {/* <div className="treat" ><img src={pic.imgUrl}/></div>
               <div className="treat" ><img src={pic.imgUrl}/></div>
               <div className="treat" ><img src={pic.imgUrl}/></div>
               <div className="treat" ><img src={pic.imgUrl}/></div>
               <div className="treat" ><img src={pic.imgUrl}/></div> */}
 
           <img src={pic.imgUrl}/>

         
               <div className="remove" 
       onClick={() => removeImage(pic.id)}>
           <img src="img/remove.png"/>
           
          </div>
          </div>
        );
      })}
    </div>

        </Bar>
      
  
     </Container>

}


TreatsBar.defaultProps = {
    text:"Treats",

     expanded:false
    
  

}
    
export default TreatsBar;


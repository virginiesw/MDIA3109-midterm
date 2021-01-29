import React from 'react';

import styled from 'styled-components';


const Container = styled.div`
display:flex;
// position:absolute;
max-height:	274x;
max-width: 535px;
border: 1px solid black;
background-color:#7A7A7A;
align-items: center;
justify-content: center;
align-slef:center;
.edit{
    position: absolute;
        top: 20px;
        left: 500px;
        width:10%;  
        height:10%;
}
`;

const Image = styled.div`
// display:flex;
img{
    width:30%;  
    height:30%;
 margin:10%;
} 

`;
const Icon = styled.div`
img{

    // position: absolute;
    align-self:start;
        // bottom: 150px;
        // right: -20;
        height:50%;
        width:50%;
}
`;
const InfoCont = styled.div`
display:flex;
color:#FFFFF;
  .cont{
    align-items: center;
    justify-content: center;
    align-slef:center;
    text-align: center
  }
`;
const ProfileCont = styled.div`
position:absolute;
margin-left:20%;
top:12%;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
align-slef:center;
color:#FFF;

.name{
    font-size:36px;
    font-weight:bold;
    margin:10%;
}
.proptxt{
    font-size:18px;

}
.text{
    font-size:20px;

}

img{
    height:25%;
    weight:10%;
    margin:10px;


}

`;





const Profile = ({name,avatar,age,weight}) => {

    
    return <Container >
      <Icon>
           <div className="edit"
   ><img src="img/edit.png"/></div>
   </Icon>
       <Image> 
        <div><img src={avatar}/></div>

        </Image>
  
        <ProfileCont >
        <div className="name">{name}</div>
  
        <InfoCont>
          <div className="cont">
          <div className="text">Age</div>
          <div className="proptxt">{age}</div>
          </div>
     
          <div className="line"><img src="img/line.png"/></div>

          <div className="cont">
          <div className="text">Weight</div>
          <div className="proptxt">{weight}</div>
          </div>
          </InfoCont>
          
        </ProfileCont>
    
          


  
     </Container>

}


Profile.defaultProps = {
    name:"Murphy",
    avatar:"/img/Murphy.png",
    age:"3 y 6 m",
    weight:"95lbs"


    
  

}
    
export default Profile;


import React from 'react';

import styled from 'styled-components';
import edit from '../../img/edit.png';
import murphy from '../EditProfile/imgs/murphy.png'

const Container = styled.div`
display:flex;
min-height: 274px;
min-width: 414px;
max-width: 600px;
align-items: center;
justify-content: center;
position: relative;
color: white;
`;


const Icon = styled.img`
position: absolute;
top: 0;
right: 0;
margin: 10px;
`;
const InfoCont = styled.div`
flex: 1;
display: flex;
width: 200px;
justify-content: space-between;
`;
const ProfileCont = styled.div`
`;

const ImgCont = styled.div`
    display:flex;
    overflow: hidden;
    min-height: 100px;
    min-width: 100px;
    max-height: 120px;
    max-width: 120px;
    border-radius: 100%;
    border: 10px solid white;
    z-index: 10;
    border: 6px solid #CCD9DF;
`;

const Img = styled.img`
width: 100%;
height: 100%;
object-fit: stretch;
`;

const InnerCont = styled.div`
display: flex;
width: 100%;
justify-content: space-around;
align-items: center;
`;

const AgeCont = styled.div`
text-align: center;
`;

const WeightCont = styled.div`
text-align: center;
`;

const NameCont = styled.div`
font-size: 40px;
margin-bottom: 15px;
`;

const LineCont = styled.div`
height: 55px;
width: 1px;
background-color: white;
`;

const BigCont = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;



const Profile = ({name,avatar,age,weight}) => {

    
    return <Container >
        <Icon src={edit}></Icon>
        <InnerCont>
            <ImgCont>  
                <Img src={murphy}></Img>
            </ImgCont>
            <ProfileCont >
                <BigCont>
                    <NameCont>
                    {name}
                    </NameCont>
                    <InfoCont>
                        <AgeCont>
                            Age <br/>
                            {age}
                        </AgeCont>
                        <LineCont></LineCont> 
                        <WeightCont>
                            Weight <br/>
                            {weight}
                        </WeightCont>
                    </InfoCont>        
                </BigCont>
     
            </ProfileCont>  
        </InnerCont>
     </Container>
}


Profile.defaultProps = {
    name:"Murphy",
    avatar:"/img/Murphy.png",
    age:"3 y 6 m",
    weight:"95lbs"
}
    
export default Profile;


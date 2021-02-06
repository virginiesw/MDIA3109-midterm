import React from 'react';

import styled from 'styled-components';
import edit from '../../img/edit.png';
import murphy from '../EditProfile/imgs/murphy.png';
import ProfilePicChanger from '../ProfilePicChanger';

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
top: 10px;
right: 10px;
margin: 10px;
cursor: pointer;

:hover {
    filter: drop-shadow(0px 0px 5px #888888);
}
`;

const InfoCont = styled.div`
flex: 1;
display: flex;
width: 200px;
justify-content: space-around;
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
`;

const Img = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
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
height: 40px;
width: 1px;
background-color: white;
`;

const BigCont = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-left: -30px;
`;



const Profile = ({ name, imgurl, year, month, weight, clickHome, hideHome }) => {





    return <Container >
        <Icon onClick={hideHome} onClick={clickHome} src={edit}></Icon>
        <InnerCont>
            <ImgCont>
                <Img src={imgurl}></Img>
            </ImgCont>
            <ProfileCont >
                <BigCont>
                    <NameCont>
                        {name}
                    </NameCont>
                    <InfoCont>
                        <AgeCont>
                            Age <br />
                            {year} y {month} m
                        </AgeCont>
                        <LineCont></LineCont>
                        <WeightCont>
                            Weight <br />
                            {weight} lbs
                        </WeightCont>
                    </InfoCont>
                </BigCont>

            </ProfileCont>
        </InnerCont>
    </Container>
}


Profile.defaultProps = {
    name: "default name",
    // imgurl: "../../img/murphy.png",
    year: "x",
    month: "y",
    weight: "x",
    clickHome: () => { },
    hideHome: () => { },
}

export default Profile;


import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProfilePicChanger  from '../ProfilePicChanger';
import murphy from './imgs/murphy.png';
import editicon from './imgs/editIcon.png';

const Container = styled.div`
    min-width:300px;
    max-width: 700px;
    min-height: 896px;
    max-height: 1000px;
    background-color:#004476;
    margin:0;
 

    .avatar {
        display: flex;
        justify-content:center;
        margin-top:5%;
        // z-index: 10;
        z-index: 10;
        position: relative;
       
    }
`;

const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Cancel = styled.text`
    color:white;
    font-weight: bold;
    font-size: 24px;
    font-family: sans-serif;
    padding:5%;
    cursor: pointer;

    :hover {
        filter: drop-shadow(0px 0px 0.5px #FFFFFF);
      }
`;

const Done = styled.button`
    color:#44DDFF;
    background: none;
    border:none;
    font-weight: bold;
    font-size: 24px;
    cursor: pointer;
    font-family: sans-serif;
    padding:5%;
    cursor:pointer;

    :hover {
        filter: drop-shadow(0px 0px 0.5px #FFFFFF);
      }
`;

const Avatar = styled.div`
    display: flex;
    justify-content:center;
    margin-top:5%;
`;

const ImgCont = styled.div`
    display:flex;
    overflow: hidden;
    min-height: 131px;
    min-width: 131px;
    max-height: 150px;
    max-width: 150px;
    border-radius: 100%;
    border: 10px solid white;
    z-index: 10;
    position: relative;
    margin-bottom:20px;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: scale-down;
`;

// const Edit = styled.img`
//     width:30px;
//     height:30px;
//     position:relative;
//     left:180px;
//     bottom:40px;
//     cursor: pointer;
// `;

const Info = styled.div`

`;

const Title = styled.text`
    color:white;
    font-weight: bold;
    font-size: 20px;
    font-family: sans-serif;
    padding: 10px;
`;

const InfoBox = styled.div`
    padding-right:15px;
    padding-left:15px;
    margin-bottom:20px;
    margin-top:20px;
    margin-left: 40px;
    display:flex;
    align-items:center;
  
`;

const InfoEdit = styled.input`
    position:absolute;
    left:170px;
    background-color:#CCD9DF;
    padding:20px;;
    border-radius:5px;
    border: none;
    outline: none;
`;

const HorizontalRule = styled.hr`
    width:77%;
    margin-top: 15px;
    margin-bottom: 15px;
`;

const fakedb = require('../../profileData.json')

const EditProfile = ({ EditClick, homeClick, DoneClick, submitClick }) => {

    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [avatar, setAvatar] = useState("");
    const [weight, setWeight] = useState("");

    return <Container>
        <TopBar>
            <Cancel onClick={homeClick}>Cancel</Cancel>

            <Done onClick={() => {
                DoneClick(); submitClick(name, weight, year, month);
            }}>Save
            </Done>
        </TopBar>
        {/* <Avatar>
            <div>
                <ImgCont>
                    {fakedb.map(o => <Img src={o.avatar} onChange={(e) => {
                        setAvatar(e.target.value);
                    }}></Img>)}
                </ImgCont>

                {/* <Edit src={editicon} onClick={EditClick}></Edit> */}
            {/* </div> */}

        {/* </Avatar> */} */}

        {/* // <Avatar /> */} 

        <div className="avatar">
              <ProfilePicChanger />
        </div>
      
        <Info>
        {/* <div className="avatar">
              <ProfilePicChanger />
        </div> */}
            {/* Name info box */}
            <InfoBox>
                <Title>Name</Title>
                {fakedb.map(o => <InfoEdit placeholder={o.name} type="text" onChange={(e) => {
                    setName(e.target.value);
                }}></InfoEdit>)}
            </InfoBox>

            <HorizontalRule></HorizontalRule>

            {/* Weight info box */}
            <InfoBox>
                <Title>Weight</Title>
                {fakedb.map(o => <InfoEdit placeholder={o.weight} type="text" onChange={(e) => {
                    setWeight(e.target.value);
                }}></InfoEdit>)}
            </InfoBox>

            <HorizontalRule></HorizontalRule>

            {/* Age info box */}
            <InfoBox>
                <Title>Year</Title>
                {fakedb.map(o => <InfoEdit placeholder={o.year} type="text" onChange={(e) => {
                    setYear(e.target.value);
                }}></InfoEdit>)}
            </InfoBox>

            <HorizontalRule></HorizontalRule>

            <InfoBox>
                <Title>Month</Title>
                {fakedb.map(o => <InfoEdit placeholder={o.month} type="text" onChange={(e) => {
                    setMonth(e.target.value);
                }}></InfoEdit>)}
            </InfoBox>

        </Info>
    </Container>
}

EditProfile.defaultProps = {
    EditClick: () => { },
    homeClick: () => { },
    DoneClick: () => { },
    goHomePage: () => { },
    submitClick: () => { },
}

export default EditProfile;
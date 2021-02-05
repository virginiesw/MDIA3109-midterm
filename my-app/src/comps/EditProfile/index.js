import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import editicon from './imgs/editIcon.png';

const Container = styled.div`
    min-width:300px;
    max-width: 700px;
    min-height: 896px;
    max-height: 1000px;
    background-color:#004476;
    margin:0;
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
`;

const Done = styled.button`
    color:#44DDFF;
    background-color:#004476;
    border:none;
    font-weight: bold;
    font-size: 24px;
    cursor: pointer;
    font-family: sans-serif;
    padding:5%;
    cursor:pointer;
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
    display:flex;
    align-items:center;
`;

const InfoEdit = styled.input`
    position:absolute;
    left:140px;
    background-color:#CCD9DF;
    padding:20px;;
    border-radius:5px;
`;

const HorizontalRule = styled.hr`
    width:77%;
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
            }}>Done
            </Done>
        </TopBar>
        <Avatar>
            <div>
                <ImgCont>
                    {fakedb.map(o => <Img src={o.avatar} onChange={(e) => {
                        setAvatar(e.target.value);
                    }}></Img>)}
                </ImgCont>

                {/* <Edit src={editicon} onClick={EditClick}></Edit> */}
            </div>
        </Avatar>
        <Info>
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

            <HorizontalRule></HorizontalRule>

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
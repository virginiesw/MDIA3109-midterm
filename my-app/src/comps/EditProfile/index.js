import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import murphy from './imgs/murphy.png';
import editicon from './imgs/editIcon.png';

const Container = styled.div`
    width:100vw;
    height:100vh;
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
    font-size: 5vw;
    font-family: sans-serif;
    padding:5%;
`;

const Done = styled.text`
    color:#44DDFF;
    font-weight: bold;
    font-size: 5vw;
    
    font-family: sans-serif;
    padding:5%
`;

const Avatar = styled.div`
    display: flex;
    justify-content:center;
    margin-top:5%;
`;

const Img = styled.img`
    display:flex;
    width:35vw;
    height:35vw;
    border-radius: 100%;
    object-fit:cover;
    border: 6px solid #CCD9DF;
`;

const Edit = styled.img`
    width:9vw;
    height:9vw;
    position:relative;
    left:33vw;
    bottom:7vw;
`;

const Info = styled.div`

`;

const Title = styled.text`
    color:white;
    font-weight: bold;
    font-size: 5vw;
    font-family: sans-serif;
    padding:5%
`;

const InfoBox = styled.div`
    margin-left:7vw;
    margin-bottom:2vw;
    margin-top:2vw;
    display:flex;
    align-items:center;
`;

const InfoEdit = styled.input`
    position:absolute;
    left:35vw;
    background-color:#CCD9DF;
    padding:2%;
    border-radius:5px;
`;

const HorizontalRule = styled.hr`
    width:75vw;
`;

const fakedb = [
    {
        id:1,
        name:"Murphy",
        weight:"95 lbs",
        age:"3 y 6 m",
        pic:murphy,
    }
]

const EditProfile = (EditClick, CancelClick, DoneClick, ) => {
    return <Container>
        <TopBar>
            <Cancel onClick={CancelClick}>Cancel</Cancel>
            <Done onClick={DoneClick}>Done</Done>
        </TopBar>
        <Avatar>
            <div>
                <Img src={murphy}></Img>
                <Edit src={editicon} onClick={EditClick}></Edit>
            </div>
        </Avatar>
        <Info>
            {/* Name info box */}
            <InfoBox>
                <Title>Name</Title>
                {fakedb.map(o=><InfoEdit placeholder={o.name}></InfoEdit>)}
            </InfoBox>

            <HorizontalRule></HorizontalRule>

            {/* Weight info box */}
            <InfoBox>
                <Title>Weight</Title>
                {fakedb.map(o=><InfoEdit placeholder={o.weight}></InfoEdit>)}
            </InfoBox>

            <HorizontalRule></HorizontalRule>

            {/* Age info box */}
            <InfoBox>
                <Title>Age</Title>
                {fakedb.map(o=><InfoEdit placeholder={o.age}></InfoEdit>)}
            </InfoBox>

            <HorizontalRule></HorizontalRule>
        </Info>
    </Container>
}

EditProfile.defaultProps = {
    EditClick:()=>{},
    CancelClick:()=>{},
    DoneClick:()=>{},
}

export default EditProfile;
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import murphy from './imgs/murphy.png';
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
`;

const Done = styled.text`
    color:#44DDFF;
    font-weight: bold;
    font-size: 24px;
    
    font-family: sans-serif;
    padding:5%
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
    border: 6px solid #CCD9DF;
`;

const Img = styled.img`
width: 100%;
height: 100%;
object-fit: stretch;
`;

const Edit = styled.img`
    width:30px;
    height:30px;
    position:relative;
    left:180px;
    bottom:40px;
`;

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
    margin-left:4vw;
    margin-bottom:2vw;
    margin-top:2vw;
    display:flex;
    align-items:center;
`;

const InfoEdit = styled.input`
    position:absolute;
    left:180px;
    background-color:#CCD9DF;
    padding:20px;;
    border-radius:5px;
`;

const HorizontalRule = styled.hr`
    width:77%;
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

const EditProfile = ({EditClick, CancelClick, DoneClick}) => {

    const [name, setName] = useState("");
    const [bday, setBday] = useState("");
    const [weight, setWeight] = useState("");

    return <Container>
        <TopBar>
            <Cancel onClick={CancelClick}>Cancel</Cancel>
            <Done onClick={()=>{
                DoneClick(name, bday, weight)
            }}>Done</Done>
        </TopBar>
        <Avatar>
            <div>
                <ImgCont>  
                    <Img src={murphy}></Img>
                </ImgCont>
              
                <Edit src={editicon} onClick={EditClick}></Edit>
            </div>
        </Avatar>
        <Info>
            {/* Name info box */}
            <InfoBox>
                <Title>Name</Title>
                {fakedb.map(o=><InfoEdit placeholder={o.name} type="text" onChange={(e)=>{
        setName(e.target.value);
      }}></InfoEdit>)}
            </InfoBox>

            <HorizontalRule></HorizontalRule>

            {/* Weight info box */}
            <InfoBox>
                <Title>Weight</Title>
                {fakedb.map(o=><InfoEdit placeholder={o.age} type="text" onChange={(e)=>{
        setBday(e.target.value);
      }}></InfoEdit>)}
            </InfoBox>

            <HorizontalRule></HorizontalRule>

            {/* Age info box */}
            <InfoBox>
                <Title>Age</Title>
                {fakedb.map(o=><InfoEdit placeholder={o.weight} type="text" onChange={(e)=>{
        setWeight(e.target.value);
      }}></InfoEdit>)}
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
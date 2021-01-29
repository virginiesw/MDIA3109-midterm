import React from 'react';
import styled from 'styled-components';

import AddItem from '../../comps/AddItem';
import Indicator from '../../comps/indicator'; 
import TreatIndicator from '../../comps/TreatIndicator';
import Profile from '../../comps/Profile';
import DateComp from '../../comps/DateComp';
import FilterComp from '../../comps/FilterComp';
import EditProfile from '../../comps/EditProfile';


const Container = styled.div`
background-color: #CCD9DF;
width: 367px;
height: 594px;
border-radius: 12px;
display: flex;
flex-direction: column;
align-items: center;
position: relative;
font-family: 'Roboto', sans-serif;

.filterComp {
    position: absolute;
    right: 0;
}

.title {
    font-size: 30px;
    margin-top: 10px;
    font-weight: bold;
}

.dateComp {
    margin-top: 15px;
}

.addComp {
 margin-left: 31px;
 bottom: 10px;
 position: absolute;
 font-weight: bold;
}
`;


const MainPage = () => {
    return <Container>
        <div className="title">Feeding Schedule</div>
        <div className="dateComp"><DateComp /></div>
        <div className="filterComp"><FilterComp fsizeT="20px" /></div>
        <div className="addComp"><AddItem /></div>
    </Container>
}

export default MainPage;
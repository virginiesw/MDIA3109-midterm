import MainPage from '../main';
import styled from 'styled-components';
import React from 'react';
import Profile from '../../comps/Profile';

const Container = styled.div`
display: flex;
flex-direction: column;
width: 414px;
height: 896px;
align-items: center;
font-family: 'Roboto', sans-serif;
background-color: #004476;

.mainCont {
}
`;

const HomePage = () => {
    return <Container>
         <Profile />
         <div className="mainCont">
            <MainPage />
         </div>
    </Container>
}

export default HomePage;
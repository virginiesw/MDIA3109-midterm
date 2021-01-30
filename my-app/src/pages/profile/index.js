import React from 'react';
import styled from 'styled-components';
import EditProfile from '../../comps/EditProfile';

const Container = styled.div`
width: 414px;
height: 896px;
border: 1px solid #DAD;
`;

const ProfileEditPage = () =>{
    return <Container>
        <EditProfile />
    </Container>
}

export default ProfileEditPage;
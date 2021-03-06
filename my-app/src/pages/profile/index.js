import React, {useState, useEffect}from 'react';
import styled from 'styled-components';
import EditProfile from '../../comps/EditProfile';
import Indicator from '../../comps/indicator';
import axios from 'axios';
const fakedb = require("../../profileData.json");

const Container = styled.div`
width: 414px;
height: 896px;
`;



const ProfileEditPage = ({pageHide}) =>{

    const HandleInsert = async(name, weight, year, month, avatar) => {
        
        
        console.log(avatar, name, year, month, weight)


        //this pushes the current data to the database. 
        //This will be modified with a patch request to update data in our endpoint once the database is set up
        //for now, use fake database as example, doesn't really work, but it sets the layout
        var resp = await axios.patch(`https://murphy-profile-db.herokuapp.com/api/profile/1`, {
            name:name,
            weight:weight,
            year:year,
            month:month,
        })
    }

    return <Container>

        <EditProfile homeClick={pageHide} DoneClick={pageHide} submitClick={HandleInsert}/>

    </Container>
}

ProfileEditPage.defaultProps = {
    pageHide:()=>{},
}

export default ProfileEditPage;
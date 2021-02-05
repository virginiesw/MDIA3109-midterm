import React from 'react';
import styled from 'styled-components';
import EditProfile from '../../comps/EditProfile';
import Indicator from '../../comps/indicator';
const fakedb = require("../../profileData.json");

const Container = styled.div`
width: 414px;
height: 896px;
border: 1px solid #DAD;
`;



const ProfileEditPage = ({pageHide}) =>{


    const HandleInsert = async(name, weight, year, month, avatar) => {
        console.log(avatar, name, year, month, weight)


        //this pushes the current data to the database. 
        //This will be modified with a post request to our endpoint once the database is set up
        //for now, use fake database as example, doesn't really work, but it sets the layout
        var resp = fakedb.push({id:1, avatar: avatar, name: name, weight: weight, year:year, month: month})
        var resptest = fakedb;
        console.log(resp)
        console.log("data", resptest);
        
    }

    return <Container>
        <EditProfile homeClick={pageHide} DoneClick={pageHide} submitClick={HandleInsert}/>
    </Container>
}

ProfileEditPage.defaultProps = {
    pageHide:()=>{},
}

export default ProfileEditPage;
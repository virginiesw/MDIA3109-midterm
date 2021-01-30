import React from 'react';
import styled from 'styled-components';
import EditProfile from '../../comps/EditProfile';

const Container = styled.div`
width: 414px;
height: 896px;
border: 1px solid #DAD;
`;

const fakedb = [
    {
        id:1,
        name:"Murphy",
        weight:"95 lbs",
        year:"3",
        month:"7",
        avatar:"../../img/murphy.png",
    }
]

const ProfileEditPage = () =>{


    const HandleInsert = (name, weight, year, month, avatar) => {
        console.log(avatar, name, year, month, weight)


        //this pushes the current data to the database. 
        //This will be modified with a post request to our endpoint once the database is set up
        //for now, use fake database as example, doesn't really work, but it sets the layout
        var resp = fakedb.push({avatar: avatar, name: name, weight: weight, year:year, month: month})
        console.log(resp);
    }


 

    return <Container>
        <EditProfile DoneClick={HandleInsert} />
    </Container>
}

export default ProfileEditPage;
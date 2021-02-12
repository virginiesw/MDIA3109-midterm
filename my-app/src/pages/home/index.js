import MainPage from '../main';
import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import Profile from '../../comps/Profile';
import ProfileEditPage from '../profile';
import ProfilePicChanger from '../../comps/ProfilePicChanger';
import axios from 'axios';

const Container = styled.div`
display: flex;
flex-direction: column;
width: 414px;
height: 896px;
align-items: center;
font-family: 'Roboto', sans-serif;
background-color: #004476;

.mainCont {
    margin-top: -30px;
    margin-left: 24px;
}

.open {
    display: block;
}

.open.open {
    display: none;
}

.close {
    display: none;
}

.close.open {
    display: block;
}

`;

const fakedb = require('../../profileData.json')

const HomePage = () => {

    const [profile, setProfile] = useState([]);

    const [open, setOpen] = useState(true);
    const [close, setClose] = useState(false);


    //this gets the current data within the database. 
    //This will be modified with a get request to our endpoint once the database is set up
    //for now, use fake database
    const GetProfile = async () => {
        var resp = await axios.get("https://murphy-profile-db.herokuapp.com/api/profile");
        setProfile(resp.data.Profiles);
    }

    useEffect(()=>{
        GetProfile();
    }, []);


    return <Container>
        <div className={close ? "open" : null}>
              {profile.map(o=><Profile   clickHome={() => {
                  setOpen(!open);
                  setClose(!close)
              }}  
             imgurl="https://i.pinimg.com/564x/54/82/bd/5482bdf0170c7016387b43eccac50f82.jpg" name={o.name} weight={o.weight} year={o.year} month={o.month}>{o.avatar} - {o.name} - {o.weight} - {o.year} - {o.month} 
         </Profile>)} 
            <div className="mainCont">
                    <MainPage />
            </div>
        </div>  
        <div className={open ? "open" : null}>
               <ProfileEditPage pageHide={() => {
                   setOpen(!open);
                   setClose(!close);
                   GetProfile();
              }}
             /> 
        </div>
    </Container>
}

HomePage.defaultProps = {
    
}

export default HomePage;
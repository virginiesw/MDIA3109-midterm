import MainPage from '../main';
import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import Profile from '../../comps/Profile';
import ProfileEditPage from '../profile';

const Container = styled.div`
display: flex;
flex-direction: column;
width: 414px;
height: 896px;
align-items: center;
font-family: 'Roboto', sans-serif;
background-color: #004476;

.mainCont {
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

const fakedb = [
    {
        id:1,
        name:"Murphy",
        weight:"95",
        year:"3",
        month:"7",
        avatar:"../../img/murphy.png",
    }
]

const HomePage = () => {

    const [profile, setProfile] = useState([]);

    const [open, setOpen] = useState(true);
    const [close, setClose] = useState(false);


    //this gets the current data within the database. 
    //This will be modified with a get request to our endpoint once the database is set up
    //for now, use fake database
    const GetProfile = async () => {
        var resp = fakedb;
        setProfile(resp);
        console.log(resp);
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
     

             imgurl={o.avatar} name={o.name} weight={o.weight} year={o.year} month={o.month}>{o.avatar} - {o.name} - {o.weight} - {o.year} - {o.month} 
         </Profile>)} 
            <div className="mainCont">
                    <MainPage />
            </div>
        </div>  
        <div className={open ? "open" : null}>
               <ProfileEditPage pageHide={() => {
                   setOpen(!open);
                   setClose(!close);
              }}
             /> 
        </div>
    </Container>
}

HomePage.defaultProps = {
    
}

export default HomePage;
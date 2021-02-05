// import './App.scss';
// import FilterComp from './comps/FilterComp';
import ProfilePicChanger from './comps/ProfilePicChanger';
import 'antd/dist/antd.css';
import {Avatar} from 'antd';
// import './App.css';
import React,{Component} from 'react'
import Pic1 from "./img/dogpic1.jpg"
import Pic2 from "./img/dogpic2.jpg"

class App extends Component {
  constructor(props){
    super(props);
    this.state={
     profileImage: ''
    }
  }

  handleImageChange = (profileImage) => {
   this.setState({
     profileImage
   })
  }

  render(){
  return (
    <div className="App">
       <h3> Murphy is a super star</h3>
         <Avatar size={64} icon="user" src={this.state.profileImage}/>
         <ProfilePicChanger handleImageChange={this.handleImageChange} pic1={Pic1} pic2={Pic2}/>
  

    </div>
  );
  }
}
// function App() {
//   return (
//     <div className="App">
//         Murphy is a super star
//         <FilterComp />
//     </div>
//   );


export default App;

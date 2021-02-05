import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Avatar } from 'antd';
import { Modal, Button } from 'antd';
// import './App.scss';



class ProfilePicChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      imagesArray: [props.pic1, props.pic2]
    }
  }


  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };


  render() {
    const imageMapper = this.state.imagesArray.map((image, index)=>{
      return (
      
             <img src={image}
            onClick={() => this.props.handleImageChange(image)}
            height="48px"
          />
      )
    })


  return (


  <div className="ProfilePicChanger">
    <Button type="primasry" onClick={this.showModal}>
      Open Modal
      </Button>
    <Modal
      title="profilepicchanger"
      visible={this.state.visible}
      onOk={this.handleOk}
      OnCancel={this.handleCancel}
    >
      <p>Some contents</p>
      <p>Some contents</p>
      <p>Some contents</p>
  {imageMapper}
    </Modal> {""}
  </div>

);
  }
  
  }
  

export default ProfilePicChanger;

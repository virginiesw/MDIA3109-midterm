import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Avatar } from 'antd';
import { Button } from 'antd';
import close from '../../img/close.png';
import './ppchanger.css'
// import './App.scss';
import image from '../../img/add.png';
import styled from 'styled-components';
import edit from '../../img/editblack.png';

const Image = styled.img``;
const Modal = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
height: 400px;
background-color: #DAD;
position: absolute;
top: 100px;
left: -150px;

`;

const CloseIcon = styled.img`
position: absolute;
top: 0;
right: 0;
margin: 10px;
`;


//   constructor(props) {
//     super(props);
//     this.state = {
//       visible: false,
//       imagesArray: [props.pic1, props.pic2]
//     }
//     this.state={
//       number: 0,
//      }
//   }

//   handleImageChange = (profileImage) => {
//    this.setState({
//      profileImage
//    })
//   }

//   showModal = () => {
//     this.setState({
//       visible: true,
//     });
//   };

//   handleOk = e => {
//     console.log(e);
//     this.setState({
//       visible: false,
//     });
//   };

//   handleCancel = e => {
//     console.log(e);
//     this.setState({
//       visible: false,
//     });
//   };


//   render() {
//     // const imageMapper = this.state.imagesArray.map((image, index)=>{
//     //   return ( <img src={image}
//     //         onClick={() => this.props.handleImageChange(image)}
//     //         height="48px"
//     //       />
//     //   )
//     // })
//     return <div className="ProfilePicChanger">
//        <Button className="button" type="primasry" onClick={this.showModal}>
//         <Image className="imgicon" src={edit}></Image>
//       </Button>
//       <div className="innerCont">
//         <Avatar size={100} icon="user" src={this.state.profileImage} />

//       <Modal
//         title="profilepicchanger"
//         visible={this.state.visible}
//         onOk={this.handleOk}
//         OnCancel={this.handleCancel}
//       >
//         <p>Some contents</p>
//         <p>Some contents</p>
//         <p>Some contents</p>
//         <ImageMapper />
//       </Modal> {""}
//       </div>

//     </div>


//   }
// }

// // const ImageMapper = () => {
// //   return (<div number=>

// //   </div>
// //   )
// // }

// return (
//   <ImageMaper number={this.state.number}/>
// )

class ProfilePicChanger extends Component {
  state = { showing: false };

  state = {
    images: [
      {
        id: 1,
        img: "https://images.pexels.com/photos/753873/pexels-photo-753873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=200"
      },
      {
        id: 2,
        img: "https://images.pexels.com/photos/679277/pexels-photo-679277.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=200"
      },
      {
        id: 3,
        img: "https://images.pexels.com/photos/5486/bird-s-eye-view-cars-crossing-crossroad.jpg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=200"
      },
      {
        id: 4,
        img: "https://images.pexels.com/photos/914128/pexels-photo-914128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=200"
      }
    ],
    selectedImageIndex: 0
  };

  onClickHandler = (e) => {
    this.setState({
      selectedImageIndex: e.target.dataset.index
    })
  }


  showModal = () => {
    this.setState({
      visible: true,
    });
  };


  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { showing } = this.state;
    const sideImages = this.state.images.map((image, index) => (
      <img key={image.id} src={image.img} alt="Thumbnail Image" data-index={index} />
    ));
    return (
      <div className="ProfilePicChanger">
        <Button className="button" type="primasry" onClick={() => this.setState({ showing: !showing })}>
          <Image className="imgicon" src={edit}></Image>
        </Button>
        <div className="innerCont">
          <div className="imageSlider">
            <div onClick={this.onClickHandler} className="sideImages">
              {showing
                ?
                <Modal onClick={() => this.setState({ showing: !showing })}>
                  {sideImages}
                </Modal>
                : null
              }
            </div>
            <div className="display">
              <Avatar size={150} icon="user" src={this.state.images[this.state.selectedImageIndex]["img"]} alt="Target Image" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}





export default ProfilePicChanger;

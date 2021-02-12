import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Avatar } from 'antd';
// import { Button } from 'antd';
// import close from '../../img/close.png';
import './ppchanger.css'
// import './App.scss';
// import image from '../../img/add.png';
import styled from 'styled-components';
import edit from '../../img/edit.png';
// import img from '../../img/dogpic1.jpg';
// import img from '../../img/dogpic1.jpg';
// import { SELECTION_NONE } from 'antd/lib/table/hooks/useSelection';

const Image = styled.img`
`;
const Modal = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
height: 200px;
background-color: #DAD;
position: absolute;
top: 150px;
left: -90px;
`;

// const CloseIcon = styled.img`
// position: absolute;
// top: 0;
// right: 0;
// margin: 10px;
// `;

// const button = styled.div`
// background-color:#DAD
// `;


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
        img: "https://i.pinimg.com/564x/39/05/01/390501f89865f4d4faf94b15e5058e04.jpg",
      },
      {
        id: 2,
        img: "https://i.pinimg.com/564x/54/82/bd/5482bdf0170c7016387b43eccac50f82.jpg"

      },
      {
        id: 3,
        img: " https://www.outsourcecreativeworks.com/wp-content/uploads/2019/05/PET-ILLUSTRATION_01.jpg"
      },
      {
        id: 4,
        img: "https://i.pinimg.com/564x/07/94/2a/07942ae5b2f9e3fca43581fd02204e04.jpg"
      },
      {
        id: 5,
        img: "https://i.pinimg.com/564x/00/fd/20/00fd2097ab375a071704abc4305b4e96.jpg"
      },
      {
        id: 6,
        img: "https://i.pinimg.com/564x/45/fb/0b/45fb0b7038ab2c18c86e87956e3b6b78.jpg"
      },
      {
        id: 7,
        img: "https://i.pinimg.com/564x/c9/94/2c/c9942c37e2d7275e87a87306c40b74c8.jpg"
      },
      {
        id: 8,
        img: "https://i.pinimg.com/564x/a6/04/e7/a604e7813f03bdc6b6d0f05c67fc7a77.jpg"
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
      <img key={image.id} src={image.img} alt="Thumbnail Image" data-index={index} width="100px" height="100px" />
    ));
    return (
      <div className="ProfilePicChanger">
        {/* <Button className="button"
         onClick={() => this.setState({ showing: !showing })}> */}
        <Image className="imgicon" src={edit}
          className="button" onClick={() => this.setState({ showing: !showing })}
        ></Image>
        {/* </Button> */}
        <div className="innerCont">
          <div className="imageSlider">
            <div onClick={this.onClickHandler} className="sideImages"  >
              {showing
                ?
                <Modal

                  onClick={() => this.setState({ showing: !showing })}>
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

import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Modal from '../Modal';

const Container = styled.div`
position: relative;
display: flex;
.open {
    display: block;
}

.open.open {
    display: none;
}
`;

const Button = styled.div`
position: absolute;
right: 10px;
top: 10px;
`;

const FilterButton = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
`;


class FilterComp extends React.Component {

    state = { showing: false };

 

    render() {
        const {filterbyLeast, filterbyMost} = this.props;
        const {showing} = this.state;
        return ( <Container>
                    <Button onClick={() => this.setState({ showing: !showing})}>
                        <FilterButton src="/filter.svg" />
                    </Button>         
                { showing 
                    ?    
                          <Modal most={() => this.setState({ showing: !showing})}  clickLeast={() => this.setState({ showing: !showing})} clickMost={filterbyMost} least={filterbyLeast} handleClose={() => this.setState({ showing: !showing})}/>
                    : null
                }      
        </Container>  
        )
   
    }    
}

FilterComp.defaultProps = {
    filterbyMost:()=>{},
    filterbyLeast:()=>{}
}

// const FilterComp = ({handleLeast, handleMost}) => {

//     const [open, setOpen] = useState(true);

//     return <Container>
//             <Button>
//                 <FilterButton src="/filter.svg" />
//             </Button> 
//             <div className={open ? "open" : null}>
//                  <Modal most={handleMost} least={handleLeast} handleClose={setOpen(!open)}/> 
//             </div>        
//     </Container>
// }


// FilterComp.defaultProps = {
//     handleMost:()=>{},
//     handleLeast:()=>{}
// }


export default FilterComp;



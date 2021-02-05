import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const meals = require("../../mealData.json");

const Container = styled.div`

display:${props => props.checked ? "hidden" : "inline-flex"};
opacity:${props => props.checked ? 1 : 0};
display:flex;
flex-direction:column;
margin-top: 8px;
max-height:	70px;
max-width: 311px;
border: 1px solid black;
border-radius: 5px;
background-color:#FFF;
align-items: center;
justify-content: center;
align-slef:center;
font-size:24px;
margin-bottom: 12px;

.topcont{
    display:flex;
    margin-bottom:-15px;
        .text{
            color:${props => props.expanded ? "#FF9E44" : "#FFFFF"};
        }
`;

const TopCont = styled.div`
display:flex;
margin-top: 15px;
    img{
        // position: absolute;
            top: 20px;
            left: 20px;
    }
`;
const SliderCont = styled.div`

align-content:center;
align-items:flex-end;
display: flex;
top:0;
flex:1;
align-items: center;
justify-content: center;
div{
 margin:1%;
    align-items: center;
    justify-content: center;
    align-slef:center;
}
img{
    width:100%;
    height:100%;
}
`;

const Slider = styled.div`

height: 13px;
width: 48px;
border: 1px solid #FF9E44;
box-sizing: border-box;
border-radius: 5px;
display:flex;
background-color:${props => props.expanded ? "#FF9E44" : "#FFFFF"};
background-color:${props => props.expanded1 ? "#FF9E44" : "#FFFFF"};
background-color:${props => props.expanded2 ? "#FF9E44" : "#FFFFF"};
background-color:${props => props.expanded3 ? "#FF9E44" : "#FFFFF"};
align-item:center;
align-self:center;
cursor: pointer;
`;



const Indicator = ({ text, expand }) => {
    const [checked, setChecked] = useState(true);
    // const [focused,setFocused] = useState(true);
    const [completion, setCompletion] = useState(0)
    const [expanded, setExpanded] = useState(false);
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);

    const clearState = () => {
        setExpanded(false);
        setExpanded1(false);
        setExpanded2(false);
        setExpanded3(false)
    }

    useEffect(() => {
        setExpanded(expand)
    }, [expand])
    useEffect(() => {
        setExpanded(expanded1)
    }, [expanded1])
    useEffect(() => {
        setExpanded(expanded2)
        setExpanded1(expanded2)
    }, [expanded2])
    useEffect(() => {
        setExpanded(expanded3)
        setExpanded1(expanded3)
        setExpanded2(expanded3)
    }, [expanded3])

    return <Container checked={checked}  >
        <TopCont >
            <div className="topcont" >

                <div className="close" onClick={() => {
                    setChecked(false);
                }} ><img src="img/close.png" /></div>

                <div className="text" expanded={expanded} onClick={() => {
                    setExpanded(!expanded);
                }}> {text}</div>
            </div>
        </TopCont>

        <SliderCont>

            <div >
                <img src="img/empty.png" />
            </div>
            <div>
                <Slider expanded={expanded} onClick={() => {
                    clearState();
                    setExpanded(!expanded);
                    setCompletion(1);
                }} />
            </div>
            <div>
                <Slider expanded1={expanded1} onClick={() => {
                    clearState();
                    setExpanded1(!expanded1);
                    setCompletion(2);
                }} />
            </div>
            <div>
                <Slider expanded2={expanded2} onClick={() => {
                    clearState();
                    setExpanded2(!expanded2);
                    setCompletion(3);
                }} />
            </div>
            <div>
                <Slider expanded3={expanded3} onClick={() => {
                    clearState();
                    setExpanded3(!expanded3);
                    setCompletion(4);
                }} />
            </div>

            <div><img src="img/completed.png" /></div>
        </SliderCont>


    </Container>

}


Indicator.defaultProps = {
    text: "Dinner",
    expanded: true,
    expanded1: true,
    expanded2: true,
    expanded3: true,
    completion: 0
}

export default Indicator;


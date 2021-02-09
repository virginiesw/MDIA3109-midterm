import { Progress } from 'antd';
import React from 'react';
import styled from 'styled-components';
import ProfilePicChanger from '../ProfilePicChanger';
import Filler from '../Filler';


const ProgressBar = ({percentage}) => {
    return (
        <div className="progress-bar">
            <Filler percentage={percentage} />
        </div>
    )
}

ProgressBar.defaultProps = {
    percentage: 0,
}

export default ProgressBar;


import React, {Component} from 'react';
import styled from 'styled-components';


const Filler = ({percentage}) => {
    return <div className="filler" style={{ width: `${percentage}%` }}>

    </div>
}

Filler.defaultProps = {
    percentage: 0,
}

export default Filler;
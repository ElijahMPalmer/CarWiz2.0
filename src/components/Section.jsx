import React from 'react'
import styled from 'styled-components'


function Section({ backgroundImg, title, desc, vinEntry }) {
  return (
    <Wrap bgImage={backgroundImg}>
    <ItemText>
        <h1>{ title }</h1>
        <p>{ desc }</p>
    </ItemText>
    { vinEntry && 
        <div class="input-group mb-3" id="vin">
            <span class="input-group-text" id="basic-addon1">VIN:</span>
            <input class="form-control" type="text" id='entry' />
        </div>
    }
    
  
</Wrap>
    
  )
}

export default Section

const Wrap = styled.div`
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url('/images/${props.bgImage}')`}
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`
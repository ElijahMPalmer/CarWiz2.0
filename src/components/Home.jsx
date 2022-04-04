import React from 'react'
import styled from 'styled-components'
import Section from "./Section";

function Home() {
  return (
    <Container>
       <Section 
        backgroundImg="overtopBeach.jpg"
        title="VIN Search"
        desc="By entering your VIN we can direct you to Manufacturer specific Owners Manuals and Maintenance forums! Our goal is to make your troubleshooting, research and maintenance tasks as hassle free as possible!"
        vinEntry='true'
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`;
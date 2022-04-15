import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";

function Section({ backgroundImg, title, desc, vinEntry }) {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        {vinEntry && (
          <div id="vin">
            
              <TextField
                id="outlined-basic"
                label="VIN"
                variant="outlined"
                size='small'
                
                sx={{
                  backgroundColor: "white",
                  opacity: 0.8,
                  borderRadius: '8px'
                }}
              />
              <Button
                startIcon={<SearchIcon />}
                sx={{
                  backgroundColor: "gray",
                  opacity: 0.8,
                  padding: "6px 8px",
                  marginTop: '8px' 
                }}
              >
              Search    
              </Button>
          </div>
        )}
        <DescBox>
          <p class="desc">{desc}</p>
        </DescBox>
      </ItemText>
    </Wrap>
  );
}

export default Section;

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
  background-image: ${(props) => `linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url('/images/${props.bgImage}')`};

  h1 {
    font-weight: 600;
    letter-spacing: 1.5px;
  }
  p {
    width: 40vw;
    font-weight: 300;
    font-size: 1.5em;
  }
`;

const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 75%;
  padding: 0 20px;
  color: white !important;
`;

const DescBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0 40%;
`;

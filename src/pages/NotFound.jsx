import React from 'react'
import { Error as ErrorIcon } from "@mui/icons-material";
import { Container, Link, Stack, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Container maxWidth="lg" sx={{height: "100vh"}}>
      <Stack alignItems={"center"} spacing={"2rem"} justifyContent={"center"} height={"100%"}>
        <ErrorIcon sx={{ fontSize:'10rem'}}/>  
        <Typography variant='h1'>404</Typography>
        <Typography variant='h3'>Not Found</Typography>
        <a href="/">Go back to home!</a>
      </Stack> 
    </Container>
  )
}

export default NotFound

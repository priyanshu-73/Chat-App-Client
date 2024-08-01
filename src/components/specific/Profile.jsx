import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import {Face as FaceIcon, AlternateEmail as UsernameIcon, CalendarMonth as CalendarIcon} from '@mui/icons-material'
import moment from 'moment'
import { transformImage } from '../../lib/features'

const Profile = ({user}) => {
  return (
    <Stack spacing="2rem" alignItems={"center"}>
        <Avatar src= {transformImage(user?.avatar?.url)} sx={{width: 200, height: 200, objectFit:"contain", marginBottom: "1rem", border: "5px solid white"}} />
      <Profilecard heading={"Bio"} text={user?.bio}/>
      <Profilecard heading={"Username"} text={user?.username} Icon={<UsernameIcon />}/>
      <Profilecard heading={"Name"} text={user?.name} Icon={<FaceIcon />}/>
      <Profilecard heading={"Joined"} text={moment(user?.createdAt).fromNow()} Icon={<CalendarIcon />}/>
    </Stack>
  )
}

const Profilecard = ({text, Icon, heading}) => {
    return (
        <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} color={"white"} textAlign={"center"}>
            {
                Icon && Icon
            }
            <Stack>
                <Typography variant="body1">{text}</Typography>
                <Typography color={"gray"} variant="caption">{heading}</Typography>
            </Stack>
        </Stack>
    )
}

export default Profile

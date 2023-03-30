import React from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import "./BotAvatar.css"

const BotAvatar = () =>{
    return(
        <>
        <div className = "bot-avatar">
            <ChatIcon color = "primary" />
        </div>
        </>
    )
}
export default BotAvatar;

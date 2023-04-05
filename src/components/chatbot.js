import React, {useState} from 'react';
import { Chatbot } from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import Button from '@mui/material/Button';
import ChatIcon from '@mui/icons-material/Chat';
import config from '../config.js';
import MessageParser from '../MessageParser.js';
import ActionProvider from '../ActionProvider.js';
import './chatbot.css';


const ChatbotSBMP = () => {
  const [showComponent, setShowComponent] = useState(false);
  const handleClick = () => {
    setShowComponent(!showComponent);  
  }
  return (
    <div className = "App">
         
          {showComponent && <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          />  }
           <Button 
          size = "large"  
          variant = "contained" 
          sx={showComponent ? {marginLeft:'210px'}:{}}
          onClick={handleClick} 
          startIcon={<ChatIcon />}>
          Chat
          </Button>

    </div>
  );
}
export default ChatbotSBMP;

import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from './components/BotAvatar';
import Options from './components/options';
import TimeTable from './components/timetable';
import Department from './buttoncomp/Department';
import Unaided from './buttoncomp/Unaided';
import Aided from './buttoncomp/Aided';

const config = {
  initialMessages: [
    createChatBotMessage(`Welcome to SBMP Help Assistant`,{
      widget: "options",
    }),
  ],
  botName: "Help Assistant",
  customComponents: {
      botAvatar: (props) => <BotAvatar {...props} />
  },
  
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,

    },
    {
      widgetName: "timetable",
      widgetFunc: (props) => <TimeTable {...props}/>
    },
    {
      widgetName: "Depshow",
      widgetFunc: (props) => <Department {...props}/>
    },
    {
      widgetName: "unaid",
      widgetFunc: (props) => <Unaided {...props}/>
    },
    {
      widgetName: "aid",
      widgetFunc: (props) => <Aided {...props}/>
    }
  ],
};

export default config;
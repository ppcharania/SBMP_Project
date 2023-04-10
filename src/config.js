import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from './Components/BotAvatar';
import Options from './Components/options';
import TimeTable from './Components/timetable';
import Department from './buttoncomp/Department';
import FAQS from './buttoncomp/FAQS';
import Academics from './buttoncomp/Academics';
import Unaided from './buttoncomp/Unaided';
import Aided from './buttoncomp/Aided';
import { Computer } from './buttoncomp/links';
import { IT } from './buttoncomp/links';
import { Civil } from './buttoncomp/links';
import { Mechanical } from './buttoncomp/links';
import { Electrical } from './buttoncomp/links';
import { Industrial } from './buttoncomp/links';
import { Plastic } from './buttoncomp/links';
import { Chemical } from './buttoncomp/links';
import { Digital } from './buttoncomp/links';
import { Extc } from './buttoncomp/links';
import { Aboutsbmp } from './buttoncomp/links';
import { Admission } from './buttoncomp/links';
import { AcadUnaided } from './buttoncomp/links';
import { AcadAided } from './buttoncomp/links';
import { Fees } from './buttoncomp/links';


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
      widgetName: "Acad",
      widgetFunc: (props) => <Academics {...props}/>
    },
    {
      widgetName: "AcadUnaid",
      widgetFunc: (props) => <AcadUnaided {...props}/>
    },
    {
      widgetName: "Acadaid",
      widgetFunc: (props) => <AcadAided {...props}/>
    },
    {
      widgetName: "Fees",
      widgetFunc: (props) => <Fees {...props}/>
    },
    {
      widgetName: "unaid",
      widgetFunc: (props) => <Unaided {...props}/>
    },
    {
      widgetName: "aid",
      widgetFunc: (props) => <Aided {...props}/>
    },
    {
      widgetName: "CSEredirect",
      widgetFunc: (props) => <Computer {...props}/>
    },
    {
      widgetName: "ITredirect",
      widgetFunc: (props) => <IT {...props}/>
    },
    { 
      widgetName: "Civilredirect",
      widgetFunc: (props) => <Civil {...props}/>
    },
    {
      widgetName: "Mechredirect",
      widgetFunc: (props) => <Mechanical {...props}/>
    },
    {
      widgetName: "Electredirect",
      widgetFunc: (props) => <Electrical {...props}/>
    },
    {
      widgetName: "Industredirect",
      widgetFunc: (props) => <Industrial {...props}/>
    },
    {
      widgetName: "Plasticredirect",
      widgetFunc: (props) => <Plastic {...props}/>
    },
    {
      widgetName: "Chemredirect",
      widgetFunc: (props) => <Chemical {...props}/>
    },
    {
      widgetName: "Digtredirect",
      widgetFunc: (props) => <Digital {...props}/>
    },
    {
      widgetName: "EXTCredirect",
      widgetFunc: (props) => <Extc {...props}/>
    },
    {
      widgetName: "Aboutsbmp",
      widgetFunc: (props) => <Aboutsbmp {...props}/>
    },
    {
      widgetName: "Admissions",
      widgetFunc: (props) => <Admission {...props}/>
    },
    {
      widgetName: "FAQ",
      widgetFunc: (props) => <FAQS {...props}/>
    },
  ],
};

export default config;
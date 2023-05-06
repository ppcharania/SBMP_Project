import React, {useState} from 'react';
import Button from '@mui/material/Button';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { Navigate } from 'react-router-dom';

const Voiceassistant = () => {
  const [showComponent, setShowComponent] = useState(false);
  const handleClick = () => {
    setShowComponent(!showComponent);  
  }
  
  const commands = [
    {
      command: "*",
      callback: redirectPage => setRedirectUrl(redirectPage),
    }
  ]

  const {transcript, listening, resetTranscript, browserSupportsSpeechRecognition} = useSpeechRecognition({commands});
  const [redirectUrl, setRedirectUrl] = useState("")
  const pages = ["home", "about us", "admissions", "acadamics", "departments", "events", "associations", "notices"]
  const urls = {
    home: "/",
    "about us": "/aboutus",
    admissions: "/admissions",
    acadamics: "/academics",
    departments: "/departments",
    events: "/events",
    associations: "/associations"
  }

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
    }

  let redirect = ""

  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      redirect = <Navigate to={urls[redirectUrl]} />
    } /*else {
      redirect = <p>Could not find page: {redirectUrl}</p>
    }*/
  }  
    
    
  return (
    <>
      
      <Button 
          size = "large"
          variant = "contained"
          sx = {{color: "white", borderColor: "#263238", backgroundColor: "#034954"}}  
          onClick={handleClick} 
          startIcon={<KeyboardVoiceIcon />}>
      </Button>
      {showComponent && <div>
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        <Button size = "large" variant = "outlined"  onClick={SpeechRecognition.startListening} sx = {{marginRight:'5px'}}>Start</Button>
        <Button size = "large" variant = "outlined"  onClick={resetTranscript}>Reset</Button>
        <p>{transcript}</p>
        {redirect}
      </div>}
        
          
    </>
  );
};
export default Voiceassistant;
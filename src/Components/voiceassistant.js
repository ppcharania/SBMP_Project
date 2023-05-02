import React, {useState} from 'react';
import Button from '@mui/material/Button';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';


const Voiceassistant = () => {
  const [showComponent, setShowComponent] = useState(false);
  const handleClick = () => {
    setShowComponent(!showComponent);  
  }
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
    } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
    }

  return (
    <>
     <Button 
          size = "large"
          variant = "outlined"
          sx = {{color: "#263238", borderColor: "#263238"}}  
          onClick={handleClick} 
          startIcon={<KeyboardVoiceIcon />}>
          </Button>
          {showComponent && <div>
          <p>Microphone: {listening ? 'on' : 'off'}</p>
          <Button size = "large" variant = "outlined"  onClick={SpeechRecognition.startListening({continuous: true})} sx = {{marginRight:'5px'}}>Start</Button>
          <Button size = "large" variant = "outlined"  onClick={SpeechRecognition.stopListening} sx = {{marginRight:'5px'}}>Stop</Button>
          <Button size = "large" variant = "outlined"  onClick={resetTranscript}>Reset</Button>
          <p>{transcript}</p>
          </div>}
    </>
  );
};
export default Voiceassistant;
import React from 'react';
import 'react-chatbot-kit/build/main.css';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Chatbot from './Components/chatbot.js';
import Landing from './Pages/Landing';
import AboutSVKM from './Pages/AboutUs/AboutSVKM'
import AboutSBMP from './Pages/AboutUs/AboutSBMP'
import Administration from './Pages/AboutUs/Administration';
import EoA from './Pages/AboutUs/EoA'
import Infrastructure from './Pages/AboutUs/Infrastructure'
import ManDisclosure from './Pages/AboutUs/ManDisclosure'
import DiplomaAided from './Pages/Academics/DiplomaAided'
import DiplomaUnaided from './Pages/Academics/DiplomaUnaided'
import FeeStructure from './Pages/Academics/FeeStructure'
import TimeTable from './Pages/Academics/TimeTable'
import ImplantTraining from './Pages/Academics/ImplantTraining'
import Admissions from './Pages/Admissions/AdmissionDetails'
import Aamc from './Pages/Alumini/Aamc'
import ActivityCalendar from './Pages/Alumini/ActivityCalendar';
import Booklet from './Pages/Alumini/Booklet';
import MultiTech from './Pages/Alumini/MultiTech';
import NewsLet from './Pages/Alumini/NewsLet';
import Registered from './Pages/Alumini/Registered';
import SubCom from './Pages/Alumini/SubCom';
import Success from './Pages/Alumini/Success';
import Associations from './Pages/AssociationsAndEvents/Associations'
import Events from './Pages/AssociationsAndEvents/Events'
import ApplyOnline from './Pages/Careers/ApplyOnline'
import Overview from './Pages/CDTP/Overview'
import CivilEngg from './Pages/Departments/CivilEngg'
import MechanicalEngg from './Pages/Departments/MechanicalEngg';
import ElectricalEngg from './Pages/Departments/ElectricalEngg';
import ChemicalEngg from './Pages/Departments/ChemicalEngg';
import ComputerEngg from './Pages/Departments/ComputerEngg';
import DigitalElec from './Pages/Departments/DexEngg';
import ElectronnicsTelecom from './Pages/Departments/ExtcEngg';
import IndustrialElec from './Pages/Departments/IndustrialEngg';
import InformationTech from './Pages/Departments/InfotechEngg';
import PlasticEngg from './Pages/Departments/PlasticEngg';
import AboutUs from './Pages/IncubationCentre/AboutUs'
import VissionMission from './Pages/IncubationCentre/VissionMission'
import Msisp from './Pages/IncubationCentre/Msisp';
import ContactUs from './Pages/IncubationCentre/ContactUs';
import HowToApply from './Pages/IncubationCentre/HowToApply';
import Nisp from './Pages/IncubationCentre/Nisp';
import Mentors from './Pages/IncubationCentre/Mentors';
import ManagingTeam from './Pages/IncubationCentre/ManagingTeam';
import StaffNotices from './Pages/Notices/StaffNotices'
import StudNotices from './Pages/Notices/StudNotices'
import Examination from './Pages/Students/Examination'
import StudSupport from './Pages/Students/StudSupport'
import CumulativeAttendance from './Pages/Notices/CumulativeAtt';
import Feedback from './Pages/Students/Feedback'
import PlacementCell from './Pages/Students/PlacementCell'
import Committee from './Pages/Students/Committee'
import Association from './Pages/Students/Association'
import Carousel from './Components/Carousel';
import Voiceassistant from './Components/voiceassistant';


function App() {
  const PageHeader = Header()
  const PageCarousel = Carousel()

  return (
    <div className="App">
      {
        PageHeader && (
          <div className='App-header'>
            <Header/>
          </div>
        )
      }
      {PageCarousel}
      <Navbar/> 
      <div className='Voice' style={{
        position: 'fixed',
        right: '25px',
        bottom: '100px',
        zIndex: '10',
       
      }}>
        <Voiceassistant/>  
      </div>
      <div className='Pages'>
      <Routes>
        <Route path="/" element={<Landing/>}/>

        <Route path="/aboutus" element={<AboutSVKM/>}/>
        <Route path="/aboutsvkm" element={<AboutSVKM/>}/>
        <Route path="/aboutsbmp" element={<AboutSBMP/>}/>
        <Route path="/administration" element={<Administration/>}/>
        <Route path="/eoa" element={<EoA/>}/>
        <Route path="/infrastructure" element={<Infrastructure/>}/>
        <Route path="/mandisclosure" element={<ManDisclosure/>}/>

        <Route path="/admissions" element={<Admissions/>}/>

        <Route path="/academics" element={<DiplomaAided/>}/>
        <Route path="/diplomaaided" element={<DiplomaAided/>}/>
        <Route path="/diplomaunaided" element={<DiplomaUnaided/>}/>
        <Route path="/timetable" element={<TimeTable/>}/>
        <Route path="/feestructure" element={<FeeStructure/>}/>
        <Route path="/implanttraining" element={<ImplantTraining/>}/>

        <Route path="/departments" element={<CivilEngg/>}/>
        <Route path="/civilengg" element={<CivilEngg/>}/>
        <Route path="/mechanicalengg" element={<MechanicalEngg/>}/>
        <Route path="/electricalengg" element={<ElectricalEngg/>}/>
        <Route path="/industrialelec" element={<IndustrialElec/>}/>
        <Route path="/plasticengg" element={<PlasticEngg/>}/>
        <Route path="/chemicalengg" element={<ChemicalEngg/>}/>
        <Route path="/digitalelec" element={<DigitalElec/>}/>
        <Route path="/computerengg" element={<ComputerEngg/>}/>
        <Route path="/informationtech" element={<InformationTech/>}/>
        <Route path="/electronicstelecom" element={<ElectronnicsTelecom/>}/>

        <Route path="/students" element={<Examination/>}/>
        <Route path="/examination" element={<Examination/>}/>
        <Route path="/studsupport" element={<StudSupport/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="/placementcell" element={<PlacementCell/>}/>
        <Route path="/committee" element={<Committee/>}/>
        <Route path="/association" element={<Association/>}/>

        <Route path="/notices" element={<StaffNotices/>}/>
        <Route path="/staffnotices" element={<StaffNotices/>}/>
        <Route path="/studnotices" element={<StudNotices/>}/>
        <Route path="/cumulativeatt" element={<CumulativeAttendance/>}/>

        <Route path="/cdtp" element={<Overview/>}/>
        <Route path="/overview" element={<Overview/>}/>

        <Route path="/careers" element={<ApplyOnline/>}/>
        <Route path="/applyonline" element={<ApplyOnline/>}/>

        <Route path="/associationsandevents" element={<Associations/>}/>
        <Route path="/associations" element={<Associations/>}/>
        <Route path="/events" element={<Events/>}/>

        <Route path="/alumini" element={<Aamc/>}/>
        <Route path="/aamc" element={<Aamc/>}/>
        <Route path="/activitycalendar" element={<ActivityCalendar/>}/>
        <Route path="/booklet" element={<Booklet/>}/>
        <Route path="/multitech" element={<MultiTech/>}/>
        <Route path="/newslet" element={<NewsLet/>}/>
        <Route path="/registered" element={<Registered/>}/>
        <Route path="/subcom" element={<SubCom/>}/>
        <Route path="/success" element={<Success/>}/>


        <Route path="/incubationcentre" element={<AboutUs/>}/>
        <Route path="/abtus" element={<AboutUs/>}/>
        <Route path="/vissionmission" element={<VissionMission/>}/>
        <Route path="/managingteam" element={<ManagingTeam/>}/>    
        <Route path="/mentors" element={<Mentors/>}/>
        <Route path="/nisp" element={<Nisp/>}/>
        <Route path="/msisp" element={<Msisp/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/howtoapply" element={<HowToApply/>}/>

        
        
      </Routes>
      </div>

      {/* Chatbot */}

      <div style={{
        position: 'fixed',
        right: '25px',
        bottom: '50px',
        zIndex: '3',
       
      }}
      >
        <Chatbot/>
      </div>
      
      {/* Footer */}

      <Footer/>
    </div>
  );
}

export default App;
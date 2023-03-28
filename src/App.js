import React from 'react'
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Landing from './Pages/Landing';
import AboutSVKM from './Pages/AboutUs/AboutSVKM'
import AboutSBMP from './Pages/AboutUs/AboutSBMP'
import DiplomaAided from './Pages/Academics/DiplomaAided'
import DiplomaUnaided from './Pages/Academics/DiplomaUnaided'
import Admissions from './Pages/Admissions/AdmissionDetails'
import Aamc from './Pages/Alumini/Aamc'
import ActivityCalendar from './Pages/Alumini/ActivityCalendar';
import Associations from './Pages/AssociationsAndEvents/Associations'
import Events from './Pages/AssociationsAndEvents/Events'
import ApplyOnline from './Pages/Careers/ApplyOnline'
import Overview from './Pages/CDTP/Overview'
import CivilEngg from './Pages/Departments/CivilEngg'
import MechanicalEngg from './Pages/Departments/MechanicalEngg';
import AboutUs from './Pages/IncubationCentre/AboutUs'
import VissionMission from './Pages/IncubationCentre/VissionMission'
import Miscellaneous from './Pages/Miscellaneous/Miscellaneous'
import StaffNotices from './Pages/Notices/StaffNotices'
import StudNotices from './Pages/Notices/StudNotices'
import Examination from './Pages/Students/Examination'
import StudSupport from './Pages/Students/StudSupport'


function App() {
  return (
    <div className="App">
      <div className='App-header'><Header/></div>
      <Navbar/>   
      
      <Routes>
        <Route path="/" element={<Landing/>}/>

        <Route path="/aboutus" element={<AboutSVKM/>}/>
        <Route path="/aboutsvkm" element={<AboutSVKM/>}/>
        <Route path="/aboutsbmp" element={<AboutSBMP/>}/>

        <Route path="/admissions" element={<Admissions/>}/>

        <Route path="/academics" element={<DiplomaAided/>}/>
        <Route path="/diplomaaided" element={<DiplomaAided/>}/>
        <Route path="/diplomaunaided" element={<DiplomaUnaided/>}/>

        <Route path="/departments" element={<CivilEngg/>}/>
        <Route path="/civilengg" element={<CivilEngg/>}/>
        <Route path="/mechanicalengg" element={<MechanicalEngg/>}/>

        <Route path="/students" element={<Examination/>}/>
        <Route path="/examination" element={<Examination/>}/>
        <Route path="/studsupport" element={<StudSupport/>}/>

        <Route path="/notices" element={<StaffNotices/>}/>
        <Route path="/staffnotices" element={<StaffNotices/>}/>
        <Route path="/studnotices" element={<StudNotices/>}/>

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
        
        <Route path="/incubationcentre" element={<AboutUs/>}/>
        <Route path="/Abtus" element={<AboutUs/>}/>
        <Route path="/vissionmission" element={<VissionMission/>}/>

        <Route path="/miscellaneous" element={<Miscellaneous/>}/>
        
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;

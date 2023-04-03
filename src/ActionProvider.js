class ActionProvider {
  constructor(createChatBotMessage,setStateFunc) 
  {
   this.createChatBotMessage = createChatBotMessage;
   this.setState = setStateFunc;
  }

  GreetHandler = () => {
    const message = this.createChatBotMessage("Welcome!")
    this.setChatbotMessage(message)
  }

  IdHandler = () => {
    const message = this.createChatBotMessage("Click on the Link",{
      widget: "timetable"
    })
    this.setChatbotMessage(message)
  }

  Dephand = () => {
    const message = this.createChatBotMessage("We have two major Departments",{
      widget: "Depshow"
    })
    this.setChatbotMessage(message)
  }

  Unhand = () => {
    const message = this.createChatBotMessage("We have following Unaided Departments",{
      widget: "unaid"
    })
    this.setChatbotMessage(message)
  }

  Aidhand = () => {
    const message = this.createChatBotMessage("We have following Aided Departments",{
      widget: "aid"
    })
    this.setChatbotMessage(message)
  }

  About = () => {
    const message = this.createChatBotMessage("Shri Vile Parle Kelavani Mandal established SBMP in 1963 with Shri Arvind N. Mafatlal and his brothers and named the same after their uncle Shri Bhagubhai Mafatlal.")
    const message2 = this.createChatBotMessage("The Polytechnic has developed Sandwich Programmes and has diversified its conventional programmes initiated in 1963 into variety of discipline areas as First Level as well as Post-Diploma Level along with in-service programmes.")
    const message3 = this.createChatBotMessage("For more information click on given link",{
      widget: "Aboutsbmp"
    })
    this.setChatbotMessage(message)
    this.setChatbotMessage(message2)
    this.setChatbotMessage(message3)
  }

  Contact = () => {
    const message = this.createChatBotMessage("Shri Bhagubhai Mafatlal Polytechnic Irla, N. R. G Marg, Opposite Cooper Hospital, Vileparle (W), Mumbai 400056 India Website: www.sbmp.ac.in Phone: 022-42336000 (Office) 022-42336022 (Direct) Fax: 022-26110117")
    this.setChatbotMessage(message)
  }
  
  CSEHand = () => {
    const message = this.createChatBotMessage("The Course is a Three Years Full Time, Un-aided, Non-Sandwich Semester - Pattern having MultipointEntry & Credit System. ")
    const message2 = this.createChatBotMessage("The emphasis of the course is on Computer Education at a Technical Level covering Knowledge of Software, Hardware and Instruments at higher semesters along with basic Science Subjects in first and second semester.")
    const message3 = this.createChatBotMessage("For more Information click on the link given below",{
      widget: "CSEredirect"
    })
    this.setChatbotMessage(message)
    this.setChatbotMessage(message2)
    this.setChatbotMessage(message3)
  }

  ITHand = () => {
    const message = this.createChatBotMessage("The Course is a Three Years Full Time, Un-aided, Non-Sandwich Semester - Pattern having MultipointEntry & Credit System. The content of syllabus is having weightage of around appex 70% to 30% as software to hardware respectively.")
    const message2 = this.createChatBotMessage("The emphasis of the course is on Information Technology with computer education at a Technician level covering knowledge of Software, Hardware alongwith basic subjects like Mathematics, Physics etc in first and second semester.")
    const message3 = this.createChatBotMessage("For more Information click on the link given below",{
      widget: "ITredirect"
    })
    this.setChatbotMessage(message)
    this.setChatbotMessage(message2)
    this.setChatbotMessage(message3)
  }

  CivilHand = () => {
    const message = this.createChatBotMessage("The Diploma Course in Civil Engineering covers Materials of Construction, Use of Surveying and Levelling Instruments, Methods of Construction as applied to Buildings, Roads,Bridges, Estimation and Entrepreneurship etc.")
    const message2 = this.createChatBotMessage("For more Information click on the link given below",{
      widget: "Civilredirect"
    })
    this.setChatbotMessage(message)
    this.setChatbotMessage(message2)
  }

  MechHand = () => {
    const message = this.createChatBotMessage("The Diploma Course in Mechanical Engineering lays emphasis on manufacturing in engineering industries. ")
    const message2 = this.createChatBotMessage("Syllabus covers subjects such as Work Study, Production Management, Process Engineering, Tool Design, Mechanism etc. ")
    const message3 = this.createChatBotMessage("For more Information click on the link given below",{
      widget: "Mechredirect"
    })
    this.setChatbotMessage(message)
    this.setChatbotMessage(message2)
    this.setChatbotMessage(message3)
  }

  ElectHand = () => {
    const message = this.createChatBotMessage("This Course lays emphasis on Electricity Generation, Distribution and Utilization.")
    const message2 = this.createChatBotMessage("It covers subjects like Electricity Fundamentals, Electrical Engineering Materials etc. The student is also acquainted with subject like, Basic and Applied Electronics etc.")
    const message3 = this.createChatBotMessage("For more Information click on the link given below",{
      widget: "Electredirect"
    })
    this.setChatbotMessage(message)
    this.setChatbotMessage(message2)
    this.setChatbotMessage(message3)
  }

  IndustHand = () => {
    const message = this.createChatBotMessage("The emphasis in this Course is on Testing, Modification and Development of Circuits useful in Control of Power to Industrial Drives and Control of Signals in Test / Process Instrumentation and Communication. ")
    const message2 = this.createChatBotMessage("For more Information click on the link given below",{
      widget: "Industredirect"
    })
    this.setChatbotMessage(message)
    this.setChatbotMessage(message2)
  }

  PlasticHand = () => {
    const message = this.createChatBotMessage("The Plastics Engineering Diploma Course lays emphasis on Engineering aspects of Plastic Industry. ")
    const message2 = this.createChatBotMessage("It deals with various processes used in Plastic Processing Machinery, Mould Design and Fabrication and Plastic Testing with sufficient knowledge of properties of Plastic materials.")
    const message3 = this.createChatBotMessage("For more Information click on the link given below",{
      widget: "Plasticredirect"
    })
    this.setChatbotMessage(message)
    this.setChatbotMessage(message2)
    this.setChatbotMessage(message3)
  }

  ChemHand = () => {
    const message = this.createChatBotMessage("The Diploma course in chemical engineering deals with various aspects of chemical industry, such as, Unit operations, Process Technology of Important Commercial Chemicals Maintenance. ")
    const message2 = this.createChatBotMessage("The course covers, important subjects such as, Mass Transfer, Heat Transfer, Pollution Control and Waste Disposal, Stoichiometry and Safety in Plant Operation.")
    const message3 = this.createChatBotMessage("For more Information click on the link given below",{
      widget: "Chemredirect"
    })
    this.setChatbotMessage(message)
    this.setChatbotMessage(message2)
    this.setChatbotMessage(message3)
  }

  DigtHand = () => {
    const message = this.createChatBotMessage("The syllabus covers subjects like Electronic Measurement, Electronic Calculation, Microprocessor Applications, Analog and Digital Techniques ")
    const message2 = this.createChatBotMessage("For more Information click on the link given below",{
      widget: "Digtredirect"
    })
    this.setChatbotMessage(message)
    this.setChatbotMessage(message2)
  }

  EXTCHand = () => {
    const message = this.createChatBotMessage("Electronics and Telecommunications Engineering deals with analog and digital transmission/ reception of video, voice and data. ")
    const message2 = this.createChatBotMessage("For more Information click on the link given below",{
      widget: "EXTCredirect"
    })
    this.setChatbotMessage(message)
    this.setChatbotMessage(message2)
  }


  elseHandler = () => {
    const message = this.createChatBotMessage("Sorry Did not get you")
    this.setChatbotMessage(message)
  }

  setChatbotMessage = (message) => {
     this.setState(state => ({ ...state, messages: [...state.messages, message]})) 
  }

}

export default ActionProvider;
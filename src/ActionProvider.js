  class ActionProvider {
    constructor(createChatBotMessage,setStateFunc) 
    {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    }

    GreetHandler = () => {
      const message = this.createChatBotMessage("HI!")
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

    Academic = () => {
      const message = this.createChatBotMessage("Academics includes",{
        widget: "Acad"
      })
      this.setChatbotMessage(message)
    }

    AcadUnaid = () => {
      const message = this.createChatBotMessage("SBM Polytechnic offers full time Diploma in Computer Engineering and Information Technology. Both the courses are self financed.")
      const message2 = this.createChatBotMessage("Each is of Three Years Full Time Diploma with Semester-Pattern having Choice and Credit Based System (CCBS).The students has to complete the course in six terms to award Diploma.For information regarding the number of intakes per department click on the link below",{
        widget: "AcadUnaid"
      })
      this.setChatbotMessage(message)
      this.setChatbotMessage(message2)
    }

    Acadaid = () => {
      const message = this.createChatBotMessage("The full time diploma courses (Civil Engineering, Mechanical Engineering, Electrical Engineering, Industrial Electronics, Plastic Engineering, Chemical Engineering, Ditial Electronics and Electronics & telecommunication ) are of three year's duration and fifth semesters incorporates an inplant training.")
      const message2 = this.createChatBotMessage("The students receive institutional training for the first four and Sixth semesters. In the fifth semester they are sent to industry for inplant or field training.For information regarding the number of intakes per department click on the link below",{
        widget: "Acadaid"
      })
      this.setChatbotMessage(message)
      this.setChatbotMessage(message2)
    }

    FeesStruc = () => {
      const message = this.createChatBotMessage("The information for Fee Structure of Diploma in both Aided and Unaided Departments in SBMP is updated every year on the official website. For the information regarding this year Fee Structure click on the link below",{
        widget: "Fees"
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

    Address = () => {
      const message = this.createChatBotMessage("Shri Bhagubhai Mafatlal Polytechnic Irla, N. R. G Marg, Opposite Cooper Hospital, Vileparle (W), Mumbai 400056 India")
      this.setChatbotMessage(message)
    }

    FAQS = () => {
      const message = this.createChatBotMessage("Some of the Frequently Asked Questions are as follows:",{
        widget: "FAQ"
      })
      this.setChatbotMessage(message)
    }
    
    CSEHand = () => {
      const message = this.createChatBotMessage("Is is a Three Years Full Time, Un-aided, Non-Sandwich Semester Pattern Course having MultipointEntry & Credit System. ")
      const message2 = this.createChatBotMessage("The emphasis of the course is on Computer Education at a Technical Level covering Knowledge of Software, Hardware and Instruments along with basic Science Subjects. For more Information click on the link given below",{
        widget: "CSEredirect"
      } )
      this.setChatbotMessage(message)
      this.setChatbotMessage(message2)
    }

    ITHand = () => {
      const message = this.createChatBotMessage("It is a Three Years Full Time, Un-aided, Non-Sandwich Semester Pattern Course having Credit System. The content of syllabus has weightage of around appex 70% to 30% as software to hardware respectively.")
      const message2 = this.createChatBotMessage("The emphasis of the course is on knowledge at a Technician level covering of Software, Hardware along with basic subjects. For more Information click on the link below",{
        widget: "ITredirect"
      })
      this.setChatbotMessage(message)
      this.setChatbotMessage(message2)
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

    Admission = () => {
      const message = this.createChatBotMessage("The notifications for the both admissions (FY,DSY) will be published in news paper and on official websites after the SSC and HSC result declaration respectively .Eligibility Criteria and Reservations/QuotaAs per MS DTE rules.")
      const message2 = this.createChatBotMessage("The admision will take place on MS DTE through state level admission procedure (CAP). For information about intakes, courses available and Links for admission click on link below",{
        widget: "Admissions"
      })
      this.setChatbotMessage(message)
      this.setChatbotMessage(message2)
    }

    Misp = () => {
      const message = this.createChatBotMessage("For Maharashtra State Innovation Startup Policy Click on the link below.",{
        widget: "MISP"
      })
      const message1 = this.createChatBotMessage("For Information related to the Incubation Center Click on the link given below.",{
        widget: "Incubation"
      })
      this.setChatbotMessage(message)
      this.setChatbotMessage(message1)
    }

    Nisp = () => {
      const message = this.createChatBotMessage("For National Innovation Startup Policy Click on the link below.",{
        widget: "NISP"
      })
      const message1 = this.createChatBotMessage("For Information related to the Incubation Center Click on the link given below.",{
        widget: "Incubation"
      })
      this.setChatbotMessage(message)
      this.setChatbotMessage(message1)
    }

    elseHandler = () => {
      const message = this.createChatBotMessage("Sorry We did not get your message",{
        widget: "options"
      })
      this.setChatbotMessage(message)
    }

    setChatbotMessage = (message) => {
      this.setState(state => ({ ...state, messages: [...state.messages, message]})) 
    }

  }

  export default ActionProvider;
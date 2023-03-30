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

  CSEhand = () => {
    const message = this.createChatBotMessage("Welcome to CSE Department")
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

  

  elseHandler = () => {
    const message = this.createChatBotMessage("Sorry Did not get you")
    this.setChatbotMessage(message)
  }

  setChatbotMessage = (message) => {
     this.setState(state => ({ ...state, messages: [...state.messages, message]})) 
  }

}

export default ActionProvider;
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowercase = message.toLowerCase()
    const conditions = ["hello", "hi", "howdy"];

    if (conditions.some(el => lowercase.includes(el)))
    {
      this.actionProvider.GreetHandler()
    }
    else if (lowercase.includes("time table"))
    {
      this.actionProvider.IdHandler()
    }
    else if (lowercase.includes("cse"))
    {
      this.actionProvider.CSEhand()
    }
    else
    {
      this.actionProvider.elseHandler()
    }
  }
  
}
export default MessageParser;
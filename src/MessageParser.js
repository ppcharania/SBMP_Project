class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowercase = message.toLowerCase()
    const greetings = ["hello", "hi", "howdy"];
    const admission = ["admission","admission details","how can i get admission in sbmp","sbmp admission"]
    const about = ["about college","sbmp","college info","college information","when was the college founded"]
    const Fees = ["fees","fees structure","admission cost","cost","fee structure","fee"]
    if (greetings.some(el => lowercase.includes(el)))
    {
      this.actionProvider.GreetHandler()
    }
    else if (lowercase.includes("time table"))
    {
      this.actionProvider.IdHandler()
    }
    else if (lowercase.includes("cse"))
    {
      this.actionProvider.CSEHand()
    }
    else if (lowercase.includes("information technology"))
    {
      this.actionProvider.ITHand()
    }
    else if (lowercase.includes("civil"))
    {
      this.actionProvider.CivilHand()
    }
    else if (lowercase.includes("mechanical"))
    {
      this.actionProvider.MechHand()
    }
    else if (lowercase.includes("electrical"))
    {
      this.actionProvider.ElectHand()
    }
    else if (lowercase.includes("industrial engineering"))
    {
      this.actionProvider.IndustHand()
    }
    else if (lowercase.includes("plastic engineering"))
    {
      this.actionProvider.PlasticHand()
    }
    else if (lowercase.includes("chemical engineering"))
    {
      this.actionProvider.ChemHand()
    }
    else if (lowercase.includes("digital"))
    {
      this.actionProvider.DigtHand()
    }
    else if (lowercase.includes("contact")){
      this.actionProvider.Contact()
    }
    else if (lowercase.includes("address")){
      this.actionProvider.Address()
    }
    else if (lowercase.includes("location")){
      this.actionProvider.Address()
    } 
    else if (about.some(el => lowercase.includes(el)))
    {
      this.actionProvider.About()
    }
    else if (admission.some(el => lowercase.includes(el)))
    {
      this.actionProvider.Admission()
    }
    else if (Fees.some(el => lowercase.includes(el)))
    {
      this.actionProvider.FeesStruc()
    }
    else if (lowercase.includes("misp")){
      this.actionProvider.Misp()
    }
    else if (lowercase.includes("nisp")){
      this.actionProvider.Nisp()
    }
    else
    {
      this.actionProvider.elseHandler()
    }
  }
  
}
export default MessageParser;
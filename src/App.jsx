import Cybrom from "./Cybrom"
import Bhopal from "./Bhopal"
import { useState } from "react"
const App=()=>{
  const[status,useStatus]=useState(false);

  if(status==true){
    return(
      <>
      <Cybrom/>
      </>
    )
  }
  else{
    return(
      <Bhopal/>
    )
    
  }
}
export default App
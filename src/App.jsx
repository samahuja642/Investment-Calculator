import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { calculateInvestmentResults } from "./util/investment.js";
import { useState } from "react";
import Result from "./components/Result";

function App() {
  const [inputFields, setInputFields] = useState(
    {
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 0,
      duration: 0
    }
  )
  const annualData = calculateInvestmentResults(inputFields);
  function changeHandler(event) {
    console.log(typeof(event.target.name), typeof(event.target.value))
    let [name, value] = [event.target.name, event.target.value];
    value = parseInt(value);
    setInputFields((inputFields) => { return { ...inputFields, [name]: value } })
  }
  const inputIsValid = inputFields.duration>=0;
  return (
    <>
      <Header />
      <UserInput changeHandler={changeHandler} />
      {inputIsValid?<Result annualData={annualData}></Result>:<p className="center">Duration isn't valid.</p>}
    </>
  )
}

export default App

import Student from "./Student"

function App() {

  return (
    <>
        <Student name="Hamzee" age={30} isStudent={true}/>
        <Student name="Parick" age={42} isStudent={false}/>
        <Student name="Ray" age={50} isStudent={false}/>
        <Student name="Path" age={27} isStudent={true}/>
        <Student/>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [values, setValues] = useState();
  const handleChangeValues = (value) => {
    setValues(prevValue => ({
      ...prevValue, [value.target.name]: value.target.value,
    }));
  };
  const handleClickButton = () => {
    console.log(values)
  }
  return (
    <>
      <div className="app-conatiner">
        <div className="register-container">
          <h1>Cadastro de Usuários</h1>
          <input type="text" name="name" placeholder="Name" className='register-input' onChange={handleChangeValues}/>
          <input type="email" name="email" placeholder="Email" className='register-input' onChange={handleChangeValues}/>
          <input type="date" name="dataNas" className='register-input' onChange={handleChangeValues}/>
          <button onClick={handleClickButton}>Register</button>
        </div>
      </div>
    </>
  )
}

export default App

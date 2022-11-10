import React, { useState } from 'react'
import './styles.css'
import { Card } from '../../components/Card'


export default function home() {

  //Estado, [Variavel, funcao que altera a variavel]
  const [studentName, setStudentName]:any = useState();
  const [students, setStudents]:any = useState([]);


  function handleAddStudent(){
    const newStudent:any = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }
    setStudents((prevState:any) => [...prevState, newStudent])
  }


  return (
    //Fragment
    <div className='container'>
      <h1>Lista de Presença</h1>

      <input 
        type="text" 
        placeholder="Digite o nome..." 
        onChange = {e => setStudentName(e.target.value)}
      />

      <button type="button" onClick={handleAddStudent}>Adicionar</button>

    {
      students.map((student:any) => <Card name={student.name} time={student.time} />)
      
    }
      

    </div>
  )
}

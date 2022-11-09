import './styles.css'
import { Card } from '../../components/Card'

export default function App() {
  return (
    //Fragment
    <div className='container'>
      <h1>Lista de Presença</h1>

      <input 
        type="text" 
        placeholder="Digite o nome..." 
        onChange={e => e.target.value}
      />

      <button type="button">Adicionar</button>

      <Card name="Daniel Barbosa" time="10:30:23" />
      <Card name="João Silva" time="12:25:21" />

    </div>
  )
}

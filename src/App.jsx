import './App.css'
import Formulario from './components/Formulario'
import Relogio from './components/Relogio'

function App() {
 
  return (
    <div id='container'>

      <div id='main'>
        <div>
          <h1>Sorteio Relâmpago</h1>
          <p>
            Cadastra-se no formulário abaixo e concorra a um kit de livros para aprender fundamentos de frontEnd
          </p>
          <p> tempo para o final da promoção</p>
          <Relogio/>
        </div>
        <div>
          <img></img>
          
        </div>


         



      </div>
   
    <Formulario></Formulario>
    </div>
  )
}

export default App

import { useState } from "react";
import './Formulario.css'

function Formulario () {
const [inputValue, setInputValue] = useState ('');
const [data, setData] = useState ('');

const url = `https://viacep.com.br/ws/${inputValue}/json/`
const handleButtonClick = async () => {
    await fetch (url)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => alert ("verifique o campo e tente novamente")) 
};
const handleInputChange = (event) => {
    setInputValue (event.target.value);
};

return (

<div id='conteinerFormulario'>
    <form>
    <h1>PREENCHA O FORMULÁRIO ABAIXO:</h1>
    <div id='wrap'>
        <div id='wrapFormulario'>
            <input type='text' placeholder="nome" required/>
            <input type='text' placeholder="sobrenome" required/>
            <input type='email' placeholder="email" required/>
        </div>
        <div id='wrapCep'>
            <input type='text' value={inputValue} onChange={handleInputChange} placeholder="Digite seu cep:" required/>
            <input type='text' placeholder="logradouro" readOnly value={data.logradouro}/>
            <input type='text' placeholder="complemento" required/>
            <input type='text' placeholder="bairro" readOnly value={data.bairro}/>
            <input type='text' placeholder="estado" readOnly value={data.uf}/>
            <button onClick={handleButtonClick}>Pesquisar seu CEP</button>
        </div>
    </div>

    <input id='botaoEnviar' type="submit" value="enviar"/>
    
    </form></div>


)


}
export default Formulario;


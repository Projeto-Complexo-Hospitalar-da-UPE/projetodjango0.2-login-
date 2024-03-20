import logo from './logo.svg';
//import './App.css';
import './index.css';
import UserInput from './Components/UserInput'
import UserLogin from './Components/UserLogin'
import EnterButton from './Components/EnterButton'



function App() {

  const user = "Usuário"
  const log = "Login"
  const background = './Images_Folder/img2.jpg'
  const UPE = "Universidade de Pernambuco"
  const Poli = "Escola Politécnica de Pernambuco"
  
  return (


    <div className="Center">
      <div className="Blur"></div>

      <img className = "SCH" src = "./Images_Folder/sch.png"></img>

      <div className= 'container_Login_Icon'>
        <img className= 'User_icon' src = "./Images_Folder/User_png.png"></img>
        <img className= 'Login_icon' src = "./IMages_Folder/Login_png.png"></img>
      </div>


      <div className='container_UPE_content'>
        <p className='UPE_text'> {UPE} </p>
        <img className = "UPE_logo" src = "./Images_Folder/Logo-upe-site.png"></img>
      </div>
      
      <div className='container_Poli_content'>
        <p className='Poli_text'> {Poli} </p> 
        <img className= 'Poli_logo' src = "./Images_Folder/Poliupe.png"></img>
      </div>






        <EnterButton/>


        <UserInput/>
        <UserLogin/>
      
    </div>

  );
}

export default App;

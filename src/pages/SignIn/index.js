import './signIn.css';
import FormularioLogin from '../../components/formulario/FormularioLogin'
export default function SignIn_Entrar() {
  return (
    <main className="corpoLogin">
      <div className='imagemLogin'>
        <h1 className='textoLogin'>
          Gerencie todos os pagamentos<br />
          da sua empresa em um só<br />
          lugar.
        </h1>
      </div>
      <div className='formularioLogin'>
        <FormularioLogin />
      </div>
    </main>
  );
}



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import api from '../../../api/api';
// import { setItem } from '../../../utils/storage';
import validator from "validator";
import visivelLigado from '../../../assets/VisibalyOn.svg'
import visivelDesligado from '../../../assets/VisibalyOff.svg'
import './formularioLogin.css';

export default function FormularioLogin() {

    const navigate = useNavigate();

    const [mensagenError, setMensagenError] = useState("");
    const [mensagenErrorEmail, setMensagenErrorEmail] = useState(true);
    const [mensagenErrorSenha, setMensagenErrorSenha] = useState(true);
    const [mensagenErrorCaracter, setMensagenErrorCaracter] = useState(true);

    const [olharSenha, setOlharSenha] = useState(true);
    const [imagemVisivil, setImagemVisivil] = useState(visivelDesligado);
    const [textoSenha, setTextoSenha] = useState('password');

    const [formCorpo, setFormCorpo] = useState({
        email: '',
        senha: ''
    })

    function senhaVisivel() {
        if (olharSenha) {
            setOlharSenha(false)
            setImagemVisivil(visivelLigado)
            setTextoSenha('texto')
            return
        }

        if (!olharSenha) {
            setOlharSenha(true)
            setImagemVisivil(visivelDesligado)
            setTextoSenha('password')
            return
        }
    }

    function handleChangeForm(event) {
        setFormCorpo({ ...formCorpo, [event.target.name]: event.target.value });
    }

    let caracter = formCorpo.senha

    function mensageError() {

        if (!validator.isEmail(formCorpo.email)) {
            setMensagenError('Por favor, um formato de E-mail valido');
            setMensagenErrorEmail(false)
            return
        }
        if (!formCorpo.email) {
            setMensagenError('E-mail e Senha obrigatórios');
            setMensagenErrorEmail(false)
            return
        }
        if (!formCorpo.senha) {
            setMensagenError('E-mail e Senha obrigatórios');
            setMensagenErrorSenha(false)
            return
        }
        if (caracter.length < 5) {
            setMensagenError('senha tem que ter mais que 5 caracteres');
            setMensagenErrorSenha(false)
            setMensagenErrorCaracter(false)
            return
        }

        setMensagenErrorEmail(true)
        setMensagenErrorSenha(true)
        setMensagenErrorCaracter(true)
        setMensagenError('')
    }

    async function handleSubmit(e) {
        e.preventDefault();

        mensageError()
        // try {
        //   const response = await api.post('/login', {
        //     email: formCorpo.email,
        //     senha: formCorpo.senha
        //   });

        //   navigate('/Main');
        //   setItem('userName', response.data.users.nome)
        //   setItem('token', response.data.token)

        // } catch (error) {
        //   console.log(error);
        // }
    }

    return (
        <form className='formLoginEmail' onSubmit={handleSubmit}>
            <h1 className='tituloLogin'>Faça seu login!</h1>
            <label htmlFor="email">E-mail</label>
            <input
                type="text"
                name='email'
                placeholder='Digite seu e-mail'
                value={formCorpo.email}
                onChange={(e) => handleChangeForm(e)}
                className={!mensagenErrorEmail ? 'inputLoginErro' : ''}
            />

            <div className='formLoginSenha'>
                <div className='formLoginSenhaLabel'>
                    <label htmlFor='senha'>Senha</label>
                    <strong onClick={() => navigate('/')}>Esqueceu sua Senha?</strong>
                </div>
                <div className='posicaoSelha'>
                    <input
                        type={textoSenha}
                        name='senha'
                        placeholder='Digite sua senha'
                        value={formCorpo.senha}
                        onChange={(e) => handleChangeForm(e)}
                        className={!mensagenErrorSenha ? 'inputLoginErro ' : ''}
                    />
                    <img className='posicaoImagem' src={imagemVisivil} alt="" onClick={() => senhaVisivel()} />
                </div>
            </div>

            <button className='btn'>
                Entrar
            </button>

            <div className="textoCadastre">
                <span>Ainda não possui uma conta? <strong onClick={() => navigate('/Home')} className="link"> Cadastre-se</strong> </span>
            </div>

            {mensagenError &&
                <>
                    <span className="erro">{mensagenError}</span>
                    <span className="erro">{mensagenErrorEmail}</span>
                    <span className="erro">{mensagenErrorCaracter}</span>
                </>
            }
        </form>
    )
}
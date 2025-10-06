import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { baseUrl } from "../config/Constants";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from 'axios';

//membuat component login
function Login({onSwitchToRegister, onClose }){
    //membuat objek sebagai nilai state form
    const [form, setForm] = useState({email: '', password: ''});

    //membuat string kosong sebagai nilai state status
    const [status,setStatus] = useState('');

    const { setUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e)=>{
        setForm({...form, [e.target.name]:e.target.value});
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setStatus('Memproses...');
        try{
            const res = await axios.post(`${baseUrl}/auth/login`, form);
            const { accessToken } = res.data;
            const dataLogin = { accessToken, email: form.email };

            localStorage.setItem("user", JSON.stringify(dataLogin));
            setUser(dataLogin);
            setStatus('Login berhasil');
            if(onClose) onClose();
            navigate('/');
        }
        catch(err){
            setStatus('Email atau password salah');
        }
    };
    return (
        <div>
            <h2 className="text-2x1 font-semibold mb-4 text-blue-600 text-center">
                Form Login
            </h2> 

            <form onSubmit={handleSubmit} className="flex flex-col gap-4" action="">
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required id="email" />

                <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="password" required id="password" />

                <button type="submit" variant="primary">
                    Kirim
                </button>

                {status && <p className="text-sm text-center text-gray-700">{status}</p>}

                <div className="text-center mt-4">
                    <p className="text-sm">
                        Belum punya akun ?
                        <button type="button" onClick={onSwitchToRegister}
                        className="text-blue-600 hover:underline ml-1">
                            Registrasi disini
                        </button>
                    </p>
                </div>

            </form>

        </div>
    );

}

export default Login;



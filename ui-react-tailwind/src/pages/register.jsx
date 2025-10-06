import { useState } from "react";
import { baseUrl } from "../config/Constants";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from 'axios';

function Register({onSwitchToLogin}){
    const [form, setForm] = useState({
        nama: '', email: '',password: ''
    });
    const [status, setStatus] = useState('');
    const handleChange = (e)=>{
        setForm({...form, [e.target.name]: e.target.value});
    };
    const handleSubmit = async(e)=>{
        e.prevenDefault();
        setStatus('Mengirim...');
        try{
            const res = await axios.post(`${baseUrl}/auth/register`, form);
            setStatus(`User ${res.data.data.nama} berhasil dibuat`);
        }
        catch(err){
            setStatus('Gagal mengirim data');
        }
    };
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 text-center">
                Form Pendaftaran
            </h2> 

            <form onSubmit={handleSubmit} className="flex flex-col gap-4" action="">
                <Input type="text" name="nama" value={form.nama} onChange={handleChange} placeholder="Nama" required id="nama" />

                <Input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required id="email" />

                <Input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" required id="password" />

                <Button type="submit" variant="primary">
                    Kirim
                </Button>
                </form>
                {status && <p className="text-sm text-center text-gray-700">{status}</p>}
                <div className="text-center mt-4">
                    <p className="text-sm">
                        Sudah punya akun ?
                        <button type="button" onClick={onSwitchToLogin}
                        className="text-blue-600 hover:underline ml-1">
                            Login disini
                        </button>
                    </p>
                </div>
        </div>
    );
}
export default Register;
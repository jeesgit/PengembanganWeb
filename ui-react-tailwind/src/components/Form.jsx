import { useParams, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { baseUrl } from "../config/Constants";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Button from "./Button";
import Input from "./Input";
import Swal from 'sweetalert2';

function Form({mode = "create"}){
    const [form, setForm] = useState({name: "", status: "aktif"});
    const {id} = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const isReadOnly = mode === "view";

    const title =
        mode === "create"
            ? "Tambah Peserta"
            :mode === "edit"
            ?"Edit Peserta"
            : "Detail Peserta";
    
            useEffect(()=>{
                if((mode ==="edit" || mode === "view") && id){
                    axios
                    .get(`${baseUrl}/peserta/${id}`)
                    .then((res)=>{
                        const {name, status}= res.data.data;
                        setForm({name, status});
                    })
                    .catch(()=>{
                        Swal.fire("Error", "Gagal mengambil data", "error");
                        navigate("/peserta");
                    });
                }
            }, [id, mode, navigate]);

            const handleChange = (e)=>{
                setForm({...form, [e.target.name]: e.target.value});
            };

            const handleSubmit = async (e)=>{
                e.preventDefault();
                try{
                    if(mode ==="create"){
                        await axios.post(`${baseUrl}/peserta`, form,{
                            headers:{Authorization:`Bearer ${user.accessToken}`},
                        });
                    }else if(mode === "edit" && id){
                        await axios.put(`${baseUrl}/peserta/${id}`, form,{
                            headers:{Authorization:`Bearer ${user.accessToken}`},
                        });
                    }
                    Swal.fire("Berhasil", "Data peserta disimpan", "success");
                    navigate("/peserta");
                }catch(err){
                    Swal.fire("Gagal", err.response?.data?.message || "terjadi kesalahan", "error");
                }
            };

            return(
                <div className="p-6 max-w-xl mx-auto">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">{title}</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4" action="">
                            <Input 
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Nama Peserta"
                            required
                            readOnly={isReadOnly} />

                            <select 
                            name="status"
                            value={form.status}
                            onChange={handleChange}
                            disabled={isReadOnly} 
                            className="p-2 border rounded">

                            <option value="aktif">Aktif</option>
                            <option value="nonaktif">Nonaktif</option>
                            </select>

                            <div className="flex gap-2 justify-end">
                                {!isReadOnly && (
                                    <Button type="submit" variant="primary">
                                        Simpan
                                    </Button>
                                )}
                                <Button type="button" variant="secondary" onClick={()=>
                                    navigate("/peserta")
                                }>Kembali</Button>

                            </div>
                        </form>
                    </div>

                </div>
            );
}

export default Form;
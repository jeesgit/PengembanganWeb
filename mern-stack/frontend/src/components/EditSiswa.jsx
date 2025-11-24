//import juga useefect
import React,{useState, useEffect} from 'react'
import axios from 'axios';
//import juga useparams
import { useNavigate, useParams } from 'react-router-dom';
import './AddSiswa.css';

function EditSiswa() {
    const [kodeSiswa, setKodeSiswa] = useState("");
    const [namaSiswa, setNamaSiswa] = useState("");
    const [emailSiswa, setEmailSiswa] = useState(null);
    const [jenisKelamin, setJenisKelamin] = useState(null);
    const [tanggalLahir, setTanggalLahir] = useState("");
    const navigate = useNavigate();
    //mengambil parameter request
    const { id } = useParams();

    //membuat useffect
    useEffect(()=>{
        const getSiswaById = async () =>{
            const response = await axios.get(`http://localhost:5000/api/siswa/${id}`);
            setKodeSiswa(response.data.data.kodeSiswa);
            setNamaSiswa(response.data.data.namaSiswa);
            setEmailSiswa(response.data.data.emailSiswa);
            setJenisKelamin(response.data.data.jenisKelaminSiswa);
            //ubah format tanggal dari server
            let tanggalLahirSiswa = new Date(response.data.data.tanggalLahirSiswa);
            tanggalLahirSiswa = tanggalLahirSiswa.toISOString().split('T')[0];
            setTanggalLahir(tanggalLahirSiswa);
        };
        getSiswaById();
    },[id]);

    const handleKodeSiswaChange = (e)=>{
        setKodeSiswa(e.target.value);
    }
    const handleNamaSiswaChange = (e)=>{
        setNamaSiswa(e.target.value);
    }
    const handleEmailSiswaChange = (e)=>{
        setEmailSiswa(e.target.value);
    }
    const handleJenisKelaminChange = (e)=>{
        setJenisKelamin(e.target.value);
    }
    const handleTanggalLahirChange = (e)=>{
        setTanggalLahir(e.target.value);
    }
    const handleFormSubmit = async (e)=>{
        e.preventDefault();
        //gunakan method put
        await axios.put(`http://localhost:5000/api/siswa/${id}`, {
            kodeSiswa:parseInt(kodeSiswa),
            namaSiswa:namaSiswa,
            emailSiswa:emailSiswa,
            jenisKelamin:jenisKelamin,
            tanggalLahir:tanggalLahir
        });
        navigate('/');
    }

  return (
    <div className='w-50 mx-auto rounded-3 mt-5 p-5 shadow'>
        <form onSubmit={handleFormSubmit}>
    
                <div className="col mb-4">
                    <div className='col-auto'>
                        <label className='col-form-label-sm fw-bold'>Kode Siswa</label>
                    </div>
                    <div>
                        <input type="text" name="kodeSiswa" className='form-control-sm w-100 py-1 border rounded-2 px-2' value={kodeSiswa} 
                        onChange={handleKodeSiswaChange} placeholder='Kode Siswa'/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className='col-auto'>
                        <label className='col-form-label-sm fw-bold'>Nama Siswa</label>
                    </div>
                    <div>
                        <input type="text" name="namaSiswa" className='form-control-sm w-100 py-1 border rounded-2 px-2' value={namaSiswa} 
                        onChange={handleNamaSiswaChange}  placeholder='Nama Siswa'/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className='col-auto'>
                        <label className='col-form-label-sm fw-bold'>Email Siswa</label>
                    </div>
                    <div>
                        <input type="email" name="emailSiswa" className='form-control-sm w-100 py-1 border rounded-2 px-2' value={emailSiswa} 
                        onChange={handleEmailSiswaChange}  placeholder='Email Siswa'/>
                    </div>
                </div>
                <div className="row mb-4">
                        <div className='col-auto'>
                            <label className='col-form-label-sm fw-bold'>Jenis Kelamin</label>
                        </div>
                        <div className="d-flex flex-row col-auto">
                                <input className='form-check-input-sm' type="radio" name="jenisKelamin" value="Laki-laki" 
                                checked={jenisKelamin === 'Laki-laki'}
                                onChange={handleJenisKelaminChange} />
                                <span className='form-control-sm'>Laki-laki</span>
                        </div>
                        <div className="d-flex flex-row col-auto">
                                <input className='form-check-input-sm' type="radio" name="jenisKelamin" value="Perempuan" 
                                checked={jenisKelamin === 'Perempuan'}
                                onChange={handleJenisKelaminChange}/>
                                <span className='form-control-sm'>Perempuan</span>
                        </div>
                    
                </div>
                <div className="row mb-4">
                    <div className='col-auto'>
                            <label className='col-form-label-sm fw-bold'>Tanggal Lahir</label>
                    </div>
                    <div>
                        <input type="date" name="tanggalLahir" value={tanggalLahir ? new Date(tanggalLahir).toISOString().split('T')[0]:''} onChange={handleTanggalLahirChange} className='form-control-sm w-100'/>
                    </div>
                </div>
                <button type='submit' className='w-100 py-2 fw-bold text-white bg-primary rounded-2 border'>Update</button>
            
        </form>
    </div>
  )
}

export default EditSiswa


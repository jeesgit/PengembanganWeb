import React from "react";
import './SiswaList.css';
import axios from 'axios';
import { Link } from "react-router-dom";
//import useSWR, {useSWRConfig} from 'swr';
import { useState, useEffect } from "react";
import AddSiswaModal from "./addSiswaModal";
import EditSiswaModal from "./EditSiswaModal";

function SiswaList() {
    // const fetcher = async ()=>{
    //     const response = await axios.get('http://localhost:5000/api/siswa');
    //     return response.data;
    // };

    // const {data} = useSWR('siswa',fetcher);

    const [addModal, setAddModal] = useState(false);
    const [addRow, setAddRow] = useState(null);
    const [editModal, setEditModal] = useState(false);
    const [editRow, setEditRow] = useState(null);
    
    const [dataSiswa, setDataSiswa] = useState([]);

    //ambil data transaction dari server
    const fetchData = async () =>{
        const response = await axios.get(`http://localhost:5000/api/siswa`);
        setDataSiswa(response.data.data);
    } 

    useEffect(()=>{
        try{ 
            fetchData();
        }catch(err){
            console.error("Gagal mengambil data", err);
        }
    },[]);

    const deleteSiswa = async (siswaId)=>{
        try{
            await axios.delete(`http://localhost:5000/api/siswa/${siswaId}`);
            fetchData();
        }
        catch(err){
            console.error("Gagal menghapus data", err);
        }
    }

    // const { mutate } = useSWRConfig();
    // const deleteSiswa = async (siswaId)=>{
    //     await axios.delete(`http://localhost:5000/api/siswa/${siswaId}`);
    //     mutate('siswa');
    // }

  return (
    <>
    <div className='d-flex flex-col mt-5'>
      <div className='w-100'>
        {/* <Link style={{backgroundColor:'green'}} to='/add' className="text-white fw-bold px-2 py-1 rounded-2 text-decoration-none">Add new</Link> */}
        <button style={{backgroundColor:'green'}} className="text-white fw-bold px-2 py-1 rounded-3 text-decoration-none border-0" onClick={()=>{setAddRow(null); setAddModal(true);}}>
            Add New
        </button>
        <div className="position-relative shadow rounded-2 mt-1">
            <table className='table table-bordered table-borderless table-hover table-sm w-100 fs-6 text-start'>
                <thead className="fs-6">
                    <tr>
                        <th style={{backgroundColor:'lightgray', color:'darkslategray'}}  className='py-3 text-center'>
                            Kode Siswa</th>
                        <th style={{backgroundColor:'lightgray', color:'darkslategray'}} className='py-3'>Nama Siswa</th>
                        <th style={{backgroundColor:'lightgray', color:'darkslategray'}} className='py-3'>Email Siswa</th>
                        <th style={{backgroundColor:'lightgray', color:'darkslategray'}} className='py-3'>Jenis Kelamin</th>
                        <th style={{backgroundColor:'lightgray', color:'darkslategray'}} className='py-3'>Tanggal Lahir</th>
                        <th style={{backgroundColor:'lightgray', color:'darkslategray'}} className='py-3 text-center'>Aksi</th>
                    </tr>
                </thead>
                <tbody className='fs-6'>
                    {dataSiswa.map((siswa, index)=>{
                    let tanggalLahirSiswa = new Date(siswa.tanggalLahirSiswa);
                    tanggalLahirSiswa = tanggalLahirSiswa.getDate()+'-'+(tanggalLahirSiswa.getMonth()+1)+'-'+tanggalLahirSiswa.getFullYear();
                    return (
                    <tr key={siswa.id}>
                        <td className='py-3 text-center'>{siswa.kodeSiswa}</td>
                        <td className='py-3'>{siswa.namaSiswa}</td>
                        <td className='py-3'>{siswa.emailSiswa}</td>
                        <td className='py-3'>{siswa.jenisKelaminSiswa}</td>
                        <td className='py-3'>{tanggalLahirSiswa}</td>
                        <td className='py-3 text-center'>
                             {/* <Link to={`/edit/${siswa.id}`} className="bg-primary text-white fw-bold px-2 py-1 me-1 rounded-2 text-decoration-none linkAksi">Edit</Link> */}
                             <button className="bg-primary text-white fw-bold px-2 me-1 rounded-2 buttonAksi" onClick={()=>{setEditModal(true); setEditRow(siswa);}}>
                                Edit
                             </button>
                            <button onClick={()=>{deleteSiswa(siswa.id)}} className="bg-danger fw-bold px-2 rounded-2 text-white buttonAksi">Delete</button>
                        </td>    
                    </tr>
                    )})}
                </tbody>
            </table>
        </div>
      </div>
    </div>

    <AddSiswaModal 
        addModal={addModal}
        onClose={()=>{setAddModal(false); setAddRow(null);}}
        onSuccess={fetchData}
    />

    <EditSiswaModal 
        editModal={editModal}
        editRow={editRow}
        onClose={()=>{setEditModal(false); setEditRow(null);}}
        onSuccess={fetchData}
    />

    </>
  )
}

export default SiswaList;

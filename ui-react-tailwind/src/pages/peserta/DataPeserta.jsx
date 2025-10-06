import { useContext, useEffect, useState } from "react";
import { baseUrl } from "../../config/Constants";
import { AuthContext } from "../../context/AuthContext";
import axios from 'axios';
import Table from '../../components/Table';
import Button from "../../components/Button";
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

function DataPeserta(){
    const [peserta, setPeserta] = useState([]);
    const [loading, setLoading] = useState(true);
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
        fetcData();
    }, []);

    const fetcData = async()=>{
        setLoading(true);
        try{
            const res = await axios.get(`${baseUrl}/peserta`);
            const dataWithNo = res.data.data.map((item, index)=>{
                ({...item, no: index + 1,})
            });
            setPeserta(dataWithNo);
        }catch(err){
            console.error(err);
        }
        setLoading(false);
    };

    const handleDelete = async (peserta)=>{
        const konfirmasi = confirm(`Hapus ${peserta.nama}?`);
        if(!konfirmasi) return;
        try{
            await axios.delete(`${baseUrl}/peserta/${peserta.id}`,{headers:{Authorization: `Bearer ${user.accessToken}`}});
            fetcData();
            Swal.fire("Berhasil", "Peserta telah dihapus", "succes");
        }catch(err){
            alert("Gagal menghapus data");
        }
    };

    const columns = [
        {header: 'No', accessor: 'no'},
        {header: 'Nama', accessor: 'nama'},
        {header: 'Status', accessor: 'status'},
        {
            header: 'Aksi',
            accessor:'action',
            render:(row)=> (
                <div className="flex gap-2">
                    <button variant="secondary" onClick={()=> navigate(`/peserta/view/${row.id}`)}>View</button>
                    <button variant="success" onClick={()=> navigate(`/peserta/edit/${row.id}`)}>Edit</button>
                    <button variant="danger" onClick={()=> handleDelete(row)}>Hapus</button>
                </div>
            ),
        },
    ];

    return(
        <div>
            <h2 className="text-2x1 fonr-semibold mb-4 text-blue-700">Data Peserta</h2>
            <div className="mb-4">
                <button onClick={()=>navigate('/pesereta/tambah')}>Tambah Peserta</button>
            </div>
            {loading ? <p> Loading...</p>: <table columns = {columns} data = {peserta} />}
        </div>
    );
}

export default DataPeserta;
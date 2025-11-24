import React, { useState, useEffect } from "react";
import './AddSiswa.css';
//import axios from "axios";
import axios from "axios";
import { useParams } from "react-router-dom";

const styles = {
  overlay: {
    position: "fixed",
    top: 0, left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },

  modal: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "400px",
  },
};

function EditSiswaModal({editModal, onClose, onSuccess, editRow}) {

    if (!editRow) return null; // kalau modal false → tidak ditampilkan

    const [kodeSiswa, setKodeSiswa] = useState(editRow.kodeSiswa);
    const [namaSiswa, setNamaSiswa] = useState(editRow.namaSiswa);
    const [emailSiswa, setEmailSiswa] = useState(editRow.emailSiswa);
    const [jenisKelamin, setJenisKelamin] = useState(editRow.jenisKelaminSiswa);
    const [tanggalLahir, setTanggalLahir] = useState(editRow.tanggalLahirSiswa);

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

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
        await axios.put(`http://localhost:5000/api/siswa/${editRow.id}`, {
            kodeSiswa:parseInt(kodeSiswa),
            namaSiswa:namaSiswa,
            emailSiswa:emailSiswa,
            jenisKelamin:jenisKelamin,
            tanggalLahir:tanggalLahir
        });
        onSuccess?.();   // refresh data di parent
        onClose?.();     // tutup modal
        } catch (err) {
        console.error("Gagal menambah siswa", err);
        }

    };

  return (
        <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3 className="mb-3">Update Siswa</h3>

        <form onSubmit={handleFormSubmit}>
          
          <div className="col mb-3">
            <div className="col-auto"> 
                <label className="col-form-label-sm">Kode Siswa</label>
            </div>
            <div>
                <input 
                className="form-control-sm w-100 py-2 border rounded-2 px-2" 
                type="text"
                name="kodeSiswa"
                value={kodeSiswa}
                onChange={handleKodeSiswaChange}
                required
                />
            </div>
          </div>

          <div className="col mb-3">
            <div className="col-auto"> 
                <label className="col-form-label-sm">Nama Siswa</label>
            </div>
            <div>
                <input 
                className="form-control-sm w-100 py-2 border rounded-2 px-2" 
                type="text"
                name="namaSiswa"
                value={namaSiswa}
                onChange={handleNamaSiswaChange}
                required
                />
            </div>
          </div>

          <div className="col mb-3">
            <div className="col-auto"> 
                <label className="col-form-label-sm">Email Siswa</label>
            </div>
            <div>
                <input 
                className="form-control-sm w-100 py-2 border rounded-2 px-2" 
                type="email"
                name="emailSiswa"
                value={emailSiswa}
                onChange={handleEmailSiswaChange}
                required
                />
            </div>
          </div>

          <div className="col mb-3">
            <div className="col-auto"> 
                <label className="col-form-label-sm">Jenis Kelamin</label>
            </div>
            <div>
                <select 
                className="form-control-sm w-100 py-2 border rounded-2 px-2" 
                name="jenisKelamin"
                value={jenisKelamin}
                onChange={handleJenisKelaminChange}
                required>
                <option value="">-- pilih --</option>
                <option value="Laki-laki" selected={jenisKelamin === 'Laki-laki'}>Laki-laki</option>
                <option value="Perempuan" selected={jenisKelamin === 'Perempuan'}>Perempuan</option>
                </select>
            </div>
          </div>

          <div className="col mb-3">
            <div className="col-auto"> 
                <label className="col-form-label-sm">Tanggal Lahir</label>
            </div>
            <div>
                <input 
                className="form-control-sm w-100 py-2 border rounded-2 px-2" 
                type="date"
                name="tanggalLahir"
                value={tanggalLahir ? new Date(tanggalLahir).toISOString().split('T')[0]:''}
                onChange={handleTanggalLahirChange}
                required
                />
            </div>
          </div>

          <div className="d-flex justify-content-end gap-2">
            <button 
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Batal
            </button>

            <button type="submit" className="btn btn-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditSiswaModal

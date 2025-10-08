import { useState } from "react";
import React from "react";
import $ from 'jquery';

export default function ModalEditPresensi() {

    const [isOpen, setIsOpen] = useState(true);
    const [formData, setFormData] = useState({
      nama: "Jees",
      jamMasuk: "07:30",
      jamPulang: "16:30",
      status: "Hadir",
      keterangan:
        "Tepat Waktu, tidak terlambat, kerjakan tugas, patuhi aturan",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Data disimpan!\n\n" + JSON.stringify(formData, null, 2));
      console.log("Data presensi:", formData);
      setIsOpen(false);
    };
  
    if (!isOpen) return null;
    
  $(document).ready(function(){
    
      //DOM Modal Edit
      const openModalEdit = document.getElementById("openModalEdit");
      const closeModalEdit = document.getElementById("closeModalEdit");
      const modalEdit = document.getElementById("modalEdit");
      const okEdit = document.getElementById("okEdit");

      // Buka modal
      openModalEdit.addEventListener("click", () => {
        modalEdit.classList.remove("hidden");
      });

      // Tutup modal
      closeModalEdit.addEventListener("click", () => {
        modaEdit.classList.add("hidden");
      });

      okEdit.addEventListener("click", () => {
        modalEdit.classList.add("hidden");
      });

      // Tutup modal kalau klik di luar box
      modalEdit.addEventListener("click", (e) => {
        if (e.target === modalEdit) {
          modalEdit.classList.add("hidden");
        }
      });
  });


  return (
    <div id="modalEdit" className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-96 p-6 relative">
        {/* Tombol Close */}
        <button
        id="closeModalEdit"
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        {/* Judul */}
        <h2 className="text-xl font-semibold text-center mb-4">
          Edit Presensi
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Nama */}
          <div className="flex justify-between items-center border-b border-gray-200 pb-1">
            <label className="text-gray-600">Nama</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="text-right w-1/2 focus:outline-none font-medium text-gray-800"
            />
          </div>

          {/* Jam Masuk */}
          <div className="flex justify-between items-center border-b border-gray-200 pb-1">
            <label className="text-gray-600">Jam Masuk</label>
            <input
              type="time"
              name="jamMasuk"
              value={formData.jamMasuk}
              onChange={handleChange}
              className="text-right w-1/2 focus:outline-none font-semibold text-gray-800"
            />
          </div>

          {/* Jam Pulang */}
          <div className="flex justify-between items-center border-b border-gray-200 pb-1">
            <label className="text-gray-600">Jam Pulang</label>
            <input
              type="time"
              name="jamPulang"
              value={formData.jamPulang}
              onChange={handleChange}
              className="text-right w-1/2 focus:outline-none font-semibold text-gray-800"
            />
          </div>

          {/* Status Presensi */}
          <div className="flex justify-between items-center border-b border-gray-200 pb-1">
            <label className="text-gray-600">Status Presensi</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className={`text-right w-1/2 focus:outline-none font-semibold ${
                formData.status === "Hadir"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              <option value="Hadir">Hadir</option>
              <option value="Izin">Izin</option>
              <option value="Sakit">Sakit</option>
              <option value="Alpha">Alpha</option>
            </select>
          </div>

          {/* Keterangan */}
          <div>
            <label className="text-gray-600">Keterangan :</label>
            <textarea
              name="keterangan"
              value={formData.keterangan}
              onChange={handleChange}
              rows="3"
              className="w-full text-gray-800 mt-1 border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
            ></textarea>
          </div>

          {/* Tombol Submit */}
          <div className="text-right mt-4">
            <button
            id="okEdit"
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg focus:outline-none"
            >
              Oke
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

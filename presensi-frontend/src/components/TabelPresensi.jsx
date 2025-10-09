import { Plus } from "lucide-react";
import { useState } from "react";
import './TabelPresensi.css';
import $ from 'jquery';

function TabelPresensi(){
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

      //js tambah presensi
      const [tambah, setTambah] = useState(true);
      const [formDataTambah, setFormDataTambah] = useState({
        nama: "",
        jamMasuk: "",
        jamPulang: "",
        status: "",
        keterangan:
          "",
      });
    
      const handleTambahChange = (e) => {
        const { name, value } = e.target;
        setFormDataTambah((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleTambahSubmit = (e) => {
        e.preventDefault();
        alert("Data disimpan!\n\n" + JSON.stringify(formDataTambah, null, 2));
        console.log("Data presensi:", formDataTambah);
        setTambah(false);
      };
    
      if (!tambah) return null;

  $(document).ready(function(){
        //Javascript modal detail mulai dari sini
        // Ambil elemen
      const openModalDetail = document.getElementById("openModalDetail");
      const closeModalDetail = document.getElementById("closeModalDetail");
      const modalDetail = document.getElementById("modalDetail");
      const okDetail = document.getElementById("okDetail");

      // Buka modal
      openModalDetail.addEventListener("click", () => {
        modalDetail.classList.remove('hidden')
      });

      // Tutup modal
      closeModalDetail.addEventListener("click", () => {
        modalDetail.classList.add("hidden");
      });

      okDetail.addEventListener("click", () => {
        modalDetail.classList.add("hidden");
      });

      // Tutup modal kalau klik di luar box
      modalDetail.addEventListener("click", (e) => {
        if (e.target === modalDetail) {
          modalDetail.classList.add("hidden");
        }
      });

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
        modalEdit.classList.add("hidden");
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

      //DOM Modal Tambah
      const openModalTambah = document.getElementById("openModalTambah");
      const closeModalTambah = document.getElementById("closeModalTambah");
      const modalTambah = document.getElementById("modalTambah");
      const okTambah = document.getElementById("okTambah");

      // Buka modal
      openModalTambah.addEventListener("click", () => {
        modalTambah.classList.remove("hidden");
      });

      // Tutup modal
      closeModalTambah.addEventListener("click", () => {
        modalTambah.classList.add("hidden");
      });

      okTambah.addEventListener("click", () => {
        modalTambah.classList.add("hidden");
      });

      // Tutup modal kalau klik di luar box
      modalTambah.addEventListener("click", (e) => {
        if (e.target === modalTambah) {
          modalTambah.classList.add("hidden");
        }
      });
    });
    return (
        <div>
            {/*komponen detail mulai dari sini*/}
          <div
          id="modalDetail"
          class="fixed inset-0 bg-opacity-50 flex items-center justify-center hidden"
          >
            <div class="bg-white rounded-xl shadow-lg w-96 p-6 relative">
              
                <button
                  id="closeModalDetail"
                  class="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>

                <h2 class="text-xl font-semibold mb-4">Detail Presensi</h2>
                <div>
                    <form class="space-y-3">

                    <div class="flex justify-between border-b border-gray-200 pb-1">
                        <label class="text-gray-600">Nama</label>
                        <span class="font-medium text-gray-800">Jees</span>
                    </div>

                    <div class="flex justify-between border-b border-gray-200 pb-1">
                        <label class="text-gray-600">Jam Masuk</label>
                        <span class="font-medium text-gray-800">07:30</span>
                    </div>

                    <div class="flex justify-between border-b border-gray-200 pb-1">
                        <label class="text-gray-600">Jam Pulang</label>
                        <span class="font-medium text-gray-800">16:30</span>
                    </div>

                    <div class="flex justify-between border-b border-gray-200 pb-1">
                        <label class="text-gray-600">Status Presensi</label>
                        <span class="font-medium text-green-600">Hadir</span>
                    </div>

                    <div className="text-start">
                        <label class="text-gray-600">Keterangan :</label>
                        <p class="mt-1 text-gray-800 text-sm leading-snug">
                        Tepat Waktu, tidak terlambat, kerjakan tugas, patuhi aturan
                        </p>
                    </div>
                    </form>
                </div>

                <div className="flex justify-end">
                      <button
                      id="okDetail"
                      class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 hover:cursor-pointer"
                      >
                      Oke
                      </button>
                </div>
          </div>
        </div>  
    {/*..*/}

    {/*komponen modal edit mulai dari sini */}
      <div id="modalEdit" className="fixed inset-0 flex items-center justify-center z-50 hidden">
        <div className="bg-white rounded-xl shadow-xl w-96 p-6 relative">
          {/* Tombol Close */}
          <button
          id="closeModalEdit"
            onClick={() => setTambah(true)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
          {/* Judul */}
          <h2 className="text-xl font-semibold text-center mb-4">
            Edit Presensi
          </h2>

          {/* Form */}
          <div>
            <form className="space-y-3">
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
              <div className="text-left">
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
      </div>
    {/*..*/}

    {/* component modal tambah mulai dari sini */}
        <div id="modalTambah" className="fixed inset-0 flex items-center justify-center z-50 hidden">
        <div className="bg-white rounded-xl shadow-xl w-96 p-6 relative">
          {/* Tombol Close */}
          <button
          id="closeModalTambah"
            onClick={() => setTambah(true)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
          {/* Judul */}
          <h2 className="text-xl font-semibold text-center mb-4">
            Tambah Presensi
          </h2>

          {/* Form */}
          <div>
            <form className="space-y-3">
              {/* Nama */}
              <div className="flex justify-between items-center border-b border-gray-200 pb-1">
                <label className="text-gray-600">Nama</label>
                <input
                  type="text"
                  name="nama"
                  value={formDataTambah.nama}
                  onChange={handleTambahChange}
                  className="text-right w-1/2 focus:outline-none font-medium text-gray-800"
                />
              </div>
              {/* Jam Masuk */}
              <div className="flex justify-between items-center border-b border-gray-200 pb-1">
                <label className="text-gray-600">Jam Masuk</label>
                <input
                  type="time"
                  name="jamMasuk"
                  value={""}
                  onChange={handleTambahChange}
                  className="text-right w-1/2 focus:outline-none font-semibold text-gray-800"
                />
              </div>
              {/* Jam Pulang */}
              <div className="flex justify-between items-center border-b border-gray-200 pb-1">
                <label className="text-gray-600">Jam Pulang</label>
                <input
                  type="time"
                  name="jamPulang"
                  value={formDataTambah.jamPulang}
                  onChange={handleTambahChange}
                  className="text-right w-1/2 focus:outline-none font-semibold text-gray-800"
                />
              </div>
              {/* Status Presensi */}
              <div className="flex justify-between items-center border-b border-gray-200 pb-1">
                <label className="text-gray-600">Status Presensi</label>
                <select
                  name="status"
                  value={formDataTambah.status}
                  onChange={handleTambahChange}
                  className={`text-right w-1/2 focus:outline-none font-semibold ${
                    formDataTambah.status === "Hadir"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                > 
                  <option selected value=""></option>
                  <option value="Hadir">Hadir</option>
                  <option value="Izin">Izin</option>
                  <option value="Sakit">Sakit</option>
                  <option value="Alpha">Alpha</option>
                </select>
              </div>
              {/* Keterangan */}
              <div className="text-left">
                <label className="text-gray-600">Keterangan :</label>
                <textarea
                  name="keterangan"
                  value={formDataTambah.keterangan}
                  onChange={handleTambahChange}
                  rows="3"
                  className="w-full text-gray-800 mt-1 border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
                ></textarea>
              </div>
              {/* Tombol Submit */}
              <div className="text-right mt-4">
                <button
                id="okTambah"
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg focus:outline-none"
                >
                  Tambah
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> 
    {/*..*/}

            <div id="openModalTambah" className="bg-blue-700 text-white hover:cursor-pointer">
                <Plus className="inline" /> Tambah Presensi 
            </div>

            <table className="table-auto border-collapse border border-blue-300 w-full mt-3">
                <thead className="bg-gray-300">
                    <tr>
                        <th>Nama</th>
                        <th className="hidden sm:table-cell">Jam Masuk</th>
                        <th className="hidden sm:table-cell">Jam Pulang</th>
                        <th>Status Presensi</th>
                        <th className="hidden sm:table-cell">Keterangan</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t border-blue-400 hover:bg-gray-300">
                        <td>Jees</td>
                        <td className="hidden sm:table-cell">07:30</td>
                        <td className="hidden sm:table-cell">16:00</td>
                        <td>Hadir</td>
                        <td className="hidden sm:table-cell">Tepat Waktu</td>
                        <div className="flex flex-wrap justify-evenly">
                            <td><button id="openModalDetail" type="button" className="detail bg-gray-500 w-13 text-white text-sm rounded hover:cursor-pointer">Detail</button></td>
                            <td><button 
                             type="button" id="openModalEdit" className=" bg-green-500 w-13 text-white text-sm rounded hover:cursor-pointer">Edit</button></td>
                            <td><button type="button" className=" bg-red-500 w-13 text-white text-sm rounded hover:cursor-pointer">Hapus</button></td>
                        </div>
                    </tr>
                </tbody>
            </table>
       </div>
    )
}

export default TabelPresensi;

import { Plus } from "lucide-react";
import { useState } from "react";
import './TabelPresensi.css';
import $ from 'jquery';

function TabelPresensi(){

    $(document).ready(function(){
        //Javascript modal detail mulai dari sini
        // Ambil elemen
      const openModalDetail = document.getElementById("openModalDetail");
      const closeModalDetail = document.getElementById("closeModalDetail");
      const modalDetail = document.getElementById("modalDetail");
      const okDetail = document.getElementById("okDetail");

      // Buka modal
      openModalDetail.addEventListener("click", () => {
        modalDetail.classList.remove("hidden");
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
    });
    return (
        <div>
            {/*komponen detail mulai dari sini*/}
            <div
      id="modalDetail"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden"
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

            <div className="bg-blue-700 text-white hover:cursor-pointer">
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
                             type="button" className=" bg-green-500 w-13 text-white text-sm rounded hover:cursor-pointer">Edit</button></td>
                            <td><button type="button" className=" bg-red-500 w-13 text-white text-sm rounded hover:cursor-pointer">Hapus</button></td>
                        </div>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TabelPresensi;

import { Plus } from "lucide-react";
import './TabelPresensi.css';

function TabelPresensi(){
    
    // Ambil elemen
    const openBtn = document.getElementById('openModal');
    const closeBtn = document.getElementById('closeModal');
    const modal = document.getElementById('myModal');

    // Tampilkan modal
    openBtn.addEventListener('click', ()=>{
        modal.classList.remove('hidden');
    });

    // Sembunyikan modal
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
    });

    // Klik di luar modal juga menutup modal
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
    return (
        <div>
            <div id="myModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden z-50">
                <div class="bg-white p-6 rounded shadow-lg w-96">
                <h2 class="text-xl font-semibold mb-4">Detail Presensi</h2>
                <div>
                    <table className="table-auto w-full">
                        <tr className="flex justify-between">
                            <td>Nama</td>
                            <td>Jees</td>
                        </tr>
                        <tr className="flex justify-between border-t">
                            <td>Jam Masuk</td>
                            <td>07:30</td>
                        </tr>
                        <tr className="flex justify-between border-t">
                            <td>Jam Pulang</td>
                            <td>16:00</td>
                        </tr>
                        <tr className="flex justify-between border-t">
                            <td>Status Presensi</td>
                            <td>Hadir</td>
                        </tr>
                        <tr className="flex justify-between border-t">
                            <td>Keterangan :</td>
                        </tr>
                        <tr className="flex justify-between text-start">
                            <td>
                                Tepat Waktu adalah sikap yang patut dicontoh oleh banyak orang
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="flex justify-end">
                    <button id="closeModal" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                    Tutup
                    </button>
                </div>
                </div>
            </div>

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
                            <td><button id="openModal" type="button" className="detail bg-gray-500 w-13 text-white text-sm rounded hover:cursor-pointer">Detail</button></td>
                            <td><button type="button" className=" bg-green-500 w-13 text-white text-sm rounded hover:cursor-pointer">Edit</button></td>
                            <td><button type="button" className=" bg-red-500 w-13 text-white text-sm rounded hover:cursor-pointer">Hapus</button></td>
                        </div>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TabelPresensi;

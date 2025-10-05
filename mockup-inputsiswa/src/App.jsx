import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  return (
    <>
      <div id="input-siswa" >

        <form action="">
          <fieldset class="fieldset">

              <h2>Form Input Siswa</h2>

              <div id="input-container">
                <label htmlFor="nis">NIS</label> 
                <br />
                <input type="text" id="nis" placeholder=' nis' />
                <p></p>
                <label htmlFor="nis">Nama</label>
                <br />
                <input type="text" id="nama" placeholder=' nama' />
                <p></p>
                <label htmlFor="jurusan">Jurusan</label>
                <br />
                <input type="text" id="jurusan" placeholder=' jurusan' />
                <p></p>
                <div class="submit-container">
                <input type="submit" name="submit" value="Simpan" class="submit"/>
                </div>
              </div>
          </fieldset>
        </form>

      </div>
    </>
  )
}

export default App

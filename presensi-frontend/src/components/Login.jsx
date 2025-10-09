import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { error } from "jquery";

let data = [{username:"Jees", password:"jees123", role:"Siswa"}];

const Login = () => {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: ""
  });

  const [err, setErr] = useState({
    username:"",
    password:"",
    role:""
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = formData.username;
    let pass = formData.password;
    let rl = formData.role;
    let errors = err;

    if(user !== data[0].username){
        errors.username = "user tidak ditemukan";
    }else if(pass !== data[0].password){
        errors.password = "username dan/atau password salah"
    }
    setErr(errors);
    let formValid = true;
    for (let properti in errors){
        if(errors[properti].length >= 1){
            formValid = false;
            alert(`${errors[properti]}`);
            return;
        }
    }

    if(formValid){
            alert(`Login sebagai ${formData.role || "?"}`);
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white backdrop-blur-md rounded-2xl shadow-2xl w-auto p-8">
        <h1 className="text-xl font-bold text-center text-indigo-500 mb-8">
          Login User
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          {/* Username */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Masukkan username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
            {err.username && (
                <p className="text-red-500" >{err.username}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Masukkan password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-indigo-600"
              >
                {showPassword ? (
                  <EyeOffIcon className="w-5 h-5" />
                ) : (
                  <EyeIcon className="w-5 h-5" />
                )}
              </button>
            </div>
            {err.password && (
                <p className="text-red-500" >{err.password}</p>
            )}
          </div>

          {/* Role */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            >
              <option value="">Pilih Role</option>
              <option value="Siswa">Siswa</option>
              <option value="Pegawai">Pegawai</option>
              <option value="Admin">Admin</option>
            </select>
            {err.role && (
                <p className="text-red-500" >{err.role}</p>
            )}
          </div>

          {/* Tombol Login */}
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition-all shadow-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

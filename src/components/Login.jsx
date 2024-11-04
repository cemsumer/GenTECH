import './Login.css';
import Navbar from "./Navbar/Navbar";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [apiResponse, setApiResponse] = useState(null);
  const navigate = useNavigate();

  async function registerUser(name, email, password) {
    try {
      const response = await fetch('APIIIIIIIIIIIIIIIIIIIIIIIIIII', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Kayıt İşlemi Başarısız Oldu!');
      }
      const data = await response.json();
      setApiResponse(data);
      localStorage.setItem('userId', data.userId.toString());
      localStorage.setItem('userName', data.userName);

      // Kullanıcı başarılı bir şekilde kaydolduğunda yönlendirme
      navigate('/home');
    } catch (error) {
      console.error(error);
    }
  }

  async function addEducationRelations(userId, eduIds) {
    try {
      const promises = eduIds.map(async (eduId) => {
        const response = await fetch('APIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            eduId,
            userId,
            RelStatus: ""
          }),
        });

        if (!response.ok) {
          throw new Error(`API ERROR`);
        }

        const data = await response.json();
        return data;
      });

      await Promise.all(promises);
    } catch (error) {
      console.error('API ERROR', error);
    }
  }

  async function loginUser(email, password) {
    try {
      const response = await fetch('APIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      if (data.userId === 0) {
        throw new Error('Giriş yapılamadı.');
      }

      setApiResponse(data);

      localStorage.setItem('userId', data.userId.toString());
      localStorage.setItem('userName', data.userName);
      window.location.href = '/home';
    } catch (error) {
      console.error(error);
      alert('Giriş yapılamadı. Lütfen e-posta adresinizi ve şifrenizi kontrol edin.');
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    const newName = e.target.ad.value + " " + e.target.soyad.value;
    const newEmail = e.target.email.value;
    const newPassword = e.target.passw.value;

    await registerUser(newName, newEmail, newPassword);
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const newEmail = e.target.email.value;
    const newPassword = e.target.passw.value;

    await loginUser(newEmail, newPassword);
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#a1a1a1]">
        <div id="animatedpart" className="loginpage">
          <input type="checkbox" id="chk" aria-hidden="true" />
          <div className="signup">
            <form onSubmit={handleRegister}>
              <label className="girislabel" htmlFor="chk" aria-hidden="true">Sign Up</label>
              <input className="girisinput" type="text" name="ad" placeholder="Name" required />
              <input className="girisinput" type="text" name="soyad" placeholder="Surname" required />
              <input className="girisinput" type="email" name="email" placeholder="Email" required />
              <input className="girisinput" type="password" name="passw" placeholder="Password" required />
              <button className="girisbutton">Sign Up</button>
            </form>
          </div>

          <div className="login">
            <form onSubmit={handleLogin}>
              <label className="girislabel" htmlFor="chk" aria-hidden="true">Sign In</label>
              <input className="girisinput" type="email" name="email" placeholder="Email" required />
              <input className="girisinput" type="password" name="passw" placeholder="Password" required />
              <button className="girisbutton">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
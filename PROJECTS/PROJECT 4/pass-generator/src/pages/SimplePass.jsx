import React, { useState } from 'react'

export default function SimplePass() {
    const [password, setPassword] = useState("");

  const generatePassword = () => {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let newPassword = "";
    for (let i = 1; i <=8; i++) {  // Generates a password of length 8
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomIndex];
    }
    setPassword(newPassword);
  };

  return (
    <div className="App h-64 w-96 border-2 m-auto mt-9 bg-cyan-400 flex flex-col justify-center justify-evenly items-center ">
      <h2 className='w-52 text-center'>Password Generator</h2>
      <button onClick={generatePassword} className='w-52 h-9 bg-red-600 border-none text-white text-lg'>Generate Password</button>
      {password && (
        <div className='w-52'>
          <p className='w-56 h-7 bg-white text-center'>Your Password: {password}</p>
        </div>
      )}
    </div>
  );
}

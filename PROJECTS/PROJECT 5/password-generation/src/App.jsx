import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  let [length, setLength] = useState(5);
  let [num, setNum] = useState(false);
  let [char, setChar] = useState(false);
  let [pass, setPass] = useState("");
  let passWordGen = useRef(null);

  let passGen = useCallback(() => {
    let password =" ";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (num) {
      string += "0123456789";
    }
    if (char) {
      string += "!@#$%^&*-_+=[]{}~`";
    }
    for (let i = 0; i < length; i++) {
      let gen = Math.floor(Math.random() * string.length + 1)
      password += string.charAt(gen);
    }
    setPass(password);
  }, [length, num, char]);

  useEffect(() => {
    passGen()
  }, [length, char, num, setPass, passGen])

  let copyText = useCallback(()=>{
      passWordGen.current?.select(
        passWordGen.current?.setSelectionRange(0,10),
        window.navigator.clipboard.writeText(pass)
      )
  },[pass])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-yellow-500">
        <h1 className="text-3xl text-center text-white">PASSWORD GENRATION</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passWordGen}
          />
          <button className="outline-none bg-green-500 text-white px-3 py-0.5 shrink-0" onClick={copyText}>
            Copy
          </button>
        </div>

        <div className="flex text-sm  gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              name=""
              id=""
              min={5}
              max={100}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value)
              }}
            />
            <label htmlFor="">Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name=""
              id="numberInput"
              defaultChecked={num}
              onChange={() => {
                setNum((prev) =>!prev)
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name=""
              id="characterInput"
              defaultChecked={char}
              onChange={() => {
                setChar((prev) =>!prev)
              }}
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

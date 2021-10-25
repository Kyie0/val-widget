import { useRouter } from 'next/router'

export default function Input(){
    
    const Router = useRouter();
    
    let click = () =>{
      let data = document.querySelector("#username").value.split("#")
      let username = data[0]
      let tag = data[1]
      let region = document.querySelector("#dropdown").value
      Router.push({
        pathname: `[region]/[username]/[tag]`,
        query: { region: region, username: username, tag: tag },
      })}

    return(
        <>
        <div id="inputWrapper" className="bg-indigo-50 max-w-sm mx-auto rounded-xl shadow-lg w-auto">
        <div id="inputTitle" className="flex justify-center items-center py-2 p-4">
          <h1 className="font-bold text-gray-800 text-3xl">
            Enter Username
          </h1>
        </div>
        <div id="inputBoxWrapper" className="flex justify-center items-center py-2 p-4">
        <select id="dropdown"className ="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight">
            <option value="na">NA</option>
            <option value="eu">EU</option>
            <option value="ap">AP</option>
            <option value="kr">KR</option>
            </select>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="Username#NA1" autoComplete="off">
          </input>
        </div>
        <div id="buttonWrapper" className="flex justify-center items-center p-4">
            <button onClick={click} id="buttonInput" className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
              Generate
            </button>
          </div>
        </div>
        </>
    );
}
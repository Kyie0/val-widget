import { useClientRouter } from "use-client-router";

export default function Custom404() {
  const router = useClientRouter();
      let click = () =>{
        router.push('/')
      }
      return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div>
          <img src= "/assets/errorGif.gif"
              alt='Error Gif'
              className="h-60 rounded-xl"
          />
          <h1 className="text-3xl font-bold text-center m-4">Player not Found</h1>
          <div className="flex justify-center items-center">
            <button onClick={click} className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
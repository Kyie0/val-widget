
export default function Logo(){
    return(
        <>
        <div id="imageWrapper" className="flex justify-center items-center">
        <img 
        src="/assets/logo.png"
        id="logo" 
        alt='valorant widget logo' 
        className="h-64" 
        />
      </div>
      <div id="textWrapper" className="text-center m-4">
        <h1 id="title" className="text-5xl font-bold">
          Valorant Overlay
        </h1>
        <h3 id="desc" className="text-lg font-medium m-6">
          A Valorant Rank Overlay that uses browser source
        </h3>
      </div>
      </>
    );
}
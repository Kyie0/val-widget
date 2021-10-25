export default function Footer() {

    return (
        <footer >
        <div className="flex justify-center">
            <p className="m-4 font-medium fixed bottom-0">
              Made and Designed By <span className="text-blue-600 font-bold">Kyie0</span>🎨
            </p>
        </div>
        <div className="flex justify-end">
            <div className="fixed bottom-0 flex">
             <img 
             src= "/assets/githublogo.png"
             alt='github icon'
             className="h-12 m-4" />
            </div>
        </div>
      </footer>
    )

}
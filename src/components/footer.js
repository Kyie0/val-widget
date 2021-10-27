import { Link } from '@nextui-org/react';
export default function Footer() {

    return (
        <footer >
        <div className="m-4 flex justify-center w-auto">
            <p className="m-4 font-medium bottom-0 ">
              Made and Designed By <Link color className="font-bold"href="https://twitter.com/kyIe0" icon>Kyie0</Link>🎨 
            </p>
        </div>
        <div className="flex justify-center items-center">
          <a href="https://github.com/Kyie0/val-widget">
            <img 
             src= "/assets/githublogo.png"
             alt='github icon'
             className="h-8" 
             />
          </a>
        </div>
      </footer>
    )

}
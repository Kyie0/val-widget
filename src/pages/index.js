import Logo from '../components/logo'
import Preview from '../components/preview'
import Input from '../components/input'
import Footer from '../components/footer'
import { Toaster } from 'react-hot-toast';



export default function Home() {
  return (
    <div className="app">
      <Logo />
      <Preview />
      <Input />
      <Footer/>
      <Toaster   
      position="bottom-right"
      reverseOrder={false}
      toastOptions={{
        error: {
          style: {
            background: '#ff6b6b',
            color: '#ffffff'
          },
        },
      }}/>
    </div>
  )
}

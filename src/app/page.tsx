import './globals.css'
import LaptopModel from '../components/LaptopModel';

function Header () {
  return(
      <header className='w-full p-4 z-10 bg-gray-500'>
        <nav className='flex justify-between mx-auto container'>
          <div className='text-4xl' >&lt;Nobuhiro/&gt;</div>
          <div>
            <a href='' className='text-4xl px-5'>Home</a>
            <a href='' className='text-4xl px-5'>About</a>
            <a href='' className='text-4xl px-5'>Projects</a>
          </div>
        </nav>
      </header>
  )
}
export default function Home() {
  return (
    <>
    <div>
      <Header/>
      <div className='relative'>
        <div className='absolute'>
          <div className=' mt-20 flex'>
            <p className='m-4 mr-12'>
              <div className='text-white text-9xl m-2'>Hi,I am</div>
              <div className='text-white text-7xl m-2'>Nobuhiro Yokota</div>
              <div className='text-green-400 text-3xl m-2'>&lt;Frontend Web Devlopment/&gt;</div>
            </p>
            <LaptopModel/>
          </div>
        </div>
      <img
        src="/img/black_00077.jpg" 
        alt="背景画像"
        className="w-full h-[800px] object-cover"
      />
      </div>
    </div>

    <div className='text-center p-5 text-4xl bg-gray-500'>About</div>
    <img
      src="/img/black_00077.jpg" 
      alt="背景画像"
      className="w-full h-[800px] object-cover"
      />
    </>
  );
}

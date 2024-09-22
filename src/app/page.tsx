import './globals.css'

function Header () {
  return(
      <header className='w-full p-4 z-10'>
        <nav className='flex justify-between mx-auto container'>
          <div className='text-4xl' >&lt;Nobuhiro/&gt;</div>
          <div>
            <a href='' className='text-4xl px-5'>Home</a>
            <a href='' className='text-4xl px-5'>Aboutme</a>
            <a href='' className='text-4xl px-5'>Projects</a>
          </div>
        </nav>
      </header>
  )
}
export default function Home() {
  return (
    <>
    <div className=''>
      <Header/>
      <div className='relative'>
        <div className='absolute mt-20'>
         <div className=' text-white text-9xl m-2'>Hi,I'm</div>
          <div className='text-white text-7xl m-2'>Nobuhiro Yokota</div>
          <div className='text-green-400 text-3xl m-2'>&lt;Frontend Web Devlopment/&gt;</div>
        </div>
      <img
         src="/img/black_00077.jpg" 
         alt="背景画像"
         className="w-full h-full object-cover"
         />
      </div>
    </div>
    </>
  );
}

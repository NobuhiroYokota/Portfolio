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
            <a href='' className='text-4xl px-5'>Skills</a>
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
          <div className='mt-20 flex'>
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
        className="w-full h-[700px] object-cover"
      />
      </div>
    </div>
    <About />
    <Skills/>
    <Projects/>
    </>
  );
}

function About () {
  return (
    <>
    <div className='text-center p-5 text-4xl bg-gray-500'>About</div>
    <div className='relative'>
      <div className='absolute w-full flex justify-center'>
        <div className='flex space-x-40'>
        {/* アイコン */}
          <div id="item1" className='text-center my-20'>
            <img
              src='/img/usericon.png'
              alt='Usericon'
              className='w-[170px] h-[170px] mb-5'
            />
            <div className='flex justify-center space-x-16 mt-2'>
              <a href='https://x.com/nobu_front'>
                <img
                  src='/img/logo-white.png'
                  alt='Xicon'
                  className='w-[50px] h-[50px]'
                  />
              </a>
              <a href='https://github.com/NobuhiroYokota'>
                <img
                  src='/img/giticon.png'
                  alt='Giticon'
                  className='w-[50px] h-[50px]'
                  />
              </a>
            </div>
          </div>
          {/* 経験 */}
          <div id='item2' className='mt-20'>
            <div className='text-2xl text-white p-4'>2022 - 04　芝浦工業大学 入学</div>
            <div className='text-2xl text-white p-4'>2026 - 03　芝浦工業大学 卒業見込み</div>
            <div className='text-2xl text-white p-4 mt-10'>インターン経験</div>
            <div className='text-2xl text-white p-4'>2024 - 08　株式会社TAIAN</div>
          </div>
        </div>
      </div>
    </div>

    <img
      src="/img/black_00077.jpg"
      alt="背景画像"
      className="w-full h-[450px] object-cover"
    />
    </>
  )
}

function Skills() {
  return (
    <>
      <div className="text-center p-5 text-4xl bg-gray-500">Skills</div>
      <div className="relative">
        {/* 画像の上に文字を配置 */}
        <img
          src="/img/black_00077.jpg"
          alt="背景画像"
          className="w-full h-[450px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="flex space-x-16 mt-10">
            {/* 各アイコンとその名前を中央揃え */}
            <div className="flex flex-col items-center">
              <img
                src="/img/HTML_logo.png"
                alt="HTML_Logo"
                className="w-[50px] h-[50px]"
              />
              <div className="text-white">HTML</div>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="/img/css_logo.png"
                alt="CSS_Logo"
                className="w-[50px] h-[50px]"
              />
              <div className="text-white">CSS</div>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="/img/javascript_logo.png"
                alt="Javascript_Logo"
                className="w-[50px] h-[50px]"
              />
              <div className="text-white">Javascript</div>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="/img/typescript_logo.png"
                alt="Typescript_Logo"
                className="w-[50px] h-[50px]"
              />
              <div className="text-white">Typescript</div>
            </div>
          </div>

          <div className='flex space-x-16 mt-10'>
            <div className="flex flex-col items-center">
              <img
                src="/img/React_logo.svg"
                alt="React_Logo"
                className="w-[50px] h-[50px]"
              />
              <div className="text-white">React</div>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="/img/GraphQL_logo.svg"
                alt="GraphQL_Logo"
                className="w-[50px] h-[50px]"
              />
              <div className="text-white">GraphQL</div>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="/img/Firebase_logo.png"
                alt="Firebase_Logo"
                className="w-[50px] h-[50px]"
              />
              <div className="text-white">Firebase</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Projects () {
  return (
    <>
    </>
  )
}


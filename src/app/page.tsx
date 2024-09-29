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
            <div className='m-4 mr-12'>
              <div className='text-white text-9xl m-2'>Hi,I am</div>
              <div className='text-white text-7xl m-2'>Nobuhiro Yokota</div>
              <div className='text-green-400 text-3xl m-2'>&lt;Frontend Web Devlopment/&gt;</div>
            </div>
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

function Projects() {
  return (
    <>
      <div className="text-center p-5 text-4xl bg-gray-500">Projects</div>

      <div className="relative w-full h-[450px]">
        {/* 背景画像 */}
        <img
          src="/img/black_00077.jpg"
          alt="背景画像"
          className="w-full h-full object-cover"
        />

        {/* カードデザイン - 2つのカードを配置 */}
        <div className="absolute inset-0 flex justify-center items-center space-x-8">
          {/* カード1 */}
          <div className="bg-[#1d1d1d] border border-gray-400 rounded-lg shadow-lg w-[300px] h-[400px] text-white flex flex-col">
            {/* カード画像 */}
            <img
              src="/img/CreateBackground.png"
              alt="CreateBackground"
              className="w-[300px] h-[160px] rounded-t-lg object-cover"
            />
            {/* 文字部分 */}
            <div className="p-5 flex-grow">
              <div className="text-center text-2xl">CreateBackground</div>
              <p className="mt-3 text-center">
                ユーザに名前やXのidなど、任意の情報を入力させ、Zoomなどで利用できるバーチャル背景を作成するサービスです。
              </p>
            </div>
          </div>

          {/* カード2 */}
          <div className="bg-[#1d1d1d] border border-gray-400 rounded-lg shadow-lg w-[300px] h-[400px] text-white flex flex-col">
            {/* カード画像 */}
            <img
              src="/img/OnsenHub.png"
              alt="OnsenHub"
              className="w-[300px] h-[160px] rounded-t-lg object-cover"
            />
            {/* 文字部分 */}
            <div className="p-5 flex-grow">
              <div className="text-center text-2xl">-OnsenHub(開発中)-</div>
              <p className="mt-3 text-center">
                AIを用いることにより、どんな温泉に行きたいかを、対話形式で答えることにより、あなたに合った温泉を提供します
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



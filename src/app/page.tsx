import './globals.css'
import Image from 'next/image';
import LaptopModel from '../components/LaptopModel';

import BackgrouondImg from '../../public/img/black_00077.jpg'
import User_icon from '../../public/img/User_icon.png'
import X_logo from '../../public/img/X_logo.png'
import Git_logo from '../../public/img/Git_logo.png'
import HTML_logo from '../../public/img/HTML_logo.png'
import CSS_logo from '../../public/img/CSS_logo.png'
import Javascript_logo from '../../public/img/Javascript_logo.png'
import Typescript_logo from '../../public/img/Typescript_logo.png'
import React_logo from '../../public/img/React_logo.svg'
import Firebase_logo from '../../public/img/Firebase_logo.png'
import GraphQL_logo from '../../public/img/GraphQL_logo.svg'
import CreateBackgroundImg from '../../public/img/CreateBackground.png'
import OnsenHubImg from '../../public/img/OnsenHub.png'

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
      <Image
        src={BackgrouondImg}
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
            <Image
              src={User_icon}
              alt='Usericon'
              className='w-[170px] h-[170px] mb-5'
            />
            <div className='flex justify-center space-x-16 mt-2'>
              <a href='https://x.com/nobu_front'>
                <Image
                  src={X_logo}
                  alt='Xicon'
                  className='w-[50px] h-[50px]'
                  />
              </a>
              <a href='https://github.com/NobuhiroYokota'>
                <Image
                  src={Git_logo}
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

    <Image
      src={BackgrouondImg}
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
        <Image
          src={BackgrouondImg}
          alt="背景画像"
          className="w-full h-[450px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="flex space-x-16 mt-10">
            {/* 各アイコンとその名前を中央揃え */}
            <div className="flex flex-col items-center">
              <Image
                src={HTML_logo}
                alt="HTML_Logo"
                className="w-[50px] h-[50px]"
              />
              <div className="text-white">HTML</div>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src={CSS_logo}
                alt="CSS_Logo"
                className="w-[50px] h-[50px]"
              />
              <div className="text-white">CSS</div>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src={Javascript_logo}
                alt="Javascript_Logo"
                className="w-[50px] h-[50px]"
              />
              <div className="text-white">Javascript</div>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src={Typescript_logo}
                alt="Typescript_Logo"
                className="w-[50px] h-[50px]"
              />
              <div className="text-white">Typescript</div>
            </div>
          </div>

          <div className='flex space-x-16 mt-10'>
            <div className="flex flex-col items-center">
              <Image
                src={React_logo}
                alt="React_Logo"
                className="w-[50px] h-[50px]"
              />
              <div className="text-white">React</div>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src={GraphQL_logo}
                alt="GraphQL_Logo"
                className="w-[50px] h-[50px]"
              />
              <div className="text-white">GraphQL</div>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src={Firebase_logo}
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
        <Image
          src={BackgrouondImg}
          alt="背景画像"
          className="w-full h-full object-cover"
        />

        {/* カードデザイン - 2つのカードを配置 */}
        <div className="absolute inset-0 flex justify-center items-center space-x-8">
          {/* カード1 */}
          <div className="bg-[#1d1d1d] border border-gray-400 rounded-lg shadow-lg w-[300px] h-[400px] text-white flex flex-col">
            {/* カード画像 */}
            <Image
              src={CreateBackgroundImg}
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
            <Image
              src={OnsenHubImg}
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



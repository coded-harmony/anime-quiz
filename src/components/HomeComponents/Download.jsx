import Image from 'next/image';
import Card from '../../../public/images/quiz-card-img.png';
import GooglePlay from '../../../public/images/google-play-sm.png';
import AppStore from '../../../public/images/app-store-sm.png';

export default function Download() {


  return (
    <main className='mb-[100px]'>
      <h2 className="text-center mb-24 max-sm:mb-16"> Download App</h2>
      <div className="bg-download-bg max-sm:py-10">
        <div className="container grid grid-cols-[55%_1fr] items-center gap-20 pt-3 max-sm:grid-cols-1 max-sm:text-center">
          <div className="">
            <h3 className='mb-2'>Download App Now</h3>
            <h4 className='mb-2 font-medium'>Our latest Version app</h4>
            <p className='mb-7 opacity-50'>Dive into the ultimate anime trivia experience with Anime Quiz! Challenge friends, earn coins, customize your avatar, and become the anime quiz master. With 1 vs 1 battles, daily challenges, and exciting rewards, there’s something for every anime fan. Join thousands of players worldwide and start proving your knowledge today!"</p>
            <div className="flex items-center justify-start gap-3 max-sm:justify-center">
              <a href="#">
                <Image src={GooglePlay} alt='icon' />
              </a>
              <a href="#">
                <Image src={AppStore} alt='icon' />
              </a>
            </div>
          </div>
          <div className="">
            <Image className='max-sm:mx-auto' src={Card} alt='img' />
          </div>
        </div>
      </div>
    </main>
  );
}

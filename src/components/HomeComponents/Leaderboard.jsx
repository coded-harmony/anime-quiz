import Image from 'next/image';
import Board from '../../../public/images/board.png';

export default function Leaderboard() {


  return (

    <main className='mb-[200px] max-sm:mb-32'>
      <div className="container">
        <h2 className="text-center mb-24 max-sm:mb-16"> Leaderboards</h2>
        <div className="grid grid-cols-[50%_1fr] items-center gap-20 max-sm:grid-cols-1 max-md:gap-0">
          <div className="max-sm:text-center">
            <h3 className='mb-6'>Compete and Show Off Your Knowledge</h3>
            <p className='opacity-50'>Push your anime knowledge to the top! With Anime Quiz’s global leaderboard, you can see how you rank among fans from around the world. Win battles, earn points, and climb the ranks to become the ultimate anime trivia champion! Stay engaged by unlocking special achievements as you play—each one a testament to your mastery over specific quiz categories, like classic series or trending anime. Achievements not only boost your profile but also reward you with unique bonuses and exclusive items for avatar customization.</p>
          </div>
          <div className="">
            <Image src={Board} alt='img' />
          </div>
        </div>
      </div>
    </main>
  );
}

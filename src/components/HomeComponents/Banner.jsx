import Image from 'next/image';
import GooglePlay from '../../../public/images/google-play-btn.png';
import AppStore from '../../../public/images/app-store.png';



export default function Banner() {
    return (
        <main className='bg-banner-bg bg-cover pt-[600px] pb-24 mb-[150px] max-sm:mb-20'>
            <div className="z-10"></div>
            <div className="container text-center z-20">
                <h1 className='mb-3'>Welcome to Anime Quiz!</h1>
                <h3 className='mb-12'>Face off in exciting 1 vs 1 anime trivia matches, earn rewards, and show your fandom on the global leaderboard!</h3>
                <div className="flex items-center justify-center gap-3">
                    <a href="#">
                        <Image src={GooglePlay} alt='icon'/>
                    </a>
                    <a href="#">
                        <Image src={AppStore} alt='icon'/>
                    </a>
                </div>
            </div>
        </main>
    );
}

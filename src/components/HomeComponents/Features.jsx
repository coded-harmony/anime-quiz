import Image from 'next/image';
import Check from '../../../public/images/icons/check-icon.svg';

export default function Features() {
  const features = [
    {
      title: "1 vs 1 Anime Battles",
      description:
        "Challenge friends or other anime fans in real-time quiz battles. Test your knowledge in head-to-head matches and climb the leaderboard!",
    },
    {
      title: "Earn Coins & Rewards",
      description:
        "Win coins with every match, complete daily challenges, and unlock special rewards and exclusive content.",
    },
    {
      title: "Variety of Quiz Categories",
      description:
        "Explore a range of anime-themed quiz categories, from classic series to the latest releases. Choose your favorite topics and start quizzing!",
    },
    {
      title: "Customizable Avatars",
      description:
        "Personalize your profile with unique avatars and styles. Show off your fandom with character-inspired outfits and accessories!",
    },
    {
      title: "Daily Challenges",
      description:
        "Take on daily challenges and participate in special events for extra rewards. Stay engaged with fresh, exciting content!",
    },
    {
      title: "Leaderboards & Achievements",
      description:
        "Track your progress and see how you rank against other players. Unlock achievements to showcase your anime expertise!",
    },
  ];

  return (
    <main className='mb-[200px] max-sm:mb-32' id="feature"> 
      <div className="container mx-auto ">
        <h2 className="text-center mb-24 max-sm:mb-16">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-[50px] max-sm:gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-10 max-sm:space-x-5">
              <Image src={Check} alt='icon' />
              <div>
                <h3 className="font-semibold mb-4 max-sm:mb-2">{feature.title}</h3>
                <p className="opacity-50">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>

  );
}

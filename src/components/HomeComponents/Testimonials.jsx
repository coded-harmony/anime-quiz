import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import client1 from '../../../public/images/boy.png';
import client2 from '../../../public/images/girl.png';
import client3 from '../../../public/images/boy.png';
import Star from '../../../public/images/icons/star.svg';

const clients = [
    {
        image: client1,
        name: 'Darrell Steward',
        review: 'This app is amazing! The quizzes are challenging and fun, and I love showing off my knowledge in 1 vs 1 battles. A must-have for anime fans!',
    },
    {
        image: client2,
        name: 'Ronald Richards',
        review: 'The avatar customization is so cool, and the quizzes cover every anime I love. Playing with friends is a blast!',
    },
    {
        image: client1,
        name: 'Jacob Jones',
        review: 'The rewards and leaderboard make this app super addictive! Ive discovered so much about anime, and it’s always fun to play.',
    },
    {
        image: client1,
        name: 'Darrell Steward',
        review: 'This app is amazing! The quizzes are challenging and fun, and I love showing off my knowledge in 1 vs 1 battles. A must-have for anime fans!',
    },
];

const Testimonials = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        draggable: true,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <main className='mb-[200PX] max-sm:mb-32'>
            <div className="container max-sm:text-center">
                <h2 className="mb-24 text-center max-sm:mb-16 ">Testimonials</h2>
                <Slider {...settings}>
                    {clients.map((client, index) => (
                        <div key={index} data-aos="fade-up">
                            <Image src={client.image} alt='img' className="w-[73px] h-[73px] rounded-full mb-3 max-sm:mx-auto" />
                            <div className="flex items-center gap-1 mb-3 max-sm:justify-center">
                                <Image src={Star} alt='img' />
                                <Image src={Star} alt='img' />
                                <Image src={Star} alt='img' />
                                <Image src={Star} alt='img' />
                                <Image src={Star} alt='img' />
                            </div>
                            <h3 className='mb-4'>{client.name}</h3>
                            <p className="opacity-50">{client.review}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </main>
    );
};

export default Testimonials;

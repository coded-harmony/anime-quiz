import Image from 'next/image';
import Logo from '../../../public/images/footer-logo.svg';

const Footer = () => {
    return (
        <footer className="pt-20 pb-8 text-left bg-[#17183E] max-sm:pt-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center gap-9 max-sm:flex-col">
                    <Image className='max-sm:mx-auto' src={Logo} alt="Startify Logo" />
                    <div className="flex items-center flex-wrap gap-20 text-[16px] font-semibold max-sm:flex-col max-sm:items-center max-md:gap-8">
                        <a href="#">Home</a>
                        <a href="#">Features</a>
                        <a href="#">Download</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Term & Service</a>
                    </div>
                </div>
                {/* Divider */}
                <div className="border-t border-[#6A6B84] mb-8 mt-16"></div>
                {/* Footer Text */}
                <p className="text-lg opacity-50 max-sm:text-center">&copy; Startify 2024. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;

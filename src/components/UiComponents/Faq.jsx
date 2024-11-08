import { useState } from 'react';
import Image from 'next/image';
import AngleDown from '../../../public/images/icons/angle-down.svg';

const faqData = [
    {
        question: "What is Anime Quiz?",
        answer: "What is Anime Quiz?",
        img: AngleDown,
    },
    {
        question: "Is Anime Quiz free to play?",
        answer: "Is Anime Quiz free to play?",
        img: AngleDown,
    },
    {
        question: "How do I earn coins and rewards?",
        answer: "How do I earn coins and rewards?",
        img: AngleDown,
    },
    {
        question: "What anime categories are available?",
        answer: "What anime categories are available?",
        img: AngleDown,
    },
    {
        question: "How does the 1 vs 1 battle work?",
        answer: "How does the 1 vs 1 battle work?",
        img: AngleDown,
    },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main>
            <div className="faq relative mb-[150px] max-sm:mb-32 max-sm:px-3">
                <div className="max-w-[760px] mx-auto">
                    <h2 className="mb-[100px] text-center max-sm:mb-16">Frequently Asked Question (FAQs)</h2>
                    <div className="w-full">
                        {faqData.map((item, index) => (
                            <div key={index} className="bg-[#292A45] rounded-[8px] p-6 mb-4">
                                <div 
                                    onClick={() => toggleAccordion(index)} 
                                    className="flex justify-between gap-10 items-center cursor-pointer max-sm:items-start"
                                >
                                    <h3 className="font-bold lato">{item.question}</h3>
                                    <div 
                                        className={`bg-white min-w-[50px] min-h-[50px] rounded-full flex items-center justify-center max-sm:min-w-8 max-sm:min-h-8 transition-transform duration-300 ${
                                            openIndex === index ? 'rotate-180' : ''
                                        }`}
                                    >
                                        <Image src={item.img} alt="icon" />
                                    </div>
                                </div>
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out max-h-0 ${openIndex === index ? 'max-h-[400px] mt-5' : ''}`}
                                >
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Faq;

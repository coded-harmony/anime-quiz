import Banner from "@/components/HomeComponents/Banner";
import Download from "@/components/HomeComponents/Download";
import Features from "@/components/HomeComponents/Features";
import Leaderboard from "@/components/HomeComponents/Leaderboard";
import Testimonials from "@/components/HomeComponents/Testimonials";
import Faq from "@/components/UiComponents/Faq";
import Footer from "@/components/UiComponents/Footer";
import Header from "@/components/UiComponents/Header";

export default function Home() {
    return (
        <main>
            <Header/>
            <Banner/>
            <Features/>
            <Testimonials/>
            <Leaderboard/>
            <Download/>
            <Faq/>
            <Footer/>
        </main>
    );
}

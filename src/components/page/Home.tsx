import Header from "../complete-component/Header";
import Navbar from "../complete-component/Navbar";
import Illustration from "../complete-component/Illustration";
import BigCard from "../short-components/BigCard";
import Details from "../complete-component/Details";
import Features from "../complete-component/Features";
import Footer from "../complete-component/Footer";
function Home(){
    return (
        <>
            <Navbar />
            <Header />
            <Illustration />
            <BigCard />
            <Details />
            <Features/>
            <Footer/>
        </>
    )
}
export default Home;

import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Spots from "./Components/Spots";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Spots></Spots>
        </div>
    );
};

export default Home;
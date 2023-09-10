import Head from '../component/Head';
import Swiper from '../component/SwiperContainer';
import Footer from '../component/Footer';
import Category from '../component/Category';
import Minibanner from '../component/Minibanner';
import KnowHow from '../component/KnowHow';
import Cleaning from '../component/Cleaning';
import Hobby from '../component/Hobby';
import PleaseEmployment from '../component/PleaseEmployment';
import Fix from '../component/Fix';
import LocationNav from '../component/LocationNav';
import MainServiceList from '../component/MainServiceList';
import SignUpPro from '../component/SignUpPro';

function Home(){
    return(
        <div>
            <Head />
            <Swiper />
            <Category />
            <Minibanner />
            <KnowHow />
            <MainServiceList />
            <Cleaning />
            <Hobby />
            <PleaseEmployment />
            <Fix />
            <LocationNav />
            <SignUpPro />
            <Footer />
        </div>
    );
}

export default Home;
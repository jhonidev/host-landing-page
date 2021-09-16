import Dashboard from '../components/dashboard';
import Features from '../components/features';
import Footer from '../components/footer';
import Header from '../components/header';
import Interested from '../components/interested';
import Stats from '../components/stats';
import Uptime from '../components/uptime';

function Landing() {

    return (
        <>
        <Header />
        <Features />
        <Uptime />
        <Stats />
        <Dashboard />
        <Interested />
        <Footer />
        </>
    )

}

export default Landing;
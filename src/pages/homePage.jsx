import MainLayout from "../layouts/mainLayout"
import Hero from "../sections/hero";
import AboutMe from "../sections/about";
import Services from "../sections/services";
import Discuss from "../sections/discuss";

function HomePage () {
    return (
        <MainLayout>
            <Hero />
            <AboutMe />
            <Services />
            <Discuss />
        </MainLayout>
    )
}

export default HomePage;
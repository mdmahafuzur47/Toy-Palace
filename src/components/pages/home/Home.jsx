
import useTitle from "../../../hooks/useTitle";
import Banner from "../../shared/Banner";
import ClientReview from "../../shared/ClientReview";
import ContactUsPage from "../../shared/ContactUsPage";
import Categorys from "../../shared/categorys/Categorys";
import Gallery from "../../shared/gallery/Gallery";

const Home = () => {
    useTitle("Home")

    return (
        <div>
            <Banner />
            <Gallery />
            <Categorys />
            <ClientReview />
            <ContactUsPage />
        </div>
    );
};

export default Home;
import { Footer } from "../Footer";

interface HomeNewsProps {
    className?: string
}

const HomeNews: React.FC<HomeNewsProps> = ({className}) => {
    return (
        <div className={`w-full h-screen ${className}`}>
            Новости и обновления
            <Footer />
        </div>
    );
};

export default HomeNews;
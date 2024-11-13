import { Footer } from "../Footer";

interface HomeAboutProps {
    className?: string
}

const HomeAbout: React.FC<HomeAboutProps> = ({className}) => {
    return (
        <div className={`w-full h-screen ${className}`}>
            О приложении
            <Footer />
        </div>
    );
};

export default HomeAbout;
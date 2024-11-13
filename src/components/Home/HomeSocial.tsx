import { Footer } from "../Footer";

interface HomeSocialProps {
    className?: string
}

const HomeSocial: React.FC<HomeSocialProps> = ({className}) => {
    return (
        <div className={`w-full h-screen ${className}`}>
            Наши соцсети
            <Footer />
        </div>
    );
};

export default HomeSocial;
import { useState } from "react";

type Props = {
    src: string;
    alt?: string;
    className?: string;
    radius?: boolean;
};

const HeroImage = ({ src, alt, className, radius = false }: Props) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={`relative ${className}`}>

            {/* Skeleton */}
            {!loaded && (
                <div className="absolute inset-0 animate-pulse bg-gray-200 rounded-lg" />
            )}

            {/* Image */}
            <img
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)}
                className={`w-full h-full ${radius ? "rounded-lg" : ""} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"
                    }`}
            />
        </div>
    );
};

export default HeroImage;
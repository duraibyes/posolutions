type Props = {
    label: string;
    onClick?: () => void;
    isWidthFull?: boolean;
};

const PrimaryButton = ({ label, onClick, isWidthFull = true }: Props) => {
    return (
        <button
            onClick={onClick}
            className={`
                ${isWidthFull ? 'w-full' : 'w-auto px-6'}
            px-4 py-3
            text-lg text-white
            bg-primary
            rounded-md
             hover:bg-[#258181]
            transition-colors duration-300
          `}
        >
            {label}
        </button>
    );
};

export default PrimaryButton;

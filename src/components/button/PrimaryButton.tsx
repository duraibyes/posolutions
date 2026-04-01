type Props = {
    label: string;
    onClick?: () => void;
};

const PrimaryButton = ({ label, onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            className="
            w-full
            px-4 py-2
            text-lg text-white
            bg-primary
            rounded-md
             hover:bg-[#258181]
            transition-colors duration-300
          "
        >
            {label}
        </button>
    );
};

export default PrimaryButton;

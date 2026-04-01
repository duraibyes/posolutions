type SecondaryButtonProps = {
    label: string;
    onClick: () => void;
};

const SecondaryButton = ({ label, onClick }: SecondaryButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="
            w-full
            px-4 py-2
            text-lg text-[#0C7489]
            bg-white
            rounded-md
            hover:bg-[#F0F0F0]
            transition-colors duration-300
          "
        >
            {label}
        </button>
    );
};

export default SecondaryButton;

type SecondaryButtonProps = {
    label: string;
    onClick: () => void;
};

const SecondaryButton = ({ label, onClick }: SecondaryButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="
            w-full sm:w-fit
            px-6 py-2 font-semibold
            text-md text-[#0C7489]
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

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
          "
        >
            {label}
        </button>
    );
};

export default PrimaryButton;

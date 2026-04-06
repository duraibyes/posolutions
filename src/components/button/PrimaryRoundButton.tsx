
const PrimaryRoundButton = ({ label, onClick }: { label: string; onClick?: () => void }) => {
    return (
        <button
            className="text-sm px-12 py-4 border  border-white text-white rounded-full hover:bg-white hover:text-teal-600 transition font-medium whitespace-nowrap"
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default PrimaryRoundButton

const SecondaryRoundButton = ({ label, onClick }: { label: string; onClick?: () => void }) => {
    return (
        <button
            className="text-sm px-12 py-4 bg-white text-teal-600 rounded-full hover:bg-teal-50 transition font-medium whitespace-nowrap"
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default SecondaryRoundButton
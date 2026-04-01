
const PrimaryRoundButton = ({ label }: { label: string }) => {
    return (
        <button className="text-sm px-12 py-2 border  border-white text-white rounded-full hover:bg-white hover:text-teal-600 transition font-medium whitespace-nowrap">
            {label}
        </button>
    )
}

export default PrimaryRoundButton
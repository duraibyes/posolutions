
const SecondaryRoundButton = ({ label }: { label: string }) => {
    return (
        <button className=" text-sm px-12 py-4 bg-white text-teal-600 rounded-full hover:bg-teal-50 transition font-medium whitespace-nowrap">
            {label}
        </button>
    )
}

export default SecondaryRoundButton
type InputProps = {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    type?: string;
    error?: string;
};

const Input = ({
    label,
    name,
    value,
    onChange,
    placeholder,
    type = "text",
    error,
}: InputProps) => {
    return (
        <div>
            <label className="block text-sm font-medium mb-2">
                {label}
            </label>

            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`
          w-full px-4 py-3 rounded-xl border
          ${error ? "border-red-500" : "border-gray-200"}
          focus:outline-none focus:ring-2 focus:ring-[#0C7489]
        `}
            />

            {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
        </div>
    );
};

export default Input;
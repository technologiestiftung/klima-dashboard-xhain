type RadioButtonProps<T extends string> = {
	options: {
		value: T;
		label: string;
	}[];
	defaultValue: T;
	onSelectionChange: (value: T) => void;
	radioID: string;
};

export function RadioToggle<T extends string>({
	options,
	defaultValue,
	onSelectionChange,
	radioID,
}: RadioButtonProps<T>) {
	return (
		<div className="rounded-full bg-white flex w-fit p-0.5 gap-x-1 text-xhain-blue-50 font-bold">
			{options.map(({ value, label }) => (
				<label
					key={value}
					className={`
						px-2.5 py-1 rounded-full inline-flex text-center relative z-10 cursor-pointer
						has-[:focus]:outline has-[:focus]:outline-xhain-blue-80 has- has-[:checked]:bg-xhain-green-50 hover:bg-xhain-blue-20 
						`}
				>
					<input
						type="radio"
						value={value}
						name={radioID}
						className="appearance-none opacity-0"
						defaultChecked={defaultValue === value}
						onClick={() => onSelectionChange(value)}
					/>

					{label}
				</label>
			))}
		</div>
	);
}

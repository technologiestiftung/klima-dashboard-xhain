type RadioButtonProps<T extends string> = {
	options: {
		value: T;
		label: string;
	}[];
	defaultValue: T;
	onSelectionChange: (value: T) => void;
};

export function RadioToggle<T extends string>({
	options,
	defaultValue,
	onSelectionChange,
}: RadioButtonProps<T>) {
	return (
		<div className="rounded-full bg-white flex w-fit p-0.5 gap-x-1 text-xhain-blue-50 font-semibold">
			{options.map(({ value, label }) => (
				<label
					key={value}
					className={`
						px-2.5 py-1 rounded-full flex-1 text-center relative z-10 cursor-pointer
						has-[:focus]:outline has-[:focus]:outline-offset-4 has-[:focus]:outline-xhain-blue-80 has- has-[:checked]:bg-xhain-green-50 hover:bg-xhain-green-30
					`}
				>
					<input
						type="radio"
						value={value}
						name="radio"
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

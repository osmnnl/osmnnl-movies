import React from "react";
import { Select } from "antd";

const { Option } = Select;

interface SingleSelectProps {
	options: { value: string; label: string }[];
	placeholder?: string;
	value?: string;
	onChange: (value: string) => void;
	disabled?: boolean;
	className?: string;
}

const SingleSelect: React.FC<SingleSelectProps> = ({
	options,
	placeholder = "Please select",
	value,
	onChange,
	disabled = false,
	className,
}) => {
	return (
		<Select
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			disabled={disabled}
			className={className}
			style={{ width: "100%" }}
		>
			{options.map((option) => (
				<Option key={option.value} value={option.value}>
					{option.label}
				</Option>
			))}
		</Select>
	);
};

export default SingleSelect;

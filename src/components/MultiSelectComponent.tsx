import React from "react";
import { Select } from "antd";

const { Option } = Select;

interface MultiSelectProps {
	options: { value: string; label: string }[];
	placeholder?: string;
	value?: string[];
	onChange: (values: string[]) => void;
	disabled?: boolean;
	className?: string;
	allowClear?: boolean;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
	options,
	placeholder = "Please select",
	value = [],
	onChange,
	disabled = false,
	className,
	allowClear = false,
}) => {
	return (
		<Select
			mode="multiple"
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			disabled={disabled}
			className={className}
			allowClear={allowClear}
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

export default MultiSelect;

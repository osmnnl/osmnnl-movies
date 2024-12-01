import React from "react";
import { Select } from "antd";
import { useTranslation } from 'react-i18next';

const { Option } = Select;

interface SingleSelectProps {
	options: { value: string; label: string }[];
	placeholderKey?: string; 
	value?: string;
	onChange: (value: string) => void;
	disabled?: boolean;
	className?: string;
}

const SingleSelect: React.FC<SingleSelectProps> = ({
	options,
	placeholderKey = "select.placeholder",
	value,
	onChange,
	disabled = false,
	className,
}) => {
	const { t } = useTranslation();

	return (
		<Select
			value={value}
			onChange={onChange}
			placeholder={t(placeholderKey)}
			disabled={disabled}
			className={`w-p100 ${className}`}
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

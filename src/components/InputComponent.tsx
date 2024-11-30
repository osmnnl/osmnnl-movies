import React from "react";
import { Input } from "antd";

interface InputComponentProps {
	placeholder?: string;
	value?: string;
	onChange?: (value: string) => void;
	onPressEnter?: () => void;
	disabled?: boolean;
	maxLength?: number;
	className?: string;
}

const InputComponent: React.FC<InputComponentProps> = ({
	placeholder = "Enter text",
	value,
	onChange,
	onPressEnter,
	disabled = false,
	maxLength,
	className,
}) => {
	return (
		<Input
			placeholder={placeholder}
			value={value}
			onChange={(e) => onChange?.(e.target.value)}
			onPressEnter={onPressEnter}
			disabled={disabled}
			maxLength={maxLength}
			className={className}
		/>
	);
};

export default InputComponent;

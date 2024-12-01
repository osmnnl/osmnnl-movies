import React from "react";
import { Input } from "antd";
import { useTranslation } from 'react-i18next';

interface InputComponentProps {
	placeholderKey?: string;
	value?: string;
	onChange?: (value: string) => void;
	onPressEnter?: () => void;
	disabled?: boolean;
	maxLength?: number;
	className?: string;
}

const InputComponent: React.FC<InputComponentProps> = ({
	placeholderKey = "input.placeholder",
	value,
	onChange,
	onPressEnter,
	disabled = false,
	maxLength,
	className,
}) => {
	const { t } = useTranslation();

	return (
		<Input
			placeholder={t(placeholderKey)}
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

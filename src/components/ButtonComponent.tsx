import React from "react";
import { Button, ButtonProps } from "antd";

const ButtonComponent: React.FC<ButtonProps> = ({
	children,
	className = "",
	style = {},
	...rest
}) => {
	return (
		<Button
			className={className}
			style={style}
			{...rest}
		>
			{children}
		</Button>
	);
};

export default ButtonComponent;

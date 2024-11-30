import React from "react";
import { Form, FormItemProps as AntFormItemProps } from "antd";

interface FormItemProps extends AntFormItemProps {
	label: string;
	name: string;
	rules?: AntFormItemProps["rules"];
	component: React.FC<any>;
	componentProps?: Record<string, any>;
}

const FormItem: React.FC<FormItemProps> = ({
	label,
	name,
	rules = [],
	component: Component,
	componentProps = {},
	...rest
}) => {
	return (
		<Form.Item label={label} name={name} rules={rules} {...rest}>
			<Component {...componentProps} />
		</Form.Item>
	);
};

export default FormItem;

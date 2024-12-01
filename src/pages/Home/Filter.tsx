import React, { useEffect } from "react";
import { Form, Button, Col, Select } from "antd";
import { useTranslation } from 'react-i18next';
import FormItem from "../../components/FormItemComponent";
import InputComponent from "../../components/InputComponent";
import YearPickerComponent from "../../components/YearPickerComponent";
import ButtonComponent from "../../components/ButtonComponent";

interface FilterProps {
	onFilterChange: (filters: {
		search: string;
		year: string | null;
		type: string | null;
	}) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
	const { t } = useTranslation();
	const [form] = Form.useForm();

	useEffect(() => {
		form.setFieldsValue({ search: "Pokemon" });
		handleSearch();
	}, [form]);

	const handleSearch = () => {
		const values = form.getFieldsValue();
		onFilterChange({
			search: values.search || "",
			year: values.year || null,
			type: values.type || null,
		});
	};

	return (
		<Form
			form={form}
			layout="vertical"
			onFinish={handleSearch}
			className="filter-panel d-flex flex-row align-center justify-between gap-4"
		>
			<div className="d-flex flex-row gap-4 flex-grow">
				<Col span="4">
					<FormItem
						label={t('filter.search.label')}
						name="search"
						rules={[{ required: true, message: t('filter.search.validation') }]}
						component={InputComponent}
						componentProps={{
							placeholder: t('filter.search.placeholder'),
							onPressEnter: () => form.submit(),
						}}
					/>
				</Col>
				<Col span="3">
					<FormItem
						label={t('filter.year.label')}
						name="year"
						component={YearPickerComponent}
						componentProps={{
							minYear: 1900, 
							maxYear: new Date().getFullYear(),
							onChange: (year: string | null) => form.setFieldsValue({ year }),
						}}
					/>
				</Col>
				<Col span="3">
					<FormItem
						label={t('filter.type.label')}
						name="type"
						component={Select}
						componentProps={{
							placeholder: t('filter.type.placeholder'),
							options: [
								{ value: "movie", label: t('filter.type.options.movie') },
								{ value: "series", label: t('filter.type.options.series') },
								{ value: "episode", label: t('filter.type.options.episode') },
							],
							allowClear: true,
						}}
					/>
				</Col>
			</div>

			<ButtonComponent type="primary" htmlType="submit">
				{t('filter.search.button')}
			</ButtonComponent>
		</Form>
	);
};

export default Filter;

import React, { useEffect } from "react";
import { Form, Button, Col, Select } from "antd";
import FormItem from "../../components/FormItemComponent";
import InputComponent from "../../components/InputComponent";
import YearPicker from "../../components/YearPickerComponent";
import ButtonComponent from "../../components/ButtonComponent";

interface FilterProps {
	onFilterChange: (filters: {
		search: string;
		year: string | null;
		type: string | null;
	}) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
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
						label="Search"
						name="search"
						rules={[{ required: true, message: "Please enter a search term!" }]}
						component={InputComponent}
						componentProps={{
							placeholder: "Search movies",
							onPressEnter: () => form.submit(),
						}}
					/>
				</Col>
				<Col span="3">
					<FormItem
						label="Year"
						name="year"
						component={YearPicker}
						componentProps={{
							onYearChange: (year: string) => form.setFieldsValue({ year }),
						}}
					/>
				</Col>
				<Col span="3">
					<FormItem
						label="Type"
						name="type"
						component={Select}
						componentProps={{
							placeholder: "Select type",
							options: [
								{ value: "movie", label: "Movie" },
								{ value: "series", label: "TV Series" },
								{ value: "episode", label: "TV Episode" },
							],
							allowClear: true,
						}}
					/>
				</Col>
			</div>


			<ButtonComponent type="primary" htmlType="submit">
				Submit
			</ButtonComponent>

		</Form>
	);
};

export default Filter;

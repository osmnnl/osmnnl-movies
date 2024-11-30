// src/components/YearPicker.tsx
import React from "react";
import { DatePicker } from "antd";
import dayjs, { Dayjs } from "dayjs";

interface YearPickerProps {
	value?: string | null;
	onChange?: (value: string | null) => void;
	className?: string;
}

const YearPicker: React.FC<YearPickerProps> = ({ value, onChange, className }) => {
	const disabledDate = (current: Dayjs) => {
		const year = current.year();
		return year < 1900 || year > new Date().getFullYear();
	};

	const handleChange = (date: Dayjs | null) => {
		if (date && date.isValid()) {
			onChange?.(date.format("YYYY"));
		} else {
			onChange?.(null);
		}
	};

	const valueDayjs = value ? dayjs(value, "YYYY") : null;

	return (
		<DatePicker
			picker="year"
			onChange={handleChange}
			disabledDate={disabledDate}
			allowClear
			placeholder="Select year"
			value={valueDayjs}
			className={className}
			style={{ width: "100%" }}
		/>
	);
};

export default YearPicker;

import React from "react";
import { DatePicker } from "antd";
import { useTranslation } from 'react-i18next';
import dayjs, { Dayjs } from "dayjs";

interface YearPickerProps {
	value?: string | null;
	onChange?: (value: string | null) => void;
	className?: string;
	minYear?: number;
	maxYear?: number;
}

const YearPicker: React.FC<YearPickerProps> = ({
	value,
	onChange,
	className,
	minYear = 1900,
	maxYear = new Date().getFullYear()
}) => {
	const { t } = useTranslation();

	const disabledDate = (current: Dayjs) => {
		const year = current.year();
		return year < minYear || year > maxYear;
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
			placeholder={t('yearPicker.placeholder')}
			value={valueDayjs}
			className={`w-p100 ${className}`}
		/>
	);
};

export default YearPicker;

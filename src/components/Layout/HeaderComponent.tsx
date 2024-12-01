import { Layout, Select } from "antd";
import { useTranslation } from "react-i18next";

const { Header } = Layout;
const { Option } = Select;

const HeaderComponent = () => {
	const { t, i18n } = useTranslation();

	const handleLanguageChange = (value: string) => {
		i18n.changeLanguage(value);
	};

	return (
		<Header className="px-16 bg-primary-9 d-flex align-center justify-between">
			<h1 className="m-0 text-white">{t("header.title")}</h1>
			<Select
				defaultValue={i18n.language}
				onChange={handleLanguageChange}
				className="language-select"
				style={{ width: 120 }}
			>
				<Option value="tr">{t("Turkish", "Türkçe")}</Option>
				<Option value="en">{t("English", "English")}</Option>
			</Select>
		</Header>
	);
};

export default HeaderComponent;

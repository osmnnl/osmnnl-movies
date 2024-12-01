import { Layout } from "antd";
import { useTranslation } from 'react-i18next';

const { Footer } = Layout;

const FooterComponent = () => {
	const { t } = useTranslation();

	return (
		<Footer className="ta-center fs-12">
			{t('footer.copyright')}
		</Footer>
	);
};

export default FooterComponent;

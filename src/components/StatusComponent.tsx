import { Spin, Alert } from "antd";
import { useTranslation } from "react-i18next";

interface StatusComponentProps {
	isLoading?: boolean;
	isError?: boolean;
	errorMessage?: string;
	children?: React.ReactNode;
}

const StatusComponent: React.FC<StatusComponentProps> = ({ isLoading, isError, errorMessage, children }) => {
	console.log("🚀 ~ errorMessage:", errorMessage)
	const { t } = useTranslation();

	if (isLoading) {
		return (
			<div className="d-flex justify-center items-center pt-20 pb-20">
				<Spin size="large" />
			</div>
		);
	}

	if (isError) {
		return (
			<Alert
				message={errorMessage || t('statusComponent.errorMessage')}
				type="error"
				showIcon
				className="mb-4"
			/>
		);
	}

	return <>{children}</>;
};

export default StatusComponent;

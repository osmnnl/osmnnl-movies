import React from "react";
import { Button, Result } from "antd";
import { useTranslation } from "react-i18next";
import { ErrorBoundary as ReactErrorBoundary, FallbackProps } from "react-error-boundary";

const FallbackComponent: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
	const { t } = useTranslation();

	return (
		<Result
			status="500"
			title={t("errorBoundary.title")}
			subTitle={t("errorBoundary.subTitle")}
			extra={
				<Button type="primary" onClick={resetErrorBoundary}>
					{t("errorBoundary.reloadButton")}
				</Button>
			}
		/>
	);
};

const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const handleReset = () => {
		window.location.reload();
	};

	return (
		<ReactErrorBoundary FallbackComponent={FallbackComponent} onReset={handleReset}>
			{children}
		</ReactErrorBoundary>
	);
};

export default ErrorBoundary;


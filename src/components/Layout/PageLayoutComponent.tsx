import React from "react";
import { Alert, Breadcrumb, Spin } from "antd";

interface PageLayoutComponentProps {
	title: string;
	description?: string;
	children: React.ReactNode;
	filterPanel?: React.ReactNode;
	breadCrumbItems?: { title: string; link?: string }[];
	isLoading?: boolean;
	isError?: string;
}

const PageLayoutComponent: React.FC<PageLayoutComponentProps> = ({
	title,
	description,
	children,
	filterPanel,
	breadCrumbItems,
	isLoading = false,
	isError,
}) => {
	return (
		<div className="bg-white p-4 m-20">
			{breadCrumbItems && breadCrumbItems.length > 0 && (
				<Breadcrumb className="mb-4">
					{breadCrumbItems.map((item, index) => (
						<Breadcrumb.Item
							key={index}
							onClick={() => item.link && (window.location.href = item.link)}
							className={item.link ? "text-primary cursor-pointer" : ""}
						>
							{item.title}
						</Breadcrumb.Item>
					))}
				</Breadcrumb>
			)}

			<div className="page-header d-flex justify-between align-center mb-4">
				<div>
					<h2 className="fs-24 fw-bold">{title}</h2>
					{description && <p className="text-secondary fs-14">{description}</p>}
				</div>
			</div>

			{filterPanel && (
				<div className="bg-white p-4 rounded-8 mb-4 shadow-sm">
					{filterPanel}
				</div>
			)}
			{isLoading ? (
				<div className="d-flex justify-center items-center pt-20 pb-20">
					<Spin size="large" />
				</div>
			) : isError ? (
				<Alert message={isError} type="error" showIcon className="mb-4" />
			) : (
				<div className="p-4 rounded-md shadow-sm">
					{children}
				</div>
			)}
		</div>
	);
};

export default PageLayoutComponent;

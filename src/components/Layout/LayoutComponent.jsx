import React, { Suspense } from "react";
import { Layout as AntLayout } from "antd";
import HeaderComponent from "./HeaderComponent";
import SidebarComponent from "./SidebarComponent";
import FooterComponent from "./FooterComponent";

const LayoutComponent = ({ children }) => {
	return (
		<AntLayout className="min-h-100 flex-column">
			{/* <SidebarComponent /> */}
			<AntLayout className="flex-column flex-grow">
				<HeaderComponent />
				<Suspense fallback={<div>Loading...</div>}>
					<AntLayout.Content className="bg-light overflow-y-auto flex-grow">
						{children}
					</AntLayout.Content>
				</Suspense>
				<FooterComponent />
			</AntLayout>
		</AntLayout>

	);
};

export default LayoutComponent;

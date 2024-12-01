import { Suspense, ReactNode } from "react";
import { Layout as AntLayout, Spin } from "antd";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

interface LayoutComponentProps {
	children: ReactNode;
}

const LayoutComponent: React.FC<LayoutComponentProps> = ({ children }) => {
	return (
		<AntLayout className="min-h-v100 flex-column">
			<AntLayout className="flex-column flex-grow">
				<HeaderComponent />
				<Suspense
					fallback={
						<div className="d-flex align-center justify-center min-h-v100">
							<Spin size="large" />
						</div>
					}
				>
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

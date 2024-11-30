import { Component, ErrorInfo, ReactNode } from "react";
import { Button, Result } from "antd";

interface Props {
	children: ReactNode;
}

interface State {
	hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(_: Error): State {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error("Error caught by ErrorBoundary:", error, errorInfo);
	}

	handleReload = () => {
		this.setState({ hasError: false });
		window.location.reload();
	};

	render() {
		if (this.state.hasError) {
			return (
				<Result
					status="500"
					title="Bir Hata Oluştu"
					subTitle="Bir sorunla karşılaştık. Lütfen sayfayı yenileyerek tekrar deneyin."
					extra={
						<Button type="primary" onClick={this.handleReload}>
							Yeniden Yükle
						</Button>
					}
				/>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;

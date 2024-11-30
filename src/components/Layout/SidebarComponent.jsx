import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

const SidebarComponent = () => {
	const navigate = useNavigate();

	const handleMenuClick = ({ key }) => {
		navigate(key); 
	};

	return (
		<Sider width={200} style={{ background: "#fff" }}>
			<Menu
				mode="inline"
				defaultSelectedKeys={["/"]}
				style={{ height: "100%", borderRight: 0 }}
				onClick={handleMenuClick} 
			>
				<Menu.Item key="/">Home</Menu.Item>
				<Menu.Item key="/detail">Detail</Menu.Item>
			</Menu>
		</Sider>
	);
};

export default SidebarComponent;

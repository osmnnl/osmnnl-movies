import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

const HeaderComponent = () => {
	return (
		<Header style={{ background: "#001529", color: "#fff", padding: "0 16px" }}>
			<h1 style={{ color: "#fff", margin: 0 }}>App Header</h1>
		</Header>
	);
};

export default HeaderComponent;

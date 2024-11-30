import React from "react";

const CustomConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <div className="custom-config-provider">{children}</div>;
};

export default CustomConfigProvider;

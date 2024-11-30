import React from "react";
import { useParams } from "react-router-dom";

const DetailPage: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	return <div>Detail Page for item ID: {id}</div>;
};

export default DetailPage;

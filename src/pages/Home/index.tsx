import React, { useState } from "react";
import PageLayoutComponent from "../../components/Layout/PageLayoutComponent";
import Filter from "./Filter";
import { useSearchMovies } from "../../hooks/apiCalls/useMovies";
import { Table, Pagination, Alert, Tooltip } from "antd";
import { generatePath, useNavigate } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";
import { ROUTES } from "../../routes/paths";

const HomePage: React.FC = () => {
	const [filters, setFilters] = useState<{
		search: string;
		year: string | null;
		type: string | null;
	}>({
		search: "Pokemon",
		year: null,
		type: null,
	});

	const navigate = useNavigate();
	const [currentPage, setCurrentPage] = useState(1);

	const { data, isLoading, error } = useSearchMovies({
		search: filters.search,
		year: filters.year || undefined,
		type: filters.type || undefined,
		page: currentPage,
	});

	const handleFilterChange = (newFilters: {
		search: string;
		year: string | null;
		type: string | null;
	}) => {
		setFilters(newFilters);
		setCurrentPage(1);
	};

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const handleViewDetail = (id: string) => {
		const path = generatePath(ROUTES.DETAIL, { id });
		navigate(path);
	};

	const columns = [
		{
			title: "View",
			key: "view",
			render: (_: any, record: any) => (
				<Tooltip title="View details">
					<EyeOutlined
						style={{ cursor: "pointer" }}
						onClick={() => handleViewDetail(record.imdbID)}
					/>
				</Tooltip>
			),
		},
		{
			title: "Name",
			dataIndex: "Title",
			key: "title",
		},
		{
			title: "Release Date",
			dataIndex: "Year",
			key: "year",
		},
		{
			title: "IMDb ID",
			dataIndex: "imdbID",
			key: "imdbID",
		},
	];

	return (
		<PageLayoutComponent
			title="Movies"
			description="Browse and search for movies"
			filterPanel={<Filter onFilterChange={handleFilterChange} />}
			isLoading={isLoading}
			isError={error instanceof Error ? error.message : undefined}
		>
			{data?.Search ? (
				<>
					<Table
						dataSource={data.Search}
						columns={columns}
						rowKey="imdbID"
						pagination={false}
					/>
					<Pagination
						current={currentPage}
						pageSize={10}
						total={parseInt(data.totalResults, 10)}
						onChange={handlePageChange}
						className="mt-4 d-flex justify-center"
					/>
				</>
			) : (
				<Alert message="No movies found." type="info" />
			)}
		</PageLayoutComponent>
	);
};

export default HomePage;

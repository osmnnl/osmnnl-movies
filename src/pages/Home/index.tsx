import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import PageLayoutComponent from "../../components/Layout/PageLayoutComponent";
import Filter from "./Filter";
import { useSearchMovies } from "../../hooks/apiCalls/useMovies";
import { Table, Pagination, Tooltip } from "antd";
import { generatePath, useNavigate } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";
import { ROUTES } from "../../routes/paths";
import StatusComponent from "../../components/StatusComponent";

interface FilterState {
	search: string;
	year: string | null;
	type: string | null;
	page: number;
}

const HomePage: React.FC = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const [filterState, setFilterState] = useState<FilterState>({
		search: "Pokemon",
		year: null,
		type: null,
		page: 1,
	});

	const { data, isLoading, error } = useSearchMovies({
		search: filterState.search,
		year: filterState.year || undefined,
		type: filterState.type || undefined,
		page: filterState.page,
	});

	const handleFilterChange = (newFilters: Omit<FilterState, "page">) => {
		setFilterState((prev) => ({ ...prev, ...newFilters, page: 1 }));
	};

	const handlePageChange = (page: number) => {
		setFilterState((prev) => ({ ...prev, page }));
	};

	const handleViewDetail = (id: string) => {
		navigate(generatePath(ROUTES.DETAIL, { id }));
	};

	const columns = useMemo(
		() => [
			{
				title: t("home.table.columns.view"),
				key: "view",
				render: (_: unknown, record: { imdbID: string }) => (
					<Tooltip title={t("home.table.tooltip.viewDetails")}>
						<EyeOutlined
							className="view-icon"
							onClick={() => handleViewDetail(record.imdbID)}
						/>
					</Tooltip>
				),
			},
			{
				title: t("home.table.columns.name"),
				dataIndex: "Title",
				key: "title",
			},
			{
				title: t("home.table.columns.releaseDate"),
				dataIndex: "Year",
				key: "year",
			},
			{
				title: t("home.table.columns.type"),
				dataIndex: "Type",
				key: "type",
			},
			{
				title: t("home.table.columns.imdbID"),
				dataIndex: "imdbID",
				key: "imdbID",
			},
		],
		[t, handleViewDetail]
	);

	return (
		<PageLayoutComponent
			title={t("home.pageTitle")}
			description={t("home.pageDescription")}
			filterPanel={<Filter onFilterChange={handleFilterChange} />}
		>
			<StatusComponent
				isLoading={isLoading}
				isError={Boolean(error)}
				errorMessage={error?.message}
			>
				{data?.Search?.length ? (
					<>
						<Table
							dataSource={data.Search}
							columns={columns}
							rowKey="imdbID"
							pagination={false}
						/>
						<Pagination
							current={filterState.page}
							pageSize={10}
							total={Number(data.totalResults)}
							onChange={handlePageChange}
							className="mt-4 d-flex justify-center"
							showSizeChanger={false}
						/>
					</>
				) : (
					<div className="no-results">{t("home.noResults")}</div>
				)}
			</StatusComponent>
		</PageLayoutComponent>
	);
};

export default HomePage;

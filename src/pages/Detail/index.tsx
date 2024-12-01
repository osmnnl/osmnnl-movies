import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useMovieDetails } from "../../hooks/apiCalls/useMovies";
import { Typography, Image, Row, Col, Space, Tag, Card, Descriptions } from "antd";
import PageLayoutComponent from "../../components/Layout/PageLayoutComponent";
import { ROUTES } from "../../routes/paths";
import StatusComponent from "../../components/StatusComponent";
import { getImdbRatingTag } from "../../utils/imdbUtils";

const { Text, Paragraph } = Typography;

const DetailPage: React.FC = () => {
	const { t } = useTranslation();
	const { id } = useParams<{ id: string }>();
	const { data, isLoading, error } = useMovieDetails(id || "");

	return (
		<PageLayoutComponent
			title={data?.Title || t('detail.loadingTitle')}
			description={data ? t('detail.description', { title: data.Title }) : undefined}
			breadCrumbItems={[
				{ title: t('detail.breadcrumb.home'), link: ROUTES.HOME },
				{
					title: data?.Title || t('detail.breadcrumb.detail'),
					link: data ? ROUTES.DETAIL.replace(":id", id ?? "") : undefined,
				},
			]}
		>
			<StatusComponent isLoading={isLoading} isError={Boolean(error)}>
				{data && (
					<Row gutter={[16, 16]}>
						<Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={4} className="d-flex align-start justify-center">
							<Image
								src={data.Poster !== "N/A" ? data.Poster : "/no-image.png"}
								alt={`${data.Title} ${t('detail.posterAlt')}`}
								className="h-p100"
							/>
						</Col>
						<Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={4} className="d-flex align-start justify-center">
							<Card bordered={false} className="bg-secondary-4">
								<Space direction="vertical" size="small">
									<Text strong className="fs-16">
										{t('detail.plot')}
									</Text>
									<Paragraph>{data.Plot}</Paragraph>
								</Space>
							</Card>
						</Col>
						<Col lg={24} xl={24} xxl={16}>
							<Card bordered={false} className="bg-secondary-4">
								<Descriptions
									title={t('detail.generalInfo')}
									bordered
									column={{ xs: 1, sm: 1, md: 2 }}
									size="middle"
									labelStyle={{ fontWeight: 'bold' }}
									contentStyle={{ fontSize: '14px' }}
									className="bg-white rounded-lg p-2"
								>
									<Descriptions.Item label={t('detail.year')}>{data.Year}</Descriptions.Item>
									<Descriptions.Item label={t('detail.released')}>{data.Released}</Descriptions.Item>
									<Descriptions.Item label={t('detail.runtime')}>{data.Runtime}</Descriptions.Item>
									<Descriptions.Item label={t('detail.type')}>{data.Type}</Descriptions.Item>

									<Descriptions.Item label={t('detail.genre')}>
										{data.Genre.split(', ').map((genre) => (
											<Tag color="blue" key={genre}>
												{genre}
											</Tag>
										))}
									</Descriptions.Item>

									<Descriptions.Item label={t('detail.director')}>{data.Director}</Descriptions.Item>
									<Descriptions.Item label={t('detail.writer')}>{data.Writer}</Descriptions.Item>
									<Descriptions.Item label={t('detail.actors')}>{data.Actors}</Descriptions.Item>

									<Descriptions.Item label={t('detail.language')}>
										{data.Language.split(', ').map((lang) => (
											<Tag color="green" key={lang}>
												{lang}
											</Tag>
										))}
									</Descriptions.Item>
									<Descriptions.Item label={t('detail.country')}>
										{data.Country.split(', ').map((country) => (
											<Tag color="geekblue" key={country}>
												{country}
											</Tag>
										))}
									</Descriptions.Item>

									<Descriptions.Item label={t('detail.awards')}>{data.Awards}</Descriptions.Item>
									<Descriptions.Item label={t('detail.imdbRating')}>
										{getImdbRatingTag({ rating: data.imdbRating })}
									</Descriptions.Item>
								</Descriptions>
							</Card>
						</Col>
					</Row>
				)}
			</StatusComponent>
		</PageLayoutComponent>
	);
};

export default DetailPage;

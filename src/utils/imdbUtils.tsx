import { Tag } from 'antd';

interface GetImdbRatingTagProps {
	rating: string;
}

export const getImdbRatingTag = ({ rating }: GetImdbRatingTagProps): JSX.Element => {
	const numericRating = parseFloat(rating);

	let color: string;
	let displayRating: string;

	if (!isNaN(numericRating)) {
		if (numericRating >= 9) {
			color = 'green';
		} else if (numericRating >= 8) {
			color = 'lime';
		} else if (numericRating >= 7) {
			color = 'gold';
		} else if (numericRating >= 5) {
			color = 'orange';
		} else if (numericRating >= 3) {
			color = 'volcano';
		} else {
			color = 'red';
		}
		displayRating = rating;
	} else {
		color = 'default';
		displayRating = 'N/A';
	}

	return <Tag color={color}>{displayRating}</Tag>;
};

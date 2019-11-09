
import React from 'react';
import styled from 'styled-components';
import StarGold from '../images/star_gold.svg';
import StarGrey from '../images/star_grey.svg';
import { Rating as RatingData } from '../ratings/Rating';

export const MAX_STARS = 5;

interface Props {
    data: RatingData;
}

export const Rating = React.memo<Props>((props: Props) => {

    const stars = new Array(MAX_STARS).fill(undefined).map((_, index) =>
        <Star key={index} src={index < props.data.ratingStars ? StarGold : StarGrey} alt='' />
    );

    return (
        <Container>
            <Stars aria-label={`Rating: ${props.data.ratingStars} stars`}>
                {stars.map((star) => star)}
            </Stars>
            {props.data.review && <Review>{props.data.review}</Review>}
            <Name>{props.data.name || '[name hidden]'}</Name>
            <p>{new Date(props.data.date.split(' ')[0]).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
        </Container>
    );
});

const Container = styled.div`
    margin-top: 2em;
    display: flex;
    flex-direction: column;
`;

const Stars = styled.div`
    display: flex;
`;

const Star = styled.img`
    width: 1.5em;
    height: 1.5em;
`;

const Review = styled.p`
    font-style: italic;
`;

const Name = styled.p`
    font-weight: bold;
    font-style: italic;
    margin-bottom: 0;
`;

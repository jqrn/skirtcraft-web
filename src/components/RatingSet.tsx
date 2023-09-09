import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Rating as RatingData } from '../ratings/Rating';
import { MAX_STARS, Rating } from './Rating';

interface Props {
  ratings: RatingData[];
  selectedPageIndex: number;
  onPageNavClicked: (pageIndex: number) => void;
}

const RATINGS_PER_PAGE = 10;

export const RatingSet = (props: Props) => {
  const [averageRating, setAverageRating] = useState('');

  useEffect(() => {
    const averageRatingRaw =
      props.ratings.reduce(
        (sum, currentRating) => sum + currentRating.ratingStars,
        0
      ) / props.ratings.length;
    setAverageRating(averageRatingRaw.toFixed(2));
  }, []);

  const pageCount = Math.ceil(props.ratings.length / RATINGS_PER_PAGE);
  let selectedPageIndex = props.selectedPageIndex;
  if (selectedPageIndex >= pageCount) {
    selectedPageIndex = pageCount - 1;
  } else if (selectedPageIndex < 0) {
    selectedPageIndex = 0;
  }

  const newestRatingIndex =
    props.ratings.length - 1 - RATINGS_PER_PAGE * selectedPageIndex;
  const oldestRatingIndex = Math.max(
    newestRatingIndex - RATINGS_PER_PAGE + 1,
    0
  );

  const ratingsRendered: JSX.Element[] = [];
  for (let index = newestRatingIndex; index >= oldestRatingIndex; index -= 1) {
    const rating = props.ratings[index];
    ratingsRendered.push(<Rating key={index} data={rating} />);
  }

  const olderNewerButtons = () => (
    <ButtonContainer>
      <Button
        disabled={props.selectedPageIndex <= 0}
        onClick={() => props.onPageNavClicked(props.selectedPageIndex - 1)}
      >
        &lt; Newer
      </Button>
      <Button
        disabled={props.selectedPageIndex >= pageCount - 1}
        onClick={() => props.onPageNavClicked(props.selectedPageIndex + 1)}
      >
        Older &gt;
      </Button>
    </ButtonContainer>
  );

  return (
    <Container>
      <div>
        <TotalLabel>Ratings: </TotalLabel>
        <TotalValue>{props.ratings.length}</TotalValue>
      </div>
      {averageRating && (
        <div>
          <TotalLabel>Average: </TotalLabel>
          <TotalValue>{`${averageRating} / ${MAX_STARS}`}</TotalValue>
        </div>
      )}

      {olderNewerButtons()}

      {ratingsRendered}

      {olderNewerButtons()}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
`;

const TotalLabel = styled.span`
  font-size: 110%;
  font-style: italic;
`;

const TotalValue = styled.span`
  font-size: 125%;
  font-style: italic;
`;

const ButtonContainer = styled.div`
    margin-top: 2em;
    display: flex;
    flex-direction: row;
    justify-contents = space-around;
`;

const Button = styled.button`
  margin: 0 0.3em;
  border: ${(props: { disabled?: boolean }) =>
    props.disabled ? '1px solid lightgray' : '1px solid gray'};
  border-radius: 0.3em;
  padding: 0.5em;
  text-align: center;
  text-decoration: none;
  font-size: 90%;
  text-transform: uppercase;
  cursor: ${(props: { disabled?: boolean }) =>
    props.disabled ? 'default' : 'pointer'};
  background: white;
  transition: background 0.3s;
  user-select: none;
  &:hover {
    background: ${(props: { disabled?: boolean }) =>
      props.disabled ? 'white' : '#eee'};
  }
  &:focus {
    outline: 0;
  }
`;

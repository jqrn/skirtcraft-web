
import React from 'react';
import styled from 'styled-components';
import { Rating as RatingData } from '../ratings/Rating';
import { MAX_STARS, Rating } from './Rating';

interface Props {
    ratings: RatingData[];
    selectedPageIndex: number;
    onPageNavClicked: (pageIndex: number) => void;
}

interface State {
    averageRating?: number;
}

const RATINGS_PER_PAGE = 5;

export class RatingSet extends React.PureComponent<Props, State> {

    public state: State = {};

    public componentDidMount(): void {
        const averateRatingRaw = this.props.ratings.reduce((sum, currentRating) => sum + currentRating.ratingStars, 0) / this.props.ratings.length;
        const averageRating = Math.round(100 * averateRatingRaw) / 100;
        this.setState({ averageRating });
    }

    public render(): JSX.Element {
        const pageCount = Math.ceil(this.props.ratings.length / RATINGS_PER_PAGE);
        let selectedPageIndex = this.props.selectedPageIndex;
        if (selectedPageIndex >= pageCount) {
            selectedPageIndex = pageCount - 1;
        } else if (selectedPageIndex < 0) {
            selectedPageIndex = 0;
        }

        const newestRatingIndex = this.props.ratings.length - 1 - RATINGS_PER_PAGE * selectedPageIndex;
        const oldestRatingIndex = Math.max(newestRatingIndex - RATINGS_PER_PAGE + 1, 0);

        const ratingsRendered: JSX.Element[] = [];
        for (let index = newestRatingIndex; index >= oldestRatingIndex; index -= 1) {
            const rating = this.props.ratings[index];
            ratingsRendered.push(
                <Rating key={index} data={rating} />
            );
        }

        return (
            <Container>
                <div>
                    <TotalLabel>Ratings: </TotalLabel><TotalValue>{this.props.ratings.length}</TotalValue>
                </div>
                {this.state.averageRating &&
                    <div>
                        <TotalLabel>Average: </TotalLabel><TotalValue>{`${this.state.averageRating} / ${MAX_STARS}`}</TotalValue>
                    </div>
                }

                <ButtonContainer>
                    <Button disabled={this.props.selectedPageIndex <= 0} onClick={() => this.props.onPageNavClicked(this.props.selectedPageIndex - 1)}>
                        &lt; Newer
                    </Button>
                    <Button disabled={this.props.selectedPageIndex >= pageCount - 1}  onClick={() => this.props.onPageNavClicked(this.props.selectedPageIndex + 1)}>
                        Older &gt;
                    </Button>
                </ButtonContainer>

                {ratingsRendered}

            </Container>
        );
    }
}

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
    border:  ${(props: { disabled?: boolean }) => props.disabled ? '1px solid lightgray' : '1px solid gray'};
    border-radius: 0.3em;
    padding: 0.5em;
    text-align: center;
    text-decoration: none;
    font-size: 90%;
    text-transform: uppercase;
    cursor: ${(props: { disabled?: boolean }) => props.disabled ? 'default' : 'pointer'};
    background: white;
    transition: background 0.3s;
    user-select: none;
    &:hover {
        background: ${(props: { disabled?: boolean}) => props.disabled ? 'white' : '#eee'};
    }
    &:focus {
        outline:0;
    }
`;

import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Page } from '../components/Page';
import { NavTabDef } from '../enums/NavTabDef';
import ImgCoverAqueous02 from '../images/cover-aqueous02.jpg';
import ImgCoverAqueous03 from '../images/cover-aqueous03.jpg';
import ImgCoverBooth02 from '../images/cover-booth02.jpg';
import ImgCoverUnaligned01 from '../images/cover-unaligned01.jpg';
import ImgCoverUnaligned02 from '../images/cover-unaligned02.jpg';

interface Slide {
    imageUrl: string;
    title?: string;
    linkUrl?: string;
}

const SLIDES: Slide[] = [
    {
        imageUrl: ImgCoverAqueous02,
        title: 'Aqueous Skirt',
        linkUrl: '/products/aqueous',
    },
    {
        imageUrl: ImgCoverUnaligned02,
        title: 'Unaligned Skirt',
        linkUrl: '/products/unaligned',
    },
    {
        imageUrl: ImgCoverAqueous03,
        title: 'Aqueous Skirt',
        linkUrl: '/products/aqueous',
    },
    {
        imageUrl: ImgCoverUnaligned01,
        title: 'Unaligned Skirt',
        linkUrl: '/products/unaligned',
    },
    {
        imageUrl: ImgCoverBooth02,
    },
];

const AUTO_SLIDE_INTERVAL_MILLISECONDS = 4000;

interface State {
    slideIndex: number;
    isAuto: boolean;
}

export default class HomePage extends React.PureComponent<{}, State> {

    public state: State = {
        slideIndex: 0,
        isAuto: true,
    };

    private autoSlideInterval?: number;

    public componentDidMount(): void {
        if (this.state.isAuto) {
            this.autoSlideInterval = setInterval(() => this.autoSlide(), AUTO_SLIDE_INTERVAL_MILLISECONDS);
        }
    }

    public componentWillUnmount(): void {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = undefined;
        }
    }

    public render(): JSX.Element {

        const currentSlide = SLIDES[this.state.slideIndex];

        return (

            <Page title={NavTabDef.HOME} currentTab={NavTabDef.HOME} mainStyle={mainStyle}>

                <Container>

                    <SlideContainer>

                        {currentSlide.linkUrl != undefined
                            ? <>
                                <Link to={currentSlide.linkUrl}>
                                    <SlideLabel>{currentSlide.title}</SlideLabel>
                                    <SlideImage src={currentSlide.imageUrl} alt={currentSlide.title}/>
                                </Link>
                            </>
                            : <SlideImage src={currentSlide.imageUrl} alt={currentSlide.title}/>
                        }
                        <NextOrPreviousButton isprevious={true} onClick={() => this.shiftSlide(true, false)}>&#10094;</NextOrPreviousButton>
                        <NextOrPreviousButton isprevious={false} onClick={() => this.shiftSlide(false, false)}>&#10095;</NextOrPreviousButton>

                    </SlideContainer>
                </Container>

                <NavDotGroup>
                    {SLIDES.map((_, index) =>
                        <Dot
                            key={index}
                            iscurrent={index === this.state.slideIndex}
                            onClick={() => this.setState({ slideIndex: index, isAuto: false })}
                        />
                    )}
                </NavDotGroup>

            </Page>
        );
    }

    private shiftSlide(isBack: boolean, isAuto: boolean) {
        let newIndex = this.state.slideIndex + (isBack ? -1 : 1);
        if (newIndex >= SLIDES.length) {
            newIndex = 0;
        } else if (newIndex < 0) {
            newIndex = SLIDES.length - 1;
        }
        this.setState({
            slideIndex: newIndex,
            isAuto: isAuto && this.state.isAuto
        });
    }

    private autoSlide(): void {
        if (this.state.isAuto) {
            this.shiftSlide(false, true);
        } else {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = undefined;
        }
    }
}

const mainStyle: React.CSSProperties = {
    padding: 0,
    maxWidth: 'none',
};

const Container = styled.div`
    position: relative;
    background-color: #ddd;
`;

const SlideContainer = styled.div`
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
`;

const SlideImage = styled.img`
    width: 100%;
    align-self: center;
`;

const SlideLabel = styled.span`
    color: #000;
    text-transform: uppercase;
    text-decoration: none;
    position: absolute;
    top: 1em;
    left: 1em;
    background-color: rgba(220, 220, 220, 0.7);
    font-size: 12pt;
    padding: 0.5em;
    border-radius: 0.5em;
`;

const NextOrPreviousButton = styled.div`
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0.4em;
    padding-left: 0.4em;
    color: black;
    font-weight: bold;
    font-size: 200%;
    transition: 0.6s ease;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-radius: ${(props: { isprevious: boolean }) => props.isprevious ? '0 3px 3px 0' : '3px 0 0 3px'};
    background-color: rgba(255,255,255,0.65);
    right: ${(props: { isprevious: boolean }) => props.isprevious ? undefined : 0};
    user-select: none;
    &: hover {
        border-color: black;
        background-color: white;
    }
`;

const NavDotGroup = styled.div`
    text-align: center;
    padding: 0.5em;
    background-color: #ddd;
`;

const Dot = styled.span`
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 0.25em;
    background-color: ${(props: { iscurrent: boolean }) => props.iscurrent ? '#333' : '#aaa'};
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
    &: hover {
        background-color: ${(props: { iscurrent: boolean }) => props.iscurrent ? '#333' : '#333'};
    }
`;

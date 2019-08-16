import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { NavTabDef } from '../enums/NavTabDef';
import ImgFavicon from '../images/icon.png';
import { BASE_URL } from '../util/constants';
import { Footer } from './Footer';
import { Header } from './Header';
import { NavBar } from './NavBar';

export interface Props {
    title: string;
    currentTab?: NavTabDef;
    mainStyle?: React.CSSProperties;
    openGraphImageUrl?: string;
    children?: React.ReactNode;
}

export class Page extends React.Component<Props> {

    public render(): JSX.Element {

        return (
            <Container>
                <Helmet>
                    <html lang='en' />
                    <title>{`Skirtcraft - ${this.props.title}`}</title>

                    <meta name='description' content='Unisex skirts with large pockets'/>
                    <meta name='theme-color' content='#501B5E'/>
                    <meta name='google-site-verification' content='uHzz-YE_sXeH7O9_gPjULkYIezVqIe7jM__40uhRD64'/>
                    <meta property='og:site_name' content='Skirtcraft - Unisex skirts with large pockets'/>
                    <meta property='og:image' content={this.props.openGraphImageUrl || `${BASE_URL}/images/pair.png'`}/>
                    {this.props.openGraphImageUrl == undefined && <meta property='og:image:width' content='1200'/>}
                    {this.props.openGraphImageUrl == undefined && <meta property='og:image:height' content='620'/>}

                    <link href='https://fonts.googleapis.com/css?family=Muli:400,400i,700,700i&display=swap' rel='stylesheet' type='text/css'/>
                    <link rel='icon' href={ImgFavicon}/>

                    <body />
                </Helmet>
                <Header />
                <NavBar currentTab={this.props.currentTab}/>
                <Main style={this.props.mainStyle}>
                    {this.props.children}
                </Main>
                <Footer currentTab={this.props.currentTab}/>
            </Container>
        );
    }
}

const Container = styled.div`
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Main = styled.main`
    padding: 3% 1em 2em 3%;
    max-width: 70em;
    flex: 1 0 auto;
`;

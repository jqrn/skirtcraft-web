import React from 'react';
import styled from 'styled-components';
import { Page } from '../components/Page';
import { NavTabDef } from '../enums/NavTabDef';

export default class MapPage extends React.PureComponent {

    public render(): JSX.Element {

        return (

            <Page title={NavTabDef.MAP} currentTab={NavTabDef.MAP}>
                <h2>Map</h2>

                <p>Cities/towns we've shipped skirts to!</p>

                <p>The latitudes and longitudes shown in this map are <b>not</b> derived from precise addresses; they're city/town locations only.  Purple markers indicate places to which we've sent multiple orders.</p><br/>

                <AspectRatio>
                    <MapIframe src='https://www.google.com/maps/d/u/2/embed?mid=1ERs5vdTVwmLQzcqBnP0FfwITo90&z=2&ll=22,20'/>
                </AspectRatio>

            </Page>
        );
    }
}

const AspectRatio = styled.div`
    position: relative;
    padding-top: 60%;
`;

const MapIframe = styled.iframe`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;

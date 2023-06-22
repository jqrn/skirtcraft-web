import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';
import styled from 'styled-components';
import { Page } from '../components/Page';
import { NavTabDef } from '../enums/NavTabDef';
import ImgCoverBooth02 from '../images/cover-booth02.jpg';
import ImgGreenLongSleevedFrontHands from '../images/green_long_sleeved_front_hands.png';
import ImgKickstarterFunded from '../images/kickstarter-badge-funded.png';
import ImgNewsCollage from '../images/news_collage.png';
import ImgSewing from '../images/sewing.png';

const AboutPage = () => (
  <Page title={NavTabDef.ABOUT} currentTab={NavTabDef.ABOUT}>
    <h1>About</h1>

    <ImageFullWidth src={ImgCoverBooth02} alt="Skirtcraft booth at fair" />

    <p>Skirtcraft is a micro-brand based in Minneapolis, Minnesota.</p>

    <p>
      Our products are made in the USA at a factory in Los Angeles, California.
      Timeline:
    </p>

    <ul>
      <li>
        2015: <Link to="/products/unaligned">Unaligned Skirt</Link> -{' '}
        <OutboundLink href="https://www.kickstarter.com/projects/skirtcraft/unisex-skirts">
          Kickstarter project
        </OutboundLink>
      </li>
      <li>
        2018: <Link to="/products/aqueous">Aqueous Skirt</Link> -{' '}
        <OutboundLink href="https://www.kickstarter.com/projects/skirtcraft/unisex-skirts-2">
          Kickstarter project
        </OutboundLink>
      </li>
      <li>
        2023: <Link to="/products/tellurian">Tellurian Skirt</Link> -{' '}
        <OutboundLink href="https://www.kickstarter.com/projects/skirtcraft/unisex-skirts-3">
          Kickstarter project
        </OutboundLink>
      </li>
    </ul>

    <br />

    <h2>Press & Blog Coverage</h2>
    <ImageFullWidth
      src={ImgNewsCollage}
      alt="New York Post, BBC Radio 4, CBSN, Qwear, The Closet Feminist, CBS WCCO 4 (Minneapolis), MinnPost, Star Tribune, City Pages"
    />
    <br />
    <br />
    <table className="simple-table">
      <tbody>
        <tr>
          <td>City Pages (Minneapolis):</td>
          <td>
            <OutboundLink href="http://www.citypages.com/news/minneapolis-designer-joe-quarion-corners-untapped-market-mens-skirts/487698081">
              Minneapolis designer Joe Quarion corners untapped market: men's
              skirts
            </OutboundLink>
          </td>
        </tr>
        <tr>
          <td>CBS News (national):</td>
          <td>
            <OutboundLink href="https://www.youtube.com/watch?v=aVlbbtPhQjg">
              Skirts for Men to Hit the Rack
            </OutboundLink>{' '}
            (video)
          </td>
        </tr>
        <tr>
          <td>New York Post:</td>
          <td>
            <OutboundLink href="https://nypost.com/2016/10/01/macho-men-are-wearing-skirts-now/">
              Macho Men Are Wearing Skirts Now
            </OutboundLink>
          </td>
        </tr>
        <tr>
          <td>BBC Radio 4:</td>
          <td>
            <OutboundLink href="http://www.bbc.co.uk/programmes/b08tvjk7">
              live interview
            </OutboundLink>
          </td>
        </tr>
        <tr>
          <td>WCCO TV (CBS Minneapolis):</td>
          <td>
            <OutboundLink href="http://minnesota.cbslocal.com/video/3280041-twin-cities-kickstarter-campaign-nearly-realizing-dream-of-unisex-skirts/">
              Twin Cities Kickstarter Campaign Nearly Realizing Dream of Unisex
              Skirts
            </OutboundLink>
          </td>
        </tr>
        <tr>
          <td>Star Tribune:</td>
          <td>
            <OutboundLink href="http://www.startribune.com/st-anthony-big-electronics-recycler-goes-under-amid-problems-low-commodity-prices/322458321/">
              Unisex Skirt Maker Scores Launch Capital
            </OutboundLink>{' '}
            (scroll down in main article)
          </td>
        </tr>
        <tr>
          <td>Bring Me The News (now GoMN):</td>
          <td>
            <OutboundLink href="https://www.gomn.com/news/for-him-or-her-mn-startup-raising-funds-to-launch-unisex-skirts">
              For Him or Her: Mn Startup Raising Funds to Launch Unisex Skirts
            </OutboundLink>
          </td>
        </tr>
        <tr>
          <td>Qwear:</td>
          <td>
            <OutboundLink href="http://www.qwearfashion.com/home/meet-skirtcraft-modern-rugged-unisex-skirts">
              Meet Skirtcraft: Modern, Rugged, Unisex Skirts
            </OutboundLink>
          </td>
        </tr>
        <tr>
          <td>The Closet Feminist:</td>
          <td>
            <OutboundLink href="http://www.theclosetfeminist.ca/fashion-x-feminism-unisex-skirts-by-skirtcraft/">
              Fashion x Feminism: Unisex Skirts by Skirtcraft
            </OutboundLink>
          </td>
        </tr>
      </tbody>
    </table>

    <br />

    <h2>Story</h2>

    <p>A while ago, I wanted to start wearing skirts.</p>

    <ImageRight src={ImgSewing} alt="Joe sewing" />

    <p>
      I'd realized they were cool, and that I hadn't considered them before
      because I'd thought of them as being just for women (I'm a man). But it
      occurred to me that they really weren't&mdash;except by convention, and
      even then, only in certain parts of the world. I was missing out on one of
      the most basic forms of human clothing for no good reason!
    </p>

    <p>What I wanted in my first skirt:</p>

    <ul>
      <li>the sturdy, comfortable fabrics I was used to with trousers</li>
      <li>plenty of large pockets</li>
      <li>an A-line shape</li>
      <li>
        a style that, at least according to my own perspective, was not strongly
        masculine or strongly feminine
      </li>
      <li>a modern, simple style, yet with some distinctiveness</li>
    </ul>

    <p>
      Looking for my first skirt, I found a wide variety of excellent products,
      but none that quite had the style I was looking for.
    </p>

    <p>
      I'd been learning to sew at the time, so I decided one of my first
      projects would be a skirt. After about a year experimenting with different
      ideas, I arrived at a design I was excited about, and started exploring
      developing it as a product: the Unaligned Skirt.
    </p>

    <ImageLeft
      src={ImgGreenLongSleevedFrontHands}
      alt="a prototype of the Unaligned Skirt"
    />

    <p>
      Having done 20+ design iterations, in April 2014 we registered Skirtcraft
      LLC and started sharing prototype photos online and collecting feedback.
      In September 2014, we began working with{' '}
      <OutboundLink href="https://clothierdesignsource.com">
        Clothier Design Source
      </OutboundLink>{' '}
      on developing the design into a product for manufacture: pattern
      formalization, materials sourcing, size grading, and testing. In June
      2015, we settled on a partner factory to make the skirt in the U.S.
    </p>

    <ImageRightSmall src={ImgKickstarterFunded} alt="Funded with Kickstarter" />

    <p>
      From July 21st to August 20th, 2015, we conducted a{' '}
      <OutboundLink href="https://www.kickstarter.com/projects/skirtcraft/unisex-skirts">
        Kickstarter campaign
      </OutboundLink>{' '}
      to fund the initial production run. Thanks to 177 backers from 16
      countries, it succeeded!
    </p>

    <ClearBoth />
  </Page>
);

const ImageFullWidth = styled.img`
  width: 100%;
  max-width: 50em;
`;

const ImageRight = styled.img`
  float: right;
  width: 40%;
  margin: 1em 0 1em 2em;
`;

const ImageRightSmall = styled.img`
  float: right;
  width: 20%;
  margin: 1em 0 1em 2em;
`;

const ImageLeft = styled.img`
  float: left;
  width: 40%;
  margin: 1em 2em 1em 0;
`;

const ClearBoth = styled.div`
  clear: both;
`;

export default AboutPage;

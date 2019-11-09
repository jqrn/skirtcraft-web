import React from 'react';
import styled from 'styled-components';
import { Page } from '../components/Page';
import { NavTabDef } from '../enums/NavTabDef';

export default class AlterationsPage extends React.PureComponent {

    public render(): JSX.Element {

        return (

            <Page title={NavTabDef.ALTERATIONS} currentTab={NavTabDef.ALTERATIONS}>
                <h1>Alterations</h1>

                <H2>Aqueous Skirt Shortening</H2>

                <p>If you have an Aqueous skirt you'd like to shorten yourself, it's straightforward:</p>
                <ol>
                    <li>Wash and dry the skirt at least once so any shrinking is accounted for.</li>
                    <li>Trim off the desired amount of fabric at the bottom. Leave an extra 1/2 inch for the hem.</li>
                    <li>Finish the edge with a serger, overlock foot, or zigzag stitch.</li>
                    <li>Press the new hemline, 1/2 inch from the finished edge.</li>
                    <li>Fold the hem under along the pressed line and sew a plain stitch about 3/8 inch in.</li>
                </ol>

                <H2>Unaligned Skirt Shortening</H2>

                <p>If you would like your Unaligned skirt to be shorter and are interested in altering it yourself, here's how to do it. Before proceeding, remember that the skirt will shrink by about 1/2 inch the first 1-2 times it is washed. Altered items cannot be returned or exchanged.</p>

                <p>You'll need:</p>

                <ul>
                    <li>A sewing machine</li>
                    <li>Top-stitching or "jeans" thread, matching the existing visible thread color as closely as possible</li>
                    <li>A pair of scissors, preferably heavy-duty and sharp</li>
                    <li>Optional: An iron</li>
                    <li>Optional: A serger, also known as an overlock sewing machine</li>
                </ul>

                <H3>Option A</H3>

                <p>This is the easiest approach. The drawback is it leaves layers of pocket fabric in the hem, which can make the hem hang in a more rigid and boxy way at the sides.</p>

                <ol>
                    <li>Wash and dry the skirt twice, machine washing with cold water and drying on tumble dry medium, or however you intend to normally dry it. This step is to ensure that any shrinking will be resolved and taken into account when deciding on the new length.</li>
                    <li>Decide how much shorter you'd like the skirt to be. We'll call this the Length Adjustment. For our examples, the Length Adjustment will be 3 inches.</li>
                    <li>Determine the fabric width you'll be removing from the hem. If you are planning to use a serger, the width should be the Length Adjustment minus 7/8 inch. If you don't plan to use a serger, the width is the Length Adjustment minus 5/8 inch. In our example, you'd want to remove 2 1/8 inches if using a serger, or remove 2 3/8 inches otherwise.</li>
                    <li>Use the scissors to cut off the hem edge, all the way around. The width to remove is the amount determined in the previous step. You'll notice more resistance as you cut through the extra layers of pocket fabric on the sides.</li>
                    <li>If you have a serger / overlock machine, serge the new raw fabric edge, removing 1/4 inch of fabric in the process. If you don't have a serger, sew a zig-zag stich as close to the edge as possible.</li>
                    <li>Fold the new hem edge 5/8 inch in from the edge, folding it toward the interior. In other words, the raw folded edge will be inside rather than outside the skirt. Press the new *inside* edge with the iron to make the folded edge crisp. Be sure to have the iron no higher than the Cotton setting. The reason for pressing from the inside is to prevent the iron from damaging the visible exterior of the skirt. It's easy to end up with shiny patches when pressing folds like this, since all of the iron's pressure is on a small amount of fabric.</li>
                    <li>Pin the folded hem in place.</li>
                    <li>With the top-stitching thread, sew a basic lockstitch all the way around the folded edge. This stitch should be from the exterior of the skirt and should be 1/2 inch from the folded edge. Be sure to remove pins before they reach the machine!</li>
                </ol>

                <H3>Option B</H3>

                <p>Only a little more complicated than Option A. The hem won't have the extra weight, and will hang properly. However, there will be one additional, visible, horizontal stitch across the side panel, near the bottom.</p>

                <ol>
                    <li>Wash and dry the skirt twice, machine washing with cold water and drying on tumble dry medium, or however you intend to normally dry it. This step is to ensure that any shrinking will be resolved and taken into account when deciding on the new length.</li>
                    <li>Decide how much shorter you'd like the skirt to be. We'll call this the Length Adjustment. For our examples, the Length Adjustment will be 3 inches.</li>
                    <li>Locate the bottoms of the lower pockets from the inside of the skirt, about 1 inch from the hem edge. Notice that there are two layers of fabric that form each pocket bag, and these are not visible from the outside of the skirt. These layers are attached at either side by the skirt's main side-panel seams. Make two vertical cuts upward from the bottom edge of the pocket. Each cut should be just 1/4 inch inside the seam. The length of the cuts should be the Length Adjustment plus 1/2 inch. In our example, the cuts would be 3 1/2 inches.</li>
                    <li>If you're using a serger, serge the pocket layers between the two cuts, all the way across. The width of fabric removed should be equal to the Length Adjustment, and this will leave behind 1/2 inch of the cuts. The extra cut length was just to allow the serger to get in there.</li>
                    <li>If you're not using a serger, sew a zig-zag stich across the two interior pocket layers between the cuts. As with the serger, there should be 1/2 inch of cuts left behind. Cut across the pocket layers just below the zig-zag stitch, causing the portion between the cuts to be removed.</li>
                    <li>From the outside of the skirt, with the top-stitching thread (or plain if you prefer) sew a plain lockstitch from left to right across each side panel. The stitch should run across the full width of the pocket, starting and ending in the primary seams that form the side edges of the pocket. It should be 1/4 - 1/2 inch above the tops of the cuts. It forms the bottom edge of the usable pocket interior. Take care to make this stich very straight since it's visible. Putting a strip of masking tape in place as a guide for the stich can simplify this.</li>
                    <li>Determine the fabric width you'll be removing from the hem. If you are planning to use a serger, the width should be the Length Adjustment, minus 7/8 inch. If you don't plan to use a serger, the width is the Length Adjustment minus 5/8 inch. In our example, you'll want to remove 2 1/8 inches if using a serger, or remove 2 3/8 inches otherwise.</li>
                    <li>Use the scissors to cut off the hem edge, all the way around. Remove the width of fabric determined in the previous step. You'll notice more resistance as you cut through the extra layers of pocket fabric on the sides.</li>
                    <li>If you have a serger / overlock machine, serge the new raw fabric edge, removing 1/4 inch of fabric. If you don't have a serger, sew a zig-zag stich as close to the edge as possible.</li>
                    <li>Fold the new hem edge 5/8 inch in from the edge, folding it toward the interior. In other words, the raw folded edge will be inside rather than outside the skirt. Press the new *inside* edge with the iron to make the folded edge crisp. Be sure to have the iron no higher than the Cotton setting. The reason for pressing from the inside is to prevent the iron from damaging the visible exterior of the skirt. It's easy to end up with shiny patches when pressing folds like this, since all of the iron's pressure is on a small amount of fabric.</li>
                    <li>Pin the folded hem in place.</li>
                    <li>With the top-stitching thread, sew a basic lockstitch all the way around the folded edge. This stitch should be from the exterior of the skirt and should be 1/2 inch from the folded edge. Be sure to remove pins before they reach the machine!</li>
                </ol>

            </Page>
        );
    }
}

const H2 = styled.h2`
    font-size: 18px;
`;

const H3 = styled.h3`
    font-size: 16px;
`;

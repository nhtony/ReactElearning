import React from 'react'
import { css } from '@emotion/core';
import { CircleLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 320px auto;
`;

export default function LoadingService() {
    return (
        <div id="cover-spin">
            <CircleLoader
                css={override}
                sizeUnit={"px"}
                color={'#fffbd5'}
                loading={true}
            />
        </div>
    )
}

import React from 'react'
import { css } from '@emotion/core';
import {HashLoader} from 'react-spinners';

const override = css`
    display: block;
    margin: 320px auto;
`;

export default function LoadingService() {
    return (
        <div id="cover-spin">
            <HashLoader
                css={override}
                sizeUnit={"px"}
                color={'#fffbd5'}
                loading={true}
            />
        </div>
    )
}

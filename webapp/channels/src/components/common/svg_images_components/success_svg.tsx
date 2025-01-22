// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

type SvgProps = {
    width: number;
    height: number;
}

const SuccessSvg = (props: SvgProps) => (
    <svg
        width={props.width ? props.width.toString() : '108'}
        height={props.height ? props.height.toString() : '70'}
        viewBox='0 0 108 70'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <rect
            x='0.000976562'
            y='9'
            width='96'
            height='24'
            rx='3.75'
            fill='var(--button-bg)'
            fillOpacity='0.12'
        />
        <rect
            x='9.00098'
            y='36'
            width='99'
            height='25'
            rx='3.75'
            fill='var(--button-bg)'
            fillOpacity='0.12'
        />
        <path
            d='M48.224 25.065L50.3246 38.5554C50.3448 38.8231 50.4704 39.0736 50.676 39.2564C50.8816 39.4392 51.152 39.5408 51.4327 39.5408C51.7135 39.5408 51.9839 39.4392 52.1895 39.2564C52.3951 39.0736 52.5207 38.8231 52.5409 38.5554L54.6415 25.065C55.0234 19.8048 47.8363 19.8048 48.224 25.065Z'
            fill='var(--center-channel-color)'
        />
        <path
            d='M52.0528 63.8058C68.4184 63.8058 81.6852 50.5389 81.6852 34.1734C81.6852 17.8079 68.4184 4.54102 52.0528 4.54102C35.6873 4.54102 22.4205 17.8079 22.4205 34.1734C22.4205 50.5389 35.6873 63.8058 52.0528 63.8058Z'
            fill='var(--center-channel-bg)'
        />
        <path
            d='M53.8949 65.6478C70.2604 65.6478 83.5273 52.3809 83.5273 36.0154C83.5273 19.6499 70.2604 6.38306 53.8949 6.38306C37.5294 6.38306 24.2625 19.6499 24.2625 36.0154C24.2625 52.3809 37.5294 65.6478 53.8949 65.6478Z'
            fill='#3DB887'
        />
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M67.8552 23.3044C68.5474 23.9735 68.5661 25.077 67.897 25.7691L49.6318 44.6647C48.9786 45.3404 47.9074 45.3767 47.21 44.7466L37.6445 36.1045C36.9302 35.4591 36.8743 34.3569 37.5197 33.6425C38.165 32.9282 39.2673 32.8723 39.9816 33.5177L48.2966 41.0301L65.3905 23.3462C66.0595 22.654 67.163 22.6353 67.8552 23.3044Z'
            fill='var(--center-channel-bg)'
        />
        <path
            d='M81.1852 34.1734C81.1852 50.2627 68.1422 63.3058 52.0528 63.3058C35.9635 63.3058 22.9205 50.2627 22.9205 34.1734C22.9205 18.084 35.9635 5.04102 52.0528 5.04102C68.1422 5.04102 81.1852 18.084 81.1852 34.1734Z'
            stroke='var(--center-channel-color)'
        />
        <path
            d='M46.0425 1.87629C52.3425 0.656536 58.4467 1.20528 64.3471 3.52402C66.7696 4.47599 69.1577 5.72629 71.5109 7.27504C74.4539 9.3726 76.96 11.7187 79.0281 14.3147M58.5236 68.5982C51.1481 69.9201 44.0711 68.9661 37.3079 65.7136C35.8908 65.032 34.4874 64.2496 33.098 63.366C29.4103 60.6456 26.4115 57.58 24.0987 54.1672M18.9221 41.4778C18.1041 37.074 18.1312 32.754 19.0033 28.5178C19.8847 24.237 21.6291 20.0417 24.2365 15.932M83.0409 20.7886C84.2298 23.3406 85.0977 26.0763 85.6439 28.9967C86.3002 32.5293 86.423 35.9828 86.0117 39.3566M81.1549 17.3166C81.4873 17.8476 81.8038 18.3877 82.1043 18.9369'
            stroke='var(--center-channel-color)'
            strokeOpacity='0.56'
        />
    </svg>
);

export default SuccessSvg;

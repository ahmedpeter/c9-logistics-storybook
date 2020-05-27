import { css } from 'styled-components';
import { darken, lighten, transparentize } from 'polished';

const PrimaryTheme = '#5279FF';

export const Theme = {
    PrimaryColor: PrimaryTheme,
    PrimaryDark: darken(0.3, PrimaryTheme),
    PrimaryGrey: '#62707B',

    PrimaryBackground: '#f5f9fc',
    PrimaryGreen: '#63CD92',
    PrimaryMint: '#64e1ac',
    PrimaryRed: '#EA7373',
    PrimaryYellow: '#F5CC56',
    PrimaryOrange: '#e8a835',

    PrimaryBorderColor: '#DDD',
    PrimaryFade: '#F6F7F8',
    PrimaryInputOutline: '#C6CADE',

    PrimaryFontSize: '12px',
    PrimaryLineHeight: '1.6em',
    PrimaryFontColor: '#4a4a4a',
    PrimaryFont: '\'Open Sans\', sans-serif',
    SecondaryFont: '\'Barlow Condensed\', sans-serif',
    TetiaryFont: '\'Open Sans Light\', sans-serif',

    FontSize_s: '.7rem',
    FontSize_m: '1.1rem',
    FontSize_l: '1.6rem',
    FontSize_xl: '2rem',
    FontSize_xxl: '3rem',

    PrimaryColor_light_80: lighten(0.4, PrimaryTheme),
    PrimaryColor_light_60: lighten(0.3, PrimaryTheme),
    PrimaryColor_light_40: lighten(0.2, PrimaryTheme),
    PrimaryColor_light_10: lighten(0.1, PrimaryTheme),
    PrimaryColor_dark_10: darken(0.1, PrimaryTheme),

    PrimaryGreyDark: '#4A4A4A',
    PrimaryGreyMid: '#A4B2BD',
    PrimaryGreyLight: '#E0E7ED',
    PrimaryGreyBackground: '#F3F8FA',

    PrimaryRadius: '3px',
    SecondaryRadius: '5px',

    PrimaryTransition: 'transition: all 0.3s ease-out;',

    Elevate: `box-shadow: 0 1px 3px ${transparentize(
        0.8,
        darken(0.3, PrimaryTheme),
    )}`,
    Elevate_2: `box-shadow: 1px 3px 6px ${transparentize(
        0.8,
        darken(0.3, PrimaryTheme),
    )}`,
    Elevate_3: `box-shadow: 3px 6px 15px ${transparentize(
        0.8,
        darken(0.4, PrimaryTheme),
    )}`,

    Gradient: (primary: string, secondary: string) => {
        return `background: ${primary};
        background: -moz-linear-gradient(-45deg, ${primary} 0%, ${secondary} 100%);
        background: -webkit-linear-gradient(-45deg, ${primary} 0%,${secondary} 100%);
        background: linear-gradient(135deg, ${primary} 0%,${secondary} 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${primary}', endColorstr='${secondary}',GradientType=1 );`;
    },
    Truncate: (width: string) => {
        return `
        width: ${width};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      `;
    },
    CreateUUID: () => {
        const s: any[] = [];
        const hexDigits = '0123456789abcdef';
        for (let i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = '4';
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // eslint-disable-line no-bitwise
        s[8] = s[13] = s[18] = s[23] = '-';
        const uuid = s.join('');
        return uuid;
    },
};


// export default Theme;

export const sizes: any = {
    giant: 1170,
    desktop: 992,
    tablet: 768,
    phone: 660,
};

export const media = Object.keys(sizes).reduce(
    (acc: any, label: string): any => {
        acc[label] = (...args: any) => {
            return css`
        @media (max-width: ${sizes[label] / 16}em) {
          ${css(args[0], ...args)}
        }
      `;
        };
        return acc;
    },
    {},
);

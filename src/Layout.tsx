import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Theme, media } from './Theme';
import { lighten, adjustHue } from 'polished';

export const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  font-family: 'Open Sans';
  font-size: ${Theme.PrimaryFontSize};
  transition: all 0.3s ease-out;
  line-height: 1.5rem;

  &::after {
    display: block;
    width: 100%;
    height: 110px;
    ${(props: any) =>
      Theme.Gradient(props.color, adjustHue(10, lighten(0, props.color)))};
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
    content: '';
  }
`;
Layout.defaultProps = {
  color: Theme.PrimaryColor,
};
Layout.propTypes = {
  color: PropTypes.string,
};

export const Container = styled.div<any>`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 30px 30px 30px;
  /* z-index: 1; */
  ${(props: any) =>
    props.sided &&
    css`
      padding-left: ${(innerProp: any) => innerProp.sided};
    `}
`;

export const HeaderMast = styled.div<any>`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 30px 30px 30px;
  /* z-index: 1; */
  background-color: blue;
`;
Container.defaultProps = {
  sided: '140px',
};
Container.propTypes = {
  sided: PropTypes.string,
};

export const Box = styled.div<any>`
  display: ${(props: any) => props.display};
  position: ${(props: any) => props.position};
  ${(props: any) =>
    props.width &&
    css`
      width: ${(innerProp: any) => innerProp.width};
    `}
  ${(props: any) =>
    props.height &&
    css`
      height: ${(innerProp: any) => innerProp.height};
    `}
  ${(props: any) =>
    props.minWidth &&
    css`
      min-width: ${(innerProp: any) => innerProp.minWidth};
    `}
  ${(props: any) =>
    props.maxWidth &&
    css`
      max-width: ${(innerProp: any) => innerProp.maxWidth};
    `}
  ${(props: any) =>
    props.minHeight &&
    css`
      min-height: ${(innerProp: any) => innerProp.minHeight};
    `}
  ${(props: any) =>
    props.maxHeight &&
    css`
      max-height: ${(innerProp: any) => innerProp.maxHeight};
    `}
  ${(props: any) =>
    props.background &&
    css`
      background: ${(innerProp: any) => innerProp.background};
    `}
  ${(props: any) =>
    props.color &&
    css`
      color: ${(innerProp: any) => innerProp.color};
    `}
  ${(props: any) =>
    props.align &&
    css`
      text-align: ${(innerProp: any) => innerProp.align};
    `}
  ${(props: any) =>
    props.fullscreen &&
    css`
      min-width: 100vh;
      min-height: 100vh;
    `}
  ${(props: any) =>
    props.verticalAlign &&
    css`
      display: flex;
      align-items: center;
    `}
  ${(props: any) =>
    props.horizontalAlign &&
    css`
      display: flex;
      justify-content: center;
    `}
  ${(props: any) =>
    props.centered &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  ${(props: any) =>
    props.pad &&
    css`
      padding: ${(innerProp: any) => innerProp.pad};
    `}
  ${(props: any) =>
    props.pad &&
    css`
      padding: ${(innerProp: any) => innerProp.pad};
    `}
  ${(props: any) =>
    props.bordered &&
    css`
      border: 1px ${(innerProp: any) => innerProp.borderStyle}
        ${(innerProp: any) => innerProp.border};
    `}
  ${(props: any) =>
    props.sideBordered &&
    css`
      border-left: 1px ${(innerProp: any) => innerProp.borderStyle}
        ${(innerProp: any) => innerProp.border};
      border-right: 1px ${(innerProp: any) => innerProp.borderStyle}
        ${(innerProp: any) => innerProp.border};
    `}
  ${(props: any) =>
    props.bottomBordered &&
    css`
      border-bottom: 1px ${(innerProp: any) => innerProp.borderStyle}
        ${(innerProp: any) => innerProp.border};
    `}
  ${(props: any) =>
    props.leftBordered &&
    css`
      border-left: 1px ${(innerProp: any) => innerProp.borderStyle}
        ${(innerProp: any) => innerProp.border};
    `}
  ${(props: any) =>
    props.rightBordered &&
    css`
      border-right: 1px ${(innerProp: any) => innerProp.borderStyle}
        ${(innerProp: any) => innerProp.border};
    `}
  ${(props: any) =>
    props.margin &&
    css`
      margin: ${(innerProp: any) => innerProp.margin};
    `}
  ${(props: any) =>
    props.verticalPad &&
    css`
      padding-top: ${(innerProp: any) => innerProp.verticalPad};
      padding-top: ${(innerProp: any) => innerProp.verticalPad};
    `}
  ${(props: any) =>
    props.horizontalPad &&
    css`
      padding-left: ${(innerProp: any) => innerProp.horizontalPad};
      padding-right: ${(innerProp: any) => innerProp.horizontalPad};
    `}
  ${(props: any) =>
    props.elevate &&
    css`
      ${Theme.Elevate};
      ${(innerProp: any) =>
        innerProp.elevate === 'high' &&
        css`
          ${Theme.Elevate_2}
        `};
      ${(innerProp: any) =>
        innerProp.elevate === 'higher' &&
        css`
          ${Theme.Elevate_3}
        `};
    `}
  ${(props: any) =>
    props.radius &&
    css`
      border-radius: ${Theme.PrimaryRadius};
      ${(innerProp: any) =>
        innerProp.radius === 'high' &&
        css`
          border-radius: ${Theme.SecondaryRadius};
        `}
    `}
  ${(props: any) =>
    props.hidden &&
    css`
      overflow: hidden;
    `}
  ${(props: any) =>
    props.transition &&
    css`
      transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    `}
  ${(props: any) =>
    props.tag &&
    css`
      position: relative;
      &::after {
        content: '';
        height: 100%;
        position: absolute;
        top: 0;
        left: -4px;
        width: 4px;
        background: ${(innerProp: any) => innerProp.tag};
      }
    `}
`;

Box.defaultProps = {
  display: 'block',
  position: 'none',
  borderStyle: 'solid',
  border: Theme.PrimaryBorderColor,
};

Box.propTypes = {
  display: PropTypes.string,
  position: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  minHeight: PropTypes.string,
  maxHeight: PropTypes.string,
  minWidth: PropTypes.string,
  maxWidth: PropTypes.string,

  background: PropTypes.string,
  fullscreen: PropTypes.bool,
  pad: PropTypes.string,
  margin: PropTypes.string,
  verticalPad: PropTypes.string,
  horizontalPad: PropTypes.string,
  verticalAlign: PropTypes.bool,
  color: PropTypes.string,
  align: PropTypes.string,

  bordered: PropTypes.bool,
  bottomBordered: PropTypes.bool,
  sideBordered: PropTypes.bool,
  leftBordered: PropTypes.bool,
  rightBordered: PropTypes.bool,
  border: PropTypes.string,
  borderStyle: PropTypes.string,
  radius: PropTypes.any,
  elevate: PropTypes.string,
  hidden: PropTypes.bool,
  transition: PropTypes.bool,
};

export const Panel = styled(Box)`
  background: ${(props: any) => props.bg};
  border-radius: ${Theme.SecondaryRadius};
  ${(props: any) =>
    props.hidden &&
    css`
      overflow: hidden;
    `}
`;
Panel.defaultProps = {
  bg: '#fff',
};
Panel.propTypes = {
  bg: PropTypes.string,
  hidden: PropTypes.bool,
};

export const FloatingPanel = styled(Box)`
  background: ${(props: any) => props.bg};
  border-radius: ${Theme.SecondaryRadius};
  ${(props: any) =>
    props &&
    css`
      position: absolute;
      right: 20px;
      top: -50px;
    `}
`;
FloatingPanel.propTypes = {
  bg: PropTypes.string,
  hidden: PropTypes.bool,
};

export const Grid = styled.div<any>`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props: any) => props.default};

  ${(props: any) =>
    props.padHorizontal &&
    css`
      grid-column-gap: ${(innerProp: any) => innerProp.padHorizontal};
    `}

   ${(props: any) =>
     props.padVertical &&
     css`
       grid-row-gap: ${(innerProp: any) => innerProp.padVertical};
     `}

  grid-gap: ${(props: any) => props.pad};


  ${(props: any) =>
    props.autoRow &&
    css`
      grid-auto-rows: ${(innerProp: any) => innerProp.autoRow};
    `}

  ${(props: any) =>
    !props.notResponsive &&
    css`
  ${media.desktop`
    grid-template-columns: ${(innerProp: any) => innerProp.tablet};
  `}
  ${media.tablet`
    grid-template-columns: ${(innerProp: any) => innerProp.tablet};
  `}
  ${media.phone`
    grid-template-columns: ${(innerProp: any) => innerProp.mobile};
  `}
  `}
  `;

Grid.defaultProps = {
  default: 'repeat(6, 1fr)',
  mobile: '1fr',
  desktop: 'repeat(3, 1fr)',
  tablet: 'repeat(2, 1fr)',
  pad: '0',
  padHorizontal: '10px',
  notResponsive: false,
};

Grid.propTypes = {
  default: PropTypes.string,
  mobile: PropTypes.string,
  desktop: PropTypes.string,
  tablet: PropTypes.string,
  pad: PropTypes.string,
  padHorizontal: PropTypes.string,
  padVertical: PropTypes.string,
  autoRow: PropTypes.string,
  notResponsive: PropTypes.bool,
};

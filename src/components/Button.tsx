import { Theme } from '../Theme'
import PropTypes from 'prop-types';
import { darken, transparentize, lighten } from 'polished';
import styled, { css, keyframes } from 'styled-components';


const InProgress = keyframes`
  to {
    width: 0%;
  }
`;

export const Button = styled.div<any>`
  height: ${(props: any) => props.height};
  display: ${(props: any) => props.display};
  background-color: ${(props: any) => props.color};
  color: ${(props: any) => props.fontColor};
  border-radius: ${(props: any) => props.radius};
  margin: ${(props: any) => props.margin};
  align-items: center;
  font-size: ${Theme.PrimaryFontSize};
  padding: 0 15px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  ${Theme.PrimaryTransition};
  text-decoration: none;

  &:hover {
    background-color: ${(props: any) => props.hover};
  }
  ${(props: any) =>
        props.progress &&
        css`
      position: relative;
      overflow: hidden;
      background: none;
      z-index: 1;
      &:after {
        content: '';
        display: block;
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        right: 0;
        background-color: ${(props: any) =>
                transparentize(0.8, lighten(0.2, props.color))};
        animation: ${InProgress} 1.2s ease-in-out alternate both infinite;
        z-index: -1;
      }
      &:before {
        content: '';
        display: block;
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        right: 0;
        background-color: ${(props: any) => props.color};
        z-index: -2;
      }
      &:hover {
        background: none;
      }
    `}
  ${(props: any) =>
        props.iconed &&
        css`
      padding-right: ${(innerProp: any) => innerProp.height};

      & i {
        display: inline-flex;
        height: ${(innerProp: any) => innerProp.height};
        width: ${(innerProp: any) => innerProp.height};
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        right: 0;
      }
      ${(innerProp: any) =>
                innerProp.iconed === 'left' &&
                css`
          padding-left: ${(prop: any) => prop.height};
          padding-right: 15px;
          & i {
            left: 0;
            right: none;
          }
        `}
    `}
  ${(innerProp: any) =>
        innerProp.pale &&
        css`
      background: none;
      border: 1px solid
        ${(props: any) =>
                props.color ? props.color : Theme.PrimaryInputOutline};
      color: ${(props: any) =>
                props.color ? props.color : Theme.PrimaryInputOutline};
      background: ${(props: any) => props.fontColor};
      &:hover {
        border: 1px solid
          ${(props: any) =>
                props.color
                    ? darken(0.2, props.color)
                    : darken(0.2, Theme.PrimaryInputOutline)};
        background: ${(props: any) => props.fontColor};
        color: ${(props: any) =>
                props.color
                    ? darken(0.2, props.color)
                    : darken(0.2, Theme.PrimaryInputOutline)};
      }
      ${(props: any) =>
                props.active &&
                css`
          background: ${(nestedProp: any) => nestedProp.activeColor};
          color: #fff;
          &:hover {
            background: ${(nestedProp: any) => nestedProp.activeColor};
            color: #fff;
          }
        `};
    `}
`;
Button.defaultProps = {
    height: '36px',
    color: Theme.PrimaryColor,
    hover: darken(0.1, Theme.PrimaryColor),
    fontColor: '#fff',
    display: 'inline-flex',
    radius: Theme.PrimaryRadius,
};
Button.propTypes = {
    height: PropTypes.string,
    color: PropTypes.string,
    hover: PropTypes.string,
    fontColor: PropTypes.string,
    display: PropTypes.string,
    radius: PropTypes.string,
    icon: PropTypes.bool,
    iconed: PropTypes.any,
    progress: PropTypes.bool,
};

export const StatusBadge = styled.div<any>`
    height: ${(props: any) => props.height};
    display: ${(props: any) => props.display};
    background-color: ${(props: any) => transparentize(0.9, props.color)};
    /* border: 1px solid  ${(props: any) =>
        transparentize(0.3, props.color)}; */
    color: ${(props: any) => props.color};
    border-radius: ${(props: any) => props.radius};
    align-items: center;
    font-size: ${Theme.FontSize_s};
    padding: 0 10px;
    min-width: 70px;
    justify-content: center;
`;

StatusBadge.defaultProps = {
    height: '26px',
    color: Theme.PrimaryColor,
    display: 'inline-flex',
    radius: Theme.PrimaryRadius,
};
StatusBadge.propTypes = {
    height: PropTypes.string,
    color: PropTypes.string,
    display: PropTypes.string,
    radius: PropTypes.string,
};

export const ActionButton = styled.div<any>`
  position: relative;
  display: inline-block;
  & span {
    height: ${(props: any) => props.height};
    width: ${(props: any) => props.height};
    display: ${(props: any) => props.display};
    background-color: none;
    border: 1px solid ${(props: any) => transparentize(0.3, props.color)};
    color: ${(props: any) => props.color};
    border-radius: ${(props: any) => props.radius};
    align-items: center;
    justify-content: center;
    cursor: pointer;
    & i {
      display: inline-block;
      transform: rotateZ(90deg);
      font-size: 10px;
    }
    &:hover {
      ${Theme.Elevate};
    }
  }
  & ul {
    display: none;
    position: absolute;
    top: 25px;
    right: 0;
    width: 150px;
    /* height: 150px; */
    border-radius: ${Theme.PrimaryRadius};
    z-index: 1000;
    ${Theme.Elevate_2};
    background: #fff;
    padding: 0;
    margin: 0;
    list-style: none;
    overflow: hidden;
    border: 1px solid ${Theme.PrimaryGreyMid};
    & li {
      height: 36px;
      display: flex;
      align-items: center;
      padding: 0 15px;
      border-bottom: 1px solid ${Theme.PrimaryGreyBackground};
      cursor: pointer;
      &:hover {
        background: ${transparentize(0.2, Theme.PrimaryGreyBackground)};
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
  &:hover {
    ul {
      display: block;
    }
  }
`;

ActionButton.defaultProps = {
    height: '26px',
    color: Theme.PrimaryGrey,
    display: 'inline-flex',
    radius: Theme.PrimaryRadius,
};
ActionButton.propTypes = {
    height: PropTypes.string,
    color: PropTypes.string,
    display: PropTypes.string,
    radius: PropTypes.string,
};

export default Button;
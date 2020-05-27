import React from 'react';
import styled, { css } from 'styled-components';

import PropTypes from 'prop-types';
import { Theme } from './Theme';
import { Box } from './Layout';
import { darken } from 'polished';

export const Icon = styled.i<any>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${(props: any) => props.size}px;
    height: ${(props: any) => props.size}px;
    font-size: ${(props: any) => props.size - 4}px;
    ${(props: any) =>
      props.font &&
      css`
        font-size: ${(innerProp: any) => innerProp.font};
      `}
    ${(props: any) =>
      props.color &&
      css`
        color: ${(innerProp: any) => innerProp.color};
      `}

    ${(props: any) =>
      props.boxed &&
      css`
        font-size: ${(innerProp: any) => innerProp.font};
        width: ${(innerProp: any) => innerProp.size}px;
        height: ${(innerProp: any) => innerProp.size}px;
        background: ${(innerProp: any) => innerProp.bg};
        &:hover {
          background: ${(innerProp: any) => innerProp.bgHover};
        }
        ${(innerProp: any) =>
          innerProp.round &&
          css`
            border-radius: 50%;
          `}
        ${(innerProp: any) =>
          innerProp.curve &&
          css`
            border-radius: ${Theme.PrimaryRadius};
          `}
      `}
    transition: all 0.3s ease-out;
    ${(props: any) =>
      props.rotate &&
      css`
        transform: rotateZ(${(innerProp: any) => innerProp.rotate});
      `}
`;

Icon.defaultProps = {
  size: 20,
};
Icon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  font: PropTypes.string,
  round: PropTypes.bool,
  boxed: PropTypes.bool,
  bg: PropTypes.string,
  bgHover: PropTypes.string,
};

export const StringComp = (props: any) => {
  return <>{props.children}</>;
};

export const H3 = styled.h3<any>`
  font-size: ${(props: any) => props.size};
  font-weight: lighter;
  font-family: ${Theme.SecondaryFont};
  margin: ${(props: any) => props.margin};
  color: ${(props: any) => props.color};
  letter-spacing: 1px;
`;
H3.defaultProps = {
  size: '22px',
  color: Theme.PrimaryFontColor,
  margin: '0',
};
H3.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
};

export const H1 = styled.h1<any>`
    font-family: ${Theme.SecondaryFont};
    background-color: #1ea7fd;
    width: 100vw;
    padding: 30px;
    height: 40px;
    margin: 0;
    position: relative;
    top: -70px;
    left: -30px;
    color: #fff;

 &::before {
    color: rgb(255, 255, 255);
    font-family: cloud9;
    position: absolute;
    top: 0px;
    left: -40px;
    font-size: 120px;
    content: "";
    display: inline-block;
    opacity: 0.2;
  }
`;

export const Title = styled.span`
  font-weight: bold;
  display: block;
`;

export const SubTitle = styled.span`
  font-size: ${Theme.FontSize_s};
  font-family: ${Theme.PrimaryFont};
  font-weight: lighter;
  opacity: 0.6;
  /* display: block; */
`;

export const IconTextWrapper = styled.span<any>`
  display: inline-block;
  padding: 0 10px;
  font-size: ${Theme.FontSize_s};
  color: ${Theme.PrimaryFontColor};
  ${(props: any) =>
    props.color &&
    css`
      color: ${(innerProp: any) => innerProp.color};
    `}
  & i {
    display: inline-block;
    padding-right: 5px;
    ${(props: any) =>
      props.iconColor &&
      css`
        color: ${(innerProp: any) => innerProp.iconColor};
      `}
  }
`;

export const IconText = (props: any) => {
  return (
    <IconTextWrapper {...props}>
      <i className={props.icon} />
      <StringComp>{props.children}</StringComp>
    </IconTextWrapper>
  );
};

export const Text = styled.span<any>`
    ${(props: any) =>
      props.bold &&
      css`
        font-weight: bold;
      `}
    ${(props: any) =>
      props.block &&
      css`
        display: block;
      `}
    ${(props: any) =>
      props.inlineBlock &&
      css`
        display: inline-block;
      `}
    ${(innerProp: any) =>
      innerProp.pad &&
      css`
        padding: ${(nestedProp: any) => nestedProp.pad};
      `}
    ${(innerProp: any) =>
      innerProp.margin &&
      css`
        margin: ${(nestedProp: any) => nestedProp.margin};
      `}
    color: ${(props: any) => props.color};
    font-size: ${(props: any) => props.size};
    & a{
        font-weight: 600;
        color: ${Theme.PrimaryColor};
        transition: all 0.2s ease-out;
        text-decoration: none;
        &:hover{
            color: ${darken(0.1, Theme.PrimaryColor)};
        }
    }
`;

Text.defaultProps = {
  size: Theme.PrimaryFontSize,
};
Text.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  bold: PropTypes.bool,
  block: PropTypes.bool,
  inlineBlock: PropTypes.bool,
  pad: PropTypes.string,
  margin: PropTypes.string,
};

const LabellerWrapper = styled.div`
  display: inline-block;
  align-items: flex-start;
  position: relative;
  padding-left: 20px;
  font-size: ${(props: any) => props.size}px;
  ${(props: any) =>
    props.icon &&
    css`
      & i {
        position: absolute;
        top: 0;
        left: 0;
      }
    `}
  ${Text} {
    & span {
      font-size: 10px;
    }
  }
`;

export const Labeller = (props: any) => {
  return (
    <LabellerWrapper {...props}>
      {props.icon && (
        <Icon className={props.icon} color={props.color} size={14} />
      )}
      <Text bold={true} block={true} size="10px" color={props.color}>
        {props.label}
      </Text>
      <Box height="5px" />
      <Text block={true} bold={props.bold} size={`${props.size}px`}>
        {props.value}
      </Text>
    </LabellerWrapper>
  );
};

Labeller.defaultProps = {
  color: Theme.PrimaryOrange,
  size: 15,
};
Labeller.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.any,
  icon: PropTypes.string,
  bold: PropTypes.bool,
  size: PropTypes.number,
};

import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { transparentize, darken, lighten } from 'polished';
import { Icon, StringComp } from '../Typo';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import { Theme } from '../Theme';

export const InputWrapper = styled.div`
  position: relative;

  & input {
    display: block;
    position: relative;
    z-index: 0;
    width: 100%;
    padding: 0 10px;
    height: 36px;
    border: 1px solid ${Theme.PrimaryInputOutline};
    border-radius: ${Theme.PrimaryRadius};
    &:focus {
      outline: none;
      border: 1px solid ${Theme.PrimaryColor};
      box-shadow: 0 0 3px ${transparentize(0.3, Theme.PrimaryColor)};
    }
    &::placeholder {
      color: ${darken(0, Theme.PrimaryInputOutline)};
    }
    &:disabled {
      background: ${transparentize(0.8, Theme.PrimaryInputOutline)};
      border: 1px dashed ${darken(0.1, Theme.PrimaryInputOutline)};
    }
    ${(props: any) =>
        props.error &&
        css`
        border: 1px solid ${Theme.PrimaryRed};
        box-shadow: 0 0 2px ${transparentize(0.6, Theme.PrimaryRed)};
      `}
  }

  & .type {
    display: inline-flex;
    position: absolute;
    height: 36px;
    z-index: 1;
    width: 36px;
    bottom: 0;
    right: 0;
    align-items: center;
    justify-content: center;
    color: ${darken(0.1, Theme.PrimaryInputOutline)};
  }
`;
export const InputLabel = styled.div`
  height: 20px;
  font-size: 9px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${lighten(0.2, Theme.PrimaryFontColor)};
`;
export const InputError = styled.div`
    font-size: ${Theme.FontSize_s};
    font-weight: lighter;
    font-style: italic;
    /* color: ${(props: any) => props.color}; */
    text-align: right;
    position: absolute;
    width: 100%;
    bottom: -19px;
    right: 0;
    color: ${transparentize(0.2, Theme.PrimaryRed)};
`;

const InputIcon = (type: any) => {
    switch (type) {
        case 'search':
            return ['icon-search', type];
        case 'number':
            return ['icon-sort-numeric', type];
        case 'location':
            return ['icon-globe', type];
        case 'plain':
            return ['', 'text'];
        case 'money':
            return ['icon-dollar', 'text'];
        case 'date':
            return ['', 'date'];
        case 'email':
            return ['icon-envelope-open-o', 'text'];
        case 'phone':
            return ['icon-phone-squared', 'text'];
        case 'password':
            return ['icon-block', type];
        default:
            return ['icon-sort-alphabet', type];
    }
};
export const Input = (props: any) => {
    return (
        <InputWrapper {...props}>
            {props.label && (
                <InputLabel>
                    <StringComp>{props.label}</StringComp>
                </InputLabel>
            )}
            {props.type !== 'date' && (
                <i className={`type ${InputIcon(props.type)[0]}`} />
            )}
            <input {...props} type={InputIcon(props.type)[1]} />
            <InputError>
                <StringComp>{props.error}</StringComp>
            </InputError>
        </InputWrapper>
    );
};

export const ViewData = (props: any) => {
    return (
        <InputWrapper {...props}>
            {props.label && (
                <InputLabel>
                    <StringComp>{props.label}</StringComp>
                </InputLabel>
            )}
            {props.type !== 'date' && (
                <i className={`type ${InputIcon(props.type)[0]}`} />
            )}
            <input
                {...props}
                disabled
                value={props?.value}
                type={InputIcon(props.type)[1]}
            />
        </InputWrapper>
    );
};
const DocWrapper = styled.div<any>`
  border: 1px solid #a6accb;
  display: flex;
`;
const DocColumn = styled.div<any>`
  display: flex;
  align-items: center;
`;
export const WaybillDoc = ({ onClick }: any) => {
    return (
        <DocWrapper onClick={onClick}>
            <Icon
                className="icon-file-pdf"
                iconed
                size={80}
                font="30px"
                color={Theme.PrimaryGrey}
            />
            <DocColumn>
                <InputLabel>
                    <StringComp>Waybill</StringComp>
                </InputLabel>
            </DocColumn>
        </DocWrapper>
    );
};

export const InvoiceDoc = ({ onClick }: any) => {
    return (
        <DocWrapper onClick={onClick}>
            <Icon
                className="icon-file-pdf"
                iconed
                size={80}
                font="30px"
                color={Theme.PrimaryGrey}
            />
            <DocColumn>
                <InputLabel>
                    <StringComp>Invoice</StringComp>
                </InputLabel>
            </DocColumn>
        </DocWrapper>
    );
};

export const TextWrapper = styled.div<any>`
  position: relative;

  & textarea {
    display: block;
    position: relative;
    z-index: 0;
    width: 100%;
    padding: 10px;
    height: ${(props: any) => props.height};
    border: 1px solid ${Theme.PrimaryInputOutline};
    border-radius: ${Theme.PrimaryRadius};
    &:focus {
      outline: none;
      border: 1px solid ${Theme.PrimaryColor};
      box-shadow: 0 0 3px ${transparentize(0.3, Theme.PrimaryColor)};
    }
    &::placeholder {
      color: ${darken(0, Theme.PrimaryInputOutline)};
    }
    &:disabled {
      background: ${transparentize(0.8, Theme.PrimaryInputOutline)};
      border: 1px dashed ${darken(0.1, Theme.PrimaryInputOutline)};
    }
    ${(props: any) =>
        props.error &&
        css`
        border: 1px solid ${Theme.PrimaryRed};
        box-shadow: 0 0 2px ${transparentize(0.6, Theme.PrimaryRed)};
      `}
  }
`;
export const TextArea = (props: {
    label: string;
    value: string;
    name: string;
    error: any;
    onChange: () => void;
}) => {
    return (
        <TextWrapper {...props}>
            {props.label && (
                <InputLabel>
                    <StringComp>{props.label}</StringComp>
                </InputLabel>
            )}
            <textarea {...props} />
            <InputError>
                <StringComp>{props.error}</StringComp>
            </InputError>
        </TextWrapper>
    );
};
TextArea.defaultProps = {
    height: '80px',
};
TextArea.propTypes = {
    height: PropTypes.string,
    onChange: PropTypes.func,
};

export const SelectWrapper = styled.div`
    position: relative;

    & .c9__control{
        border: 1px solid ${Theme.PrimaryInputOutline};
        ${(props: any) =>
        props.solid &&
        css`
            border: none;
            background: ${(property: any) => property.solid};
          `}
        border-radius: ${Theme.PrimaryRadius};
        height: 36px;
        &:focus{
            outline: none;
            border: 1px solid ${Theme.PrimaryColor};
            box-shadow: 0 0 3px ${transparentize(0.3, Theme.PrimaryColor)};
            ${(props: any) =>
        props.solid &&
        css`
                border: none;
                background: ${(innerProp: any) =>
                darken(0.05, innerProp.solid)};
                box-shadow: 0 0 3px
                  ${(innerProp: any) => transparentize(0.3, innerProp.solid)};
              `}
        }
        ${(props: any) =>
        props.disabled &&
        css`
            border: 1px dashed ${Theme.PrimaryInputOutline};
          `}
        &:hover{
            border: 1px solid ${Theme.PrimaryInputOutline};
            ${(props: any) =>
        props.solid &&
        css`
                border: none;
                background: ${(innerProp: any) =>
                darken(0.05, innerProp.solid)};
                box-shadow: 0 0 1px
                  ${(innerProp: any) => transparentize(0.3, innerProp.solid)};
              `}
        }
        &.c9__control--is-focused,:focus{
            outline: none;
            border: 1px solid ${Theme.PrimaryColor};
            box-shadow: 0 0 3px ${transparentize(0.3, Theme.PrimaryColor)};
            ${(props: any) =>
        props.solid &&
        css`
                border: none;
                background: ${(innerProp: any) =>
                darken(0.05, innerProp.solid)};
                box-shadow: 0 0 3px
                  ${(innerProp: any) => transparentize(0.3, innerProp.solid)};
              `}
        }
        &:disabled{
            background: ${transparentize(0.8, Theme.PrimaryInputOutline)};
            border: 1px dashed ${darken(0.1, Theme.PrimaryInputOutline)};
        }
        ${(props: any) =>
        props.error &&
        css`
            border: 1px solid ${Theme.PrimaryRed};
            box-shadow: 0 0 2px ${transparentize(0.6, Theme.PrimaryRed)};
          `}
        & .c9__placeholder{
            color: ${darken(0, Theme.PrimaryInputOutline)};
            ${(props: any) =>
        props.solid &&
        css`
                color: ${(innerProp: any) => darken(0.25, innerProp.solid)};
              `}
        }
        & .c9__indicators{
            ${(props: any) =>
        props.search &&
        css`
                &::after {
                  content: '\\e81a';
                  display: flex;
                  position: absolute;
                  height: 34px;
                  align-items: center;
                  font-family: 'cloud9';
                  color: ${Theme.PrimaryInputOutline};
                  ${(innerProp: any) =>
                innerProp.solid &&
                css`
                      color: ${transparentize(0.9, '#fff')};
                    `}
                  right: 52px;
                }
              `}
            & .c9__indicator-separator{
                display: none;
            }
            & .c9__indicator.c9__dropdown-indicator{
                height: 36px;
                width: 36px;
                border-radius: 0 ${Theme.PrimaryRadius} ${
    Theme.PrimaryRadius
    } 0;
                align-items: center;
                justify-content: center;
                background: ${transparentize(0.8, Theme.PrimaryInputOutline)};
                border-left: 1px solid ${Theme.PrimaryInputOutline};
                ${(props: any) =>
        props.solid &&
        css`
                    border-left: none;
                    background: none;
                    color: ${(innerProp: any) => darken(0.25, innerProp.solid)};
                  `}

                & svg{
                    fill:${Theme.PrimaryInputOutline};
                    width: 14px;
                    ${(props: any) =>
        props.solid &&
        css`
                        fill: ${(innerProp: any) =>
                darken(0.25, innerProp.solid)};
                      `}
                }
            }
        }
    }
    & .c9__menu{
        z-index: 10;
        border-radius: ${Theme.PrimaryRadius};
        border: 1px solid ${darken(0.2, Theme.PrimaryInputOutline)};
        ${(props: any) =>
        props.solid &&
        css`
            background: ${Theme.PrimaryGreyDark};
            color: #fff;
            border: none;
          `}
        ${Theme.Elevate_2};
        overflow: hidden;

        & .c9__menu-list{
            padding: 0;

            & .c9__option{
                &.c9__option--is-focused{
                    background: ${transparentize(
            0.9,
            Theme.PrimaryInputOutline,
        )};
                }
                &.c9__option--is-selected{
                    background: ${darken(0.2, Theme.PrimaryInputOutline)};
                    ${(props: any) =>
        props.solid &&
        css`
                        background: ${(innerProp: any) =>
                lighten(0.02, innerProp.solid)};
                      `}
                    &.c9__option--is-focused{
                        background: ${darken(0.25, Theme.PrimaryInputOutline)};
                        ${(props: any) =>
        props.solid &&
        css`
                            background: ${(innerProp: any) =>
                lighten(0.02, innerProp.solid)};
                          `}
                    }
                }
            }
        }
    }
`;

export const C9Select = (props: any) => {
    return (
        <SelectWrapper {...props}>
            {props.label && (
                <InputLabel>
                    <StringComp>{props.label}</StringComp>
                </InputLabel>
            )}
            <Select
                {...props}
                isSearchable={props.search ? true : false}
                isDisabled={props.disabled ? true : false}
                className="c9_select"
                classNamePrefix="c9"
            />
            <InputError>
                <StringComp>{props.error}</StringComp>
            </InputError>
        </SelectWrapper>
    );
};
export const C9AsyncSelect = (props: any) => {
    return (
        <SelectWrapper {...props}>
            {props.label && (
                <InputLabel>
                    <StringComp>{props.label}</StringComp>
                </InputLabel>
            )}
            <AsyncSelect
                {...props}
                className="c9_select"
                classNamePrefix="c9"
            />
            <InputError>
                <StringComp>{props.error}</StringComp>
            </InputError>
        </SelectWrapper>
    );
};

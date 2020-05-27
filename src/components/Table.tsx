import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../Theme';
import { darken, transparentize, lighten } from 'polished';
import { String } from '../Typo';

export const TableWrapper = styled.div`
  background: #fff;
  padding: 0;
  margin: 0;
`;
export const Table = styled.table<{ expandable?: boolean }>`
    border-collapse: collapse;
    width: 100%;
    /* overflow: hidden; */

    & thead{
        /* border-bottom: 1px solid ${darken(
          0.1,
          Theme.PrimaryGreyBackground,
        )}; */
        border-bottom: 1px solid ${darken(0.1, Theme.PrimaryBorderColor)};
        & th{
            text-align: left;
            font-weight: bold;
            padding: 15px;
            font-size: ${Theme.FontSize_s};
            font-family: ${Theme.TetiaryFont};
            color: ${darken(0.3, Theme.PrimaryBorderColor)};
        }
    }
    & tbody{
        & tr{
            min-height: 60px;
            border-bottom: 1px solid ${darken(
              0.04,
              Theme.PrimaryGreyBackground,
            )};
            position: relative;
            z-index: 1;
            transition:all 0.3s ease-out;
            &:nth-child(even){
                background-color: ${transparentize(
                  0.7,
                  Theme.PrimaryGreyBackground,
                )};
                ${(props: any) =>
                  props.expandable &&
                  css`
                    background-color: ${lighten(0.1, '#D4D7E6')};
                    border-bottom: 1px solid
                      ${darken(0.2, Theme.PrimaryGreyBackground)};
                    &:hover {
                      box-shadow: none;
                    }
                  `}
            }
            &:hover{
                z-index: 2;
                box-shadow: 0 2px 12px ${transparentize(
                  0.9,
                  Theme.PrimaryColor,
                )};
                ${(props: any) =>
                  props.expandable &&
                  css`
                    &.expanded {
                      box-shadow: none;
                    }
                  `}
            }
            ${(props: any) =>
              props.expandable &&
              css`
                &.expanded {
                  border-bottom: 1px solid transparent;
                }
              `}
            & td{
                padding: 15px;
                /* vertical-align: top; */
                & a{
        font-weight: 600;
        color: ${Theme.PrimaryColor};
        transition: all 0.2s ease-out;
        text-decoration: none;
        &:hover{
            color: ${darken(0.1, Theme.PrimaryColor)};
        }
    }
            }
        }
    }
`;

import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Theme } from '../Theme';
const LoaderWrapper = styled.div`
  ${(props: any) =>
        props.fullscreen &&
        css`
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      background: rgba(255, 255, 255, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2000;
    `}
  ${(props: any) =>
        props.mini &&
        css`
      width: 100%;
      padding: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2000;
    `}
`;

const Buff = (props: any) => {
    return (
        <svg
            style={{ transform: `scale(${props.scale})` }}
            width="44"
            height="44"
            viewBox="0 0 44 44"
            stroke={props.color}
        >
            <g fill="none" fillRule="evenodd" strokeWidth="2">
                <circle cx="22" cy="22" r="1">
                    <animate
                        attributeName="r"
                        begin="0s"
                        dur="1.8s"
                        values="1; 20"
                        calcMode="spline"
                        keyTimes="0; 1"
                        keySplines="0.165, 0.84, 0.44, 1"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="stroke-opacity"
                        begin="0s"
                        dur="1.8s"
                        values="1; 0"
                        calcMode="spline"
                        keyTimes="0; 1"
                        keySplines="0.3, 0.61, 0.355, 1"
                        repeatCount="indefinite"
                    />
                </circle>
                <circle cx="22" cy="22" r="1">
                    <animate
                        attributeName="r"
                        begin="-0.9s"
                        dur="1.8s"
                        values="1; 20"
                        calcMode="spline"
                        keyTimes="0; 1"
                        keySplines="0.165, 0.84, 0.44, 1"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="stroke-opacity"
                        begin="-0.9s"
                        dur="1.8s"
                        values="1; 0"
                        calcMode="spline"
                        keyTimes="0; 1"
                        keySplines="0.3, 0.61, 0.355, 1"
                        repeatCount="indefinite"
                    />
                </circle>
            </g>
        </svg>
    );
};
Buff.defaultProps = {
    color: Theme.PrimaryColor,
};
Buff.propTypes = {
    color: PropTypes.string,
    scale: PropTypes.number,
};
const Oval = (props: any) => {
    return (
        <svg
            {...props}
            width="38"
            height="38"
            viewBox="0 0 38 38"
            stroke={props.color}
        >
            <g fill="none" fillRule="evenodd">
                <g transform="translate(1 1)" strokeWidth="2">
                    <circle strokeOpacity=".2" cx="18" cy="18" r="18" />
                    <path d="M36 18c0-9.94-8.06-18-18-18">
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 18 18"
                            to="360 18 18"
                            dur="1s"
                            repeatCount="indefinite"
                        />
                    </path>
                </g>
            </g>
        </svg>
    );
};
Oval.defaultProps = {
    color: Theme.PrimaryColor,
};
Oval.propTypes = {
    color: PropTypes.string,
};
export const Loader = (props: any) => {
    return (
        <LoaderWrapper {...props}>
            {props.fullscreen && <Buff scale={2} />}
            {props.mini && <Oval />}
        </LoaderWrapper>
    );
};
Loader.defaultProps = {};
Loader.propTypes = {
    fullscreen: PropTypes.bool,
    mini: PropTypes.bool,
};

import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css, keyframes } from 'styled-components';
import { darken, transparentize, lighten } from 'polished';
import { Theme } from '../Theme';

const Load = keyframes`
  to {
    width: 100%;
  }
`;
const ShowUp = keyframes`
  0%{
      right: -50%;
  }
  5% {
    right: 0;
  }
  95% {
      right: 0;
      opacity: 1;
  }
  100% {
      right: -50%;
      opacity: 0;
  }
`;
const ShowUpLeft = keyframes`
  0%{
      left: -50%;
  }
  5% {
    left: 0;
  }
  95% {
      left: 0;
      opacity: 1;
  }
  100% {
      left: -50%;
      opacity: 0;
  }
`;

export const Toast = styled.div`
  background: #fff;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 0 0 3px 3px;
  font-family: ${Theme.PrimaryFont};
  font-size: 12px;
  min-width: 250px;
  margin: 10px
    ${(props) =>
      props.status &&
      (props.position === 'bottom-left' || props.position === 'top-left')
        ? '40px'
        : '10px'};
  position: relative;
  box-shadow: 3px 6px 10px
    ${(props) => transparentize(0.8, darken(0.35, props.color))};
  border-top: 3px solid ${(props) => lighten(0.4, props.color)};
  color: ${(props) => darken(0.3, props.color)};

  ${(props) =>
    props.animation &&
    css`
      animation-name: ${(innerProp) =>
        innerProp.autoClose &&
        (innerProp.position === 'bottom-left' ||
          innerProp.position === 'top-left')
          ? ShowUpLeft
          : ShowUp};
      animation-duration: ${(innerProp) => innerProp.duration / 1000}s;
      animation-timing-function: linear;
      animation-iteration-count: 1;
      animation-fill-mode: both;
    `}
  ​
    & i {
    display: inline-block;
    position: absolute;
    top: 10px;
    right: 10px;
    color: ${Theme.PrimaryFontColor};
    font-size: ${Theme.PrimaryFontSize};
    opacity: 0.4;
  }
  ​ &:after {
    position: absolute;
    content: '';
    opacity: 0.8;
    display: block;
    top: -3px;
    left: 0;
    height: 3px;
    width: 0;
    background: ${(props) => props.color};
    ${(props) =>
      props.animation &&
      css`
        animation-name: ${Load};
        animation-duration: ${(innerProp) => innerProp.duration / 1000}s;
        animation-timing-function: linear;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
      `}
  }
  ${(props) =>
    props.status &&
    css`
    &:before{
        font-family: 'cloud9';
        content: '\\${(innerProp) => innerProp.icon}';
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        position: absolute;
        top:-3px;
        left: -28px;
        height: calc(100% + 3px);
        width: 30px;
        background: ${(innerProp) => innerProp.color};
        opacity: 0.9;
        border-radius: 3px 0 0 3px;
    }
    `}
  ${(props) =>
    props.hover &&
    css`
      cursor: pointer;
      ​ &:hover {
        & i {
          opacity: 0.8;
        }
        &:after {
          -webkit-animation-play-state: paused;
          -moz-animation-play-state: paused;
          -o-animation-play-state: paused;
          animation-play-state: paused;
        }
      }
    `}
`;

class Timer {
  constructor(callback, delay) {
    this.timerId = null;
    this.start = Date.now();
    this.remaining = delay;
    this.callback = callback;

    this.resume();
  }

  pause() {
    window.clearTimeout(this.timerId);
    this.remaining -= Date.now() - this.start;
  }

  resume() {
    this.start = Date.now();
    window.clearTimeout(this.timerId);
    this.timerId = window.setTimeout(this.callback, this.remaining);
  }

  kill() {
    window.clearTimeout(this.timerId);
  }
}
export const notifyFunction = (message, options) => {
  const id = Theme.CreateUUID();
  let box = document.createElement('div');
  document
    .getElementById(`flexibull-notice-container-${options.position}`)
    .appendChild(box);
  box.setAttribute('id', id);

  const timer = new Timer(() => {
    options.autoClose ? document.getElementById(id).remove() : timer.kill();
  }, options.duration);

  switch (options.status) {
    case 'success':
      options.color = Theme.PrimaryGreen;
      options.icon = 'e81b';
      break;
    case 'error':
      options.color = Theme.PrimaryRed;
      options.icon = 'e819';
      break;
    case 'info':
      options.color = Theme.PrimaryColor;
      options.icon = 'e80a';
      break;
    case 'warning':
      options.color = Theme.PrimaryOrange;
      options.icon = 'f0f3';
      break;
    default:
      options.icon = null;
  }

  ReactDOM.render(
    <Toast
      color={options.color}
      hover={options.pauseOnHover}
      animation={options.autoClose}
      duration={options.duration}
      onMouseOver={() => options.pauseOnHover && timer.pause()}
      onMouseLeave={() => options.pauseOnHover && timer.resume()}
      position={options.position}
      status={options.status}
      icon={options.icon}
      onClick={() => {
        document.getElementById(id).remove();
        timer.kill();
      }}
    >
      {message}
      <i className="icon-cancel-1" />
    </Toast>,
    document.getElementById(id),
  );
};
const CreateNotificationContainers = (message, newOption) => {
  let box = document.createElement('div');
  document.getElementById('root').appendChild(box);
  box.setAttribute('id', `flexibull-notice-container-${newOption.position}`);
  box.style.cssText = `display: inline-block;z-index: 3000; position: fixed; ${
    newOption.position === 'bottom-left' ||
    newOption.position === 'bottom-right'
      ? 'bottom: 0;'
      : 'top:0;'
  } ${
    newOption.position === 'top-left' || newOption.position === 'bottom-left'
      ? 'left: 0;'
      : 'right: 0;'
  } `;
  notifyFunction(message, newOption);
};
export const Notify = (message, options = {}) => {
  const newOption = {
    position: options.position ? options.position : 'top-right',
    duration: options.duration ? options.duration : 5000,
    pauseOnHover: options.pauseOnHover === false ? false : true,
    color: options.color ? options.color : Theme.PrimaryColor,
    autoClose: options.autoClose === false ? false : true,
    status: options.status ? options.status : false,
  };
  document.getElementById(`flexibull-notice-container-${newOption.position}`)
    ? notifyFunction(message, newOption)
    : CreateNotificationContainers(message, newOption);
};

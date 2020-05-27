import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { darken, transparentize } from 'polished';
import { Theme } from '../Theme';

const ModalWrapper = styled.div<any>`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  left: 0;
  z-index: 3000;

  & .modalcontain {
    width: 100%;
    position: relative;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    ${(props: any) =>
        props.centered &&
        css`
        align-items: center;
      `}
    height: 100vh;
    overflow: auto;
    flex: 0;
  }

  &::after {
    background: ${transparentize(0.8, darken(0.3, Theme.PrimaryColor))};
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 500;
    content: '';
    display: block;
  }
`;
const ModalBody = styled.div<any>`
  width: 100%;
  max-width: ${(props: any) => props.width};
  background: #fff;
  border-radius: ${Theme.SecondaryRadius};
  ${Theme.Elevate_3};
  position: relative;
  z-index: 1000;
  margin: 30px;
  flex-grow: 0;
`;

ModalBody.propTypes = {
    width: PropTypes.string,
    centered: PropTypes.bool,
};

export const Modal = (props: any) => (
    <>
        {props.show ? (
            <ModalWrapper centered={props.centered}>
                <div className="modalcontain">
                    <ModalBody width={props.width}>{props.children}</ModalBody>
                </div>
            </ModalWrapper>
        ) : null}
    </>
);

Modal.defaultProps = {
    width: '100%',
    centered: false,
};

Modal.propTypes = {
    width: PropTypes.string,
    centered: PropTypes.bool,
    children: PropTypes.any,
    show: PropTypes.bool,
};

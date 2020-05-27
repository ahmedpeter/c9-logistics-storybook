import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Theme } from './Theme';
import { Icon } from './Typo';

const Star = styled.i<any>`
  display: inline-block;
  margin: 1px;
  font-size: ${(props: any) => props.size};
  color: ${(props: any) => props.color};
  ${(props: any) =>
    props.stared &&
    css`
      color: ${Theme.PrimaryOrange};
    `}
`;

Star.defaultProps = {
  size: '13px',
  color: Theme.PrimaryGreyLight,
  stared: false,
};
Star.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  stared: PropTypes.bool,
};

export const StarRating = (props: any): any => {
  const list = [];
  for (let i = 1; i <= props.max; i++) {
    list.push(
      i <= props.rating ? (
        <Star
          className="icon-star"
          stared={true}
          key={`stared_${i}_${props.id}`}
        />
      ) : (
        <Star className="icon-star" key={`stared_${i}_${props.id}`} />
      ),
    );
  }
  return list;
};

StarRating.defaultProps = {
  max: 5,
  rating: 0,
};
StarRating.propTypes = {
  max: PropTypes.number,
  rating: PropTypes.number,
  id: PropTypes.string,
};

const TofroWrapper = styled.div<any>`
  display: grid;
  grid-template-columns: minmax(50px, max-content) auto minmax(
      50px,
      max-content
    );
  grid-gap: 10px;
  justify-content: stretch;
  margin: 5px 0;
  & .tofro_mid {
    height: 50%;
    justify-self: stretch;
    position: relative;
    border-bottom: 1px dashed ${Theme.PrimaryGreyMid};
    &:after {
      content: '';
      height: 8px;
      width: 8px;
      position: absolute;
      bottom: -4px;
      left: -4px;
      background: ${Theme.PrimaryGreyMid};
      border-radius: 50%;
    }
    &:before {
      right: -4px;
      content: '';
      height: 8px;
      width: 8px;
      position: absolute;
      bottom: -4px;
      background: ${Theme.PrimaryGreyMid};
      border-radius: 50%;
    }
  }
  & .loc {
    &:last-child {
      text-align: right;
    }
  }
`;

export const ToFro = (props: any) => {
  return (
    <TofroWrapper>
      <div className="loc">{props.from}</div>
      <div className="tofro_mid"></div>
      <div className="loc">{props.to}</div>
    </TofroWrapper>
  );
};

const PassportWrapper = styled.div<any>`
  width: ${(props: any) => props.size}px;
  height: ${(props: any) => props.size}px;
  border-radius: 50%;
  border: 1px dotted ${Theme.PrimaryBorderColor};
  padding: ${(props: any) => props.size / 12}px;

  & div {
    border: 1px solid ${Theme.PrimaryBorderColor};
    padding: ${(props: any) => props.size / 12}px;
    border-radius: 50%;
    height: 100%;
    width: 100%;
  }
  & span {
    display: block;
    border-radius: 50%;
    height: 100%;
    width: 100%;
    background-color: ${Theme.PrimaryBorderColor};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${(props: any) => props.image});
  }
`;

export const Passport = (props: any) => {
  return (
    <PassportWrapper {...props}>
      <div>
        <span />
      </div>
    </PassportWrapper>
  );
};

Passport.defaultProps = {
  size: 120,
};
Passport.propTypes = {
  size: PropTypes.number,
  image: PropTypes.any,
};

const TagLinker = styled.div<any>`
  position: relative;
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: flex-start;
  grid-gap: 20px;

  & .tag-subject {
    border-radius: ${Theme.PrimaryRadius};
    padding: 0 5px;
    display: flex;
    align-items: center;
    height: 20px;
    font-size: 10px;
    background: ${Theme.PrimaryGreyMid};
    color: #fff;
  }
  & .tag-info {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      display: block;
      height: calc(100% - 21px);
      top: 10px;
      left: -10px;
      width: 1px;
      background: ${Theme.PrimaryGreyMid};
    }
    & div {
      position: relative;
      height: 21px;
      display: flex;
      align-items: center;
      padding: 0 6px;
      &::after {
        content: '';
        position: absolute;
        display: block;
        width: 10px;
        height: 1px;
        background: ${Theme.PrimaryGreyMid};
        top: 10px;
        left: -10px;
      }
      &::before {
        content: '';
        position: absolute;
        display: block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: ${Theme.PrimaryGreyMid};
        top: calc(50% - 3px);
        left: -3px;
      }
      &:first-child {
        &::after {
          width: 20px;
          left: -20px;
        }
      }
    }
  }
`;
export const TagLine = styled.div<any>`
  ${(props: any) =>
    props.large &&
    css`
      &::before {
        width: 7px;
        height: 7px;
        top: calc(50% - 4px);
        left: -4px;
      }
    `}
  ${(props: { italic: string }) =>
    props.italic &&
    css`
      font-style: italic;
      opacity: 0.8;
    `}
`;

export const TagLink = (props: any) => {
  return (
    <TagLinker>
      <div className="tag-subject">{props.subject}</div>
      <div className="tag-info">{props.children}</div>
    </TagLinker>
  );
};

export const RequestActivity = (props: any) => {
  const inspection = props?.activity?.inspection;
  const costing = props?.activity?.costing;
  const bills = props?.activity?.bills;

  return (
    <>
      <Icon
        size={25}
        font="12px"
        className="icon-eye"
        color={inspection ? Theme.PrimaryGreen : Theme.PrimaryGreyLight}
        title={inspection ? 'Cargo has been Inspected' : 'Not yet Inspected'}
      />
      <Icon
        size={25}
        font="12px"
        className="icon-credit-card-alt"
        color={costing ? Theme.PrimaryRed : Theme.PrimaryGreyLight}
        title={
          costing
            ? 'Costing and billing completed'
            : 'Costing is yet to be evaluated'
        }
      />
      <Icon
        size={25}
        font="12px"
        className="icon-envelope-open"
        color={bills ? Theme.PrimaryColor : Theme.PrimaryGreyLight}
        title={
          bills
            ? 'Bills has been sent to client'
            : 'No bill has been sent to the client'
        }
      />
    </>
  );
};

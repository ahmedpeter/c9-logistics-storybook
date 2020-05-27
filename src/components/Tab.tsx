import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../Theme';
import { StringComp } from '../Typo';

const TabContainer = styled.div<{ tag: string }>`
  display: block;
  position: relative;
  width: 100%;

  ${(props: any) =>
    props.tag &&
    css`
      &::after {
        content: '';
        position: absolute;
        top: 44px;
        left: -5px;
        width: 5px;
        height: 80px;
        display: block;
        background-color: ${(innerProp: { tag: string }) => innerProp.tag};
      }
    `}
`;

const TabList = styled.div`
  border-bottom: 1px solid ${Theme.PrimaryBorderColor};
  padding-left: 30px;
`;

const TabItem = styled.div<{ label: string; disabled: boolean }>`
    display: inline-flex;
    height: 44px;
    align-items: center;
    padding: 0 25px 0 20px;
    border: 1px solid ${Theme.PrimaryBorderColor};
    border-bottom: none;
    border-right: none;
    margin-bottom: -1px;
    margin-right: 13px;
    border-radius: ${Theme.SecondaryRadius} 0 0 0;
    cursor: pointer;
    text-transform: capitalize;
    font-size: ${Theme.FontSize_s};
    font-weight: bold;
    position: relative;
    background: ${Theme.PrimaryFade};
    z-index:0;
    min-width: 80px;
    /* ${Theme.PrimaryTransition}; */

    &::after{
        content: '';
        display: block;
        position: absolute;
        width: 50%;
        height: 100%;
        right: -7px;
        /* background: red; */
        transform: skew(15deg);
        border-right: 1px solid ${Theme.PrimaryBorderColor};
        z-index: 0;
    }
    &.active{
        height: 45px;
        border-bottom: 1px solid #fff;
        background: #fff;
        z-index:1;
        &::after{
            background: #fff;
            border-bottom: 1px solid #fff;
        }
    }
    & span{
        position: relative;
        z-index: 3;
    }
`;

const TabContent = styled.div`
  background: #fff;
  /* overflow: hidden; */
  border-radius: 0 0 ${Theme.SecondaryRadius} ${Theme.SecondaryRadius};
`;

const TabItemContent = styled.div`
  display: none;
  &.active {
    display: block;
  }
`;

export const Tab = (props: {
  tag?: string;
  view: number;
  setView: (val: number) => void;
  children: any;
  destroy?: boolean;
}) => {
  // const [view, setView] = useState(0);
  const { view, setView } = props;
  const [tag, setTag] = useState(props.children[view]?.props?.tag);
  if (props.children.length < 1) {
    return null;
  }

  const getCurrentView = (index: number, tagValue: string) => {
    setView(index);
    setTag(tagValue);
  };
  return (
    <TabContainer {...props} tag={tag}>
      <TabList>
        {props.children &&
          props.children.map((child: any, index: number) => {
            const { label, icon, disabled, tag: tagValue }: any = child.props;

            let className = 'tab-item';
            if (view === index) {
              className += ' active';
            }

            return (
              <TabItem
                className={className}
                disabled={disabled}
                label={label}
                onClick={() => !disabled && getCurrentView(index, tagValue)}
                key={`item_${label}`}
              >
                <span>
                  {icon && <i className={icon} />}
                  <StringComp>{label}</StringComp>
                </span>
              </TabItem>
            );
          })}
      </TabList>
      <TabContent className="tab-content">
        {props.children &&
          props.children.map((child: any, index: number) => {
            let classContent = 'tab-content';
            if (view === index) {
              classContent += ' active';
            }
            // if (child.props.label !== activeTab) return undefined;
            if (props.destroy) {
              if (view === index) {
                return undefined;
              }
              return (
                <TabItemContent
                  className={classContent}
                  key={`item_content_${child.props.label}`}
                >
                  {child.props.children}
                </TabItemContent>
              );
            } else {
              return (
                <TabItemContent
                  className={classContent}
                  key={`item_content_${child.props.label}`}
                >
                  {child.props.children}
                </TabItemContent>
              );
            }
          })}
      </TabContent>
    </TabContainer>
  );
};

import styled from 'styled-components';

export const Section = styled.section`
  border: 1px solid #000;
  background-color: #fff;
  margin-right: 15px;
  box-shadow: 0px 7px 15px -4px #000000;
  width: 470px;
  margin: auto;
  margin-top: 50px;
`;

export const Title = styled.h2`
  color: #a1abb6;
  text-align: center;
  margin-bottom: 14px;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  margin-left: -50px;
`;

export const StatisticsItem = styled.li`
  width: 60px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: -10px;
  // border-top: 2px solid;
`;

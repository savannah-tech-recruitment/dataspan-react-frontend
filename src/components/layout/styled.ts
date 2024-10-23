import styled from "styled-components";

export const Container = styled.div``;

export const PrimeHeader = styled.header`
  display: flex;
  justify-content: center;
  gap: 20px;
  text-align: center;
  padding: 50px 10px;
  margin: 0 0 30px;
  background: ${(props) => props.theme.colors.black};

  & > svg {
    width: 250px;
  }

  & a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }

  & a:hover {
    text-decoration: underline;
  }
`;

export const PrimeContent = styled.div`
  width: 100%;
  padding: 20px;
`;

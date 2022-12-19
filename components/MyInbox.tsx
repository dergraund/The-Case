import styled from "styled-components";

export const Title = styled.h1`
  display: block;
  color: White;
  font-size: 5rem;
`;

export const Message = styled.h1`
  color: White;
  font-size: 2.5rem;
  display: block;
`;
export const CenterDiv = styled.div`
  text-align: center;
  margin-top: 2rem;
  line-height: 0;
`;

function MyInbox() {
  return (
    <CenterDiv>
      <Title>My Inbox</Title>
      <Message>Redeem your packs</Message>
    </CenterDiv>
  );
}

export default MyInbox;

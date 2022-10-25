import styled from 'styled-components';
   
export const Box = styled.div`
  background: #1E0D0D;
  height: 50 vh;
  padding-top: 50px;
  padding-bottom: 20px;
  display: flex-row;
  
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Paragraph = styled.div`
  text-align : justify;
  color: #e9e9e9;
  display: flex;
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: -50px;
  margin-right: 50px;
`;

   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(200px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #e9e9e9;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
import styled from 'styled-components';
   
export const Box = styled.div`
  background: #1E0D0D;
  height: 50 vh;
  padding-top: 24px;
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
  margin-left: 40px;
  margin-right: -100px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(200px, 1fr));
  grid-gap: 40px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #ffff;
  margin-bottom: 4px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: rgb(204, 21, 21);
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Tag = styled.p`
  font-size: var(--smaller-font-size);
  text-align: center;
  color: #fff;
  background-color: rgb(204, 21, 21);
  margin-top: 50px;
  margin-bottom: -20px;
`;
import styled from 'styled-components';

export const StyledItem = styled.div`
  flex: 1;
  margin:10px;
  padding:20px;
  font-size: 14px;
  background-color:  #f8f8ff;
  border: 1px solid rgba(74,74,74,0.075);
  border-radius:  6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12);
    a {
      display:inline-block;
      color: #2e2e2e;
      text-decoration: none;
      &:hover {
        color: #8b8b8b;
       }
      > :first{
        margin-top:10px;
       }
      &:nth-child(2){
        font-size:12px;
        font-weight: bold; 
        font-style: italic;
       }
    };
    section {
      font-size: 10px;
      color: #444;
    }
`;

export const ImgContainer = styled.div`
  margin: 0 auto;
  width:200px;
  background-color: rgba(255,255,255,0.12);
  border-radius:  6px;
  box-shadow: 0 0 20px rgba(0,0,0,0.12);
`;

export const Img = styled.img`
   display: block;
   margin: 0 auto;
   max-width: 100%;
   max-height: 100px;
   background-image: url(${props => props.src});
`;

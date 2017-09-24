import styled from 'styled-components';

export const StyledItem = styled.div`
  flex: 1;
  margin:10px;
  padding:20px;
  font-size: 10px;
  border: 1px solid rgba(74,74,74,0.075);
  background-color:  #E5E5E5;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12);
    a {
      display:inline-block;
      color: #575972;
      text-decoration: none;
      &:hover {
        color: #9797C9;
       }
      > :first{
        margin-top:10px;
       }
      &:nth-child(2){
        font-size:12px;
        font-weight: bold; 
       }
    };
    section {
      color: #444;
    }
`;

export const ImgContainer = styled.div`
  margin: 0 auto;
  width:200px;
`;

export const Img = styled.img`
   display: block;
   margin: 0 auto;
   max-width: 100%;
   max-height: 100px;
   background-image: url(${props => props.src});
`;

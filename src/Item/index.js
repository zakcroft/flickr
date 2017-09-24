import React from 'react';
import { StyledItem, ImgContainer, Img } from './Item.styles';

export default ({ link, title, author, author_id, description, tags, media: { m } }) => (

  <StyledItem>
    <ImgContainer>
      <Img src={m} alt={title}/>
    </ImgContainer>
    <h5>
      <a href={link}>{title}</a> by <a
      href={`https://www.flickr.com/photos/${author_id}`}>{author.split('"')[1]}</a>
    </h5>
    <section>Tags: {
      tags && tags.split(' ').map((tag, i) => <span
        key={i}>Tags:  {i + 1}: {tag},  </span>)
    }</section>
  </StyledItem>
)

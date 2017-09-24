import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';

import { fetchData } from '../api';

import Item from '../Item/index'
import { Container } from './App.styles'

export default class extends Component {

  constructor (props) {
    super(props);

    this.state = {
      data: {
        items: []
      }
    };
  }

  componentWillMount() {
    injectGlobal`
       html {
         margin:0;
         background-color: #E5E5E5;
       }
     `;
  }


  componentDidMount () {
    fetchData().then((data) => {
      this.setState({ data });
    });

  }

  render () {
    return (<main>
      <Container>
        {this.state.data.items.map((item, i) =>
          <Item key={i} {...item}/>
        )}
      </Container>
    </main>)

  }
}

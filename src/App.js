import React, { Component, useState } from 'react';

class App extends Component {
  state = {
    imovel: []
  }

  async componentDidMount(){
    fetch("https://raw.githubusercontent.com/jsvini/desafio-frontend/master/assets/api.json?page=1")
            .then(res => res.json())
            .then(res => {
                this.setState({imovel: res.data});
                console.log(res.data)
            });
  }
render(){
  const { imovel } = this.state;
    return (
      <div>
        <h1>Lista Imoveis</h1>
        {imovel.map(item => (
          <div key={item.additionalId}>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    );
}
}

export default App;

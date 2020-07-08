import React, { Component, useState } from 'react';
import './styles.css';

class App extends Component {
  state = {
    imovel: [],
    currentPage: 1,
    postsPerPage: 12 //Numeros de imoveis por pagina
  }

  async componentDidMount(){
    fetch("https://raw.githubusercontent.com/jsvini/desafio-frontend/master/assets/api.json")  //Request da API
            .then(res => res.json())
            .then(res => {
                this.setState({imovel: res.data});
                console.log(res.data)
            });
  }
render(){
  const { imovel } = this.state;
  const { currentPage } = this.state;
  const { postsPerPage } = this.state;


  const indexLastPost = currentPage * postsPerPage;
  const indexFirstPost = indexLastPost - postsPerPage;
  const currentPost = imovel.slice(indexFirstPost, indexLastPost)
  
    
  //O button em cima da imagem eu coloquei a cidade como informação, pois não encontrei os dados certos, conforme a imagem exemplo, na API
  return (
      <div className="contentcard">
        {currentPost.map(item => (
          <div className="card"  key={item.additionalId}> 
            <img className="imgCard" src={item.advertisementAssets[0].advertisementThumbnails.thumb_xs.url}  />
            <button className="btn">{item.realestateSummary.address.city}</button>
              <div className="infoCard">
                <p className="title">{item.title}</p>
                <p className="subtitle">{item.realestateSummary.address.fullAddress}</p>
                <div className="subInfo">
                  <p className="price"><strong>{item.advertisementPrice.baseRent} €</strong></p>
                  <p>{item.realestateSummary.numberOfRooms} Zimmer</p>
                  <p className="size">ab {(item.realestateSummary.space).toFixed(2)} m²</p>
                </div>
              </div>
          </div>
        ))}
      </div>
    );
}
}

export default App;

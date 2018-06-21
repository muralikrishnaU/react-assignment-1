import React, { Component } from 'react'


class Product extends React.Component {
  render(){
    return(
      <div className="product">
            <div className="product-image">
                <img src={'https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg'}/>
            </div>
            <h4 className="product-name">{"Oranges"}</h4>
            <h4 className="product-price">$ {"10"}</h4>
            <div className="product-action">
                <button className="added" type="button"> Added </button>
            </div>
      </div>
    )
  }
}

class App extends React.Component{
  render(){
    return(

      <div className="products">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>


    );
  }

}

export default App

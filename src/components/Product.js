import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="thumbnail">
          <img alt="" src="https://cdn2.gsmarena.com/vv/pics/apple/apple-iphone-6-plus-1.jpg" />
          <div className="caption">
            <h3>Iphone 6 Plus</h3>
            <p> 16.000.0000 VNĐ</p>
          </div>
          <button type="button" className="btn btn-success">Mua hàng</button>
        </div>
      </div>
    );
  }
}

export default Product;
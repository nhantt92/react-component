import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
      	<div className="container-fluid">
      		<a className="navbar-brand">Bài 2: Component</a>
      		<ul className="nav navbar-nav">
      			<li className="active">
      				<a>Trang chủ</a>
      			</li>
      			<li>
      				<a>Danh mục sản phẩm</a>
      			</li>
      		</ul>
      	</div>
      </nav>
    );
  }
}
// function Header(){
// 	return(
// 		<div>
// 			<h1>Header</h1>
// 		</div>
// 	)
// }

export default Header;
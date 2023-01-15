import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/compat/app'

import 'firebase/compat/firestore';
// import db from './index.js'
// import firebase from 'firebase'
class App extends React.Component {

  constructor () {
    super();
    this.state = {
      products: [],
      loading: true
       }
    this.db = firebase.firestore()
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  componentDidMount (){
    //  firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((Snapshot) => {
    //     console.log(Snapshot)
    //     Snapshot.docs.map((doc) => {
    //       console.log(doc.data())
    //     });
    //     const products = Snapshot.docs.map((doc)=>{
    //      const data = doc.data();
    //      data['id'] = doc.id
    //       return data;
    //     })
    //     this.setState({
    //       products: products,
    //       loading:false
    //     })
    //   })
  this.db
    .collection('products')
    .onSnapshot((Snapshot) => {
      console.log(Snapshot)
      Snapshot.docs.map((doc) => {
        console.log(doc.data())
      });
      const products = Snapshot.docs.map((doc)=>{
       const data = doc.data();
       data['id'] = doc.id
        return data;
      })
      this.setState({
        products: products,
        loading:false
      })
    })
    
  }
  handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    })
  }
  handleDecreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products
    })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); // [{}]

    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }
  getCartTotal = () =>{
    const {products} = this.state;
    let cartTotal = 0;

    products.map((product) => {
      if(product.qty > 0)
      cartTotal += product.qty * product.price
      return '';
    })
    return cartTotal;
  }
  addProduct = () =>{
    this.db
      .collection('products')
      .add({
        img: '',
        price:100,
        qty: 4,
        title: 'Washing Machine'
      })
      .then((docRef) => {
        console.log('product has been added ',docRef)
      })
      .catch((error)=>{
        console.log('Error :', error)
      })
  }

  render () {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/*<button onClick={this.addProduct} style={{padding:20, fontSize:20}}>Add a product</button>*/>}
        <Cart
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
          products={products}
          />
          {loading && <h1>Loading products....</h1>}
        <div style={{fontSize : 20, padding:10}}>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
        products: [],
        // loading: true
    };
   this.db = firebase.firestore();
}  

componentDidMount() {
  // this.db
  //  .collection('products')
  //  .get()
  //  .then((snapshot) => {
  //    const products = snapshot.docs.map((doc) => {
  //      const data = doc.data();
  //      data['id'] = doc.id;
  //      return data;
  //    });
  //   this.setState({
  //     products:products,
  //     loading:false
  //   })
  //  })

  this.db
   .collection('products')
  //  .where('price','==',99)
  //  .where('title','==','watch')
  .orderBy('price','desc')
   .onSnapshot((snapshot) => {
     console.log(snapshot);
     snapshot.docs.map((doc) => {
       console.log(doc.data);
     });
     const products = snapshot.docs.map((doc) => {
       const data = doc.data();
       data['id'] = doc.id;
       return data;
     });
     this.setState({
       products: products
     })
   })
}


handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty += 1;

    // this.setState({
    //   products
    // })

    // new
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
     .update({
       qty:products[index].qty+1
     })
     .then(()=>{
       console.log("updating successfully");
     })
     .catch((error)=>{
       console.log("error",error);
     })
  }
  handleDecreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    // products[index].qty -= 1;

    // this.setState({
    //   products
    // })

    // new
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
     .update({
       qty:products[index].qty-1
     })
     .then(()=>{
       console.log("updating successfully");
     })
     .catch((error)=>{
       console.log("error",error);
     })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    // const items = products.filter((item) => item.id !== id); // [{}]

    // this.setState({
    //   products: items
    // })

    // new
    const docRef = this.db.collection('products').doc(id);
    docRef
     .delete()
     .then(() => {
       console.log("deleted Successfully");
     })
     .catch((error)=>{
       console.log("Error",error);
     })
  }
  getCartCount = () => {
    const {products} = this.state;
    let count = 0;
    products.forEach((product) => {
      count+=product.qty;
    });
    return count;
  }

  getCartTotal = () =>{
    const {products} = this.state;
    let total = 0;
    products.map((product)=>{
      total = total + product.price * product.qty;
    })
    return total;
  }

  addProduct = () =>{
    this.db
    .collection('products')
    .add({
      img:'',
      price:9000,
      qty:9,
      title:"Washing Machine"
    }).then((docRef) =>{
      console.log("Product Added successfulyy");
    })
    .catch((error) =>{
      console.log("error",error);
    })
  }

  render() {
    const {products} = this.state;
    return (
      <div className="App">
        {/* <button onClick={this.addProduct} >Add a Product</button> */}
      <Navbar cartCount={this.getCartCount()} />
      <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div>
          {/* {loading && "<h1>Loading Products</h1>"} */}
        Total Price : {this.getCartTotal()}
      </div>
      </div>
    );
  }
}
export default App;

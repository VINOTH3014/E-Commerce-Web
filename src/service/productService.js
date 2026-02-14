import Belt from'../assets/image/Belt.png'
import smartwatch from '../assets/image/smartwatch.png'
import Shorts from'../assets/image/Shorts.png'
import Airpods from '../assets/image/airpods.png'
import iphone from '../assets/image/iphone.png'
import Shoe from '../assets/image/shoe.png'
import Wallet from '../assets/image/wallet.png'
import tShirt from '../assets/image/tshirt.png'


const MOCK_PRODUCTS = [
  { id: "1", title: "Belt", price: 399, image: Belt },
  { id: "2", title: "Smart Watch", price: 3499, image: smartwatch },
  { id: "3", title: "Shorts", price: 599, image: Shorts},
  { id: "4", title: "Airpods", price: 2999, image: Airpods },
  { id: "5", title: "Iphone 16 Plus", price: 69999, image: iphone },
  { id: "6", title: "Shoe", price: 1199, image: Shoe },
  { id: "7", title: "Wallet", price: 499, image: Wallet },
  { id: "8", title: "T-Shirt", price: 799, image: tShirt},

];

export const productService = {
  async list() {
    return Promise.resolve(MOCK_PRODUCTS);
  },
  async getById(id) {
    const p = MOCK_PRODUCTS.find(x => x.id === id);
    if (!p) throw new Error("Product not found");
    return Promise.resolve(p);
  }
};

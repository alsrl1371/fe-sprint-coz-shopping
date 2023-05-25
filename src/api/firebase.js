import { initializeApp } from 'firebase/app';
import { v4 as uuid } from 'uuid';
import { getDatabase, set, ref } from 'firebase/database';

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB-dBSiE--QBIPV7gZOv4fddBXZIYO1vBU',
  authDomain: 'coz-shopping.firebaseapp.com',
  databaseURL:
    'https://coz-shopping-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'coz-shopping',
  storageBucket: 'coz-shopping.appspot.com',
  messagingSenderId: '974648086077',
  appId: '1:974648086077:web:48b7731b3d70fc4dc72454',
  measurementId: 'G-2QQQ69FB65',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export async function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export function logout() {
  signOut(auth).catch(console.error);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}

export async function addNewProduct(product, img) {
  const id = uuid();
  return set(ref(database, `products/${id}`), {
    ...product,
    id,
    price: parseInt(product.price),
    img,
    options: product.options.split(','),
  });
}

const getProductsAll = () => {
  const res = fetch('http://cozshopping.codestates-seb.link/api/v1/products');
  return res;
};

const getProductsMain = () => {
  const res = fetch(
    'http://cozshopping.codestates-seb.link/api/v1/products?count=4'
  );
  return res;
};

const APIs = {
  getProductsAll,
  getProductsMain,
};

export default APIs;

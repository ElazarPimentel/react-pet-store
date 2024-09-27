// filename: src/services/apiService.js

import { doc, getDoc, setDoc, updateDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase';

export const getCart = async (cartId) => {
  try {
    const cartDocRef = doc(db, 'carts', cartId);
    const cartDoc = await getDoc(cartDocRef);
    if (cartDoc.exists()) {
      return { data: cartDoc.data().items, fail: false };
    }
    return { data: null, fail: true }; 
  } catch {
    return { fail: true };
  }
};

export const createCart = async (cartId) => {
  try {
    const cartDocRef = doc(db, 'carts', cartId);
    await setDoc(cartDocRef, { items: [] });
    return { success: true };
  } catch {
    return { success: false };
  }
};

export const updateCart = async (cartId, items) => {
  try {
    const cartDocRef = doc(db, 'carts', cartId);

    const cartDoc = await getDoc(cartDocRef);
    if (!cartDoc.exists()) {
      await createCart(cartId);
    }

    await updateDoc(cartDocRef, { items });
    return { success: true };
  } catch {
    return { success: false };
  }
};

export const fetchAPI = async ({ categoryId = null, productId = null } = {}) => {
  try {
    if (productId !== null) {
      const numericProductId = Number(productId);  
      const q = query(collection(db, 'products'), where('id', '==', numericProductId));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        throw new Error('No product found');
      }
      return querySnapshot.docs[0].data();
    }

    const q = categoryId
      ? query(collection(db, 'products'), where('category', '==', categoryId))
      : collection(db, 'products');
    const querySnapshot = await getDocs(q);
    const products = querySnapshot.docs.map((doc) => doc.data());
    return products;
  } catch {
    return { fail: true };
  }
};

export const updateProductStock = async (productId, newStock) => {
  try {
    const q = query(collection(db, 'products'), where('id', '==', productId));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const productDoc = querySnapshot.docs[0];
      const productRef = doc(db, 'products', productDoc.id);
      await updateDoc(productRef, { stock: newStock });
      return { success: true };
    }
    return { success: false };
  } catch {
    return { success: false };
  }
};

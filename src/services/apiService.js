// filename: src/services/apiService.js

import { doc, getDoc, setDoc, updateDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase';

// Fetch cart by ID
export const getCart = async (cartId) => {
  try {
    const cartDocRef = doc(db, 'carts', cartId);
    const cartDoc = await getDoc(cartDocRef);
    if (cartDoc.exists()) {
      return { data: cartDoc.data().items, fail: false };
    }
    return { data: null, fail: true }; // Return failure if cart does not exist
  } catch (error) {
    console.error('Error fetching cart:', error);
    return { fail: true };
  }
};

// Create new cart with an empty items array
export const createCart = async (cartId) => {
  try {
    const cartDocRef = doc(db, 'carts', cartId);
    await setDoc(cartDocRef, { items: [] });
    return { success: true };
  } catch (error) {
    console.error('Error creating cart:', error);
    return { success: false };
  }
};

// Update cart with new items
export const updateCart = async (cartId, items) => {
  try {
    const cartDocRef = doc(db, 'carts', cartId);
    await updateDoc(cartDocRef, { items });
    return { success: true };
  } catch (error) {
    console.error('Error updating cart:', error);
    return { success: false };
  }
};

// Fetch products by category or individual product
export const fetchAPI = async ({ categoryId = null, productId = null } = {}) => {
  try {
    if (productId !== null) {
      const q = query(collection(db, 'products'), where('id', '==', productId));  // Query by numeric 'id' field
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) throw new Error('No product found');
      return querySnapshot.docs[0].data();
    }

    const q = categoryId
      ? query(collection(db, 'products'), where('category', '==', categoryId))
      : collection(db, 'products');
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => doc.data());  // Return product data
  } catch (error) {
    console.error('Error fetching products:', error);
    return { fail: true };
  }
};

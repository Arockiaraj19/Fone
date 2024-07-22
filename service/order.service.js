
import { db } from '../helpers/firebase';
import { collection, query, where, getDocs, startAfter, limit, addDoc,updateDoc,doc, deleteDoc  } from 'firebase/firestore';


const addOrders = async (brandModelSizeData) => {
    try {
      const docRef = await addDoc(collection(db, 'orders'), brandModelSizeData);
      console.log('Brand model size added with ID: ', docRef.id);
      return docRef.id;
    } catch (e) {
      console.error('Error adding brand model size: ', e);
      throw new Error('Failed to add brand model size');
    }
  };

  const addContacts = async (brandModelSizeData) => {
    try {
      const docRef = await addDoc(collection(db, 'contacts'), brandModelSizeData);
      console.log('Brand model size added with ID: ', docRef.id);
      return docRef.id;
    } catch (e) {
      console.error('Error adding brand model size: ', e);
      throw new Error('Failed to add brand model size');
    }
  };
  export {
addOrders,addContacts
  }
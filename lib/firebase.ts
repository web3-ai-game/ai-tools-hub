import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Check if Firebase config is valid
const isFirebaseConfigured = !!(
  firebaseConfig.apiKey && 
  firebaseConfig.authDomain && 
  firebaseConfig.projectId
);

let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let db: Firestore | undefined;
let storage: FirebaseStorage | undefined;

if (isFirebaseConfigured) {
  app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);
} else {
  console.warn('Firebase is not configured - Firebase features will be disabled');
}

export { app, auth, db, storage, isFirebaseConfigured };

// Helper functions for Firestore
import { 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  getDocs,
  addDoc,
  serverTimestamp,
  DocumentData,
  QueryConstraint,
  Timestamp,
} from 'firebase/firestore';

export const dbHelpers = {
  // Create or update a document
  async setDocument(collectionName: string, docId: string, data: DocumentData) {
    if (!db) throw new Error('Firebase is not configured');
    const docRef = doc(db, collectionName, docId);
    await setDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp(),
    }, { merge: true });
    return docRef.id;
  },

  // Get a single document
  async getDocument(collectionName: string, docId: string) {
    if (!db) throw new Error('Firebase is not configured');
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }
    return null;
  },

  // Add a new document
  async addDocument(collectionName: string, data: DocumentData) {
    if (!db) throw new Error('Firebase is not configured');
    const colRef = collection(db, collectionName);
    const docRef = await addDoc(colRef, {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return docRef.id;
  },

  // Query documents
  async queryDocuments(
    collectionName: string, 
    constraints: QueryConstraint[]
  ) {
    if (!db) throw new Error('Firebase is not configured');
    const colRef = collection(db, collectionName);
    const q = query(colRef, ...constraints);
    const querySnapshot = await getDocs(q);
    const docs: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      docs.push({ id: doc.id, ...doc.data() });
    });
    return docs;
  },

  // Update a document
  async updateDocument(collectionName: string, docId: string, data: DocumentData) {
    if (!db) throw new Error('Firebase is not configured');
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp(),
    });
  },

  // Delete a document
  async deleteDocument(collectionName: string, docId: string) {
    if (!db) throw new Error('Firebase is not configured');
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
  },

  // Get user's generations
  async getUserGenerations(userId: string, limitCount: number = 10) {
    return this.queryDocuments('generations', [
      where('userId', '==', userId),
      orderBy('createdAt', 'desc'),
      limit(limitCount),
    ]);
  },

  // Get user's payments
  async getUserPayments(userId: string, limitCount: number = 10) {
    return this.queryDocuments('payments', [
      where('userId', '==', userId),
      orderBy('createdAt', 'desc'),
      limit(limitCount),
    ]);
  },
};

export { collection, doc, query, where, orderBy, limit, serverTimestamp, Timestamp };

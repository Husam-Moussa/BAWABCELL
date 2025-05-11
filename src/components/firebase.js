
import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAW7jD8rMuMrIca9Hsdd-aroSyROHkeZ1Y",
  authDomain: "bawab-cell.firebaseapp.com",
  projectId: "bawab-cell",
  storageBucket: "bawab-cell.firebasestorage.app",
  messagingSenderId: "147408457519",
  appId: "1:147408457519:web:5528871cd5f802aa1c1bda",
  measurementId: "G-FGFBQ2BTGM"

};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Set the authentication persistence to LOCAL
setPersistence(auth, browserLocalPersistence)
  .catch((error) => {
    console.error('Error setting persistence:', error);
  });

export { auth };


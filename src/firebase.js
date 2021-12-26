import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCq6gxwoPZnc4B_67-NwOg_QEgVPTTeXik',
  authDomain: 'musicwonder-998.firebaseapp.com',
  projectId: 'musicwonder-998',
  storageBucket: 'musicwonder-998.appspot.com',
  messagingSenderId: '443444077083',
  appId: '1:443444077083:web:ead309e6348b3526e90ebe',
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);

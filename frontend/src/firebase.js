import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBNMuLIdV7QtltqbwVG-9T3vHwhlPwM98s",
  authDomain: "quiz-app-development.firebaseapp.com",
  projectId: "quiz-app-development",
  storageBucket: "quiz-app-development.appspot.com",
  messagingSenderId: "432616352618",
  appId: "1:432616352618:web:2863b5a0c7f124c88a9313",
  measurementId: "G-93V4PGY0R3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

export function resetPassword(email) {
  return sendPasswordResetEmail(auth, email);
}

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const provider = new FacebookAuthProvider();
// export const loginWithFaceboook = async () => {
//   try {
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // The signed-in user info.
//         const user = result.user;

//         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//         const credential = FacebookAuthProvider.credentialFromResult(result);
//         const accessToken = credential.accessToken;

//         // ...
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = FacebookAuthProvider.credentialFromError(error);

//         // ...
//       });
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };
// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}







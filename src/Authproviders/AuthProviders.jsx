import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  // createUser
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // signIn
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google Signin
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // update profile
  const updateUserProfile = (name, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };
  // logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // save user
  // const saveUser = async (user) => {
  //   const currentUser = {
  //     name: user?.displayName,
  //     email: user?.email,
  //     role: "worker",
  //     status: "Verified",
  //   };
  //   const { data } = await axiosPublic.put("/users", currentUser);
  //   return data;
  // };

  // auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // access token and set token
        const userInfo = { email: currentUser.email, withCredentials: true };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
            // saveUser(currentUser);
          }
        });
      } else {
        localStorage.removeItem("access-token");
      }

      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  // authInfo
  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signIn,
    googleSignIn,
    logOut,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;

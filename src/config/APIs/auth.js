import { Instance } from "../index";



export const loginWithEmailAndPassword = (payload) => {
  return Instance.post(`/user/login`, payload);
};


export const signUpWithEmailAndPassword = (payload) => {
  return Instance.post(`/user/signup`, payload);
};
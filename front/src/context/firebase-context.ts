import { Firestore } from "firebase/firestore/lite";
import { createContext } from "react"


export interface IFireBaseContext {
  db: Firestore
}

const FireBaseContext = createContext({
  db: {},
});

export default FireBaseContext;
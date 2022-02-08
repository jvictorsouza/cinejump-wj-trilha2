import { createContext } from "react";
import { TestStore } from "./testStore";

export const storesContext = createContext({
  testStore: new TestStore(),
});

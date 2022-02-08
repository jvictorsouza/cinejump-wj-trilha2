import { useContext } from "react";
import { storesContext } from "../stores";

export const useStores = () => useContext(storesContext);

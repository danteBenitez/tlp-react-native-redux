import { useSelector, useStore } from "react-redux";
import { AppState, AppStore } from "../store";

export const useAppStore = useStore.withTypes<AppStore>();
export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useAppStore.withTypes<AppStore>();
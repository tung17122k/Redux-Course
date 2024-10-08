import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import { toggleDarkMode } from "../redux-toolkit/globalSlice";
import { useDispatch } from "react-redux";
import useMedia from "./useMedia";
export default function useDarkMode() {
  const [enabledState, setEnabledState] = useLocalStorage("dark-mode-enabled");
  const enabled = typeof enabledState !== "undefined" ? enabledState : false;
  useEffect(
    () => {
      const className = "dark";
      const element = window.document.documentElement;
      if (enabled) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    },
    [enabled] // Only re-call effect when value changes
  );
  return [enabled, setEnabledState];
}
function usePrefersDarkMode() {
  return useMedia(["(prefers-color-scheme: dark)"], [true], false);
}

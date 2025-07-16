import { SnackbarProviderProps } from "notistack";
export const SNACKBAR_OPTIONS: Partial<SnackbarProviderProps> = {
  autoHideDuration: 3000,
  maxSnack: 3,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "right",
  },
};

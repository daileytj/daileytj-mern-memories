import { Theme } from "@mui/material";

const rootStyles = (theme: Theme) => ({
  "& .MuiTextField-root": {
    margin: theme.spacing(1),
  },
});

const paperStyles = (theme: Theme) => ({
  padding: theme.spacing(2),
});

const formStyles = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

const fileInputStyles = {
  width: "97%",
  margin: "10px 0",
};

const submitButtonStyles = {
  marginBottom: 10,
};

const styles = {
  root: rootStyles,
  paper: paperStyles,
  form: formStyles,
  fileInput: fileInputStyles,
  submitButton: submitButtonStyles,
};

export default styles;

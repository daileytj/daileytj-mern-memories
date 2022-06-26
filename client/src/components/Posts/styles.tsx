import { Theme } from "@mui/material";

const mainContainerStyles = {
  display: "flex",
  alignItems: "center",
};

const smMarginStyles = (theme: Theme) => ({
  margin: theme.spacing(1),
});

const actionDivStyles = {
  textAlign: "center",
};

const styles = {
  mainContainer: mainContainerStyles,
  smMargin: smMarginStyles,
  actionDiv: actionDivStyles,
};

export default styles;

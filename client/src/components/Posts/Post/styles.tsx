const mediaStyles = {
  height: 0,
  paddingTop: "56.25%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backgroundBlendMode: "darken",
};

const borderStyles = {
  border: "solid",
};

const fullHeightCardStyles = {
  height: "100%",
};

const cardStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "15px",
  height: "100%",
  position: "relative",
};

const overlayStyles = {
  position: "absolute",
  top: "20px",
  left: "20px",
  color: "white",
};

const overlay2Styles = {
  position: "absolute",
  top: "20px",
  right: "20px",
  color: "white",
};

const gridStyles = {
  display: "flex",
};

const detailsStyles = {
  display: "flex",
  justifyContent: "space-between",
  margin: "20px",
};

const titleStyles = {
  padding: "0 16px",
};

const cardActionsStyles = {
  padding: "0 16px 8px 16px",
  display: "flex",
  justifyContent: "space-between",
};

const styles = {
  media: mediaStyles,
  border: borderStyles,
  fullHeightCard: fullHeightCardStyles,
  card: cardStyles,
  overlay: overlayStyles,
  overlay2: overlay2Styles,
  grid: gridStyles,
  details: detailsStyles,
  title: titleStyles,
  cardActions: cardActionsStyles,
};

export default styles;

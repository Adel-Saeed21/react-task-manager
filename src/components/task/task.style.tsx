export const cardStyle = {
  width: "70%",
  height: 120,
  overflow: "hidden",
  transition: "all 0.3s ease",
  borderRadius: "20px",

  "&:hover": {
    height: 200,
  },
};

export const titleRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export const bodyTextStyle = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 1,
  overflow: "hidden",
  transition: "all 0.3s ease",

  ".MuiCard-root:hover &": {
    WebkitLineClamp: "unset",
    display: "block",
  },
};
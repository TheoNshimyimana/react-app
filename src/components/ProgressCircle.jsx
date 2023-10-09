import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `conic-gradient(${colors.primary[400]} 55%, trnsparent 56%),
        conic-Gradient(transparent 0deg, ${colors.blueAccent[500]} ${angle}deg 360)
        ${colors.greenAccent[500]}`,
        borderRadius: "50%",
        height: `${size}px`,
        width: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;

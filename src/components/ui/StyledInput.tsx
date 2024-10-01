import { styled } from "tamagui";

export const StyledInput = styled("input", {
  flex: 1,
  height: "40px",
  borderRadius: "8px",
  border: "2px solid #000",
  backgroundColor: "transparent",
  padding: "0 12px",
  fontSize: "14px",
  outline: "none",
  "&::placeholder": {
    color: "#888",
  },
  "&:focus": {
    borderColor: "#007bff",
    boxShadow: "0 0 0 2px rgba(0, 123, 255, 0.25)",
  },
  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.5,
  },
});

export const VARIANTS = {
  STANDARD: "standard",
  FILLED: "filled",
  OUTLINED: "outlined",
};

export const verifyVariant = (variant) => {
  return Object.values(VARIANTS).includes(variant)
    ? variant
    : VARIANTS.STANDARD;
};

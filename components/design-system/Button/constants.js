export const VARIANTS = {
  STANDARD: "standard",
  OUTLINED: "outlined",
  TEXT: "text",
};

export const verifyVariants = (variant) => {
  return Object.values(VARIANTS).includes(variant)
    ? variant
    : VARIANTS.STANDARD;
};

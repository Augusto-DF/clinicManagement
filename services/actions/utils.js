export const prepareForm = (formData) => {
  let formatData = {};
  for (const field of formData.keys()) {
    if (formData.get(field)) {
      formatData = { ...formatData, [field]: formData.get(field) };
    }
  }
  return formatData;
};

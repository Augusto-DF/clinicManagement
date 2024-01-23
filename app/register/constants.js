const REGISTER_FORM_FIELDS = [
  {
    label: "Name",
    props: {
      type: "text",
      name: "name",
      alt: "Tap your name",
      placeholder: "Name",
      required: true,
      variant: "outlined",
    },
  },
  {
    label: "Username",
    props: {
      type: "text",
      name: "username",
      alt: "Tap your username",
      placeholder: "Username",
      required: true,
      variant: "outlined",
    },
  },
  {
    label: "Email",
    props: {
      type: "email",
      name: "email",
      alt: "Tap your email",
      placeholder: "Email",
      required: true,
      variant: "outlined",
    },
  },
  {
    label: "Password",
    props: {
      type: "password",
      name: "password",
      alt: "Tap your password",
      placeholder: "Password",
      required: true,
      variant: "outlined",
    },
  },
];

export { REGISTER_FORM_FIELDS };

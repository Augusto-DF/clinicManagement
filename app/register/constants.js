const REGISTER_FORM_FIELDS = [
  {
    label: "Name",
    props: {
      type: "text",
      name: "name",
      alt: "Tap your name",
      placeholder: "name",
      required: true,
    },
  },
  {
    label: "Username",
    props: {
      type: "text",
      name: "username",
      alt: "Tap your username",
      placeholder: "username",
      required: true,
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
    },
  },
];

export { REGISTER_FORM_FIELDS };

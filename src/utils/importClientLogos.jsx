const clientLogos = import.meta.glob(
  "../assets/webp/clients/*.(png|jpg|jpeg|webp)",
  {
    eager: true,
  }
);

export default Object.values(clientLogos).map(
  (clientLogo) => clientLogo.default
);

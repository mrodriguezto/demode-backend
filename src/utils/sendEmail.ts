import { createTransport } from "nodemailer";

export const sendEmail = async (
  name: string,
  email: string,
  message: string
) => {
  const transporter = createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "marques.kling0@ethereal.email",
      pass: "PWMnc41A6VgHB3Av9P",
    },
  });

  await transporter.sendMail({
    from: `${name} - ${email}`, // sender address
    to: "bar@example.com, baz@example.com", // TODO: Change receivers
    subject: "Contacto desde la página web", // Subject line
    text: message, // plain text body
    html: `<p>${message}</p>`, // html body
  });
};

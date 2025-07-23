import nodemailer from "nodemailer";

export const sendGiftEmail = async ({ to, subject, html }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"StorySprout" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    });

    console.log("🎉 Email sent:", info.response);
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
};

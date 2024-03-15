import { RowData } from "./google-sheet";

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export interface EmailParams {
  to: string;
  from: string;
  subject: string;
  html: string;
}

export const buildAdminMail = (data: RowData) => {
  return {
    to: data.email || "",
    from: process.env.SENDGRID_SENDER || "",
    subject: "New submission",
    html: `
        <h2>New submission</h2><br>
        <p>Name: ${data.name}</p>
        <p>Email: ${data.email}</p>
        <p>Phone: ${data.phone}</p>
        <p>Company: ${data.company}</p>
        <p>Package: ${data.package}</p>
        `,
  };
};

export const sendMail = async (emailParams: EmailParams) => {
  try {
    await sgMail.send(emailParams);
  } catch (error) {
    throw new Error(`Error sending email: ${error}`);
  }
};

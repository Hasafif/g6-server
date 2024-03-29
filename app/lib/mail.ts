import { Resend } from "resend";
const resend = new Resend("re_2PdPD2Z7_P22aWom7f9YiPwEtJLFZBfuU");

async function sendMail(email: string, url: URL, username: string,expDur:number) {
  try {
    const data = await resend.emails.send({
      from: "G6 Account <koora@chatg6.ai>",
      to: [`${email}`],
      subject: "Email verification",
      html: `<p>Dear user: ${username} <br/> Please verify your <strong>G6 Account </strong> email <a href='${url.toString()}'>Here</a></p><br/>Note that this token will expire within ${expDur} minutes.`,
    });
    if(data)return Response.json({data:data.data},{status:200});
    return Response.json({error:'The email is not sent'},{status:226});
  } catch (error) {
    return Response.json({ error });
  }
}

export default sendMail;

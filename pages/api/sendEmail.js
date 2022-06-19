export default async function sendEmail(req, res) {
  let nodemailer = require("nodemailer");
  let cron = require("node-cron");
  let time = req.body[1][2];
  console.log(time);
  if (time.includes("pm")) {
    time = Number(time.substring(0, 1));

    time += 12;
  } else time = Number(time.substring(0, 1));
  const today = new Date();
  let date = Number(String(today.getDate()).padStart(2, "0"));
  console.log(`30 ${time - 1} ${date}-${date + 7}  * 0,1,2,3,4,5,6`);
  cron.schedule(`30 ${time - 1} ${date}-${date + 7}  * 0,1,2,3,4,5,6`, () => {
    sendEmailFunction();
  });

  async function sendEmailFunction() {
    let transporter = await nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: "reminder.basal@gmail.com",
        pass: process.env.password,
      },
      secure: true,
    });
    let message = {
      from: "reminder.basal@gmail.com",
      to: req.body[0].email,
      subject: "Medicine Reminder",
      text: req.body[0].message + "| Sent from: reminder.basal@gmail.com",
    };
    transporter.sendMail(message, (err, info) => {
      if (err) console.log(err);
      else console.log(info);
    });
    res.json("Success");
  }
}

export default async function sendEmail(req,res)
{   let nodemailer= require('nodemailer')
    let transporter = await nodemailer.createTransport({
    port:465,
    host:'smtp.gmail.com',
    auth:
    {
        user:'reminder.basal@gmail.com',
        pass: process.env.password
    },
    secure:true
});
  let message = {
    from: 'reminder.basal@gmail.com',
    to: req.body.email,
    subject: 'Medicine Reminder',
    text: req.body.message + '| Sent from: reminder.basal@gmail.com'

  }
//   console.log(message.text)
  transporter.sendMail(message, (err,info)=>
  {
      if(err)
        console.log(err)
    else 
        console.log(info)
  });
  res.json('Success');
}
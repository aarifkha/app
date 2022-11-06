import nodemailer from 'nodemailer'

export const mail = (req,res)=>{
var transporter = nodemailer.createTransport({
    host :'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'haidarali4408@gmail.com',
        pass:'gsqelbyefdwtkvbn'
    }
})

var mailOptions = {
    from:'haidarali4408@gmail.com',
    to:'haidarali4408@gmail.com',
    subject:'sending mail ',
    text:'hello aarif '
}

transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.log(error)

    }else{
        console.log("mail has been sent",info.response);
    }
})
}
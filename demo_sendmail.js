var nodemailer  = require('nodemailer');

var transporter = nodemailer.createTransport({
    //service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'bvarandas@gmail.com',
        pass: ''
    }
});

var mailOptions = {
    from: 'bvarandas@gmail.com',
    to:'bruno.ribeiro@fleetcor.com.br',
    subject: 'Sending e-mail using Node.js',
    text: 'Thats was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error)
    {
            console.log(error);
    }else
    {
        console.log('Email sent:' + info.response);
    }
});
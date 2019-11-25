var readline = require('readline-sync');
var nodemailer = require('nodemailer');

exports.getEmailInput = function() {
    process.stdout.write('---EMAIL INFORMATION---\n');
    process.stdout.write('You may have to enable third-party app access from your email provider to run this service\n');
    var email_service = readline.question('Email service? (ie \'gmail\'): ');
    var email_user = readline.question('Email user (with \'@xxxxx.xxx\'): ');
    var email_pass = readline.question('Email pass: ');
    var transporter = nodemailer.createTransport({
        service: email_service,
        auth: {
            user: email_user,
            pass: email_pass
        }
    });
    return transporter;
}

exports.getLimitInput = function(possible_limits) {
    var done = false;
    while (done == false) {
        // Select limit
        var limit = readline.question('Select a limit or enter DONE: ');

        if (Object.keys(possible_limits).indexOf(limit) > -1) {
            var limit_value = readline.question('Limit value: ');
            possible_limits[limit] = limit_value;
        } else if (limit == 'DONE' || limit == 'done' || limit == 'Done') {
            done = true;
        }
    }
    return possible_limits;
};
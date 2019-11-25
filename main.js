var nodemailer = require('nodemailer');
var sys = require('systeminformation');

var functions = require('./functions.js');

// List of available system limits
var possible_limits = { CPU_temp: 120, MEM_free: 1024 };

// Initial welcome message
process.stdout.write('===SYSTEM EMAIL ALERT SYSTEM===\n');

// Write to console array of available limits
process.stdout.write('Available limits: ');
Object.keys(possible_limits).forEach(element => {
    process.stdout.write(element + '  ');
});
process.stdout.write('\n\n');

// Ask for email details
transporter = functions.getEmailInput();

// Ask for limits
possible_limits = functions.getLimitInput(possible_limits);

process.stdout.write('SETUP COMPLETED\n');
process.stdout.write('Active limits: ');
Object.keys(possible_limits).forEach(element => {
    process.stdout.write(element + ' = ' + possible_limits[element] + '  ');
});
process.stdout.write('\n')
process.stdout.write('SERVICE RUNNING\n');
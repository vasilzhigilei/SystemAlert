var nodemailer = require('nodemailer');
var sys = require('systeminformation');
var readline = require('readline-sync');

var possible_limits = ['CPU_temp', 'MEM_free', ]


console.log('===SYSTEM EMAIL ALERT SYSTEM===');

var limit = readline.question('CPU limit? ');

console.log('CPU limit is ' + limit);
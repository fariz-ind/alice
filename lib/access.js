const axios = require('axios');
const os = require('os');
const CFonts = require('cfonts');
const chalk = require('chalk');

const logoOptions = {
  font: '3d',
  align: 'bottom',
  colors: ['yellow'],
};

const whatsappOptions = {
  colors: ['white'],
  font: 'console',
  align: 'top',
};

CFonts.say('LICE', logoOptions);
CFonts.say('\nName : Darwin\nScript : Alice Project\nReleased : 2023, 23, December\nTelegram : https://t.me/DalwinOfficial\nWhatsApp : https://wa.me/6283141561141\nYoutube : https://youtube.com/@bg-darwin\n', whatsappOptions);

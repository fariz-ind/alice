const {
   spawn
} = require('child_process')
const path = require('path')

var isRunning = false
function start() {
  if (isRunning) return
  isRunning = true
   let args = [path.join(__dirname, '../main.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Bot...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1 || code == 0) start()
      })
}




// TELE BOT
const { Telegraf } = require('telegraf');
const fs = require('fs');
const { config, saveConfig } = require('./addbottoken');
const loadMenu = require('../assets/telebot/menu/telebotmenu');  // Import the menu module
// Load all features from the 'allfeature' directory
async function loadAllFeatures(bot) {
  const allFeaturesDir = path.join(__dirname, '../assets/telebot');
  const files = await fs.promises.readdir(allFeaturesDir);

  let availableCommands = [];

  for (const file of files) {
    if (file.endsWith('.js')) {
      const allFeaturePath = path.join(allFeaturesDir, file);
      try {
        const allFeature = require(allFeaturePath);
        allFeature(bot, availableCommands);
        console.log(`allfeature ${file} loaded successfully.`);
      } catch (error) {
        console.error(`Failed to load allfeature ${file}:`, error);
      }
    }
  }

  return availableCommands;
}

// Initialize the bot
function initializeBot(name, token) {
  const bot = new Telegraf(token);


  // Load all features and handle commands
  loadAllFeatures(bot).then(availableCommands => {

    // Load menu commands from menu.js
    loadMenu(bot, availableCommands);
      
    // Addbot,listbot,deletebot function 
      bot.command('addbot', async (alice) => {
      const args = alice.message.text.split(' ');
      if (args.length < 3) {
        return alice.reply('Cara penggunaan fitur\n\n1. ambil token bot ada dari @botfather\n2. ketik /addbot dengan mengisi username dan tokennya\n3. jika sudah terdaftar, anda bisa menggunakan bot yang sudan anda daftarkan ✓\n\nexample : /addbot dalwingbot tokenxxxxxx');
      }

      const name = args[1];
      const token = args[2];
      config.bots.push({ name, token });
      saveConfig();

      initializeBot(name, token);
      alice.reply(`Bot ${name} telah ditambahkan dan dijalankan.`);
    });

    bot.command('listbot', (alice) => {
      if (config.bots.length === 0) {
        return alice.reply('Tidak ada bot yang terdaftar.');
      }

      let response = 'Daftar bot:\n';
      config.bots.forEach((bot, index) => {
        response += `${index + 1}. @${bot.name}\n`;
      });

      alice.reply(response);
    });

    bot.command('deletebot', (alice) => {
      const args = alice.message.text.split(' ');
      if (args.length < 2) {
        return alice.reply('Silakan masukkan nama bot yang ingin dihapus. Contoh: /deletebot <nama>');
      }

      const name = args[1];
      const botIndex = config.bots.findIndex(bot => bot.name === name);

      if (botIndex === -1) {
        return alice.reply(`Bot dengan nama ${name} tidak ditemukan.`);
      }

      config.bots.splice(botIndex, 1);
      saveConfig();

      alice.reply(`Bot ${name} telah dihapus.`);
    });

    // Launch the bot
    bot.launch()
      .then(() => {
        console.log(`Bot ${name} with token ${token} has started!`);
      })
      .catch(error => {
        console.error('Failed to start bot', error);
      });
  });

  // Handle SIGINT and SIGTERM signals
  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));
}

// Initialize all bots from the config
config.bots.forEach(bot => initializeBot(bot.name, bot.token));
// END OF TELE BOT INDEX STARTER

start()
const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, 'telelice.json'); // Mengubah referensi ke telelice.json
let config;

try {
  config = require(configPath);
} catch (error) {
  config = { bots: [] };
}

function saveConfig() {
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
}

module.exports = {
  config,
  saveConfig,
};
// Generate menu message
function generateMenuMessage() {
  return 'Hello! im Alice Telegram Bot, ready to assist you. Please choose a category';
}

// Generate menu keyboard
function generateMenuKeyboard() {
  return {
    inline_keyboard: [
      [{ text: 'Game', callback_data: 'menu_game' }],
      [{ text: 'See All', callback_data: 'menu_all' }],
      [{ text: 'Create Bot', callback_data: 'addbot'}],
    ]
  };
}


// Generate submenu keyboard
function generateSubMenuKeyboard(tag, availableCommands) {
  const commandsWithTag = availableCommands
    .filter(cmd => cmd.tags && cmd.tags.includes(tag));
  const buttons = commandsWithTag.map(cmd => [{ text: `/${cmd.command}`, callback_data: `run_${cmd.command}` }]);
  buttons.push([{ text: 'Kembali', callback_data: 'main_menu' }]); // Add back button to return to main menu
  return { inline_keyboard: buttons };
}

// Generate submenu caption
function generateSubMenuCaption(tag, availableCommands) {
  const commandsWithTag = availableCommands
    .filter(cmd => cmd.tags && cmd.tags.includes(tag));
  const commandList = commandsWithTag.map(cmd => `/${cmd.command}`).join('\n');
  return `Here are the commands for the ${tag}\n\n${commandList}`;
}

module.exports = {
  generateMenuMessage,
  generateMenuKeyboard,
  generateSubMenuKeyboard,
  generateSubMenuCaption
};
const {
    generateMenuMessage,
    generateMenuKeyboard,
    generateSubMenuCaption
} = require('./menuUtils');

module.exports = function(bot, availableCommands) {
    // Handle /menu command
    bot.command('menu', async (alice) => {
        try {
            const menuMessage = generateMenuMessage();
            const keyboard = generateMenuKeyboard();
    
        await alice.replyWithPhoto({ url: 'https://telegra.ph/file/9311b3f8c35f127dd1537.jpg' }, {
        caption: menuMessage,
        parse_mode: 'Markdown',
        reply_markup: keyboard
            });
        } catch (error) {
            console.error('Error in /menu command:', error);
            alice.reply('Sorry, an error occurred. Please try again later.');
        }
    });

    // Handle /start command
    bot.command('start', async (alice) => {
        try {
            const keyboard = {
                inline_keyboard: [
                    [{
                        text: 'Menu',
                        callback_data: 'main_menu'
                    }]
                ]
            };

        await alice.replyWithPhoto({ url: 'https://telegra.ph/file/9311b3f8c35f127dd1537.jpg' }, {
                caption: 'Hello! I am a Alice, here to assist you. Press "Menu" below to see the available features. \n\n Powered By @DalwinOfficial',
                reply_markup: keyboard
            });
        } catch (error) {
            console.error('Error in /start command:', error);
            alice.reply('Sorry, an error occurred. Please try again later.');
        }
    });

    // Handle submenu actions
    bot.action(/^menu_(.*)$/, async (alice) => {
        const menuType = alice.match[1];
        try {
            await alice.answerCbQuery();
            const caption = generateSubMenuCaption(menuType, availableCommands);

            await alice.editMessageCaption(caption, {
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Back',
                            callback_data: 'main_menu'
                        }]
                    ]
                }
            });
        } catch (error) {
            console.error(`Error in ${menuType} menu action:`, error);
            alice.reply('Sorry, an error occurred. Please try again later.');
        }
    });

    // Handle back to main menu
    bot.action('main_menu', async (alice) => {
        try {
            await alice.answerCbQuery();
            const menuMessage = generateMenuMessage();
            const keyboard = generateMenuKeyboard();
            await alice.editMessageCaption(menuMessage, {
                parse_mode: 'Markdown',
                reply_markup: keyboard
            });
        } catch (error) {
            console.error('Error in main_menu action:', error);
            alice.reply('Sorry, an error occurred. Please try again later.');
        }
    });

    // Handle the "Game" button action
    bot.action('menu_game', async (alice) => {
        try {
            await alice.answerCbQuery();
            const caption = generateSubMenuCaption('game', availableCommands);

            await alice.editMessageCaption(caption, {
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Back',
                            callback_data: 'main_menu'
                        }]
                    ]
                }
            });
        } catch (error) {
            console.error('Error in menu_game action:', error);
            alice.reply('Sorry, an error occurred. Please try again later.');
        }
    });

    // Handle the "AI" button action
    bot.action('menu_ai', async (alice) => {
        try {
            await alice.answerCbQuery();
            const caption = generateSubMenuCaption('ai', availableCommands);

            await alice.editMessageCaption(caption, {
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Back',
                            callback_data: 'main_menu'
                        }]
                    ]
                }
            });
        } catch (error) {
            console.error('Error in menu_ai action:', error);
            alice.reply('Sorry, an error occurred. Please try again later.');
        }
    });

    // Handle the "Downloader" button action
    bot.action('menu_downloader', async (alice) => {
        try {
            await alice.answerCbQuery();
            const caption = generateSubMenuCaption('downloader', availableCommands);

            await alice.editMessageCaption(caption, {
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Back',
                            callback_data: 'main_menu'
                        }]
                    ]
                }
            });
        } catch (error) {
            console.error('Error in menu_downloader action:', error);
            alice.reply('Sorry, an error occurred. Please try again later.');
        }
    });

    // Handle the "Search" button action
    bot.action('menu_search', async (alice) => {
        try {
            await alice.answerCbQuery();
            const caption = generateSubMenuCaption('search', availableCommands);

            await alice.editMessageCaption(caption, {
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Back',
                            callback_data: 'main_menu'
                        }]
                    ]
                }
            });
        } catch (error) {
            console.error('Error in menu_search action:', error);
            alice.reply('Sorry, an error occurred. Please try again later.');
        }
    });

    // Handle the "Tools" button action
    bot.action('menu_tools', async (alice) => {
        try {
            await alice.answerCbQuery();
            const caption = generateSubMenuCaption('tools', availableCommands);

            await alice.editMessageCaption(caption, {
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Back',
                            callback_data: 'main_menu'
                        }]
                    ]
                }
            });
        } catch (error) {
            console.error('Error in menu_tools action:', error);
            alice.reply('Sorry, an error occurred. Please try again later.');
        }
    });
};
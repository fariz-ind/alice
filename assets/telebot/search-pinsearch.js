const axios = require('axios');

module.exports = (bot, availableCommands) => {
  const commandName = 'pinsearch'; // Nama command yang didaftarkan
  availableCommands.push({ command: commandName, tags: ['all'] }); // Tambahkan commandName ke dalam daftar availableCommands dengan tags: search

  bot.command(commandName, async (ctx, next) => {
    const message = ctx.message.text;
    const commandArgs = message.split(' ').slice(1).join(' ').trim(); // Mengambil argumen dari pesan

    if (!commandArgs) {
      ctx.reply('Silakan masukkan kata kunci pencarian setelah perintah /pinterest, diikuti dengan jumlah gambar.\n\nContoh: /pinterest vicidior, 5');
      return;
    }

    const args = commandArgs.split(',').map(arg => arg.trim()); // Memisahkan kata kunci pencarian dan jumlah gambar
    const query = args[0]; // Kata kunci pencarian
    const maxImagesToSend = parseInt(args[1]) || 1; // Jumlah gambar yang diinginkan (default: 1 jika tidak disediakan)

    try {
      // Kirim pesan "Searching...🔎" sebelum melakukan pencarian
      const searchingMessage = await ctx.reply('Searching...🔎');

      // Mengirim permintaan GET ke API yang baru
      const response = await axios.get(`https://apis-samir.onrender.com/pinterest?query=${encodeURIComponent(query)}&number=${maxImagesToSend}`);

      console.log('API Response:', response.data); // Logging respons API

      if (response.data && response.data.result && response.data.result.length > 0) {
        const imageUrls = response.data.result.slice(0, maxImagesToSend); // Ambil sejumlah maksimal gambar sesuai permintaan pengguna

        // Kirim gambar-gambar ke pengguna
        for (const imageUrl of imageUrls) {
          await ctx.replyWithPhoto({ url: imageUrl });
        }

        // Edit pesan menjadi "NOW I FOUND IT!!! XD🥳" setelah selesai mengirim gambar-gambar
        await ctx.telegram.editMessageText(
          ctx.chat.id,
          searchingMessage.message_id,
          null,
          'NOW I FOUND IT!!! XD🥳'
        );

        // Kirim pesan "FINISHHHHH!!!" setelah selesai mengirim gambar-gambar
        ctx.reply('FINISHHHHH!!!');
      } else {
        // Jika tidak ditemukan gambar
        ctx.reply(`Maaf, tidak dapat menemukan gambar Pinterest untuk kata kunci "${query}".`);
      }

      // Meneruskan pesan ke middleware atau penanganan pesan berikutnya
      next();
    } catch (error) {
      console.error('Error fetching Pinterest images:', error.response ? error.response.data : error.message);
      ctx.reply('Maaf, terjadi kesalahan saat mencari gambar Pinterest.');
    }
  });
};
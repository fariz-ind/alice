// POWERED BY DARWIN SIGIT
const fs = require('fs')
const chalk=require('chalk')
const axios = require('axios');
const stringSimilarity = require("string-similarity");


// MODULE
global.version = require('@whiskeysockets/baileys/package.json').version
global.baileys = require('@whiskeysockets/baileys') 

// SETTING WHATSAPP BOT
global.owner = '6285797208971@s.whatsapp.net' // akses owner
global.owner2 = '6285797208971' // nomor owner
global.namabotnya = 'Refa' // nama bot
global.idnotice = '120363250825065387@newsletter' // harus di isi

// SETTING TELEGRAM BOT
global.BOT_TOKEN = '7737614295:AAHlEWKAnKDFICu_VsbfcZRA_UA9LnNPswk' // isi token API bot telegram, buat botnya di @botfather
global.BOT_NAME = "Refa" // your bot name
global.OWNER_NAME = "rizz" // your name
global.OWNER_NUMBER = "6285797208971" // your telegram number

// CREATOR OPTION
global.namaownernya = 'Rizz' // owner name
global.packname = '©Powered By Refa' // watermark
global.author = 'Rizz' // your name
global.sessionName = 'seson' // dont change

// SETTING PAIRING KODE BY DARWIN
global.usePairingCode = true
global.pairingNumber = '6285722050975'

// SET OWNER
global.fake = 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ refa'
global.email = 'farisrachman213@gmail.com'
global.instagram = 'https://instagram.com/koh.pinsen/'
global.github = 'https://github.com/fariz-ind'
global.wame = 'https://wa.me/6285797208971'
global.region = 'I`m From Indonesia'

// SETTING BOT
global.prefix = ['.']
global.self = true //true untuk public
global.autoreadsw = true // meneruskan status dari nomor bot
global.autoread = true // auto baca pesan pengguna
global.chatgpt = true // auto chat gpt, only private chat
global.simisimi = true // auto simi reply
global.welcome = false // sistem welcome group otomatis
global.onlygc = false // fungsi hanya untuk group chat
global.onlypc = false // fungsi hanya untuk private chat
global.game = true // guna agar command game bisa dimatikan/diaktifkan
global.autoreject = true // auto reject panggilan bot
global.antilink = false // antilink, hapus semua pesan berupa link
global.antiSpam = false // belum di beri fungsi
global.antibot = true // belum di beri fungsi
global.autojoin = true  // mode jelajah, bergabung otomatis tanpa command
global.boostgc = false // jumlah member dengan title group secara real time
global.autodel = false // hapus semua tipe pesan otomatis gc/pc
global.autodonlod = false // guna download file tanpa command awal
global.autoTyping = true // composing mengetik saat melakukan perintah
global.pengingat = false // notif sistem otomatis
global.tekspushkonv2 = '' // gunakan teks ini jika user tidak mengisi teks
global.select = 2 // opsi pilihan untuk polling bot

// RESPON AKSES
global.mess = {
sukses: '*[ Loaded Success ]*',
admin: '*[ System Notice ]* for *admin!* not *npc*',
botAdmin: '*[ System Notice ]* please add bot *admin*',
owner: '*[ System Access Failed ]* Access Denied',
group: '*[ System Notice ]* Use this in group chat!',
private: '*[ System Notice ]* Use this in private chat!',
bot: '*[ System Notice ]* Only Bot user',
error: '*[ System Failed ]* Error, please contact the owner',
wait: '*[ Loading ]* Please Wait',
prem: '*[ System Notice ]* this only premium user'
}

// THUMBNAIL PP BOT
global.ppkosong = 'https://telegra.ph/file/98aa5b8b01f53877824c3.jpg'
global.trash = fs.readFileSync('./Procfile')
global.thumb = fs.readFileSync('./assets/sticker/alice.png')
global.tamnel = 'https://telegra.ph/file/9311b3f8c35f127dd1537.jpg'

// FAKE TROLI REPLY
global.f1 = (a, b) => {
let fake = {key: {remoteJid: 'status@broadcast', participant: '42424242435@s.whatsapp.net'}, message: {orderMessage: {itemCount: 1, status: 1, surface: 1, message: a, orderTitle: '', thumbnail: b, sellerJid: '4242242354@s.whatsapp.net'}}};
return fake
}


// TEXT PENAGIHAN & INFO PRABAYAR
global.dana = '085722050975'
global.ovo = '085797208971'
global.shopepay = '085722050975'
global.qris = 'https://telegra.ph/file/773a6ecf95158a063ccfb.jpg' // cara buat gambar jadi url, ketik tourl ke bot alice
global.tagih = `bayar anjg` // ubah text hijau nya saja, jangan hapus ''


// PANEL SETTING
global.domain = 'https://lanzpanel.roomdigital.site' // isi domain panel anda
global.apicred = ''
global.apiuser = ''
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location



// SETTING APIKEY OPENAI & FILESTACK
global.fileStackApi = `AK5imWKw4QMeyD0g2ij2oz` // opsional - daftar di filestack

// APIKEY
global.skyzo = `refan`
global.lolkey = 'GataDios'
global.zeeone = `QIO8xicLNkEV43Y`

// SETTING GAME
global.gamewaktu = 60 // Game waktu
global.bmin = 1000 // Balance minimal 
global.bmax = 3000 // Balance maksimal
global.limit = 15 // Set limit
global.limitawal = {
premium: "Infinity",
free: 8000,
monayawal: 1000
}

// SETTING RPG
global.rpg = { // Bebas ubah value/angka
darahawal: 100,
besiawal: 15,
goldawal: 10,
emeraldawal: 5,
umpanawal: 5,
potionawal: 1
}
// DATABASE GAME
global.suit = {};
global.tictactoe = {};
global.petakbom = {};
global.kuis = {};
global.siapakahaku = {};
global.asahotak = {};
global.susunkata = {};
global.caklontong = {};
global.family100 = {};
global.tebaklirik = {};
global.tebaklagu = {};
global.tebakgambar = {};
global.tebakkimia = {};
global.tebakkata = {};
global.tebakkalimat = {};
global.tebakbendera = {};
global.tebakanime = {};
global.kuismath = {};

// GLOBAL MIMETYPE
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'


// HOOKER STRING FONT
global.similarity = (one,two) => similarity(one,two);
global.transformText = transformText
global.transformText2 = transformText2
global.transformText3 = transformText3



// FUNCTION FONT STRING
async function similarity(one,two) {
const treshold = stringSimilarity.compareTwoStrings(one, two)
return treshold.toFixed(2)
}

function transformText2(text) {
const charMap = {
'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ғ', 'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ',
'J': 'ᴊ', 'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'ǫ', 'R': 'ʀ',
'S': 's', 'T': 'ᴛ', 'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ', 'Z': 'ᴢ',
'0': '𝟶', '1': '𝟷', '2': '𝟸', '3': '𝟹', '4': '𝟺', '5': '𝟻', '6': '𝟼', '7': '𝟽', '8': '𝟾', '9': '𝟿'};
return text.split('').map(char => {
return charMap[char.toUpperCase()] || char;
}).join(' ');}

function transformText3(text) {
  const charMap = {
    'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ғ', 'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ',
    'J': 'ᴊ', 'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'ǫ', 'R': 'ʀ',
    'S': 's', 'T': 'ᴛ', 'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ', 'Z': 'ᴢ',
    '0': '𝟶', '1': '𝟷', '2': '𝟸', '3': '𝟹', '4': '𝟺', '5': '𝟻', '6': '𝟼', '7': '𝟽', '8': '𝟾', '9': '𝟿'
  };
  return text.toUpperCase().split('').map(char => {
    return charMap[char] || char;
  }).join(' ');
}

function transformText(text) {
const charMap = {
'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ғ', 'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ',
'J': 'ᴊ', 'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'ǫ', 'R': 'ʀ',
'S': 's', 'T': 'ᴛ', 'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ', 'Z': 'ᴢ'};

return text.toUpperCase().split('').map(char => {
return charMap[char] || char;
}).join('');}
      
// RELOAD FILE UPDATE
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})

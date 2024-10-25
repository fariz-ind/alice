require('./settings')
require('./assets/command')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const nodemailer = require('nodemailer');
const _data = require('./RPG.js')
const { modul } = require('./module');
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const fetch = require("node-fetch");
const os = require('os')
const crypto = require("crypto");
const fsx = require('fs-extra')
const didYouMean = require('didyoumean');
const stringSimilarity = require('string-similarity');
const bochil = require('@bochilteam/scraper')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const jsobfus = require('javascript-obfuscator')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const canvafy = require('canvafy')
const yts = require('yt-search');
const ytdl = require('ytdl-core');
const { addResponList, delResponList, resetListAll, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));

global.db.data = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db.data) global.db.data = {
users: {},
group: {},
chats: {},
tebakgambar: {},
database: {},
tebakkata: {},
settings: {},
donate: {},
others: {},
sticker: {},
...(global.db.data || {})
}

// LIB
const { savefromV2, ChatGpt, searchfilm,getSurah, tafsir, instagram4, capcutdl, mediafiredll, instagram2, instagram3, cekkuota, tele, ytPlayMp4, ytPlayMp3, textpro,igdl, kodepos, mediafire, ffstalk, mlstalk, Tiktok, surah, listsurah, ephoto, emoji} = require('./lib/scraper') 

module.exports = alice = async (alice, msg, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = global.prefix ? /^[¬∞‚Ä¢œÄ√∑√ó¬∂‚àÜ¬£¬¢‚Ç¨¬•¬Æ‚Ñ?+‚úì_=|~!?@#$%^&.¬©^]/gi.test(body) ? body.match(/^[¬∞‚Ä¢œÄ√∑√ó¬∂‚àÜ¬£¬¢‚Ç¨¬•¬Æ‚Ñ?+‚úì_=|~!?@#$%^&.¬©^]/gi)[0] : "." : prefa ?? global.prefix;
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() : null;
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await alice.decodeJid(alice.user.id)
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const from = m.key.remoteJid
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
   
        // FUNCTION WAKTU
        let d = new Date
        let gmt = new Date(0).getTime() - new Date('1 Januari 2023').getTime()
        const weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
        const week = d.toLocaleDateString('id', { weekday: 'long' })
        const calender = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })
        const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
        const timestampp = speed();
        const latensi = speed() - timestampp
        let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        const salam = 'Selamat '+dt.charAt(0).toUpperCase() + dt.slice(1)

        // DATABASE GLOBAL USER
        const users = global.db.users
        const listall = global.db.listall
 
        const ments = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]}
        const tag = `@${m.sender.split('@')[0]}`
        const taggc = `@${from.split('@')[0]}`


        const floc = {key : {participant : '0@s.whatsapp.net', ...(from ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `Hello ${pushname}`, jpegThumbnail: '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'}}}
        const reply = async(teks) => {alice.sendMessage(from, {text: teks})}

        // READ MORE/BACA SELENGKAPNYA
        const more = String.fromCharCode(8206)
        const readmore = more.repeat(4001)
        
        // FUNCTION SALDO & DATA
        const { addSaldo, minSaldo, cekSaldo, cekKoinPerak } = require("./database/deposit")
        let db_saldo = JSON.parse(fs.readFileSync("./database/saldo.json"));
        function toRupiah(angka) {
        var saldo = '';
        var angkarev = angka.toString().split('').reverse().join('');
        for (var i = 0; i < angkarev.length; i++)
        if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
        return '' + saldo.split('', saldo.length - 1).reverse().join('');
        }
        // BATAS SALDO

  

const {getRegisteredRandomId,addRegisteredUser,createSerial,delRegister,checkRegisteredUser,NamaKamu,UmurKamu} = require('./database/register.js')
const isRegistered = checkRegisteredUser(m.sender)
const type = getContentType(msg.message)


const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'


function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
function isNumber(x) {
return !isNaN(x);
}
function generateRandomCharacter() {
const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
return characters[Math.floor(Math.random() * characters.length)];
}
async function createOtpCanvas(avatar) {
const codetext = Array.from({ length: 4 }, generateRandomCharacter).join('');
const captchaBuffer = await new canvafy.Captcha()
.setBackground("image", "https://cdn.discordapp.com/attachments/1087030211813593190/1110243947311288530/beeautiful-sunset-illustration-1212023.webp")
.setCaptchaKey(codetext.toString())
.setBorder("#f0f0f0")
.setOverlayOpacity(0.7)
.build();
const securityBuffer = await new canvafy.Security()
.setAvatar(avatar)
.setBackground("image", "https://cdn.discordapp.com/attachments/1087030211813593190/1110243947311288530/beeautiful-sunset-illustration-1212023.webp")
.setCreatedTimestamp(Date.now())
.setSuspectTimestamp(1)
.setBorder("#f0f0f0")
.setLocale("id") // country short code - default "en"
.setAvatarBorder("#f0f0f0")
.setOverlayOpacity(0.9)
.build();
return {
image: captchaBuffer,
otp: codetext,
verified: securityBuffer
};
}

        // FUNCTION RPG
        const { cekDuluHasilBuruanNya, addInventoriBuruan, addIkan, addAyam, addKelinci, addDomba, addSapi, addGajah, kurangIkan, kurangAyam, kurangKelinci, kurangDomba, kurangSapi, kurangGajah, getIkan, getAyam, getBotol, addBotol, kurangBotol, getKardus, addKardus, kurangKardus, getKaleng, addKaleng, kurangKaleng, getKelinci, getDomba, getSapi, getGajah } = require('./database/rpg/buruan')
        const { cekMakananJson, addInvMakanan, addSate, kurangSate, getSate, addGoreng, kurangGoreng, getGoreng, addSop, kurangSop, getSop, addSteak, kurangSteak, getSteak } = require('./database/rpg/makanan')
        const { cekBuahJson, addInvBuah, addBibitApel, kurangBibitApel, getBibitApel, addBibitBuah, kurangBibitBuah, getBibitBuah, addBuah, kurangBuah, getBuah, addApel, kurangApel, getApel, addDitanam, kurangDitanam, getDitanam, addDitanam1, kurangDitanam1, getDitanam1 } = require('./database/rpg/buah')
        const { cekWarungJson, addInvWarung, addPermen, kurangPermen, getPermen, addEs, kurangEs, getEs, addPedas, kurangPedas, getPedas, addRingan, kurangRingan, getRingan } = require('./database/rpg/warung')
        const { cekBuildJson, addInvBuild, addRumah, kurangRumah, getRumah, addPertanian, kurangPertanian, getPertanian, addWarung, kurangWarung, getWarung } = require('./database/rpg/build')
        const { cekBahanJson, addInvBahan, addKayu, kurangKayu, getKayu, addBatu, kurangBatu, getBatu, addSemen, kurangSemen, getSemen, addPasir, kurangPasir, getPasir } = require('./database/rpg/bahan')        
        const {getJoinRandomId,addJoinUser,createSerialJoin,checkJoinUser} = require('./database/rpg/joinrpg.js')

        
        
        let _buruan = JSON.parse(fs.readFileSync('./database/rpg/hasil_buruan.json'));
        let _darahOrg = JSON.parse(fs.readFileSync('./database/rpg/darah.json'))
        
        
        
        try {
        var ppuser = await alice.profilePictureUrl(m.sender, 'image')} catch (err) {
        let ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'}
        let ppnyauser = await getBuffer(ppuser)
        let ppUrl = await alice.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
            	  

        const sendres = (huhu, teks) => {
        alice.sendMessage(huhu, {
        document: fs.readFileSync('./assets/sticker/alice.png'),
        fileName: `${salam}`,
        mimetype: "image/png",
        fileLength: 99999999999,
        jpegThumbnail: fs.readFileSync('./assets/sticker/alice.png'),
        description: 'hello',
        caption: teks,
        contextInfo: {
        isForwarded: true,
        mentionedJid: [m.sender],
        businessMessageForwardInfo: {  
        businessOwnerJid: global.owner 
        },
        forwardedNewsletterMessageInfo: {
        newsletterName: `POWERED BY PROJECT ALICEZATION`,
        newsletterJid: global.idsal},
        externalAdReply: {
        title: `ALICE ZUBERG`, 
        body: `Online On ${runtime(process.uptime())}`,
        thumbnailUrl: `${global.tamnel}`,
        sourceUrl: `${global.saluran}`,
        mediaType: 1,
        renderLargerThumbnail: true }}},
        {quoted:floc})}
        
        const sendwin = (jawa, teks) => {
        alice.sendMessage(jawa, {  
        image: {url: global.tamnel},  
        contextInfo: {  
        forwardingScore: 10, 
        isForwarded: true,  
        mentionedJid: [m.sender], 
        businessMessageForwardInfo: {  
        businessOwnerJid: '626283783838@s.whatsapp.net',
        }
        } 
        })}
        // FUNCTION SIZE FILE
        const FileSize = (number) => {
        var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"]
        var tier = Math.log10(Math.abs(number)) / 3 | 0
        if(tier == 0) return number
        var postfix = SI_POSTFIXES[tier]
        var scale = Math.pow(10, tier * 3)
        var scaled = number / scale
        var formatted = scaled.toFixed(1) + ''
        if (/\.0$/.test(formatted))
        formatted = formatted.substr(0, formatted.length - 2)
        return formatted + postfix
        }
        
        // REPLY WITH URL
        const reply795 = async(teks) => {
        alice.sendMessage(from, {text: teks, contextInfo:{
        mentionedJid: alice.ments(`${teks}`),
        /*forwardedNewsletterMessageInfo: { 
        newsletterJid: global.idsal,
        serverMessageId: null, 
        newsletterName: `Online On ${runtime(process.uptime())}`,
        },*/
        forwardingScore: 0,  
        isForwarded: true,  
        businessMessageForwardInfo: {
        businessOwnerJid:botNumber },
        externalAdReply : {
        title: `Hallo ${pushname}`, 
        body: `${salam}`,
        mediaType: 1,
        previewType: "PHOTO",
        thumbnailUrl: 'https://telegra.ph/file/a5648303d7671c107ab66.jpg', 
        renderLargerThumbnail: true,
        sourceUrl: `${global.saluran}`}}})
        }
        
        const customsend = (text, mentions, title) => {
        let cus = alice.sendMessage(m.chat, {
        text: text,
        contextInfo: {
        mentionedJid: [mentions],
        externalAdReply: {
        title: title,
        thumbnailUrl: `${global.tamnel}`,
        sourceUrl: `${global.saluran}`,
        mediaType: 1,
        renderLargerThumbnail: true}}})
        return cus
        }
                      
        const replycus = (teks, title, trl) => {
        alice.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": title, "previewType": "PHOTO","thumbnailUrl": trl }}}, { quoted: m })
        }
        let jsalam = /^(assalam(ualaikum)?|(salamualaiku|(sa(lamu|m)liku|sala))m)$/i.test(m.text)
        if (jsalam) {
        let jawab = `WaalaikumSalam ??`
        reply(jawab)
        }


//MESSAGE CUSTOM
const noregis = `Hai @${m.sender.split('@')[0]} Untuk Melanjutkan Bermain Bot, Tolong Register Terlebih Dulu Penggunan:
  
*Email:* .regmail gmailkamu@gmail.com
*Manual:* .register namakamu.umurkamu`

const youban = `Hai @${m.sender.split('@')[0]} Kamu Tidak Bisa Menggunakan Bot, Karna Kamu Telah Di Banned Oleh Owner`

const onlyGroup = async() => {
let joinbang = `Hallo ${tag}, untuk menggunakan semua fitur *Alice*, harap masukan bot ke group anda terlebih dahulu agar anda dapat akses lebih di dalam group gratis tanpa prabayar
${global.group}

[ ketik *buatbot* untuk membuat bot anda sendiri ]`
reply795(joinbang)}

const canvas = require('canvas')
const canva = require('knights-canvas')
const levelling = require('./lib/levelling')

const threshold = 0.72

const role = () => {
let user = global.db.data.users[m.sender]
let role = (user.level <= 3) ? 'Warrior V'
: ((user.level >= 3) && (user.level <= 6)) ? 'Warrior IV'
: ((user.level >= 6) && (user.level <= 9)) ? 'Warrior III'
: ((user.level >= 9) && (user.level <= 12)) ? 'Warrior II'
: ((user.level >= 12) && (user.level <= 15)) ? 'Warrior I'
: ((user.level >= 15) && (user.level <= 18)) ? 'Elite V'
: ((user.level >= 18) && (user.level <= 21)) ? 'Elite IV'
: ((user.level >= 21) && (user.level <= 24)) ? 'Elite III'
: ((user.level >= 24) && (user.level <= 27)) ? 'Elite II'
: ((user.level >= 27) && (user.level <= 30)) ? 'Elite I'
: ((user.level >= 30) && (user.level <= 33)) ? 'Master V'
: ((user.level >= 33) && (user.level <= 36)) ? 'Master IV'
: ((user.level >= 36) && (user.level <= 39)) ? 'Master III'
: ((user.level >= 39) && (user.level <= 42)) ? 'Master II'
: ((user.level >= 42) && (user.level <= 45)) ? 'Master I'
: ((user.level >= 45) && (user.level <= 48)) ? 'Grand Master V'
: ((user.level >= 48) && (user.level <= 51)) ? 'Grand Master IV'
: ((user.level >= 51) && (user.level <= 54)) ? 'Grand Master III'
: ((user.level >= 54) && (user.level <= 57)) ? 'Grand Master II'
: ((user.level >= 57) && (user.level <= 60)) ? 'Grand Master I'
: ((user.level >= 60) && (user.level <= 63)) ? 'Epic V'
: ((user.level >= 63) && (user.level <= 66)) ? 'Epic IV'
: ((user.level >= 66) && (user.level <= 69)) ? 'Epic III'
: ((user.level >= 69) && (user.level <= 71)) ? 'Epic II'
: ((user.level >= 71) && (user.level <= 74)) ? 'Epic I'
: ((user.level >= 74) && (user.level <= 77)) ? 'Legend V'
: ((user.level >= 77) && (user.level <= 80)) ? 'Legend IV'
: ((user.level >= 80) && (user.level <= 83)) ? 'Legend III'
: ((user.level >= 83) && (user.level <= 86)) ? 'Legend II'
: ((user.level >= 86) && (user.level <= 89)) ? 'Legend I'
: ((user.level >= 89) && (user.level <= 91)) ? 'Mythic V'
: ((user.level >= 91) && (user.level <= 94)) ? 'Mythic IV'
: ((user.level >= 94) && (user.level <= 97)) ? 'Mythic III'
: ((user.level >= 97) && (user.level <= 100)) ? 'Mythic II'
: ((user.level >= 100) && (user.level <= 105)) ? 'Mythic I'      
: ((user.level >= 105) && (user.level <= 120)) ? 'Mythical glory'
: ((user.level >= 120) && (user.level <= 130)) ? 'Mythical glory 700'
: ((user.level >= 150) && (user.level <= 160)) ? 'Mythical glory 800'
: ((user.level >= 160) && (user.level <= 170)) ? 'Mythical glory 900'
: ((user.level >= 170) && (user.level <= 185)) ? 'Mythical glory 1000'
: ((user.level >= 185) && (user.level <= 200)) ? 'Mythical glory 1100'
: ((user.level >= 200) && (user.level <= 400)) ? 'Mythical glory 1200'
: ((user.level >= 405) && (user.level <= 450)) ? 'Mythical glory 1300'
: ((user.level >= 700) && (user.level <= 1000)) ? 'Mythical glory 100000'
: 'God?'
return role
}
        // DATABABESSS
let user = global.db.data.users[m.sender]

if (user) {
if (!isNumber(user.antispam)) user.antispam = 0
if (!isNumber(user.premiumDate)) user.premiumDate = -1
if (!isNumber(user.premiumTime)) user.premiumTime = 1
if (!('premium' in user)) user.premium = false
if (!isNumber(user.level)) user.level = 0
if (!('autolevelup' in user)) user.autolevelup = true
if (!('birthdaySet' in user)) user.birthdaySet = false
if (!isNumber(user.birthday)) user.birthday = 0
if (!isNumber(user.cm)) user.cm = 0
if (!isNumber(user.cl)) user.cl = 0
if (!isNumber(user.cu)) user.cu = 0
if (!('role' in user)) user.role = ''
if (!('cai' in user)) user.cai = ''
if (!isNumber(user.exp)) user.exp = 100
if (!isNumber(user.darah)) user.darah = 100
if (!isNumber(user.besi)) user.besi = 10
if (!isNumber(user.emas)) user.emas = 10
if (!isNumber(user.emerald)) user.emerald = 10
if (!isNumber(user.potion)) user.potion = 10
if (!isNumber(user.sword)) user.sword = 0
if (!isNumber(user.armor)) user.armor = 0
if (!isNumber(user.key)) user.key = 0
if (!isNumber(user.atm)) user.atm = 0
if (!isNumber(user.money)) user.money = 100
if (!isNumber(user.kucing)) user.kucing = 0
if (!isNumber(user.anjing)) user.anjing = 0
if (!isNumber(user.anjingexp)) user.anjingexp = 0    
if (!isNumber(user.kucingexp)) user.kucingexp = 0    
if (!isNumber(user.nagaexp)) user.nagaexp = 0     
if (!isNumber(user.kyubiexp)) user.kyubiexp = 0     
if (!isNumber(user.bibitapel)) user.bibitapel = 0
if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
if (!isNumber(user.jeruk)) user.jeruk = 0
if (!isNumber(user.anggur)) user.anggur = 0
if (!isNumber(user.pisang)) user.pisang = 0
if (!isNumber(user.mangga)) user.mangga = 0
if (!isNumber(user.apel)) user.apel = 0
if (!('codemail' in user)) user.codemail = ''
if (!('gid' in user)) user.gid = ''
if (!('owner' in user)) user.owner = false
if (!isNumber(user.kyubi)) user.kyubi = 0
if (!isNumber(user.naga)) user.naga = 0
if (!isNumber(user.rubah)) user.rubah = 0
if (!isNumber(user.serigara)) user.serigala = 0
if (!('gmail' in user)) user.gmail = ''
if (!isNumber(user.kuda)) user.kuda = 0
if (!isNumber(user.elang)) user.elang = 0
if (!isNumber(user.feedpet)) user.feedpet = 0
if (!('regp' in user)) user.regp = false
if (!isNumber(user.bar)) user.bar = 100
if (!isNumber(user.rename)) user.rename = 0
if (!isNumber(user.toxicamount)) user.toxicmount = 0
if (!('mailcode' in user)) user.mailcode = ''
if (!isNumber(user.invalidcode)) user.invalidcode = 0
if (!isNumber(user.paus)) user.paus = 1
if (!isNumber(user.kepiting)) user.kepiting = 1
if (!isNumber(user.gurita)) user.gurita = 1
if (!isNumber(user.cumi)) user.cumi = 1
if (!isNumber(user.buntal)) user.buntal = 1
if (!isNumber(user.dory)) user.dory = 1
if (!isNumber(user.lumba)) user.lumba = 1
if (!isNumber(user.lobster)) user.lobster = 1
if (!isNumber(user.hiu)) user.hiu = 1
if (!isNumber(user.udang)) user.udang = 1
if (!isNumber(user.ikan)) user.ikan = 1
if (!isNumber(user.nila)) user.nila = 1
if (!isNumber(user.bawal)) user.bawal = 1
if (!isNumber(user.lele)) user.lele = 1
if (!isNumber(user.orca)) user.orca = 1
if (!isNumber(user.banteng)) user.banteng = 1
if (!isNumber(user.harimau)) user.harimau = 1
if (!isNumber(user.gajah)) user.gajah = 1
if (!isNumber(user.kambing)) user.kambing = 1
if (!isNumber(user.panda)) user.panda = 1
if (!isNumber(user.buaya)) user.buaya = 1
if (!isNumber(user.kerbau)) user.kerbau = 1
if (!isNumber(user.sapi)) user.sapi = 1
if (!isNumber(user.monyet)) user.monyet = 1
if (!isNumber(user.babihutan)) user.babihutan = 1
if (!isNumber(user.babi)) user.babi = 1
if (!isNumber(user.ayam)) user.ayam = 1
if (!isNumber(user.sate)) user.sate = 0
if (!isNumber(user.ayamg)) user.ayamg = 0
if (!isNumber(user.ikang)) user.ikang = 0
if (!isNumber(user.mie)) user.mie = 0
if (!isNumber(user.sops)) user.sops = 0
} else global.db.data.users[m.sender] = {
antispam: 0,
mie: 0,
miem: 0,
sops: 0,
paus: 1,
boxs: 1,
kepiting: 1,
gurita: 1,
cumi: 1,
buntal: 1,
dory: 1,
lumba: 1,
lobster: 1,
hiu: 1,
lele: 1,
nila: 1,
bawal: 1,
udang: 1,
ikan: 1,
orca: 1,
banteng: 1,
harimau: 1,
gajah: 1,
kambing: 1,
panda: 1,
buaya: 1,
kerbau: 1,
sapi: 1,
monyet: 1,
babihutan: 1,
babi: 1,
ayam: 1,
ikang: 0,
ayamg: 0,
sate: 0,
level: 0,
darah: 100,
autolevelup: true,
bar: 100,
gmail: '',
toxicmount: 0,
gid: '',
birthdaySet: false,
birthday: 0,
besi: 10,
owner: false,
regp: false,
cai: '',
codemail: '',
bibitanggur: 0,
bibitapel: 0,
bibitpisang: 0,
bibitmangga: 0,
bibitjeruk: 0,
apel: 0,
anggur: 0,
mangga: 0,
pisang: 0,
jeruk: 0,
cm: 0,
atm: 0,
kucing: 0,
naga: 0,
feedpet: 0,
kuda: 0,
kyubi: 0,
anjing: 0,
elang: 0,
rubah: 0,
elang: 0,
serigala: 0,
cl: 0,
cu: 0,
emas: 10,
emerald: 10,
potion: 10,
sword: 0,
armor: 0,
key: 0,
role: '',
money: 100,
rename: 0,
premiumTime: 1,
premium: false,
exp: 100
}   

async function levelUp(avatar) {

const image = await new canva.Up()

.setAvatar(avatar)

.toAttachment();

const data = image.toBuffer();

return data

}

const isPremium = global.db.data.users[m.sender].premium

const isRenameCard = global.db.data.users[m.sender].rename


async function progres(avatar, nama, expneed, expnow, levelnow, ){

const image = await new canva.Rank()

    .setAvatar(avatar)

    .setUsername(nama)

    .setBg("https://telegra.ph/file/43e18c0d3cac8d8877b51.jpg")

    .setNeedxp(expneed)

    .setCurrxp(expnow)

    .setLevel(levelnow)

    .setRank("https://i.ibb.co/Wn9cvnv/FABLED.png") 

    .toAttachment();

  data = image.toBuffer();

  return data

  }
  
function formatCurrency(amount) {
  return `${amount.toLocaleString()}zm`; // Menggunakan toLocaleString() untuk menambahkan pemisah ribuan
}

const formattedMoneyZ = formatCurrency(global.db.data.users[m.sender].money);


 
const level = global.db.data.users[m.sender].level
       
var levelorang = `-`

if (isRegistered) {

var levelorang = level

}    

db.data.users[m.sender].role = role()

var rolenya = `-`

if (isRegistered) {

var rolenya = role()

}

const addexp = () => {

const addexp = db.data.users[m.sender].exp += 20

return addexp

}
if (command && budy) {
addexp()
}

const addMonay = (sender, amount) => {
const addM = db.data.users[sender].money += amount
return addM
}
const kurangMonay = (sender, amount) => {
const kurM = db.data.users[sender].money -= amount
return kurM
}
const getMonay = (sender) => {
const cekM = db.data.users[sender].money
return cekM
}
const addDarah = (sender, amount) => {
const addD = db.data.users[sender].darah += amount
return addD
}
const kurangDarah = (sender, amount) => {
const kurD = db.data.users[sender].darah -= amount
return kurD
}
const getDarah = (sender) => {
const cekD = db.data.users[sender].darah
return cekD
}

const addBar = (sender, amount) => {
const addB = db.data.users[sender].bar += amount
return addB
}

const kurangBar = (sender, amount) => {
const kurB = db.data.users[sender].bar -= amount
return kurB
}

const getBar = (sender) => {
const cekB = db.data.users[sender].bar
return cekB
}  

const addBesi = (sender, amount) => {
const addB = db.data.users[sender].besi += amount
return addB
}

const kurangBesi = (sender, amount) => {
const kurB = db.data.users[sender].besi -= amount
return kurB
}

const getBesi = (sender) => {
const cekB = db.data.users[sender].besi
return cekB
}

const addEmas = (sender, amount) => {
const addM = db.data.users[sender].emas += amount
return addM
}

const kurangEmas = (sender, amount) => {
const kurM = db.data.users[sender].emas -= amount
return kurM
}

const getEmas = (sender) => {
const cekM = db.data.users[sender].emas
return cekM
}

const addEmerald = (sender, amount) => {
const addM = db.data.users[sender].emerald += amount
return addM
}

const kurangEmerald = (sender, amount) => {
const kurM = db.data.users[sender].emerald -= amount
return kurM
}

const getEmerald = (sender) => {
const cekM = db.data.users[sender].emerald
return cekM
}

const addPotion = (sender, amount) => {
const addM = db.data.users[sender].potion += amount
return addM
}

const kurangPotion = (sender, amount) => {
const kurM = db.data.users[sender].potion -= amount
return kurM
}

const getPotion = (sender) => {
const cekM = db.data.users[sender].potion
return cekM
}

const addCM = (sender, amount) => {
const addM = db.data.users[sender].cm += amount
return addM
}

const kurangCM = (sender, amount) => {
const kurM = db.data.users[sender].cm -= amount
return kurM
}

const getCM = (sender) => {
const cekM = db.data.users[sender].cm
return cekM
}

const addCL = (sender, amount) => {
const addM = db.data.users[sender].cl += amount
return addM
}

const kurangCL = (sender, amount) => {
const kurM = db.data.users[sender].cl -= amount
return kurM
}
const getCL = (sender) => {
const cekM = db.data.users[sender].cl
return cekM
}
const addCU = (sender, amount) => {
const addM = db.data.users[sender].cu += amount
return addM
}
const kurangCU = (sender, amount) => {
const kurM = db.data.users[sender].cu -= amount
return kurM
}

const getCU = (sender) => {
const cekM = db.data.users[sender].cu
return cekM
}

const addKucing = (sender, amount) => {
const addB = db.data.users[sender].kucing += amount
return addB
}

const kurangKucing = (sender, amount) => {
const kurB = db.data.users[sender].kucing -= amount
return kurB
}

const getKucing = (sender) => {
const cekB = db.data.users[sender].kucing
return cekB
}

const addNaga = (sender, amount) => {
const addB = db.data.users[sender].naga += amount
return addB
}

const kurangNaga = (sender, amount) => {
const kurB = db.data.users[sender].naga -= amount
return kurB
}

const getNaga = (sender) => {
const cekB = db.data.users[sender].naga
return cekB
}

const addKyubi = (sender, amount) => {
const addB = db.data.users[sender].anjing += amount
return addB
}

const kurangKyubi = (sender, amount) => {
const kurB = db.data.users[sender].anjing -= amount
return kurB
}

const getKyubi = (sender) => {
const cekB = db.data.users[sender].anjing
return cekB
}

const addAnjing = (sender, amount) => {
const addB = db.data.users[sender].anjing += amount
return addB
}

const kurangAnjing = (sender, amount) => {
const kurB = db.data.users[sender].anjing -= amount
return kurB
}

const getAnjing = (sender) => {
const cekB = db.data.users[sender].anjing
return cekB
}

const addKuda = (sender, amount) => {
const addB = db.data.users[sender].kuda += amount
return addB
}

const kurangKuda = (sender, amount) => {
const kurB = db.data.users[sender].kuda -= amount
return kurB
}

const getKuda = (sender) => {
const cekB = db.data.users[sender].kuda
return cekB
}

const addElang = (sender, amount) => {
const addB = db.data.users[sender].elang += amount
return addB
}

const kurangElang = (sender, amount) => {
const kurB = db.data.users[sender].elang -= amount
return kurB
}

const getElang = (sender) => {
const cekB = db.data.users[sender].elang
return cekB
}

const addRubah = (sender, amount) => {
const addB = db.data.users[sender].rubah += amount
return addB
}

const kurangRubah = (sender, amount) => {
const kurB = db.data.users[sender].rubah -= amount
return kurB
}

const getRubah = (sender) => {
const cekB = db.data.users[sender].rubah
return cekB
}

const addSerigala = (sender, amount) => {
const addB = db.data.users[sender].serigala += amount
return addB
}

const kurangSerigala = (sender, amount) => {
const kurB = db.data.users[sender].serigala -= amount
return kurB
}

const getSerigala = (sender) => {
const cekB = db.data.users[sender].serigala
return cekB
}

const addKey = (sender, amount) => {
const addB = db.data.users[sender].key += amount
return addB
}

const kurangKey = (sender, amount) => {
const kurB = db.data.users[sender].key -= amount
return kurB
}

const getKey = (sender) => {
const cekB = db.data.users[sender].key
return cekB
}

const addArmor = (sender, amount) => {
const addB = db.data.users[sender].armor += amount
return addB
}

const kurangArmor = (sender, amount) => {
const kurB = db.data.users[sender].armor -= amount
return kurB
}

const getArmor = (sender) => {
const cekB = db.data.users[sender].armor
return cekB
}

const addSword = (sender, amount) => {
const addB = db.data.users[sender].sword += amount
return addB
}

const kurangSword = (sender, amount) => {
const kurB = db.data.users[sender].sword -= amount
return kurB
}

const getSword = (sender) => {
const cekB = db.data.users[sender].sword
return cekB
}
const isMonay = formattedMoneyZ  
  
   
function antiemror(){
let useret = global.db.data.users[m.sender]
if ((useret.money * 1) > 999999999999999999) {
useret.money = 999999999999999999
} else if ((useret.money * 1) < 0) {
useret.money = 0
}
if (useret.money == NaN) {

useret.money = 0
}}

if (isRegistered && m.sender && isCreator && !isCreator) {
antiemror()
}          

        const isJoin = checkJoinUser(m.sender)
        let DarahAwal =  global.rpg.darahawal
        let BarAwal = 100
        const isDarah = getDarah(m.sender)
        const isBar = getBar(m.sender)
        const isCekDarah = getDarah(m.sender)
        const isCekBar = getBar(m.sender)
        const isPotion = getPotion(m.sender)
        const isIkan = getIkan(m.sender)
        const isBotol = getBotol(m.sender)
        const isCM = getCM(m.sender)
        const isTanamApel = getDitanam(m.sender)
        const isTanamBuah = getDitanam1(m.sender)
        const isSate = getSate(m.sender)
        const isKey = getKey(m.sender)
        const isGoreng = getGoreng(m.sender)
        const isSop = getSop(m.sender)
        const isSteak = getSteak(m.sender)
        const isCU = getCU(m.sender)
        const isCL = getCL(m.sender)
        const isBibitApel = getBibitApel(m.sender)
        const isBibitBuah = getBibitBuah(m.sender)
        const isApel = getApel(m.sender)
        const isSword = getSword(m.sender)
        const isArmor = getArmor(m.sender)
        const isBuah = getBuah(m.sender)
        const isRumah = getRumah(m.sender)
        const isPertanian = getPertanian(m.sender)
        const isWarung = getWarung(m.sender)
        const isEs = getEs(m.sender)
        const isPedas = getPedas(m.sender)
        const isPermen = getPermen(m.sender)
        const isRingan = getRingan(m.sender)
        const isKaleng = getKaleng(m.sender)
        const isKardus = getKardus(m.sender)
        const isAyam = getAyam(m.sender)
        const isBatu = getBatu(m.sender)
        const isKucing = getKucing(m.sender)
        const isKayu = getKayu(m.sender)
        const isSemen = getSemen(m.sender)
        const isPasir = getPasir(m.sender)
        const isNaga = getNaga(m.sender)
        const isAnjing = getAnjing(m.sender)
        const isKyubi = getKyubi(m.sender)
        const isKelinci = getKelinci(m.sender)
        const isDomba = getDomba(m.sender)
        const isSapi = getSapi(m.sender)
        const isGajah = getGajah(m.sender)
        const isBesi = getBesi(m.sender)
        const isEmas = getEmas(m.sender)
        const isEmerald = getEmerald(m.sender)
        const isInvMakanan = cekMakananJson(m.sender)
        const isInvBahan = cekBahanJson(m.sender)
        const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
        const isInvWarung = cekWarungJson(m.sender)
        const isInvBuild = cekBuildJson(m.sender)
        const isInvBuah = cekBuahJson(m.sender)
        const ikan = ['?','?','?']
        
        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
                if (!('antitoxic' in chats)) chats.antitoxic = false
                if (!('autosholat' in chats)) chats.autosholat = false
                if (!('expiredDate' in chats)) chats.expiredDate = -1
                if (!('expired' in chats)) chats.expired = false
                if (!('antilinkyt' in chats)) chats.antilinkyt = false
                if (!('antilinktt' in chats)) chats.antilinktt = false
                if (!('antilinkv2' in chats)) chats.antilinkv2 = false
                if (!('antibot' in chats)) chats.antibot = false
                if (!('autogempa' in chats)) chats.autogempa = false
                if (!('gempaTime' in chats)) chats.gempaTime = 0
                if (!('stcban' in chats)) chats.stcban = []
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
                antilinkyt: false,
                gempaTime: 0,
                autogempa: false,
                stcban: [],
                autosholat: false,
                antibot: false,
                expiredDate: -1,
                antitoxic: false,
                expired: false,
                antilinktt: false,
                antilinkv2: false,
            }
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (!('autobio' in setting)) setting.autobio = false
                if (!('autoread' in setting)) setting.autoread = false
                if (!('gconly' in setting)) setting.gconly = false
                if (!('welcome' in setting)) setting.welcome = false
                if (!('cobing' in setting)) setting.cobing = ''
            } else global.db.data.settings[botNumber] = {
                status: 0,
                autobio: false,
                gconly: false,
                autoread: false,
                cobing: '',
            }

        } catch (err) {
            console.error(err)
        }
        
        switch (command) {
        case 'menu':
        if(isGroup) return !0;
        if (args[0] == 'nsfw'){
        if (!isGroup) return onlyGroup()
        sendres(from, `${menunsfw(prefix)}`)
        } else if (args[0] == 'tools'){
        sendres(from, `${menutools(prefix)}`)
        } else if (args[0] == 'asupan'){
        sendres(from, `${menuasupan(prefix)}`)
        } else if (args[0] == 'photoxy'){
        sendres(from, `${menuphotoxy(prefix)}`)
        sendres(from, menuphotoxy)
        } else if (args[0] == 'jadibot'){
        sendres(from, `${menujadibot(prefix)}`)
        } else if (args[0] == 'textpro'){
        sendres(from, `${menutextpro(prefix)}`)
        } else if (args[0] == 'owner'){
        sendres(from, `${menuowner(prefix)}`)
        } else if (args[0] == 'search'){
        if (!isGroup) return onlyGroup()
        sendres(from, `${menusearch(prefix)}`)
        } else if (args[0] == 'chatbot'){
        sendres(from, `${menuchatbot(prefix)}`)
        } else if (args[0] == 'random'){
        if(!isGroup) return onlyGroup()
        sendres(from, `${menurandom(prefix)}`)
        } else if (args[0] == 'convert'){
        sendres(from, `${menuconvert(prefix)}`)
        } else if (args[0] == 'download'){
        sendres(from, `${menudownload(prefix)}`)
        } else if (args[0] == 'ephoto'){
        if (!isGroup) return onlyGroup()
        sendres(from, `${menuephoto(prefix)}`)
        } else if (args[0] == 'primbon'){
        if (!isGroup) return onlyGroup()
        sendres(from, `${menuprimbon(prefix)}`)
        } else if (args[0] == 'group'){
        if (!isGroup) return onlyGroup()
        sendres(from, `${menugroup(prefix)}`)
        } else if (args[0] == 'anime'){
        sendres(from, `${menuanime(prefix)}`)
        } else if (args[0] == 'rpg'){
        if (!isGroup) return onlyGroup()
        sendres(from, `${menurpg(prefix)}`)
        } else if (args[0] == 'sound'){
        sendres(from, `${menusound(prefix)}`)
        } else if (args[0] == 'audio'){
        sendres(from, `${menuaudio(prefix)}`)
        } else if (args[0] == 'game'){
        sendres(from, `${menugame(prefix)}`)
        } else if (args[0] == 'shop'){
        sendres(from, `${menushop(prefix)}`)
        } else if (args[0] == 'fun'){
        if (!isGroup) return onlyGroup()
        sendres(from, `${menufun(prefix)}`)
        } else if (args[0] == 'all') {
        sendres(from, `${menuutama(prefix, m, sender, command, latensi, isPremium, tag)}`+`${menuchatbot(prefix)}`+`${menugroup(prefix)}`+`${menuowner(prefix)}`+`${menufun(prefix)}`+`${menugame(prefix)}`+`${menurpg(prefix)}`+`${menutools(prefix)}`+`${menuanime(prefix)}`+`${menunsfw(prefix)}`+`${menurandom(prefix)}`+`${menuephoto(prefix)}`+`${menujadibot(prefix)}`+`${menuphotoxy(prefix)}`+`${menutextpro(prefix)}`+`${menuaudio(prefix)}`+`${menusound(prefix)}`)
        } else sendres(from, `${menuutama(prefix, m, sender, command, latensi, isPremium, tag)}`)
        break
case 'regmail': {
  async function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

async function getLocationInfo() {
  try {
    const response = await fetch('https://ipinfo.io/json');
    if (!response.ok) throw new Error(`Failed to fetch data. Status: ${response.status}`);
    const data = await response.json();
    return Object.values(data).join(', ');
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
async function sendEmail(botName, ownName, botNumber, ownNumber, Name, Msg, OTP, Number, PP, Mail) {
let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verifikasi Akun Anda - Zaenishi</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #007BFF, #00FFFF); /* Gradasi Warna Latar Belakang */
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            height: 100vh;
            position: relative;
        }

        header {
            text-align: center;
            margin-bottom: 20px;
        }

        #verification-message {
            background-color: rgba(255, 255, 255, 0.9); /* Latar Belakang Semi-transparan Putih */
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
            max-width: 500px;
            width: 100%;
            text-align: center;
            color: #4a4a4a; /* Warna Teks Abu-abu Tua */
        }

        #verification-code {
            font-size: 36px;
            font-weight: bold;
            margin: 20px 0;
            color: #007BFF; /* Warna Biru Tua Zaenishi */
        }

        #verification-note {
            margin-top: 10px;
            font-size: 16px;
            color: #666; /* Warna Abu-abu Tua */
        }

        #verification-link {
            color: #007BFF; /* Warna Biru Tua */
            text-decoration: none;
            font-weight: bold;
        }

        #verification-link:hover {
            text-decoration: underline;
        }

        #company-info {
            margin-top: 30px;
            color: #4a4a4a; /* Warna Teks Abu-abu Tua */
            text-align: center;
        }

        #company-info p {
            margin: 10px 0;
        }

        footer {
            margin-top: 30px;
            text-align: center;
            color: #777; /* Warna Abu-abu Tua */
        }

        footer p {
            margin: 5px 0;
        }

        #company-logo {
            width: 100px;
            height: 100px;
            border-radius: 50%; /* Membuat logo bulat */
            object-fit: cover; /* Menyesuaikan proporsi logo */
            margin-top: -50px; /* Mengatur posisi logo ke atas */
        }

        /* Elemen dekoratif */
        .circle {
            position: absolute;
            background-color: #ffffff; /* Warna Putih */
            width: 80px;
            height: 80px;
            border-radius: 50%;
            top: calc(50% - 40px);
            left: calc(50% - 40px);
            z-index: -1;
        }

        .line {
            position: absolute;
            background-color: #ffffff; /* Warna Putih */
            width: 2px;
            height: 80%;
            top: 10%;
            left: 10%;
            z-index: -1;
        }
    </style>
</head>
<body>

<div class="circle"></div>
<div class="line"></div>

<header>
    <img src="${global.tamnel}" alt="Profil" id="company-logo">
    <h1 style="color: #ffffff;">Verifikasi Akun Anda</h1>
</header>

<div id="verification-message">
    <p id="verification-code">${OTP}</p>
    <p>Penggunaan Ketik <strong>.vercode ${OTP}</strong> Atau Klik <a href="https://wa.me/${Number}?text=.vercode ${OTP}" id="verification-link">disini</a></p>
    <p id="verification-note">Catatan: Hati-Hati, Jangan Berikan Kode Ini Ke Siapapun Bahkan Owner</p>
</div>

<div id="company-info">
    <p>Development: Darwin</p>
    <p>Kontak: support@AliceSupport</p>
</div>

<footer>
    <p>&copy; 2023 Alice. All Rights Reserved.</p>
    <p>POWERED BY PROJECT ALICEZATION</p>
</footer>

</body>
</html>`
    try {
        return await fetch("https://send.api.mailtrap.io/api/send/", {
                method: "POST",
                headers: {
                    "Authorization": "Bearer 46fae2154055e6df3901c95919531b2a",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "from": {
                        "email": "notifier@boyne.dev",
                        "name": "verify@Alice"
                    },
                    "to": [{
                        "email": Mail,
                        "name": "verify@Alice"
                    }],
                    "subject": "Verify Your Account",
                    "html": html,
                    "category": "Notification"
                })
            })
            .then(response => response.json())
    } catch (error) {
        console.error("Request failed:", error)
        throw error
    }
}
async function shortUrl(url) {
    let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
    return await res.text()
}

let generateOTP = (Math.floor(Math.random() * 9000) + 1000).toString()
let email = text;
if (isRegistered) return reply(`You are already registered. Want to register again? .unreg 90259a21exxxxxx`);
  
let verificationCode = generateOTP
if (!email) return reply(`Use ${command} yourmail@gmail.com`);
let avatar = await alice.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/a2ae6cbfa40f6eeea0cf1.jpg')
let nameown = `Darwin`
let nomorown = `6283141561141`
let nomorbot = `6283141561141`

db.data.users[m.sender].gmail = email
db.data.users[m.sender].mailcode = verificationCode
let res = await sendEmail('Alice Project', nameown, nomorown, nomorbot, pushname, 'Darwin', verificationCode, m.sender.split('@')[0], avatar, email)
if (res.success == true) return reply(`Check your email! Verification code has been sent.`)
}
break;

case 'vercode': {
const crypto = require('crypto');
  if (isRegistered) return reply(`You are already registered. Want to register again? .unreg 90259a21exxxxxx`);

  let generateOTP = (Math.floor(Math.random() * 9000) + 1000).toString();
  let verificationCode = parseInt(text.trim());
  let verificationCode1 = generateOTP;

  // Cek apakah kode verifikasi sesuai dengan yang diharapkan
  if (verificationCode !== global.db.data.users.mailcode) {
    return reply(`Kode Verifikasi Salah`);
  }

  let ver = Math.floor(1000 + Math.random() * 9000);
  let sn = crypto.createHash('md5').update(m.sender).digest('hex');

  // Pastikan text tidak kosong
  if (!text) return reply(`Masukan Code Yang Terkirim Di Email Kamu!!`);

  let umur = 'private ?';

  // Tambahkan user yang sudah terverifikasi
  addRegisteredUser(m.sender, pushname, umur, sn);

  // Reset kode verifikasi
  global.db.data.users.mailcode = '';

  // Beri balasan
  reply(`Register *Successfull* Thank you ${pushname}. Check your name and age on *.me*. If the name doesn't match, please type *.rename*`);
}
break;
        case 'darwin':
        case 'dalwin':
        case 'developer':
        case 'owner':
        if (!isGroup) return !0;
        var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        "contactMessage": {
        "displayName": `¬© ùô≥ùô∞ùöÅùöÜùô∏ùôΩ`,
        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: ùô≥ùô∞ ùöÜùô∑ùô∞ùöÉùöÇùô∞ùôøùôø ‚úÜ\nitem1.TEL;waid=6282318658612:+62823-1865-8612\nitem1.X-ABLabel:Ponsel\nPHOTO;BASE64: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\nX-WA-BIZ-DESCRIPTION:Developer & Creator Project Alice\nX-WA-BIZ-NAME:\nMy Name Is *Dalwin* üôÇ\nEND:VCARD`,
        }
        }), { userJid: m.sender, quoted: m })
        alice.relayMessage(m.sender, contact.message, { messageId: contact.key.id })
        alice.sendMessage(m.sender, { audio: fs.readFileSync('./assets/audio/Alice Team.m4a'), mimetype:'audio/mpeg', ptt:false})
        break
        case 'stick':
        if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
        jumlah = `${encodeURI(q)}`
        ydd = `memek`
        for (let i = 0; i < jumlah; i++) {
        alice.sendMessage(m.chat, {sticker: fs.readFileSync('./assets/sticker/alice.png')},{quoted: {
        key: { 
        fromMe: false, 
        participant: `0@s.whatsapp.net`, 
        ...({ remoteJid: "" }) 
        }, 
        "message": {
        "stickerMessage": {
        "url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
        "fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
        "fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
        "mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
        "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
        "fileLength": "99999999999999",
        "mediaKeyTimestamp": "1657290167",
        "isAnimated": false,
        }
        }
        }})
        }
        reply(`Sukses`)
        break
        case 'sc': case 'script': case 'source':
        var messa = await baileys.prepareWAMessageMedia({ image: {url: "https://telegra.ph/file/ebdb48d70f4d2c1944b69.jpg"}}, { upload: alice.waUploadToServer })
        var catalog = await baileys.generateWAMessageFromContent(from, baileys.proto.Message.fromObject({
        "productMessage": {
        "product": {
        "productImage": messa.imageMessage,
        "productId": "7066960336725723",
        "title": 'PROJECT ALICEZATION',
        "description": 'Nyari Apa Dek?',
        "currencyCode": "IDR",
        "priceAmount1000": "160000000",
        "productImageCount": 1
        },
        "businessOwnerJid": `6282318658612@s.whatsapp.net`,
        }
        }), m.quoted && m.quoted.fromMe ? {
        contextInfo: {
        	...m.msg.contextInfo,
        }
        } : {quoted:m})
        await alice.relayMessage(from, catalog.message, {messageId:catalog.key.id})
        await delay(3000)
        alice.sendMessage(from, {image: {url: 'https://telegra.ph/file/abdc4e8fcd594f6dec303.jpg'}, caption: `*ALICE PROJECT*\ncreator : 6282318658612\nTelegram : t.me/DalwinOfficial\ndibuat : 15 des, 2023\nlast update : Hari ini\nfeatures available : 1024+ command\nharga : Rp. 160,000\nfree fix service : *yes*\nfree update : *yes*\npreview bot : youtu.be/t-8bDvsLeM8?si=ja0fganGQ0oDd-lr`})
        await delay(2000)
        reply('berminat script di atas? kontak creator di\n\ntelegram : t.me/DalwinOfficial\nwhatsapp : wa.me/6282318658612')
        break
        case 'credit':
        case 'creator':
        case 'credits':
        case 'infobot':
        let credit = `       *C R E A T O R    I N F O*
        ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚î?
        *Creator:* Darwin
        *Project Name:* Alice
        *Release Date:* 15, des, 2023
        *Versi Project:* v.1.6
        
                *S O C I A L    M E D I A*
        ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚î?
        *YouTube:* youtube.com/@bg-darwin
        *WhatsApp:* +62 823-1865-8612
        *Instagram:* instagram.com/@bg.dalwin
        *Telegram:* t.me/@DalwinOfficial
        *Website:* lit.link/YTdalwinofficia1
        *Hiasan:* https://·∫?.ceo/Darwin`
        alice.sendMessage(m.chat, {
        video: {url: "https://telegra.ph/file/299df5713205340d27236.mp4"},
        mimetype: 'video/mp4',
        fileLength: 10000000000,
        caption: credit,
        gifPlayback: true,
        gifAttribution: 5,
        contextInfo: {
        externalAdReply: {
        title: `DIRECTED BY DARWIN`, 
        body: 'creator asli dari project script alice',
        thumbnail: thumb, 
        sourceUrl: `https://wa.me/6282318658612`,
        mediaType: 1,
        renderLargerThumbnail: false,
        }}
          }, {
            quoted: m
          })  
        break
        case 'ebase64':
        if (!q) return reply(`Format salah!\n\nKirim perintah: ${prefix}ebase64 *text*\nContoh: ${prefix}ebase64 helloworld`)
        if (q.length > 2048) return reply('Maximal 2.048 String!')
        reply(Buffer.from(q).toString('base64'))
        break
        case 'debase64':
        if (!q) return reply(`Format salah!\n\nKirim perintah: ${prefix}debase64 *encrypt base64*\nContoh: ${prefix}debase64 aGVsbG93b3JsZA==`)
        if (q.length > 2048) return reply('Maximal 2.048 String!')
        reply(Buffer.from(q, 'base64').toString('ascii'))
        break
        
        // FITUR ANIME
        case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elena': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli2': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'minato': case 'mountain': case 'naruto': case 'neko': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
        if (!isGroup) return onlyGroup()
        reply("tunggu sebentar...")
        let heyy
        if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
        if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
        if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
        if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
        if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
        if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
        if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
        if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
        if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
        if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
        if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
        if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
        if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
        if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
        if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
        if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
        if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
        if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
        if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
        if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
        if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
        if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
        if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
        if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
        if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
        if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
        if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
        if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
        if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
        if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
        if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
        if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
        if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
        if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
        if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
        if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
        if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
        if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
        if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
        if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
        if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
        if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
        if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
        if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
        if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
        if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
        if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
        if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
        if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
        if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
        if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
        if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
        if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
        if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
        if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
        if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
        if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
        if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
        if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
        if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
        if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
        if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
        if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
        if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
        if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
        if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
        if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
        if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
        if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
        if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
        if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
        if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
        if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
        if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
        if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
        if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
        if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
        if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
        if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
        if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
        if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
        if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
        if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
        if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
        if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
        if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
        if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
        if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
        if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tataalice.json')
        if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
        if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
        if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
        if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
        if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
        if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
        if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
        if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
        if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
        if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
        if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
        if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
        let yeha = heyy[Math.floor(Math.random() * heyy.length)];
        alice.sendMessage(from, { image: { url: yeha }, caption : 'Done Bwang, jangan lupa share alice bot' }, { quoted: m })
        }
        break
        
        
        // FITUR TEXTPRO
        case 'blackpink':
        case 'neon':
        case 'greenneon':
        case 'advanceglow':
        case 'futureneon':
        case 'sandwriting':
        case 'sandsummer':
        case 'sandengraved':
        case 'metaldark':
        case 'neonlight':
        case 'holographic':
        case 'text1917':
        case 'minion':
        case 'deluxesilver':
        case 'newyearcard':
        case 'bloodfrosted':
        case 'halloween':
        case 'jokerlogo':
        case 'fireworksparkle':
        case 'natureleaves':
        case 'bokeh':
        case 'toxic':
        case 'strawberry':
        case 'box3d':
        case 'roadwarning':
        case 'breakwall':
        case 'icecold':
        case 'luxury':
        case 'cloud':
        case 'summersand':
        case 'horrorblood':
        case 'thunder':
        if (!text) return reply(`Gunakan dengan cara ${prefix+command} *text*`)
        if (args.length == 0) return reply(`Example: ${prefix + command} DALWIN AYE`)
        alice.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome/${command}?apikey=${global.lolkey}&text=${args}` }, caption: `Powered By Alice`})
		break
        			
        // FITUR EPHOTO
        case 'glitchtext':
        case 'writetext':
        case 'advancedglow':
        case 'typographytext':
        case 'pixelglitch':
        case 'neonglitch':
        case 'flagtext':
        case 'flag3dtext':
        case 'deletingtext':
        case 'blackpinkstyle':
        case 'glowingtext':
        case 'underwatertext':
        case 'logomaker':
        case 'cartoonstyle':
        case 'papercutstyle':
        case 'watercolortext':
        case 'effectclouds':
        case 'blackpinklogo':
        case 'gradienttext':
        case 'summerbeach':
        case 'luxurygold':
        case 'multicoloredneon':
        case 'sandsummer':
        case 'galaxywallpaper':
        case '1917style':
        case 'makingneon':
        case 'royaltext':
        case 'freecreate':
        case 'galaxystyle':
        case 'lighteffects':{
        if (!isGroup) return onlyGroup()
        if (!q) return reply(`Example : ${prefix+command} Alice`) 
        let link
        if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
        if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
        if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
        if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
        if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
        if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
        if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
        if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
        if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
        if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
        if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
        if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
        if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
        if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
        if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
        if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
        if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
        if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
        if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
        if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
        if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
        if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
        if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
        if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
        if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
        if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
        if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
        if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
        if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
        if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
        let haldwhd = await ephoto(link, q)
        alice.sendMessage(m.chat, { image: { url: haldwhd }, caption: `powerewd by Alice` }, { quoted: m })
        }
        break
        
// RPG GAMES
case 'rpg': {
if (!isGroup) return onlyGroup()
let anu =`
®q©§©§ ?  *°∏ INFO USER °π*
©¶  ? *Name :* ${isRegistered ? `${NamaKamu(m.sender)}` : `${pushname}`}
©¶  ? *Money :* ${formattedMoneyZ}
©¶  ? *Gold :* ${getEmas(m.sender)}
©¶  ? *Iron :* ${getBesi(m.sender)}
©¶  ? *Fish :* ${getIkan(m.sender)}
©¶  ? *Diamond :* ${getEmerald(sender)}
®t©§©§©§ ?
®q©§©§ ?°∏ *R P G* °π
©¶? .claim
©¶? .jual
©¶? .openbo
©¶? .mancing
©¶? .mining
©¶? .inv
©¶? .berburu
©¶? .mulung
©¶? .kerja
©¶? .shop
©¶? .rpg
©¶? .joinrpg
©¶? .gajian
©¶? .me
©¶? .heal
©¶? .kerja
©¶? .leaderboard
©¶? .nebang
©¶? .cook *memasak*
©¶? .makanan *cek makanan*
©¶? .makan *exp up*
©¶? .tidur *heal up*
©¶? .pertanian
©¶? .gelud *tag*
©¶? .spin *jumlah*
©¶? .slot *jumlah*
©¶? .bunuh *tag*
©¶? .bansos *tag*
©¶? .petualang
©¶? .ngojek
©¶? .dungeon
©¶? .ngewe
©¶? .mydompet
©¶? .gacha
®t©§©§°§°§°§°§ ?
`
alice.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false,
        title: `R P G  M E N U`,
        body: `play and happy`,
        sourceUrl: `${global.saluran}`,
        thumbnailUrl: "https://telegra.ph/file/d9aefe0b966c2b217e4bf.jpg",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break
case 'joinrpg': {
if (!isGroup) return onlyGroup()
if (!isRegistered) return customsend(`${noregis}`, m.sender, '? Alice')	
if (isJoin) return reply('Gagal mendaftar ulang karena sudah mengikuti Program Gabung Rpg sebelumnya')

let monaynya = 1000
db.data.users[m.sender].money += monaynya
let anuanu = `*Successfully Joining Rpg*

*Information / Rules*
tidak boleh curang saat memainkan game, jika ada bug laporkan ke own/mod 

*Reward*
kamu mendapatkan bahan untuk memulai rpg cek di .inv`
                veri = m.sender
                if (!m.isGroup) {
                    addJoinUser(m.sender)
    alice.sendMessage(m.chat, {
    text: anuanu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false, 
        title: `J O I N I N G  R P G`,
        body: `Successfully ?`,
        thumbnailUrl: `${global.tamnel}`,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
                    
                } else {
                    addJoinUser(m.sender)
    alice.sendMessage(m.chat, {
    text: anuanu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false, 
        title: `J O I N I N G  R P G`,
        body: `Successfully ?`,
        thumbnailUrl: `${global.tamnel}`,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
                    
}}
break
case  'mining': case 'mine':{
if (!isGroup) return onlyGroup()
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 

if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
if (isCekDarah < 1) return reply(`Kamu Harus Tidur , Kamu Lelah *.tidur* Jika Kamu Mempunyai Rumah, Atau *.heal* Jika Kamu Mempunyai Potion`)
if (!isBar){ addInvBar(m.sender, BarAwal) }
if (isCekBar < 1) return reply(`Kamu Kelaparan, Masak Lah Makanan Atau Makan Makanan Yang Ada, *.cook* / *.makanan*`)
kurangBar(m.sender, 80)
try {
let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
let batu = [10,11,15,18,5,8,1]
var batunya = batu[Math.floor(Math.random() * batu.length)]
var besinya = besi[Math.floor(Math.random() * besi.length)]  
var emasnya = emas[Math.floor(Math.random() * emas.length)]  
var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
reply(`${m.sender.split("@")[0]} Started Mining??`)
await delay(10000)
reply(`ÅV *M I N I N G  R E S U L T*
Batu: ${batunya}
Emerald: ${emeraldnya}
Besi: ${besinya}
Emas: ${emasnya}`)
await delay(1500)
kurangDarah(m.sender, 10)
addBesi(m.sender, besinya)
addEmas(m.sender, emasnya)
addEmerald(m.sender, emeraldnya)
addBatu(m.sender, batunya)
} catch (err) {
reply(`Mungkin Dilain Waktu Saja`)
console.error(err)
}
}   
break
case 'petualang': case 'adventure': {
if (!isGroup) return onlyGroup()
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 

if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
        let user = global.db.data.users[m.sender];
    let __timers = new Date() - (user.lastadventure || 0);
    let _timers = 86400000 - __timers; // 24 hours in milliseconds
    let timers = clockString(_timers);

    if (new Date() - user.lastadventure < 86400000) {
        return reply(`Anda sudah berpetualang hari ini. Silakan coba lagi setelah *${timers}*.`);
    }

                let _health = `${Math.floor(Math.random() * 101)}`.trim();
                let health = (_health * 1);
                let uang = `${Math.floor(Math.random() * 200)}`.trim();
                let prefixotion = ['1', '2', '3', '4', '4', '2'];
                let potion = prefixotion[Math.floor(Math.random() * prefixotion.length)];
                let _sampah = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'];
                let sampah = _sampah[Math.floor(Math.random() * _sampah.length)];
                let _diamond = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
                let diamond = _diamond[Math.floor(Math.random() * _diamond.length)];
                let _uncommon = ['1', '2', '1', '2', '3', '5', '4'];
                let uncommon = _uncommon[Math.floor(Math.random() * _uncommon.length)];
                let _mythic = `${pickRandom(['1', '3', '1', '1', '2', '3', '2'])}`;
                let mythic = (_mythic * 1);
                let _legendary = `${pickRandom(['1', '3', '1', '1', '2', '2', '1'])}`;
                let legendary = (_legendary * 1);
                let itemrand = [
                    `*Selamat anda mendapatkan item rare yaitu*\n${mythic} Mythic Crate`,
                    `*Selamat kamu mendapatkan item rare yaitu*\n${legendary} Legendary Crate`
                ];
                let rendem = itemrand[Math.floor(Math.random() * itemrand.length)];
                let ages = 'https://telegra.ph/file/ea469189ccc6705a144bc.jpg';
                let location = pickRandom([
                    'Jepang', 'Korea', 'Bali', 'Amerika', 'Iraq', 'Arab', 'Pakistan', 'German',
                    'Finlandia', 'Ke bawa dunia mimpi', 'Ujung dunia', 'Mars', 'Zimbabwe',
                    'Bulan', 'Pluto', 'Matahari', 'Hatinya dia'
                ]);
                let str = `Sedang dalam proses petualangan menuju *${location}*...`;

                setTimeout(() => {
                    reply(str)
                }, 1000);

                setTimeout(() => {
                    let result = `
ÅV *P E T U A L A N G A N*
kamu sudah berhenti berpetualang, lokasi terakhir di ${location}\n                             
*Balance:* ${uang}
*Sampah:* ${sampah}${potion == 0 ? '' : '\n? *Potion:* ' + potion}${diamond == 0 ? '' : '\n? *Diamond:* ' + diamond} ${uncommon == 0 ? '' : '\n? *Uncommon Crate:* ' + uncommon}`;
                    alice.sendMessage(m.chat, {
                        text: result,
                        contextInfo: {
                            externalAdReply: {
                                title: 'Alice - R P G',
                                body: 'powered by darwin',
                                thumbnailUrl: `${global.tamnel}`,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, { quoted: m });
                }, 3000);

                setTimeout(() => {
                    reply(rendem)
                }, 4000);
                
                kurangDarah(m.sender, health)
                db.data.users[m.sender].money += uang
                addPotion(m.sender, potion)
                addEmerald(m.sender, diamond)
                addCU(m.sender, uncommon)
                addCM(m.sender, mythic)
                addCL(m.sender, legendary)
                global.db.data.users[m.sender].lastadventure = new Date();
}
break
case 'inventori': case 'inventory': case 'inv': case 'profile': case 'invent': {
if (!isGroup) return onlyGroup()
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 

if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
try {
let user = global.db.data.users[m.sender]
let teks = `ÅV *S T A T S*\n`
teks += `[ ?? ] Your Blood : ${getDarah(m.sender)}\n`
teks += `[ ? ] Your Money : ${formattedMoneyZ}\n`
teks += `[ ?? ] Your Iron: ${getBesi(m.sender)}\n`
teks += `[ ?? ] Your Gold: ${getEmas(m.sender)}\n`
teks += `[ ? ] Your Emerald: ${getEmerald(m.sender)}\n`
teks += `[ ? ] Your Potion: ${getPotion(m.sender)}\n\n`
teks += `ÅV *H U N T I N G*\n`
teks += `[ ? ] Fish: ${getIkan(m.sender)}\n`
teks += `[ ? ] Chicken: ${getAyam(m.sender)}\n`
teks += `[ ? ] Rabbit: ${getKelinci(m.sender)}\n`
teks += `[ ? ] Sheep: ${getDomba(m.sender)}\n`
teks += `[ ? ] Cow: ${getSapi(m.sender)}\n`
teks += `[ ? ] Elephant: ${getGajah(m.sender)}\n\n`
teks += `ÅV *K A R U N G*\n`
teks += `[ ? ] Botol: ${getBotol(m.sender)}\n`
teks += `[ ? ] Kardus: ${getKardus(m.sender)}\n`
teks += `[ ? ] Kaleng: ${getKaleng(m.sender)}\n\n`
teks += `ÅV *E A T - S T O R A G E*\n`
teks += `[ ? ] Bar Kelaparan Kamu: ${getBar(m.sender)}%\n`
teks += `[ ? ] Sate: ${getSate(m.sender)}\n`
teks += `[ ? ] Ikan Goreng: ${getGoreng(m.sender)}\n`
teks += `[ ? ] Sop Sapi: ${getSop(m.sender)}\n`
teks += `[ ? ] Steak: ${getSteak(m.sender)}\n\n`
teks += `ÅV *F A C I L I T Y*\n`
teks += `[ ? ]? Rumah: ${getRumah(m.sender)}\n`
teks += `[ ? ] Pertanian: ${getPertanian(m.sender)}\n\n`
teks += `ÅV *B U I L D - I T E M*\n`
teks += `[ ? ] Kayu: ${getKayu(m.sender)}\n`
teks += `[ ? ] Batu: ${getBatu(m.sender)}\n`
teks += `[ ? ]?? Semen: ${getSemen(m.sender)} Karung\n`
teks += `[ ? ] ?Pasir: ${getPasir(m.sender)} Karung\n\n`
teks += `ÅV *P E T*\n`
teks += `[ ? ] Kucing: ${getKucing(m.sender)}\n`
teks += `[ ? ] Anjing: ${getAnjing(m.sender)}\n`
teks += `[ ? ] Naga: ${getNaga(m.sender)}\n`
teks += `[ ? ] Kyubi: ${getKyubi(m.sender)}\n\n`
teks += `ÅV *C R E A T E*\n`
teks += `[ ? ] Legendary: ${getCL(m.sender)}\n`
teks += `[ ? ] Mythic: ${getCM(m.sender)}\n`
teks += `[ ? ] Uncommon: ${getCU(m.sender)}\n\n  `
teks += `ÅV *R A N D O M - I T E M*\n`
teks += `[ ?? ] Sword: ${getSword(m.sender)}\n`
teks += `[ ? ] Armor: ${getArmor(m.sender)}\n`
teks += `[ ? ] Key/Gacha: ${getKey(m.sender)}\n\n`
alice.sendMessage(m.chat, {
    text: teks,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false,
        title: `YOUR BAG`,
        body: "Information..",
        thumbnailUrl: `https://telegra.ph/file/28324e0f8ec16f81c6f85.png`,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
} catch (err) {
reply(`Mungkin Dilain Waktu Saja`)
}
}
break
case 'kandang': {
if (!isGroup) return onlyGroup()
let user = global.db.data.users[m.sender]
reply(`ÅV *K A N D A N G*
 ? Ikan: ${user.ikan || 0} Ekor
 ? Ayam: ${user.ayam || 0} Ekor
 ? Kelinci: ${user.kelinci || 0} Ekor
 ? Domba: ${user.domba || 0} Ekor
 ? Sapi: ${user.sapi || 0} Ekor
 ? Gajah: ${user.gajah || 0} Ekor`)
}
break
case 'mulung': {
if (!isGroup) return onlyGroup()
const timeout = 1800000
function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Jam " + minutes + " Menit " + seconds + " Detik"
}
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 


let time = global.db.data.users[m.sender].lastmulung + 1800000
  if (new Date - global.db.data.users[m.sender].lastmulung< 1800000) return reply(`Kamu Sudah Lelah\nTunggu Selama ${msToTime(time - new Date())} Lagi`)
reply(`Sebentar... sedang memulung`)
await delay(1000)
var botolnye = Math.ceil(Math.random() * 800)
var kardusnye = Math.ceil(Math.random() * 700)
var kalengnye = Math.ceil(Math.random() * 500)
addBotol(m.sender, botolnye)
addKardus(m.sender, kardusnye)
addKaleng(m.sender, kalengnye)
global.db.data.users[m.sender].lastmulung = new Date * 1
reply(`ÅV *M U L U N G  R E S U L T*
+${getBotol(m.sender)} Botol
+${getKaleng(m.sender)} Kaleng
+${getKardus(m.sender)} Kardus`)
setTimeout(() => {
alice.sendMessage(m.chat, { text: `Yuk Waktunya Mulung Lagi°≠`, m})
	}, timeout)
}
break
case 'sell': case 'jual':{
if (!isGroup) return onlyGroup()
if (!q) return reply(`Contoh : ${prefix + command} fish/chicken/rabbit/sheep/cow/elephant/iron/gold/emerald/botol/kardus/kaleng`)
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 

if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
try {
let users = global.db.data.users[m.sender]
var anu3 = args[1]
if (args[0] === 'fish'){
if (isIkan < anu3) return reply(`Anda Tidak Memiliki Cukup Ikan Untuk Transaksi Ini`)
if (!args[1]) return reply(`Contoh : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
kurangIkan(m.sender, anu3)
let monaynya = 1500 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
reply(`Transaksi Sukses\n*Uangmu* : ${formattedMoneyZ}\n*Sisa Ikanmu* : ${getIkan(m.sender)}`)
}, 2000) 
} else 
if (args[0] === 'limit'){
if (!args[1]) return reply(`Contoh : ${prefix + command} limit 200\n 100 limit = 5000 Money`)
    users[m.sender].limit -= anu3;
    let monaynya = 5000 * anu3
db.data.users[m.sender].money += monaynya
    reply(`Berhasil menjual Limit, Uang Mu ${formattedMoneyZ}`)
  } else
if (args[0] === 'botol'){
if (isBotol < anu3) return reply(`Anda Tidak Memiliki Cukup Botol Untuk Transaksi Ini`)
if (!args[1]) return reply(`Contoh : ${prefix + command} botol 2\n 1 botol = 1000 Money`)
kurangBotol(m.sender, anu3)
let monaynya = 1000 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
reply(`Transaksi Sukses\n*Uangmu* : ${formattedMoneyZ}\n*Sisa Botol Mu* : ${getBotol(m.sender)}`)
}, 2000)
} else if (args[0] === 'kardus'){
if (isKardus < anu3) return reply(`Anda Tidak Memiliki Cukup Kardus Untuk Transaksi Ini`)
if (!args[1]) return reply(`Contoh : ${prefix + command} Kardus 2\n 1 botol = 1000 Money`)
kurangKardus(m.sender, anu3)
let monaynya = 1000 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
reply(`Transaksi Sukses\n*Uangmu* : ${formattedMoneyZ}\n*Sisa Kardus Mu* : ${getBotol(m.sender)}`)
}, 2000) 
} else if (args[0] === 'kaleng'){
if (isKaleng < anu3) return reply(`Anda Tidak Memiliki Cukup Kaleng Untuk Transaksi Ini`)
if (!args[1]) return reply(`Contoh : ${prefix + command} kaleng 2\n 1 botol = 1000 Money`)
kurangKaleng(m.sender, anu3)
let monaynya = 1000 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
reply(`Transaksi Sukses\n*Uangmu* : ${formattedMoneyZ}\n*Sisa Kaleng Mu* : ${getBotol(m.sender)}`)
}, 2000) 
} else 
if (args[0] === 'chicken'){
if (isAyam < anu3) return reply(`Anda Tidak Memiliki Cukup Ayam Untuk Transaksi Ini`)
if (!args[1]) return reply(`Contoh : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
kurangAyam(m.sender, anu3)
let monaynya = 2500 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
reply(`Transaksi Sukses\n*Uangmu* : ${formattedMoneyZ}\n*Sisa Ayammu* : ${getAyam(m.sender)}`)
}, 2000) 
} else
if (args[0] === 'rabbit'){
if (isKelinci < anu3) return reply(`Anda Tidak Memiliki Cukup Kelinci Untuk Transaksi Ini`)
if (!args[1]) return reply(`Contoh : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
kurangKelinci(m.sender, anu3)
let monaynya = 3000 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
reply(`Transaksi Sukses\n*Uangmu* : ${formattedMoneyZ}\n*Sisa Kelincimu* : ${getKelinci(m.sender)}`)
}, 2000) 
} else
if (args[0] === 'sheep'){
if (isDomba < anu3) return reply(`Anda Tidak Memiliki Cukup Domba Untuk Transaksi Ini`)
if (!args[1]) return reply(`Contoh : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
kurangDomba(m.sender, anu3)
let monaynya = 5000 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
reply(`Transaksi Sukses\n*Uangmu* : ${formattedMoneyZ}\n*Sisa Dombamu* : ${getDomba(m.sender)}`)
}, 2000) 
} else
if (args[0] === 'cow'){
if (isSapi < anu3) return reply(`Anda Tidak Memiliki Cukup Sapi Untuk Transaksi Ini`)
if (!args[1]) return reply(`Contoh : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
kurangSapi(m.sender, anu3)
let monaynya = 10000 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
reply(`Transaksi Sukses\n*Uangmu* : ${formattedMoneyZ}\n*Sisa Sapimu* : ${getSapi(m.sender)}`)
}, 2000) 
} else
if (args[0] === 'elephant'){
if (isGajah < anu3) return reply(`Anda Tidak Memiliki Cukup Gajah Untuk Transaksi Ini`)
if (!args[1]) return reply(`Contoh : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
kurangGajah(m.sender, anu3)
let monaynya = 15000 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
reply(`Transaksi Sukses\n*Uangmu* : ${formattedMoneyZ}\n*Sisa Gajahmu* : ${getGajah(m.sender)}`)
}, 2000) 
} else
if (args[0] === 'iron'){
if (isBesi < anu3) return reply(`Anda Tidak Memiliki Cukup Besi Untuk Transaksi Ini`)
if (!args[1]) return reply(`Contoh : ${prefix + command} iron 2\n 1 Iron = 16000 Money`)
kurangBesi(m.sender, anu3)
let monaynya = 16000 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
reply(`Transaksi Sukses\n*Uangmu* : ${formattedMoneyZ}\n*Sisa Besimu* : ${getBesi(m.sender)}`)
}, 2000) 
} else
if (args[0] === 'gold'){
if (isEmas < anu3) return reply(`Anda Tidak Memiliki Cukup Emas Untuk Transaksi Ini`)
if (!args[1]) return reply(`Contoh : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
kurangEmas(m.sender, anu3)
let monaynya = 50000 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
reply(`Transaksi Sukses\n*Uangmu* : ${formattedMoneyZ}\n*Sisa Emasmu* : ${getEmas(m.sender)}`)
}, 2000) 
} else
if (args[0] === 'emerald'){
if (isEmerald < anu3) return reply(`Anda Tidak Memiliki Cukup Zamrud Untuk Transaksi Ini`)
if (!args[1]) return reply(`Contoh : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
kurangEmerald(m.sender, anu3)
let monaynya = 100000 * anu3
db.data.users[m.sender].money += monaynya
setTimeout( () => {
reply(`Transaksi Sukses\n*Uangmu* : ${formattedMoneyZ}\n*Sisa Zamrudmu* : ${getEmerald(m.sender)}`)
}, 2000) 
} else { reply("Format Salah") }
} catch (err) {
reply(err)
}
}
break
case 'heal': {
if (!isGroup) return onlyGroup()
if (isCekDarah > 100) return reply('Darahmu Penuh')
if (isPotion < 1) return reply(`Anda Tidak Punya Potion, Coba Beli Dengan Cara Ini #shop buy potion jumlah`) 
try {
addDarah(m.sender, 100)
kurangPotion(m.sender, 1)
reply(`Sukses`)
} catch (err) {
reply(mess.error)
}
}
break
case 'hunt': case 'hunting': case 'berburu': case 'memburu': {
if (!isGroup) return onlyGroup()
if (isCekDarah < 1) return reply('Darahmu Habis, Coba Sembuhkan Menggunakan Option, Atau *.tidur* Jika Kamu Mempunyai Rumah') 
if (!isBar){ addInvBar(m.sender, BarAwal) }
if (isCekBar < 1) return reply(`Kamu Kelaparan, Masak Lah Makanan Atau Makan Makanan Yang Ada, *.cook* / *.makanan*`)
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
let luka = ["Ditusuk Duri Saat Berburu","Tergelincir ke dalam jurang saat berburu","Digaruk oleh binatang buas","Kurang teliti","Terjerat akar","Jatuh saat berburu"]
let location = ["Jungle","Amazon forest","Tropical forest","Meadow","African forest","Mountains"]
var ikanmu = Math.ceil(Math.random() * 10)
var ayam = Math.ceil(Math.random() * 8)
var kelinci = Math.ceil(Math.random() * 7)
var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
var lukanya = luka[Math.floor(Math.random() * luka.length)]
var lokasinya = location[Math.floor(Math.random() * location.length)]
await delay(5000)
let teks = `ÅV *H U N T  R E S U L T*\n`
teks += `*? Fish* : ${ikanmu}\n`
teks += `*? Chicken* : ${ayam}\n`
teks += `*? Rabbit* : ${kelinci}\n`
teks += `*? Sheep* : ${domba}\n`
teks += `*? Cow* : ${sapi}\n`
teks += `*? Elephant* : ${gajah}\n\n`
teks += `ÅV *I N F O R M A T I O N*\n`
teks += `*Location* : ${lokasinya}\n`
teks += `*Wounded* : ${lukanya}, blood - 10\n`
teks += `*Health* : ${getDarah(m.sender)}\n`
reply(teks)
await delay(1000)
alice.sendMessage(m.chat, { text: `Lokasi Terakhir Kamu @${m.sender.split('@')[0]} Di ${lokasinya}`, mentions: [m.sender] }, { quoted: m })
global.db.data.users[m.sender].ikan += ikanmu
addAyam(m.sender, ayam) 
addKelinci(m.sender, kelinci)
kurangBar(m.sender, 90)
addDomba(m.sender, domba)
addSapi(m.sender, sapi)
addGajah(m.sender, gajah)
kurangDarah(m.sender, 10)
}
break
case 'spin': {
if (!isGroup) return onlyGroup()
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
if (!isInvMakanan){ addInvMakanan(m.sender) } 



if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
  if (!text) return reply(`Example: ${command} 1/NaN`)

  let betAmount = parseInt(text)
  if (isMonay < betAmount) return reply(`Balance Kamu Tidak Cukup Untuk Melakukan Spin`)

  let result = Math.random() >= 0.5 
  let wonAmount = result ? Math.ceil(betAmount * 1.31919) : -betAmount
  db.data.users[m.sender].money += wonAmount
  db.data.users[m.sender].money -= betAmount

  let caption = `?  S P I N  -  R E S U L T\n\n`
  caption += `- ${betAmount.toLocaleString()}\n`
  caption += result ? `+ ${wonAmount.toLocaleString()}\n\n` : `\n\n`
  caption += `? Total : ${formattedMoneyZ} Balance`

reply(caption)
}
break
case 'slot': {
if (!isGroup) return onlyGroup()
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 

if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
let betAmount = parseInt(args[0]);
  if (isNaN(betAmount) || betAmount <= 0) return reply(`Example: ${command} 1000`)
  if (isMonay < betAmount) return reply(`Sorry, your balance is not sufficient to make a big bet ${betAmount}`)

  let symbols = ['??', '??', '??', '??'];

  let result = [];
  for (let i = 0; i < 3; i++) {
    let symbol = symbols[Math.floor(Math.random() * symbols.length)];
    result.push(symbol);
  }

  let win = result[1] === '??' && result[0] === '??' && result[2] === '??';

  let winAmount = win ? betAmount * 5 : 0;


  db.data.users[m.sender].money -= betAmount
  db.data.users[m.sender].money += winAmount
  
  let hoho = `? | SLOTS ]
-------------------
${result.join(' : ')}
-------------------
[  ? | SLOTS ]
${win ? 'You win!' : 'You lose'}
${win ? `You won a big bet ${winAmount}` : ''}
Your remaining balance: ${formattedMoneyZ}`
reply(hoho)
}
break
case 'bertarung': case 'petarung': {
if (!isGroup) return onlyGroup()
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 



if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
  let opponent = m.mentionedJid[0];
  
  if (!opponent) return reply(`*Contoh*: ${command} @user`)
  
  let betAmount = Math.floor(Math.random() * (10000000 - 10000 + 1)) + 10000 
  
  if (isMonay < betAmount) return reply('Balance Anda tidak mencukupi')
  

  
  reply('Mempersiapkan arena...') 
  
  setTimeout(() => {
    reply('Mendapatkan arena...') 
    
    setTimeout(() => {
      reply('Bertarung...')
      
      setTimeout(() => {
        let result = Math.random() >= 0.5 
        let wonAmount = result ? betAmount : -betAmount 
        
        db.data.users[m.sender].money += wonAmount
        db.data.users[opponent].money -= wonAmount
        let caption = `*Hasil pertempuran:*\n\n`
        caption += `Anda Vs @${opponent.split('@')[0]}\n\n`
        
        if (result) {
          caption += `Anda menang! +${betAmount}\n`
          caption += `Balance Anda saat ini: ${formattedMoneyZ}\n`

          alice.sendMessage(m.chat, { image: { url: `https://telegra.ph/file/c8ea156b03131ed613b54.jpg` }, caption: caption })
        } else {
          caption += `Anda kalah! -${betAmount}\n`
          caption += `Balance Anda saat ini: ${formattedMoneyZ}\n`
          alice.sendMessage(m.chat, { image: { url: `https://telegra.ph/file/5e043d7cd784d2bfa5b67.jpg` }, caption: caption, mentions: [opponent] })
        }

        
        setTimeout(() => {
          reply(`Anda dapat bertarung lagi setelah 5 detik`) 
        }, 5000)
      }, 2000)
    }, 2000) 
  }, 2000) 
}
break
case 'merampok': case 'rampok': {
if (!isGroup) return onlyGroup()
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) }

if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
let user = global.db.data.users[m.sender]
    let __timers = new Date() - (user.lastrampok || 0);
    let _timers = 86400000 - __timers; // 24 hours in milliseconds
    let timers = clockString(_timers);

    if (new Date() - user.lastrampok < 86400000) {
        return reply(`Anda sudah Merampok hari ini. Silakan coba lagi setelah *${timers}*.`);
    }
let uangnye = (Math.floor(Math.random() * 100000))
let opponent = m.mentionedJid[0];
 
if (!opponent) return reply(`Mau rampok siapa ? coba tag`)
let rampokimage = 'https://telegra.ph/file/a72a735a8c53507fb9b1f.jpg'
let rampok = `ÅV *R A M P O K*
Uang : ${uangnye}
Terampok : ${alice.getName(opponent)}
Perampok : ${alice.getName(m.sender)}`
let mm = `*? Kamu Mengalami Musibah Hari Ini!*
Dirampok Oleh *${alice.getName(m.sender)}*, Uang Terambil ${uangnye}`
alice.sendMessage(opponent, { image: { url: rampokimage }, caption: mm })
alice.sendMessage(m.chat, { image: { url: rampokimage }, caption: rampok })

db.data.users[opponent].money -= uangnye
db.data.users[m.sender].money += uangnye
global.db.data.users[m.sender].lastrampok = new Date()
}
break
case 'mydompet': case 'balance': {
if (!isGroup) return onlyGroup()
let caption = `ÅV *W A L L E T - I N F O*
Nama : ${isRegistered ? `${NamaKamu(m.sender)}` : `${pushname}`}
Uang : ${formattedMoneyZ}
Limit : ${db.data.users[m.sender].limit}
Level : ${db.data.users[m.sender].level}`
 reply(caption)
 }
 break          

    
case 'gacha': {
if (!isGroup) return onlyGroup()
let ofsi = args[0]
if (!text) return reply(`Masukan Berapa Key Yang Ingin Di Gunakan, *Example:* .gacha 5`)
if (ofsi === 0) return reply(`Hemmm`)
if (isKey < ofsi) return reply(`Your Key is Insufficient!`)
let h1 = Math.random() >= 1000.50
let hh1 = h1 ? Math.ceil(Math.random() * 100.5) : -h1
let h2 = Math.random() >= 15.2
let hh2 = h2 ? Math.ceil(Math.random() * 8) : -h2
let h3 = Math.random() >= 1000.5
let hh3 = h3 ? Math.ceil(Math.random() * 10) : -h3
let uangnye = Math.ceil(Math.random() * 9000)
kurangKey(m.sender, ofsi)
for (let i of ofsi) {
let caption = `ÅV *G A C H A  R E S U L T*
®q ? Money: ${uangnye}
©¶ ? ${h1 ? `Limit: ${hh1}` : `Limit: Tidak Mendapatkan`}
©¶ ? ${h2 ? `Mythic: ${hh2}` : `MythicCreate: Tidak Mendapatkan`}
®t  ? ${h3 ? `Uncommon: ${hh3}` : `Uncommon: Tidak Mendapatkan`}`
reply(caption)
}
}
break

case 'openbo': {
let booking = ["Darwin","ridan","Darwin","fauzan","Darwin","faisal","fajar","arif","adit"]
var booking1 = booking[Math.floor(Math.random() * booking.length)]
let tempat = ["Oyo","Rumah","Kosan"]
var tempat1 = tempat[Math.floor(Math.random() * tempat.length)]
if (isCekDarah < 1) return reply(`Kamu Kelelahan..`)            
let { key } = await alice.sendMessage(m.chat, { text: 'Mencari Pelanggan.!' })
let NgeText = 
`ÅV *S K I D I P A P - R E S U L T*

Uang : ${formattedMoneyZ}
Lokasi : ${tempat1}
Pelanggan : ${booking1}`
await delay(900)
alice.sendMessage(m.chat, { text: `Mendapatkan Pelanggan Bernama ${booking1}`, edit: key })
await delay(1000)
alice.sendMessage(m.chat, { text: `Tempat Di ${tempat1}`, edit: key })
await delay(1000)
alice.sendMessage(m.chat, { text: 'Memulai.!', edit: key })
await delay(900)
alice.sendMessage(m.chat, { text: 'Ah Ah Ah Iyahh', edit: key })
await delay(900)
alice.sendMessage(m.chat, { text: 'Ah AHHH Ah !! Ah Crot ?', edit: key })
await delay(900)
alice.sendMessage(m.chat, { image: {url:'https://telegra.ph/file/4b3e7586641fbf8ac6388.jpg'}, caption: NgeText })
global.db.data.users[m.sender].money += 200
}
break
case 'ngewe': {
if (!isGroup) return onlyGroup()
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 

if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
let uangnye = Math.ceil(Math.random() * 3000)
let anjayy = Math.ceil(Math.random() * 80)
let exp = Math.ceil(Math.random() * 50)
let { key } = await alice.sendMessage(m.chat, { text: 'Ashhh AhHYahh! ?' }, { quoted: m })
let NgeText = `ÅV *N G E W - R E S U L T*
  ? Money: ${uangnye}
  ? Stamina: ${anjayy}
  ? Exp: ${exp}`
await delay(900)
alice.sendMessage(m.chat, { text: NgeText, edit: key }, { quoted: m })
db.data.users[m.sender].money += uangnye
addDarah(m.sender, anjayy)
addBar(m.sender, anjayy)
db.data.users[m.sender].exp += exp
}
break
case 'dungeon': {
if (!isGroup) return onlyGroup()
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 



if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }
if (isSword < 1) return reply(`Kamu Tidak Memiliki Pedang, Beli Lah Pedang Di Toko *.shop buy sword*`)
if (isArmor < 1) return reply(`Kamu Tidak Memiliki Armor , Beli Lah Armor Di Toko *.shop buy armor*`)
let dungeonimg = 'https://telegra.ph/file/e7e06f759a0549bff9a64.jpg'
let rare = Math.random() >= 3.2
let raree = rare ? Math.ceil(Math.random() * 2) : -rare
var uangnye = Math.ceil(Math.random() * 1000)
var diamondnye = Math.ceil(Math.random() * 20)
var darahkurang = Math.ceil(Math.random() * 50)
var ironnye = Math.ceil(Math.random() * 20)
let result = Math.random() >= 10.5 //BIAR ADA KALAH ADA MENANGNYA AOWKWOK
alice.sendMessage(m.chat, {
        text: 'Sedang Memasuki Dungeon..',
        contextInfo: {
        externalAdReply: {
        title: global.namabotnya,
        body: 'Alice Project',
        thumbnailUrl: dungeonimg,
        mediaType: 1,
        renderLargerThumbnail: true
        }}})
        
await delay(2000)
if (result) {
let caption = `*Ada Monster Yang Menyerang Kamu Tetapi Kamu Menang!!*

*Monster:* ${pickRandom(["PosionIus (Kelangkaan 3%)","Goinus (Kelangkaan 9%)","Zhirkiah (Kelangkaan 15%)","TigerKing (Kelangkaan 20%)","GigaNius (Kelangkaan 50%)","HouMius (Kelangkaan 70%)"])}
ÅV *D U N G E O N  R E S U L T*
Wow Keren, Kamu Menang..!!!

*Uang :* ${uangnye}
*Diamond :* ${diamondnye}
*Iron :* ${Ironnye}
*Health :* - ${darahkurang}
*Rare :* ${raree ? 'Mythic Create' : 'Gak Dapet'}`
reply(caption)
db.data.users[m.sender].money += uangnye
addDiamond(m.sender, diamondnye)
addIron(m.sender, ironnye)
addCM(m.sender, raree)
kurangDarah(m.sender, darahkurang)
} else {
let caption = `
ÅV *D U N G E O N  R E S U L T*
Kamu Mati, Hahahaha Cupu!!

®q *Monster:* Mati Gara Gara ${pickRandom(["PosionIus (Kelangkaan 3%)","Goinus (Kelangkaan 9%)","Zhirkiah (Kelangkaan 15%)","TigerKing (Kelangkaan 20%)","GigaNius (Kelangkaan 50%)","HouMius (Kelangkaan 70%)"])}
®t Darah Berkurang: ${darahkurang}`
reply(caption)
kurangDarah(m.sender, darahkurang)
}
}
break
case 'ojek': case 'ngojek': {
if (!isGroup) return onlyGroup()
let pl = pickRandom(["Ari","Ridan","Zeni","Darwin","Dicky","Eni","Ani","Atta","Endong"])
let lm = pickRandom(["Jl. Sikodir/Rw.03,Rt.55","Jl. BibengBobo/Rw.08,Rt.02","Jl. BasoEmam/Rw.05,Rt.01","Jl. UciXyZ/Rw.08,Rt.10"])
    alice.sendMessage(m.chat, {
      react: {
        text: '?',
        key: m.key,
      }
    });
await delay(1000)
    alice.sendMessage(m.chat, {
      react: {
        text: '?',
        key: m.key,
      }
    });
reply(`
ÅV *R E S U L T  N G O J E K*

 ? Mendapatkan Uang ${formattedMoneyZ}
 ? Nama Pelanggan ${pl}
 ? Alamat Tujuan ${lm}
`)
}                    
break
case 'mancing': case 'memancing': {
if (!isGroup) return onlyGroup()
if (!isBar){ addInvBar(m.sender, BarAwal) }
if (isCekBar < 1) return reply(`Kamu Kelaparan, Masak Lah Makanan Atau Makan Makanan Yang Ada, *.cook* / *.makanan*`)
kurangBar(m.sender, 90)
let mancing = ["Sungai??","Rawa?","Laut?"]
var mancing1 = mancing[Math.floor(Math.random() * mancing.length)]
let mampus = ["Digigit Ular??","Tercakar Buaya?","Tersandung","Digigit Hewan Buas?","Terpeleset Kejurang"]
var mampus1 = mampus[Math.floor(Math.random() * mampus.length)]

if (isCekDarah < 1) return reply(`Darahmu Habis`) 
reply(`Mulai Memancing... ?`)
await delay(3000)
var ikanmu1 = Math.ceil(Math.random() * 10)
let monaynya = 2000 * isCmd
db.data.users[m.sender].money += monaynya
kurangDarah(m.sender, 40)
global.db.data[m.sender].ikan += ikanmu1
let anu =`
ÅV *S T R I K E   H O O K!*

?? Tempat : ${mancing1}
?? Terkena : ${mampus1}
? Tangkapan : ${getIkan(m.sender)}

dapet perkoro cik
`
           
alice.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `M A N C I N G - R E S U L T`,
        body: `Alice Project`,
        thumbnailUrl: "https://telegra.ph/file/4d961120c79b35eab736a.jpg",
        sourceUrl: "https://youtube.com/@bg-darwin",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
            }
break
case 'cheat': {
if (!isGroup) return onlyGroup()
if (!isCreator && !isOwner) return replycus(mess.owner, 'Access Denied', 'https://telegra.ph/file/3847c6c65ec0503456cca.jpg')
let input = args[0]            
if (!input) return reply(`ÅV *C O D E   C H E A T*
${command} limit          
${command} exp
${command} balance
${command} level

Example : ${command} balance`)
if (input === 'limit') {
db.data.users[m.sender].limit += 1000000000000
reply(`Cheat activated!`)
} else if (input === 'balance') {
db.data.users[m.sender].money += 1000000000000
reply(`Cheat activated!`)
} else if (input === 'level') {
db.data.users[m.sender].level += 100
reply(`Cheat activated!`)
} if (input === 'exp') {
db.data.users[m.sender].exp += 10000
reply(`Cheat activated!`)
}
}
break
case 'code': case 'codes':
if (!m.text) return;
if (m.text === "Y") {
} else if (m.text === "N") {
m.reply('*? Registration cancelled*');
} else m.reply('');
break

break
case 'kerja': {
if (!isGroup) return onlyGroup()
if (!isBar){ addInvBar(m.sender, BarAwal) }
if (isCekBar < 1) return reply(`Kamu Kelaparan, Masak Lah Makanan Atau Makan Makanan Yang Ada, *.cook* / *.makanan*`)
let uangnye = Math.ceil(Math.random() * 99999)
if (!q) return reply(`
ÅV *L I S T - K E R J A*
®q ? ? Ojek 
©¶ ? ? Pedagang 
©¶ ? ? ?Dokter 
©¶ ? ? Petani 
©¶ ? ? Montir 
®t ? ?? Kuli
*Example : ${command} ojek*`)
var anu1 = args[1]
if (args[0] === 'dokter'){
db.data.users[m.sender].money += uangnye
reply(`Kamu menyembuhkan pasien *cedera* ?
Dan mendapatkan uang senilai *Rp ${uangnye}* ?`)
} else if (args[0] === 'ojek') {
db.data.users[m.sender].money += uangnye
kurangBar(m.sender, 50)
reply(`
Kamu Mendapatkan Pelanggan ?, Dan Mengantarkan *Pelanggan* Ke Tempat *Tujuan ?* Di Bayar *Rp ${uangnye}*`)
} else if (args[0] === 'pedagang') {
let jualan = ["Sayuran?","Makanan?","Minuman?"]
let jualannye = jualan[Math.floor(Math.random() * jualan.length)]
kurangBar(m.sender, 60)
db.data.users[m.sender].money += uangnye
reply(`
Kamu Menjual *${jualannye}* Dan Mendapatkan 1 *Pembeli* , Hasil *Rp ${uangnye}*`)
} else if (args[0] === 'petani') {
db.data.users[m.sender].money += uangnye
kurangBar(m.sender, 80)
let buahan = ["Apel ?","Stroberi ?","Mangga ?","Semangka ?","Jeruk ?","Melon ?"]
let buahannye = buahan[Math.floor(Math.random() * buahan.length)]
reply(`
Kebun ${buahannye} Siap Untuk *Dipanen* ,Menjual Hasil Buah ${buahannye} Kek Pembeli Mendapatkan Uang *Rp ${uangnye}*`)
} else if (args[0] === 'montir') {
let kenapa = ["Ganti Oli","Ban Bocor","Motor Kebelah 2","Ganti Lampu","Rem Blong"]
kurangBar(m.sender, 60)
let kenapatuh = kenapa[Math.floor(Math.random() * kenapa.length)]
db.data.users[m.sender].money += uangnye
reply(`Pembeli ${kenapatuh} , Mulai Memperbaiki/Mengerjakan Dan Mendapatkan Uang *Rp ${uangnye}*`)
} else if (args[0] === 'kuli') {
db.data.users[m.sender].money += uangnye
reply(`Memperbaiki Rumah ??, Dan Mendapatkan Uang *Rp ${uangnye}*`)
}
}
break
case 'pet': {
reply(`ÅV *P E T  - Y O U*

Kucing : ${getKucing(m.sender)}
Anjing : ${getAnjing(m.sender)}
Naga : ${getNaga(m.sender)}
Kyubi : ${getKyubi(m.sender)}`)
}
break
case 'shop': {
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 

if (!isInvMakanan){ addInvMakanan(m.sender) } 
if (!isInvBahan){ addInvBahan(m.sender) } 
if (!isInvBuah){ addInvBuah(m.sender) } 
if (!isInvBuild){ addInvBuild(m.sender) } 

if (!isBar){ addInvBar(m.sender, BarAwal) }

if (!args[0]) {
reply(`ÅV *R P G  -  S H O P*

> Potion ? Harga $1000
> Kayu ? Harga $1000
> Batu ? Harga $1000
> Pasir ? Harga $4000
> Semen ? Harga $8000

> Kucing ? Harga $3000
> Anjing ? Harga $6000
> Kyubi ? Harga $99999
> Naga ? Harga $5000
> fpet < Makanan Hewan > ? $1000

> uncommon ? Harga $5000
> mythic ? Harga $3000
> legendary ? Harga $2000

> sopsapi ? Harga $2000
> ikangoreng ? Harga $3000
> steak ? Harga $5000
> Sate ? Harga $1000

> key ? Harga $2000

> Sword ? Harga $5000
> Armor ? Harga $3000

*Ex:* .shop buy potion 5`)
} else if (args[0] === 'buy') {
if (args[1] === 'potion') {
let harga = 1000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
addPotion(m.sender, args[2])
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Potion Sebesar ${args[2]} , Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'kayu') {
let harga = 1000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
addKayu(m.sender, args[2])
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Kayu Sebesar ${args[2]} , Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'batu') {
let harga = 1000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
addBatu(m.sender, args[2])
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Batu Sebesar ${args[2]} , Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'kucing') {
if (isKucing > 1) return reply(`Max Pet Kucing 1`)
let harga = 3000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)

db.data.users[m.sender].kucing += args[2]
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Pet Kucing , Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'anjing') {
if (isAnjing > 1) return reply(`Max Pet Anjing 1`)
let harga = 6000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
db.data.users[m.sender].anjing += args[2]
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Pet anjing , Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'uncommon') {
let harga = 5000 * args[2]
let input = args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
addCU(m.sender, input)
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Create uncommon, Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'mythic') {
let harga = 3000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
addCM(m.sender, args[2])
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Create Mythic, Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'legendary') {
let harga = 2000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
addCL(m.sender, args[2])
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Create Legendary, Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'naga') {
if (isNaga > 1) return reply(`Max Pet Naga 1`)
let harga = 5000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
db.data.users[m.sender].naga += args[2]
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Pet Naga , Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'kyubi') {
if (isNaga > 1) return reply(`Max Pet Kyubi 1`)
let harga = 99999 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
db.data.users[m.sender].kyubi += args[2]
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Pet Kyubi , Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'fpet') {
let harga = 1000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
db.data.users[m.sender].feedpet += args[2]
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Makanan Pet , Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'pasir') {
let harga = 4000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
addPasir(m.sender, args[2])
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Pasir Sekarung , Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'semen') {
let harga = 8000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
addSemen(m.sender, args[2])
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Semen Sekarung , Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'sate') {
let harga = 1000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
addSate(m.sender, args[2])
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Sate , Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'ikangoreng') {
let harga = 3000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
addGoreng(m.sender, args[2])
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Ikan Goreng , Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'steak') {
let harga = 5000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
addSteak(m.sender, args[2])
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Steak, Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'sopsapi') {
let harga = 2000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
addSop(m.sender, args[2])
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Sop Sapi , Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'sword') {
let harga = 5000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
addSword(m.sender, args[2])
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Sword Sebesar ${args[2]} , Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'armor') {
let harga = 3000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
addArmor(m.sender, args[2])
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Armor Sebesar ${args[2]} , Sisa Uang Mu ${formattedMoneyZ}`)
} else if (args[1] === 'key') {
let harga = 2000 * args[2]
if (isMonay < harga) return reply(`Uang Tidak Mencukupi`)
if (isNaN(args[2])) return reply(`Masukan Angka!`)
if (!args[2]) return reply(`Masukan Angka !`)
addKey(m.sender, args[2])
db.data.users[m.sender].money -= harga
reply(`Berhasil Membeli Key Sebesar ${args[2]} , Sisa Uang Mu ${formattedMoneyZ}`)
}
}
}
break
case 'gajian': {
if (!isGroup) return onlyGroup()
function JaM(ms) {
  let h = isNaN(ms) ? '60' : Math.floor(ms / 3600000) % 60
  return [h].map(v => v.toString().padStart(2, 0) ).join(':')
}

function MeNit(ms) {
  let m = isNaN(ms) ? '60' : Math.floor(ms / 60000) % 60
  return [m].map(v => v.toString().padStart(2, 0) ).join(':')
}

function DeTik(ms) {
  let s = isNaN(ms) ? '60' : Math.floor(ms / 1000) % 60
  return [s].map(v => v.toString().padStart(2, 0) ).join(':')
}

let LastClaim = global.db.data.users[m.sender].lastclaim
let cdm = `${MeNit(new Date - LastClaim)}`
let cds = `${DeTik(new Date - LastClaim)}`
let cd1 = Math.ceil(44 - cdm)
let cd2 = Math.ceil(59 - cds)
  if (new Date - global.db.data.users[m.sender].lastclaim > 2700000) {
addMonay(m.sender, 7000)
    reply('Nih Gaji Kamu +Rp7000')
    global.db.data.users[m.sender].lastclaim = new Date * 1
  } else return reply(`Kamu Udah Ambil Jatah Hari Ini.\n\nTunggu ${cd1} Menit ${cd2} Detik!`)
  }
  break
case 'leaderboard': case 'lb': {
function toNumber(property, _default = 0) {

  if (property) return (a, i, b) => {

    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }

  }

  else return a => a === undefined ? _default : a

}

function sort(property, ascending = true) {

  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]

  else return (...args) => args[ascending & 1] - args[!ascending & 1]

}

function enumGetKey(a) {

  return a.jid

}
if (!m.isGroup) return reply(mess.group)
let users = Object.entries(global.db.data.users).map(([key, value]) => {
    return { ...value, jid: key }
  })
  let sortedMoney = users.map(toNumber('money')).sort(sort('money'))
  let usersMoney = sortedMoney.map(enumGetKey)
  let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedMoney.length)
  let textnua = `
ÅV *T O P  L E A D E R B O A R D [ ${len} ]*
 
 ? You: *${usersMoney.indexOf(m.sender) + 1}* dari *${usersMoney.length}*
 
${sortedMoney.slice(0, len).map(({ jid, money }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${alice.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${money} Money*`).join`\n`}
`.trim()
  reply795(textnua)
  }
break 
case 'claim':
case 'daily':{
if (!isGroup) return onlyGroup()
const free = 100
const prem = 1000
const moneyfree = 5000
const moneyprem = 1000
const timeout = 86400000
let time = global.db.data.users[m.sender].lastclaim + 86400000
 if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) return reply( `Anda sudah mengklaim, klaim harian hari ini`)
 global.db.data.users[m.sender].limit += isPremium ? prem : free
 global.db.data.users[m.sender].balance += isPremium ? moneyprem : moneyfree
reply(`Selamat kamu mendapatkan:\n\n+${isPremium? prem : free} limit\n+${isPremium? moneyprem : moneyfree} Balance`)
global.db.data.users[m.sender].lastclaim = new Date * 1
} 
break
case 'feed': {
let user = global.db.data.users[m.sender]
let type = (args[0] || '').toLowerCase()
switch (type) {
case 'kucing':
if (user.kucing < 1) return reply(`Kamu Tidak Mempunyai ${type}.`)
if (user.kucing > 5) return reply(`Level ${type} Mu Sudah Max`)
if (user.feedpet > 0) {
global.db.data.users[m.sender].feedpet -= 1
global.db.data.users[m.sender].kucingexp += 20
reply(`${type} Kamu Sekarang Sudah Makan Dan Kenyang.!`)
if (user.kucing > 0) {
let naiklvl = ((user.kucing * 1000) - 1)
if (global.db.data.users[m.sender].kucingexp > naiklvl) {
global.db.data.users[m.sender].kucing += 1
global.db.data.users[m.sender].kucingexp -= (user.kucing * 100)
reply(`Selamat Pet *${type}* Kamu Naik level.!!`)
}
} else return reply(`Kamu Tidak Mempunyai Pet`)
} else return reply(`Kamu Tidak Mempunyai Makanan Pet`)
break
case 'kyubi':
if (user.kyubi == 0) return reply(`Kamu Tidak Mempunyai ${type}.`)
if (user.kyubi == 5) return reply(`Level ${type} Mu Sudah Max`)
if (user.feedpet > 0) {
global.db.data.users[m.sender].feedpet -= 1
global.db.data.users[m.sender].kyubiexp += 20
reply(`${type} Kamu Sekarang Sudah Makan Dan Kenyang.!`)
if (user.kyubi > 0) {
let naiklvl = ((user.kyubi * 1000) - 1)
if (global.db.data.users[m.sender].kyubiexp > naiklvl) {
global.db.data.users[m.sender].kyubi += 1
global.db.data.users[m.sender].kyubiexp -= (user.kyubi * 100)
reply(`Selamat Pet *${type}* Kamu Naik level.!!`)
}
} else return reply(`Kamu Tidak Mempunyai Pet`)
} else return reply(`Kamu Tidak Mempunyai Makanan Pet`)
break           
case 'naga':
if (user.naga < 1) return reply(`Kamu Tidak Mempunyai ${type}.`)
if (user.naga > 5) return reply(`Level ${type} Mu Sudah Max`)
if (user.feedpet > 0) {
global.db.data.users[m.sender].feedpet -= 1
global.db.data.users[m.sender].nagaexp += 20
reply(`${type} Kamu Sekarang Sudah Makan Dan Kenyang.!`)
if (user.naga > 0) {
let naiklvl = ((user.naga * 1000) - 1)
if (global.db.data.users[m.sender].nagaexp > naiklvl) {
global.db.data.users[m.sender].naga += 1
global.db.data.users[m.sender].nagaexp -= (user.naga * 100)
reply(`Selamat Pet *${type}* Kamu Naik level.!!`)
}
} else return reply(`Kamu Tidak Mempunyai Pet`)
} else return reply(`Kamu Tidak Mempunyai Makanan Pet`)
break                            
case 'anjing':
if (user.anjing < 1) return reply(`Kamu Tidak Mempunyai ${type}.`)
if (user.anjing > 5) return reply(`Level ${type} Mu Sudah Max`)
if (user.feedpet > 0) {
global.db.data.users[m.sender].feedpet -= 1
global.db.data.users[m.sender].anjingexp += 20
reply(`${type} Kamu Sekarang Sudah Makan Dan Kenyang.!`)
if (user.anjing > 0) {
let naiklvl = ((user.anjing * 1000) - 1)
if (global.db.data.users[m.sender].anjingexp > naiklvl) {
global.db.data.users[m.sender].anjing += 1
global.db.data.users[m.sender].anjingexp -= (user.anjing * 100)
reply(`Selamat Pet *${type}* Kamu Naik level.!!`)
}
} else return reply(`Kamu Tidak Mempunyai Pet`)
} else return reply(`Kamu Tidak Mempunyai Makanan Pet`)
break          
default:
reply(`Ex: ${command} <anjing/kucing/naga/kyubi>`)
}
}
break
case 'berkebon':
case 'petani': {
if (!isGroup) return onlyGroup()
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

hours = (hours < 10) ? "0" + hours : hours;
minutes = (minutes < 10) ? "0" + minutes : minutes;
seconds = (seconds < 10) ? "0" + seconds : seconds;

return hours + " jam " + minutes + " menit " + seconds + " detik";
}

    const timeout = 1800000;
    let apelu = global.db.data.users[m.sender].bibitapel;
    let angguru = global.db.data.users[m.sender].bibitanggur;
    let manggau = global.db.data.users[m.sender].bibitmangga;
    let pisangu = global.db.data.users[m.sender].bibitpisang;
    let jeruku = global.db.data.users[m.sender].bibitjeruk;
    let time = global.db.data.users[m.sender].lastberkebon + 1800000;

    if (apelu == 0 || angguru == 0 || manggau == 0 || pisangu == 0 || jeruku == 0) {
        return reply(`*Pastikan kamu memiliki semua bibit*\n*Seperti Bibit Apel, Bibit Mangga, Bibit Jeruk, Bibit Pisang, Bibit Anggur*\n\nKetik :\n${prefix}shop buy bibitmangga 500\n\n*List*\nbibitmangga\nbibitanggur\nbibitpisang\nbibitjeruk\nbibitapel`);
    }

    if (new Date() - global.db.data.users[m.sender].lastberkebon < 1800000) {
        return reply(`Anda sudah menanam\nMohon tunggu hasil panenmu\nTunggu selama ${msToTime(time - new Date())} lagi`);
    }

    if (global.db.data.users[m.sender].bibitmangga > 499) {
        if (global.db.data.users[m.sender].bibitapel > 499) {
            if (global.db.data.users[m.sender].bibitpisang > 499) {
                if (global.db.data.users[m.sender].bibitjeruk > 499) {
                    if (global.db.data.users[m.sender].bibitanggur > 499) {
                        let pisangpoin = `${Math.floor(Math.random() * 500)}`.trim();
                        let anggurpoin = `${Math.floor(Math.random() * 500)}`.trim();
                        let manggapoin = `${Math.floor(Math.random() * 500)}`.trim();
                        let jerukpoin = `${Math.floor(Math.random() * 500)}`.trim();
                        let apelpoin = `${Math.floor(Math.random() * 500)}`.trim();
                        global.db.data.users[m.sender].pisang += pisangpoin * 1;
                        global.db.data.users[m.sender].anggur += anggurpoin * 1;
                        global.db.data.users[m.sender].mangga += manggapoin * 1;
                        global.db.data.users[m.sender].jeruk += jerukpoin * 1;
                        global.db.data.users[m.sender].apel += apelpoin * 1;
                        global.db.data.users[m.sender].bibitpisang -= 500;
                        global.db.data.users[m.sender].bibitanggur -= 500;
                        global.db.data.users[m.sender].bibitmangga -= 500;
                        global.db.data.users[m.sender].bibitjeruk -= 500;
                        global.db.data.users[m.sender].bibitapel -= 500;
                        global.db.data.users[m.sender].lastberkebon = new Date() * 1;
                        let hsl = `Selamat ${pushname}, Kamu mendapatkan : \n+${pisangpoin} Pisang\n+${manggapoin} Mangga\n+${anggurpoin} Anggur\n+${jerukpoin} Jeruk\n+${apelpoin} Apel`;
                        reply(hsl);
                        setTimeout(() => {
                            reply(`Waktunya Ngebon Lagi Kak!!`);
                        }, timeout);
                    } else reply(`Pastikan bibit anggur kamu *500* untuk bisa berkebon`);
                } else reply(`Pastikan bibit jeruk kamu *500* untuk bisa berkebon`);
            } else reply(`Pastikan bibit pisang kamu *500* untuk bisa berkebon`);
        } else reply(`Pastikan bibit apel kamu *500* untuk bisa berkebon`);
    } else reply(`Pastikan bibit mangga kamu *500* untuk bisa berkebon`);
}
break;
case 'makan': {
let ga = args[0]
let ga1 = args[1]
let user = global.db.data.users[m.sender]
switch (ga) {
case 'ikan_goreng': 
if (!ga1) return reply(`Berapa Yang Ingin Kamu Makan?, Contoh: .makan ${ga} 1`)
if (user.ikang < ga1) return reply(`Wah Sepertinya Kamu Tidak Memiliki ${ga} Sebesar ${ga1}`)
user.bar += 50
reply(`Sekarang Jumlah Bar Kelaparan Kamu ${user.bar}`)
user.ikang -= ga1
break
case 'ayam_goreng': 
if (!ga1) return reply(`Berapa Yang Ingin Kamu Makan?, Contoh: .makan ${ga} 1`)
if (user.ayamg < ga1) return reply(`Wah Sepertinya Kamu Tidak Memiliki ${ga} Sebesar ${ga1}`)
user.bar += 80
reply(`Sekarang Jumlah Bar Kelaparan Kamu ${user.bar}`)
user.ayamg -= ga1
break
case 'sate': 
if (!ga1) return reply(`Berapa Yang Ingin Kamu Makan?, Contoh: .makan ${ga} 1`)
if (user.sate < ga1) return reply(`Wah Sepertinya Kamu Tidak Memiliki ${ga} Sebesar ${ga1}`)
user.bar += 40
reply(`Sekarang Jumlah Bar Kelaparan Kamu ${user.bar}`)
user.sate -= ga1
break
case 'mie': 
if (!ga1) return reply(`Berapa Yang Ingin Kamu Makan?, Contoh: .makan ${ga} 1`)
if (user.mie < ga1) return reply(`Wah Sepertinya Kamu Tidak Memiliki ${ga} Sebesar ${ga1}`)
user.bar += 90
user.mie -= ga1
reply(`Sekarang Jumlah Bar Kelaparan Kamu ${user.bar}`)
break
case 'sop_sapi': 
if (!ga1) return reply(`Berapa Yang Ingin Kamu Makan?, Contoh: .makan ${ga} 1`)
if (user.sops < ga1) return reply(`Wah Sepertinya Kamu Tidak Memiliki ${ga} Sebesar ${ga1}`)
user.bar += 100
user.sops -= ga1
reply(`Sekarang Jumlah Bar Kelaparan Kamu ${user.bar}`)
break


default: 
reply(`ÅV *F O O D  I N V E N T O R Y*

? *Ikan Goreng:* ${user.ikang}
? *Ayam Goreng:* ${user.ayamg}
? *Sate:* ${user.sate}
? *Mie:* ${user.mie}
? *Sop Sapi:* ${user.sops}`)
}
}
break

case 'memasak': {
let ga = args[0]
let ga1 = args[1]
let user = global.db.data.users[m.sender]
switch (ga) {
case 'sate':
if (!ga1) return reply(`Berapa Ayam Yang Ingin Kamu Masak?`)
if (user.ayam < ga1) return reply(`Ayam Kamu Kurang`)
user.sate += ga1
user.ayam -= ga1
reply(`Berhasil Membuat ${ga} Untuk Memakannya Silahkan Ketik .makan`)
break
case 'ayam':
if (!ga1) return reply(`Berapa ${ga} Yang Ingin Kamu Masak?`)
if (user.ayam < ga1) return reply(`${ga} Kamu Kurang`)
user.ayamg += ga1
user.ayam -= ga1
reply(`Berhasil Membuat ${ga} Goreng Untuk Memakannya Silahkan Ketik .makan`)
break
case 'ikan':
if (!ga1) return reply(`Berapa ${ga} Yang Ingin Kamu Masak?`)
if (user.ikan < ga1) return reply(`${ga} Kamu Kurang`)
user.ikang += ga1
user.ikan -= ga1
reply(`Berhasil Membuat ${ga} Untuk Memakannya Silahkan Ketik .makan`)
break
case 'sop_sapi':
if (!ga1) return reply(`Berapa ${ga} Yang Ingin Kamu Masak?`)
if (user.sapi < ga1) return reply(`Sapi Kamu Kurang`)
user.sops += ga1
user.sapi -= ga1
reply(`Berhasil Membuat ${ga} Untuk Memakannya Silahkan Ketik .makan`)
break

case 'mie':
if (!ga1) return reply(`Berapa ${ga} Yang Ingin Kamu Masak?`)
if (user.miem < ga1) return reply(`${ga} Kamu Kurang`)
user.mie += ga1
user.miem -= ga1
reply(`Berhasil Membuat ${ga} Untuk Memakannya Silahkan Ketik .makan`)
break

default: 
reply(`*Penggunaan:* ${command} ikan/sapi/sate/mie/sop_sapi 6`)

}
}
break
case 'my': case 'me': {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let userj = global.db.data.users[who]
let days = Math.abs(Math.floor((global.db.data.users[who].premiumDate - new Date()) / (24 * 60 * 60 * 1000)));
let hours = Math.abs(Math.floor((global.db.data.users[who].premiumDate - new Date()) / (60 * 60 * 1000))) % 24;
let minutes = Math.abs(Math.floor((global.db.data.users[who].premiumDate - new Date()) / (60 * 1000))) % 60;
let premiumExpired = userj.premium ? `${days} Hari ${hours} Jam ${minutes} Menit` : "Not a premium";
const isMemek = global.db.data.users[who].premium
const isBagn = banned.includes(who)
const isRegisteredd = checkRegisteredUser(who)
let atm = userj.atm
let caption = `ÅV *I N F O R M A T I O N  ${isRegisteredd ? `${NamaKamu(who).toUpperCase()}` : `Tidak Terdeteksi`}*

Name : ${isRegisteredd ? `${NamaKamu(who)}` : `Tidak Terdeteksi`}
Umur :  ${isRegisteredd ? `${UmurKamu(who)}` : `Tidak Terdeteksi`}
Premium : ${isMemek}
Atm : ${atm}
PremiumExpired : ${premiumExpired}
Level : ${userj.level}
Role : ${userj.role}
Exp : ${userj.exp}`
sendMessage(m.chat, { text: caption, contextInfo: {
    externalAdReply: {
      title: "ÅV P R O F I L E",
      body: 'This is your profile, name information, limits and top leaderboard',
      thumbnailUrl: ppUrl,
      sourceUrl: sig,
      mediaType: 1,
      showAdAttribution: true,
      renderLargerThumbnail: true
    }
  }}, { quoted: m });
}
break
case 'getsider': case 'sider': {
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)


function msToDate(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  if (d == 0 && h == 0 && m == 0) {
        return "Baru Saja"
    } else {
        return [d, 'H ', h, 'J '].map(v => v.toString().padStart(2, 0)).join('')
    }
  
}
    var lama = 86400000 * 7
    const now = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    });
    const milliseconds = new Date(now).getTime();

    let member = groupMetadata.participants.map(v => v.id)
    if (!text) {
        var pesan = "Harap aktif di grup karena akan ada pembersihan member setiap saat"
    } else {
        var pesan = text
    }
    var sum
    sum = member.length
    var total = 0
    var sider = []
    for (let i = 0; i < sum; i++) {
        let users = m.isGroup ? groupMetadata.participants.find(u => u.id == member[i]) : {}
        if ((typeof global.db.data.users[member[i]] == 'undefined' || milliseconds * 1 - global.db.data.users[member[i]].lastseen > lama) && !isAdmins) {
            if (typeof global.db.data.users[member[i]] !== 'undefined') {
                if (global.db.data.users[member[i]].banned == true) {
                    total++
                    sider.push(member[i])
                }
            } else {
                total++
                sider.push(member[i])
            }
        }
    }
    if (total < 1) return reply(`*Digrup ini tidak terdapat sider.*`)
    alice.sendMessage(m.chat, { text: `*${total}/${sum}* anggota grup adalah sider dengan alasan :\n1. Tidak aktif selama lebih dari 7 hari\n2. Baru join tetapi tidak pernah berinteraksi\n\n_°∞${pesan}°±_\n\n*LIST SIDER :*\n${sider.map(v => '  ° ' + v.replace(/@.+/, '' + typeof global.db.data.users[v] == "undefined" ? ' Sider ' : ' Off ' + msToDate(milliseconds * 1 - global.db.data.users[v].lastseen))).join('\n')}`}, {
        contextInfo: {
            mentionedJid: sider
        }
    })
}
break
// Batas Akhir, Jangan Ubah code dibawah
default:           
}
} catch (err) {
console.log(err)
console.log(chalk.bgRed(chalk.black("[  ERROR  ]")),util.format(err))
let e = String(err) 
if (e.includes("this.isZero")) {return}
if (e.includes("rate-overlimit")) {
if(!alice.public) return
alice.public = false
await alice.sendMessage(global.owner,{
text: `Terjadi Rate Overlimit!`
})}}}
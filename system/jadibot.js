require('../settings');
require('../system/functions')
//MODULE
const { default: WASocket, Browsers, DisconnectReason, makeInMemoryStore, PHONENUMBER_MCC, useMultiFileAuthState, fetchLatestBaileysVersion, generateWAMessage, getContentType, downloadContentFromMessage, generateWAMessageFromContent, generateForwardMessageContent, jidDecode, proto, areJidsSameUser, delay } = global.baileys
const { Boom } = require('@hapi/boom')
const PhoneNumber = require('awesome-phonenumber')
const qrcode = require('qrcode')
const fs = require('fs')
const chalk = require('chalk')
const pino = require('pino')
const rimraf = require('rimraf')
const fetch = require('node-fetch')
const axios = require('axios')
const path = require('path')
const FileType = require('file-type')
const Jimp = require('jimp')
//LIB
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('../lib/exif')
const { db } = require('./database');
const { initDatabase } = require('./database');

const makeWASocket = (connectionOptions, options = {}) => {
try {
const alice = WASocket(connectionOptions)

alice.ments = (teks = '') => {
return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []
}

alice.decodeJid = (chat) => {
let decode = jidDecode(chat)
if (/:\d+@/gi.test(chat)) return decode.user && decode.server && decode.user + '@' + decode.server || chat;
else return chat;
}

alice.sendteks = (from, teks, q = '', options = {}) => {
return alice.sendMessage(from, {text: teks, mentions: alice.ments(teks), ...options }, { quoted: q });
}

alice.sendimage = async (from, path, caption = '', quoted, options) => {
let buffer = Buffer.isBuffer(path) ? path : await getBuffer(path)
return await alice.sendMessage(from, { image: buffer, caption: caption, ...options }, { quoted: quoted})
}

alice.copyNForward = async (jid, message, forwardingScore = true, options = {}) => {
let m = generateForwardMessageContent(message, !!forwardingScore)
let mtype = Object.keys(m)[0]
if (forwardingScore && typeof forwardingScore == 'number' && forwardingScore > 1) m[mtype].contextInfo.forwardingScore += forwardingScore
m = generateWAMessageFromContent(jid, m, { ...options, userJid: alice.user.id })
await alice.relayMessage(jid, m.message, { messageId: m.key.id, additionalAttributes: { ...options }})
return m
}

alice.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

alice.sendkontak = (from, teks, arr = [...[satu = "", dua = "", tiga = ""]], quoted = '', opts = {}) => {
return alice.sendMessage(from, { contacts: { displayName: teks, contacts: arr.map(i => ({displayName: '', vcard: 'BEGIN:VCARD\n'+'VERSION:3.0\n'+'FN:'+i[0]+'\n'+'ORG:'+i[2]+';\n'+'TEL;type=CELL;type=VOICE;waid='+i[1]+':'+i[1]+'\n'+'END:VCARD' })) }, ...opts}, {quoted})
}

alice.resize = async(buff) => {
const jimp = await Jimp.read(buff);
const crop = jimp.crop(0, 0, (await jimp.getWidth()), (await jimp.getHeight()));
return {img: await crop.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG),preview: await crop.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG)}
}

alice.createprofile = async(from, buff) => {
const { img } = await alice.resize(buff);
return alice.query({ tag: 'iq', attrs: { to: from, type:'set', xmlns: 'w:profile:picture' }, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }] })
}

alice.getName = (jid, withoutContact= false) => {
id = alice.decodeJid(jid)
withoutContact = alice.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = alice.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {id, name: 'WhatsApp'} : id === alice.decodeJid(alice.user.id) ? alice.user : (store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

alice.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
let trueFileName = attachExtension ? ('./.npm/' + filename + '.' + type.ext) : './.npm/' + filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

alice.sendMedia = async (from, path, quoted, options = {}) => {
let { ext, mime, data } = await alice.getFile(path)
messageType = mime.split("/")[0]
pase = messageType.replace('application', 'document') || messageType
return await alice.sendMessage(from, { [`${pase}`]: data, mimetype: mime, ...options }, { quoted })
}

alice.getFile = async (PATH, returnAsFilename) => {
let res, filename
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)).buffer() : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
if (data && returnAsFilename && !filename) (filename = path.join(__dirname, '../.npm/' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
return {
res,
filename,
...type,
data
}
}

alice.sendFile = async(from, PATH, fileName, quoted = {}, options = {}) => {
let types = await alice.getFile(PATH, true)
let { filename, size, ext, mime, data } = types
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('../lib/sticker')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'
}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await alice.sendMessage(from, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)
}

// FUNCTION MAKE STICKER
alice.imgToSticker = async(from, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetchBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await alice.sendMessage(from, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

alice.vidToSticker = async(from, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetchBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await alice.sendMessage(from, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

// FUNCTION DOWNLOAD
alice.dlMessage = async(message) => {
try {
let mime = (message.msg || message).mimetype || '';
let messageType = message.mtype ? message.mtype.replace(/Message/gi, ''): mime.split('/')[0];
const stream = await downloadContentFromMessage(message, messageType);
let buffer = Buffer.from([]);
for await(const chunk of stream) buffer = Buffer.concat([buffer, chunk]);
return buffer
}catch(e){console.log(e)}
}

alice.downloadM = async(m, type, filename = '') => {
if (!m || !(m.url || m.directPath)) return Buffer.alloc(0)
const stream = await downloadContentFromMessage(m, type)
let buffer = Buffer.from([])
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
if (filename) await fs.promises.writeFile(filename, buffer)
return filename && fs.existsSync(filename) ? filename : buffer
}

return alice

} catch (e) {
console.log(e);
}

}

const parsingMessages = (alice, m, store) => {
if (m == undefined) return console.log("Invalid Update message baileys");
if (alice == undefined) return console.log("Invalid connection from baileys");
if (!m) return m
let M = proto.WebMessageInfo
m = M.fromObject(m)
if (m.key) {
m.id = m.key.id
m.isBaileys = m.id && m.id.length === 16 || m.id.startsWith('3EB0') && m.id.length === 12 || false
m.chat = alice.decodeJid(m.key.remoteJid || message.message?.senderKeyDistributionMessage?.groupId || '')
m.now = m.messageTimestamp
m.isGc = m.chat.endsWith('@g.us')
m.isPc = m.chat.endsWith('@s.whatsapp.net')
m.sender = alice.decodeJid(m.key.fromMe && alice.user.id || m.participant || m.key.participant || m.chat || '')
m.fromMe = m.key.fromMe //|| areJidsSameUser(m.sender, alice.user.id)
m.from = m.key.remoteJid
}
m.getContentType = (content) => {
if (content) {
const keys = Object.keys(content);
const key = keys.find(k => (k === 'conversation' || k.endsWith('Message')) && k !== 'senderKeyDistributionMessage');
return key;
}
}
if (m.message) {
if (m.message?.messageContextInfo) delete m.message.messageContextInfo;
if (m.message?.senderKeyDistributionMessage) delete m.message.senderKeyDistributionMessage;
m.type = m.getContentType(m.message);
m.content = JSON.stringify(m.message)
m.botNumber = alice.user.id ? alice.user.id.split(":")[0]+"@s.whatsapp.net" : alice.user.jid
m.senderNumber = m.sender.split('@')[0]
m.pushname = m.pushName || 'No Name'
m.msg = (m.type == 'viewOnceMessageV2' ? m.message[m.type].message[m.getContentType(m.message[m.type].message)] : m.message[m.type])
m.text = m.msg?.text || m.msg?.caption || m.message?.conversation || m.msg?.contentText || m.msg?.selectedDisplayText || m.msg?.title || ''
m.budy = (typeof m.text == 'string' ? m.text : '')
m.mentionedJid = m.msg?.contextInfo?.mentionedJid?.length && m.msg.contextInfo.mentionedJid || []
let quoted = m.quoted = m.msg?.contextInfo?.quotedMessage ? m.msg.contextInfo.quotedMessage : null
if (m.quoted) {
let type = Object.keys(m.quoted)[0]
m.quoted = m.quoted[type]
if (typeof m.quoted === 'string') m.quoted = { text: m.quoted }
m.quoted.type = type
m.quoted.id = m.msg.contextInfo.stanzaId
m.quoted.chat = alice.decodeJid(m.msg.contextInfo.remoteJid || m.chat || m.sender)
m.quoted.isBaileys = m.quoted.id && m.quoted.id.length === 16 || false
m.quoted.sender = alice.decodeJid(m.msg.contextInfo.participant)
m.quoted.fromMe = m.quoted.sender === alice.user.jid
m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.contentText || ''
m.quoted.mentionedJid = m.quoted.contextInfo?.mentionedJid?.length && m.quoted.contextInfo.mentionedJid || []
if (m.quoted.url || m.quoted.directPath) m.quoted.download = (saveToFile = false) => alice.downloadM(m.quoted, m.quoted.type.replace(/message/i, ''), saveToFile)
m.quoted.fakeObj = M.fromObject({
key: {
fromMe: m.quoted.fromMe,
remoteJid: m.quoted.chat,
id: m.quoted.id
},
message: quoted,
...(m.isGc ? { participant: m.quoted.sender } : {})
})
}
if (m.msg?.url) m.download = () => alice.dlMessage(m.msg)
m.reply = (text, chatid, options) => alice.sendteks(chatid ? chatid : m.chat, text, m, options)
}

return m
}

const alice = {};

async function jadibot(alice, jid, m, number) {
const { state, saveCreds } = await useMultiFileAuthState(`/system/userclone/${jid}`);
const { version, isLatest } = await fetchLatestBaileysVersion();
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });

const connectionOptions = {
browser: ["Ubuntu","Chrome","20.0.04"],
        mobile: false,
        printQRInTerminal: false,
        markOnlineOnConnect: false,
        generateHighQualityLinkPreview: false,
        getMessage: async (key) => {
          if (store) {
            const msg = await store.loadMessage(key.remoteJid, key.id);
            return msg.message || undefined;
          }
          return {
            conversation: "Bot Here",
          };
        },
        logger: pino({ level: "silent" }),
        version,
}

      if (!(await alice.authState.creds.registered)) {
        if (!Object.keys(await baileys.PHONENUMBER_MCC).some((v) => number)) {
           alice.sendMessage(from, { text: `*REQUEST CONNECTION*\n\n             *How To Install*\n*1*. masuk ke *perangkat tertaut*\n*2*. klik *tautkan perangkat*\n*3*. klik masukan *dengan nomor telpon saja*\n*4*. masukan *code* anda\n\n*COPY YOUR CODE*`},{quoted:m});

        }

        setTimeout(async () => {
          let codek = await alice.requestPairingCode(
            parseInt(await m.sender.replace(/[^0-9]/g, ""))
          );
          
          codek = codek?.match(/.{1,4}/g)?.join("-") || codek;
          alice.sendMessage(from, { text: `${codek}` })
          console.log("code anda adalah: " + codek);
        }, 3000);
        }
alice[jid] = makeWASocket(Object.assign(connectionOptions, { auth: state }));
store.bind(alice[jid].ev)
initDatabase()


const nomore = m.sender.replace(/[^0-9]/g, '')
// SETTING JADIBOT
db.jadibot = {
jid: nomore,
prefix: '.',
cover: 'https://telegra.ph/file/92005c44a728b4ae906ae.jpg',
autoreadsw: true,
anticall: true,
self: false,
}


// DATABASE GAME
alice[jid].suit = {};
alice[jid].tictactoe = {};
alice[jid].petakbom = {};
alice[jid].kuis = {};
alice[jid].siapakahaku = {};
alice[jid].asahotak = {};
alice[jid].susunkata = {};
alice[jid].caklontong = {};
alice[jid].family100 = {};
alice[jid].tebaklirik = {};
alice[jid].tebaklagu = {};
alice[jid].tebakgambar = {};
alice[jid].tebakkimia = {};
alice[jid].tebakkata = {};
alice[jid].tebakkalimat = {};
alice[jid].tebakbendera = {};
alice[jid].tebakanime = {};
alice[jid].tebakkabupaten = {};
alice[jid].kuismath = {};


let settings = db.jadibot[jid] !== undefined ? db.jadibot[jid] : {}

// Menangani koneksi
if (connection == "connecting") {
console.log('Connecting. . .');
} else if (connection == "open") {
console.log('Connected ✓');
let user = alice.decodeJid(alice[jid].user.id);

await alice.sendteks(m.chat, `Nomor Yang Mendaftar Jadibot: @${jid.split('@')[0]},\n\nNomor Yang Jadibot : @${user.split('@')[0]}\n\n*Aruna Bot* Sekarang tersambung ke koneksi server WhatsApp web [!]`, global.f1('[!] Notifikasi Connection Aruna', thumb))

await alice[jid].sendteks(m.chat, `@${user.split('@')[0]} telah tersambung ke koneksi server whatsapp web`, global.f1('[!] Notifikasi Connection *Aruna*', thumb))
settings.jid = user
} else if (connection === "close") {
if (reason === DisconnectReason.restartRequired) {
jadibot(alice, jid)
console.log("Restart Required, Restarting...");
} else if (reason === DisconnectReason.timedOut) {
jadibot(alice, jid)
console.log("Connection TimedOut, Reconnecting...");
} else {
return alice.sendMessage(jid, {text: 'Anda sudah tidak lagi menjadi bot.'});
}
}
})

// Simpan credensial login
alice[jid].ev.on('creds.update', saveCreds);

// Menangani acara { pesan, update, autoreadsw }
alice.ev.on("messages.upsert", async (chatUpdate) => {
        try {
          kay = chatUpdate.messages[0];
          if (!kay.message) return;
          kay.message =
            Object.keys(kay.message)[0] === "ephemeralMessage"
              ? kay.message.ephemeralMessage.message
              : kay.message;
          if (kay.key && kay.key.remoteJid === "status@broadcast") return;
          if (
            !alice.public &&
            !kay.key.fromMe &&
            chatUpdate.type === "notify"
          )
            return;
          if (kay.key.id.startsWith("BAE5") && kay.key.id.length === 16) return;
          m = smsg(alice, kay, store);
          require("../case")(alice, msg, m, chatUpdate, store);
        } catch (err) {
          console.log(err);
        }
      });

// Menangani Panggilan
alice[jid].ev.on('call', async(json) => {
try {
const { from, id, status } = json[0]
if (from == global.owner) return
if (settings?.anticall && status == 'offer') {
const stanza = {
tag: 'call',
attrs: {
from: alice[jid].user.id,
to: from,
id: alice[jid].generateMessageTag(),
},
content: [{
tag: 'reject',
attrs: {
'call-id': id,
'call-creator': from,
count: '0',
},
content: undefined,
},
],
}
await alice[jid].query(stanza)
}
} catch (e){
console.log(e)
}
})

alice[jid].ev.on('contacts.update', (update) => {
for (let contact of update) {
let id = alice[jid].decodeJid(contact.id);
if (store && store.contacts)
store.contacts[id] = { id, name: contact.notify };
}
});

}

async function stopjadibot(alice, jid, m) {
if (!Object.keys(alice).includes(jid)) {
return alice.sendteks(m.chat, 'Kamu tidak ada di list jadi bot.', m);
}
try {
alice[jid].end('stop');
} catch {}
try {
alice[jid].logout();
} catch {}
delete alice[jid];
delete db.jadibot[jid];
rimraf.sync(`./system/userclone/${jid.split('@')[0]}`);
return alice.sendteks(m.chat, 'Sukses stop jadi bot.', m);
};

module.exports = { jadibot, stopjadibot }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.greenBright("[ UPDATE ]"), chalk.whiteBright(`${__filename}`) )
delete require.cache[file]
require(file)
})
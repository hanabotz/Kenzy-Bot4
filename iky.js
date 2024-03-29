const {
    WAikyyection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReikyyectMode,
ProxyAgent,
ChatModification,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
Browsers,
} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const moment = require("moment-timezone")
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');
const ggs = require('google-it')
const request = require('request');
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const got = require("got");
const qrcodes = require('qrcode');
const imgbb = require('imgbb-uploader');
const os = require('os');
const phoneNum = require('awesome-phonenumber')
const { sizeFormatter } = require('human-readable')
// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();

const { downloadMenu, infoMenu, gameMenu, groupMenu, funMenu, wibuMenu, ownerMenu, stickerMenu, otherMenu, rulesBot } = require('./message/help.js')
const { getBuffer, getGroupAdmins, getRandom, runtime, sleep, formatp } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { mess } = require('./message/mess')
const { Toxic } = require('./lib/Toxic.js')
const { cmdadd } = require('./lib/totalcmd.js')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { onGoing, dadu, asupan } = require("./lib/otakudesu.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { ythd } = require('./lib/ytdl')
const premium = require("./lib/premium");
const afk = require("./lib/afk");
const level = require("./lib/level");
const atm = require("./lib/atm");
const _sewa = require("./lib/sewa");

var kuis = false
hit_today = []
ky_ttt = []
const setGelud = require('./lib/gameGelud.js')
const game = require("./lib/game");
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]

//setting
let fakeimage = fs.readFileSync("./media/wpmobile.png")
let errorImg = 'https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg'
let setting = JSON.parse(fs.readFileSync('./setting.json'))
banChats = false;
owner = setting.owner
gamewaktu = setting.gamewaktu
ppbot = setting.ppbot
// Database
const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json'))

let register = JSON.parse(fs.readFileSync('./database/user/register.json'))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let _premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
let _uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
let glimit = JSON.parse(fs.readFileSync('./database/user/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
let mute = JSON.parse(fs.readFileSync('./database/group/mute.json'));
let _update = JSON.parse(fs.readFileSync('./database/bot/update.json'))
let sewa = JSON.parse(fs.readFileSync('./database/group/sewa.json'));
let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))
const nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))
let autosticker = JSON.parse(fs.readFileSync('./database/group/autosticker.json'));
/***menufakeloc = true**/
readGc = false; 
readPc = false;
// GAME
let tebakanime = JSON.parse(fs.readFileSync('./database/tebakanime.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./database/tebaksiapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./database/tebakbendera.json'))
let susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))
let tebakata = JSON.parse(fs.readFileSync('./database/tebakata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
let tebakjenaka = JSON.parse(fs.readFileSync('./database/tebakjenaka.json'))
let tebakimia = JSON.parse(fs.readFileSync('./database/tebakimia.json'))
let kuismath = JSON.parse(fs.readFileSync('./database/kuismath.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./database/tebaklagu.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./database/tebaktebakan.json'))
let family100 = [];



// Sticker Cmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}


module.exports = ikyy = async (ikyy, mek) => {
try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
global.ky_ttt
global.blocked
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
m = simple.smsg(ikyy, mek)
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const type = Object.keys(mek.message)[0]        
var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
    var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
    const messagesCC = pes.slice(0).trim().split(/ +/).shift()

        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
    const prefix = /^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '!'
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const args = body.trim().split(/ +/).slice(1)
hit_today.push(command)
const arg = body.substring(body.indexOf(' ') + 1)
const ar = args.map((v) => v.toLowerCase())
const argz = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix) 
if (isCmd) cmdadd()
const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
        const q = args.join(' ')
const c = args.join(' ')
const Verived = "0@s.whatsapp.net"
const Bfake = fs.readFileSync ('./media/image/fake.jpeg','base64')
  
        const botNumber = ikyy.user.jid
        const ownerNumber = setting.ownerNumber
const ownerName = setting.ownerName
const botName = setting.botName
const isGroup = from.endsWith('@g.us')
let sender = isGroup ? mek.participant : mek.key.remoteJid
let senderr = mek.key.fromMe ? ikyy.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
const senderNumber = sender.split("@")[0] 
        const totalchat = await ikyy.chats.all()
const groupMetadata = isGroup ? await ikyy.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? ikyy.user.jid : ikyy.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? ikyy.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
idttt = []
    players1 = []
    players2 = []
    gilir = []
    for (let t of ky_ttt){
    idttt.push(t.id)
    players1.push(t.player1)
    players2.push(t.player2)
    gilir.push(t.gilir)
}
        

    const isTTT = isGroup ? idttt.includes(from) : false
    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        const isOwner = ownerNumber.includes(senderr)
        const isRegister = register.includes(sender)
        const isPremium = premium.checkPremiumUser(sender, _premium)
        const isSewa = _sewa.checkSewaGroup(from, sewa)
        const isAfkOn = afk.checkAfkUser(sender, _afk)
        const isLevelingOn = isGroup ? _leveling.includes(from) : false
        const isMuted = isGroup ? mute.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isWelkom = isGroup ? welkom.includes(from) : false
        const isNsfw = isGroup ? nsfww.includes(from) : false
        const isAutoSticker = isGroup ? autosticker.includes(from) : false
        try {
pporang = await ikyy.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
      } catch {
pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
      }
const ofrply = await getBuffer(pporang)
const pporigi = fs.readFileSync('./ikyy.jpg')
        const tescuk = ["0@s.whatsapp.net"]
   cr = `hai kak ${pushname}`     
koko = `62887435047326@s.whatsapp.net`
        oii = `𝙈𝙗𝙚𝙢𝙘𝙖𝙣𝙨 𝘽𝙤𝙩𝙯`
        // CONST PROFILE USER
        
            const Levelnye = level.getLevelingLevel(sender, _level)
            const Xpluu = level.getLevelingXp(sender, _level)
            const requiredXplu = 10 * Math.pow(Levelnye, 2) + 50 * Levelnye + 100
            const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = ikyy.user.phone

        
       //FAKE STORE
      const fakeitem = (teks) => {
            ikyy.sendMessage(from, teks, text, {
                quoted: {
        key:{
        fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`media/odc.jpeg`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`TERIMA KASIH TELAH SEWA BOT DI RIFQII STORE`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}

        
        const p = (teks) => {
            ikyy.sendMessage(from, teks, text, {
                quoted: {
        key:{
        fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`media/odc.jpeg`),"itemCount":2021,"status":"INQUIRY","surface":"CATALOG","message":`STATUS PESANAN :DI PROSES\n${groupMetadata.subject}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}

const d1 = (teks) => {
            ikyy.sendMessage(from, teks, text, {
                quoted: {
        key:{
        fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`media/odc.jpeg`),"itemCount":2021,"status":"INQUIRY","surface":"CATALOG","message":`STATUS PESANAN :DONE\n${groupMetadata.subject}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}


const fstatus = (teks) => {
            ikyy.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `*KENZY BOT VERIFIED*`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`media/odc.jpeg`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
        
       //WAKTU
        const timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
        const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
        const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
        const petik = '```'
        const fvn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281905473135@s.whatsapp.net" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus","seconds": "999999","ptt": "true" } } }
        
        //IMG FLOC
        let ikyads = await getBuffer(`https://telegra.ph/file/20f0d45b330ddcdc2f504.jpg`)
        let ikyads2 = await getBuffer(`https://telegra.ph/file/283c631a68f61b1924b93.jpg`)
     //━━━━━━━━━━━━━━━[ Kalender,quotes,hitung mundur ]━━━━━━━━━━━━━━━━━//
   let d = new Date
       let locale = 'id'
       let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
     let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
        let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })
        const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      ikyy.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };

const calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
       })
const quotes = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
       })

var floc = {
                                       key : {
                                                  participant : '0@s.whatsapp.net'
                                                 },
                                                     message: {
                                                     liveLocationMessage: {
                                                     caption: `ʀɪғǫɪ ʙᴏᴛᴢ`,
                                                     ThumbnailUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRKCtPtUkXDSKG8R9YNYEnYQdjyKYiHrDJW6GwLIJgUn62zM7qxKhaWv8&s=10"
                                                  }
                                               }
                                            }

//━━━━━━━━━━━━━━━[ bot status ]━━━━━━━━━━━━━━━━━//
const formatp = sizeFormatter({
    std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC'
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
        }, {
            speed: 0,
			total: 0,
			times: {
			    user: 0,
			    nice: 0,
			    sys: 0,
			    idle: 0,
			    irq: 0
            }
        })

//━━━━━━━━━━━━━━━[ dutton document ]━━━━━━━━━━━━━━━━━//
const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
media = file1
kma = doc1
mhan = await ikyy.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
ikyy.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
        
        let fakeLink = {
             "title": `Hai Kak ${pushname}`,
             "body": `${timuu}`,
             "previewType": "VIDIO",
             "thumbnail": fs.readFileSync(`media/Menu.jpg`),
             "mediaUrl": "https://youtu.be/7BqlUxaWXKs"
        }        
        
        // here button function
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

        const gcount = setting.gcount
        
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = ikyy.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","listType": "SINGLE_SELECT","sections": list}}, {})
            return ikyy.relayWAMessage(po, {waitForAck: true})
        }
        
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
//reply ori
/*const reply = (teks) => {
      ikyy.sendMessage(from, teks, text, {quoted:mek, thumbnail: fakeimage})
        }**/
//reply sewabot
const reply = (teks) => {
ikyy.sendMessage(from, teks, text, { thumbnail: ikyads, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${timuu} - ${week} ${weton} - ${calender}`,body:"SEWA BOT? PENCET INI",previewType:"PHOTO",thumbnail:ofrply,sourceUrl:`https://wa.me/6285377536527?text=sewa+bot`}}})
}
//reply fake gc
/**const reply  = (teks) => {
ikyy.sendMessage(from, teks, text, { thumbnail: ikyads, sendEphemeral: true, quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "sewabot? ketik #iklan",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/odc.jpeg'),sourceUrl:"https://chat.whatsapp.com/Hnb8UOsuN4t5hSEMNTUdft"}}} )
}**/
// Katalog
/**const reply = (teks) => {
             res = ikyy.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 99999, "message": teks, "footerText": "sᴇᴡᴀʙᴏᴛ? ᴋᴇᴛɪᴋ #ɪᴋʟᴀɴ", "thumbnail": ikyads, "surface": 'CATALOG' }}, {quoted:mek})
             ikyy.relayWAMessage(res)
        }**/
  //CATALOG     
/**const reply = (teks) => {
     list = ikyy.prepareMessageFromContent(from, {
    "listMessage": {
      "title": "pencet ini kalo mau sewabot",
      "description": teks,
      "buttonText": "",
      "listType": "PRODUCT_LIST",
      "productListInfo": {
        "productSections": [
          {
            "title": "LIST HARGA",
            "products": [
              {
                 "productId": "4713656915359385"
              }
              
            ]
          }
        ],
        "headerImage": {
          "productId": "4713656915359385",
          "jpegThumbnail": ikyads
        },
        "businessOwnerJid": sender
      },
      "footerText": "",
    }
  }, {quoted:mek})
  ikyy.relayWAMessage(list, {waitForAck: true})
  }**/
  
        const sendMess = (hehe, teks) => {
           ikyy.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? ikyy.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.png')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : ikyy.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.png')}, extendedText, { sendEphemeral: true, quoted: ftroli, contextInfo: { "mentionedJid": memberr } })
        }
        const sendText = (from, text) => {
           ikyy.sendMessage(from, text, MessageType.text)
        }
        const textImg = (teks) => {
           return ikyy.sendMessage(from, teks, text, {quoted: ftroli, thumbnail: fs.readFileSync('./media/wpmobile.png')})
        }
        const costum = (pesan, tipe, target, target2) => {
        ikyy.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
}
//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/Nakano.jpg')
}}}
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: fs.readFileSync(`media/odc.jpeg`), surface: 200, message: `ᴄᴍᴅ ᴇxᴇᴄ: ${command}`, orderTitle: `RIFQIBOTZ`, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
        const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${oii}`,jpegThumbnail: fs.readFileSync(`media/odc.jpeg`)}}}
        const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`${oii}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${ownerName}`, 'jpegThumbnail': fs.readFileSync(`media/odc.jpeg`)}}}
const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `ᴄᴍᴅ ᴇxᴇᴄ : ${command}`, 'jpegThumbnail': fs.readFileSync(`media/odc.jpeg`)}}}
const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${oii}`, "h": `Hmm`,'seconds': '99999', 'caption': `${ownerName}`, 'jpegThumbnail': fs.readFileSync(`media/odc.jpeg`)}}}
const ftoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'satus@broadcast' } : {}) }, message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync('./media/odc.jpeg') }, 'title': `${oii}`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}
    const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${cr}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${cr},;;;\nFN:${cr},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`media/odc.jpeg`), thumbnail: fs.readFileSync(`media/odc.jpeg`),sendEphemeral: true}}}

       const math = (teks) => {
           return Math.floor(teks)
       }
       const kick = function(from, orangnya){
       for (let i of orangnya){
       ikyy.groupRemove(from, [i])
        }
        }
       const kickMember = async(id, target = []) => {
           let group = await ikyy.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = ikyy.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await ikyy.groupRemove(to, [i])
        } else {
           await ikyy.sendMessage(id, "Not Premited!", "conversation")
           break
        }
    }
}
       const add = function(from, orangnya){
       ikyy.groupAdd(from, orangnya)
}
       const sendKontak = (from, nomor, nama, org = "") => {
       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
       ikyy.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: ftroli})
}
      const hideTag = async function(from, text){
       let anu = await ikyy.groupMetadata(from)
       let members = anu.participants
       let ane = []
       for (let i of members){
       ane.push(i.jid)
}
       ikyy.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/Nakano.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
      const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           ikyy.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
           fs.unlinkSync(asw)
});
});
});
}
       const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           ikyy.sendMessage(to, media, type, {quoted: ftroli, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
      const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
       ikyy.sendMessage(from, hasil, type, options).catch(e => {
       fetch(link).then((hasil) => {
       ikyy.sendMessage(from, hasil, type, options).catch(e => {
       ikyy.sendMessage(from, { url : link }, type, options).catch(e => {
       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
       console.log(e)
})
})
})
})
}
      const promoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await ikyy.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = ikyy.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await ikyy.groupMakeAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
}
}
}
      const demoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await ikyy.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = ikyy.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await ikyy.groupDemoteAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
}
}
}
          let authorname = ikyy.contacts[from] != undefined ? ikyy.contacts[from].vname || ikyy.contacts[from].notify : undefined
          if (authorname != undefined) { } else { authorname = groupName }
          function addMetadata(packname, author) {
          if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');
          let name = `${author}_${packname}`
          if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
          const json = {
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
         const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
         let len = JSON.stringify(json).length
         let last
         if (len > 256) {
         len = len - 256
         bytes.unshift(0x01)
         } else {
         bytes.unshift(0x00)
}
         if (len < 16) {
         last = len.toString(16)
         last = "0" + len
         } else {
         last = len.toString(16)
}
       const buf2 = Buffer.from(last, "hex")
   const buf3 = Buffer.from(bytes)
   const buf4 = Buffer.from(JSON.stringify(json))
   const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])
   fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {
   return `./sticker/${name}.exif`
})
}


     const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Malam'
}
         const levelRole = level.getLevelingLevel(sender, _level)
        var role = 'Warrior III'
        if (levelRole <= 5) {
            role = 'Warrior II'
        } else if (levelRole <= 10) {
            role = 'Warrior I'
        } else if (levelRole <= 15) {
            role = 'Elite III'
        } else if (levelRole <= 20) {
            role = 'Elite II'
        } else if (levelRole <= 25) {
            role = 'Elite I'
        } else if (levelRole <= 30) {
            role = 'Master III'
        } else if (levelRole <= 35) {
            role = 'Master II'
        } else if (levelRole <= 40) {
            role = 'Master I'
        } else if (levelRole <= 45) {
            role = 'GrandMaster III'
        } else if (levelRole <= 50) {
            role = 'GrandMaster II'
        } else if (levelRole <= 55) {
            role = 'GrandMaster I'
        } else if (levelRole <= 60) {
            role = 'Epic III'
        } else if (levelRole <= 65) {
            role = 'Epic II'
        } else if (levelRole <= 70) {
            role = 'Epic I'
        } else if (levelRole <= 75) {
            role = 'Legend III'
        } else if (levelRole <= 80) {
            role = 'Legend II'
        } else if (levelRole <= 85) {
            role = 'Legend I'
        } else if (levelRole <= 90) {
            role = 'Mythic'
        } else if (levelRole <= 95) {
            role = 'Mythical Glory'
        } else if (levelRole >= 100) {
            role = 'Immortal'
        } 

            //FUNCTION
    function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }
        
       // FUNCTION LEVELING
       if (isGroup && !mek.key.fromMe && !level.isGained(sender) && isLevelingOn) {
       try {
       level.addCooldown(sender)
       const checkATM = atm.checkATMuser(sender, _uang)
       if (checkATM === undefined) atm.addATM(sender, _uang)
       const uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       atm.addKoinUser(sender, uangsaku, _uang)
       const currentLevel = level.getLevelingLevel(sender, _level)
       const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
       level.addLevelingXp(sender, amountXp, _level)
       if (requiredXp <= level.getLevelingXp(sender, _level)) {
       level.addLevelingLevel(sender, 1, _level)
       const userLevel = level.getLevelingLevel(sender, _level)
       const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
       reply(`*「 LEVEL UP 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}\n➸ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙 \n➸ *Role*: *${role}*\n\nCongrats!! 🎉🎉`)
} 
       } catch (err) {
       console.error(err)
}
}

        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const { quotedMsg, isQuotedMsg, isBaileys } = mek
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')


//━━━━━━━━━━━━━━━[ antilink  ]━━━━━━━━━━━━━━━━━// 
if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                ikyy.groupRemove(from, [sender])
            }
        }
        


               /**     //kasih wm gw ajg kalau make
   if (isGroup && isAntiLink && !mek.key.fromMe) {
      if (budy.includes("://chat.whatsapp.com/")) {
        if (isGroupAdmins) return 
        reply("*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick");
        ikyy.groupRemove(from, [sender]);
      }
    }**/
    
   /**if (isGroup && !mek.key.fromMe && isAntiLink) {
        if (budy.includes("chat.whatsapp.com")) {
        if (!isGroup) return
    if (!isAntiLink) return
if (isGroupAdmins) return reply('*_Kerana Kamu Admin bot Tidak Akan Di Kick*')
ikyy.updatePresence(from, Presence.composing)
if (messagesCC.includes("#izinmin")) return reply("izin diterima")
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(`*「 Link Group Terdeteksi 」* ${sender.split("@")[0]} Bot Akan Kick Kamu Bye Bye`)
setTimeout( () => {
ikyy.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
}, 3000)
console.log(color('LINKGROUP TERDETEKSI'))
}
}**/

 //AUTOSTIKER
         if (isGroup && isAutoSticker) {
         	if (isImage || isVideo) {
             var a = `sewabot 10k permanen pc 089636634511`
              var b = `SUBS YT RIFQIBOTZ`
              if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              media = await ikyy.downloadAndSaveMediaMessage(encmedia)
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              ikyy.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: ftroli })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              ikyy.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: ftroli })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out) 
              } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              const media = await ikyy.downloadAndSaveMediaMessage(encmedia)
              pe = args.join('')
              var a = `sewabot 10k permanen pc 089636634511`
              var b = `SUBS YT RIFQIBOTZ`
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              ikyy.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: ftroli })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              ikyy.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: ftroli })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out)       
              } else {
                        
}
}
}

        
    //━━━━━━━━━━━━━━━[ auto read ]━━━━━━━━━━━━━━━━━// 
    // 𝘼𝙪𝙩𝙤 𝙍𝙚𝙖𝙙 𝙂𝙘
var ampun = await ikyy.chats.array.filter(v => v.jid.endsWith('g.us'))
ampun.map( async ({ jid }) => {
if (readGc === false) return
await ikyy.chatRead(jid)
})
// 𝘼𝙪𝙩𝙤 𝙍𝙚𝙖𝙙 𝙋𝙘
var chatss = await ikyy.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await ikyy.chatRead(jid)
})
        
//━━━━━━━━━━━━━━━[ sewa ]━━━━━━━━━━━━━━━━━// 
             _sewa.expiredCheck(ikyy, sewa)
             
//━━━━━━━━━━━━━━━[ mute  ]━━━━━━━━━━━━━━━━━// 
             if (isMuted){
             if (!isGroupAdmins && !isPremium) return
}
            
              const getWin = (userId) => {
              let position = false
              Object.keys(_win).forEach((i) => {
              if (_win[i].jid === userId) {
              position = i
       }
        })
              if (position !== false) {
              return _win[position].win
            }
        }
//━━━━━━━━━━━━━━━[ game  ]━━━━━━━━━━━━━━━━━// 
             game.cekWaktuFam(ikyy, family100)
          
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                var http = randomNomor(100)
                    atm.addKoinUser(sender, http, _uang)
                    await reply(`*_🎮 Tebak Gambar  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${http} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                }
            }
        if (game.isfam(from, family100)) {
            var anjuy = game.getjawaban100(from, family100)
            for (let i of anjuy){
                if (budy.toLowerCase().includes(i)){
                    var htgmp = Math.floor(Math.random() * 20) + 1
                    atm.addKoinUser(sender, htgmp, _uang)
                    await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmp}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
                    var anug = anjuy.indexOf(i)
                    anjuy.splice(anug, 1)
                }
            }
            if (anjuy.length < 1){
                ikyy.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
                family100.splice(game.getfamposi(from, family100), 1)
            }
       }
            if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                var htgmu = randomNomor(100)
                    atm.addKoinUser(sender, htgmu, _uang)
                    await reply(`*_🎮 Tebak Anime 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakanime*`)
                    delete tebakanime[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                }
            }
            if (tebaklagu.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklagu[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                var htpl = randomNomor(100)
                    atm.addKoinUser(sender, htpl, _uang)
                    await reply(`*_🎮 Tebak Lagu 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpl} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklagu*`)
                    delete tebaklagu[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
                }
            }
            if (tebaktebakan.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaktebakan[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                var htpu = randomNomor(100)
                    atm.addKoinUser(sender, htpu, _uang)
                    await reply(`*_🎮 Tebak Tebakan 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaktebakan*`)
                    delete tebaktebakan[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))                    
                }
            }
            if (kuismath.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = kuismath[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                var htcc = randomNomor(100)
                    atm.addKoinUser(sender, htcc, _uang)
                    await reply(`*_🎮 Kuis Matematika  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}kuismath*`)
                    delete kuismath[sender.split('@')[0]]
                    fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
                } 
            }
          if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = asahotak[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                var htgm = randomNomor(100)
                    atm.addKoinUser(sender, htgm, _uang)
                    await reply(`*_🎮 Asah Otak  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgm} 💰_\n\nIngin bermain lagi? kirim *${prefix}asahotak*`)
                    delete asahotak[sender.split('@')[0]]
                    fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
                }
            }
          if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                var htgmi = randomNomor(100)
                    atm.addKoinUser(sender, htgmi, _uang)
                    await reply(`*_🎮 Caklontong  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmi} 💰_\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                }
            }
          if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakjenaka[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                var htgmuu = randomNomor(100)
                    atm.addKoinUser(sender, htgmuu, _uang)
                    await reply(`*_🎮 Tebak Jenaka  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmuu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`)
                    delete tebakjenaka[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
                }
            }
            if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                var htgmii = randomNomor(100)
                    atm.addKoinUser(sender, htgmii, _uang)
                    await reply(`*_🎮 Tebak Lirik 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmii} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
                    delete tebaklirik[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                }
            }
            if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakimia[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                var htgmcc = randomNomor(100)
                    atm.addKoinUser(sender, htgmcc, _uang)
                    await reply(`*_🎮 Tebak Kimia 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`)
                    delete tebakimia[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
                }
            }
          if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaksiapaaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                var htgmk = randomNomor(100)
                    atm.addKoinUser(sender, htgmk, _uang)
                    await reply(`*_🎮 Tebak Siapakah Aku  🎮_*\n\n*•* *Jawaban Benar??*\n*•* *Mendapatkan* : _Rp ${htgmk} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaksiapaaku*`)
                    delete tebaksiapaaku[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
                }
            }
          if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakbendera[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                var html = randomNomor(100)
                    atm.addKoinUser(sender, html, _uang)
                    await reply(`*_🎮 Tebak Bendera  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${html} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
                    delete tebakbendera[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
                }
            }
          if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                var htmp = randomNomor(100)
                    atm.addKoinUser(sender, htmp, _uang)
                    await reply(`*_🎮 Susun Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmp} 💰_\n\nIngin bermain lagi? kirim *${prefix}susunkata*`)
                    delete susunkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                }
            }
          if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                var htmu = randomNomor(100)
                    atm.addKoinUser(sender, htmu, _uang)
                    await reply(`*_🎮 Tebak Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`)
                    delete tebakata[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
                }
            }
            const sendStickerUrl = async(to, url) => {
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, namea, async function () {
let filess = namea
let asw = names
require('./lib/exif.js')
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
ikyy.sendMessage(to, media, sticker)
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
});
});
});
}
// AFK
if (isGroup) {
if (!mek.key.fromMe && mek.key.fromMe) return
for (let x of mentionUser) {
    if (afk.checkAfkUser(x, _afk)) {
const getId = afk.getAfkId(x, _afk)
const getReason = afk.getAfkReason(getId, _afk)
const getTime = afk.getAfkTime(getId, _afk)
const cptl = `*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan diganggu!*
➸ *Alasan*  : ${getReason}
➸ *Sejak* : ${getTime}`
      mentions(cptl, x, true)
    }}
if (afk.checkAfkUser(sender, _afk) && !isCmd) {
    const getTime = afk.getAfkTime(sender, _afk)
    const getReason = afk.getAfkReason(sender, _afk)
    const ittung = ms(await Date.now() - getTime)
    const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
    reply(pep)
    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
    fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
}
    }

//━━━━━━━━━━━━━━━[ auto read ]━━━━━━━━━━━━━━━━━// 
    /** ikyy.chatRead(from, "read")**/

//━━━━━━━━━━━━━━━[ auto bio ]━━━━━━━━━━━━━━━━━// 
/**
    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

await ikyy.setStatus(`Sewabot? Ketik #iklan Mode Bot Aktif Selama ${uptime}`).catch((_) => _);
      settingstatus = new Date() * 1;
    }**/
       
       // CMD
        if (isCmd && !isGroup)
    atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        
        if (isCmd && isGroup)
            atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
            
        if (budy.toLowerCase() === `8473`){
if (isRegister) return 
    register.push(sender)
    fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
    teks = `Verification success\n\nPlease send *!menu* to view menu`
    atm.addKoinUser(sender, randomNomor(100), _uang)
    ikyy.sendMessage(from, teks, text, {quoted: ftroli })
}
if (!mek.key.fromMe && banChats === true) return
              
           {
            if (body.startsWith("/")){
                console.log(color('[EVAL]'), color(moment(kyy.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                try {
                    let evaled = await eval(body.slice(2))
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    textImg(`${evaled}`)
                } catch (err) {
                    textImg(`${err}`)
                }
            } else if (body.startsWith("$ ")){
                console.log(color('[EXEC]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                exec(body.slice(2), (err, stdout) => {
if (err) return textImg(`${err}`)
if (stdout) textImg(`${stdout}`)
})
            }
        }
              switch(command){
//━━━━━━━━━━━━━━━[ fitur ]━━━━━━━━━━━━━━━━━// 
           
        case 'owner':
        case 'creator':
        
               sendKontak(from, `${owner}`, `${ownerName}`, 'Sibukk!!')
               await sleep(1000)
               txtt =`Hai Kak ${pushname}\nItu Ownerku, Mau tau soal apa ya?`

               buttons = [{buttonId: '!don',buttonText:{displayText: 'DONASI'},type:1},{buttonId:'!infoig',buttonText:{displayText:'GROUP OWNER'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: 'Jangan Sungkan Chat Ya Kak',
               buttons: buttons,
               headerType: 1
}

               prep = await ikyy.prepareMessageFromContent(from,{buttonsMessage},{})
               ikyy.relayWAMessage(prep)
               break      
               const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await ikyy.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: buttons,
   headerType: 4
}
ikyy.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
                 
  
  
  
     //━━━━━━━━━━━━━━━[ menu ]━━━━━━━━━━━━━━━━━//      
     case 'menu': 

              /**reply (`*MENAMPILKAN MENU..*`)**/
              /**if(menufakeloc == true){**/
         /**fstatus(`*MENAMPILKAN MENU...*`)**/
         /*await sleep(1000)**/
         /**satu = fs.readFileSync('./mp3/menu.mp3');
          ikyy.sendMessage(from, satu, MessageType.audio, {quoted: fvn, mimetype: 'audio/mp4', ptt:true})**/
        
          thu = await ikyy.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
              
                     
              groups = ikyy.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ikyy.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ikyy.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
                            try {
               var pic = await ikyy.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
                var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }
              
        menu =`  
${ucapanWaktu} Kak ${pushname}

┌❏ *INDONESIA TIME*
${petik}│◦➛ ${prefix}WIB : ${timuu}
│◦➛ ${prefix}WITA : ${wita}
└❏ WIT : ${wit}${petik}
                          
┌❏ *TODAY*
${petik}│◦➛${ucapanWaktu}
│◦➛Jam : ${timuu}
└❏ Tanggal : ${date}${petik}

┌❏ *DEVICE*
${petik}│◦➛Whatsapp : ${ikyy.user.phone.wa_version}
│◦➛Merk HP : ${device_manufacturer}
│◦➛Versi HP : ${device_model}
│◦➛Versi OS : ${os_version}
│◦➛RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│◦➛MCC : ${mcc}
└❏ MNC : ${mnc}${petik}

┌─❑「 *BOT INFO* 」
${petik}│◦➛ Owner :${ownerName}
│◦➛Group Chats : ${groups.length}
│◦➛𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐂𝐡𝐚𝐭𝐬 : ${privat.length}
│◦➛𝐁𝐚𝐭𝐞𝐫𝐚𝐢 : ${baterai}% ${charger}
│◦➛𝐓𝐨𝐭𝐚𝐥 𝐂𝐡𝐚𝐭𝐬 : ${totalChat.length}
│◦➛𝐀𝐜𝐭𝐢𝐯𝐞 : ${runtime(process.uptime())}
│◦➛▢ 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦 : ${os.platform()}
└❏ ${petik}

┌─❑「 *YOUR INFORMATION* 」
│◦➛  Username: *${pushname}*
│◦➛ Sender : *@${sender.split('@')[0]}*
│◦➛ Bio Info : *${thu.status}*
│◦➛ Premium : *${isPremium ? 'Ya' : 'No'}*
│◦➛ Admin : *${isGroupAdmins ? 'Ya' : 'No'}*
│◦➛ Level : *${Levelnye}*
│◦➛ XP : *${Xpluu} / ${requiredXplu}*
└❏`
wibu = `${calender}`
/**ikyy.sendMessage(m.chat, { contentText: `${menu}`, footerText: `${wibu}`, "buttons": [
{buttonId:`${prefix}command`,buttonText:{displayText:'⬡ LIST MENU\n\njika bot tidak merespon ketik !command'},type:1},
{buttonId:`${prefix}allmenu`,buttonText:{displayText:'⬡ ALL MENU\n\njika bot tidak merespon ketik !allmenu'},type:1},
{buttonId:`${prefix}sewabot`,buttonText:{displayText:'🔖SEWA BOT\n\njika bot tidak merespon ketik !sewabot'},type:1}], "headerType": "DOCUMENT", "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", "mimetype": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "mimetype": "application/zip", "title": `${ucapanWaktu}`, "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", "fileLength": 999999999999, "pageCount": 999, "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", "fileName": " Rifqi Botz", "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", "mediaKeyTimestamp": "1634472176", "jpegThumbnail": ikyads2}}, MessageType.buttonsMessage, { quoted: floc, thumbnail: ikyads2})**/
     ikyy.sendMessage(from, { contentText: `${menu}`, footerText: `${wibu}`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: `⬡ LIST MENU\n\n_jika bot tidak merespon ketik ${prefix}command_` }, type: 1 },{ buttonId: `${prefix}allmenu`, buttonText: { displayText: `⬡ ALL MENU\n\n_jika bot tidak merespon ketik ${prefix}allmenu_` }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: `⬡ SEWA BOT\n\n_jika bot tidak merespon ketik ${prefix}sewabot_` }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ikyads, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
     break
/**   
                           else if(menufakeloc == false){
  groups = ikyy.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ikyy.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ikyy.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = ikyy.user.phone

          
           stod = `${sender}`
num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
fill =`${ucapanWaktu} @${sender.split('@')[0]}
  
┌❏ *INDONESIA TIME*
${petik}│◦➛ ${prefix}WIB : ${timuu}
│◦➛ ${prefix}WITA : ${wita}
└❏ WIT : ${wit}${petik}
                          
┌❏ *TODAY*
${petik}│◦➛${ucapanWaktu}
│◦➛Jam : ${timuu}
└❏ Tanggal : ${date}${petik}

┌❏ *DEVICE*
${petik}│◦➛Whatsapp : ${ikyy.user.phone.wa_version}
│◦➛Merk HP : ${device_manufacturer}
│◦➛Versi HP : ${device_model}
│◦➛Versi OS : ${os_version}
│◦➛RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│◦➛MCC : ${mcc}
└❏ MNC : ${mnc}${petik}

┌─❑「 *BOT INFO* 」
${petik}│◦➛ Owner : @${dtod.split('@')[0]}
│◦➛Group Chats : ${groups.length}
│◦➛𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐂𝐡𝐚??𝐬 : ${privat.length}
│◦➛𝐁𝐚𝐭𝐞𝐫𝐚𝐢 : ${baterai}% ${charger}
│◦➛𝐓𝐨𝐭𝐚𝐥 𝐂𝐡𝐚𝐭𝐬 : ${totalChat.length}
│◦➛𝐀𝐜𝐭𝐢𝐯𝐞 : ${runtime(process.uptime())}
│◦➛▢ ??𝐥𝐚𝐭𝐟𝐨𝐫𝐦 : ${os.platform()}
└❏ ${petik}

Jika Button Tidak Muncul Ketik .allmenu`
menu =`${timuu} - ${week} ${weton} - ${calender}`
gbutsan = [
{buttonId:`${prefix}command`,buttonText:{displayText:'⬡ LIST MENU'},type:1},
{buttonId:`${prefix}allmenu`,buttonText:{displayText:'⬡ ALL MENU'},type:1},
{buttonId:`${prefix}sewabot`,buttonText:{displayText:'🔖SEWA BOT'},type:1}
]
mhan = await ikyy.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const btnmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${fill}`,
footerText: `${menu}`,
buttons: gbutsan,
headerType: 4
}
ikyy.sendMessage(from, btnmenu, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `hallo ${pushname}` ,
"body": `${timuu} - ${week} ${weton} - ${calender}`,
"mediaType": "2",
"mediaUrl": "https://youtu.be/KkpXQQbk3XY",
"thumbnail": pporigi,
},mentionedJid:[stod]}, quoted : ftoko})
}
break**/
case 'allmenu':  

              groups = ikyy.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ikyy.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ikyy.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
                    try {
               var pic = await ikyy.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
                var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }
                     
menu = `
┌❏ *INDONESIA TIME*
${petik}│◦➛ ${prefix}WIB : ${timuu}
│◦➛ ${prefix}WITA : ${wita}
└❏ WIT : ${wit}${petik}
                          
┌❏ *TODAY*
${petik}│◦➛${ucapanWaktu}
│◦➛Jam : ${timuu}
└❏ Tanggal : ${date}${petik}

┌❏ *DEVICE*
${petik}│◦➛Whatsapp : ${ikyy.user.phone.wa_version}
│◦➛Merk HP : ${device_manufacturer}
│◦➛Versi HP : ${device_model}
│◦➛Versi OS : ${os_version}
│◦➛RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│◦➛MCC : ${mcc}
└❏ MNC : ${mnc}${petik}

┌─❑「 *BOT INFO* 」
${petik}│◦➛ Owner :${ownerName}
│◦➛Group Chats : ${groups.length}
│◦➛𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐂𝐡𝐚𝐭𝐬 : ${privat.length}
│◦➛𝐁𝐚𝐭𝐞𝐫𝐚𝐢 : ${baterai}% ${charger}
│◦➛𝐓𝐨𝐭𝐚𝐥 𝐂𝐡𝐚𝐭𝐬 : ${totalChat.length}
│◦➛𝐀𝐜𝐭𝐢𝐯𝐞 : ${runtime(process.uptime())}
│◦➛▢ 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦 : ${os.platform()}
└❏ ${petik}


┌❏  *G R O U P M E N U*
│◦➛ ${prefix}ɢʀᴏᴜᴘꜱᴇᴛᴛɪɴɢ
│◦➛ ${prefix}ᴀꜰᴋ *ᴀʟᴀꜱᴀɴ*
│◦➛ ${prefix}ᴄᴇᴋꜱᴇᴡᴀ
│◦➛ ${prefix}ᴋɪᴄᴋᴀʟʟ
│◦➛ ${prefix}ɪɴꜰᴏɢʀᴜᴘ
│◦➛ ${prefix}ᴘʀᴏᴍᴏᴛᴇ
│◦➛ ${prefix}ᴅᴇᴍᴏᴛᴇ
│◦➛ ${prefix}ʟɪꜱᴛᴏɴʟɪɴᴇ
│◦➛ ${prefix}ᴛᴀɢᴀʟʟ *ᴛᴇᴋꜱ*
│◦➛ ${prefix}ʟᴇᴀᴠᴇ
│◦➛ ${prefix}ᴋɪᴄᴋ *ʀᴇᴘʟʏ*
│◦➛ ${prefix}ᴀᴅᴅ *+62xxxxxx*
│◦➛ ${prefix}ꜱᴇᴛɢʀᴜᴘɴᴀᴍᴇ
│◦➛ ${prefix}ꜱᴇᴛᴘᴘɢʀᴜᴘ
│◦➛ ${prefix}ꜱᴇᴛᴅᴇꜱᴄ
│◦➛ ${prefix}welcome enable/disable
│◦➛ ${prefix}antilink enable/disable
│◦➛ ${prefix}autostiker enable/disable
│◦➛ ${prefix}notif *teks*
│◦➛ ${prefix}ꜱɪᴅᴇʀ *ʀᴇᴘʟʏ ᴄʜᴀᴛ ʙᴏᴛ*
│◦➛ ${prefix}ʜɪᴅᴇᴛᴀɢ *ᴛᴇᴋꜱ/ʀᴇᴘʟʏ ᴛᴇᴋꜱ*
└❏ 


┌❏「 TAG MENU 」
│◦➛ ${prefix}kontag
│◦➛ ${prefix}sticktag
│◦➛ ${prefix}totag
└❏ 


┌❏ *P H O T O O X Y
│◦➛ ${prefix}shadow text
│◦➛ ${prefix}cup text
│◦➛ ${prefix}cup1 text
│◦➛ ${prefix}romance text
│◦➛ ${prefix}smoke text
│◦➛ ${prefix}burnpaper text
│◦➛ ${prefix}lovemessage text
│◦➛ ${prefix}undergrass text
│◦➛ ${prefix}love text
│◦➛ ${prefix}coffe text
│◦➛ ${prefix}woodheart text
│◦➛ ${prefix}woodenboard text
│◦➛ ${prefix}summer3d text
│◦➛ ${prefix}wolfmetal text
│◦➛ ${prefix}nature3d text
│◦➛ ${prefix}underwater text
│◦➛ ${prefix}golderrose text
│◦➛ ${prefix}summernature text
│◦➛ ${prefix}letterleaves text
│◦➛ ${prefix}glowingneon text
│◦➛ ${prefix}fallleaves text
│◦➛ ${prefix}flamming text
│◦➛ ${prefix}harrypotter text
│◦➛ ${prefix}carvedwood text
│◦➛ ${prefix}tiktok text1 text2
│◦➛ ${prefix}arcade8bit text1 text2
│◦➛ ${prefix}battlefield4 text1 text2
│◦➛ ${prefix}pubg text1 text2
└❏


┌❏「 TEXTPROME MENU 」
│◦➛ ${prefix}blackpink text
│◦➛ ${prefix}neon text
│◦➛ ${prefix}greenneon text
│◦➛ ${prefix}advanceglow text
│◦➛ ${prefix}futureneon text
│◦➛ ${prefix}sandwriting text
│◦➛ ${prefix}sandsummer text
│◦➛ ${prefix}sandengraved text
│◦➛ ${prefix}metaldark text
│◦➛ ${prefix}neonlight text
│◦➛ ${prefix}holographic text
│◦➛ ${prefix}text1917 text
│◦➛ ${prefix}minion text
│◦➛ ${prefix}deluxesilver text
│◦➛ ${prefix}newyearcard text
│◦➛ ${prefix}bloodfrosted text
│◦➛ ${prefix}halloween text
│◦➛ ${prefix}jokerlogo text
│◦➛ ${prefix}fireworksparkle text
│◦➛ ${prefix}natureleaves text
│◦➛ ${prefix}bokeh text
│◦➛ ${prefix}toxic text
│◦➛ ${prefix}strawberry text
│◦➛ ${prefix}box3d text
│◦➛ ${prefix}roadwarning text
│◦➛ ${prefix}breakwall text
│◦➛ ${prefix}icecold text
│◦➛ ${prefix}luxury text
│◦➛ ${prefix}cloud text
│◦➛ ${prefix}summersand text
│◦➛ ${prefix}horrorblood text
│◦➛ ${prefix}thunder text
│◦➛ ${prefix}pornhub text1 text2
│◦➛ ${prefix}glitch text1 text2
│◦➛ ${prefix}avenger text1 text2
│◦➛ ${prefix}space text1 text2
│◦➛ ${prefix}ninjalogo text1 text2
│◦➛ ${prefix}marvelstudio text1 text2
│◦➛ ${prefix}lionlogo text1 text2
│◦➛ ${prefix}wolflogo text1 text2
│◦➛ ${prefix}steel3d text1 text2
│◦➛ ${prefix}wallgravity text1 text2
└❏


┌❏「 TEXTPROME2 」
│◦➛ ${prefix}blackpink
│◦➛ ${prefix}rainbow2
│◦➛ ${prefix}water_pipe
│◦➛ ${prefix}halloween
│◦➛ ${prefix}sketch
│◦➛ ${prefix}sircuit
│◦➛ ${prefix}discovery
│◦➛ ${prefix}metallic2
│◦➛ ${prefix}fiction
│◦➛ ${prefix}demon
│◦➛ ${prefix}transformer
│◦➛ ${prefix}berry
│◦➛ ${prefix}thunder
│◦➛ ${prefix}magma
│◦➛ ${prefix}3dstone
│◦➛ ${prefix}neon
│◦➛ ${prefix}glitch
│◦➛ ${prefix}harry_potter
│◦➛ ${prefix}embossed
│◦➛ ${prefix}broken
│◦➛ ${prefix}papercut
│◦➛ ${prefix}gradient
│◦➛ ${prefix}glossy
│◦➛ ${prefix}watercolor
│◦➛ ${prefix}multicolor
│◦➛ ${prefix}neon_devil
│◦➛ ${prefix}underwater
│◦➛ ${prefix}bear
│◦➛ ${prefix}wonderfulg
│◦➛ ${prefix}christmas
│◦➛ ${prefix}neon_light
│◦➛ ${prefix}snow
│◦➛ ${prefix}cloudsky
│◦➛ ${prefix}luxury2
│◦➛ ${prefix}gradient2
│◦➛ ${prefix}summer
│◦➛ ${prefix}writing
│◦➛ ${prefix}engraved
│◦➛ ${prefix}summery
│◦➛ ${prefix}3dglue
│◦➛ ${prefix}metaldark
│◦➛ ${prefix}neonlight
│◦➛ ${prefix}oscar
│◦➛ ${prefix}minion
│◦➛ ${prefix}holographic
│◦➛ ${prefix}purple
│◦➛ ${prefix}glossyb
│◦➛ ${prefix}deluxe2
│◦➛ ${prefix}glossyc
│◦➛ ${prefix}fabric
│◦➛ ${prefix}neonc
│◦➛ ${prefix}newyear
│◦➛ ${prefix}newyear2
│◦➛ ${prefix}metals
│◦➛ ${prefix}xmas
│◦➛ ${prefix}blood
│◦➛ ${prefix}darkg
│◦➛ ${prefix}joker
│◦➛ ${prefix}wicker
│◦➛ ${prefix}natural
│◦➛ ${prefix}firework
│◦➛ ${prefix}skeleton
│◦➛ ${prefix}balloon
│◦➛ ${prefix}balloon2
│◦➛ ${prefix}balloon3
│◦➛ ${prefix}balloon4
│◦➛ ${prefix}balloon5
│◦➛ ${prefix}balloon6
│◦➛ ${prefix}balloon7
│◦➛ ${prefix}steel
│◦➛ ${prefix}gloss
│◦➛ ${prefix}denim
│◦➛ ${prefix}decorate
│◦➛ ${prefix}decorate2
│◦➛ ${prefix}peridot
│◦➛ ${prefix}rock
│◦➛ ${prefix}glass
│◦➛ ${prefix}glass2
│◦➛ ${prefix}glass3
│◦➛ ${prefix}glass4
│◦➛ ${prefix}glass5
│◦➛ ${prefix}glass6
│◦➛ ${prefix}glass7
│◦➛ ${prefix}glass8
│◦➛ ${prefix}captain_as2
│◦➛ ${prefix}robot
│◦➛ ${prefix}equalizer
│◦➛ ${prefix}toxic
│◦➛ ${prefix}sparkling
│◦➛ ${prefix}sparkling2
│◦➛ ${prefix}sparkling3
│◦➛ ${prefix}sparkling4
│◦➛ ${prefix}sparkling5
│◦➛ ${prefix}sparkling6
│◦➛ ${prefix}sparkling7
│◦➛ ${prefix}decorative
│◦➛ ${prefix}chocolate
│◦➛ ${prefix}strawberry
│◦➛ ${prefix}koifish
│◦➛ ${prefix}bread
│◦➛ ${prefix}matrix
│◦➛ ${prefix}blood2
│◦➛ ${prefix}neonligth2
│◦➛ ${prefix}thunder2
│◦➛ ${prefix}3dbox
│◦➛ ${prefix}neon2
│◦➛ ${prefix}roadw
│◦➛ ${prefix}bokeh
│◦➛ ${prefix}gneon
│◦➛ ${prefix}advanced
│◦➛ ${prefix}dropwater
│◦➛ ${prefix}wall
│◦➛ ${prefix}chrismast
│◦➛ ${prefix}honey
│◦➛ ${prefix}drug
│◦➛ ${prefix}marble
│◦➛ ${prefix}marble2
│◦➛ ${prefix}ice
│◦➛ ${prefix}juice
│◦➛ ${prefix}rusty
│◦➛ ${prefix}abstra
│◦➛ ${prefix}biscuit
│◦➛ ${prefix}wood
│◦➛ ${prefix}scifi
│◦➛ ${prefix}metalr
│◦➛ ${prefix}purpleg
│◦➛ ${prefix}shiny
│◦➛ ${prefix}jewelry
│◦➛ ${prefix}jewelry2
│◦➛ ${prefix}jewelry3
│◦➛ ${prefix}jewelry4
│◦➛ ${prefix}jewelry5
│◦➛ ${prefix}jewelry6
│◦➛ ${prefix}jewelry7
│◦➛ ${prefix}jewelry8
│◦➛ ${prefix}metalh
│◦➛ ${prefix}golden
│◦➛ ${prefix}glitter
│◦➛ ${prefix}glitter2
│◦➛ ${prefix}glitter3
│◦➛ ${prefix}glitter4
│◦➛ ${prefix}glitter5
│◦➛ ${prefix}glitter6
│◦➛ ${prefix}glitter7
│◦➛ ${prefix}metale
│◦➛ ${prefix}carbon
│◦➛ ${prefix}candy
│◦➛ ${prefix}metalb
│◦➛ ${prefix}gemb
│◦➛ ${prefix}3dchrome
│◦➛ ${prefix}metalb2
│◦➛ ${prefix}metalg
│◦➛ ${prefix}carbon2
└❏ 


┌❏「 STORAGEMENU 」
│◦➛ ${prefix}addsticker
│◦➛ ${prefix}liststicker
│◦➛ ${prefix}getsticker
│◦➛ ${prefix}addvn
│◦➛ ${prefix}listvn
│◦➛ ${prefix}getvn
│◦➛ ${prefix}addimage
│◦➛ ${prefix}listimage
│◦➛ ${prefix}getimage
│◦➛ ${prefix}slow
│◦➛ ${prefix}fast
│◦➛ ${prefix}tupai
│◦➛ ${prefix}reverse
│◦➛ ${prefix}tomp3
└❏


┌❏ *E P H O T O 3 6 0*
│◦➛ ${prefix}wetglass text
│◦➛ ${prefix}multicolor3d text
│◦➛ ${prefix}watercolor text
│◦➛ ${prefix}luxurygold text
│◦➛ ${prefix}galaxywallpaper text
│◦➛ ${prefix}lighttext text
│◦➛ ${prefix}beautifulflower text
│◦➛ ${prefix}puppycute text
│◦➛ ${prefix}royaltext text
│◦➛ ${prefix}heartshaped text
│◦➛ ${prefix}birthdaycake text
│◦➛ ${prefix}galaxystyle text
│◦➛ ${prefix}hologram3d text
│◦➛ ${prefix}greenneon text
│◦➛ ${prefix}glossychrome text
│◦➛ ${prefix}greenbush text
│◦➛ ${prefix}metallogo text
│◦➛ ${prefix}noeltext text
│◦➛ ${prefix}glittergold text
│◦➛ ${prefix}textcake text
│◦➛ ${prefix}starsnight text
│◦➛ ${prefix}wooden3d text
│◦➛ ${prefix}textbyname text
│◦➛ ${prefix}writegalacy text
│◦➛ ${prefix}galaxybat text
│◦➛ ${prefix}snow3d text
│◦➛ ${prefix}birthdayday text
│◦➛ ${prefix}goldplaybutton text
│◦➛ ${prefix}silverplaybutton text
│◦➛ ${prefix}freefire text
└❏ 


┌❏  *M O V I E & S T O R Y*
│◦➛ ${prefix}Ldrakorongoing
│◦➛ ${prefix}lk21 query
│◦➛ ${prefix}wattpad url_wattpad
│◦➛ ${prefix}wattpadsearch query
│◦➛ ${prefix}cerpen
│◦➛ ${prefix}ceritahoror
└❏ 


┌❏  *R A N D O M T E X T*
│◦➛ ${prefix}quotes
│◦➛ ${prefix}quotesdiLan
│◦➛ ${prefix}quotesanime
│◦➛ ${prefix}quotesimage
│◦➛ ${prefix}faktaunik
│◦➛ ${prefix}katabijak
│◦➛ ${prefix}pantun
│◦➛ ${prefix}bucin
│◦➛ ${prefix}randomnama
└❏ 

┌❏ *W I B U M E N U*
│◦➛ ${prefix}loli
│◦➛ ${prefix}manga
│◦➛ ${prefix}anime 
│◦➛ ${prefix}lolivideo
│◦➛ ${prefix}husbu
│◦➛ ${prefix}waifu
│◦➛ ${prefix}milf
│◦➛ ${prefix}neko
│◦➛ ${prefix}kanna
│◦➛ ${prefix}sagiri
│◦➛ ${prefix}hentai
│◦➛ ${prefix}cosplay
│◦➛ ${prefix}wallnime
│◦➛ ${prefix}kusonime
│◦➛ ${prefix}megumin
│◦➛ ${prefix}otakudesu
│◦➛ ${prefix}doujindesu
│◦➛ ${prefix}storyanime
│◦➛ ${prefix}nakanomiku
│◦➛ ${prefix}nakanoikyy
│◦➛ ${prefix}nakanoitsuki
│◦➛ ${prefix}otakuongoing
└❏ 


┌❏ *D O W N L O A D M E N U*
│◦➛ ${prefix}fb 
│◦➛ ${prefix}igdl 
│◦➛ ${prefix}igdl2 
│◦➛ ${prefix}twitter 
│◦➛ ${prefix}tiktok 
│◦➛ ${prefix}play 
│◦➛ ${prefix}ythd 
│◦➛ ${prefix}ytmp3 
│◦➛ ${prefix}ytmp4 
│◦➛ ${prefix}soundcloud 
│◦➛ ${prefix}tiktoknowm 
│◦➛ ${prefix}tiktokaudio
│◦➛ ${prefix}mediafire 
│◦➛ ${prefix}nhentaipdf *code*
└❏ 


┌❏ *M E N U L A I N N Y A*
│◦➛ ${prefix}brainly *query*
│◦➛ ${prefix}shopee *product*
│◦➛ ${prefix}playstore *query*
│◦➛ ${prefix}ssweb *query*
│◦➛ ${prefix}google *query*
│◦➛ ${prefix}image *query*
│◦➛ ${prefix}pinterest *query*
│◦➛ ${prefix}nulis *teks*
│◦➛ ${prefix}iguser *ussername*
│◦➛ ${prefix}igstalk *username*
│◦➛ ${prefix}githubstalk *username*
│◦➛ ${prefix}tiktokstalk *ussername*
│◦➛ ${prefix}img2url *reply foto*
│◦➛ ${prefix}ytsearch *query*
└❏ 


┌❏ *G A M E M E N U*
│◦➛ ${prefix}slot
│◦➛ ${prefix}limitgame
│◦➛ ${prefix}gelud @tag
│◦➛ ${prefix}tictactoe @tag
│◦➛ ${prefix}siapaaku
│◦➛ ${prefix}family100
│◦➛ ${prefix}kuismath
│◦➛ ${prefix}asahotak
│◦➛ ${prefix}tebaklirik
│◦➛ ${prefix}tebaklagu
│◦➛ ${prefix}tebakkata
│◦➛ ${prefix}susunkata
│◦➛ ${prefix}kimiakuis
│◦➛ ${prefix}caklontong
│◦➛ ${prefix}tebakjenaka
│◦➛ ${prefix}tebakanime
│◦➛ ${prefix}tebaktebakan
│◦➛ ${prefix}tebakgambar
│◦➛ ${prefix}tebakbendera
│◦➛ ${prefix}suit *batu/kertas/gunting*
└❏ 


┌❏ *S T I C K E R M E N U*
│◦➛ ${prefix}dadu
│◦➛ ${prefix}bucinstick
│◦➛ ${prefix}doge
│◦➛ ${prefix}toimg
│◦➛ ${prefix}patrick
│◦➛ ${prefix}attp *teks*
│◦➛ ${prefix}attp2 *teks*
│◦➛ ${prefix}stickeranime
│◦➛ ${prefix}semoji *emoji*
│◦➛ ${prefix}sticker *reply foto/video*
│◦➛ ${prefix}smeme *teks|teks*
│◦➛ ${prefix}swm *pack|author*
│◦➛ ${prefix}take *pack|author* 
│◦➛ ${prefix}tovideo *reply sgif*
└❏ 


┌❏ *F U N M E N U*
│◦➛ ${prefix}mining
│◦➛ ${prefix}togel
│◦➛ ${prefix}cekwatak
│◦➛ ${prefix}cekmati [nama]
│◦➛ ${prefix}wangy [nama]
│◦➛ ${prefix}citacita
│◦➛ ${prefix}toxic
│◦➛ ${prefix}truth
│◦➛ ${prefix}dare
│◦➛ ${prefix}apakah
│◦➛ ${prefix}bisakah
│◦➛ ${prefix}kapankah
│◦➛ ${prefix}rate
│◦➛ ${prefix}jadian
│◦➛ ${prefix}cantik
│◦➛ ${prefix}ganteng
│◦➛ ${prefix}beban
│◦➛ ${prefix}babi
│◦➛ ${prefix}cekganteng
│◦➛ ${prefix}cekcantik
└❏ 


┌❏ *I N F O M E N U*
│◦➛ ${prefix}update
│◦➛ ${prefix}level
│◦➛ ${prefix}rules
│◦➛ ${prefix}profile
│◦➛ ${prefix}waktu
│◦➛ ${prefix}botstat
│◦➛ ${prefix}sewabot
│◦➛ ${prefix}listsewa
│◦➛ ${prefix}owner
│◦➛ ${prefix}ping
│◦➛ ${prefix}runtime
│◦➛ ${prefix}donasi
│◦➛ ${prefix}leaderboard
│◦➛ ${prefix}cekpremium
│◦➛ ${prefix}listpremium
│◦➛ ${prefix}sourcecode
│◦➛ ${prefix}bugreport *keluhan
└❏ 

┌❏ *I S L A M I M E N U*
│◦➛ ${prefix}listsurah
│◦➛ ${prefix}alquran
│◦➛ ${prefix}alquranaudio
│◦➛ ${prefix}asmaulhusna
│◦➛ ${prefix}kisahnabi
│◦➛ ${prefix}jadwalsholat
└❏ 


╠═══✪〘 Sound Menu〙✪══
╠➥${prefix}sound1
╠➥${prefix}sound2
╠➥${prefix}sound3
╠➥${prefix}sound4
╠➥${prefix}sound5
╠➥${prefix}sound6
╠➥${prefix}sound7
╠➥${prefix}sound8
╠➥${prefix}sound9
╠➥${prefix}sound10
╠➥${prefix}sound11
╠➥${prefix}sound12
╠➥${prefix}sound13
╠➥${prefix}sound14
╠➥${prefix}sound15
╠➥${prefix}sound16
╠➥${prefix}sound17
╠➥${prefix}sound18
╠➥${prefix}sound19
╠➥${prefix}sound20
╠➥${prefix}sound21
╠➥${prefix}sound22
╠➥${prefix}sound23

┌❏ *I N F O R M A T I O N M E N U*
│◦➛ ${prefix}covidglobal
│◦➛ ${prefix}covidindo
│◦➛ ${prefix}jamindo
│◦➛ ${prefix}jadwaltv
│◦➛ ${prefix}infocuaca
│◦➛ ${prefix}infogempa
│◦➛ ${prefix}infotsunami
└❏ ` 
wibu = `${week} ${date}
${timuu}`

                     ikyy.sendMessage(from, { contentText: `${menu}`, footerText: `${wibu}`, buttons: [{ buttonId: `!command`, buttonText: { displayText: '⬡ LIST MENU' }, type: 1 },{ buttonId: `!sewabot`, buttonText: { displayText: '🏷️ SEWA BOT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ikyads, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
                  break



//━━━━━━━━━━━━━━━[ random text ]━━━━━━━━━━━━━━━━━// 
           
                case 'quotes':
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${setting.lolkey}`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    reply(`_${quotes}_\n\n*â€• ${author}*`)
                    break
                case 'quotesanime':
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${setting.lolkey}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n*â€• ${char}*\n*â€• ${anime} ${episode}*`)
                    break
                case 'quotesdiLan':
                    quotediLan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/diLan?apikey=${setting.lolkey}`)
                    reply(quotediLan.result)
                    break
                case 'quotesimage':
                    get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${setting.lolkey}`)
                    await ikyy.sendMessage(from, get_result, image, { quoted: ftroli })
                    break
                case 'faktaunik':
                case 'katabijak':
                case 'pantun':
                case 'bucin':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${setting.lolkey}`)
                    reply(get_result.result)
                    break
                case 'randomnama':
                    anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${setting.lolkey}`)
                    reply(anu.result)
                    break
       // Movie & Story
                case 'lk21':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.Language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await ikyy.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
                    break
                case 'drakorongoing':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/drakorongoing?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Ongoing Drakor\n\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Year : ${x.category}\n`
                        ini_txt += `Total Episode : ${x.total_episode}\n`
                        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'wattpad':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpuLan-quote-tere-liye-tere-liye-quote-quote`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpad?apikey=${apikey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Motify date : ${get_result.modifyDate}\n`
                    ini_txt += `Create date: ${get_result.createDate}\n`
                    ini_txt += `Word : ${get_result.word}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Vote : ${get_result.vote}\n`
                    ini_txt += `Reader : ${get_result.reader}\n`
                    ini_txt += `Pages : ${get_result.pages}\n`
                    ini_txt += `Description : ${get_result.desc}\n\n`
                    ini_txt += `Story : \n${get_result.story}`
                    thumbnail = await getBuffer(get_result.photo)
                    await ikyy.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
                    break
                case 'wattpadsearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cerpen':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.creator}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    reply(ini_txt)
                    break
                case 'ceritahoror':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await ikyy.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
                    break

               case 'groupmenu':
        case 'menugroup':

        try {
               var pic = await ikyy.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
                var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }
                
               wibu =`${week} ${date}
${timuu} WIB\n\n© 𝙈𝙗𝙚𝙢𝙘𝙖𝙣𝙨 𝘽𝙤𝙩𝙯`
menu = `┌❏「 GROUP MENU 」
│◦➛ ${prefix}ɢʀᴏᴜᴘꜱᴇᴛᴛɪɴɢ
│◦➛ ${prefix}welcome enable/disable
│◦➛ ${prefix}antilink enable/disable
│◦➛ ${prefix}mute enable/disable
│◦➛ ${prefix}autostiker enable/disable
│◦➛ ${prefix}ᴀꜰᴋ *ᴀʟᴀꜱᴀɴ*
│◦➛ ${prefix}ᴄᴇᴋꜱᴇᴡᴀ
│◦➛ ${prefix}ᴋɪᴄᴋᴀʟʟ
│◦➛ ${prefix}ɪɴꜰᴏɢʀᴜᴘ
│◦➛ ${prefix}ᴘʀᴏᴍᴏᴛᴇ
│◦➛ ${prefix}ᴅᴇᴍᴏᴛᴇ
│◦➛ ${prefix}ʟɪꜱᴛᴏɴʟɪɴᴇ
│◦➛ ${prefix}ᴛᴀɢᴀʟʟ *ᴛᴇᴋꜱ*
│◦➛ ${prefix}ʟᴇᴀᴠᴇ
│◦➛ ${prefix}ᴋɪᴄᴋ *ʀᴇᴘʟʏ*
│◦➛ ${prefix}ᴀᴅᴅ *+62xxxxxx*
│◦➛ ${prefix}ꜱᴇᴛɢʀᴜᴘɴᴀᴍᴇ
│◦➛ ${prefix}ꜱᴇᴛᴘᴘɢʀᴜᴘ
│◦➛ ${prefix}ꜱᴇᴛᴅᴇꜱᴄ
│◦➛ ${prefix}group open/close
│◦➛ ${prefix}ꜱɪᴅᴇʀ *ʀᴇᴘʟʏ ᴄʜᴀᴛ ʙᴏᴛ*
│◦➛ ${prefix}ʜɪᴅᴇᴛᴀɢ *ᴛᴇᴋꜱ/ʀᴇᴘʟʏ ᴛᴇᴋꜱ*
│◦➛ ${prefix}notif
│◦➛ ${prefix}closetime/opentime *waktunya* 
contoh !closetime 2 detik
└❏`

return sendButMessage(from, menu, wibu, [
            {
               "buttonId": ".Jadib",
               "buttonText": {
                  "displayText": "PROMO JADIBOT+OWNER"
               },
               "type": "RESPONSE"
            }
         ], {quoted:mek})
         break
        case 'storymenu':
        case 'moviemenu':

              try {
               var pic = await ikyy.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
                var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }
        
               wibu =`${week} ${date}
${timuu} WIB

© 𝙈𝙗𝙚𝙢𝙘𝙖𝙣𝙨 𝘽𝙤𝙩𝙯`
menu = `┌❏「 STORY MENU 」
│◦➛ ${prefix}drakorongoing
│◦➛ ${prefix}lk21 query
│◦➛ ${prefix}wattpad url_wattpad
│◦➛ ${prefix}wattpadsearch query
│◦➛ ${prefix}cerpen
│◦➛ ${prefix}ceritahoror
└❏`

return sendButMessage(from, menu, wibu, [
            {
               "buttonId": ".Jadib",
               "buttonText": {
                  "displayText": "PROMO JADIBOT+OWNER"
               },
               "type": "RESPONSE"
            }
         ], {quoted:mek})
         break
        case 'randomtext':
        case 'random':

             try {
               var pic = await ikyy.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
                var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            } 
        
           wibu =`${week} ${date}
${timuu} WIB

© 𝙈𝙗𝙚𝙢𝙘𝙖𝙣𝙨 𝘽𝙤𝙩𝙯`
menu = `┌❏「 RANDOM TEXT 」
│◦➛ ${prefix}quotes
│◦➛ ${prefix}quotesdiLan
│◦➛ ${prefix}quotesanime
│◦➛ ${prefix}quotesimage
│◦➛ ${prefix}faktaunik
│◦➛ ${prefix}katabijak
│◦➛ ${prefix}pantun
│◦➛ ${prefix}bucin
│◦➛ ${prefix}randomnama
└❏`

return sendButMessage(from, menu, wibu, [
            {
               "buttonId": ".Jadib",
               "buttonText": {
                  "displayText": "PROMO JADIBOT+OWNER"
               },
               "type": "RESPONSE"
            }
         ], {quoted:mek})
         break
        
        case 'ownermenu':
        case  'menuowner':

            try {
               var pic = await ikyy.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
                var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }                
       wibu =`${week} ${date}
${timuu} WIB

© 𝙈𝙗𝙚𝙢𝙘𝙖𝙣𝙨 𝘽𝙤𝙩𝙯`
menu = `┌❏「 OWNER MENU 」
│◦➛ ${prefix}bc *teks*
│◦➛ ${prefix}term
│◦➛ ${prefix}setpp
│◦➛ ${prefix}pin
│◦➛ ${prefix}unpin
│◦➛ ${prefix}archive
│◦➛ ${prefix}unarchive
│◦➛ ${prefix}antidelete
│◦➛ ${prefix}eval
│◦➛ ${prefix}reset
│◦➛ ${prefix}clearall
│◦➛ ${prefix}leaveall
│◦➛ ${prefix}slow
│◦➛ ${prefix}leaveall
│◦➛ ${prefix}join *link gc*
│◦➛ ${prefix}shutdown
│◦➛ ${prefix}getquoted
│◦➛ ${prefix}addupdate *fiturnya*
│◦➛ ${prefix}exif *nama|author*
│◦➛ ${prefix}sewa add/del *waktunya*
│◦➛ ${prefix}premium add @tag|nomor
│◦➛ ${prefix}premium del @tag|nomor
└❏`

return sendButMessage(from, menu, wibu, [
            {
               "buttonId": ".Jadib",
               "buttonText": {
                  "displayText": "PROMO JADIBOT+OWNER"
               },
               "type": "RESPONSE"
            }
         ], {quoted:mek})
         break
        
       case 'wibumenu':
        case  'menuwibu':

        try {
               var pic = await ikyy.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
                var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }
wibu =`${week} ${date}
${timuu} WIB

© 𝙈𝙗𝙚𝙢𝙘𝙖𝙣𝙨 𝘽𝙤𝙩𝙯`
menu = `┌❏ 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
│◦➛ ${prefix}loli
│◦➛ ${prefix}manga
│◦➛ ${prefix}anime 
│◦➛ ${prefix}lolivideo
│◦➛ ${prefix}husbu
│◦➛ ${prefix}waifu
│◦➛ ${prefix}milf
│◦➛ ${prefix}neko
│◦➛ ${prefix}kanna
│◦➛ ${prefix}sagiri
│◦➛ ${prefix}hentai
│◦➛ ${prefix}cosplay
│◦➛ ${prefix}wallnime
│◦➛ ${prefix}kusonime
│◦➛ ${prefix}megumin
│◦➛ ${prefix}otakudesu
│◦➛ ${prefix}doujindesu
│◦➛ ${prefix}storyanime
│◦➛ ${prefix}nakanomiku
│◦➛ ${prefix}nakanoikyy
│◦➛ ${prefix}nakanoitsuki
│◦➛ ${prefix}otakuongoing
│◦➛ ${prefix}nhentai *code*
└❏`

return sendButMessage(from, menu, wibu, [
            {
               "buttonId": ".Jadib",
               "buttonText": {
                  "displayText": "PROMO JADIBOT+OWNER"
               },
               "type": "RESPONSE"
            }
         ], {quoted:mek})
         break

       case 'soundmenu':
        case  'menusound':

        try {
               var pic = await ikyy.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
                var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }
                       wibu =`${week} ${date}
${timuu} WIB

© 𝙈𝙗𝙚𝙢𝙘𝙖𝙣𝙨 𝘽𝙤𝙩𝙯`
menu = `┌❏「 SOUND MENU 」
│◦➛ ${prefix}Sound1
│◦➛ ${prefix}Sound2
│◦➛ ${prefix}Sound3
│◦➛ ${prefix}Sound4
│◦➛ ${prefix}Sound5
│◦➛ ${prefix}Sound6
│◦➛ ${prefix}Sound7
│◦➛ ${prefix}Sound8
│◦➛ ${prefix}Sound9
│◦➛ ${prefix}Sound10
│◦➛ ${prefix}Sound11
│◦➛ ${prefix}Sound12
│◦➛ ${prefix}Sound13
│◦➛ ${prefix}Sound14
│◦➛ ${prefix}Sound15
│◦➛ ${prefix}Sound16
│◦➛ ${prefix}Sound17
│◦➛ ${prefix}Sound18
│◦➛ ${prefix}Sound19
│◦➛ ${prefix}Sound20
│◦➛ ${prefix}Sound21
│◦➛ ${prefix}Sound22
│◦➛ ${prefix}Sound23
└❏`

return sendButMessage(from, menu, wibu, [
            {
               "buttonId": ".Jadib",
               "buttonText": {
                  "displayText": "PROMO JADIBOT+OWNER"
               },
               "type": "RESPONSE"
            }
         ], {quoted:mek})
         break

        
       case 'downloadmenu':
        case  'menudownload':

        try {
               var pic = await ikyy.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
                var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }
                       wibu =`${week} ${date}
${timuu} WIB

© 𝙈𝙗𝙚𝙢𝙘𝙖𝙣𝙨 𝘽𝙤𝙩𝙯`
menu = `┌❏「 DOWNLOAD MENU 」
│◦➛ ${prefix}fb 
│◦➛ ${prefix}igdl 
│◦➛ ${prefix}igdl2 
│◦➛ ${prefix}twitter 
│◦➛ ${prefix}tiktok 
│◦➛ ${prefix}play 
│◦➛ ${prefix}ythd 
│◦➛ ${prefix}ytmp3 
│◦➛ ${prefix}ytmp4 
│◦➛ ${prefix}soundcloud 
│◦➛ ${prefix}tiktoknowm 
│◦➛ ${prefix}tiktokaudio
│◦➛ ${prefix}mediafire 
│◦➛ ${prefix}nhentaipdf *code*
└❏`

return sendButMessage(from, menu, wibu, [
            {
               "buttonId": ".Jadib",
               "buttonText": {
                  "displayText": "PROMO JADIBOT+OWNER"
               },
               "type": "RESPONSE"
            }
         ], {quoted:mek})
         break
   
     case 'othermenu':
        case  'menuother':

        try {
               var pic = await ikyy.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
                var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }
              groups = ikyy.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ikyy.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime(); 
              timestampe = speed();
              totalChat = await ikyy.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
       wibu =`${week} ${date}
${timuu} WIB

© 𝙈𝙗𝙚𝙢𝙘𝙖𝙣𝙨 𝘽𝙤𝙩𝙯`
menu = `┌❏「 MENU LAINNYA 」
│◦➛ ${prefix}brainly *query*
│◦➛ ${prefix}shopee *product*
│◦➛ ${prefix}playstore *query*
│◦➛ ${prefix}ssweb *query*
│◦➛ ${prefix}google *query*
│◦➛ ${prefix}image *query*
│◦➛ ${prefix}pinterest *query*
│◦➛ ${prefix}nulis *teks*
│◦➛ ${prefix}iguser *ussername*
│◦➛ ${prefix}igstalk *username*
│◦➛ ${prefix}githubstalk *username*
│◦➛ ${prefix}tiktokstalk *ussername*
│◦➛ ${prefix}img2url *reply foto*
│◦➛ ${prefix}ytsearch *query*
└❏`

return sendButMessage(from, menu, wibu, [
            {
               "buttonId": ".Jadib",
               "buttonText": {
                  "displayText": "PROMO JADIBOT+OWNER"
               },
               "type": "RESPONSE"
            }
         ], {quoted:mek})
         break
   
   case 'gamemenu':
        case  'menugame':

        try {
               var pic = await ikyy.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
                var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }
                       wibu =`${week} ${date}
${timuu} WIB

© 𝙈𝙗𝙚𝙢𝙘𝙖𝙣𝙨 𝘽𝙤𝙩𝙯`
menu = `┌❏「 GAME MENU 」
│◦➛ ${prefix}slot
│◦➛ ${prefix}limitgame
│◦➛ ${prefix}gelud @tag
│◦➛ ${prefix}tictactoe @tag
│◦➛ ${prefix}siapaaku
│◦➛ ${prefix}kuismath
│◦➛ ${prefix}asahotak
│◦➛ ${prefix}tebaklirik
│◦➛ ${prefix}tebaklagu
│◦➛ ${prefix}tebakkata
│◦➛ ${prefix}susunkata
│◦➛ ${prefix}kimiakuis
│◦➛ ${prefix}caklontong
│◦➛ ${prefix}tebakjenaka
│◦➛ ${prefix}tebakanime
│◦➛ ${prefix}tebaktebakan
│◦➛ ${prefix}tebakgambar
│◦➛ ${prefix}tebakbendera
│◦➛ ${prefix}suit *batu/kertas/gunting*
└❏`

return sendButMessage(from, menu, wibu, [
            {
               "buttonId": ".Jadib",
               "buttonText": {
                  "displayText": "PROMO JADIBOT+OWNER"
               },
               "type": "RESPONSE"
            }
         ], {quoted:mek})
         break
               case 'stickermenu':
        case  'stikermenu':

        try {
               var pic = await ikyy.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
                var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }
              groups = ikyy.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ikyy.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ikyy.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
      
wibu =`${week} ${date}
${timuu} WIB

© 𝙍 𝙞 𝙛 𝙦 𝙞  𝘽 𝙤 ?? 𝙯`
menu = `┌❏「 STICKER MENU 」
│◦➛ ${prefix}dadu
│◦➛ ${prefix}doge
│◦➛ ${prefix}toimg
│◦➛ ${prefix}patrick
│◦➛ ${prefix}garwgura
│◦➛ ${prefix}attp *teks*
│◦➛ ${prefix}attp2 *teks*
│◦➛ ${prefix}ttp *teks*
│◦➛ ${prefix}ttp2 *teks*
│◦➛ ${prefix}ttp3 *teks*
│◦➛ ${prefix}ttp4 *teks*
│◦➛ ${prefix}stickeranime
│◦➛ ${prefix}semoji *emoji*
│◦➛ ${prefix}sticker *reply foto/video*
│◦➛ ${prefix}smeme *teks|teks*
│◦➛ ${prefix}swm *pack|author*
│◦➛ ${prefix}take *pack|author* 
│◦➛ ${prefix}tovideo *reply sgif*
│◦➛ ${prefix}amongus *teks*
└❏`

return sendButMessage(from, menu, wibu, [
            {
               "buttonId": ".Jadib",
               "buttonText": {
                  "displayText": "PROMO JADIBOT+OWNER"
               },
               "type": "RESPONSE"
            }
         ], {quoted:mek})
         break
                    case 'informationmenu':

        try {
               var pic = await ikyy.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
                var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }
              groups = ikyy.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ikyy.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ikyy.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
      
wibu =`${week} ${date}
${timuu} WIB

© 𝙈𝙗𝙚𝙢𝙘𝙖𝙣𝙨 𝘽𝙤𝙩𝙯`
menu = `┌❏「 INFORMATION MENU 」
│◦➛ ${prefix}covidglobal
│◦➛ ${prefix}covidindo
│◦➛ ${prefix}jamindo
│◦➛ ${prefix}jadwaltv
│◦➛ ${prefix}infocuaca
│◦➛ ${prefix}infogempa
│◦➛ ${prefix}infotsunami
└❏`
               return sendButMessage(from, menu, wibu, [
            {
               "buttonId": ".Jadib",
               "buttonText": {
                  "displayText": "PROMO JADIBOT+OWNER"
               },
               "type": "RESPONSE"
            }
         ], {quoted:mek})
         break
              
           case 'funmenu':

        try {
               var pic = await ikyy.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
                var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }
              groups = ikyy.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ikyy.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ikyy.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
      
wibu =`${week} ${date}
${timuu} WIB

© 𝙈𝙗𝙚𝙢𝙘𝙖𝙣𝙨 𝘽𝙤𝙩𝙯`
menu = `┌❏「 FUN MENU 」
│◦➛ ${prefix}togel
│◦➛ ${prefix}cekwatak
│◦➛ ${prefix}cekmati [nama]
│◦➛ ${prefix}wangy [nama]
│◦➛ ${prefix}citacita
│◦➛ ${prefix}toxic
│◦➛ ${prefix}truth
│◦➛ ${prefix}dare
│◦➛ ${prefix}apakah
│◦➛ ${prefix}bisakah
│◦➛ ${prefix}kapankah
│◦➛ ${prefix}rate
│◦➛ ${prefix}jadian
│◦➛ ${prefix}cantik
│◦➛ ${prefix}ganteng
│◦➛ ${prefix}beban
│◦➛ ${prefix}babi
│◦➛ ${prefix}cekganteng
│◦➛ ${prefix}cekcantik
│◦➛ ${prefix}tts
│◦➛ ${prefix}kodebahasa
└❏`
               return sendButMessage(from, menu, wibu, [
            {
               "buttonId": ".Jadib",
               "buttonText": {
                  "displayText": "PROMO JADIBOT+OWNER"
               },
               "type": "RESPONSE"
            }
         ], {quoted:mek})
         break
               
   case 'infomenu':
        case  'menuinfo':

              try {
               var pic = await ikyy.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
                var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }
              groups = ikyy.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ikyy.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ikyy.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
      
wibu =`${week} ${date}
${timuu} WIB

© 𝙈𝙗𝙚𝙢𝙘𝙖𝙣𝙨 𝘽𝙤𝙩𝙯`
menu = `┌❏「 INFO MENU 」
│◦➛ ${prefix}update
│◦➛ ${prefix}level
│◦➛ ${prefix}rules
│◦➛ ${prefix}profile
│◦➛ ${prefix}waktu
│◦➛ ${prefix}botstat
│◦➛ ${prefix}sewabot
│◦➛ ${prefix}listsewa
│◦➛ ${prefix}owner
│◦➛ ${prefix}ping
│◦➛ ${prefix}runtime
│◦➛ ${prefix}donasi
│◦➛ ${prefix}leaderboard
│◦➛ ${prefix}cekpremium
│◦➛ ${prefix}listpremium
│◦➛ ${prefix}sourcecode
│◦➛ ${prefix}bugreport *keluhan*
│◦➛ ${prefix}listgc
└❏`

return sendButMessage(from, menu, wibu, [
            {
               "buttonId": ".Jadib",
               "buttonText": {
                  "displayText": "PROMO JADIBOT+OWNER"
               },
               "type": "RESPONSE"
            }
         ], {quoted:mek})
         break

   case 'islammenu':
        case  'islamimenu':

              try {
               var pic = await ikyy.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
                var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }
              groups = ikyy.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ikyy.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ikyy.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
      
wibu =`${week} ${date}
${timuu} WIB

© 𝙈𝙗𝙚𝙢𝙘𝙖𝙣𝙨 𝘽𝙤𝙩𝙯`
menu = `┌❏「 ISLAMI MENU 」
│◦➛ ${prefix}listsurah
│◦➛ ${prefix}alquran
│◦➛ ${prefix}alquranaudio
│◦➛ ${prefix}asmaulhusna
│◦➛ ${prefix}kisahnabi
│◦➛ ${prefix}jadwalsholat
└❏`

return sendButMessage(from, menu, wibu, [
            {
               "buttonId": ".Jadib",
               "buttonText": {
                  "displayText": "PROMO JADIBOT+OWNER"
               },
               "type": "RESPONSE"
            }
         ], {quoted:mek})
         break
                   case 'ephoto':
case 'ephotomenu':

try {
               var pic = await ikyy.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
                var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }
wibu =`${week} ${date}
${timuu} WIB

© 𝙈𝙗𝙚𝙢𝙘𝙖𝙣𝙨 𝘽𝙤𝙩𝙯`
menu = `┌❏「 EPHOTO MENU 」
│◦➛ ${prefix}wetglass text
│◦➛ ${prefix}multicolor3d text
│◦➛ ${prefix}watercolor text
│◦➛ ${prefix}luxurygold text
│◦➛ ${prefix}galaxywallpaper text
│◦➛ ${prefix}lighttext text
│◦➛ ${prefix}beautifulflower text
│◦➛ ${prefix}puppycute text
│◦➛ ${prefix}royaltext text
│◦➛ ${prefix}heartshaped text
│◦➛ ${prefix}birthdaycake text
│◦➛ ${prefix}galaxystyle text
│◦➛ ${prefix}hologram3d text
│◦➛ ${prefix}greenneon text
│◦➛ ${prefix}glossychrome text
│◦➛ ${prefix}greenbush text
│◦➛ ${prefix}metallogo text
│◦➛ ${prefix}noeltext text
│◦➛ ${prefix}glittergold text
│◦➛ ${prefix}textcake text
│◦➛ ${prefix}starsnight text
│◦➛ ${prefix}wooden3d text
│◦➛ ${prefix}textbyname text
│◦➛ ${prefix}writegalacy text
│◦➛ ${prefix}galaxybat text
│◦➛ ${prefix}snow3d text
│◦➛ ${prefix}birthdayday text
│◦➛ ${prefix}goldplaybutton text
│◦➛ ${prefix}silverplaybutton text
│◦➛ ${prefix}freefire text
└❏`

return sendButMessage(from, menu, wibu, [
            {
               "buttonId": ".Jadib",
               "buttonText": {
                  "displayText": "PROMO JADIBOT+OWNER"
               },
               "type": "RESPONSE"
            }
         ], {quoted:mek})
         break
        
        case 'wibu2':
case 'nsfwanime':

try {
               var pic = await ikyy.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
                var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }
wibu =`${week} ${date}
${timuu} WIB

© 𝙍 𝙞 ?? 𝙦 𝙞  𝘽 𝙤 𝙩 𝙯`
menu = `┌❏ MENU
│◦➛ ${prefix}chiisaihentai
│◦➛ ${prefix}trap
│◦➛ ${prefix}blowjob
│◦➛ ${prefix}yaoi
│◦➛ ${prefix}ecchi
│◦➛ ${prefix}hentai
│◦➛ ${prefix}ahegao
│◦➛ ${prefix}hololewd
│◦➛ ${prefix}sideoppai
│◦➛ ${prefix}animefeets
│◦➛ ${prefix}animebooty
│◦➛ ${prefix}animethighss
│◦➛ ${prefix}hentaiparadise
│◦➛ ${prefix}animearmpits
│◦➛ ${prefix}hentaifemdom
│◦➛ ${prefix}lewdanimegirls
│◦➛ ${prefix}biganimetiddies
│◦➛ ${prefix}animebellybutton
│◦➛ ${prefix}hentai4everyone
└❏`

return sendButMessage(from, menu, wibu, [
            {
               "buttonId": ".Jadib",
               "buttonText": {
                  "displayText": "PROMO JADIBOT+OWNER"
               },
               "type": "RESPONSE"
            }
         ], {quoted:mek})
         break
        case 'randomimage':
case 'randomimage':

try {
               var pic = await ikyy.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
                var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }
wibu =`${week} ${date}
${timuu} WIB

© 𝙈𝙗𝙚𝙢𝙘𝙖𝙣𝙨 𝘽𝙤𝙩𝙯`
menu = `┌❏ MENU
│◦➛ ${prefix}bj
│◦➛ ${prefix}ero
│◦➛ ${prefix}ppcp
│◦➛ ${prefix}cum
│◦➛ ${prefix}feet
│◦➛ ${prefix}yuri
│◦➛ ${prefix}trap
│◦➛ ${prefix}lewd
│◦➛ ${prefix}feed
│◦➛ ${prefix}eron
│◦➛ ${prefix}solo
│◦➛ ${prefix}gasm
│◦➛ ${prefix}poke
│◦➛ ${prefix}anal
│◦➛ ${prefix}holo
│◦➛ ${prefix}tits
│◦➛ ${prefix}kuni
│◦➛ ${prefix}kiss
│◦➛ ${prefix}erok
│◦➛ ${prefix}smug
│◦➛ ${prefix}baka
│◦➛ ${prefix}solog
│◦➛ ${prefix}feetg
│◦➛ ${prefix}lewdk
│◦➛ ${prefix}waifu
│◦➛ ${prefix}pussy
│◦➛ ${prefix}femdom
│◦➛ ${prefix}cuddle
│◦➛ ${prefix}hentai
│◦➛ ${prefix}eroyuri
│◦➛ ${prefix}cum_jpg
│◦➛ ${prefix}blowjob
│◦➛ ${prefix}erofeet
│◦➛ ${prefix}holoero
│◦➛ ${prefix}classic
│◦➛ ${prefix}erokemo
│◦➛ ${prefix}fox_girl
│◦➛ ${prefix}futanari
│◦➛ ${prefix}lewdkemo
│◦➛ ${prefix}wallpaper
│◦➛ ${prefix}pussy_jpg
│◦➛ ${prefix}kemonomimi
│◦➛ ${prefix}nsfw_avatar
│◦➛ ${prefix}ngif
│◦➛ ${prefix}nsfw_neko_gif
│◦➛ ${prefix}random_hentai_gif
└❏`

return sendButMessage(from, menu, wibu, [
            {
               "buttonId": ".Jadib",
               "buttonText": {
                  "displayText": "PROMO JADIBOT+OWNER"
               },
               "type": "RESPONSE"
            }
         ], {quoted:mek})
         break
        
        case 'photoxy':
case 'photooky':

try {
               var pic = await ikyy.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
                var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }
wibu =`${week} ${date}
${timuu} WIB

© 𝙈𝙗𝙚𝙢𝙘𝙖𝙣𝙨 𝘽𝙤𝙩𝙯`
menu = `┌❏「 PHOTOOXY MENU 」
│◦➛ ${prefix}shadow text
│◦➛ ${prefix}cup text
│◦➛ ${prefix}cup1 text
│◦➛ ${prefix}romance text
│◦➛ ${prefix}smoke text
│◦➛ ${prefix}burnpaper text
│◦➛ ${prefix}lovemessage text
│◦➛ ${prefix}undergrass text
│◦➛ ${prefix}love text
│◦➛ ${prefix}coffe text
│◦➛ ${prefix}woodheart text
│◦➛ ${prefix}woodenboard text
│◦➛ ${prefix}summer3d text
│◦➛ ${prefix}wolfmetal text
│◦➛ ${prefix}nature3d text
│◦➛ ${prefix}underwater text
│◦➛ ${prefix}golderrose text
│◦➛ ${prefix}summernature text
│◦➛ ${prefix}letterleaves text
│◦➛ ${prefix}glowingneon text
│◦➛ ${prefix}fallleaves text
│◦➛ ${prefix}flamming text
│◦➛ ${prefix}harrypotter text
│◦➛ ${prefix}carvedwood text
│◦➛ ${prefix}tiktok text1 text2
│◦➛ ${prefix}arcade8bit text1 text2
│◦➛ ${prefix}battlefield4 text1 text2
│◦➛ ${prefix}pubg text1 text2
└❏`

return sendButMessage(from, menu, wibu, [
            {
               "buttonId": ".Jadib",
               "buttonText": {
                  "displayText": "PROMO JADIBOT+OWNER"
               },
               "type": "RESPONSE"
            }
         ], {quoted:mek})
         break
case 'textpro':    

try {
               var pic = await ikyy.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
                var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }
wibu =`${week} ${date}
${timuu} WIB

© 𝙍 𝙞 ?? 𝙦 𝙞  𝘽 𝙤 𝙩 𝙯`
menu = `┌❏「 TEXTPROME MENU 」
│◦➛ ${prefix}blackpink text
│◦➛ ${prefix}neon text
│◦➛ ${prefix}greenneon text
│◦➛ ${prefix}advanceglow text
│◦➛ ${prefix}futureneon text
│◦➛ ${prefix}sandwriting text
│◦➛ ${prefix}sandsummer text
│◦➛ ${prefix}sandengraved text
│◦➛ ${prefix}metaldark text
│◦➛ ${prefix}neonlight text
│◦➛ ${prefix}holographic text
│◦➛ ${prefix}text1917 text
│◦➛ ${prefix}minion text
│◦➛ ${prefix}deluxesilver text
│◦➛ ${prefix}newyearcard text
│◦➛ ${prefix}bloodfrosted text
│◦➛ ${prefix}halloween text
│◦➛ ${prefix}jokerlogo text
│◦➛ ${prefix}fireworksparkle text
│◦➛ ${prefix}natureleaves text
│◦➛ ${prefix}bokeh text
│◦➛ ${prefix}toxic text
│◦➛ ${prefix}strawberry text
│◦➛ ${prefix}box3d text
│◦➛ ${prefix}roadwarning text
│◦➛ ${prefix}breakwall text
│◦➛ ${prefix}icecold text
│◦➛ ${prefix}luxury text
│◦➛ ${prefix}cloud text
│◦➛ ${prefix}summersand text
│◦➛ ${prefix}horrorblood text
│◦➛ ${prefix}thunder text
│◦➛ ${prefix}pornhub text1 text2
│◦➛ ${prefix}glitch text1 text2
│◦➛ ${prefix}avenger text1 text2
│◦➛ ${prefix}space text1 text2
│◦➛ ${prefix}ninjalogo text1 text2
│◦➛ ${prefix}marvelstudio text1 text2
│◦➛ ${prefix}lionlogo text1 text2
│◦➛ ${prefix}wolflogo text1 text2
│◦➛ ${prefix}steel3d text1 text2
│◦➛ ${prefix}wallgravity text1 text2
└❏ `

return sendButMessage(from, menu, wibu, [
            {
               "buttonId": ".Jadib",
               "buttonText": {
                  "displayText": "PROMO JADIBOT+OWNER"
               },
               "type": "RESPONSE"
            }
         ], {quoted:mek})
         break
case 'textpro2':    

try {
               var pic = await ikyy.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
                var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }
wibu =`${week} ${date}
${timuu} WIB

© 𝙈𝙗𝙚𝙢𝙘𝙖𝙣𝙨 𝘽𝙤𝙩𝙯`
menu = `┌❏「 TEXTPROME2 」
│◦➛ ${prefix}blackpink
│◦➛ ${prefix}rainbow2
│◦➛ ${prefix}water_pipe
│◦➛ ${prefix}halloween
│◦➛ ${prefix}sketch
│◦➛ ${prefix}sircuit
│◦➛ ${prefix}discovery
│◦➛ ${prefix}metallic2
│◦➛ ${prefix}fiction
│◦➛ ${prefix}demon
│◦➛ ${prefix}transformer
│◦➛ ${prefix}berry
│◦➛ ${prefix}thunder
│◦➛ ${prefix}magma
│◦➛ ${prefix}3dstone
│◦➛ ${prefix}neon
│◦➛ ${prefix}glitch
│◦➛ ${prefix}harry_potter
│◦➛ ${prefix}embossed
│◦➛ ${prefix}broken
│◦➛ ${prefix}papercut
│◦➛ ${prefix}gradient
│◦➛ ${prefix}glossy
│◦➛ ${prefix}watercolor
│◦➛ ${prefix}multicolor
│◦➛ ${prefix}neon_devil
│◦➛ ${prefix}underwater
│◦➛ ${prefix}bear
│◦➛ ${prefix}wonderfulg
│◦➛ ${prefix}christmas
│◦➛ ${prefix}neon_light
│◦➛ ${prefix}snow
│◦➛ ${prefix}cloudsky
│◦➛ ${prefix}luxury2
│◦➛ ${prefix}gradient2
│◦➛ ${prefix}summer
│◦➛ ${prefix}writing
│◦➛ ${prefix}engraved
│◦➛ ${prefix}summery
│◦➛ ${prefix}3dglue
│◦➛ ${prefix}metaldark
│◦➛ ${prefix}neonlight
│◦➛ ${prefix}oscar
│◦➛ ${prefix}minion
│◦➛ ${prefix}holographic
│◦➛ ${prefix}purple
│◦➛ ${prefix}glossyb
│◦➛ ${prefix}deluxe2
│◦➛ ${prefix}glossyc
│◦➛ ${prefix}fabric
│◦➛ ${prefix}neonc
│◦➛ ${prefix}newyear
│◦➛ ${prefix}newyear2
│◦➛ ${prefix}metals
│◦➛ ${prefix}xmas
│◦➛ ${prefix}blood
│◦➛ ${prefix}darkg
│◦➛ ${prefix}joker
│◦➛ ${prefix}wicker
│◦➛ ${prefix}natural
│◦➛ ${prefix}firework
│◦➛ ${prefix}skeleton
│◦➛ ${prefix}balloon
│◦➛ ${prefix}balloon2
│◦➛ ${prefix}balloon3
│◦➛ ${prefix}balloon4
│◦➛ ${prefix}balloon5
│◦➛ ${prefix}balloon6
│◦➛ ${prefix}balloon7
│◦➛ ${prefix}steel
│◦➛ ${prefix}gloss
│◦➛ ${prefix}denim
│◦➛ ${prefix}decorate
│◦➛ ${prefix}decorate2
│◦➛ ${prefix}peridot
│◦➛ ${prefix}rock
│◦➛ ${prefix}glass
│◦➛ ${prefix}glass2
│◦➛ ${prefix}glass3
│◦➛ ${prefix}glass4
│◦➛ ${prefix}glass5
│◦➛ ${prefix}glass6
│◦➛ ${prefix}glass7
│◦➛ ${prefix}glass8
│◦➛ ${prefix}captain_as2
│◦➛ ${prefix}robot
│◦➛ ${prefix}equalizer
│◦➛ ${prefix}toxic
│◦➛ ${prefix}sparkling
│◦➛ ${prefix}sparkling2
│◦➛ ${prefix}sparkling3
│◦➛ ${prefix}sparkling4
│◦➛ ${prefix}sparkling5
│◦➛ ${prefix}sparkling6
│◦➛ ${prefix}sparkling7
│◦➛ ${prefix}decorative
│◦➛ ${prefix}chocolate
│◦➛ ${prefix}strawberry
│◦➛ ${prefix}koifish
│◦➛ ${prefix}bread
│◦➛ ${prefix}matrix
│◦➛ ${prefix}blood2
│◦➛ ${prefix}neonligth2
│◦➛ ${prefix}thunder2
│◦➛ ${prefix}3dbox
│◦➛ ${prefix}neon2
│◦➛ ${prefix}roadw
│◦➛ ${prefix}bokeh
│◦➛ ${prefix}gneon
│◦➛ ${prefix}advanced
│◦➛ ${prefix}dropwater
│◦➛ ${prefix}wall
│◦➛ ${prefix}chrismast
│◦➛ ${prefix}honey
│◦➛ ${prefix}drug
│◦➛ ${prefix}marble
│◦➛ ${prefix}marble2
│◦➛ ${prefix}ice
│◦➛ ${prefix}juice
│◦➛ ${prefix}rusty
│◦➛ ${prefix}abstra
│◦➛ ${prefix}biscuit
│◦➛ ${prefix}wood
│◦➛ ${prefix}scifi
│◦➛ ${prefix}metalr
│◦➛ ${prefix}purpleg
│◦➛ ${prefix}shiny
│◦➛ ${prefix}jewelry
│◦➛ ${prefix}jewelry2
│◦➛ ${prefix}jewelry3
│◦➛ ${prefix}jewelry4
│◦➛ ${prefix}jewelry5
│◦➛ ${prefix}jewelry6
│◦➛ ${prefix}jewelry7
│◦➛ ${prefix}jewelry8
│◦➛ ${prefix}metalh
│◦➛ ${prefix}golden
│◦➛ ${prefix}glitter
│◦➛ ${prefix}glitter2
│◦➛ ${prefix}glitter3
│◦➛ ${prefix}glitter4
│◦➛ ${prefix}glitter5
│◦➛ ${prefix}glitter6
│◦➛ ${prefix}glitter7
│◦➛ ${prefix}metale
│◦➛ ${prefix}carbon
│◦➛ ${prefix}candy
│◦➛ ${prefix}metalb
│◦➛ ${prefix}gemb
│◦➛ ${prefix}3dchrome
│◦➛ ${prefix}metalb2
│◦➛ ${prefix}metalg
│◦➛ ${prefix}carbon2
└❏ `
return sendButMessage(from, menu, wibu, [
            {
               "buttonId": ".Jadib",
               "buttonText": {
                  "displayText": "PROMO JADIBOT+OWNER"
               },
               "type": "RESPONSE"
            }
         ], {quoted:mek})
         break
case 'storagemenu':    

try {
               var pic = await ikyy.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
                var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }
wibu =`${week} ${date}
${timuu} WIB

© 𝙈𝙗𝙚𝙢𝙘𝙖𝙣𝙨 𝘽𝙤𝙩𝙯`
menu = `┌❏「 STORAGEMENU 」
│◦➛ ${prefix}addsticker
│◦➛ ${prefix}liststicker
│◦➛ ${prefix}getsticker
│◦➛ ${prefix}addvn
│◦➛ ${prefix}listvn
│◦➛ ${prefix}getvn
│◦➛ ${prefix}addimage
│◦➛ ${prefix}listimage
│◦➛ ${prefix}getimage
│◦➛ ${prefix}slow
│◦➛ ${prefix}fast
│◦➛ ${prefix}tupai
│◦➛ ${prefix}reverse
│◦➛ ${prefix}tomp3
└❏ `
return sendButMessage(from, menu, wibu, [
            {
               "buttonId": ".Jadib",
               "buttonText": {
                  "displayText": "PROMO JADIBOT+OWNER"
               },
               "type": "RESPONSE"
            }
         ], {quoted:mek})
         break


case 'tagmenu':    

try {
               var pic = await ikyy.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
                var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }
wibu =`${week} ${date}
${timuu} WIB

© 𝙈𝙗𝙚𝙢𝙘𝙖𝙣𝙨 𝘽𝙤𝙩𝙯`
menu = `┌❏「 TAG MENU 」
│◦➛ ${prefix}kontag
│◦➛ ${prefix}sticktag
│◦➛ ${prefix}totag
└❏ `
return sendButMessage(from, menu, wibu, [
            {
               "buttonId": ".Jadib",
               "buttonText": {
                  "displayText": "PROMO JADIBOT+OWNER"
               },
               "type": "RESPONSE"
            }
         ], {quoted:mek})
         break
   case 'commandcadangan':
               list = []
               listmenu = [`groupmenu`,`photoxy`,`ephoto`,`randomimage`,`wibu2`,`storymenu`,`soundmenu`,`randomtext`,`islammenu`,`wibumenu`,`stickermenu`,`ownermenu`,`gamemenu`,`informationmenu`,`funmenu`,`downloadmenu`,`infomenu`,`othermenu`,`owner`,`gc`,`sewabot`]
               listmenuu = [`Menu Group`,`Photo Oky`,`Ephoto Menu`,`Random Image`,`Nsfw Anime`,`Movie&Story`,`Sound Menu`,`RandomText`,`Islam Menu`,`Wibu Menu`,`Sticker Menu`,`Owner Command`,`Game Menu`,`Informasi Menu`,`For Fun Menu`,`Downloader`,`Info Menu`,`Menu Lainnya`,`OwnerBot`,`Group RIFQI BOTZ🇮🇩`,`Rent this Bot`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'menu ke' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `K e n z y　Ｂｏｔｚ ぽ `,`  `, list)
               break
   
   case 'command':

stod = `${sender}`
listMsg = {
buttonText: 'LIST MENU',
footerText: '*_© Hana Botz_*',
description: `Hai kak @${stod.split('@')[0]}, Silahkan pilih menu disini`,
sections: [
                     {
                      "title": `${timuu} - ${week} ${weton} - ${calender}`,
rows: [
                    
                           {
                              "title": "Sewa Bot",
                              "rowId": `!iklan`,
                           },
                          {
                              "title": "Group Menu",
                              "rowId": `!groupmenu`,
                           },
                           {
                              "title": "PhotoOxy Menu",
                              "rowId": `!photoxy`,
                           },
                           {
                              "title": "Textprome menu",
                              "rowId": `!textpro`,
                           },
                           {
                              "title": "Textprome2 menu",
                              "rowId": `!textpro2`,
                           },
                           {
                              "title": "Ephoto Menu",
                              "rowId": `!ephoto`,
                           },
                           {
                              "title": "Storage Menu",
                              "rowId": `!storagemenu`,
                           },
                           {
                              "title": "TagMenu",
                              "rowId": `!tagmenu`,
                           },
                          /** {
                              "title": "Random Image Menu",
                              "rowId": `!randomimage`,
                           },
                           {
                              "title": "Nsfw Anime Menu",
                              "rowId": `!wibu2`,
                           },**/
                           {
                              "title": "Movie & Story Menu",
                              "rowId": `!storymenu`,
                           },
                           {
                              "title": "Sound Menu",
                              "rowId": `!soundmenu`,
                           },
                           {
                              "title": "Random Text Menu",
                              "rowId": `!randomtext`,
                           },
                           {
                              "title": "Islam Menu",
                              "rowId": `!islammenu`,
                           },
                          /** {
                              "title": "Wibu Menu",
                              "rowId": `!wibumenu`,
                           },**/
                           {
                              "title": "Owner Menu",
                              "rowId": `!ownermenu`,
                           },
                           {
                              "title": "Game Menu",
                              "rowId": `!gamemenu`,
                           },
                           {
                              "title": "Fun Menu",
                              "rowId": `!funmenu`,
                           },
                           {
                              "title": "Information Menu",
                              "rowId": `!informationmenu`,
                           },
                           {
                              "title": "Info Menu",
                              "rowId": `!infomenu`,
                           },
                           {
                              "title": "Sticker Menu",
                              "rowId": `!stickermenu`,
                           },
                           {
                              "title": "Download Menu",
                              "rowId": `!downloadmenu`,
                           },
                           {
                              "title": "Menu Lainnya",
                              "rowId": `!othermenu`,
                           },
                           {
                              "title": "Owner Bot",
                              "rowId": `!owner`,
                           },
                           {
                              "title": "Group Rifqi Botz",
                              "rowId": `!gc`,
                           },
                           {
                              "title": "Sewa Bot",
                              "rowId": `!sewabot`,
                           }
                        ]
                     }],
listType: 1
}
ikyy.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:fgclink})
break

//━━━━━━━━━━━━━━━[ islam menu ]━━━━━━━━━━━━━━━━━// 
           
                case 'listsurah':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'alquran':
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${setting.lolkey}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
                case 'alquranaudio':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${setting.lolkey}`)
                    await ikyy.sendMessage(from, ini_buffer, audio, { quoted: ftroli, mimetype: Mimetype.mp4Audio })
                    break
                case 'asmaulhusna':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
                case 'kisahnabi':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
                case 'jadwalsholat':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
      case 'rules':
             ikyy.sendMessage(from, rulesBot(prefix), MessageType.text, {quoted: ftroli})
             break

      
      
     
//━━━━━━━━━━━━━━━[ storagemenu ]━━━━━━━━━━━━━━━━━//
               case 'slow':
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await ikyy.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
ikyy.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftroli})
fs.unlinkSync(ran)
})
break

case 'fast':
            if (!isQuotedVideo) return reply('Reply videonya!')
            reply(mess.wait)
            encmedia3 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media3 = await ikyy.downloadAndSaveMediaMessage(encmedia3)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media3} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media3)
            if (err) return ikyy(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            ikyy.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: ftroli })
            fs.unlinkSync(ran)
            })
            break



case 'tomp3':
            if (!isQuotedVideo) return reply('```Reply videonya!```')
            reply(mess.wait)
            let encmedia2 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            let media2 = await ikyy.downloadAndSaveMediaMessage(encmedia2)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media2} ${ran}`, (err) => {
            fs.unlinkSync(media2)
            if (err) return ikyy(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            ikyy.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: ftroli })
            fs.unlinkSync(ran)
            })
            break

case 'tupai':
encmedia6 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media6 = await ikyy.downloadAndSaveMediaMessage(encmedia6)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media6} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media6)
if (err) return reply('Error!')
let hah = fs.readFileSync(ran)
ikyy.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftroli})
fs.unlinkSync(ran)
})
break
    case 'reverse':
            if (!isQuotedVideo) return ikyy('```Reply videonya!```')
            encmedia5 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media5 = await ikyy.downloadAndSaveMediaMessage(encmedia5)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media5} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media5)
            if (err) return ikyy(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            ikyy.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: ftroli })
            fs.unlinkSync(ran)
            })
            break

case 'getsticker':
case 'gets':
//Fix By M4N1K
namastc = body.slice(12)
result = fs.readFileSync(`./add/stickers/${namastc}.webp`)
ikyy.sendMessage(from, result, sticker, {quoted :mek})
break


case 'stickerlist':
case 'liststicker':
//Fix By M4N1K
teks = '*Sticker List :*\n\n'
for (let awokwkwk of setiker) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${setiker.length}*`
ikyy.sendMessage(from, teks.trim(), extendedText, { quoted: ftroli, contextInfo: { "mentionedJid": setiker } })
break


case 'addsticker':
//Fix By M4N1K
if (!isQuotedSticker) return reply('Reply stiker nya')
svst = body.slice(12)
if (!svst) return reply('Nama sticker nya apa?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await ikyy.downloadMediaMessage(boij)
setiker.push(`${svst}`)
fs.writeFileSync(`./add/stickers/${svst}.webp`, delb)
fs.writeFileSync(`./add/stik.json`, JSON.stringify(setiker))
ikyy.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: ftroli })
break


case 'addvn':


svst = body.slice(7)
if (!svst) return reply('Nama audionya apa su?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await ikyy.downloadMediaMessage(boij)
audionye.push(`${svst}`)
fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
ikyy.sendMessage(from, `Sukses Menambahkan Vn ke dalam database\nSilahkann Cek dengan cara ${prefix}listvn`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
break




case 'getvn':
   if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
namastc = body.slice(7)
buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
ikyy.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, ptt: true })
break



case 'listvn':
case 'vnlist':
teks = '*List Vn:*\n\n'
for (let awokwkwk of audionye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${audionye.length}*`
ikyy.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": audionye } })
break



case 'addimage':
if (!isQuotedImage) return reply('Reply imagenya blokk!')
svst = body.slice(10)
if (!svst) return reply('Nama imagenya apa su?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await ikyy.downloadMediaMessage(boij)
imagenye.push(`${svst}`)
fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)
fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))
ikyy.sendMessage(from, `Sukses Menambahkan image ke dalam database\nSilahkan cek dengan cara ${prefix}listimage`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
await limitAdd(sender)
break




case 'getimage':
            case 'getimg':
   if (args.length < 1) return reply('Masukan nama yang terdaftar di list image')
namastc = body.slice(10)
buffer = fs.readFileSync(`./src/image/${namastc}.jpeg`)
ikyy.sendMessage(from, buffer, image, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, caption: `Result From Database : ${namastc}.jpeg` })
break



case 'imagelist':
case 'listimage':
teks = '*List Image :*\n\n'
for (let awokwkwk of imagenye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${imagenye.length}*`
ikyy.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": imagenye } })
break



case 'addvideo':
if (!isQuotedVideo) return reply('Reply videonya blokk!')
svst = body.slice(10)
if (!svst) return reply('Nama videonya apa su?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await ikyy.downloadMediaMessage(boij)
videonye.push(`${svst}`)
fs.writeFileSync(`./src/video/${svst}.mp4`, delb)
fs.writeFileSync('./src/video.json', JSON.stringify(videonye))
ikyy.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
break


case 'getvideo':
   if (args.length < 1) return reply('Masukan nama yang terdaftar di list video')
namastc = body.slice(10)
buffer = fs.readFileSync(`./src/video/${namastc}.mp4`)
ikyy.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
break


case 'listvideo':
case 'videolist':
teks = '*List Video :*\n\n'
for (let awokwkwk of videonye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${videonye.length}*`
ikyy.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": videonye } })
break
//━━━━━━━━━━━━━━━[ game ]━━━━━━━━━━━━━━━━━// 
           
        case 'limitgame': 
        case 'balance': 
               const balance = atm.checkATMuser(sender, _uang)
               if (isPremium) return reply(`Limit Game : Unlimited\nBalance : Rp.${balance}`)
               textImg(`Limit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : Rp.${balance}`)
               break
         case 'gelud':
               if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
               if (!isGroup) return reply(mess.only.group)
               if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
               if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
               if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
               if (fs.existsSync(`./media/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`)

               gelutSkuy = setGelud(`${from}`)
               gelutSkuy.status = false
               gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
               gelutSkuy.Y = args[0].replace("@", "");
               fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
               starGame = `👑 Memulai Game Baku Hantam ??🏻

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

               ikyy.sendMessage(from, starGame, text, {quoted: ftroli, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
               gameAdd(sender, glimit)
               break
        case 'delsesigelud':
               if (!isGroup) return reply(mess.only.group)
               if (fs.existsSync('./media/' + from + '.json')) {
               fs.unlinkSync('./media/' + from + '.json')
               reply('Berhasil Menghapus Sesi Gelud')
               } else {
               reply('Tidak ada sesi yang berlangsung')
}
               break
        case 'delsesittt':
        case 'resetgame':
               if (!isGroup) return reply(mess.only.group)
               if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
               naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
               ky_ttt = naa 
               reply('Sukses Mereset Game')
               break
        case 'tictactoe':
        case 'ttt':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Tag Lawan Anda! ')
              if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
              ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
              player1 = sender
              player2 = ment[0]
              angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
              id = from
              gilir = player2
              ky_ttt.push({player1,player2,id,angka,gilir})
              ikyy.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ket : Ketik /resetgame , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
              gameAdd(sender, glimit)
              break
       case 'family100':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
              anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/family100?apikey=${setting.lolkey}`)
              reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n*Total Jawaban :* ${anu.data.result.aswer.length}\n\nWaktu : ${gamewaktu}s`)
              let anoh = anu.data.result.aswer
              let rgfds = []
              for (let i of anoh){
              let fefs = i.split('/') ? i.split('/')[0] : i
              let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
              let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
              rgfds.push(axsf.toLowerCase())
}
              game.addfam(from, rgfds, gamewaktu, family100)
              gameAdd(sender, glimit)
              break
       case 'tebakanime':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakchara?apikey=${setting.lolkey}`)
              get_result = get_result.result
              ini_image = get_result.image
              jawaban = get_result.name
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_image)
              ikyy.sendMessage(from, ini_buffer, image, { quoted: ftroli, caption: '*+* ```Tebak Anime```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s' }).then(() => {
              tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
})
              await sleep(30000)
              if (tebakanime.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete tebakanime[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
}
              gameAdd(sender, glimit)
              break
       case 'tebaklagu':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaklagu.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api.xteam.xyz/game/tebaklagu?apikey=${setting.xteamkey}&id=4mFuArYRh3SO8jfffYLSER`)
              get_result = get_result.result
              ini_audio = get_result.preview
              jawaban = get_result.judul
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_audio)
              reply('*+* ```Tebak Lagu```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s')
              ikyy.sendMessage(from, ini_buffer, audio, {quoted: ftroli}).then(() => {
              tebaklagu[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
})
              await sleep(30000)
              if (tebaklagu.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete tebaklagu[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
}
              gameAdd(sender, glimit)
              break
       case 'tebaktebakan':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.xteam.xyz/game/tebaktebakan?APIKEY=${setting.xteamkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.soal
              ikyy.sendMessage(from, '*+* ```Tebak Tebakan```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: ftroli}).then(() => {
              tebaktebakan[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
})
              await sleep(30000)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaktebakan[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
}
              gameAdd(sender, glimit)
              break
       case 'kuismath':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (kuismath.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api-yogipw.herokuapp.com/api/kuis/math`)
              ini_image = get_result.soal
              jawaban = get_result.jawaban
              ini_buffer = await getBuffer(ini_image)
              ikyy.sendMessage(from, ini_buffer, image, { quoted: ftroli, caption: '*+* ```Kuis Matematika```\n\nSilahkan jawab soal berikut ini\n\n• *Waktu* : 50s' }).then(() => {
              kuismath[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
})
              await sleep(50000)
              if (kuismath.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete kuismath[sender.split('@')[0]]
              fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
}
              gameAdd(sender, glimit)
              break
       case 'tebakgambar':
              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`http://zekais-api.herokuapp.com/tebakgambar`)
              ini_image = get_result.soal
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_image)
              ikyy.sendMessage(from, ini_buffer, image, { quoted: ftroli, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :'+kisi_kisi+'\nWaktu : 30s' }).then(() => {
              tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
})
              await sleep(30000)
              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete tebakgambar[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
}
              gameAdd(sender, glimit)
              break
       case 'siapaaku':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/siapaaku?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              ikyy.sendMessage(from, '*+* ```Tebak Siapakah Aku```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: ftroli}).then(() => {
              tebaksiapaaku[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
})
              await sleep(30000)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaksiapaaku[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
}
              gameAdd(sender, glimit)
              break
       case 'tebakkata':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/kata?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              pertanyaan = get_result.pertanyaan
              ikyy.sendMessage(from, '*+* ```Tebak Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: ftroli}).then(() => {
              tebakata[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
})
              await sleep(30000)
              if (tebakata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakata[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
}
              gameAdd(sender, glimit)
              break
       case 'tebaklirik':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/lirik?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              ikyy.sendMessage(from, '*+* ```Tebak Lirik```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: ftroli}).then(() => {
              tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
})
              await sleep(30000)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaklirik[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
}
              gameAdd(sender, glimit)
              break
      case 'tebakjenaka':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/jenaka?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              ikyy.sendMessage(from, '*+* ```Tebak Jenaka```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: ftroli}).then(() => {
              tebakjenaka[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
})
              await sleep(30000)
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakjenaka[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
}
              gameAdd(sender, glimit)
              break
       case 'kimiakuis':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakimia.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/unsurkimia?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.lambang
              pertanyaan = get_result.nama
              ikyy.sendMessage(from, '*+* ```Tebak Kimia```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: ftroli}).then(() => {
              tebakimia[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
})
              await sleep(30000)
              if (tebakimia.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakimia[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
}
              gameAdd(sender, glimit)
              break
       case 'tebakbendera':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/bendera?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.name
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.flag
              ikyy.sendMessage(from, '*+* ```Tebak Bendera```\n\n• *Bendera* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: ftroli}).then(() => {
              tebakbendera[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
})
              await sleep(30000)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakbendera[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
}
              gameAdd(sender, glimit)
              break
       case 'susunkata':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/susunkata?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              pertanyaan = get_result.pertanyaan
              ikyy.sendMessage(from, '*+* ```Susun Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: ftroli}).then(() => {
              susunkata[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
})
              await sleep(30000)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete susunkata[sender.split('@')[0]]
              fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
}
              gameAdd(sender, glimit)
              break
       case 'asahotak':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/asahotak?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.pertanyaan
              ikyy.sendMessage(from, '*+* ```Asah Otak```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: ftroli}).then(() => {
              asahotak[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
})
              await sleep(30000)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete asahotak[sender.split('@')[0]]
              fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
}
              gameAdd(sender, glimit)
              break
       case 'caklontong':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/caklontong2?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              ikyy.sendMessage(from, '*+* ```Caklontong```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: ftroli}).then(() => {
              caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
})
              await sleep(30000)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete caklontong[sender.split('@')[0]]
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
}
              gameAdd(sender, glimit)
              break
       case 'slot':
              const sotoy = ['🍊 : 🍒 : 🍐','🍒 : ?? : 🍊','?? : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
              somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]
              somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]
              somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]
              if (somtoyy  == '🍌 : 🍌 : 🍌') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍒 : 🍒') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🔔 : ?? : 🔔') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍐 : 🍐') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🍇 : 🍇 : 🍇') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
}
              break
       case 'suit': //nyolong dari zenz
              if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              reply(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
              } else {
              reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
              } else {
              reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
              break
//━━━━━━━━━━━━━━━[ sewa ]━━━━━━━━━━━━━━━━━// 
           
       case 'sewa':
              if (!isGroup)return reply(mess.only.group)
              if (!isOwner) return reply(mess.only.owner)
              if (args.length < 1) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
              if (args[0].toLowerCase() === 'add'){
            _sewa.addSewaGroup(from, args[1], sewa)
              reply(`Success`)
              } else if (args[0].toLowerCase() === 'del'){
              sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
              fs.writeFileSync('./database/group/sewa.json', JSON.stringify(sewa))
              reply(mess.success)
              } else {
              reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
}
              break
       case 'sewalist': 
       case 'listsewa':
              let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
              for (let i of sewa){
              let cekvipp = ms(i.expired - Date.now())
              txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
}
              reply(txtnyee)
              break
       case 'sewacheck':
       case 'ceksewa': 
              if (!isGroup) return reply(mess.only.group)
              if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
              let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
              let premiumnya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
              reply(premiumnya)
              break
//━━━━━━━━━━━━━━━[ premium ]━━━━━━━━━━━━━━━━━// 
           
       case 'premium': 
              if (!isOwner) return reply(mess.only.owner)
              if (args[0] === 'add') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid

              premium.addPremiumUser(mentioned[0], args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
                        
              } else {
                            
              premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
}
              } else if (args[0] === 'del') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            _premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
              } else {
            _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
}
              } else {
              reply(mess.wrongFormat)
}
              break
       case 'premiumcheck':
       case 'cekpremium': 
              if (!isPremium) return reply(mess.only.premium)
              const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
              reply(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
              break
       case 'listprem':
       case 'listpremium':          
              let txt = `「 *PREMIUM USER LIST* 」\n\n`
              let men = [];
              for (let i of _premium){
              men.push(i.id)
              const checkExp = ms(i.expired - Date.now())
              txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
}
              mentions(txt, men, true)
              break
       case 'belipremium':
       case 'buypremium':
              gopeynya = 'https://i.top4top.io/p_206199q4w4.jpg'
              teksnya = `*── 「 PRICE LIST PREMIUM 」 ──*

*Tarif Premium User adalah 5k Perbulan*
*Keuntungan Premium Diantaranya:*
♲ *Bebas memakai fitur premium*
♲ *Dapat Informasi Lebih dulu akan Update, Nomor Bot Baru (Jika Terbanned), dan Lainnya*
jika minat ketik !owner`
ikyy.sendMessage(from, await getBuffer(gopeynya), image, {quoted: ftroli, caption: teksnya })
break

//━━━━━━━━━━━━━━━[ sewabot ]━━━━━━━━━━━━━━━━━// 

case 'iklan':
     gopeynya = 'https://telegra.ph/file/20f0d45b330ddcdc2f504.jpg'
     teksnya = `sewa mbemcans botz
permanen : rp. 10.000`
              ikyy.sendMessage(from, await getBuffer(gopeynya), image, {quoted: freply, caption: teksnya, thumbnail: Buffer.alloc(0) })
break
//------------------< Sticker Cmd >-------------------
       case 'addcmd': 
       case 'setcmd':
             
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              textImg("Done!")
              } else {m
              reply('tag stickenya')
}
              break
       case 'delcmd':
             
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
              textImg("Done!")
              break
       case 'listcmd':
              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
//------------------< Downloader/Search/Anime >-------------------
       
       case 'igdl': 
       case 'instagram':
       case 'instagramdownload':
              if (!q) return reply('Link Yang Mana? ')
              if (!q.includes('instagram')) return reply(mess.error.Iv)
              reply(mess.wait)
              anu = await igDownloader(`${q}`)
             .then((data) => { sendMediaURL(from, data.result.link, data.result.desc, mek) })
             .catch((err) => { reply(String(err)) })
              break
       case 'scplay': 
       case 'soundcloud':
              if (!q) return reply('Link Yang Mana? ')
              if (!q.includes('soundcloud')) return reply(mess.error.Iv)
              reply(mess.wait)
              anu = await fetchJson(`https://api.lolhuman.xyz/api/soundcloud?apikey=${setting.lolkey}&url=${q}`)
             .then((data) => { sendMediaURL(from, data.result, mek) })
             .catch((err) => { reply(String(err)) })
              break
       case 'image':
       case 'gimage':
       case 'googleimage':
              if (args.length < 1) return reply('Apa Yang Mau Dicari?')
              reply(mess.wait)
              teks = args.join(' ')
              res = await googleImage(teks, google)
              function google(error, result){
              if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: ftroli, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
             break
      case 'ytmp3':
            if (!isPremium) return reply(mess.only.premium)
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${res[0].judul}\`\`\`
\`\`\`▢ Ext : MP3\`\`\`
\`\`\`▢ Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: ftroli}).then((lalu) => {
            sendFileFromUrl(res[0].link, document, {quoted: ftroli, mimetype: 'audio/mp3', filename: res[0].output})
})
            break
     case 'ytmp4':
            if (!isPremium) return reply(mess.only.premium)
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${res[0].judul}\`\`\`
\`\`\`▢ Ext : MP4\`\`\`
\`\`\`▢ Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: ftroli}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted: ftroli, mimetype: 'video/mp4', filename: res[0].output})
})
            break
     case 'ytmp4hd':
     case 'ythd':
            if (!isPremium) return reply(mess.only.premium)
            if (args.length === 0) return reply(`Kirim perintah !ytmp4 _linkYt_*`)
            let isLinkks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinkks2) return reply(mess.error.Iv)
            try {
            reply(mess.wait)
            ythd(args[0])
           .then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res
            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
           .then((a) => {
            if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Kualitas* : 720p\`\`\`
\`\`\`▢ Size* : ${filesizeF}\`\`\`
\`\`\`▢ Link* : ${a.data}\`\`\`

_Untuk durasi lebih dari batas disajikan dalam Bentuk link_`)

            const captionsYtmp4 = 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Kualitas : 720p\`\`\`
\`\`\`▢ Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

              sendMediaURL(from, thumb, captionsYtmp4)
              sendMediaURL(from, dl_link,`nih kak`).catch(() => reply(mess.error.api))
})
})
              } catch (err) {
              reply(`eror`)
}
              break
        case 'google':
              if (!q) return reply(mess.wrongFormat)
              ss = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=f307ca1dc9824ae89caa976435c03178&url=http://www.google.com/search?q=${q}&oq={q}&aqs=chrome..69i57j0i433i512l2j0i512l2.858j0j4&client=ms-android-oppo&sourceid=chrome-mobile&ie=UTF-8`)
              reply(mess.wait)
              if(q == undefined || q == ' ') return reply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
              ggs({ 'query': q }).then(results => {
              vars = `_*Hasil Pencarian : ${q}*_\n`
              for (let i = 0; i < results.length; i++) {
              vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
} 
               ikyy.sendMessage(from, ss, image, {thumbnail: Buffer.alloc(0), caption: vars, quoted : mek})
               }).catch(e => {
               console.log(e)
               reply(`${e}`)
})
               break
        case 'mediafire':
               if (!isPremium) return reply(mess.only.premium)
               if (args.length < 1) return reply('Link Nya Mana? ')
               if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
               reply(mess.wait)
               teks = args.join(' ')
               res = await mediafireDl(teks)
               result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *MEDIAFIRE DOWNLOAD*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Nama : ${res[0].nama}\`\`\`
\`\`\`▢ Ukuran : ${res[0].size}\`\`\`
\`\`\`▢ Link : ${res[0].link}\`\`\`

_*Tunggu Proses Upload Media......*_`
             reply(result)
             sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: ftroli})
             break
       
       case 'tt':
if (!q) return reply('Linknya?')
if (!q.includes('tiktok')) return
reply(mess.error.Iv)
reply(mess.wait)
anu = await TiktokDownloader(`${q}`)
memek ='hi.mp4'
kntl = 'hasil.mp4'
fs.writeFileSync(input,await getBuffer(data.result.watermark))
exec(`ffmpeg -i ${memek} -b:a 192K -vn  ${kntl}`,(err,res)=> {
if (err) return reply(`${err}`)
ikyy.sendMessage(from,{url:'./'+memek},audio,{mimetype:'audio/mpeg'})
})
       
       case 'ttdl':
       case 'tiktokdl':
       case 'tiktoknowm':
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${setting.lolkey}&url=${q}`)
              result = `⚜️ *Nickname*: ${data.result.author.nickname}\n❤️ *Like*: ${data.result.statistic.diggCount}\n💬 *Komentar*: ${data.result.statistic.commentCount}\n🔁 *Share*: ${data.result.statistic.shareCount}\n🎞️ *Views*: ${data.result.statistic.playCount}\n📑 *Desc*: ${data.result.title}`
              buttons = [{buttonId: `${prefix}tt1 ${q}`,buttonText:{displayText: `▶️ Video`},type:1},{buttonId:`${prefix}ttaudio ${q}`,buttonText:{displayText:'🎵 Audio'},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result.thumbnail))
              imageMsg = ( await ikyy.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await ikyy.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
              ikyy.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
      case 'tt1': 

             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break

      case 'ttaudio': 
      case 'tiktokmusic': 
      case 'tiktokaudio':
              reply(mess.wait)
 anu = await fetchJson(`https://megayaa.herokuapp.com/api/tiktod/?url=${q}`)
ikyy.sendMessage(from, {url: anu.result.audio } , audio, { mimetype: Mimetype.mp4Audio, quoted: freply })
break

  case 'xnxxsearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=genbotkey&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xnxx':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=genbotkey&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await ikyy.sendMessage(from, thumbnail, image, { quoted: ftroli , caption: ini_txt })
                    break

              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://ikyy-chan02.github.io`)
              
      case 'ttaudio': 
      case 'tiktokmusic': 
      case 'tiktokaudio':
              reply(mess.wait)
             if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
             ini_link = args[0]
             get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${setting.lolkey}&url=${ini_link}`)
             ikyy.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: ftroli })
             break
      case 'fb':
      case 'facebook':
             if (!q) return
             reply(mess.wait)
             try {
             anu = await fetchJson(`https://zenzapi.xyz/api/downloader/facebook?url=${args[0]}&apikey=0963ec745dde`)
             sendMediaURL(from, anu.result.hd)
             } catch (e) {
             console.log(e)
             reply(`${e}`)
}
             break
      case 'twitter':
             if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
             if (!q) return reply('Linknya?')
             ten = args[0]
             var res = await twitterGetUrl(`${ten}`)
            .then(g => {
             ren = `${g.download[2].url}`
             sendMediaURL(from,ren,'Done')
})
             break
      case 'brainly':
             reply(mess.wait)
             brainly(args.join(" ")).then(res => {
             hmm = '────────────\n'
             for (let Y of res.data) {
             hmm += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n───────────\n`
}
             reply(hmm)
             console.log(res)
})
             break
      case 'ssweb':
             if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/`)
             reply(mess.wait)
             ini_link = args[0]
             ini_buffer = await getBuffer(`https://hardianto-chan.herokuapp.com/api/tools/ssweb?url=${ini_link}&apikey=hardianto`)
             await ikyy.sendMessage(from, ini_buffer, image, { quoted: ftroli })
             break

        case 'playy':
case 'lagu':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
*Judul :* ${res.all[0].title}
*ID Video :* ${res.all[0].videoId}
*Diupload Pada :* ${res.all[0].ago}
*Views :* ${res.all[0].views}
*Durasi :* ${res.all[0].timestamp}
*Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
/////////////sendFileFromUrl(res.all[0].image, image, {quoted: ftroli, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: ftroli, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botname}* 
*Judul :* ${res.all[0].title}
*ID Video :* ${res.all[0].videoId}
*Diupload Pada :* ${res.all[0].ago}
*Views :* ${res.all[0].views}
*Durasi :* ${res.all[0].timestamp}
*Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: ftroli, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: ftroli, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'play2':   
  if (args.length < 1) return reply('*Masukan judul nya?*')
                reply('Loading.... ')
play = args.join(" ")
anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=apivinz`)
if (anu.error) return reply(anu.error)
infomp3 = `*「 PLAY VIDEO 」*

Judul : ${anu.result.title}
Source : ${anu.result.source}

*[Wait] Tunggu Sebentar..*`
///////buffer = await getBuffer(anu.result.thumbnail)
buffer1 = await getBuffer(anu.result.url_video)
ikyy.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:mek, caption: 'Nih Gan'})
break  

case 'ytdl':
case 'play':
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://ikyy-chan02.github.io`)
              if (!q) return reply('Linknya?')
res = await yts(q)
   let thumbInfo = ` 
*Youtube Download*
*Judul :* ${res.all[0].title}
*ID Video :* ${res.all[0].videoId}
*Diupload Pada :* ${res.all[0].ago}
*Views :* ${res.all[0].views}
*Durasi :* ${res.all[0].timestamp}
*Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*Silahkan pilih media yang akan di download*
`
buttons = [{buttonId:`${prefix}play2 ${q}`,buttonText:{displayText:'🎥VIDEO'},type:1},{buttonId:`${prefix}playy ${q}`,buttonText:{displayText:'🎵AUDIO'},type:1}]

imageMessage = (await ikyy.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage

buttonsMessage = {contentText: thumbInfo,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}

prep = await ikyy.prepareMessageFromContent(from,{buttonsMessage},{})

ikyy.relayWAMessage(prep)
break

          case 'lirik':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=IkyOgiwara&query=${query}`)
                    reply(get_result.result)
                    
               break
         case 'pinterest':
   if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                 reply (mess.wait)
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${setting.lolkey}&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    ikyy.sendMessage(from, ini_buffer, image, { caption: `Neh`, thumbnail: Buffer.alloc(0) })
                    break
        case 'shopee':
               try {
               if (args.length == 0) return reply(`Kirim perintah *${prefix}shopee [ query ]*\nContoh : ${prefix}shopee sepatu`)
               query = args.join(" ")
               reply(mess.wait)
               get_data = await fetchJson(`https://api.zeks.xyz/api/shopee?apikey=${setting.zekskey}&q=${query}`)
               get_data = get_data.data
               teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *SHOPEE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for(let i = 0; i < get_data.length; i++) {
teks += `\`\`\`▢ Nama : ${get_data[i].name}\`\`\`
\`\`\`▢ Harga : ${get_data[i].harga}\`\`\`
\`\`\`▢ Terjual : ${get_data[i].terjual}\`\`\`
\`\`\`▢ Lokasi : ${get_data[i].location}\`\`\`
\`\`\`▢ Deskripsi*: ${get_data[i].desc}\`\`\`
\`\`\`▢ Stok : ${get_data[i].stock}\`\`\`
\`\`\`▢ Informasi : ${get_data[i].information}\`\`\`
\`\`\`▢ Link : ${get_data[i].url}\`\`\``
}
              ini_buffer = await getBuffer(get_data[0].img_detail[0])
              ikyy.sendMessage(from, ini_buffer, image, { quoted: ftroli, caption: teks })
              } catch {
              reply(`Maaf produk ${query} tidak ditemukan`)
}
              break
       case 'playstore':
              try {
              if (args.length == 0) return reply(`Kirim perintah *${prefix}playstore [ apk ]*\nContoh : ${prefix}playstore pubg`)
              query = args.join(" ")
              reply(mess.wait)
              get_result = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=${setting.zekskey}&q=${query}`)
              get_result = get_result.result
              teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *PLAYSTORE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for(let i = 0; i < get_result.length; i++) {
teks += `\`\`\`▢ Title : ${get_result[i].title}\`\`\`
\`\`\`▢ Harga : ${get_result[i].price}\`\`\`
\`\`\`▢ Rate : ${get_result[i].rating}\`\`\`
\`\`\`▢ Link : ${get_result[i].url}\`\`\`

`
}
              ini_buffer = await getBuffer(get_result[0].thumb)
              ikyy.sendMessage(from, ini_buffer, image, { quoted: ftroli, caption: teks })
              } catch {
              reply(`Maaf aplikasi ${query} tidak ditemukan`)
}
              break
       case 'yts':
       case 'ytsearch':
              if (!q) return reply(mess.wrongFormat)
              reply(mess.wait)
              try {
              res = await yts(q)
              a = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE SEARCH*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for (let i of res.all) {
a += `\`\`\`▢ Title : ${i.title}\`\`\`
\`\`\`▢ Views : ${i.views}\`\`\`
\`\`\`▢ Upload : ${i.ago}\`\`\`
\`\`\`▢ Durasi : ${i.timestamp}\`\`\`
\`\`\`▢ Channel : ${i.author.name}\`\`\`
\`\`\`▢ Link : ${i.url}\`\`\``
}
               b = a.trim()
               sendFileFromUrl(res.all[0].image, image, {quoted: ftroli, caption: b})
               } catch (e) {
               console.log(e)
               reply(`${e}`)
}
               break
       case 'tourl':
               if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               reply(mess.wait)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               owgi = await ikyy.downloadMediaMessage(boij)
               res = await uploadImages(owgi)
               reply(res)
               } else {
               reply('kirim/reply gambar/video')
}
               break
       case 'imgtourl':
       case 'img2url':
               reply(mess.wait) 
               var imgbb = require('imgbb-uploader')
               var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               var media = await  ikyy.downloadAndSaveMediaMessage(encmedia)       
               imgbb('39d895963468b814fad0514bd28787e2', media)
              .then(data => {
               var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
               ibb = fs.readFileSync(media)
               ikyy.sendMessage(from, ibb, image, { quoted: ftroli, caption: caps})
})
              .catch(err => {
               throw err
})
               break
         case 'asupan': // shansekai                
               if (!isPremium) return reply(mess.only.premium)
               reply(mess.wait)
               asupan()
              .then(async (body) => {
               asupann = body.split('\n')
               asupanx = asupann[Math.floor(Math.random() * asupann.length)]
               sendMediaURL(from, `http://sansekai.my.id/ptl_repost/${asupanx}`, 'Follow IG: https://www.instagram.com/ptl_repost untuk mendapatkan asupan lebih banyak.')
               console.log('Success sending video!')
})
              .catch(async (err) => {
               console.log(err)
               reply(`${err}`)
})
               break
        case 'nulis':
        case 'tulis':
               if (args.length < 1) return reply('Yang mau di tulis apaan?')
               teks = args.join(' ')
               reply(mess.wait)
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return reply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               ikyy.sendMessage(from, buff, image, {quoted: ftroli, caption: mess.success}).catch(e => {
               return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
               break
               
//━━━━━━━━━━━━━━━[ PAYMENT & DONE ]━━━━━━━━━━━━━━━━━//      
    
               case 'p':
  p (`*STATUS PESANAN*


STATUS       :DIPROSES
TANGGAL    : ${date}
WAKTU        : ${time2}

    *TUNGGU YA KAK*`)
    break
    
    case 'd':
    d1 (`*STATUS PESANAN*:


STATUS       :DONE
TANGGAL    : ${date}
WAKTU        : ${time2}

  *TERIMA KASIH TELAH ORDER*
          >>NEXT ORDER<<`)
     break
     
     
  case 'done':
  fakeitem (`*STATUS PESANAN*:


STATUS       :DONE
TANGGAL    : ${date}
WAKTU        : ${time2}

  *TERIMA KASIH TELAH ORDER*
          >>NEXT ORDER<<`)
          break
               
              


case 'sewabot':
try {
               var pic = await ikyy.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
                var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }
              gopeynya = `Halo Kak ${pushname} Berikut List Sewa Bot by RIFQII STORE 
  
┏━━⬣ PRICE LIST 1
┃⬡ SEWA 4K/MINGGU
┃⬡ SEWA 6K/BLN
┃⬡ PERMANEN 10K
┗━━⬣

┏━━⬣ PRICE LIST 2
┃⬡ JOIN MURID BOT 15K
┃⬡ JADI BOT + OWNER 15k(PROMO)
┗━━⬣

┏━━⬣ MINAT? PM
┃⬡ wa.me/6289636634511
┃⬡ Yt RIFQI BOTZ
┗━━⬣
`
buff = `${week} ${date}
${timuu} WIB`
  ikyy.sendMessage(from, { contentText: `${gopeynya}`, footerText: `${buff}`, buttons: [{ buttonId: `!owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `!payment`, buttonText: { displayText: 'PAYMENT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: await getBuffer (pic), contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
              break
       case 'gopay':
       
       
              gopeynya = 'https://telegra.ph/file/a50622d472ab98ee5dcc9.jpg'
     teksnya = `
${ucapanWaktu} Kak ${pushname}

•> Nama : ${pushname}
•> Tanggal : ${date}
•> Hari : ${week}
•> Waktu : ${timuu} WIB

PAYMENT GOPAY

QR CODE : SCAN FOTO DI ATAS
AN: RIFQII STORE

BAYAR SESUAI HARGA YA KAK`

              ikyy.sendMessage(from, await getBuffer(gopeynya), image, {quoted: freply, caption: teksnya })
              break
case 'pulsa':
       
gopeynya = 'https://telegra.ph/file/8aa0643bc8b0601cd6392.jpg'
     teksnya = `
${ucapanWaktu} Kak ${pushname}

•> Nama : ${pushname}
•> Tanggal : ${date}
•> Hari : ${week}
•> Waktu : ${timuu} WIB

PAYMENT PULSA

NOMOR : 085643112659
KARTU : INDOSAT

BAYAR SESUAI HARGA YA KAK`

              ikyy.sendMessage(from, await getBuffer(gopeynya), image, {quoted: freply, caption: teksnya })
              break
                         
      case 'payment':
               list = []
               listmenu = [`gopay`,`dana`,`pulsa`,`qris`]
               listmenuu = [`BAYAR VIA GOPAY`,`BAYAR VIA DANA`,`BAYAR VIA PULSA`,`BAYAR VIA QRIS`,]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'payment ke' + nombor++,
    rows: [
       {
        title: `${listmenuu[startnum++]}`,
        description: ``,
        rowId: `${prefix}${x}`
      }
    ]
   }
        list.push(yy)
           }
               listmsg(from, `hai kak ${pushname} \n\nSilahkan pilih metode pembayaran di bawah ya !`,`  `, list)
               break
               
case 'dana':

              gopeynya = 'https://telegra.ph/file/f5a9b6bc6aada7dd5a5e4.jpg'
     teksnya = `
${ucapanWaktu} Kak ${pushname}

•> Nama : ${pushname}
•> Tanggal : ${date}
•> Hari : ${week}
•> Waktu : ${timuu} WIB

PAYMENT DANA

NOMOR : 088238487765
QR CODE : SCAN FOTO DI ATAS
AN: ZAMRONI

BAYAR SESUAI HARGA YA KAK `

              ikyy.sendMessage(from, await getBuffer(gopeynya), image, {quoted: freply, caption: teksnya })
              break
    case 'qris':


gopeynya = 'https://telegra.ph/file/6481d81101c85a40a98e5.jpg'
     teksnya = `
${ucapanWaktu} Kak ${pushname}

•> Nama : ${pushname}
•> Tanggal : ${date}
•> Hari : ${week}
•> Waktu : ${timuu} WIB

PAYMENT QRIS

QR CODE : SCAN FOTO DI ATAS
AN: RIFQII STORE

BAYAR SESUAI HARGA YA KAK`

              ikyy.sendMessage(from, await getBuffer(gopeynya), image, {quoted: freply, caption: teksnya })
              break
//━━━━━━━━━━━━━━━[ sound ]━━━━━━━━━━━━━━━━━//                    
       case 'sound1':
satu = fs.readFileSync('./mp3/sound1.mp3');
ikyy.sendMessage(from, satu, MessageType.audio, {quoted: fvn, mimetype: 'audio/mp4', ptt:true})
break

case 'sound2':
dua = fs.readFileSync('./mp3/sound2.mp3');
ikyy.sendMessage(from, dua, MessageType.audio, {quoted: fvn, mimetype: 'audio/mp4', ptt:true})
break

case 'sound3':
tiga = fs.readFileSync('./mp3/sound3.mp3');
ikyy.sendMessage(from, tiga, MessageType.audio, {quoted: fvn, mimetype: 'audio/mp4', ptt:true})
break

case 'sound4':
empat = fs.readFileSync('./mp3/sound4.mp3');
ikyy.sendMessage(from, empat, MessageType.audio, {quoted: fvn, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./mp3/sound5.mp3');
ikyy.sendMessage(from, lima, MessageType.audio, {quoted: fvn, mimetype: 'audio/mp4', ptt:true})
break

case 'sound6':
enam = fs.readFileSync('./mp3/sound6.mp3');
ikyy.sendMessage(from, enam, MessageType.audio, {quoted: fvn, mimetype: 'audio/mp4', ptt:true})
break

case 'sound7':
tujuh = fs.readFileSync('./mp3/sound7.mp3');
ikyy.sendMessage(from, tujuh, MessageType.audio, {quoted: fvn, mimetype: 'audio/mp4', ptt:true})
break

case 'sound8':
lapan = fs.readFileSync('./mp3/sound8.mp3');
ikyy.sendMessage(from, lapan, MessageType.audio, {quoted: fvn, mimetype: 'audio/mp4', ptt:true})
break

case 'sound9':
bilan = fs.readFileSync('./mp3/sound9.mp3');
ikyy.sendMessage(from, bilan, MessageType.audio, {quoted: fvn, mimetype: 'audio/mp4', ptt:true})
break

case 'sound10':
puluh = fs.readFileSync('./mp3/sound10.mp3');
ikyy.sendMessage(from, puluh, MessageType.audio, {quoted: fvn, mimetype: 'audio/mp4', ptt:true})
break     

case 'sound11':
bilan = fs.readFileSync('./mp3/sound11.mp3');
ikyy.sendMessage(from, bilan, MessageType.audio, {quoted: fvn, mimetype: 'audio/mp4', ptt:true})
break

case 'sound10':
puluh = fs.readFileSync('./mp3/sound12.mp3');
ikyy.sendMessage(from, puluh, MessageType.audio, {quoted: fvn, mimetype: 'audio/mp4', ptt:true})
break     

case 'sound11':
lima = fs.readFileSync('./mp3/sound11.mp3');
ikyy.sendMessage(from, lima, MessageType.audio, {quoted: fvn, mimetype: 'audio/mp4', ptt:true})
break

case 'sound12':
enam = fs.readFileSync('./mp3/sound12.mp3');
ikyy.sendMessage(from, enam, MessageType.audio, {quoted: fvn, mimetype: 'audio/mp4', ptt:true})
break

case 'sound13':
tujuh = fs.readFileSync('./mp3/sound13.mp3');
ikyy.sendMessage(from, tujuh, MessageType.audio, {quoted: fvn, mimetype: 'audio/mp4', ptt:true})
break

case 'sound14':
lapan = fs.readFileSync('./mp3/sound14.mp3');
ikyy.sendMessage(from, lapan, MessageType.audio, {quoted: fvn, mimetype: 'audio/mp4', ptt:true})
break

case 'sound15':
bilan = fs.readFileSync('./mp3/sound15.mp3');
ikyy.sendMessage(from, bilan, MessageType.audio, {quoted: fvn, mimetype: 'audio/mp4', ptt:true})
break

case 'sound16':
satu = fs.readFileSync('./mp3/sound16.mp3');
ikyy.sendMessage(from, satu, MessageType.audio, {quoted: fvn, mimetype: 'audio/mp4', ptt:true})
break

case 'sound17':
dua = fs.readFileSync('./mp3/sound17.mp3');
ikyy.sendMessage(from, dua, MessageType.audio, {quoted: fvn, mimetype: 'audio/mp4', ptt:true})
break

case 'sound18':
tiga = fs.readFileSync('./mp3/sound18.mp3');
ikyy.sendMessage(from, tiga, MessageType.audio, {quoted: fvn, mimetype: 'audio/mp4', ptt:true})
break

case 'sound19':
empat = fs.readFileSync('./mp3/sound19.mp3');
ikyy.sendMessage(from, empat, MessageType.audio, {quoted: fvn, mimetype: 'audio/mp4', ptt:true})
break
case 'sound20':
lima = fs.readFileSync('./mp3/sound20.mp3');
ikyy.sendMessage(from, lima, MessageType.audio, {quoted: fvn, mimetype: 'audio/mp4', ptt:true})
break

case 'sound21':
enam = fs.readFileSync('./mp3/sound21.mp3');
ikyy.sendMessage(from, enam, MessageType.audio, {quoted: fvn, mimetype: 'audio/mp4', ptt:true})
break

case 'sound22':
tujuh = fs.readFileSync('./mp3/sound22.mp3');
ikyy.sendMessage(from, tujuh, MessageType.audio, {quoted: fvn, mimetype: 'audio/mp4', ptt:true})
break

case 'sound23':
lapan = fs.readFileSync('./mp3/sound23.mp3');
ikyy.sendMessage(from, lapan, MessageType.audio, {quoted: fvn, mimetype: 'audio/mp4', ptt:true})
break
//━━━━━━━━━━━━━━━[ TAG MENU ]━━━━━━━━━━━━━━━━━//

case 'kontag':
if (!isGroup) return reply(mess.only.group)

            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            ikyy.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'sticktag':

            if (!isGroup) return reply(mess.only.group)
             
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ikyy.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ikyy.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            ikyy.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
    case 'totag':
if (!isGroup) return reply(mess.only.group)
           
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ikyy.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ikyy.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            ikyy.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ikyy.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ikyy.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            ikyy.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ikyydownloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ikyygroupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            mimetype : 'audio/mp4',
            ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            ikyy.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ikyydownloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ikyygroupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            ikyy.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break




//━━━━━━━━━━━━━━━[ nyolong di yuzzu ]━━━━━━━━━━━━━━━━━//         
case 'listgc':
case 'gclist':
case 'listgroup':
                case 'listgrup':
                case 'listgrop':
                case 'gruplist':
                case 'groplist':
                case 'grouplist':
  const txs = ikyy.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`- ${ikyy.getName(v.jid)}\n${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
  reply(txs)
  break
  
  
  case 'listpc':
  cpcp = await getpc(totalchat)
  teks = `*L I S T  P E R S O N A L  C H A T*\nTOTAL PC: ${cpcp.length}\n\n`
  for(let i=0; i<cpcp.length; i++){
conts = mek.key.fromMe ? mek.user.jid : ikyy.contacts[cpcp[i]] || {notify: jid.replace(/@.+/, '')}
pushnama = ikyy.contacts[cpcp[i]] != undefined ? ikyy.contacts[cpcp[i]].vname || ikyy.contacts[cpcp[i]].notify : undefined
teks += `• Nama : ${pushnama}\n• Tag : @${cpcp[i].split("@")[0]}\n• Wa.me : wa.me/${cpcp[i].split("@")[0]}\n\n----------------------------------\n\n`
}
mentions( teks, cpcp, true)
break 

break

//Navi
          case 'unpin':
                if (!isOwner) return  reply(mess.only.owner)
                ikyy.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
            case 'pin':
                if (!isOwner) return  reply(mess.only.owner)
                ikyy.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
             case 'archive':
                if (!isOwner) return  reply(mess.only.owner)
                reply('*okey wait..*')
                console.log('succes archive chat = ' + from)
                await sleep(3000)
                ikyy.modifyChat(from, ChatModification.archive)
                break
            case 'unreadall':
                if (!isOwner) return  reply(mess.only.owner)
                var chats = await ikyy.chats.all()
                chats.map( async ({ jid }) => {
                await ikyy.chatRead(jid, 'unread')
                    })
    var teks = `\`\`\`Successfully unread ${chats.length} chats !\`\`\``
    await ikyy.sendMessage(from, teks, text, {quoted: ftroli})
    console.log(chats.length)
        break
            case 'readall':
                if (!isOwner) return  reply(mess.only.owner)
                var chats = await ikyy.chats.all()
                chats.map( async ({ jid }) => {
                await ikyy.chatRead(jid)
                })
var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
        await ikyy.sendMessage(from, teks, text, {quoted: ftroli})
console.log(chats.length)
break
            case 'unarchiveall':
                if (!isOwner) return  reply(mess.only.owner)
                reply('*succes unarchive all chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await ikyy.chats.all()
                for (let _ of anu) {
                ikyy.modifyChat(_.jid, ChatModification.unarchive)
                }
                break
                
       case 'closetime':
if (!isGroup) return reply(mess.only.group)
             if (!isGroupAdmins) return reply(mess.only.admin)
             if (!isBotGroupAdmins) return reply(mess.only.admin)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
ikyy.groupSettingChange (from, GroupSettingChange.messageSend, true);
}, timer)
break
case 'opentime':
if (!isGroup) return reply(mess.only.group)
             if (!isGroupAdmins) return reply(mess.only.admin)
             if (!isBotGroupAdmins) return reply(mess.only.admin)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
ikyy.groupSettingChange (from, GroupSettingChange.messageSend, false);
}, timer)
break         
case 'tts':
if (args.length < 1) return reply(`kode bahasanya apa?\nketik ${prefix}kodebahasa untuk melihat list kode bahasa\n contoh ${prefix}tts id p`)
  try{
        if (args.length > 1) {
        const gtts = require('./lib/gtts')(args[0])
        if (args.length < 2) return ikyy.sendMessage(from, 'Textnya mana gan?', text, {quoted: ftroli})
        ngab = budy.slice(7)
        ranm = getRandom('.mp3')
        rano = getRandom('.ogg')
        ngab.length > 600
        ? reply('Textnya kebanyakan gan')
        : gtts.save(ranm, ngab, function() {
            exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply('Gagal gan:(')
                ikyy.sendMessage(from, buff, audio, {quoted:mek,ptt:true})
                fs.unlinkSync(rano)
            })
        })
} else if ( args.length === 1 ){
ngab = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
const gtts = require('./lib/gtts')(args[0])
        ranm = getRandom('.mp3')
        rano = getRandom('.ogg')
        gtts.save(ranm, ngab, function() {
            exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply(mess.error.api)
                ikyy.sendMessage(from, buff, audio, {quoted:mek,ptt:true})
                fs.unlinkSync(rano)
            })
        })
}
} catch (e){
reply(mess.error.api)
}
break 
case 'kodebahasa':
reply(`af: Afrikaans
  sq: Albanian
  ar: Arabic
  hy: Armenian
  ca: Catalan
  zh: Chinese
  zh-cn: Chinese (Mandarin/China)
  zh-tw: Chinese (Mandarin/Taiwan)
  zh-yue: Chinese (Cantonese)
  hr: Croatian
  cs: Czech
  da: Danish
  nl: Dutch
  en: English
  en-au: English (Australia)
  en-uk: English (United Kingdom)
  en-us: English (United States)
  eo: Esperanto
  fi: Finnish
  fr: French
  de: German
  el: Greek
  ht: Haitian Creole
  hi: Hindi
  hu: Hungarian
  is: Icelandic
  id: Indonesian
  it: Italian
  ja: Japanese
  ko: Korean
  la: Latin
  lv: Latvian
  mk: Macedonian
  no: Norwegian
  pl: Polish
  pt: Portuguese
  pt-br: Portuguese (Brazil)
  ro: Romanian
  ru: Russian
  sr: Serbian
  sk: Slovak
  es: Spanish
  es-es: Spanish (Spain)
  es-us: Spanish (United States)
  sw: Swahili
  sv: Swedish
  ta: Tamil
  th: Thai
  tr: Turkish
  vi: Vietnamese
  cy: Welsh`)
  break
case 'q': 
    if (!m.quoted) return reply('reply pesan!')
    let qse = ikyy.serializeM(await m.getQuotedObj())
    if (!qse.quoted) return reply('pesan yang anda reply tidak mengandung reply!')
    await qse.quoted.copyNForward(m.chat, true)
break

  //==========================================BATES NGAB==========================================\\
//INFORMATION MENU

                 case 'jadwatv':
if (args.length < 1) return reply(`Channelnya mana?`)
reply(mess.wait) 
                chnl = args[0]
                suu = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/${chnl}?apikey=${setting.lolkey}`)
                cok = suu.result
                txt = `Jadwal TV ${chnl.toUpperCase()}\n`
                for (var nj in cok) {
                txt += `${nj} - ${cok[nj]}\n`
                }
                reply(txt)
                break
                
                case 'covidglobal':
                //[❗] case by DappaGanz
reply(mess.wait)
anu = await fetchJson(`https://zahirr-web.herokuapp.com/api/covidworld?apikey=zahirgans`)
teks = `Total Cases : ${anu.result.totalCases}\nRecovered : ${anu.result.recovered}\nDeaths : ${anu.result.deaths}\nActive Cases : ${anu.result.activeCases}\nClosed Cases : ${anu.result.closedCases}\nLast Update : ${anu.result.lastUpdate}`
ikyy.sendMessage(from, teks, text, {quoted: fkontak})
break
case 'covidindo':
                //[❗] case by DappaGanz
reply(mess.wait)
asu = await fetchJson(`https://zahirr-web.herokuapp.com/api/covidindo?apikey=zahirgans`)
teks = '=================\n'
for (let i of asu.result) {
teks += `Kode Provinsi: : ${i.attributes.Kode_Provi}\nProvinsi : ${i.attributes.Provinsi}\nTotal Positif : ${i.attributes.Kasus_Posi}\nTotal Sembuh : ${i.attributes.Kasus_Semb}\nTotal Meninggal : ${i.attributes.Kasus_Meni}\n=================\n`
}
reply(teks)
break
case 'jamindo':
                //[❗] case by DappaGanz
reply(mess.wait) 
jam = `JAM INDO ⏰\n\n\nWIB : ${time}\nWIT : ${wit}\nWITA : ${wita}`
ikyy.sendMessage(from, jam, text, {quoted: fkontak})
break

case 'jadwaltv':
if (args.length < 1) return reply(`Channelnya mana?`)
reply(mess.wait) 
                chnl = args[0]
                suu = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/${chnl}?apikey=${setting.lolkey}`)
                cok = suu.result
                txt = `Jadwal TV ${chnl.toUpperCase()}\n`
                for (var nj in cok) {
                txt += `${nj} - ${cok[nj]}\n`
                }
                reply(txt)
                
                break
                case 'infogempa':
                
reply(mess.wait)
                get_result = await fetchJson(`http://api.lolhuman.xyz/api/infogempa?apikey=${setting.lolkey}`)
                get_result = get_result.result
                ini_txt = `Lokasi : ${get_result.lokasi}\n`
                ini_txt += `Waktu : ${get_result.waktu}\n`
                ini_txt += `Potensi : ${get_result.potensi}\n`
                ini_txt += `Magnitude : ${get_result.magnitude}\n`
                ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
                ini_txt += `Koordinat : ${get_result.koordinat}`
                get_buffer = await getBuffer(get_result.map)
                ikyy.sendMessage(from, get_buffer, image, { quoted: freply, caption: ini_txt }) 
                break
                case 'infocuaca':
                
                //[❗] case by DappaGanz 
daerah = args[0]
reply(mess.wait)
                resultnya = await fetchJson(`http://leyscoders-api.herokuapp.com/api/cuaca?q=${daerah}&apikey=IkyOgiwara`)
                dapgz = resultnya.result
                textnya = `Daerah : ${dapgz.Daerah}\n`
                textnya += `Latitude : ${dapgz.Latitude}\n`
                textnya += `Longitude : ${dapgz.Longitude}\n`
                textnya += `TimeZone : ${dapgz.TimeZone}\n`
                textnya += `Tanggal : ${dapgz.Tanggal}\n`
                textnya += `Waktu : ${dapgz.Waktu}\n`
                textnya += `Hari : ${dapgz.Hari}\n`
                textnya += `Cuaca : ${dapgz.Cuaca}`
                ikyy.sendMessage(from, textnya, text, {quoted: fkontak})
                break
                case 'infotsunami':
                //[❗] case by DappaGanz
                
reply(mess.wait)
                anuu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/info-tsunami?apikey=IkyOgiwara`)
                dapxzuhy = anuu.result
                textcuk = `Waktu : ${dapxzuhy.waktu}\n`
                textcuk += `Magnitude : ${dapxzuhy.magnitude}\n`
                textcuk += `Kedalaman : ${dapxzuhy.Kedalaman}\n`
                textcuk += `Wilayah : ${dapxzuhy.Wilayah}\n`
                textcuk += `Koordinat : ${dapxzuhy.koordinat}\n`
                ikyy.sendMessage(from, textcuk, text, {quoted: fkontak})  
                break
  
  
   case 'setprofile':
case 'setpp':
ikyy.updatePresence(from, Presence.composing)
if (!isQuotedImage) return reply('Reply imagenya!')
enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediau = await ikyy.downloadAndSaveMediaMessage(enmediau)
await ikyy.updateProfilePicture(botNumber, mediau)
reply('Sukses')
break

case 'unblock':
				ikyy.blockUser (`${body.slice(9)}@c.us`, 'remove')
			    ikyy.sendMessage(from, `Perintah Diterima, Membuka Blockir ${body.slice(9)}@c.us`, text, {quoted: fkontak})
				break
				case 'suratto': // Case By M4N1K
				if (args.length < 1) return reply(`Ketik ${prefix}suratto No tujuan|Isi surat\nMax 5 Kata`)
				const textp = body.slice(9)
				const noorg2 = textp.split("|")[0]
				const katakita2 = textp.split("|")[1]
				const kataorg2 = `Surat Dari ${sender}`
				try {
				pping = await ikyy.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				pping = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				const mnik = `
╔════ ◤ *SURAT FITUR* ◢
║╔▸
║╠ *From* : ${pushname}
║╠ *Number* : @${sender.split("@")[0]}
║╠ *For* : You
║╚▸
║╔▸   ﹝ *ISI SURAT* ﹞  
║╠ ${katakita2}
║╚▸
║╔▸   ﹝ *BALAS SURAT* ﹞  
║╠ Untuk Membalas Ketik:
║╠ #suratto (No tujuan|Isi Surat)
║╠ Contoh: 
║╠ #suratto 6285737134572|Hai Juga
║╚▸
╚═══ ◤ *${botName}* ◢ `
				ikyy.sendMessage(`${noorg2}@s.whatsapp.net`,pping, image , {caption: mnik, quoted: { key: {fromMe:false, participant:`${noorg2}@s.whatsapp.net`},message: { conversation: `${kataorg2}`, contextInfo: {"mentionedJid": [sender]}}}});	
				reply('Surat Sukses Dikirim')
				break
case 'ppcp':
case 'ppcouple':

anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=IkyOgiwara`)
buff1 = await getBuffer(anu.result.male)
buttons = [{buttonId: `!infoig`,buttonText:{displayText: `©Bot WhatsApp`},type:1}]
              imageMsg = (await ikyy.prepareMessageMedia(buff1, "imageMessage", { thumbnail: buff1, })).imageMessage
              buttonsMessage = {footerText:`crated by ${ownerName}`, imageMessage: imageMsg,
              contentText:`Cowo`,buttons,headerType:4}
              prep = await ikyy.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
              ikyy.relayWAMessage(prep)
            buff2 = await getBuffer(anu.result.female)
              buttons = [{buttonId: `!infoig`,buttonText:{displayText: `©Bot WhatsApp`},type:1}]
              imageMsg = (await ikyy.prepareMessageMedia(buff2, "imageMessage", { thumbnail: buff2, })).imageMessage
              buttonsMessage = {footerText:`crated by ${ownerName}`, imageMessage: imageMsg,
              contentText:`Cewe`,buttons,headerType:4}
              prep = await ikyy.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
             setTimeout( async () => {
ikyy.relayWAMessage(prep)
}, 5000)
break

case 'meme':
case 'memek':

buff = await getBuffer ('https://leyscoders-api.herokuapp.com/api/memeindo?apikey=IkyOgiwara')

buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await ikyy.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:`crated by ${ownerName}`, imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await ikyy.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
              ikyy.relayWAMessage(prep)
    
break
                    // Textprome //
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
                reply (mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                  buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${setting.lolkey}&text=${ini_txt}`)
                 buttons = [{buttonId: `!menu`,buttonText:{displayText: `BACK MENU`},type:1}]
              imageMsg = (await ikyy.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:`crated by ${ownerName}`, imageMessage: imageMsg,
              contentText:`©Bot WhatsApp`,buttons,headerType:4}
              prep = await ikyy.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
              ikyy.relayWAMessage(prep)
        
                    break
                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                reply (mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                 buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${setting.lolkey}&text1=${txt1}&text2=${txt2}`)
                          buttons = [{buttonId: `!menu`,buttonText:{displayText: `BACK MENU`},type:1}]
              imageMsg = (await ikyy.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:`crated by ${ownerName}`, imageMessage: imageMsg,
              contentText:`©Bot WhatsApp`,buttons,headerType:4}
              prep = await ikyy.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
              ikyy.relayWAMessage(prep)
        
                    break

//textprome2
case 'blackpink':
case 'rainbow2':
case 'water_pipe':
case 'halloween':
case 'sketch':
case 'sircuit':
case 'discovery':
case 'metallic2':
case 'fiction':
case 'demon':
case 'transformer':
case 'berry':
case 'thunder':
case 'magma':
case '3dstone':
case 'neon':
case 'glitch':
case 'harry_potter':
case 'embossed':
case 'broken':
case 'papercut':
case 'gradient':
case 'glossy':
case 'watercolor':
case 'multicolor':
case 'neon_devil':
case 'underwater':
case 'bear':
case 'wonderfulg':
case 'christmas':
case 'neon_light':
case 'snow':
case 'cloudsky':
case 'luxury2':
case 'gradient2':
case 'summer':
case 'writing':
case 'engraved':
case 'summery':
case '3dglue':
case 'metaldark':
case 'neonlight':
case 'oscar':
case 'minion':
case 'holographic':
case 'purple':
case 'glossyb':
case 'deluxe2':
case 'glossyc':
case 'fabric':
case 'neonc':
case 'newyear':
case 'newyear2':
case 'metals':
case 'xmas':
case 'blood':
case 'darkg':
case 'joker':
case 'wicker':
case 'natural':
case 'firework':
case 'skeleton':
case 'balloon':
case 'balloon2':
case 'balloon3':
case 'balloon4':
case 'balloon5':
case 'balloon6':
case 'balloon7':
case 'steel':
case 'gloss':
case 'denim':
case 'decorate':
case 'decorate2':
case 'peridot':
case 'rock':
case 'glass':
case 'glass2':
case 'glass3':
case 'glass4':
case 'glass5':
case 'glass6':
case 'glass7':
case 'glass8':
case 'captain_as2':
case 'robot':
case 'equalizer':
case 'toxic':
case 'sparkling':
case 'sparkling2':
case 'sparkling3':
case 'sparkling4':
case 'sparkling5':
case 'sparkling6':
case 'sparkling7':
case 'decorative':
case 'chocolate':
case 'strawberry':
case 'koifish':
case 'bread':
case 'matrix':
case 'blood2':
case 'neonligth2':
case 'thunder2':
case '3dbox':
case 'neon2':
case 'roadw':
case 'bokeh':
case 'gneon':
case 'advanced':
case 'dropwater':
case 'wall':
case 'chrismast':
case 'honey':
case 'drug':
case 'marble':
case 'marble2':
case 'ice':
case 'juice':
case 'rusty':
case 'abstra':
case 'biscuit':
case 'wood':
case 'scifi':
case 'metalr':
case 'purpleg':
case 'shiny': 
case 'jewelry':
case 'jewelry2':
case 'jewelry3':
case 'jewelry4':
case 'jewelry5':
case 'jewelry6':
case 'jewelry7':
case 'jewelry8':
case 'metalh':
case 'golden':
case 'glitter':
case 'glitter2':
case 'glitter3':
case 'glitter4':
case 'glitter5':
case 'glitter6':
case 'glitter7':
case 'metale':
case 'carbon':
case 'candy':
case 'metalb':
case 'gemb':
case '3dchrome':
case 'metalb2':
case 'metalg':
tek = `nih kak jangan spam bot ya`
reply (mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Rifqibotz`)          
                    buffer = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/${command}?apikey=Alphabot&text=${q}`)
            ikyy.sendMessage(from, buffer, image, { thumbnail: Buffer.alloc(0), caption: tek, quoted: ftroli})
            break
                  /**buff = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/${command}?apikey=Alphabot&text=${q}`)
                          buttons = [{buttonId: `!menu`,buttonText:{displayText: `BACK MENU`},type:1}]
              imageMsg = (await ikyy.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:`crated by ${ownerName}`, imageMessage: imageMsg,
              contentText:`©Bot WhatsApp`,buttons,headerType:4}
              prep = await ikyy.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
              ikyy.relayWAMessage(prep)
break**/

case 'carbon2':
tek = `nih kak jangan spam bot ya`
            reply(mess.wait)
if (!q) return reply(`exampe : !carbon code|biru\n\nList Warna\n• biru\n• kuning\n• hitam\n• ping`)
            car = args.join(" ");
            var codee = car.split('|')[0]
var kolor = car.split('|')[1]
            buffer = await getBuffer(`http://ziy.herokuapp.com/api/carbon?code=${codee}&color=${kolor}&apikey=xZiyy`)
            ikyy.sendMessage(from, buffer, image, { thumbnail: Buffer.alloc(0), caption: tek, quoted: ftroli})
            break
                    // Photo Oxy //
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                reply (mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                  buff = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${setting.lolkey}&text=${ini_txt}`)
                          buttons = [{buttonId: `!menu`,buttonText:{displayText: `BACK MENU`},type:1}]
              imageMsg = (await ikyy.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:`crated by ${ownerName}`, imageMessage: imageMsg,
              contentText:`©Bot WhatsApp`,buttons,headerType:4}
              prep = await ikyy.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
              ikyy.relayWAMessage(prep)
        
                    break
                case 'tiktok':
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
                reply (mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                buff = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${setting.lolkey}&text1=${txt1}&text2=${txt2}`)
                          buttons = [{buttonId: `!menu`,buttonText:{displayText: `BACK MENU`},type:1}]
              imageMsg = (await ikyy.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:`crated by ${ownerName}`, imageMessage: imageMsg,
              contentText:`©Bot WhatsApp`,buttons,headerType:4}
              prep = await ikyy.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
              ikyy.relayWAMessage(prep)
        
                    break

                    // Ephoto 360 //
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                reply (mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
             buff = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${setting.lolkey}&text=${ini_txt}`)
               buttons = [{buttonId: `!menu`,buttonText:{displayText: `BACK MENU`},type:1}]
              imageMsg = (await ikyy.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:`crated by ${ownerName}`, imageMessage: imageMsg,
              contentText:`©Bot WhatsApp`,buttons,headerType:4}
              prep = await ikyy.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
              ikyy.relayWAMessage(prep)
          case 'wasted':
var imgbb = require('imgbb-uploader')
if ((isMedia && !kyy.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(wasted).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
owgi = await ikyy.downloadAndSaveMediaMessage(ger)
data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/wasted?url=${data.display_url}&apikey=IkyOgiwara`)
ikyy.sendMessage(from, buff, image, {quoted: ftroli, caption: mess.success})
} else {
reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}wasted`)
}
break
case 'tahta':
buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${q}&apikey=IkyOgiwara`)
      buttons = [{buttonId: `!infoig`,buttonText:{displayText: ` ©Bot WhatsApp`},type:1}]
              imageMsg = (await ikyy.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:`crated by ${ownerName}`, imageMessage: imageMsg,
              contentText:`©Bot WhatsApp`,buttons,headerType:4}
              prep = await ikyy.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
              ikyy.relayWAMessage(prep)
break
case 'quotesmaker':
buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/quote-maker?text=${q}&apikey=IkyOgiwara`)
ikyy.sendMessage(from, buff, image, {thumbnail: Buffer.alloc(0), quoted: ftroli})
case 'tinyurl':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tinyurl?url=${q}&apikey=IkyOgiwara`)
ikyy.sendMessage(from, `${anu.result}`, text, {quoted: ftroli})
break
case 'cuttly':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cuttly?url=${q}&apikey=IkyOgiwara`)
ikyy.sendMessage(from, `• Hasil: ${anu.result.hasil}\n• Dibuat Pada: ${anu.result.create_at}`, text, {quoted: ftroli})
break
case 'shorturl':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/shrturl?url=${q}&apikey=IkyOgiwara`)
ikyy.sendMessage(from, `${anu.result}`, text, {quoted: ftroli})
break    
    

    
  //------------------< Level >-------------------

//------------------< Level >-------------------
      case 'level': 
              if (!isGroup) return reply(mess.only.group)
              if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!')
              let userLevel = level.getLevelingLevel(sender, _level)
              let userXp = level.getLevelingXp(sender, _level)
              let requiredXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
              let userRank = level.getUserRank(sender, _level)
              try {
              profilePic = await ikyy.getProfilePicture(sender)
              } catch {
              profilePic = errorImg 
}
              buffer = await getBuffer(`https://api.lolhuman.xyz/api/rank?apikey=${setting.lolkey}&img=${profilePic}&background=https://telegra.ph/file/443b6600636aed1d94acd.jpg&username=${encodeURI(pushname)}&level=${userLevel}&ranking=${Number(userRank)}&currxp=${userXp}&xpneed=${requiredXp}`)
              teks = `*「 LEVEL 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${userXp} / ${requiredXp}\n➸ *Level :* ${userLevel}\n➸ *Role*: *${role}*\n\n*Note : Kumpulin Xp Jika Ingin Menaikkan Level*`
              ikyy.sendMessage(from, buffer, image, { caption: teks, quoted: ftroli})
              break
       case 'leaderboard': //Cek Leaderboard
       case 'leaderboards':
              if (!isGroup) return reply(mess.only.group)
              if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!') 
              const resp = _level
            _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
              let leaderboard =  '-----[ *LEADERBOARD* ]----\n\n'
              try {
              for (let i = 0; i < 10; i++) {
              var roles = 'Warrior III'
              if (resp[i].level <= 5) {
              roles = 'Warrior II'
              } else if (resp[i].level <= 10) {
              roles = 'Warrior I'
              } else if (resp[i].level <= 15) {
              roles = 'Elite III'
              } else if (resp[i].level <= 20) {
              roles = 'Elite II'
              } else if (resp[i].level <= 25) {
              roles = 'Elite I'
              } else if (resp[i].level <= 30) {
              roles = 'Master III'
              } else if (resp[i].level <= 35) {
              roles = 'Master II'
              } else if (resp[i].level <= 40) {
              roles = 'Master I'
              } else if (resp[i].level <= 45) {
              roles = 'GrandMaster III'
              } else if (resp[i].level <= 50) {
              roles = 'GrandMaster II'
              } else if (resp[i].level <= 55) {
              roles = 'GrandMaster I'
              } else if (resp[i].level <= 60) {
              roles = 'Epic III'
              } else if (resp[i].level <= 65) {
              roles = 'Epic II'
              } else if (resp[i].level <= 70) {
              roles = 'Epic I'
              } else if (resp[i].level <= 75) {
              roles = 'Legend III'
              } else if (resp[i].level <= 80) {
              roles = 'Legend II'
              } else if (resp[i].level <= 85) {
              roles = 'Legend I'
              } else if (resp[i].level <= 90) {
              roles = 'Mythic'
              } else if (resp[i].level <= 95) {
              roles = 'Mythical Glory'
              } else if (resp[i].level >= 100) {
              roles = 'Immortal'
} 

              leaderboard += `➸ ${i + 1}. wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n➸ *Xp :* ${_level[i].xp}\n➸ *Level :* ${_level[i].level}\n➸ *Role :* ${roles}\n\n`
}
              reply(leaderboard)
              } catch (err) {
              console.error(err)
              reply('_Perlu setidaknya 10 user yang memiliki level di database!_')
}
              break
//------------------< Stalk >-------------------
      case 'stalkgithub':
      case 'githubstalk':
              if (args.length == 0) return reply(`Example: ${prefix + command} ikyy-chan02`)
              reply(mess.wait)
              username = args[0]
              ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${setting.lolkey}`)
              ini_result = ini_result.result
              ini_buffer = await getBuffer(ini_result.avatar)
              ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *GITHUB USER*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Username : ${ini_result.name}\`\`\`
\`\`\`▢ Public Repo : ${ini_result.public_repos}\`\`\`
\`\`\`▢ Public Gists : ${ini_result.public_gists}\`\`\`
\`\`\`▢ Pengikut : ${ini_result.followers}\`\`\`
\`\`\`▢ Following : ${ini_result.following}\`\`\`
\`\`\`▢ Mengikuti : ${ini_result.bio}\`\`\`
\`\`\`▢ Link : ${ini_result.url}\`\`\`
`
             ikyy.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break
      case 'stalkig':
      case 'igstalk':
             if (args.length == 0) return reply(`Example: ${prefix + command} ikyy.chan26`)
             reply(mess.wait)
             username = args[0]
             ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${setting.lolkey}`)
             ini_result = ini_result.result
             ini_buffer = await getBuffer(ini_result.photo_profile)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Username : ${ini_result.username}\`\`\`
\`\`\`▢ Nama : ${ini_result.fullname}\`\`\`
\`\`\`▢ Pengikut : ${ini_result.followers}\`\`\`
\`\`\`▢ Mengikuti : ${ini_result.following}\`\`\`
\`\`\`▢ Deskripsi : ${ini_result.bio}\`\`\`
\`\`\`▢ Link : https://instagram.com/${ini_result.username}\`\`\`
`
             ikyy.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break
      case 'stalktiktok':
      case 'tiktokstalk':
             if (args.length == 0) return reply(`Example: ${prefix + command} marz.hiatus`)
             reply(mess.wait)
             stalk_toktok = args[0]
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${stalk_toktok}?apikey=${setting.lolkey}`)
             get_result = get_result.result
             pp_tt = await getBuffer(get_result.user_picture)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *TIKTOK PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Username : ${get_result.username}\`\`\`
\`\`\`▢ Nama : ${get_result.nickname}\`\`\`
\`\`\`▢ Pengikut : ${get_result.followers}\`\`\`
\`\`\`▢ Mengikuti : ${get_result.followings}\`\`\`
\`\`\`▢ Likes : ${get_result.likes}\`\`\`
\`\`\`▢ Video : ${get_result.video}\`\`\`
\`\`\`▢ Deskripsi : ${get_result.bio}\`\`\`
`
              ikyy.sendMessage(from, pp_tt, image, { quoted: ftroli, caption: ini_txt, thumbnail: Buffer.alloc(0) })
              break
       case 'iguser':
              try {
              if (args.length == 0) return reply(`Kirim perintah *${prefix}iguser [ username ]*\nContoh : ${prefix}iguser jessnolimit`)
              query = args.join(" ")
              reply(mess.wait)
              get_result = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=${setting.zekskey}&q=${query}`)
              get_result = get_result.result
              teks = `*「 INSTAGRAM USER 」*\n\n*Hasil Pencarian : ${query}*\n\n`
              for(let i = 0; i < get_result.length; i++) {
              teks += `*Username* : ${get_result[i].username}\n*Full name*: ${get_result[i].full_name}\n*Akun private* : ${get_result[i].private_user}\n*Verified*: ${get_result[i].verified_user}\n*Link*: https://instagram.com/${get_result[i].username}\n\n`
}
              ini_buffer = await getBuffer(get_result[0].profile_pic)
              ikyy.sendMessage(from, ini_buffer, image, { quoted: ftroli, caption: teks })
              } catch {
              reply(`Maaf username ${query} tidak ditemukan`)
}
              break
//------------------< Sticker/Tools >-------------------

       case 'dadu': // by CHIKAA CHANTEKKXXZZ
              reply(mess.wait)
              dadu()
             .then(async (body) => {
              dadugerak = body.split('\n')
              dadugerakx = dadugerak[Math.floor(Math.random() * dadugerak.length)]
              sendWebp(from, dadugerakx)
})
             .catch(async (err) => {
              console.error(err)
              reply('Error!')
})
              break
      case 'doge':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'patrick':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr, {quoted: ftroli})
}
)
              break
              
              case 'amongus':
              if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
              dpuhy = args.join(' ')
                reply(mess.wait)
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/amongus?apikey=${setting.lolkey}&text=${dpuhy}`)
                ikyy.sendMessage(from, dapuhy, sticker, {quoted: ftroli})
                break
                
                
       case 'gura':
       case 'gawrgura':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr, {quoted: ftroli})
}
)
              break
       case 'animestick':
       case 'stickeranime':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
             .then(res => res.text())
             .then(body => {
              let todd = body.split("\n");
              let pjrr = todd[Math.floor(Math.random() * todd.length)];
              sendWebp(from, pjrr, {quoted: ftroli})
}
)
              break
       case 'telesticker': 
       case 'telestiker':
              if (!q) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
              reply(mess.wait)
              ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${setting.lolkey}&url=${args[0]}`)
              ini_sticker = ini_url.result.sticker
              reply('Sending '+ ini_sticker.length +' stickers...')
              for (sticker_ in ini_sticker) {
              ini_buffer = await getBuffer(ini_sticker[sticker_])
              ikyy.sendMessage(from, ini_buffer, sticker, {})
}
              break
       case 'semoji':
       case 'emoji':
              if (args.length == 0) return reply(`Example: ${prefix + command} ðŸ˜­`)
              emoji = args[0]
              try {
              emoji = encodeURI(emoji[0])
              } catch {
              emoji = encodeURI(emoji)
}
              ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${setting.lolkey}`)
              await ikyy.sendMessage(from, ini_buffer, sticker, { quoted: ftroli })
              break
case 'ttp':
case 'ttp2':
case 'ttp3':
case 'ttp4':
if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
  ini_txt = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${setting.lolkey}&text=${ini_txt}`)
await ikyy.sendMessage(from, ini_buffer, sticker, { quoted: ftroli })
break

     case 'attp':
              if (args.length == 0) return reply(`Example: ${prefix + command} ikyy`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              ikyy.sendMessage(from, buffer, sticker, { quoted: ftroli })
              break
/**case 'attp':

if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
  ini_txt = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${setting.lolkey}&text=${ini_txt}`)
await ikyy.sendMessage(from, ini_buffer, sticker, { quoted: ftroli })
break**/

case 'attp2':

if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
  ini_txt = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${setting.lolkey}&text=${ini_txt}`)
await ikyy.sendMessage(from, ini_buffer, sticker, { quoted: ftroli })
break

       case 'ttg':
              if (!q) return await reply(mess.wrongFormat)
              reply(mess.wait)
              sendWebp(from, `https://api.vhtear.com/textxgif?text=${q}&apikey=${setting.vhtearkey}`)
             .then(() => console.log('Success creating GIF!'))
             .catch(async (err) => {
              console.error(err)
              reply('Error!')
})
              break
       case 'loliv':
       case 'lolivid':
       case 'lolivideo':
              reply(mess.wait)
              anu = await fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
             .then(async (body) => {
              anu = body.split('\n')
              anu = anu[Math.floor(Math.random() * anu.length)]
              sendMediaURL(from, anu)
})
             .catch(async (err) => {
              console.error(err)
              reply(`${err}`)
})
              break
case 's':
case 'stiker':
case 'sticker':
              var a = `sewabot 10k permanen pc 089636634511`
              var b = `SUBS YT RIFQIBOTZ`
              if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              media = await ikyy.downloadAndSaveMediaMessage(encmedia)
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              ikyy.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: ftroli })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              ikyy.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: ftroli })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out) 
              } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              const media = await ikyy.downloadAndSaveMediaMessage(encmedia)
              pe = args.join('')
              var a = `sewabot 10k permanen pc 089636634511`
              var b = `SUBS YT RIFQIBOTZ`
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              ikyy.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: ftroli })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              ikyy.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: ftroli })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out)       
              } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
}
              break
              
       case 'take':
       case 'colong':
              if (!isQuotedSticker) return reply('Stiker aja om')
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await ikyy.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : `${pushname}`
              dua = typeof anu[1] !== 'undefined' ? anu[1] : `UwU`
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, ikyy, mek, from)
              break
       case 'delwm':
              if (!isQuotedSticker) return reply('Stiker aja om')
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await ikyy.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : ``
              dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, ikyy, mek, from)
              break
       case 'stikerwm':
       case 'stickerwm':
       case 'swm':
              var a = arg.split("|")[0];
              var b = arg.split("|")[1];
              if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              media = await ikyy.downloadAndSaveMediaMessage(encmedia)
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              ikyy.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: ftroli })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              ikyy.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: ftroli })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out) 
              } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              const media = await ikyy.downloadAndSaveMediaMessage(encmedia)
              pe = args.join('')
              var a = pe.split("|")[0];
              var b = pe.split("|")[1];
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              ikyy.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: ftroli })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              ikyy.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: ftroli })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out)       
              } else {
              reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
}
              break
      case 'toimg':
              if (!isQuotedSticker) return reply('reply stickernya')
              reply(mess.wait)
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await ikyy.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
              buffer = fs.readFileSync(ran)
              ikyy.sendMessage(from, buffer, image, {quoted: ftroli, caption: 'Nih'})
              fs.unlinkSync(ran)
})
              break
       case 'memeimg':
       case 'memegen':                    
              top = arg.split('|')[0]
              bottom = arg.split('|')[1]
              var imgbb = require('imgbb-uploader')
              if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
              reply(mess.wait)
              ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
              owgi = await ikyy.downloadAndSaveMediaMessage(ger)
              anu = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
              teks = `${anu.display_url}`
              ranp = getRandom('.gif')
              rano = getRandom('.webp')
              anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
              sendMediaURL(from, `${anu1}`, mess.success)
              } else {
              reply('Gunakan foto/stiker!')
}
               break
case 'smeme':
              top = arg.split('|')[0]
              bottom = arg.split('|')[1]
              var imgbb = require('imgbb-uploader')
              if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
              reply(mess.wait)
              ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
              owgi = await ikyy.downloadAndSaveMediaMessage(ger)
              anu = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
              teks = `${anu.display_url}`
              ranp = getRandom('.gif')
              rano = getRandom('.webp')
              anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
              sendMediaURL(from, `${anu1}`, mess.success)
              } else {
              reply('Gunakan foto/stiker!')
}
               break
        case 'togif':
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await ikyy.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               ikyy.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: ftroli, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
        case 'tovideo':
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
               mediaaa = await ikyy.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               ikyy.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: ftroli, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
        case 'tomp3':
               if (isQuotedVideo || isQuotedAudio){
               reply(mess.wait)
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
               media = await ikyy.downloadAndSaveMediaMessage(encmedia)
               ran = getRandom('.mp4')
               exec(`ffmpeg -i ${media} -b:a 192K -vn ${ran}`, (err) => {
               fs.unlinkSync(media)
               if (err) return reply(`Err: ${err}`)
               buffer453 = fs.readFileSync(ran)
               ikyy.sendMessage(from, buffer453, video, { mimetype: 'audio/mp4', quoted: ftroli })
               fs.unlinkSync(ran)
})
               } else {
               reply(mess.wrongFormat)
}
               break
//------------------< Ingfo Bot >-------------------
             case 'runtime':
             reply(`_*BOT TELAH AKTIF SELAMA*_\n${runtime(process.uptime())}`)
              break
       case 'donate': 
       case 'donasi':
              textImg(setting.txtDonasi)
              break
       case 'sourcecode': 
       case 'sc': 
       case 'src':
              textImg(`wa.me/6289636634511`)
              break

case 'botstat': case 'speed': case 'ping': case 'botstatus': case 'statusbot': {
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                groups = ikyy.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ikyy.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ikyy.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
                respon = `
                                 ${petik}BOT STATISTICS${petik}
\`\`\`▢ Group Chats : ${groups.length}\`\`\`
\`\`\`▢ Private Chats : ${privat.length}\`\`\`
\`\`\`▢ Total Chats : ${totalChat.length}\`\`\`
\`\`\`▢ Speed : ${latensie.toFixed(4)} _Second_\`\`\`
\`\`\`▢ Active Time : ${kyun(uptime)}\`\`\`

\`\`\`PHONE STATISTICS\`\`\`
\`\`\`▢ Baterai : ${baterai}% ${charger}\`\`\`
\`\`\`▢ Ram Usage : ${ram2}\`\`\`
\`\`\`▢ Platform : ${os.platform()}\`\`\`
\`\`\`▢ Hostname : ${os.hostname()}\`\`\`
\`\`\`▢ Uptime : ${runtime(process.uptime())}\`\`\`
\`\`\`▢ Wa Version: ${ikyy.user.phone.wa_version}\`\`\`
\`\`\`▢ Os Version: ${ikyy.user.phone.os_version}\`\`\`
\`\`\`▢ Device Manufacturer: ${ikyy.user.phone.device_manufacturer}\`\`\`
\`\`\`▢ Device Model: ${ikyy.user.phone.device_model}\`\`\`
\`\`\`▢ Os Build Number: ${ikyy.user.phone.os_build_number}\`\`\`


                
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
//------------------< Owner >-------------------
      case 'join': 
             if (!q) return reply('Linknya?')
             if (!isOwner) return reply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = ikyy.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Berhasil Masuk Grup')
             break
      case 'eval':
             try {
             if (!isOwner) return
             sy = args.join(' ')
             return eval(sy)
             } catch(e) {
             reply(`${e}`)
}
             break
      case 'getquoted':
             reply(JSON.stringify(mek.message.extendedTextMessage.contextInfo, null, 3))
             break
  //━━━━━━━━━━━━━━━[ bc ]━━━━━━━━━━━━━━━━━// 
                      
             case 'bc':
if (!isOwner) return  reply(mess.only.owner)
  if (args.length < 1) return reply('teks?')
anu = await ikyy.chats.all()
  if (isMedia && !ikyy.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await ikyy.downloadMediaMessage(encmedia)
for (let _ of anu) {
ikyy.sendMessage(_.jid, bc, image, {quoted:mek,caption: `*「 BROADCAST BOT 」*\n\n${body.slice(4)}`})
}
reply('Suksess broadcast')
  } else {
for (let _ of anu) {
sendMess(_.jid, `\n\n${body.slice(4)}`)
}
reply('Suksess broadcast')
  }
  break


    case 'bch':
anu = await ikyy.chats.all().filter(v => v.jid.endsWith('g.us'))
  if (isMedia && !kyy.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kyy).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kyy
bc = await ikyy.downloadMediaMessage(encmedia)
for (let _ of anu) {
ikyy.sendMessage(_.jid, bc, image, {quoted:mek,caption: `*`})
}
reply('Suksess broadcast')
  } else {
for (let _ of anu) {
hideTag(_.jid, `*「 BROADCAST BOT 」*\n\n${body.slice(5)}`)
}
reply('Suksess broadcast')
  } 
  break
case 'bcsticker':
case 'bcstik':
if (!isOwner) return  reply(mess.only.owner)
anu = await ikyy.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await ikyy.downloadMediaMessage(encmedia)
for (let _ of anu) {
ikyy.sendMessage(_.jid, bc, sticker, {quoted:mek})
}
reply('Suksess broadcast')
}
break
case 'bcvideo':
if (!isOwner) return  reply(mess.only.owner)
anu = await ikyy.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await ikyy.downloadMediaMessage(encmedia)
for (let _ of anu) {
ikyy.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4', duration: 359996400,quoted: ftoko,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})
}
reply(`sucses`)
}
break
case 'bcaudio':
if (!isOwner) return  reply(mess.only.owner)
anu = await ikyy.chats.all()
if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await ikyy.downloadMediaMessage(encmedia)
for (let _ of anu) {
ikyy.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true,quoted: ftoko,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})
}
reply(`sucses`)
}
break
case 'bcgif':
if (!isOwner) return  reply(mess.only.owner)
anu = await ikyy.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await ikyy.downloadMediaMessage(encmedia)
for (let _ of anu) {
ikyy.sendMessage(_.jid, bc, sticker, {mimetype: Mimetype.gif,quoted : ftroli,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(7)}`})
}
reply(`sucses`)
}
break
             case 'setlolhuman':
            case 'setapikeylolhuman':
if (args.length < 1) return
                    setting.lolkey = args[0]
reply(`*Apikey LolHuman berhasil di ubah menjadi* : ${setting.lolkey}`)
break
case 'setp':
if (args.length < 1) return
                    setting.ppbot = args[0]
reply(`foto bot berhasil di ubah`)
break
/**case 'smenu':
if(args[0] == 'fakeloc'){
menufakeloc = true
reply('Sucsess')
}else if(args[0] == 'fakeyt'){
menufakeloc = false
reply('Sucsess')
}
break**/

/**case 'setmenu':
         
txtt =`Hai Kak ${ownerName}\nsilahkan pilih menu di bawah ini`

               buttons = [{buttonId: '!smenu fakeloc',buttonText:{displayText: 'MENU FAKELOC'},type:1},{buttonId:'!smenu fakeyt',buttonText:{displayText:'MENU FAKEYT'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: `${week} ${date}\n${timuu}`,
               buttons: buttons,
               headerType: 1
}
               prep = await ikyy.prepareMessageFromContent(from,{buttonsMessage},{quoted: fgif})
               ikyy.relayWAMessage(prep)
               break**/
case 'autoread':
if (!isOwner) return  reply(mess.only.owner)
if (args.length < 1) return reply(`Example:\n${prefix}autoread gc on`)
if (args[0] === "gc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread gc on`)
if (args[1] === "on") {
if (readGc === true) return
readGc = true
reply(`Succes mengaktifkan autoread group`)
} else if (args[1] === "off") {
if (readGc === false) return
readGc = false
reply(`Succes mematikan autoread group`)
} else {
reply(`Pilih on atau off`)
}
} else if (args[0] === "pc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread pc on`)
if (args[1] === "on") {
if (readPc === true) return
readPc = true
reply(`Succes mengaktifkan autoread pc`)
} else if (args[1] === "off") {
if (readPc === false) return
readPc = false
reply(`Succes mematikan autoread pc`)
} else {
reply(`Pilih on atau off`)
}
} else {
reply(`*List Auto Read*\n•> gc\n•> pc`)
}
break
      case 'clearall':
			        anu = await ikyy.chats.all()
					ikyy.setMaxListeners(10)
					for (let _ of anu) {
					ikyy.deleteChat(_.jid)
					}
					reply(lang.success())
					break


             
      case 'term':
             if (!isOwner) return
             if (!q) return
             exec(q, (err, stdout) => {
             if (err) return reply(`${err}`)
             if (stdout) {
             reply(stdout)
}
})
             break 
      case 'shutdown':
             if (!isOwner) return 
             reply(`Bye...`)
             await sleep(3000)
             process.exit()
             break
      case 'restart':
             if (!isOwner) return 
             reply(mess.wait)
             exec(`node main`)
             reply('_Restarting Bot Success_')
             break
      case 'leaveall':
             if (!isOwner) return  reply(mess.only.owner)
             let totalgroup = ikyy.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Byee', null)
             await sleep(3000)
             ikyy.groupLeave(id)
}
             break
case 'sendsesi':
iky = fs.readFileSync("./BOT.json")
sendFileFromUrl(from, iky, MessageType.document)
break

  case 'public':
          if (!mek.key.fromMe) return 
              if (banChats === false) return 
              banChats = false
              textImg(`Sukses mode publik gan`)
              break

case 'self':
              if (!mek.key.fromMe) return 
              if (banChats === true) return
          uptime = process.uptime()
          banChats = true
              textImg(`Success mode self gan`)
              break
              
//------------------< G R U P >-------------------


         case 'linkgc':
         case 'linkgrup':
         case 'linkgroup':
         case 'linkgrub':
         linkgc = await ikyy.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grup ${groupName}`
ikyy.sendMessage(from, yeh, text, { quoted: ftroli })
break


case 'resetlinkgc':
         case 'resetlinkgroup':
         case 'revoke':
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          json = ['action', 'inviteReset', from]
         ikyy.query({json, expect200: true})
          reply('Sukses Mereset Link Group')
         break

         case 'kick':
         reply('maaf kak fitur kick di hapus oleh owner karena nomor bot rawan kena ban')
         break
         
         case 'add':
         reply('maaf kak  fitur add di hapus oleh owner karena nomor bot rawan kena ke ban')
         break

/**case 'kick':
case 'kik':
             if (!isBotGroupAdmins) return reply(mess.only.Badmin)
             if (!isGroupAdmins) return reply(mess.only.admin)
             if (!isGroup) return reply(mess.only.group)
             kick(from, mentionUser)
             break
      case 'add':
             if (!isBotGroupAdmins) return reply(mess.only.Badmin)
             if (!isGroupAdmins) return reply(mess.only.admin)
             if (!isGroup) return reply(mess.only.group)
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
             entah = arg.split("|")[0]
             entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
             entah = `${entah}@s.whatsapp.net`
             ikyy.groupAdd(from, [entah])
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             ikyy.groupAdd(from, [entah])
}
             break**/
             
      case 'promote':
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
             if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
             entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
             if (entah.length > 0) {
             var mems_ids = []
             for (let ids of entah) {
             mems_ids.push(ids)
}
             ikyy.groupMakeAdmin(from, mems_ids)
             } else {
             ikyy.groupMakeAdmin(from, entah)
}
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             ikyy.groupMakeAdmin(from, [entah])
}
             break
      case 'demote':
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
             if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
             entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
             if (entah.length > 0) {
             var mems_ids = []
             for (let ids of entah) {
             mems_ids.push(ids)
}
             ikyy.groupDemoteAdmin(from, mems_ids)
             } else {
             ikyy.groupDemoteAdmin(from, [entah[0]])
}
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             ikyy.groupDemoteAdmin(from, [entah])
}
             break
       case 'setgrupname':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
              ikyy.groupUpdateSubject(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setdesc':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.admin)
              if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
              ikyy.groupUpdateDescription(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setppgrup':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.admin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await ikyy.downloadMediaMessage(encmedia)
              ikyy.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
       case 'me':
       case 'profile':
                           ikyy.updatePresence(from, Presence.composing)
              try {
              profil = await ikyy.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              } catch {
              profil = errorImg
}
              thu = await ikyy.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
              me = ikyy.user
              uptime = process.uptime()
              profile = `-----[ *USER INFO* ]-----\n\n➸ *Username:* ${pushname}\n➸ *Status:* ${thu.status}\n➸ *Premium*: ${isPremium ? 'Ya' : 'No'}\n➸ *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}\n➸ *Prefix :* Multi Prefix\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nYour progress:\n➸ *Level*: ${Levelnye}\n➸ *XP*: ${Xpluu} / ${requiredXplu}`
              buff = await getBuffer(profil)
              ikyy.sendMessage(from, buff, image, {quoted: ftroli, caption: profile})
              break
       case 'afk': 
              if (!isGroup) return reply(mess.only.group)
              if (isAfkOn) return reply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
              const reason = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, reason, _afk)
              const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n➸ *Ussername*: ${pushname}\n➸ *Alasan*: ${reason}`
              reply(aluty)
              break
       case 'infogrup':
       case 'infogrouup':
       case 'grupinfo':
       case 'groupinfo':
              if (!isGroup) return reply(mess.only.group)
              try {
              var pic = await ikyy.getProfilePicture(from)
              } catch {
              var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
              let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
              ikyy.sendMessage(from, await getBuffer(pic), image, {quoted: ftroli, caption: ingfo, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
              break
       case 'tagall':
              if (!isGroup) return reply(mess.only.group)
               if (!isGroupAdmins) return reply(mess.only.admin)
              let arr = [];
              let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
       case 'kickall': // Anti Banned
              for (let i of groupMembers) {
              await kickMember(from, [i.jid])
}
              break
       case 'leave':
       if (!isOwner) return 
              if (!isGroup) return reply(mess.only.group)
              setTimeout( () => {
              ikyy.groupLeave(from) 
              }, 2000)
              setTimeout( () => {
              reply('Byee...')
              }, 0)
              break
       case 'online':
       case 'listonline':
       case 'here':                
             if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(ikyy.chats.get(ido).presences), ikyy.user.jid]
             ikyy.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: ftroli, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
      case 'hidetag':
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
             try {
             quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
      case 'sider':
             if(!isGroup) return reply(mess.only.group)
             try {
             infom = await ikyy.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Dibaca oleh:*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Tersampaikan pada:*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             reply('Reply chat bot!')
}
             break
//------------------< Fun >-------------------
       case 'wangy':
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
       case 'mining':
              var mining = randomNomor(1000)
              atm.addKoinUser(sender, mining, _uang)
              await reply(`*Selamat Kamu Mendapatkan*: _Rp ${mining} 💰_`)
              break
       case 'waktu':
              reply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
              break
       case 'cekmati':
              if (!q) return reply(mess.wrongFormat)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
  
       case 'toxic':
              Toxic().then(toxic => {
              reply (toxic)
})
              break
        case 'citacita':
              const cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']
              const cita3 = cita[Math.floor(Math.random() * cita.length)]
              cita2 = await getBuffer(cita3)
              ikyy.sendMessage(from, cita2, audio,{mimetype: 'audio/mp4', ptt:true, quoted: ftroli})
              break
       case 'apakah':
              apakah = body.slice(1)
              const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
              const kah = apa[Math.floor(Math.random() * apa.length)]
              ikyy.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: ftroli })
              break
       case 'rate':
       case 'nilai':
              rate = body.slice(1)
              const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
              const te = ra[Math.floor(Math.random() * ra.length)]
              ikyy.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted: ftroli })
              break
       case 'gantengcek':
       case 'cekganteng':
              ganteng = body.slice(1)
              const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teng = gan[Math.floor(Math.random() * gan.length)]
              ikyy.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: ftroli })
              break
       case 'cantikcek':
       case 'cekcantik':
              cantik = body.slice(1)
              const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tik = can[Math.floor(Math.random() * can.length)]
              ikyy.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: ftroli })
              break
       case 'cekwatak':
              var namao = pushname
              var prfx = await ikyy.getProfilePicture(sender)
              const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
              const wtk = watak[Math.floor(Math.random() * (watak.length))]
              const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
              const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
              const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
              const sft = sifat[Math.floor(Math.random() * (sifat.length))]
              const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colmek','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
              const hby = hobby[Math.floor(Math.random() * (hobby.length))]
              const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
              const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
              const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
              const typo = tipe[Math.floor(Math.random() * (tipe.length))]
              await reply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
              break
       case 'hobby':
              hobby = body.slice(1)
              const by = hobby[Math.floor(Math.random() * hobby.length)]
              ikyy.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: ftroli })
              break
       case 'bisakah':
              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              ikyy.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: ftroli })
              break
       case 'kapankah':
              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              ikyy.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: ftroli })
              break
       case 'truth':
              const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
              const ttrth = trut[Math.floor(Math.random() * trut.length)]
              truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              ikyy.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: ftroli })
              break
       case 'dare':
              const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
              const der = dare[Math.floor(Math.random() * dare.length)]
              buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              ikyy.sendMessage(from, buffer, image, { quoted: ftroli, caption: '*Dare*\n\n'+ der })
              break
       case 'jadian':
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
       case 'cantik':
              membr = []
              const mes = groupMembers
              const msk = groupMembers
              const siaps = mes[Math.floor(Math.random() * mes.length)]
              const sips = pushname[Math.floor(Math.random() * msk.length)]
              teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
              membr.push(siaps.jid)
              mentions(teks, membr, true)
              break
       case 'ganteng':
              membr = []
              const nus = groupMembers
              const msl = groupMembers
              const siapss = nus[Math.floor(Math.random() * nus.length)]
              const sipss = pushname[Math.floor(Math.random() * msl.length)]
              teks = `*Masih Gantengan Owner Gua :* @${siapss.jid.split('@')[0]}`
              membr.push(siapss.jid)
              mentions(teks, membr, true)
              break
       case 'babi':
              membr = []
              const meg = groupMembers
              const mge = groupMembers
              const ba = meg[Math.floor(Math.random() * meg.length)]
              const bi = pushname[Math.floor(Math.random() * mge.length)]
              teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
              membr.push(ba.jid)
              mentions(teks, membr, true)
              break
       case 'beban':
              membr = []
              const nge = groupMembers
              const tod = groupMembers
              const beb = nge[Math.floor(Math.random() * nge.length)]
              const an = pushname[Math.floor(Math.random() * tod.length)]
              teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
              membr.push(beb.jid)
              mentions(teks, membr, true)
              break
//------------------< Lainnya >-------------------
        case 'getpp':
               if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
               linkpp = await ikyy.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               ikyy.sendMessage(from, buffer, image, {caption: "Nih", thumbnail: Buffer.alloc(0), quoted: ftroli })
               } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid === null || mek.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
               mberr = mek.message.extendedTextMessage.contextInfo.participant
               linkpp = await ikyy.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               ikyy.sendMessage(from, buffer, image, { quoted: ftroli, caption: `Profile Picture of @${mberr.split("@")[0]}`, thumbnail: Buffer.alloc(0), contextInfo: { "mentionedJid": [mberr] }})
               } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
               mberr = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
               linkpp = await ikyy.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               ikyy.sendMessage(from, buffer, image, { quoted: ftroli, caption: `Profile Picture of @${mberr.split("@")[0]}`, thumbnail: Buffer.alloc(0), contextInfo: { "mentionedJid": [mberr] }})
}
               break
        
        case 'del':
        case 'delete': // MR.CYSER
               try {
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply chat bot')
               ikyy.deleteMessage(from, {id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
               } catch (e){
               reply('Reply chat bot')
}
               break
               
               case 'tes':
        return sendButMessage(from, `*OKE NYALA OM*`, `ping  ${latensie.toFixed(4)} sec\nRuntime: ${runtime(process.uptime())}`, [
            {
               "buttonId": ".menu",
               "buttonText": {
                  "displayText": "MENU"
               },
               "type": "RESPONSE"
            }
         ], {quoted:floc})
         break
         
        case 'info':  // Jangan Di Ubah Plise
               urlinfo = 'https://telegra.ph/file/5a8d6bf0339cc120bfb6c.jpg'
               thankslort = `┌──「 *INFORMATION* 」
│
├ *BOT TYPE* : NodeJS
├ *NAME*  : ikyy
├ *VERSION* : 1.0
├ *GITHUB* : Rizkiadiasa
│
├─「 *𝙏𝙃𝘼𝙉𝙆𝙎 𝙏𝙊* 」
│
├ ALLAH SWT
├ Nino Chan
├ ikyy Bot
├ Manurius
├ Arif
├ Fathur
├ Kwn² Yg Bantu Gw
├ And all creator bot
│
└──「 *${botName}* 」`
             ikyy.sendMessage(from, await getBuffer(urlinfo), image, {quoted: ftroli, caption: thankslort })
             break
case 'media':
if (isBan) return reply(mess.ban)
if (!q) return reply('Urlnya?')
reply(mess.wait)
sendMediaURL(from, `${args[0]}`, "").catch(() => reply('Error'))
break
      case 'get':
      case 'fetch': //ambil dari nuru
             if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
             res = await fetch(q)
             if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
             delete res
             throw `Content-Length: ${res.headers.get('content-length')}`
}
             if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
             txtx = await res.buffer()
             try {
             txtx = util.format(JSON.parse(txtx+''))
             } catch (e) {
             txtx = txtx + ''
             } finally {
             reply(txtx.slice(0, 65536) + '')
}
             break
      case 'searchmsg': 
case 'caripesan':  //by ANU TEAM
             if (args.length < 1) return reply(`Pesan Yang Mau Dicari Apaan?\nContoh : ${prefix + command} halo|10`)
             teks = arg
             if (teks.includes("|")) { 
             try {
             var ve = teks.split("|")[0]
             var za = teks.split("|")[1]
             sampai = `${za}`
             if (isNaN(sampai)) return reply('Harus berupa Angka!')
             batas = parseInt(sampai) + 1
             if (batas > 30) return reply('Maks 30!')
             reply(mess.wait)
             cok = await ikyy.searchMessages(`${ve}`, from, batas,1) 
             if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
             if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
             for (i=1;i < cok.messages.length;i++) {
             if (cok.messages[i].message) {
             ikyy.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
}
}
             } catch (e) {
             return reply(String(e))
}
             } else {
             reply(`Format salah tod, ini contoh format yang benar : ${prefix + command} halo|10`)
}
             break
       case 'lolkey':
   case 'cekapikey':



if (args.length < 1) return reply(`Ketik ${prefix}lolkey [Apikeynya]`) 



anu = await fetchJson(`http://Api.lolhuman.xyz/api/checkapikey?apikey=${q}`)



  teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = http://Api.lolhuman.xyz`



  ikyy.sendMessage(from, teks, text, {quoted: freply})



  break
       case 'report':
case 'bugreport':
const pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftroli })
var nomor = mek.participant
const teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
ikyy.sendMessage(`6289636634511@s.whatsapp.net`, options, text, { quoted: ftroli })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
       case 'readall':
              totalchat.map( async ({ jid }) => {
              await ikyy.chatRead(jid)
})
              reply(`\`\`\`Berhasil membaca ${unread.length} Chat !\`\`\``)
              console.log(totalchat.length)
              break

//------------------< Enable/Disable >-------------------
       case 'leveling':
              if (!isGroup) return reply(mess.only.group)
              if (ar[0] === 'enable') {
              if (isLevelingOn) return reply('Fitur leveling telah diaktifkan sebelumnya.')
            _leveling.push(from)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              reply('Fitur leveling berhasil diaktifkan.')
              } else if (ar[0] === 'disable') {
              var anup = _leveling.indexOf(from)
            _leveling.splice(anup, 1)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              reply('Fitur leveling berhasil dimatikan.')
              } else {
              reply('Pilih enable atau disable!')
}
              break
       case 'antilink':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (!q) return reply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return reply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              reply(`Pilih enable atau disable`)
}
              break
       case 'welcome':
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
        case 'mute':
               if (!isGroup) return reply(mess.only.group)
               if (!isGroupAdmins) return reply(mess.only.admin)
               if (args.length < 1) return reply('!mute enable/disable')
               if (args[0].toLowerCase() === 'enable'){
               if (isMuted) return reply(`udah di mute`)
               mute.push(from)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               reply(`*...:* *MUTE ON* *:...*\n\nPerhatian untuk member grup\nBot telah di mute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`)
               } else if (args[0].toLowerCase() === 'disable'){
               anu = mute.indexOf(from)
               mute.splice(anu, 1)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               reply(`*...:* *𝙈𝙐𝙏𝙀 𝙊𝙁𝙁* *:...*\n\nPerhatian untuk member grup\nBot telah di unmute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`)
               } else {
               reply(`Pilih enable atau disable`)
}
               break
        case 'grupsetting':
        case 'groupsetting':
               if (!isGroup) return reply(mess.only.group)
               if (!isGroupAdmins) return reply(mess.only.admin)
               list = []
               com = [`group open`,`leveling enable`,`welcome enable`,`antilink enable`,`mute enable`]
               comm = [`group close`,`leveling disable`,`welcome disable`,`antilink disable`,`mute disable`]
               listnya = [`Group open/close`,`Leveling enable/disable`,`Welcome enable/disable`,`Antilink enable/disable`,`Mute enable/disable`]
               suruh = [`Enable`, `Disable`]
               fiturname = [`Group`,`Leveling`,`Welcome`,`Antilink`,`Mute`]
               startnum = 0; let startnu = 0; let startn = 0;let start = 0
               startnumm = 1
               for (let x of com) {
               var yy = {title: `${listnya[startnum++]}`,
                    rows: [
                       {
                        title: `${suruh[0]}`,
                        description: `\nMengaktifkan ${fiturname[startnu++]}`,
                        rowId: `${prefix}${x}`
                      },{
                        title: `${suruh[1]}`,
                        description: `\nMenonaktifkan ${fiturname[startn++]}`,
                        rowId: `${prefix}${comm[start++]}`
                      }
                    ]
                   }
                        list.push(yy)
           }
             listmsg(from, `Group Setting`, `Atur Settingan Grup anda disini......`, list)
             break
      case 'group':
      case 'grup':
             if (!isGroup) return reply(mess.only.group)
             if (!isGroupAdmins) return reply(mess.only.admin)
             if (!isBotGroupAdmins) return reply(mess.only.admin)
             if (args.length < 1) return reply('!group open/close')
             if (args[0].toLowerCase() === 'open'){
             ikyy.groupSettingChange(from, "announcement", false)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'close'){
             ikyy.groupSettingChange(from, "announcement", true)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'close'){
             ikyy.groupSettingChange(from, "announcement", true)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'open'){
             ikyy.groupSettingChange(from, "announcement", false)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else {
             reply(`Pilih open atau close`)
}
             break
             
             case 'antidelete':
             if (!isOwner) return (`only owner`)
if (args.length < 1) return reply('Pilih enable atau disable')
if (args[0] === "enable") {
if (antidel === true) return
antidel = true
reply(`Succes mengaktifkan antidelete`)
} else if (args[0] === "disable") {
if (antidel === false) return
antidel = false
reply(`Succes mematikan antidelete`)
} else {
reply(`Pilih enable atau disable`)
}
break

case 'notif':
if (!isGroup) return reply('Gc Only')
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await ikyy.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: freply
}
await ikyy.sendMessage(from, options, text)
break
case 'nsfw':
        if (!isGroup) return reply(mess.only.group)
             if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}nsfw enable`)
if ((args[0]) === 'enable') {
if (isNsfw) return reply('Sudah Aktif Kak')
nsfww.push(from)
fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
reply('Sukses mengaktifkan fitur nsfw')
} else if ((args[0]) === 'disable') {
if (!isNsfw) return reply('Sudah Mati Kak')
var ini = nsfww.indexOf(from)
nsfww.splice(ini, 1)
fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
reply('Sukses menonaktifkan fitur nsfw')
} else {
reply('enable untuk mengaktifkan, disable untuk mematikan')
}
break

case 'autosticker':
case 'autostiker':
        if (!isGroup) return reply(mess.only.group)
             if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}autosticker enable`)
if ((args[0]) === 'enable') {
if (isAutoSticker) return reply('Sudah Aktif Kak')
autosticker.push(from)
fs.writeFileSync('./database/group/autosticker.json', JSON.stringify(autosticker))
reply('autosticker aktif')
} else if ((args[0]) === 'disable') {
if (!isAutoSticker) return reply('Sudah Mati Kak')
var ini = autosticker.indexOf(from)
autosticker.splice(ini, 1)
fs.writeFileSync('./database/group/autosticker.json', JSON.stringify(autosticker))
reply('autosticker nonaktif')
} else {
reply('enable untuk mengaktifkan, disable untuk mematikan')
}
break
//------------------< Menunya Bang:v >-------------------
      case 'don':
gopeynya = `https://telegra.ph/file/4866ab85d88c8acd425d1.jpg`
teksnya = `scan di atas`
             ikyy.sendMessage(from, await getBuffer(gopeynya), image, {quoted: freply, caption: teksnya, thumbnail: Buffer.alloc(0) })
             break
      case 'infoig':
             reply(`Grυხ ხᧉხɑs ρrⱺოⱺsi, ᑯisυsυn ⱺƖᧉɦ Oωnᧉr Mხᧉოcɑns Stⱺrᧉ.
᭣᭫.ཻུ۪۪🌱˖࣪.۪۪𖣁 https://chat.whatsapp.com/GFVSoPjWUgf4kYAq80FP2D
᭣᭫.ཻུ۪۪🌱˖࣪.۪۪𖣁 https://chat.whatsapp.com/DDnSWkNC5Pp13cHR33MJRO
᭣᭫.ཻུ۪۪🌱˖࣪.۪۪𖣁 https://chat.whatsapp.com/CZjcOy5LVmc7FvMC3egf3J
᭣᭫.ཻུ۪۪🌱˖࣪.۪۪𖣁 https://chat.whatsapp.com/IZ4WEYwfhhVIvBUpRLzT5X
᭣᭫.ཻུ۪۪🌱˖࣪.۪۪𖣁 https://chat.whatsapp.com/BsMcOsXiyCN5ryKmhsYJ5C
᭣᭫.ཻུ۪۪🌱˖࣪.۪۪𖣁 https://chat.whatsapp.com/FvPngKgkMI9FQXpszTuHhZ`)
             break
      case 'gc':
      reply(`Grυხ ხᧉხɑs ρrⱺოⱺsi, ᑯisυsυn ⱺƖᧉɦ Oωnᧉr Mხᧉოcɑns Stⱺrᧉ.
᭣᭫.ཻུ۪۪🌱˖࣪.۪۪𖣁 https://chat.whatsapp.com/GFVSoPjWUgf4kYAq80FP2D
᭣᭫.ཻུ۪۪🌱˖࣪.۪۪𖣁 https://chat.whatsapp.com/DDnSWkNC5Pp13cHR33MJRO
᭣᭫.ཻུ۪۪🌱˖࣪.۪۪𖣁 https://chat.whatsapp.com/CZjcOy5LVmc7FvMC3egf3J
᭣᭫.ཻུ۪۪🌱˖࣪.۪۪𖣁 https://chat.whatsapp.com/IZ4WEYwfhhVIvBUpRLzT5X
᭣᭫.ཻུ۪۪🌱˖࣪.۪۪𖣁 https://chat.whatsapp.com/BsMcOsXiyCN5ryKmhsYJ5C
᭣᭫.ཻུ۪۪🌱˖࣪.۪۪𖣁 https://chat.whatsapp.com/FvPngKgkMI9FQXpszTuHhZ`)
      break
      
      
      case 'jadibot':
             if (!isOwner) return  reply(mess.only.owner)
             const _0x5f10=['1ubdcbO','202171TkLMwo','284052dVVNCo','42JxCsde','24890OaehfM','./jadibot.js','26826mdmYhJ','176EqLcNV','55194kArISZ','6GRvhmu','314893OwJFDH'];const _0x470b71=_0x5476;function _0x5476(_0x56372d,_0x51b653){return _0x5476=function(_0x5f107a,_0x54761a){_0x5f107a=_0x5f107a-0xd8;let _0x336fbf=_0x5f10[_0x5f107a];return _0x336fbf;},_0x5476(_0x56372d,_0x51b653);}(function(_0x4b0f8a,_0x1f534e){const _0x1acfb6=_0x5476;while(!![]){try{const _0x55ab94=-parseInt(_0x1acfb6(0xdc))+parseInt(_0x1acfb6(0xe2))*parseInt(_0x1acfb6(0xde))+-parseInt(_0x1acfb6(0xe1))*parseInt(_0x1acfb6(0xdb))+parseInt(_0x1acfb6(0xda))+-parseInt(_0x1acfb6(0xdd))+parseInt(_0x1acfb6(0xdf))+parseInt(_0x1acfb6(0xd8))*parseInt(_0x1acfb6(0xd9));if(_0x55ab94===_0x1f534e)break;else _0x4b0f8a['push'](_0x4b0f8a['shift']());}catch(_0x4a8ec9){_0x4b0f8a['push'](_0x4b0f8a['shift']());}}}(_0x5f10,0x285aa));const {jadibot}=require(_0x470b71(0xe0));jadibot(ikyy,from,sender,reply,mek);
             break
      case 'stopjadibot':
      case 'stopbot':
             const _0x1427=['2584oRLTbU','3849mFwfyJ','./jadibot.js','71LvrzJG','286372cCrXrQ','1yPMtDu','1AjjlYF','456046PuhVDs','394eRcMph','746574pwCcoE','625699UVPwUh','1029671oWZdcF'];const _0x49a386=_0x39bb;function _0x39bb(_0x399e0b,_0x2d0c73){return _0x39bb=function(_0x1427be,_0x39bbc5){_0x1427be=_0x1427be-0x132;let _0x12e62d=_0x1427[_0x1427be];return _0x12e62d;},_0x39bb(_0x399e0b,_0x2d0c73);}(function(_0x49c476,_0x4d8227){const _0x22a1e5=_0x39bb;while(!![]){try{const _0x311704=parseInt(_0x22a1e5(0x138))*parseInt(_0x22a1e5(0x13c))+parseInt(_0x22a1e5(0x13b))*parseInt(_0x22a1e5(0x136))+-parseInt(_0x22a1e5(0x134))+-parseInt(_0x22a1e5(0x13d))*parseInt(_0x22a1e5(0x133))+parseInt(_0x22a1e5(0x137))+-parseInt(_0x22a1e5(0x139))+-parseInt(_0x22a1e5(0x13a))*parseInt(_0x22a1e5(0x135));if(_0x311704===_0x4d8227)break;else _0x49c476['push'](_0x49c476['shift']());}catch(_0x25e28b){_0x49c476['push'](_0x49c476['shift']());}}}(_0x1427,0x8b9f1));const {stopjadibot}=require(_0x49a386(0x132));stopjadibot(ikyy,from,sender,mek);
             break
             
             //HABISSSS//
default:

if (budy.includes(`assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }

if (budy.includes(`Assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }
                  
                  if (budy.includes(`syalom`)) {
                  reply(`waalaikumsalam`)
                  }
/**if (budy.includes("Bot")) {
      satu = fs.readFileSync('./mp3/bot.mp3');
ikyy.sendMessage(from, satu, MessageType.audio, {quoted: fvn, mimetype: 'audio/mp4', ptt:true})         
}**/
if (budy.includes("Numa")){

ikyy.updatePresence(from, Presence.composing)

const loli = fs.readFileSync('./assets/numa')

        ikyy.sendMessage(from, loli, MessageType.audio, {quoted: fvn, mimetype: 'audio/mp4', ptt:true})

        const d = fs.readFileSync('./sticker/jget.webp');

        ikyy.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj numa numa yei", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})

        }
          

if (fs.existsSync(`./media/${from}.json`)) {
gelutSkuy = setGelud(`${from}`)
if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
gelutSkuy.status = true
rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
winR = rand0m[Math.floor(Math.random() * rand0m.length)]
fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
starGame = `👑 Gelud Game ??🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
   ikyy.sendMessage(from, starGame, text, {quoted: ftroli, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
fs.unlinkSync("./media/" + from + ".json");
} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
ikyy.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak??🏻`, text, {quoted: ftroli, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
fs.unlinkSync("./media/" + from + ".json");
}
}

if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  ikyy.sendMessage(from, ucapan, text, {quoted: ftroli, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
ikyy.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
ikyy.sendMessage(from, ucapan1, text, {quoted: ftroli, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri ??👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
ikyy.sendMessage(from, ucapan, text, {quoted: ftroli, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
ikyy.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*?? Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]} 

${ttt}`
ikyy.sendMessage(from, ucapan, text, {quoted: ftroli, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
if (/^=?>/.test(budy) && (isOwner || mek.key.fromMe)){

let parse = /^=>/.test(budy) ? budy.replace(/^=>/,'return') : budy.replace(/^>/,'')

try{

let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e })

return reply(require('util').format(evaluate))

} catch(e){

return reply(require('util').format(e))

}
}
if (!isGroup && isCmd && !mek.key.fromMe){
return sendButMessage(from, `*Maaf @${senderr.split('@')[0]}, command ${prefix + command} tidak ada dalam menu*`, `silahkan liat lagi di menu ya\n jangan spam bot`, [
            {
               "buttonId": ".menu",
               "buttonText": {
                  "displayText": "MENU"
               },
               "type": "RESPONSE"
            }
         ], {quoted:mek})
}
} 
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Pesan : ${budy} Dari`, color(pushname))
}
} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
console.log('Message : %s', color(e, 'cyan'))
        }
}
}


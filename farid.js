const {
    WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require("@adiwajshing/baileys")
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

// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();

const { downloadMenu, infoMenu, gameMenu, groupMenu, funMenu, wibuMenu, ownerMenu, stickerMenu, otherMenu, rulesBot } = require('./message/help.js')
const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
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
public =false
offline = false
public = false
banChats = false
autovn = true;
autoketik = true;
autojoin = false
Menuukhty = false
fake = '𝆑ₐᵣ₋𝆎 流何・'
namaowner = "FARID " 
nomerowner = '6285692949920' 
hit_today = []
ky_ttt = []
const setGelud = require('./lib/gameGelud.js')
const game = require("./lib/game");
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]


let fakeimage = fs.readFileSync("./media/wpmobile.png")
let errorImg = 'https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg'
let setting = JSON.parse(fs.readFileSync('./setting.json'))

owner = setting.owner
gamewaktu = setting.gamewaktu

// Database
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
const antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const banc = JSON.parse(fs.readFileSync('./database/bc.json'))

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
const _heal = JSON.parse(fs.readFileSync('./database/adventure/heal.json'))
const _potion = JSON.parse(fs.readFileSync('./database/adventure/potion.json'))
// Sticker Cmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
}
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Good Night'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Good Afternoon'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Good Morning'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Good Evening'
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
/*================================HEAL/ENERGY==============================*/
            const bayarHeal = (sender, amount) => {
        	let position = false
            Object.keys(_heal).forEach((i) => {
            if (_heal[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            _heal[position].heal -= amount
            fs.writeFileSync('./database/adventure/heal.json', JSON.stringify(_heal))
            }
            }
            const addHealUser = (sender, amount) => {
            let position = false
            Object.keys(_heal).forEach((i) => {
            if (_heal[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            _heal[position].heal -= 25
            fs.writeFileSync('./database/adventure/heal.json', JSON.stringify(_heal))
            }
            }
		    const healAdd = (sender) => {
            let position = false
            Object.keys(_heal).forEach((i) => {
            if (_heal[i].id == sender) {
            position = i
            }
            })
            if (position !== false) {
            _heal[position].heal += 25
            fs.writeFileSync('./database/adventure/heal.json', JSON.stringify(_heal))
             }
             }
/*================================POTION==============================*/
        const bayarPotion = (sender, amount) => {
        	let position = false
            Object.keys(_heal).forEach((i) => {
            if (_potion[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            _potion[position].potion -= amount
            fs.writeFileSync('./database/adventure/potion.json', JSON.stringify(_potion))
            }
            }
            const addPotioUser = (sender, amount) => {
            let position = false
            Object.keys(_potion).forEach((i) => {
            if (_potion[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            _potion[position].potion -= amount
            fs.writeFileSync('./database/adventure/potion.json', JSON.stringify(_potion))
            }
            }
		    const potionAdd = (sender) => {
            let position = false
            Object.keys(_potion).forEach((i) => {
             if (_potion[i].id == sender) {
             position = i
            }
            })
            if (position !== false) {
            _potion[position].potion += 1
            fs.writeFileSync('./database/adventure/potion.json', JSON.stringify(_potion))
            }
            }
/*================================AFK==============================*/

const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}


module.exports = farid = async (farid, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
		global.ky_ttt
		global.blocked
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]        
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
const Bfake = fs.readFileSync ('./media/image/fake.jpeg','base64')
  
       const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
        const tanggal = moment().format("ll")
        const jam = moment().format("HH:mm:ss z")
        const botNumber = farid.user.jid
        const ownerNumber = setting.ownerNumber
		const ownerName = setting.ownerName
		const botName = setting.botName
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? farid.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const totalchat = await farid.chats.all()
		const groupMetadata = isGroup ? await farid.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? farid.user.jid : farid.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? farid.user.name : conts.notify || conts.vname || conts.name || '-'
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
   const isBanChat = isGroup ? banc.includes(from) : false
     const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
   let d = new Date
       let locale = 'id'
       let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
     let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
        let week = d.toLocaleDateString(locale, { weekday: 'long' })
			let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
			let waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })
// here button function
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

        const gcount = setting.gcount
        
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = farid.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Click Here","listType": "SINGLE_SELECT","sections": list}},{quoted :mek})
            return farid.relayWAMessage(po, {waitForAck: true})
        }
        //PUBLIC
             if (!public){
if (!mek.key.fromMe && !isOwner) return
} else {
if (mek.key.fromMe && !mek.key.fromMe) return
}
   const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";
    if (prefix && command) cmdadd();
      
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
        const reply = (teks) => {
	      farid.sendMessage(from, teks, text, {quoted:mek, thumbnail: fakeimage})
        }
        const sendMess = (hehe, teks) => {
           farid.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? farid.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.png')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : farid.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.png')}, extendedText, { sendEphemeral: true, quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const sendText = (from, text) => {
           farid.sendMessage(from, text, MessageType.text)
        }
        const textImg = (teks) => {
           return farid.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./media/wpmobile.png')})
           }
        const katalog = (teks) => {
        res = farid.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "*_©Farz_*", "thumbnail": fakeimage, "surface": 'CATALOG' }}, {quoted:fgc})
        farid.relayWAMessage(res)
             
        }
        const sendFakeStatus = (from, teks, faketeks) => {
        farid.sendMessage(from, teks, text, { thumbnail: fakeimage, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 77777, status: 200, thumbnail: fs.readFileSync('./media/wpmobile.png'), surface: 200, message: `🍂𝆑ₐᵣ₋𝆎 流何🍂`, orderTitle: `🍂𝆑ₐᵣ₋𝆎 流何🍂`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true }})
        }
//======================FAKE FARID   =====================    
        const fgiv = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `🍂𝆑ₐᵣ₋𝆎 流何・🍂\nHai Kak ${pushname}`,'jpegThumbnail': fs.readFileSync('./media/wpmobile.png')}}} 
        const floc1 = {
                  key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {locationMessage: {degreesLatitude: -7.0389318, degreesLongitude: 113.8969749, name: 'Ravines Valley', address: '@faaaaarr__'}}}
        const fgif = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `🍂𝆑ₐᵣ₋𝆎 流何・🍂\n𝑪𝒐𝒎𝒎𝒂𝒏𝒅 𝑬𝒙𝒆𝒄𝒖𝒕𝒆𝒅 : ${command}`,'jpegThumbnail': fs.readFileSync('./media/wpmobile.png')}}} 
        const fgc = {
         key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `🍂𝆑ₐᵣ₋𝆎 流何・🍂\n𝑪𝒐𝒎𝒎𝒂𝒏𝒅 𝑬𝒙𝒆𝒄𝒖𝒕𝒆𝒅 : ${command}`, 'jpegThumbnail': fs.readFileSync('./media/wpmobile.png')}}}
         const fgc2 = {
         key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `🍂𝆑ₐᵣ₋𝆎 流何・🍂\n𝖡𝗋𝗈𝖺𝖽𝖼𝖺𝗌𝗍 𝖬𝖾𝗌𝗌𝖺𝗀𝖾 `, 'jpegThumbnail': fs.readFileSync('./media/wpmobile.png')}}}
        const ftroli = {
         key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 2021,status: 1,surface : 1,message: `𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚メ\n🍂𝆑ₐᵣ₋𝆎 流何・🍂`,orderTitle: 'Bang',thumbnail: fs.readFileSync('./media/wpmobile.png'), sellerJid: '0@s.whatsapp.net'}}}
        const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/wpmobile.png')
        //======================FAKE FARID   =====================    
        }}}
       const math = (teks) => {
           return Math.floor(teks)
       }
       const kick = function(from, orangnya){
	       for (let i of orangnya){
	       farid.groupRemove(from, [i])
        }
        }
       const kickMember = async(id, target = []) => {
           let group = await farid.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = farid.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await farid.groupRemove(from, [i])
        } else {
           await farid.sendMessage(id, "Not Premited!", "conversation")
        }
    }
}
       const add = function(from, orangnya){
	       farid.groupAdd(from, orangnya)
}
      const sendBug = async(target, teks) => {
           if (!teks) teks = '.'
           await farid.relayWAMessage(farid.
           prepareMessageFromContent(target, farid.
           prepareDisappearingMessageSettingContent(0),
           {}),{waitForAck:true})
           farid.sendMessage(target, teks, 'conversation')
}
       const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       farid.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: fgc})
}
      const hideTag = async function(from, text){
	       let anu = await farid.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       farid.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/Nakano.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
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
           farid.sendMessage(to, media, type, {quoted: mek, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
      const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       farid.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       farid.sendMessage(from, hasil, type, options).catch(e => {
	       farid.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
          let authorname = farid.contacts[from] != undefined ? farid.contacts[from].vname || farid.contacts[from].notify : undefined	
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
       function formatDate(n, locale = 'id') {
       let d = new Date(n)
       return d.toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'
    })
    }
       
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

if (isBanChat) {
if (!isOwner && !mek.key.fromMe) return
}
///Antivirtex
if (isGroup && isAntiVirtex && !isOwner && !isGroupAdmins && isBotGroupAdmins){ 
      if (budy.length > 700) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("「 A N T I V I R T E X  D E T E C T E D 」 \n\nMaaf Kamu Akan Dikick");
        nayla.groupRemove(from, [sender]);
      }
    }
//*ANTIDELETE*/
    const dataRevoke = JSON.parse(fs.readFileSync('./database/gc-revoked.json'))
    const dataCtRevoke = JSON.parse(fs.readFileSync('./database/ct-revoked.json'))
    const dataBanCtRevoke = JSON.parse(fs.readFileSync('./database/ct-revoked-banlist.json'))
    const isRevoke = dataRevoke.includes(from)
    const isCtRevoke = dataCtRevoke.data
    const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
// Anti link
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                farid.groupRemove(from, [sender])
            }
        }
                //autovn
             if (autovn) {
	if (autovn === false) return
await farid.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await farid.updatePresence(from, Presence.composing)
}  
if (isGroup && autojoin == true) {
      if (budy.includes("://chat.whatsapp.com/")) {
        console.log(
          color("[AUTO-JOIN]", "red"),
          color("YAHAHAHHAHAH", "white")
        );
        farid.query({
          json: [
            "action",
            "invite",
            `${budy.replace("https://chat.whatsapp.com/", "")}`,
          ],
        });
      }
    }
        // AFK
	if (isGroup) {
		if (!mek.key.fromMe && mek.key.fromMe) return
		for (let x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			const getId = afk.getAfkId(x, _afk)
			const getReason = afk.getAfkReason(getId, _afk)
			const getTime = afk.getAfkTime(getId, _afk)
			propil = 'https://telegra.ph/file/e6a00a272c52a266d0804.jpg'
            prop = await getBuffer(propil)
farid.sendMessage(from, { contentText: `*『 AFK MODE 』💤*\n*Sssttt! Orangnya lagi AFK, jangan diganggu!*`, footerText: `• *Alasan*  : ${getReason}\n• *Sejak* : ${getTime}               `, buttons: [{ buttonId: `p`, buttonText: { displayText: 'Okeh' }, type: 1 },{ buttonId: `p`, buttonText: { displayText: 'Notif' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: prop, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
   
    }}
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    const getTime = afk.getAfkTime(sender, _afk)
		    const getReason = afk.getAfkReason(sender, _afk)
		    const ittung = ms(await Date.now() - getTime)
		    const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
		farid.sendMessage(from,(pep), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/f7fa2af8867fb5ff3e012.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
           _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
		}
	    }
	
     // Auto Read
        //farid.chatRead(from, "read")
         // CMD
        if (isCmd && !isGroup)
            console.log(color('[ CMD ]'), color(time, 'greenyellow'), color(`${command} [${args.length}]`), 'from', color(pushname, 'greenyellow'))
        
        if (isCmd && isGroup)
            console.log(color('[ CMD ]'), color(time, 'greenyellow'), color(`${command} [${args.length}]`), 'from', color(pushname, 'greenyellow'), 'in', color(groupName))
            
            if (!mek.key.fromMe && banChats === true) return
            switch(command){
           
           case 'owner7':
           case 'creator8':
               sendKontak(from, `${owner}`, `${ownerName}`, 'Sibukk!!')
               await sleep(1000)
               txtt =`Hai Kak ${pushname}\nItu Ownerku, Mau tau soal apa ya?`
               buttons = [{buttonId: `${prefix}sourcecode`,buttonText:{displayText: 'SC BOT'},type:1},{buttonId:`${prefix}donasi`,buttonText:{displayText:'DONASI'},type:1}]
               buttonsMessage = { contentText: `${txtt}`, footerText: 'Jangan Sungkan Chat Ya Kak', buttons: buttons, headerType: 1 }
               prep = await farid.prepareMessageFromContent(from,{buttonsMessage},{})
               farid.relayWAMessage(prep)
               break     
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await farid.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
farid.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
} 
case 'owner':{
const ownerContact = [nomerowner, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
let ini_list = []
for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {
const vname = farid.contacts[i] != undefined ? farid.contacts[i].vname || farid.contacts[i].notify : undefined
ini_list.push({
"displayName": `${namaowner}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await farid.sendMessage(from, {
"displayName": `Kontak : ${ownerName}`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: fgc})
farid.sendMessage(from, `Nih Kak Contact Owner Ku 🐣`, text, {quoted: hehe})
}
break
           case 'menu':
           case 'help':
           user = `${isOwner ? 'OWNER' : 'User'}`
           timestampe = speed();
           latensie = speed() - timestampe   
           uptime = process.uptime();             
           thu = await farid.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)          
           far = '6285692949920@s.whatsapp.net'    
           anu = fs.readFileSync('./media/image/Fab.js');
           jsonAnu = JSON.parse(anu);
           randIndex = Math.floor(Math.random() * jsonAnu.length);
           randKey = jsonAnu[randIndex];
           nah = await getBuffer(randKey.result)   
           if (Menuukhty == false) menu =`  𝆑ₐᵣ₋𝆎 流何・             ✘✘✘
         
  *『 BOT INFO 』*
• Creator : @${far.split('@')[0]}
• Autoreg : ${hit_today.length} User
• Prefix : Multi Prefix 
• Mode : ${public ? "Public-Mode" : "Self-Mode"}
• Time : ${time} Wib
• Speed : ${latensie.toFixed(4)} Second
• Active : ${runtime(process.uptime())}

*『 USER INFO 』*
• Name : ${pushname}
• Tag : @${sender.split('@')[0]}🍃
• Bio : ${thu.status}
• Status : ${isOwner ? 'Owner' : 'User'}
• User : ${isPremium ? 'Premium' : 'Not Premium'}

ø _*Note :*_ _Not all features work because i'm a newbie_ :)
`
groups = farid.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = farid.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'charging' : 'not charging'}`
              user = `${isOwner ? 'OWNER' : isPremium ? 'Premium' : 'User'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await farid.chats.all()
              latensie = speed() - timestampe
              thu = await farid.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)             
              total = math(`${groups.length}*${privat.length}`)                           
              anu = fs.readFileSync('./media/image/Fab.js');
              jsonAnu = JSON.parse(anu);
              randIndex = Math.floor(Math.random() * jsonAnu.length);
              randKey = jsonAnu[randIndex];
              nah = await getBuffer(randKey.result)   
              far = '6285692949920@s.whatsapp.net'
              if (Menuukhty == true) menu =` 流何・             ✘✘✘

  *『 USER INFO 』*  
• Name : ${pushname}
• Bio: ${thu.status}
• Status: ${isOwner ? 'Owner' : 'User'}
• User : ${isPremium ? 'Premium' : 'Not Premium'}

  *『 BOT INFO 』* 
• Creator  : @${far.split('@')[0]}
• Autoreg : ${hit_today.length} User
• Prefix : Multi Prefix 
• Mode : ${public ? "Public-Mode" : "Self-Mode"}
• Time  : ${jam} Wib
• Speed  : ${latensie.toFixed(4)} Second
• Active  : ${runtime(process.uptime())}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*『 ABOUT ME 』*
https://instabio.cc/Faar-Z
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*『 GROUP OFFICIAL 』*
https://bit.ly/3ADzjHD

ø _*Note :*_ _Not all features work because i'm a newbie_ :) 
`        

farid.sendMessage(from, { contentText: `${menu}`, footerText: '© 𝆑ₐᵣ₋𝆎 流何・', buttons: [{ buttonId: `!command`, buttonText: { displayText: '⋮☰ COMMAND' }, type: 1 },{ buttonId: `!botstat`, buttonText: { displayText: '✓ INFO BOT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: nah, contextInfo: {mentionedJid: [sender,far]}}}, 'buttonsMessage')
              break
     
case 'command':
case 'allmenu':
case 'menu2':
case 'allfitur':
anu = fs.readFileSync('./media/image/Fab.js');
           jsonAnu = JSON.parse(anu);
           randIndex = Math.floor(Math.random() * jsonAnu.length);
           randKey = jsonAnu[randIndex];
           gambar = await getBuffer(randKey.result)   
           far = '6285692949920@s.whatsapp.net'       
           menu = `𝆑ₐᵣ₋𝆎 流何・             ✘✘✘
           
_A simple whatsapp bot made with_
_nodejs by_ @${far.split('@')[0]} ,
_click read more to see features._

 ˏˋ°•*⁀➷
-ˋˏ✄┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
${readmore}
*『 STICKER MENU 』*

  ◕ ${prefix}bucinstick  
  ◕ ${prefix}toimg  
  ◕ ${prefix}attp *teks*  
  ◕ ${prefix}semoji *emoji*
  ◕ ${prefix}telesticker
  ◕ ${prefix}nulis *teks*
  ◕ ${prefix}sticker *reply foto*
  ◕ ${prefix}swm *pack|author*
  ◕ ${prefix}delwm *pack|author*
  ◕ ${prefix}take *pack|author*
  ◕ ${prefix}tourl *reply foto* 
  ◕ ${prefix}getpp *tag@*
  ◕ ${prefix}toimg *reply sticker*
  ◕ ${prefix}tomp3 
  ◕ ${prefix}tovideo *reply sticker gif*
  
*『 DOWNLOADER 』*

  ◕ ${prefix}ppcp
  ◕ ${prefix}nhdl *query*
  ◕ ${prefix}play *query*
  ◕ ${prefix}igdl *link*
  ◕ ${prefix}igstory *link*
  ◕ ${prefix}tiktokdl *link*
  ◕ ${prefix}mediafire *link*
  ◕ ${prefix}facebook *link*
  ◕ ${prefix}youtubedl *link*
  ◕ ${prefix}asupan

*『 SEARCH 』*
  
  ◕ ${prefix}brainly *query*
  ◕ ${prefix}image *query*
  ◕ ${prefix}google *query*
  ◕ ${prefix}ytsearch *query*
  ◕ ${prefix}pinterest *query*
  ◕ ${prefix}ytdesc *query*
  ◕ ${prefix}ghsearch *query*

*『 FUN GAME 』*

  ◕ ${prefix}adventure
  ◕ ${prefix}mining
  ◕ ${prefix}waktu
  ◕ ${prefix}cekmati *nama*
  ◕ ${prefix}toxic
  ◕ ${prefix}citacita
  ◕ ${prefix}nilai
  ◕ ${prefix}cekganteng
  ◕ ${prefix}cekcantik
  ◕ ${prefix}cekwatak
  ◕ ${prefix}truth
  ◕ ${prefix}dare
  ◕ ${prefix}jadian
  ◕ ${prefix}cantik
  ◕ ${prefix}ganteng
  ◕ ${prefix}babi
  ◕ ${prefix}beban
  ◕ ${prefix}apakah *teks*
  ◕ ${prefix}bisakah *teks*
  ◕ ${prefix}kapankah *teks*

*『 GROUP MENU 』*

  ◕ ${prefix}groupsetting
  ◕ ${prefix}group *open/close*
  ◕ ${prefix}getname *reply chat*
  ◕ ${prefix}getbio *reply chat*
  ◕ ${prefix}getnomor *reply chat*
  ◕ ${prefix}cekprofile *tag@*
  ◕ ${prefix}cekchat
  ◕ ${prefix}listonline
  ◕ ${prefix}afk *alasan*
  ◕ ${prefix}infogrup
  ◕ ${prefix}ownergroup
  ◕ ${prefix}wame
  ◕ ${prefix}linkgc
  ◕ ${prefix}revoke
  ◕ ${prefix}kick *reply chat*
  ◕ ${prefix}add *add 62*
  ◕ ${prefix}culik *idgroup*
  ◕ ${prefix}kickall
  ◕ ${prefix}leaveall
  ◕ ${prefix}listadmin
  ◕ ${prefix}setgrupname *teks*
  ◕ ${prefix}setdesc *teks*
  ◕ ${prefix}setppgrup *foto*
  ◕ ${prefix}tagall *teks*
  ◕ ${prefix}tagall2 *teks*
  ◕ ${prefix}infoall *teks*
  ◕ ${prefix}hidetag
  ◕ ${prefix}sticktag
  ◕ ${prefix}antivirtex *1/0*
  ◕ ${prefix}antilink *enable/disable*
  ◕ ${prefix}welcome *enable/disable*
  ◕ ${prefix}group *enable/disable*
  ◕ ${prefix}sider *reply chat bot*
  ◕ ${prefix}delete *reply chat bot*
  ◕ ${prefix}caripesan *pesan|4*

*『 OWNER MENU 』*

  ◕ ${prefix}bc
  ◕ ${prefix}bc2
  ◕ ${prefix}bcyt
  ◕ ${prefix}welc
  ◕ ${prefix}exif   
  ◕ ${prefix}public
  ◕ ${prefix}self
  ◕ ${prefix}online
  ◕ ${prefix}offline
  ◕ ${prefix}banchat
  ◕ ${prefix}unbanchat
  ◕ ${prefix}spam *teks|4*
  ◕ ${prefix}autovn *on/off*
  ◕ ${prefix}autoketik *on/off*
  ◕ ${prefix}join *linkgc*
  ◕ ${prefix}exif
  ◕ ${prefix}term
  ◕ ${prefix}shutdown 
  ◕ ${prefix}leaveall
  ◕ ${prefix}clearall
  ◕ ${prefix}listgroup
  ◕ ${prefix}setmenu
  ◕ ${prefix}setpp
  ◕ ${prefix}setbio
  ◕ ${prefix}setname
  ◕ ${prefix}setprefix *setprefix|prefix*
  ◕ ${prefix}cekapikey *query*
  ◕ ${prefix}sewa add/del *waktunya*
  ◕ ${prefix}premium add @tag|nomor
  ◕ ${prefix}premium del @tag|nomor
  
*『 SESSION & CMD 』*
  
  ◕ ${prefix}jadibot
  ◕ ${prefix}stopjadibot
  ◕ ${prefix}listjadibot
  ◕ ${prefix}setcmd *setcmd|command*
  ◕ ${prefix}delcmd *reply sticker*
  ◕ ${prefix}listcmd

*『 INFO MENU 』*

  ◕ ${prefix}kalender
  ◕ ${prefix}sewa
  ◕ ${prefix}ceksewa
  ◕ ${prefix}listsewa
  ◕ ${prefix}rules
  ◕ ${prefix}status
  ◕ ${prefix}botstat
  ◕ ${prefix}ping
  ◕ ${prefix}runtime
  ◕ ${prefix}donasi
  ◕ ${prefix}sourcecode
  ◕ ${prefix}owner
  ◕ ${prefix}grupbot
  ◕ ${prefix}listsewa
  ◕ ${prefix}listpremium
  ◕ ${prefix}bugreport *problem*
  
  `
buttons = [
					{ buttonId: `${prefix}rules`, buttonText: { displayText: 'RULES' }, type: 1 },
	                                { buttonId:`${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 }
				]
				buttons = {
					locationMessage: {
						degressLongitude: 0,
						degressLatitude: 1,
						address: 'a',
						jpegThumbnail: gambar
					},
					contentText: `${menu}`,
					footerText: `© 𝆑ₐᵣ₋𝆎 流何・`,
					buttons: buttons,
					headerType: 6
				}
				await farid.sendMessage(from, buttons, MessageType.buttonsMessage, {
					contextInfo: {
						externalAdReply: {},
						mentionedJid: [sender,far],
						forwardingScore: 777,
						isForwarded: true
					}, quoted: mek
				})
		break
case 'owner1':
gambur = 'https://telegra.ph/file/752f43ab8dd86b2df353e.jpg'
           gambar = await getBuffer(gambur)
menu = `
*INFO OWNER*

*Nama* : _Farid Rahman Fauzi_
*Umur* : _19 y.o_
*Status* : _Private_
*Pacar* : _10:v_

*INSTAGRAM*
https://instagram.com/faaaarr__

*CONTACT*
wa.me/6285692949920

*GITHUB*
https://github.com/Faridrfauzi/Pikawbotv2
`
buttons = [
					{ buttonId: `${prefix}farid`, buttonText: { displayText: 'NUMBER' }, type: 1 },
	                  { buttonId: `${prefix}infoig`, buttonText: { displayText: 'INSTAGRAM' }, type: 1 }              
				]
				buttons = {
					locationMessage: {
						degressLongitude: 0,
						degressLatitude: 1,
						address: 'a',
						jpegThumbnail: gambar
					},
					contentText: `${menu}`,
					footerText: `Bot WhatsApp`,
					buttons: buttons,
					headerType: 6
				}
				await farid.sendMessage(from, buttons, MessageType.buttonsMessage, {
					contextInfo: {
						externalAdReply: {},
						mentionedJid: [sender],
						forwardingScore: 777,
						isForwarded: true
					}, quoted: mek
				})
			break
case 'addsticker':
				svst = body.slice(12)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await farid.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./media/sticker/${svst}.webp`, delb)
				fs.writeFileSync('./media/stick.json', JSON.stringify(setiker))
				farid.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/Menu.jpg')} } } })
				farid.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/Menu.jpg')}}}})
break
case 'getsticker':
			case 'gets':
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list sticker')
				namastc = body.slice(12)
				result = fs.readFileSync(`./src/sticker/${namastc}.webp`)
				farid.sendMessage(from, result, sticker)
				break
           case 'liststicker':
				teks = '*Sticker List :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				farid.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": setiker } })
				break
//------------------< Ingfo Bot >-------------------
case 'sharelock':
if (args.length < 1) return reply(`Contoh : ${prefix}sharelock crew|bot`)
ppp = `${args.join(' ')}`
send = ppp.split("|")[0];
lok = ppp.split("|")[1];
farid.sendMessage(from, {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:send,address:lok}, MessageType.location)
break
case 'botstat':
case 'stat':
case 'stats':
case 'info':
groups = farid.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = farid.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              latensie = speed() - timestampe
              totalChat = await farid.chats.all()             
              total = math(`${groups.length}*${privat.length}`)
              anu = fs.readFileSync('./media/image/Fab.js');
           jsonAnu = JSON.parse(anu);
           randIndex = Math.floor(Math.random() * jsonAnu.length);
           randKey = jsonAnu[randIndex];
           gamb = await getBuffer(randKey.result)   
           far = '6285692949920@s.whatsapp.net'
                menu =`𝆑ₐᵣ₋𝆎 流何・             ✘✘✘

*『 STATISTIC BOT 』*
 • *Creator :* @${far.split('@')[0]}
 • Hit Today : ${hit_today.length} Hit
 • Total Hit : ${totalhit} Hit 
 • *Mode :* ${public ? "Public-Mode" : "Self-Mode"}
 • *Status :* Online
 • *Lib :* Baileys
 • *Type :* NodeJs
 • *Prefix :* Multi Prefix 
 • *Group Chats :* ${groups.length}
 • *Private Chats :* ${privat.length}
 • *Total Chats :* ${totalChat.length}
 • *Time :* ${jam} Wib
 • *Speed :* ${latensie.toFixed(4)} Second
 • *Active :* ${runtime(process.uptime())}

*『 DEVICE 』*
 • *Baterai :* ${baterai}% ${charger}
 • *Platform :* ${os.platform()}
 • *Ram Usage :* ${ram2}
 • *Hostname :* ${os.hostname()}
 • *Uptime :* ${runtime(process.uptime())}
 • *Os Version :* ${farid.user.phone.os_version}
 • *Device Manufacturer :* ${farid.user.phone.device_manufacturer}
 • *Device Model :* ${farid.user.phone.device_model}
 • *Os Build Number :* ${farid.user.phone.os_build_number}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*『 ABOUT ME 』*
https://instabio.cc/Faar-Z
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*『 GROUP OFFICIAL 』*
https://bit.ly/3ADzjHD

`
farid.sendMessage(from, { contentText: `${menu}`, footerText: '© 𝆑ₐᵣ₋𝆎 流何・', buttons: [{ buttonId: `!owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `!donasi`, buttonText: { displayText: '✓ DONASI' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: gamb, contextInfo: {mentionedJid: [sender,far]}}}, 'buttonsMessage')
              break
       case 'cekprofile':
          case 'cekprofil':
              if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
              linkkk = await farid.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
              bag = await getBuffer(linkkk)
              farid.sendMessage(from, buffer, image, {caption: "[ √ ] 𝚂𝚞𝚌𝚌𝚎𝚜𝚜...~", quoted: fgc })
              } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid === null || mek.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
              mberr = mek.message.extendedTextMessage.contextInfo.participant
              linkkk = await farid.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
              bag = await getBuffer(linkkk)
              farid.sendMessage(from, buffer, image, { quoted: fgc, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
              } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
              mberr = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
              linkkk = await farid.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
              bag = await getBuffer(linkkk)
              thu = await farid.getStatus(`${mberr.split('@')[0]}`, MessageType.text)       
              farid.sendMessage(from, `• *Name :* @${mberr.split("@")[0]}\n• *Bio :* ${thu.status}\n• *Status :* ${isOwner ? 'Owner' : 'User'}\n• *Api :* wa.me/${mberr.split("@")[0]}\n\n────────────────────`, text, {quoted: fgc, contextInfo: { "mentionedJid": [mberr],externalAdReply: { "title": `*•———•°「 INFO USER 」°•———•*`, mediaType: 2, thumbnail: bag, "mediaUrl": `https://www.instagram.com/reel/CT-24SNDAb-/?utm_medium=copy_link`}}})   
              }
              break
case 'cekchat':
groups = farid.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = farid.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
totalChat = await farid.chats.all()             
total = math(`${groups.length}*${privat.length}`)
cek =`• *Group Chats :* ${groups.length}
• *Private Chats :* ${privat.length}
• *Total Chats :* ${totalChat.length}
`
farid.sendMessage(from,cek, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `Hi Kak ${pushname}\n${ucapanWaktu}\n${time2}`,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted:fgc,quoted: fgc})
             break
case 'tes':
case 'status':
        farid.sendMessage(from, `✓ *STATUS :* ${offline ? 'OFFLINE' : 'ONLINE'}\n✓ *MODE :* ${public ? "PUBLIC-MODE" : "SELF-MODE"}\n✓ *ACTIVE :* ${runtime(process.uptime())}`, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `Hi Kak ${pushname}\n${ucapanWaktu}\n${time2}`,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted:fgc,quoted: fgc})
               break
case 'rules':
case 'rulesbot':
             farid.sendMessage(from, `🌹 *Syarat & Ketentuan* 🌹\n1. Teks dan nama pengguna WhatsApp anda kami simpan di dalam server selama bot aktif.\n2. Data anda akan di hapus ketika bot offline.\n3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim.\n4. Kami tidak pernah meminta anda untuk memberikan informasi pribadi.\n5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot.\n6. Cukup perintah 1x jika bot tidak merespon harap ulangi kembali, Jika di ulangi kembali tidak merespon, Bot tidak aktif\n7. Dilarang spam, Share virus virtex, Telpon, Video call, Kami akan blockir anda.\n8. Apapun yang anda perintah pada bot ini, *KAMI TIDAK BERTANGGUNG JAWAB!*\n\nOwner  BOTZ:\nwa.me/6285692949920\n\nTERIMA KASIH !~`, text, {quoted: fgc, contextInfo: { mentionedJid: [sender],externalAdReply: { "title": `${ucapanWaktu} Kak ${pushname}👋🏻`, mediaType: 2, "thumbnailUrl": `https://telegra.ph/file/c38858b69d154e048f897.jpg`, "mediaUrl": `https://youtu.be/dhYOPzcsbGM`}}})
             break
case 'kalender':
              farid.sendMessage(from,(`${ucapanWaktu}\n📆 Day : ${week} ${weton}\n⏰ Time : ${jam} Wib\n🗓️ Date : ${date}\n\n`),text, {quoted :fgc})
             break
case 'gcbot': case 'grupbot':
case 'groupbot':
           farid.sendMessage(from,(' *🌹『 GROUP OFFICIAL BOT 』🌹*\n\n➸ https://bit.ly/3ADzjHD\n\n_Ramein bwang_ 🗿 '), MessageType. text, {quoted: fgc, contextInfo: {mentionedJid: [sender], externalAdReply: { 'title': `${ucapanWaktu}\n${time2}`, thumbnailUrl: 'https://telegra.ph/file/99992a53ab0094bd9b586.jpg', sourceUrl: 'https://chat.whatsapp.com/EBI0KGZF9lrKa5YT9XMdma' }}})
             break
case 'infoig':
          farid.sendMessage(from, ` *🌹「 FOLLOW IG OWNER 」🌹* : https://www.instagram.com/faaaarr__/`, text, {quoted: fgc, contextInfo: {mentionedJid: [sender], externalAdReply: { 'title': `Hai Kak ${pushname}\n${ucapanWaktu}\n${time2}`, thumbnailUrl: 'https://telegra.ph/file/be275a73c34a73e704e1a.jpg', sourceUrl: 'https://instagram.com/faaaarr__?utm_medium=copy_link' }}})
            break
case 'sourcecode': 
case 'sc': 
case 'src':
          farid.sendMessage(from, `*🌹 SOURCE CODE🌹* :\nhttps://instabio.cc/Faar-Z`, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` 𝆑ₐᵣ₋𝆎 流何・\nBy Farz `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/2169e35fd61d51efc741c.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
               break
case 'runtime':
          farid.sendMessage(from,(` _Aktif selama ${runtime(process.uptime())}_`), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/2169e35fd61d51efc741c.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})              
              break
case 'ping':
case 'speed':
              timestampe = speed();
              latensie = speed() - timestampe
              farid.sendMessage(from, `「 *𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏* 」\nMerespon dalam ${latensie.toFixed(4)} Sec 💬`, text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": `Hai Kak ${pushname}\n${ucapanWaktu}\n${time2} WIB`,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/2169e35fd61d51efc741c.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})             
              break
case 'donate': 
case 'donasi':
       gambur = 'https://telegra.ph/file/081fa901c997038872fdc.jpg'
       gmbir = await getBuffer(gambur)
       menu = ` *『 DONASINYA KAK 』*
╭━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│𝓯⃝🥀 *XL* :
│»» 085692949920
│𝓯⃝☕ *DANA* :
│»» 085692949920
│𝓯⃝🪀 *CHAT OWNER*
│»» https://bit.ly/3lcHlAT
╰━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
`
buttons = [
					{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner🐣' }, type: 1 },
	                  
				]
				buttons = {
					locationMessage: {
						degressLongitude: 0,
						degressLatitude: 1,
						address: 'a',
						jpegThumbnail: gmbir
					},
					contentText: `${menu}`,
					footerText: `©  𝆑ₐᵣ₋𝆎 流何・`                          ,
					buttons: buttons,
					headerType: 6
				}
				await farid.sendMessage(from, buttons, MessageType.buttonsMessage, {
					contextInfo: {
						externalAdReply: {},
						mentionedJid: [sender],
						forwardingScore: 777,
						isForwarded: true
					}, quoted: mek
				})
			break
case 'sewabot':         
case 'belipremium':
       case 'buypremium':     
               hah = 'https://telegra.ph/file/15689627e607fb1812d65.jpg'
              gop = 'https://telegra.ph/file/b57b7eb75afe38d0031dd.jpg'
              buff = await getBuffer(gop)
              teksnya = `*──── 「 PRICE LIST 」 ────*

⛾ *Tarif Premium User adalah 10K Perbulan*
⛾ *Keuntungan Premium :*
⛾ *Bebas memakai fitur premium*
⛾ *Dapat Informasi Lebih dulu akan Update, Nomor Bot Baru (Jika Terbanned), dan Lainnya*
⛾ *Jika Tertarik,Kalian Bisa Bayar Melalui Metode Pembayaran di Bawah:*
──────────────────── 
𝓯⃝🥀 *XL* : »» 085692949920
𝓯⃝☕ *DANA* : »» 085692949920
𝓯⃝🪀 *CHAT OWNER🪶*
»» https://bit.ly/3lcHlAT
──────────────────── 
*_note_*:
*Pembelian Premium yang disertai SewaBot hanya akan membayar 20K (Diskon 5K)*`
buttons = [
					{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner 🐣' }, type: 1 },                 
				
]
				buttons = {
					locationMessage: {
						degressLongitude: 0,
						degressLatitude: 1,
						address: 'a',
						jpegThumbnail: buff
					},
					contentText: `${teksnya}`,
					footerText: `© 𝆑ₐᵣ₋𝆎 流何・`,
					buttons: buttons,
					headerType: 6
				}
				await farid.sendMessage(from, buttons, MessageType.buttonsMessage, {
					contextInfo: {
						externalAdReply: {},
						mentionedJid: [sender],
						forwardingScore: 777,
						isForwarded: true
					}, quoted: mek
				})
			break
//==============SOUND===========
case 'soundmenu':
case 'sm':
smn =`*『 SOUND MENU 』*

  ◕ ${prefix}sound
  ◕ ${prefix}sound2
  ◕ ${prefix}sound3
  ◕ ${prefix}sound4
  ◕ ${prefix}sound5
  ◕ ${prefix}sound6
  ◕ ${prefix}sound7

`
katalog(smn)
break
//================OWNERMENU===========
case 'premium':        
if (!mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
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
       
case 'getname':
        var ambl = mek.message.extendedTextMessage.contextInfo.participant
const sname = farid.contacts[ambl] != undefined ? farid.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : farid.contacts[ambl].notify || farid.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
reply(sname)
break
case "getbio":
        var yy = mek.message.extendedTextMessage.contextInfo.participant;
        var p = await farid.getStatus(`${yy}`, MessageType.text);
        reply(p.status);
        if (p.status == 401) {
          reply("Status Profile Not Found");
        }
        break;
        case 'spam':
        if (!mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
                if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argsi = arg.split("|")
				if (!argsi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argsi[1]) >= 1000000) return reply('Kebanyakan!')
				if (isNaN(argsi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argsi[1]; i++){
					farid.sendMessage(from, argsi[0], MessageType.text)
				}
				break
case 'getno':
case 'getnomor':
case 'gatenomer':
case 'gn':
if (!isGroup) return farid.sendMessage(from,(mess.only.group), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('REPLY PESAN TARGET!!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
reply(`${mentioned.split('@')[0]}`)
break
case 'banchat':
   if (!isGroup) return reply (mess.only.group)
   if (!mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
   if (isBanChat) return
   banc.push(from)
   fs.writeFileSync('./database/bc.json', JSON.stringify(banc, null, 2))
   farid.sendMessage(from,(`Succes Banchat In Group :\n✓ *${groupName}*`), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
break
case 'unbanchat':{
   if (!isGroup) return reply (mess.only.group)
   if (!isOwner && !mek.key.fromMe) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
   if (!isBanChat) return
let anu = banc.indexOf(from)
banc.splice(anu, 1)
fs.writeFileSync('./database/bc.json', JSON.stringify(banc, null, 2))
farid.sendMessage(from,(`Succes Unbanchat In Group :\n✓ *${groupName}*`), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
}
break
case 'clearmessage':
case 'clearall':
if (!mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
let chiit = await farid.chats.all()
  for (let i of chiit){
  farid.modifyChat(i.jid, 'clear', {
  includeStarred: false
  })
  }
 farid.sendMessage(from,(' ```Success Clearall``` '), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
  break

case 'getquoted':  
case 'mek':   
             reply(JSON.stringify(mek.message.extendedTextMessage.contextInfo, null, 3))
             break
      
case 'setbio':
				if (!isOwner) return reply(mess.only.owner)
				if (args.length < 1) return reply('Teksnya?')
					iyek = body.slice(8)
					farid.setStatus(`${iyek}`)
					sendFakeStatus(from, 'Sukses', fake)
					break
					case 'setname':
					if (!isOwner) return reply(mess.only.owner)
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                farid.updateProfileName(anu)
                sendFakeStatus(from, 'Sukses', fake)
                break
case 'setprofile':
case 'setpp':
				farid.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('Reply imagenya!')
					if (!mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
					enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await farid.downloadAndSaveMediaMessage(enmediau)
					await farid.updateProfilePicture(botNumber, mediau)
					farid.sendMessage(from, `\`\`\`Succes\`\`\``, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: await getBuffer(mek.imgUrl), surface: 200, message: fake, orderTitle: fake, sellerJid: '0@s.whatsapp.net'}}}})
					break
case 'online':
case 'on':
         if (!mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
				offline = false
				sendFakeStatus(from, ' ```Status : ONLINE``` ')
				break
case 'offline':
case 'off':
		if (!mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
				offline = true
                waktuafk = Date.now()
                anuu = body.slice(9) ? body.slice(9) : '-'
                alasanafk = anuu
				sendFakeStatus(from, ' ```Fitur OFFLINE diaktifkan``` ')
				break
case 'listgrup': 
case 'listgroup':{
	   if (!isGroup) return reply(mess.only.group)
	if (!mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
                let totalchat = await farid.chats.all()
				let i = []
				let giid = []
                let grupp = []
				for (let mem of totalchat){
					i.push(mem.jid)
				}
				for (let id of i){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
              for (let e of giid){
	         	let ingfo = await farid.groupMetadata(e)
	        	grupp.push(ingfo)
	        }
			    	let txt = `*List Group*\n\*Total* : *${grupp.length}*\n\n`
				    for (let i = 0; i < grupp.length; i++){
					    txt += `*Nama grup : ${grupp[i].subject}*\n*ID grup : ${grupp[i].id}*\n*Dibuat : ${moment(`${grupp[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss z')}*\n*Jumlah Peserta : ${grupp[i].participants.length}*\n\n`
			    	}
				    farid.sendMessage(from,(txt), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
                  }
                    break
                
case 'bc':
case 'broadcast':
      if (!mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})             
             if (args.length < 1) return reply('teks?')
             anu = await farid.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await farid.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             farid.sendMessage(_.jid, bc, image, {quoted:fgc,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             sendMess(_.jid, `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`)
}
             reply('Suksess broadcast')
}
             break

case 'bc2':
case 'broadcast2':
      if (!mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
            if (args.length < 1) return reply('teks?')
             anu = await farid.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await farid.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             farid.sendMessage(_.jid, bc, image, {quoted:fgc,caption: `*『 PESAN SIARAN 』*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
            farid.sendMessage(_.jid, { contentText: `*『 PESAN SIARAN BOT 』*\n\n${body.slice(4)}`, footerText: '© 𝆑ₐᵣ₋𝆎 流何・', buttons: [{ buttonId: `p`, buttonText: { displayText: 'Siap Bwang🐣' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
              
}
             reply('Suksess broadcast')
}
             break
case 'bc1':
case 'broadcastyt':
      if (!mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})             
             if (args.length < 1) return reply('teks?')
             anu = await farid.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await farid.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             farid.sendMessage(_.jid, bc, image, {quoted:fgc,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             farid.sendMessage(_.jid, `\n\n${body.slice(4)}`, MessageType. text, {quoted: fgc2, contextInfo: { mentionedJid: [sender],externalAdReply: { "title": `『 PESAN SIARAN BOT 』`, mediaType: 2, "thumbnailUrl": `https://telegra.ph/file/295700dec848810d6b777.jpg`, "mediaUrl": `https://youtu.be/PMZy53PHbY0`}}})
}
             reply('Suksess broadcast')
}
             break
case 'autovn':
if (!isOwner && !mek.key.fromMe) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
if (args.length < 1) return farid.sendMessage(from,(' ```Pilih on atau off``` '), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
if (args[0] === "on") {
if (autovn === true) return
autovn = true
farid.sendMessage(from,(' ```Succes Mengaktifkan Autovn``` '), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
} else if (args[0] === "off") {
if (autovn === false) return
autovn = false
farid.sendMessage(from,(' ```Succes Menonaktifkan Autovn``` '), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
} else {
farid.sendMessage(from,(' ```Pilih on atau off``` '), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
}
break
case 'autoketik':
if (!isOwner && !mek.key.fromMe) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
if (args.length < 1) return farid.sendMessage(from,(' ```Pilih on atau off```'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
if (args[0] === "on") {
if (autoketik === true) return
autoketik = true
farid.sendMessage(from,(' ```Succes Mengaktifkan Autoketik``` '), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
} else if (args[0] === "off") {
if (autoketik === false) return
autoketik = false
farid.sendMessage(from,(' ```Succes Mematikan Autoketik``` '), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
} else {
farid.sendMessage(from,(' ```Pilih on atau off``` '), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
}
break

case 'setmenu':
if (!mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/64324623cdbfb177ed6b6.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
if (args[0] === 'ori'){
Menuukhty = true
farid.sendMessage(from,('```Success Mengubah Menu Ori```'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/64324623cdbfb177ed6b6.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
} else if (args[0] === 'simple'){
Menuukhty = false
farid.sendMessage(from,('```Success Mengubah Menu Simple```'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/64324623cdbfb177ed6b6.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
}else{
farid.sendMessage(from,('```Pilihan Menu :```\n\n• ```Setmenu Ori```\n• ```Setmenu Simple``` '), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/64324623cdbfb177ed6b6.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
}
break

//------------------< Public/Self >-------------------
    case 'self':
if (!mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
if (!public) return farid.sendMessage(from, ('_Sudah Di Dalam Mode Self_'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
public = false
farid.sendMessage(from,(' ```Success Activated Self-Mode``` '), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgif})
break
case 'public':
if (!mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
if (public) return farid.sendMessage(from,('_Sudah Di Dalam Mode Public_'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
public = true
farid.sendMessage(from,(' _Success Activated Public-Mode_ '), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgif})
break
//------------------< Sticker Cmd >-------------------
case 'addcmd': 
       case 'setcmd':
              if (!mek.key.fromMe && !isOwner) return  farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/64324623cdbfb177ed6b6.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              if (isQuotedSticker) {
              if (!q) return farid.sendMessage(from,(`Penggunaan : ${command} cmdnya dan tag stickernya`), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/64324623cdbfb177ed6b6.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              farid.sendMessage(from,(" ```『 SUCCESS 』``` "), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/64324623cdbfb177ed6b6.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              } else {
              farid.sendMessage(from,('tag stickenya'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/2169e35fd61d51efc741c.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
}
              break
       case 'delcmd':
              if (!mek.key.fromMe && !isOwner) return  farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/64324623cdbfb177ed6b6.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              if (!isQuotedSticker) return farid.sendMessage(from,(`Penggunaan : ${command} tagsticker`) ,MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/64324623cdbfb177ed6b6.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
              farid.sendMessage(from,(" ```『 SUCCESS 』``` "), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/64324623cdbfb177ed6b6.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              break
       case 'listcmd':    
if (!mek.key.fromMe && !isOwner) return  farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/2169e35fd61d51efc741c.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})   
              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n• *ID :* ${i.id}\n• *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
           case 'bugreport':
              if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
              teks = args.join(' ')
              reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
              farid.sendMessage('6285692949920@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
              break
//------------------< Sewa >-------------------
       case 'sewa':       
              if (!isGroup)return reply(mess.only.group)
              if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
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
          
          case 'exif':
          if (!mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/64324623cdbfb177ed6b6.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
                        if (!q) return reply(mess.wrongFormat)
              if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
              exif.create(arg.split('|')[0], arg.split('|')[1])
              reply('sukses')
              break	
          case 'join': 
              if (!q) return farid.sendMessage(from,(' ```Linknya?``` '), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/2169e35fd61d51efc741c.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              if (!mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/2169e35fd61d51efc741c.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
              link = args[0].replace('https://chat.whatsapp.com/','')
              fak = farid.query({ json: ['action', 'invite', link],
              expect200: true })
              farid.sendMessage(from,('_Berhasil Masuk Grup_'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/2169e35fd61d51efc741c.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              break
          case 'term':
          if (!mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/64324623cdbfb177ed6b6.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              if (!q) return
              exec(q, (err, stdout) => {
              if (err) return reply(`${err}`)
              if (stdout) {
              reply(stdout)
}
})
              break 
          case 'shutdown':
              if (!mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/64324623cdbfb177ed6b6.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              reply(`Bye...`)
              await sleep(3000)
              process.exit()
              break
          case 'leaveall':
              if (!mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/2169e35fd61d51efc741c.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              let totalgroup = farid.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
              for (let id of totalgroup) {
              sendMess(id, 'Byee', null)
              await sleep(3000)
              farid.groupLeave(id)
}
              break
          //case 'culik':
              if (!isOwner) return
              if (args.length < 1) return reply('Masukin id grupnya tolol')
              let pantek = []
              for (let i of groupMembers) {
              pantek.push(i.jid)
}
              farid.groupAdd(args[0], pantek)
              break

          case 'setprefix':
           if (!mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/64324623cdbfb177ed6b6.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              teks = args.join('') 
              prefix = teks
              reply(`_Change Prefix Success!! Prefix_ : *${prefix}*`)
              break
case 'jadibot':
          if (!mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/2169e35fd61d51efc741c.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})     
             jadibot(reply,farid,from)
              break
          case 'stopjadibot':
              stopjadibot(reply)
              break
          case 'listbot':
          case 'listjadibot':
          if (!mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/64324623cdbfb177ed6b6.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})   
              let jamdibot = '「 *LIST JADIBOT* 」\n\n'
              for(let i of listjadibot) {
              jamdibot += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
}
              reply(jamdibot)
              break
case 'well':
        if (!mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.owner), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return farid.sendMessage(from,(' _Welcome Enable/Disable_\nExample = !welcome enable '), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
               if ((args[0]) === 'enable') {
               if (isWelkom) return farid.sendMessage(from, (' _Welcome Telah Diaktifkan Sebelumnya_  '), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               farid.sendMessage(from, (' [ √ ] _Success... mengaktifkan welcome di group_'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               farid.sendMessage(from, (' [ √ ] _Success... menonaktifkan welcome di group_'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
               } else {
               farid.sendMessage(from,('_Enable untuk mengaktifkan, disable untuk menonaktifkan_'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
               }
               break
//===============GROUPMENU================
case 'wa.me':
case 'wame':
  			farid.updatePresence(from, Presence.composing) 
  					options = {
  					text: `「 *BOT WHATSAPP* 」\n\n_*Request by*_ : ${pushname}\n\n*Your link WhatsApp*: https://wa.me/${sender.split("@s.whatsapp.net")[0]}\n*Or ( / )*\nhttps://api.whatsapp.com/send?phone=${sender.split("@")[0]}`,
  					contextInfo: { mentionedJid: [sender] }
  					}
  					farid.sendMessage(from, options, text, { quoted: fgc} )
  					break
case 'afk':        
              if (!isGroup) return reply(mess.only.group)
              if (isAfkOn) return farid.sendMessage(from,('Woe Kalo Mau Afk Jangan Nimbrung di sini'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
            farid.updatePresence(from, Presence.composing)
              try {
              profil = await farid.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              } catch {
              profil = 'https://telegra.ph/file/e7ac551bf15f17eb4494c.png'
}
              gbar = await getBuffer(profil)
              const reason = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, reason, _afk)
              const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n• *Username*: ${pushname}\n• *Alasan*: ${reason}`
              farid.sendMessage(from, { contentText: `${aluty}`, footerText: `${jam} Wib`, buttons: [{ buttonId: `p`, buttonText: { displayText: ' Okeh' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: gbar, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
              break
case 'ownergroup':
case 'ownergc':
case 'ownergrup': {
                    if (!isGroup) return reply(mess.only.group)
                    var teks = `Owner Group : @${from.split('-')[0]}`
                    mentions(teks, [`${from.split('-')[0]}@s.whatsapp.net`], true)
                    }
                    break
case 'revoke':
if (!mek.key.fromMe && !isOwner && !isGroupAdmins) return farid.sendMessage(from,(mess.only.admin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
farid.revokeInvite(from)
sendFakeStatus(from,('_Success_'))
break

case 'listadmin':
    case 'admin':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break

case 'grupsetting':
        case 'groupsetting':
               if (!isGroup) return reply(mess.only.group)
               if (!isGroupAdmins) return farid.sendMessage(from,(mess.only.admin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/64324623cdbfb177ed6b6.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
               list = []
               com = [`group enable`,`welcome enable`,`antilink enable`]
               comm = [`group disable`,`welcome disable`,`antilink disable`]
               listnya = [`Group open/close`,`Welcome enable/disable`,`Antilink enable/disable`,]
               suruh = [`Enable`, `Disable`]
               fiturname = [`Group`,`Welcome`,`Antilink`]
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
             if (!mek.key.fromMe && !isGroupAdmins) return farid.sendMessage(from,(mess.only.admin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/64324623cdbfb177ed6b6.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
             if (!isBotGroupAdmins) return farid.sendMessage(from,(mess.only.Badmin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/64324623cdbfb177ed6b6.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
             if (args.length < 1) return reply('!group enable/disable')
             if (args[0].toLowerCase() === 'enable'){
             farid.groupSettingChange(from, "announcement", false)
             teks = ` *-『 Group Opened 』-* \n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
             farid.sendMessage(from, teks, MessageType.text, {quoted: fgc})
             console.log(`-『 Group Opened 』- In ${groupName}`)           
             } else if (args[0].toLowerCase() === 'disable'){
             farid.groupSettingChange(from, "announcement", true)
             teks = ` *-『 Group Closed 』-* \n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
             farid.sendMessage(from, teks, MessageType.text, {quoted: fgc})
             console.log(` 『 Group Closed 』 In ${groupName}`)
             } else if (args[0].toLowerCase() === 'close'){
             farid.groupSettingChange(from, "announcement", true)
             teks = ` *-『 Group Closed 』-* \n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
             farid.sendMessage(from, teks, MessageType.text, {quoted: fgc})
             console.log(`『 Group Closed 』 In ${groupName}`)            
             } else if (args[0].toLowerCase() === 'open'){
             farid.groupSettingChange(from, "announcement", false)
             teks = ` *-『 Group Opened 』 -* \n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
             farid.sendMessage(from, teks, MessageType.text, {quoted: fgc})
             console.log(`-『 Group Opened 』- In ${groupName}`)                       
             } else {
             farid.sendMessage(from,(`Pilih enable atau disable`), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/64324623cdbfb177ed6b6.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
}
             break
case 'antidelete':
    if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
    if (args.length < 1) return reply(`─ ❲ ERROR ❳ ─

Penggunaan fitur antidelete :
*${prefix}antidelete [on/off]* (Untuk grup)
*${prefix}antidelete [cton/ctoff]* (untuk semua kontak)
*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`)
    if (args[0].toLowerCase() === 'on') {
    if (isGroup) {
    if (isRevoke) return reply(`Antidelete telah diaktifkan di grup ini sebelumnya!`)
    dataRevoke.push(from)
    fs.writeFileSync('./database/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
    reply(`Antidelete diaktifkan di grup ini!`)
    } else if (!isGroup) {
    reply(`Untuk kontak penggunaan *${prefix}antidelete ctaktif*`)
    }
    } else if (args[0].toLowerCase() === 'cton') {
      if (!isOwner && !mek.key.fromMe) return reply(mess.OnlyOwner)
    	if (!isGroup) {
    		if (isCtRevoke) return reply(`Antidelete telah diaktifkan di semua kontak sebelumnya!`)
    		dataCtRevoke.data = true
    		fs.writeFileSync('./database/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
    		reply(`Antidelete diaktifkan disemua kontak!`)
    	} else if (isGroup) {
    		reply(`Untuk grup penggunaan *${prefix}antidelete aktif*`)
    	}
    } else if (args[0].toLowerCase() === 'banct') {
if (!isOwner && !mek.key.fromMe) return reply(mess.OnlyOwner)
    	if (isBanCtRevoke) return reply(`kontak ini telah ada di database banlist!`)
    	if (args.length === 1 || args[1].startsWith('0')) return reply(`Masukan nomer diawali dengan 62! contoh 62859289xxxxx`)
    	dataBanCtRevoke.push(args[1].replace("@","") + '@s.whatsapp.net')
    	fs.writeFileSync('./database/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
    	reply(`Kontak ${args[1].replace("@","")} telah dimasukan ke banlist antidelete secara permanen!`)
    } else if (args[0].toLowerCase() === 'off') {
    	if (isGroup) {
    		const index = dataRevoke.indexOf(from)
    		dataRevoke.splice(index, 1)
    		fs.writeFileSync('./database/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
    		reply(`Antidelete dimatikan di grup ini!`)
    	} else if (!isGroup) {
    		reply(`Untuk kontak penggunaan *${prefix}antidelete ctmati*`)
    	}
    } else if (args[0].toLowerCase() === 'ctoff') {
if (!isOwner && !mek.key.fromMe) return reply(mess.OnlyOwner)
    	if (!isGroup) {
    		dataCtRevoke.data = false
    		fs.writeFileSync('./database/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
    		reply(`Antidelete dimatikan disemua kontak!`)
    	} else if (isGroup) {
    		reply(`Untuk grup penggunaan *${prefix}antidelete mati*`)
    	}
} else {
 reply(`─ ❲ ERROR ❳ ─

Penggunaan fitur antidelete :
*${prefix}antidelete [on/off]* (Untuk grup)
*${prefix}antidelete [cton/ctoff]* (untuk semua kontak)
*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`)
    }
    break
case 'linkgc':
case 'linkgrup':
case 'linkgrop':
case 'linkgroup':
if (!isGroup) return farid.sendMessage(from,(mess.only.group), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/64324623cdbfb177ed6b6.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
if (!isBotGroupAdmins) return farid.sendMessage(from,(mess.only.Badmin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/64324623cdbfb177ed6b6.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
linkgc = await farid.groupInviteCode(from)
yeh = `\`\`\`「 Link Group 」\`\`\`\n•> Group Whatsapp :\nhttps://chat.whatsapp.com/${linkgc}\n\n_yo bisa yo ramein_`
farid.sendMessage(from, yeh, text, { quoted: fgc })
break
case 'infogrup':
case 'infogroup':
case 'grupinfo':
case 'groupinfo':       
              if (!isGroup) return reply(mess.only.group)
              try {
              var pic = await farid.getProfilePicture(from)
              } catch {
              var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
bam = await getBuffer(pic)
              let ingfo = `*🌹G R O U P I N F O🌹*\n\n• *Name :* ${groupName}\n• *ID Grup :* ${from}\n• *Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n• *Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n• *Jumlah Admin :* ${groupAdmins.length}\n• *Jumlah Peserta :* ${groupMembers.length}\n• *Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n• *AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n• *AntiVirtex :* ${isAntiVirtex ? 'Aktif' : 'Mati'}\n• *Desc :* \n${groupMetadata.desc}`
              farid.sendMessage(from, { contentText: `${ingfo}`, footerText: '© 𝆑ₐᵣ₋𝆎 流何・', buttons: [{ buttonId: `!admin`, buttonText: { displayText: '✓ List Admin' }, type: 1 },{ buttonId: `!tagalll`, buttonText: { displayText: '✓ List Member' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: bam, contextInfo: {mentionedJid: [sender,groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}}}, 'buttonsMessage')
              break
              case 'infoalll': 
case 'tagalll':       
       if (!isGroup) return reply('```KHUSUS GRUP BRO```')
					members_id = []
					teks = `List member of group *${groupMetadata.subject}*\nTotal : ${groupMembers.length}\n\n`
					no = 0
					for (let mem of groupMembers) {
						no += 1
						teks += `[${no.toString()}] @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
			break
case 'online':
case 'listonline':
case 'here':                
             if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(farid.chats.get(ido).presences), farid.user.jid]
             farid.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: fgc, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
case 'setgrupname':
       if (!mek.key.fromMe && isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
              farid.groupUpdateSubject(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
case 'setdesc':
       if (!mek.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
              farid.groupUpdateDescription(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
case 'setppgrup':
       if (!mek.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await farid.downloadMediaMessage(encmedia)
              farid.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
case 'caripesan':  //by ANU TEAM
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
             cok = await farid.searchMessages(`${ve}`, from, batas,1) 
             if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
             if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
             for (i=1;i < cok.messages.length;i++) {
             if (cok.messages[i].message) {
             farid.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
}
}
             } catch (e) {
             return reply(String(e))
}
             } else {
             reply(`Format salah tod, ini contoh format yang benar : ${prefix + command} halo|10`)
}
             break
case 'd':
case 'del':
case 'delete': // MR.CYSER        
               try {
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return farid.sendMessage(from,('Reply chat bot'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/2169e35fd61d51efc741c.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
               farid.deleteMessage(from, {id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
               } catch (e){
               farid.sendMessage(from,('Reply chat bot'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/2169e35fd61d51efc741c.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
}
               break
case 'sider':      
             if(!isGroup) return reply(mess.only.group)
             try {
             infom = await farid.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
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
             farid.sendMessage(from,('Reply chat bot!'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/64324623cdbfb177ed6b6.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
}
             break

          case 'hidetag':
          if (!mek.key.fromMe && !isGroupAdmins) return farid.sendMessage(from,(mess.only.admin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/64324623cdbfb177ed6b6.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              try {
              quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
              hideTag(from, `${quotedText}`)
              } catch {
              hideTag(from, `${q}`)
}
              break
case 'sticktag':
            if (!mek.key.fromMe && !isOwner && !isGroupAdmins) return reply(mess.admin)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await farid.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await farid.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                
            }
            ini_buffer = fs.readFileSync(file)
            farid.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
case 'tagall':
       if (!mek.key.fromMe && !isGroupAdmins) return farid.sendMessage(from,(mess.only.admin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/64324623cdbfb177ed6b6.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
       if (!isGroup) return farid.sendMessage(from,('```KHUSUS GRUP BRO```'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/2169e35fd61d51efc741c.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `@${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
			break
case 'tagall2':
       if (!mek.key.fromMe && !isGroupAdmins) return farid.sendMessage(from,(mess.only.admin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
       if (!isGroup) return fakestatus('```KHUSUS GRUP BRO```')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `✎ @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
			break
case 'infoall': 
case 'tagall3':
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return farid.sendMessage(from,(mess.only.admin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
if(!q) return farid.sendMessage(from,('Ingfonya apa?'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
if (!isGroup) return reply(mess.only.group)
var nom = mek.participant
members_id = []
	teks = '\n'
	for (let mem of groupMembers) {
	teks += `┣ *▢*   @${mem.jid.split('@')[0]}\n`
	members_id.push(mem.jid)
	}
mentions(`*From :@${nom.split("@s.whatsapp.net")[0]}*\n\n*Info :  ${q}*\n\n*Total Member :* ${groupMembers.length} \n\n┏━ *「 🌹${botName}🌹 」* `+teks+`┗━ *「 🌹${botName} 🌹」* `, members_id, false )
break
case 'allwame':
                   if (!mek.key.fromMe && !isGroupAdmins) return farid.sendMessage(from,(mess.only.admin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
					if (!isGroup) return reply(mess.only.group)
                    members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += ` ❦ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					farid.sendMessage(from, teks, text, {detectLinks: false, quoted:fgc})
					break

          case 'bug':
          case '.':
              try {
              quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
              sendBug(from, `${quotedText}`)
              } catch {
              sendBug(from, `${q}`)
}
              break
case 'welcome':
        if (!mek.key.fromMe && !isGroupAdmins) return farid.sendMessage(from,(mess.only.admin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return farid.sendMessage(from,('_Welcome Enable/Disable_ \nExample = !welcome enable '), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
               if ((args[0]) === 'enable') {
               if (isWelkom) return farid.sendMessage(from, (' _Welcome Telah Diaktifkan Sebelumnya_'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               farid.sendMessage(from, (' [ √ ] _Success mengaktifkan welcome di group_'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               farid.sendMessage(from, (' [ √ ] _Succes menonaktifkan welcome di group_'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
               } else {
               farid.sendMessage(from,('Enable untuk mengaktifkan, disable untuk menonaktifkan'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
               }
               break
case 'antivirtex':
				if (!mek.key.fromMe && !isGroupAdmins) return farid.sendMessage(from,(mess.only.admin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
                if (!isGroup) return reply(mess.only.group)
                if (!isBotGroupAdmins) return farid.sendMessage(from, (" ``` 「 BOT NOT ADMIN 」```"), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
				if (!q) return farid.sendMessage(from,(` *Pilih 1/0* `), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
				if (Number(args[0]) === 1) {
			    if (isAntiLink) return farid.sendMessage(from, (` _Antivirtex Telah Diaktifkan Sebelumnya_`), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
				antivirtex.push(from)
				fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
				farid.sendMessage(from,('*🌹「 ANTIVIRTEX DI AKTIFKAN 」🌹*'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
				} else if (Number(args[0]) === 0) {
				if (!isAntiVirtex) return 
				var ini = antivirtex.indexOf(from)
				antivirtex.splice(ini, 1)
				fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
				farid.sendMessage(from,('*🌹「 ANTIVIRTEX DI NONAKTIFKAN 」🌹*'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
				} else {
		farid.sendMessage(from,(` *Pilih 1/0* `), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
				}
				break
case 'antilink':
       if (!mek.key.fromMe && !isGroupAdmins) return farid.sendMessage(from,(mess.only.admin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
       if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return farid.sendMessage(from, (" ``` 「 BOT NOT ADMIN 」```"), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              if (!q) return farid.sendMessage(from,(` *Pilih enable atau disable* `), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return farid.sendMessage(from, (` _Antilink Telah Diaktifkan Sebelumnya_`), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              antilink.push(from)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              farid.sendMessage(from,('*🌹「 ANTILINK DI AKTIFKAN 」🌹*\n\nYang Ngirim Link Group Bakal Ke Kick!'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              farid.sendMessage(from,('*🌹「 ANTILINK DI NONAKTIFKAN 」🌹*'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              } else {
              farid.sendMessage(from,(` *Pilih enable atau disable* `), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/d2537c6c72c80526edbdb.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
}
              break

          case 'kickall': // Anti Banned:v
              if (!isOwner) return
              for (let i of groupMembers) {
              await kickMember(from, [i.jid])
}
              break
          case 'kick1':
          if (!mek.key.fromMe && !isGroupAdmins) return farid.sendMessage(from,(mess.only.admin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/64324623cdbfb177ed6b6.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})     
         if (!isGroup) return reply(mess.only.group)
              kick(from, mentionUser)
              break
          case 'add1':
          if (!mek.key.fromMe && !isGroupAdmins) return farid.sendMessage(from,(mess.only.admin), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/64324623cdbfb177ed6b6.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})     
              if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
              entah = arg.split("|")[0]
              entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
              entah = `${entah}@s.whatsapp.net`
              farid.groupAdd(from, [entah])
              } else {
              orang = mek.message.extendedTextMessage.contextInfo.quotedMessage.sender
              await farid.groupAdd(from, [orang])
}
              break

//=====================FUNMENU=========≠===============

case 'adventure': 
case 'adv':                 
				    ngab = ['Longsor','Letusan Gunung','Tsunami','Gempa Bumi','Meteor','Demon','Kebakaran','Hujan Badai','Badai Salju']
				    const sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
				    farid.sendMessage(from,(`${pushname} Sedang Berpetualang`), text, {quoted: floc1})
				    farid.sendMessage(from,(`Tiba Tiba Ada ${sesuatu}`), text, {quoted: floc1})
				    farid.sendMessage(from,(`AWAAS!!`), text, {quoted: floc1})
			        const dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
			        const ad = dungeon[Math.floor(Math.random() * dungeon.length)]
				    anu = fs.readFileSync('./database/adventure/dungeon.js');
                    jsonAnu = JSON.parse(anu);
                    randIndex = Math.floor(Math.random() * jsonAnu.length);
                    randKey = jsonAnu[randIndex];
                    hasil = await getBuffer(randKey.result)
				    const adven = Math.ceil(Math.random() * 10000)                    
				    const money = Math.ceil(Math.random() * 20000)    
				    const poti = Math.ceil(Math.random() * 5)
				    addPotioUser(sender, poti)
				farid.sendMessage(from, { contentText: `◪ *「 DEATH 」*\n\n├─ ❏ *LOCATION  ${ad}*\n├─ ❏ *MONEY : Rp.${money}*\n├─ ❏ *EXP : ${adven}Xp*\n└─ ❏ *POTION : ${poti}*`, footerText: 'Adventure End Game', buttons: [{ buttonId: `!adventure`, buttonText: { displayText: '✓ Play ' }, type: 1 },{ buttonId: `!out`, buttonText: { displayText: ' ✘ Quit' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: hasil, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
              break
				case 'out':
    farid.sendMessage(from,(' ```Yahaha Nooob 👎🏻``` '),text, {quoted: fgc, contextInfo: { mentionedJid: [sender],externalAdReply: { "title": `Ternyata ${pushname} Noob🙈`, mediaType: 2, "thumbnailUrl": `https://telegra.ph/file/0588444956a64ee253333.jpg`, "mediaUrl": `https://youtu.be/E4_s-UlA7BEh`}}})
             break
case 'mining':       
              var mining = randomNomor(1000)
              atm.addKoinUser(sender, mining, _uang)
             sendFakeStatus(from,`*Selamat Kamu Mendapatkan*: _Rp ${mining} 💰_`)
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
              farid.sendMessage(from, cita2, audio,{mimetype: 'audio/mp4', ptt:true, quoted: fgc})
              break
       case 'apakah':       
              apakah = body.slice(1)
              const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
              const kah = apa[Math.floor(Math.random() * apa.length)]
              farid.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: fgc })
              break
case 'rate':
       case 'nilai':       
       farid.updatePresence(from, Presence.composing)
              try {
              profil = await farid.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              } catch {
              profil = 'https://telegra.ph/file/e7ac551bf15f17eb4494c.png'
}
             mbar= await getBuffer(profil)
              rate = body.slice(1)
              const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
              const te = ra[Math.floor(Math.random() * ra.length)]
              buttons = [
					{ buttonId: `${prefix}rate`, buttonText: { displayText: 'Rate' }, type: 1 },                 
				
]
				buttons = {
					locationMessage: {
						degressLongitude: 0,
						degressLatitude: 1,
						address: 'a',
						jpegThumbnail: mbar
					},
					contentText: ` *Question :* rate\n\n*Jawaban :* ${te}%`,
					footerText: `© 𝆑ₐᵣ₋𝆎 流何・`,
					buttons: buttons,
					headerType: 6
				}
				await farid.sendMessage(from, buttons, MessageType.buttonsMessage, {
					contextInfo: {
						externalAdReply: {},
						mentionedJid: [sender],
						forwardingScore: 777,
						isForwarded: true
					}, quoted: mek
				})
			break
              
       case 'gantengcek':
       case 'cekganteng':       
       farid.updatePresence(from, Presence.composing)
              try {
              profil = await farid.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              } catch {
              profil = 'https://telegra.ph/file/e7ac551bf15f17eb4494c.png'
}
              gamb = await getBuffer(profil)
              ganteng = body.slice(1)
              const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teng = gan[Math.floor(Math.random() * gan.length)]
              buttons = [
					{ buttonId: `${prefix}cekganteng`, buttonText: { displayText: 'Cek Ganteng' }, type: 1 },                 
				
]
				buttons = {
					locationMessage: {
						degressLongitude: 0,
						degressLatitude: 1,
						address: 'a',
						jpegThumbnail: gamb
					},
					contentText: ` *Question :* Cekganteng\n\n*Jawaban :* ${teng}%`,
					footerText: `© 𝆑ₐᵣ₋𝆎 流何・`,
					buttons: buttons,
					headerType: 6
				}
				await farid.sendMessage(from, buttons, MessageType.buttonsMessage, {
					contextInfo: {
						externalAdReply: {},
						mentionedJid: [sender],
						forwardingScore: 777,
						isForwarded: true
					}, quoted: mek
				})
			break
       case 'cantikcek':
       case 'cekcantik':       
       farid.updatePresence(from, Presence.composing)
              try {
              profil = await farid.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              } catch {
              profil = 'https://telegra.ph/file/e7ac551bf15f17eb4494c.png'
}
              bar = await getBuffer(profil)
              cantik = body.slice(1)
              const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tik = can[Math.floor(Math.random() * can.length)]
              buttons = [
					{ buttonId: `${prefix}cekcantik`, buttonText: { displayText: 'Cek Cantik' }, type: 1 },                 
				
]
				buttons = {
					locationMessage: {
						degressLongitude: 0,
						degressLatitude: 1,
						address: 'a',
						jpegThumbnail: bar
					},
					contentText: ` *Question :* Cekcantik\n\n*Jawaban :* ${tik}%`,
					footerText: `© 𝆑ₐᵣ₋𝆎 流何・`,
					buttons: buttons,
					headerType: 6
				}
				await farid.sendMessage(from, buttons, MessageType.buttonsMessage, {
					contextInfo: {
						externalAdReply: {},
						mentionedJid: [sender],
						forwardingScore: 777,
						isForwarded: true
					}, quoted: mek
				})
			break
       case 'cekwatak':       
       farid.updatePresence(from, Presence.composing)
              try {
              profil = await farid.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              } catch {
              profil = 'https://telegra.ph/file/e7ac551bf15f17eb4494c.png'
}
              gam = await getBuffer(profil)
              var namao = pushname
              var prfx = await farid.getProfilePicture(sender)
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
              buttons = [
					{ buttonId: `${prefix}cekwatak`, buttonText: { displayText: 'Cek Watak' }, type: 1 },                 
				
]
				buttons = {
					locationMessage: {
						degressLongitude: 0,
						degressLatitude: 1,
						address: 'a',
						jpegThumbnail: gam
					},
					contentText: ` *[ INTROGASI SUKSES ]*\n\n*Nama :* ${namao}\n\n*Watak :* ${wtk}\n\n*Akhlak✨ :* ${akhlak}\n\n*Sifat :* ${sft}\n\n*Hobby :* ${hby}\n\n*Tipe :* ${typo}\n\n*Kelebihan :* ${klbh}\n\n*Note*\n_ini hanya main main_`,
					footerText: `© 𝆑ₐᵣ₋𝆎 流何・`,
					buttons: buttons,
					headerType: 6
				}
				await farid.sendMessage(from, buttons, MessageType.buttonsMessage, {
					contextInfo: {
						externalAdReply: {},
						mentionedJid: [sender],
						forwardingScore: 777,
						isForwarded: true
					}, quoted: mek
				})
			break
       
       case 'hobby':       
              hobby = body.slice(1)
              const by = hobby[Math.floor(Math.random() * hobby.length)]
              farid.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: fgc })
              break
       case 'bisakah':       
              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              farid.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: fgc })
              break
       case 'kapankah':       
              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              farid.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: fgc })
              break
       case 'truth':       
              const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
              const ttrth = trut[Math.floor(Math.random() * trut.length)]
              truteh = await getBuffer(`https://telegra.ph/file/3c76003bb6d72139cc013.jpg`)
              buttons = [
					{ buttonId: `${prefix}truth`, buttonText: { displayText: 'Truth' }, type: 1 }, { buttonId: `${prefix}dare`, buttonText: { displayText: 'Dare' }, type: 1 },                           
				]
				buttons = {
					locationMessage: {
						degressLongitude: 0,
						degressLatitude: 1,
						address: 'a',
						jpegThumbnail: truteh
					},
					contentText: `*Question Truth :*\n\n${ttrth}`,
					footerText: `Truth Or Dare?`,
					buttons: buttons,
					headerType: 6
				}
				await farid.sendMessage(from, buttons, MessageType.buttonsMessage, {
					contextInfo: {
						externalAdReply: {},
						mentionedJid: [sender],
						forwardingScore: 777,
						isForwarded: true
					}, quoted: mek
				})
			break
              
       case 'dare':       
              const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
              const der = dare[Math.floor(Math.random() * dare.length)]
              buffer = await getBuffer(`https://telegra.ph/file/3c76003bb6d72139cc013.jpg`)
             buttons = [
					{ buttonId: `${prefix}dare`, buttonText: { displayText: 'Dare' }, type: 1 }, { buttonId: `${prefix}truth`, buttonText: { displayText: 'Truth' }, type: 1 },                                   
				]
				buttons = {
					locationMessage: {
						degressLongitude: 0,
						degressLatitude: 1,
						address: 'a',
						jpegThumbnail: buffer
					},
					contentText: `*Challenge Dare :*\n\n${der}`,
					footerText: `Truth Or Dare?`,
					buttons: buttons,
					headerType: 6
				}
				await farid.sendMessage(from, buttons, MessageType.buttonsMessage, {
					contextInfo: {
						externalAdReply: {},
						mentionedJid: [sender],
						forwardingScore: 777,
						isForwarded: true
					}, quoted: mek
				})
			break
 
         case 'jadian':      
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
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
//==============UPDATE FITUR============
case 'sendloc':
           namanya = `Pikaw 𝐵𝑜𝑡`
               captionnya = `Hallo Kak ${pushname}`
               farid.sendMessage(from, {"name": `${namanya}`, "address": `${captionnya}`, "jpegThumbnail": fs.readFileSync('media/Nakano.jpg')}, location, {quoted: fgc, contextInfo: {text: 'PinkyCaa',"forwardingScore": 99999,isForwarded: true,sendEphemeral: true,"externalAdReply": {"title": `Hai ${pushname}`,"body": ``,"previewType": "PHOTO","thumbnailUrl":"https://telegra.ph/file/8c6e353c15532fe5e5746.jpg","thumbnail": "https://i.ibb.co/fHXQHVZ/PinkyCaa.jpg","sourceUrl": ""}}})
               break
case 'asupan': // shansekai                
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


//------------------< Downloader/Search/Anime >-------------------
   
 case 'nulis':
          case 'tulis':
              if (args.length < 1) return reply('Yang mau di tulis apaan?')
              teks = args.join(' ')
              reply(mess.wait)
              nulis = encodeURIComponent(teks)
              res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
              if (res.data.error) return reply(res.data.error)
              buff = Buffer.from(res.data.result.split(',')[1], 'base64')
              farid.sendMessage(from, buff, image, {quoted: fgc, caption: mess.success}).catch(e => {
              return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
              break       
  case 'brainly':      
             farid.sendMessage(from,(mess.wait),text ,{quoted :fgiv})
             brainly(args.join(" ")).then(res => {
             hmm = '────────────\n'
             for (let Y of res.data) {
             hmm += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n───────────\n`
}
             farid.sendMessage(from,(hmm), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/64324623cdbfb177ed6b6.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
             console.log(res)
})
             break
    case 'igdl':
          case 'instagram':
              try {
              if (!isUrl(q)) return reply('Linknya?')
              res = await axios.get(`https://api.lolhuman.xyz/api/instagram2?apikey=${setting.lolkey}&url=${args[0]}`)
              data = res.data.result
              for (let i = 0; i < data.media.length; i++) {
              sendMediaURL(from, data.media[i], data.caption, {thumbnail: Buffer.alloc(0)})
}
              } catch (e) {
              console.log(e)
              reply(String(e))
}
              break
          case 'igstory': 
              if(!q) return reply('Usernamenya?')
              hx.igstory(q)
             .then(async result => {
              for(let i of result.medias){
              if(i.url.includes('mp4')){
              let link = await getBuffer(i.url)
              farid.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
              } else {
              let link = await getBuffer(i.url)
              farid.sendMessage(from,link,image,{quoted: fgc,caption: `Type : ${i.type}`})                  
}
}
});
              break
          case 'ghsearch': 
          case 'githubsearch': 
          case 'searchgithub':
              if (!q) return reply('Cari apa?')
              res = await fetch('https://api.github.com/search/repositories?q='+q)
              json = await res.json()
              if (res.status !== 200) throw json
              str = json.items.map((repo, index) => {
              return `
${1 + index}. *${repo.full_name}*${repo.fork ? ' (fork)' : ''}
_${repo.html_url}_
_Dibuat pada *${formatDate(repo.created_at)}*_
_Terakhir update pada *${formatDate(repo.updated_at)}*_
👁  ${repo.watchers}   🍴  ${repo.forks}   ⭐  ${repo.stargazers_count}
${repo.open_issues} Issue${repo.description ? `
*Deskripsi:*\n${repo.description}` : ''}
*Clone:* \`\`\`$ git clone ${repo.clone_url}\`\`\`
`.trim()
}).join('\n\n')
              reply(str)
              break
          
case 'image':
case 'gimage':
case 'googleimage':       
              if (args.length < 1) return reply('Apa Yang Mau Dicari?')
              farid.sendMessage(from,(mess.wait),text ,{quoted :fgiv})
              teks = args.join(' ')
              res = await googleImage(teks, google)
              function google(error, result){
              if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: fgc, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
             break
          case 'youtubedl':
              if (args.length < 1) return reply('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateA(teks).catch(e => {
              reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
              result = `*Youtube Downloader*
             
📜 Title : ${res[0].judul}
🎁 Type : mp3/mp4
🚀 Durasi : ${res[0].size}`
              buttons = [{buttonId: `${prefix}buttons2 ${q}`,buttonText:{displayText: `▶️ Video`},type:1},{buttonId:`${prefix}buttons1 ${q}`,buttonText:{displayText:'🎵 Audio'},type:1}]
              fs.writeFileSync(`./ytmp.jpeg`, await getBuffer(res[0].thumb))
              imageMsg = ( await farid.prepareMessage(from, fs.readFileSync(`./ytmp.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await farid.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              farid.relayWAMessage(prep)
              fs.unlinkSync(`./ytmp.jpeg`)
              break
          case 'tiktokdl':
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=IkyAds&url=${q}`)
              result = `⚜️ *Nickname*: ${data.result.author.nickname}\n❤️ *Like*: ${data.result.statistic.diggCount}\n💬 *Komentar*: ${data.result.statistic.commentCount}\n🔁 *Share*: ${data.result.statistic.shareCount}\n🎞️ *Views*: ${data.result.statistic.playCount}\n📑 *Desc*: ${data.result.title}`
              buttons = [{buttonId: `${prefix}buttons3 ${q}`,buttonText:{displayText: `▶️ Video`},type:1},{buttonId:`${prefix}buttons4 ${q}`,buttonText:{displayText:'🎵 Audio'},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result.thumbnail))
              imageMsg = ( await farid.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await farid.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              farid.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
          case 'nhentaipdf':
          case 'nhdl':
              if (!q) return reply('kodenya?')
              reply('Please wait, data is being processed')
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${q}?apikey=${setting.lolkey}`)
              ini_image = await getBuffer(get_result.result.image[0])
              data = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${q}?apikey=${setting.lolkey}`)
              pdf = await getBuffer(data.result)
              farid.sendMessage(from, pdf, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${get_result.result.title_romaji}.pdf`, thumbnail: ini_image })
              break
          case 'buttons1':
              await axios.get(`https://api.zeks.xyz/api/ytplaymp3/2?apikey=Nyarlathotep&q=${q}`)
		     .then(res => {
			  farid.sendMessage(from, { url: res.data.result.link }, 'audioMessage', { mimetype: 'audio/mp4', quoted: mek, contextInfo: { externalAdReply: { title: res.data.result.title, mediaType: 2, thumbnailUrl: res.data.result.thumb, mediaUrl: res.data.result.source }}})
})
              break
          case 'buttons2':
              if (args.length < 1) return reply('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateV(teks)
              sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
              break
          case 'buttons3': 
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${setting.lolkey}&url=${q}`)
              ini_video = await getBuffer(data.result.link)
              farid.sendMessage(from, ini_video, video, { quoted: mek })
              break
          case 'buttons4': 
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${setting.lolkey}&url=${args[0]}`)
              farid.sendMessage(from, data, audio, { quoted: mek })
              break
          case 'buttons5':
              const mathdare = dare[Math.floor(Math.random() * (dare.length))]
              result = `${mathdare}`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Tod'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
              prep = await farid.prepareMessageFromContent(from,{buttonsMessage},{})
              farid.relayWAMessage(prep)
              break
          case 'buttons6':
              const randomtruth = truth[Math.floor(Math.random() * truth.length)]
              result = `${randomtruth}`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Tod'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
              prep = await farid.prepareMessageFromContent(from,{buttonsMessage},{})
              farid.relayWAMessage(prep)
              break
          case 'tod':
              result =`*Truth Or Dare*\nPemain diberi pilihan antara menjawab pertanyaan dengan jujur, atau melakukan tantangan yang diberikan`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Tod'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
              prep = await farid.prepareMessageFromContent(from,{buttonsMessage},{})
              farid.relayWAMessage(prep)
              break
          case 'google':
              if (!q) return reply(mess.wrongFormat)
              ss = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=f3fce33fa6804c0b97c897b3bd2ec7a8&url=https://google.com/search?q=${q}`)
              if(q == undefined || q == ' ') return reply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
              googleIt({ 'query': q }).then(results => {
              vars = `_*Hasil Pencarian : ${q}*_\n`
              for (let i = 0; i < results.length; i++) {
              vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
}
              farid.sendMessage(from, ss, image, {caption: vars, quoted : fgc, thumbnail: Buffer.alloc(0) })
              }).catch(e => {
              console.log(e)
              reply(`${e}`)
})
              break
          case 'mediafire':
          if (!isPremium) return farid.sendMessage(from,(mess.only.premium), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
              if (args.length < 1) return reply('Link Nya Mana? ')
              if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await mediafireDl(teks)
              result = `*MediaFire Downloader*
               
📜 Nama : ${res[0].nama}
🚀 Ukuran : ${res[0].size}
🖇️ Link : ${res[0].link}

_*Tunggu Proses Upload Media......*_`
              reply(result)
              sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: fgc})
              break
          case 'fb':
          case 'facebook':
              if (!q) return reply('Link Nya?')
              reply(mess.wait)
              data = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${setting.lolkey}&url=${args[0]}`)
              ini_video = await getBuffer(data.result)
              farid.sendMessage(from, ini_video, video, { quoted: fgc})
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
          case 'ytdesc':
              if (args.length < 1) return reply('Video/Link Yt Nya Mana? ')
              teks = args.join(' ')
              res = await yts(teks)
              reply(res.all[0].description)
              break
          case 'waifu':
          case 'loli':
          case 'husbu':
          case 'milf':
          case 'cosplay':
          case 'wallml':
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'🐤OWNER'},type:1}]
              imageMsg = ( await farid.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await farid.prepareMessageFromContent(from,{buttonsMessage},{quoted: fgc})
              farid.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
          case 'hentai':
              getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${setting.lolkey}`).then((gambar) => {
              farid.sendMessage(from, gambar, image, { quoted: fgc, thumbnail: Buffer.alloc(0) })
})
              break
case 'ytdl':
case 'play':
if (!isPremium) return farid.sendMessage(from,(mess.only.premium), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dddc089c85c8a74b8966a.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
           if (!q) return reply('Linknya?')
		   res = await yts(q)
		   gas = await getBuffer('https://img.youtube.com/vi/' + res.videos[0].videoId + '/sddefault.jpg')
		   let thumbInfo = `🔎 *Data berhasil didapatkan*
🍂 *Judul :* ${res.all[0].title}
🍂 *Publish :* ${res.all[0].ago}
🍂 *Views :* ${res.all[0].views}
🍂 *Durasi :* ${res.all[0].timestamp}
🍂 *Channel :* ${res.all[0].author.name}
`
buttons = [
					{ buttonId: `${prefix}play3 ${q}`, buttonText: { displayText: 'AUDIO' }, type: 1 }, { buttonId: `${prefix}play2 ${q}`, buttonText: { displayText: 'VIDEO' }, type: 1 },                           
				]
				buttons = {
					locationMessage: {
						degressLongitude: 0,
						degressLatitude: 1,
						address: 'a',
						jpegThumbnail: gas
					},
					contentText: `${thumbInfo}`,
					footerText: `Audio Or Video?`,
					buttons: buttons,
					headerType: 6
				}
				await farid.sendMessage(from, buttons, MessageType.buttonsMessage, {
					contextInfo: {
						externalAdReply: {},
						mentionedJid: [sender],
						forwardingScore: 777,
						isForwarded: true
					}, quoted: mek
				})
			break
case 'play2':   
			    if (args.length < 1) return reply('*Masukan judul nya?*')
                farid.sendMessage(from,(mess.wait),text ,{quoted :fgiv})
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				farid.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:fgc, caption: '[ √ ] 𝚂𝚞𝚌𝚌𝚎𝚜𝚜...'})
					break  
					case 'play3':
              await axios.get(`https://api.zeks.xyz/api/ytplaymp3/2?apikey=Nyarlathotep&q=${q}`)
		     .then(res => {
    		  farid.sendMessage(from, '*Data berhasil didapatkan*\n\n_Silahkan tunggu, file media sedang dikirim mungkin butuh waktu beberapa menit_', text, { contextInfo: { externalAdReply: { title: res.data.result.title, body: 'Duration ' + res.data.result.duration + ', Size ' + res.data.result.size, thumbnailUrl: res.data.result.thumb, sourceUrl: res.data.result.link }}})
			  farid.sendMessage(from, { url: res.data.result.link }, 'audioMessage', { mimetype: 'audio/mp4', quoted: ftroli, contextInfo: { externalAdReply: { title: res.data.result.title, mediaType: 2, thumbnailUrl: res.data.result.thumb, mediaUrl: res.data.result.source }}})
})
              break
case 'pinterest':
		   if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                 farid.sendMessage(from,(mess.wait),text ,{quoted :fgiv})
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=IkyAds&query=${query}`)
                    ini_url = ini_url.result
                    buff = await getBuffer(ini_url)
                    buttons = [{buttonId: `${prefix + command} ${query}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await farid.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© 𝆑ₐᵣ₋𝆎 流何・', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await farid.prepareMessageFromContent(from,{buttonsMessage},{quoted: fgc})
              farid.relayWAMessage(prep)
           break
          case 'yts': 
          case 'ytsearch': 
			  if (!q) return reply(`Penggunaan ${command} query`)
              let { videos } = await yts(q)
			  let length = videos.length < 10 ? videos.length : 10
			  let capt = ``
			  for (let i = 0; i < length; i++) {
					capt += `*${videos[i].title}* (${videos[i].url})\n`
					capt += `*By:* ${videos[i].author.name}\n`
					capt += `*Duration:* ${videos[i].timestamp}\n`
					capt += `*Uploaded:* ${videos[i].ago}\n`
					capt += `=`.repeat(24) + `\n`
				}
			  farid.sendMessage(from, capt.trim(), text, { contextInfo: { externalAdReply: { title: videos[0].title, body: videos[0].description, mediaType: 2, thumbnailUrl: videos[0].image, mediaUrl: videos[0].url }}})
			  break
          case 'tourl':
              if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
              reply(mess.wait)
              boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              owgi = await farid.downloadMediaMessage(boij)
              res = await uploadImages(owgi)
              reply(res)
              } else {
              farid.sendMessage(from,('kirim/reply gambar/video'), MessageType. text, {"contextInfo": {text: 'HelloWorld',"forwardingScore": 3,isForwarded: true,sendEphemeral: true,mentionedJid: [sender],"externalAdReply": {"title": ` ${ucapanWaktu}\n ${time2} WIB `,"body": ``,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/2169e35fd61d51efc741c.jpg`,"thumbnail": "","sourceUrl": ""}}, quoted: fgc})
}
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
              farid.sendMessage(from, ini_buffer, sticker, {quoted :fgc})
}
              break
          case 'attp':
              if (args.length == 0) return reply(`Example: ${prefix + command} Farid`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              farid.sendMessage(from, buffer, sticker, { quoted: fgc })
              break
          case 'sticker':
          case 'stiker':
          case 's':
          case 'stickergif':
          case 'stikergif':
          case 'sgif':
              if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
              encmediat = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              mediat = await farid.downloadAndSaveMediaMessage(encmediat)
              ron = getRandom('.webp')
              exec(`ffmpeg -i ${mediat} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=15, crop=512:512" ${ron}`, (err) => {
              fs.unlinkSync(mediat)
              if (err) return reply(`${err}`)
              exec(`webpmux -set exif ${addMetadata('FarZ')} ${ron} -o ${ron}`, async (error) => {
              if (error) return reply(`${error}`)
              farid.sendMessage(from, fs.readFileSync(ron), sticker, {quoted:fgc})
              fs.unlinkSync(ron)
})
})
              } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              mediat = await farid.downloadAndSaveMediaMessage(encmedia)
              ron = getRandom('.webp')
              exec(`ffmpeg -i ${mediat} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=15, crop=512:512" ${ron}`, (err) => {
              fs.unlinkSync(mediat)
              if (err) return reply(`${err}`)
              exec(`webpmux -set exif ${addMetadata('FarZ')} ${ron} -o ${ron}`, async (error) => {
              if (error) return reply(`${error}`)
              farid.sendMessage(from, fs.readFileSync(ron), sticker, {quoted:fgc})
              fs.unlinkSync(ron)
})
})
              } else {
              reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
}
              break
       case 'stikerwm':
       case 'stickerwm':
       case 'swm':       
              var a = arg.split("|")[0];
              var b = arg.split("|")[1];
              if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              media = await farid.downloadAndSaveMediaMessage(encmedia)
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              farid.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: fgc})
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              farid.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: fgc })
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
              const media = await farid.downloadAndSaveMediaMessage(encmedia)
              pe = args.join('')
              var a = pe.split("|")[0];
              var b = pe.split("|")[1];
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              farid.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: fgc })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              farid.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: fgc })
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
              farid.sendMessage(from,(mess.wait),text ,{quoted :fgiv})
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await farid.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
              buffer = fs.readFileSync(ran)
              farid.sendMessage(from, buffer, image, {quoted: fgc, caption: '[ √ ] 𝚂𝚞𝚌𝚌𝚎𝚜𝚜...'})
              fs.unlinkSync(ran)
})
              break
case 'take':       
case 'colong':
              if (!isQuotedSticker) return reply('Stiker aja om')
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await farid.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : ``
              dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, farid, mek, from)
              break
case 'delwm':       
              if (!isQuotedSticker) return reply('Stiker aja om')
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await farid.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : ``
              dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, farid, mek, from)
              break
          case 'tovideo':
              if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
              encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              mediaaa = await farid.downloadAndSaveMediaMessage(encmediaaa)
              a = await webp2gifFile(mediaaa)
              mp4 = await getBuffer(a.result)
              farid.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: fgc, caption: mess.success})
              fs.unlinkSync(mediaaa)
              } else {
              reply(mess.wrongFormat)
}
              break
          case 'tomp3':
              if (isQuotedVideo || isQuotedAudio){
              reply(mess.wait)
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
              media = await farid.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.mp3')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply(`Err: ${err}`)
              buffer453 = fs.readFileSync(ran)
              farid.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: fgc})
              fs.unlinkSync(ran)
})
              } else {
              reply(mess.wrongFormat)
}
              break
          
          case 'wangy':
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
case 'ppcp':
case 'ppcouple':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=IkyOgiwara`)
						buff1 = await getBuffer(anu.result.male)
						buttons = [{buttonId: `!ppcp`,buttonText:{displayText: `Next`},type:1}]
              imageMsg = (await farid.prepareMessageMedia(buff1, "imageMessage", { thumbnail: buff1, })).imageMessage
              buttonsMessage = {footerText:'© 𝆑ₐᵣ₋𝆎 流何・ ', imageMessage: imageMsg,
              contentText:`Cowo`,buttons,headerType:4}
              prep = await farid.prepareMessageFromContent(from,{buttonsMessage},{quoted: fgc})
              farid.relayWAMessage(prep)
              buff2 = await getBuffer(anu.result.female)
              buttons = [{buttonId: `!ppcp`,buttonText:{displayText: `Next`},type:1}]
              imageMsg = (await farid.prepareMessageMedia(buff2, "imageMessage", { thumbnail: buff2, })).imageMessage
              buttonsMessage = {footerText:'© 𝆑ₐᵣ₋𝆎 流何・', imageMessage: imageMsg,
              contentText:`Cewe`,buttons,headerType:4}
              prep = await farid.prepareMessageFromContent(from,{buttonsMessage},{quoted: fgc})
             setTimeout( async () => {
 farid.relayWAMessage(prep)
}, 5000)
break
                case 'bucinstick':
                case 'bucinsticker':{        
                    var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
                    var wifegerak = ano.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                    var isGif = wifegerakx.endsWith('.gif') ? true : false
                    if (!isGif) {
                    var ngebuff = await getBuffer(wifegerakx)
                    var media = getRandom('.png')
                    fs.writeFileSync(media, ngebuff)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									farid.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: fgc})
									limitAdd(sender, limit)
                                    fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    } else {
                     var ngebuff = await getBuffer(wifegerakx)
                 	let media = `./sticker/${sender}.gif`
                    fs.writeFileSync(media, ngebuff)
				farid.sendMessage(from,(mess.wait),text ,{quoted :fgiv})
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(err)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									farid.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: fgc})
									
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
                                })
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    }
                    }
                    break    
//------------------< Lainnya >-------------------
          case 'getpp':
          case 'getpick':
              if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
              linkpp = await farid.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
              buffer = await getBuffer(linkpp)
              farid.sendMessage(from, buffer, image, {caption: "[ √ ] 𝚂𝚞𝚌𝚌𝚎𝚜𝚜...~", quoted: fgc })
              } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid === null || mek.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
              mberr = mek.message.extendedTextMessage.contextInfo.participant
              linkpp = await farid.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
              buffer = await getBuffer(linkpp)
              farid.sendMessage(from, buffer, image, { quoted: fgc, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
              } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
              mberr = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
              linkpp = await farid.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
              buffer = await getBuffer(linkpp)
              farid.sendMessage(from, buffer, image, { quoted: fgc, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
}
              break
          case 'searchmsg':  //by ANU TEAM
          case 'caripesan':
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
              cok = await farid.searchMessages(`${ve}`, from, batas,1) 
              if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
              if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
              for (i=1;i < cok.messages.length;i++) {
              if (cok.messages[i].message) {
              farid.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
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
              anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${q}`)
              teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://lolhuman.herokuapp.com`
              farid.sendMessage(from, teks, text, {quoted: fgc})
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
//==================sound========
case 'sound1': case 'sound': case 's1':{
                 let son = fs.readFileSync('./media/music/sound1.mp3')
                farid.sendMessage(from, son, audio, { quoted: fgc})              
                }
                break
case 'sound2': case 's2':{                
                let son = fs.readFileSync('./media/music/sound2.mp3')
                farid.sendMessage(from, son, audio, { quoted: fgc })              
                }
                break
            case 'sound3': case 's3':{
                let son = fs.readFileSync('./media/music/sound3.mp3')
                farid.sendMessage(from, son, audio, { quoted: fgc })              
                }
                break
            case 'sound4': case 's4':{               
                let son = fs.readFileSync('./media/music/sound4.mp3')
                farid.sendMessage(from, son, audio, { quoted: fgc })              
                }
                break
            case 'sound5': case 's5':{               
                let son = fs.readFileSync('./media/music/sound5.mp3')
                farid.sendMessage(from, son, audio, { quoted: fgc })              
                }
                break
            case 'sound6': case 's6':{               
                let son = fs.readFileSync('./media/music/sound6.mp3')
                farid.sendMessage(from, son, audio, { quoted: fgc })              
                }
                break
            case 'sound7': case 's7':{               
                let son = fs.readFileSync('./media/music/sound7.mp3')
                farid.sendMessage(from, son, audio, { quoted: fgc })              
                }
                break
default:
if (budy.includes(`Bot`)) {
                const bot = fs.readFileSync('./assets/bot');
                farid.sendMessage(from, bot, MessageType.audio, {quoted: fgiv, mimetype: 'audio/mp4', ptt:true})
                console.log(`-『 Bot 』- In ${groupName}`)           
                  }
                if (budy.includes(`bot`)) {
                const bot = fs.readFileSync('./assets/bot');
                farid.sendMessage(from, bot, MessageType.audio, {quoted: fgiv, mimetype: 'audio/mp4', ptt:true})
                console.log(`-『 bot 』- In ${groupName}`)           
                  }
if (budy.includes(`assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }

		if (budy.includes(`Assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }
                  
                  if (budy.includes(`syalom`)) {
                  reply(`waalaikumsalam`)
                  }
                  if (budy.includes(`Farid`)) {
                  reply(`Hai kak,ketik !menu untuk menggunakan Bot~`)
                  }
                  if (budy.includes(`rid`)) {
                  reply(`Kenapa kak manggil ownerku,kangen yaaa😁~`)
                  }

if (budy.startsWith('=>')){
if (!isOwner) return
try {
return farid.sendMessage(from, 
`${a}📥 Input: ${budy.slice(3)}
📤 OutPut: 
${JSON.stringify(eval(budy.slice(2)),null,'\t')}
${a}`
,text, {quoted:fgc })
} catch(err) {
e = String(err)
reply(`${a} "err" :  "${e}"${a}`)
}
}
if (!isOwner) return
if (budy.startsWith('> ')) {
try {
console.log(color('[ EVAL ]', 'pink'), color(time), budy, color('dari', 'yellow'), pushname, color('di'), isGroup ? groupName : 'Private Chat')
reply(require('util').format(eval(`;(async () => { ${budy.slice(2)} })()`)))
} catch(e) {
console.log(e)
err = String(e)
js = JSON.stringify(e, null, 2)
if (js == '{}') js = { err }
js = JSON.stringify(js, null, 2)
js = '```' + js + '```'
reply('_' + err + '_\n\n' + js)
}
}
if (!isGroup && isCmd && !mek.key.fromMe){
teks = `Maaf @${senderr.split('@')[0]}, command ${prefix + command} tidak ada dalam menu`
farid.sendMessage(from, {text:teks, jpegThumbnail:fs.readFileSync('./media/wpmobile.png')}, 'extendedTextMessage', {sendEphemeral:true, quoted:fgc, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
}

if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Message : ${budy} From`, color(pushname))
}		
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'red'))
        }
	}
}




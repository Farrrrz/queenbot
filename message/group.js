const {
	MessageType
} = require("@adiwajshing/baileys");
const fs = require("fs-extra")
const moment = require("moment-timezone")

const { getBuffer } = require('../lib/myfunc')
const { color, bgcolor } = require('../lib/color')
       const fp = {
       key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `Promote Admin Group`, 'jpegThumbnail': fs.readFileSync('./media/Nakano.jpg')}}}
       const fd = {
       key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `Demote Admin Group`, 'jpegThumbnail': fs.readFileSync('./media/Nakano.jpg')}}}
       const floc2 = {
                  key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6289530863358-1621036495@g.us" },message: { "liveLocationMessage": { "title":`Welcome Newmem`,}}}
let setting = JSON.parse(fs.readFileSync('./setting.json'))
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
let kma = gam1
let mhan = await nino.prepareMessage(mdata.id, kma, MessageType.image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
nino.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
module.exports = welcome = async (nino, anu) => {
	    const welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
	    const isWelcome = welkom.includes(anu.jid)
	    if (!isWelcome) return
		try {
			    mem = anu.participants[0]
			    console.log(anu)
                try {
                pp_user = await nino.getProfilePicture(mem)
                } catch (e) {
                pp_user = 'https://telegra.ph/file/e7ac551bf15f17eb4494c.png'
            }
                try {
                pp_grup = await nino.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            if (anu.action == 'add' && mem.includes(nino.user.jid)) {
            nino.sendMessage(anu.jid, 'Halo! Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot Ketik !menu', 'conversation')
            }
             if (anu.action == 'add' && !mem.includes(nino.user.jid)) {
             if (!welkom.includes(anu.jid)) return
                mdata = await nino.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            	num = anu.participants[0]
                let v = nino.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                teks = `_*Hallo*_ @${num.split('@')[0]}\n_Welcome to the group_ _*${mdata.subject}*_\n_Don't forget to read the description!_\n\n_*Stay Healty*_ `  
	            buff = await getBuffer(pp_user)
	buttons = [
					{ buttonId: `o`, buttonText: { displayText: 'Welcome 👋🏻' }, type: 1 },
	                  
				]
				buttons = {
					locationMessage: {
						degressLongitude: 0,
						degressLatitude: 1,
						address: 'a',
						jpegThumbnail: buff
					},
					contentText: `${teks}`,
					footerText: `© 𝆑ₐᵣ₋𝆎 流何・`   ,
					buttons: buttons,
					headerType: 6
				}
				await nino.sendMessage(mdata.id, buttons, MessageType.buttonsMessage, {
					contextInfo: {
						externalAdReply: {},
						mentionedJid: [num],
						forwardingScore: 777,
						isForwarded: true
					}
				})
			
		}
            if (anu.action == 'remove' && !mem.includes(nino.user.jid)) {
            if (!welkom.includes(anu.jid)) return
                mdata = await nino.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = nino.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                memeg = mdata.participants.length
                out = `_User_ @${num.split('@')[0]}\n_*Leave*_ _from group_ _*${mdata.subject}*_\n\n_Sayonara:)_`
                buff = await getBuffer(pp_user)
                buttons = [
					{ buttonId: `o`, buttonText: { displayText: 'Good Bye 👋🏻' }, type: 1 },
	                  
				]
				buttons = {
					locationMessage: {
						degressLongitude: 0,
						degressLatitude: 1,
						address: 'a',
						jpegThumbnail: buff
					},
					contentText: `${out}`,
					footerText: `© 𝆑ₐᵣ₋𝆎 流何・`                          ,
					buttons: buttons,
					headerType: 6
				}
				await nino.sendMessage(mdata.id, buttons, MessageType.buttonsMessage, {
					contextInfo: {
						externalAdReply: {},
						mentionedJid: [num],
						forwardingScore: 777,
						isForwarded: true
					}
				})
                
            }
            if (anu.action == 'promote' && !mem.includes(nino.user.jid)) {
                mdata = await nino.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = nino.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_wel = moment.tz('Asia/Jakarta').format("HH:mm")
                memeg = mdata.participants.length
                fah = `*PROMOTE - DETECTED*\n\n*Name* : @${num.split('@')[0]}\n*Time* : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n*Group* : ${mdata.subject}\n\n*Ciee Jadi Atmiin :v*`
                buff = await getBuffer(pp_user)
                buttons = [
					{ buttonId: `o`, buttonText: { displayText: 'Thanks' }, type: 1 },
	                  
				]
				buttons = {
					locationMessage: {
						degressLongitude: 0,
						degressLatitude: 1,
						address: 'a',
						jpegThumbnail: buff
					},
					contentText: `${fah}`,
					footerText: `© 𝆑ₐᵣ₋𝆎 流何・`                          ,
					buttons: buttons,
					headerType: 6
				}
				await nino.sendMessage(mdata.id, buttons, MessageType.buttonsMessage, {
					contextInfo: {
						externalAdReply: {},
						mentionedJid: [num],
						forwardingScore: 777,
						isForwarded: true
					}
				})
                                
            }
            if (anu.action == 'demote' && !mem.includes(nino.user.jid)) {
                mdata = await nino.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = nino.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_wel = moment.tz('Asia/Jakarta').format("HH:mm")
                memeg = mdata.participants.length
                hah = `*DEMOTE - DETECTED*\n\n*Name* : @${num.split('@')[0]}\n*Time* : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n*Group* : ${mdata.subject}\n\n*Awokwok Ter Demote :v*`
                buff = await getBuffer(pp_user)
                buttons = [
					{ buttonId: `o`, buttonText: { displayText: 'Bye' }, type: 1 },
	                  
				]
				buttons = {
					locationMessage: {
						degressLongitude: 0,
						degressLatitude: 1,
						address: 'a',
						jpegThumbnail: buff
					},
					contentText: `${hah}`,
					footerText: `© 𝆑ₐᵣ₋𝆎 流何・`                          ,
					buttons: buttons,
					headerType: 6
				}
				await nino.sendMessage(mdata.id, buttons, MessageType.buttonsMessage, {
					contextInfo: {
						externalAdReply: {},
						mentionedJid: [num],
						forwardingScore: 777,
						isForwarded: true
					}
				})
                                
            }
            console.log(`『 ✓ 』 In ${mdata.subject}`)           
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}

import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

//*─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumber = '' //Ejemplo: 525218138672

//*──ׄ✞ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

global.owner = [
  ['5491156178758', '🜲 𝗖𝗿𝗲𝗮𝗱𝗼𝗿 👻', true],
  ['5217971278937']
];

//*─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

global.mods = []
global.suittag = ['5491156178758'] 
global.prems = []

//*─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

global.libreria = 'Baileys'
global.baileys = 'V 6.7.8'
global.vs = '2.0.0'
global.languaje = 'Español'
global.nameqr = 'black clover- Bot'
global.sessions = 'blackSession'
global.jadi = 'blackJadiBot'
global.blackJadibts = true

//*─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

global.packsticker = `♾ ━━━━━━━━\n├ ɓσƭ:\n├ ρяοριєταяιο:\n├ ƒєϲнα ∂є ϲяєαϲιόи:\n├ нοяα:\n♾━━━━━━━━`
global.packname = `𝘛𝘈𝘕𝘑𝘐𝘙𝘖-𝘉𝘖𝘛`
global.author = `♾━━━━━━━━\n⇝͟͞𝕭𝖑𝖆𝖈𝖐 𝕮𝖑𝖔𝖛𝖊𝖗 ☘͟ ⋆\n⇝ ۵-̱̅ⁱ𝐓𝐇𝐄 𝐂𝐀𝐑𝐋𝐎𝐒-͞ˍ\n⇝ ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}\n⇝ ${moment.tz('America/Los_Angeles').format('HH:mm:ss')} \n♾━━━━━━━━\n\n\n\nѕτιϲκєя ϐγ: ৎ𝘛𝘈𝘕𝘑𝘐𝘙𝘖-𝘉𝘖𝘛 ☘͟ `;
global.wm = '𝘛𝘈𝘕𝘑𝘐𝘙𝘖-𝘉𝘖𝘛';
global.titulowm = '𝐓𝐀𝐍𝐉𝐈𝐑𝐎-𝐁𝐎𝐓 ☘';
global.igfg = 'ᥫ𝘧𝘦𝘥𝘦𝘭𝘢𝘯𝘠𝘛'
global.botname = '𝚃𝙰𝙽𝙹𝙸𝚁𝙾-𝙱𝙾𝚃 ☘'
global.dev = '© ⍴᥆ᥕᥱrᥱძ ᑲᥡ 𝘧𝘦𝘥𝘦𝘭𝘢𝘯𝘠𝘛⚡'
global.textbot = '𝚃𝙰𝙽𝙹𝙸𝚁𝙾-𝙱𝙾𝚃 : 𝘧𝘦𝘥𝘦𝘭𝘢𝘯𝘠𝘛'
global.gt = '͟͞𝙏𝘼𝙉𝙅𝙄𝙍𝙊-𝘽𝙊𝙏☘͟͞';
global.namechannel = '𝚃𝙰𝙽𝙹𝙸𝚁𝙾-𝙱𝙾𝚃 / 𝘧𝘦𝘥𝘦𝘭𝘢𝘯𝘠𝘛'

//*─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

global.moneda = 'monedas'

//• ↳ ◜𝑳𝑰𝑵𝑲𝑺  𝐓𝐇𝐄 𝐋𝐄𝐆𝐄𝐍𝐃𝐒 ™◞ • 🌿
global.gp4 = 'https://chat.whatsapp.com/L6Aiv7yk9YNEcmgGn4Sw7u' //Grupo Oficial De black clover 
global.gp1 = 'https://chat.whatsapp.com/L6Aiv7yk9YNEcmgGn4Sw7u' //Grupo 2
global.gp2 = 'https://chat.whatsapp.com/L6Aiv7yk9YNEcmgGn4Sw7u'//
global.comunidad1 = 'https://chat.whatsapp.com/KnnNE2ywbwh1DHK6ceLfCu' //Comunidad THE LEGENDS 
global.channel = 'https://whatsapp.com/channel/0029VbApe6jG8l5Nv43dsC2N' //Canal Oficial
global.channel2 = 'https://whatsapp.com/channel/0029VbApe6jG8l5Nv43dsC2N' //Canal test 
global.yt = 'https://www.youtube.com/@ElCarlos.87' //Canal De Youtube
global.md = 'https://github.com/thecarlos19/black-clover-MD' //Github Oficial
global.correo = ''
global.cn ='https://whatsapp.com/channel/0029VbApe6jG8l5Nv43dsC2N';

//*─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: '120363402097425674@newsletter',
}
global.multiplier = 70

//*─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─✞─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*
//Apis

global.APIs = {
amel: 'https://melcanz.com',
bx: 'https://bx-hunter.herokuapp.com',
nrtm: 'https://nurutomo.herokuapp.com',
xteam: 'https://api.xteam.xyz',
nzcha: 'http://nzcha-apii.herokuapp.com',
bg: 'http://bochil.ddns.net',
fdci: 'https://api.fdci.se',
dzx: 'https://api.dhamzxploit.my.id',
bsbt: 'https://bsbt-api-rest.herokuapp.com',
zahir: 'https://zahirr-web.herokuapp.com',
zeks: 'https://api.zeks.me',
hardianto: 'https://hardianto-chan.herokuapp.com',
pencarikode: 'https://pencarikode.xyz',
LeysCoder: 'https://leyscoders-api.herokuapp.com',
adiisus: 'https://adiixyzapi.herokuapp.com',
lol: 'https://api.lolhuman.xyz',
fgmods: 'https://api-fgmods.ddns.net',
pencarikode: 'https://pencarikode.xyz',
Velgrynd: 'https://velgrynd.herokuapp.com',
rey: 'https://server-api-rey.herokuapp.com',
hardianto: 'http://hardianto-chan.herokuapp.com',
shadow: 'https://api.reysekha.xyz',
apialc: 'https://api-alc.herokuapp.com',
botstyle: 'https://botstyle-api.herokuapp.com',
neoxr: 'https://neoxr-api.herokuapp.com',
ana: 'https://anabotofc.herokuapp.com/',
kanx: 'https://kannxapi.herokuapp.com/',
dhnjing: 'https://dhnjing.xyz'
},

global.APIKeys = {
'https://api-alc.herokuapp.com': 'ConfuMods',
'https://api.reysekha.xyz': 'apirey',
'https://melcanz.com': 'F3bOrWzY',
'https://bx-hunter.herokuapp.com': 'Ikyy69',
'https://api.xteam.xyz': '5bd33b276d41d6b4',
'https://zahirr-web.herokuapp.com': 'zahirgans',
'https://bsbt-api-rest.herokuapp.com': 'benniismael',
'https://api.zeks.me': 'apivinz',
'https://hardianto-chan.herokuapp.com': 'hardianto',
'https://pencarikode.xyz': 'pais',
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://leyscoders-api.herokuapp.com': 'MIMINGANZ',
'https://server-api-rey.herokuapp.com': 'apirey',
'https://api.lolhuman.xyz': 'GataDiosV2',
'https://botstyle-api.herokuapp.com': 'Eyar749L',
'https://neoxr-api.herokuapp.com': 'yntkts',
'https://anabotofc.herokuapp.com/': 'AnaBot'
} 


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

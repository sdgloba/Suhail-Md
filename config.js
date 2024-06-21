const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348119512263";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_46_06_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA0NSxcbiAgICAgICAgNixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDg0LFxuICAgICAgICA3NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMixcbiAgICAgICAgMjMzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTgyLFxuICAgICAgICA0MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjcsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjEyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDksXG4gICAgICAgIDI5LFxuICAgICAgICAxODksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODEsXG4gICAgICAgIDc0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTkyLFxuICAgICAgICA1MyxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMixcbiAgICAgICAgMTM2LFxuICAgICAgICA1MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDk4LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODksXG4gICAgICAgIDQyLFxuICAgICAgICA3OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzksXG4gICAgICAgIDQ0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzksXG4gICAgICAgIDI4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMU3RSNXZQcEFmREd0L3RmSkp0TWJ4WGdEa2kzVytYOHRsY3dWYXJQYXRzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMTk1MTIyNjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE4MTc3QkJCNDM5NkMzQTJFNEZGNDgyNjRCQzA4NDlBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODk5OTE2OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2cjIzUF83bVNRaVJJVmk2RmlQTEJBXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ1OThjZDI1LTYxZTMtNDc5OC1hZmNhLTdkZmQ5YmEwMzBmM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OSxcbiAgICAgIDc0LFxuICAgICAgMTY2LFxuICAgICAgMTQ4LFxuICAgICAgMTUwLFxuICAgICAgMjEsXG4gICAgICAxNTAsXG4gICAgICA4NCxcbiAgICAgIDY5LFxuICAgICAgMjIxLFxuICAgICAgODAsXG4gICAgICAxMjksXG4gICAgICAyMDEsXG4gICAgICAyMTcsXG4gICAgICA0NSxcbiAgICAgIDIyLFxuICAgICAgMTE4LFxuICAgICAgNjMsXG4gICAgICA3NixcbiAgICAgIDk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNSxcbiAgICAgIDQyLFxuICAgICAgMTAwLFxuICAgICAgMzAsXG4gICAgICAyMDgsXG4gICAgICAxMDMsXG4gICAgICAyMDQsXG4gICAgICA5MCxcbiAgICAgIDE0NSxcbiAgICAgIDY1LFxuICAgICAgMjM4LFxuICAgICAgMTcxLFxuICAgICAgMzEsXG4gICAgICAxOTQsXG4gICAgICAxMDEsXG4gICAgICAxMDMsXG4gICAgICA2NCxcbiAgICAgIDE0MixcbiAgICAgIDIxMixcbiAgICAgIDE5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNR1RMWEE5NlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODExOTUxMjI2Mzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU0RHTE9CQUxcIixcbiAgICBcImxpZFwiOiBcIjExODY5NTg2NzIwMzYzMjo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ096R3hMZ0ZFUGl3MTdNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidjlPc1gzbCtVYTBrQll3bzBEdnhDR2haclE4V3c3N2ZlRjJKeWVOYy9rND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNekN3Zkk2ZkJwR1l3WXNiS1RUQ2ZoYVhuSlhORFFudEdja2x1bDdxZThTNFJkWTIra0tFYWkvS00zcHk3UFhhblp5cnQ3SXdXU0VFK0VheUxXZExBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVSkVYeTdnMW1kbDBDdEpXUkdUaWhERXVYT3BsL2M4MXhSZllsb3orWG1hZ2I3M2dkd0tPQjIwMUFxcHZtb0dYdmxLeWc4WDViOXlYYjB5RDFTQ2hCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTE5NTEyMjYzOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg5OTkxNjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGUXdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZRdy5qc29uIjogIntcImtleURhdGFcIjpcIlY3OTI2QWdOaDYyU1QvT0h4eUg5WWRENTkrL0VweEhFRWcyYWFZczFqSFE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ2MDc0MDk3MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxODk5OTE0OTA0NVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

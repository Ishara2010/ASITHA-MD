const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=q2xAELYQ#0Gw1B8Nweo28zGymMfiQh0YYdj9gx5f2NSb0kOdPmbc",
MONGODB: process.env.MONGODB || "mongodb+srv://nameishara:gKEy6jKkFKg8Ribf@cluster0.9mkcf.mongodb.net/",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};

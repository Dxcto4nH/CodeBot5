const request = require('request');
const fs = global.nodemodule["fs-extra"]
module.exports.config = {
  name: "infoadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho fix by VĐT&NTH",
  description: "Kiểm tra thông tin ngơời dùng.",
  commandCategory: "Info",
  usages: "info",
  cooldowns: 1,
  dependencies: {
"request": ""
}
};

module.exports.run = async({api,event,args,client,Users,global,Currencies}) => {
var callback = () => api.sendMessage(
  {body:`梁Admin Bot梁\n
\n👀 Tên Admin: 
❎ Tuổi: 
👤Giới tính: Nam
💫 Chiều cao cân nặng: 
🐶 Biệt danh: 
☎️Phone Number: 
🐧UID: 
😎 Quê quán: 
🌸 Tính cách: 
🌀 Sở thích: 
💘 Mối quan hệ: 
🔗Profile: `,
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(
        encodeURI(`https://graph.facebook.com/${UID FACEBOOK}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(
       fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
       };
/**
* @author CallmeSun
* @warn Vui lòng không sửa credits cảm ơn !
*/
module.exports.config = {
  name: "tham",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HĐGN",
  description: "ảnh",
  commandCategory: "Random-img",
  usages: "sub",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.ibb.co/DzgzBDT/z2806002758282-a4eb2a8ab449bc1197e269a7b01b1b01.jpg",
"https://i.ibb.co/xXjSN4T/z2806002692710-f6ec9195af082c68378fd502e5c07fbf.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 0) api.sendMessage("Bạn cần 0 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 0})
   var callback = () => api.sendMessage({body:`Facebook Của Nguyễn Thị Hồng Thắm\n»https://www.facebook.com/profile.php?id=100058118433541«\n»https://www.facebook.com/NguyenThiHongTham.OffiCiall«`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }
};
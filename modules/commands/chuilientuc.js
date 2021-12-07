module.exports.config = {
    name: "chuilientuc",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "...",
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "group",
    usages: "chuilientuc @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn chửi", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Bắt đầu chửi !");
setTimeout(() => {a({body: "Này bạn ơi" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "Bạn ra đây mình bảo nè" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "Hiện hồn nhanh đi bạn" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "Hiện hồn cho mình hỏi tội nào" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "Bạn tính trốn cho đến khi nào mới hiện hồn đây" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "Đ!t cụ bạn có hiện hồn không hả" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "Hiện hồn nhanh không mình đốt nhà bạn giờ" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "Nhanh ra chửi nhau với mình" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "Mình ném trứng thối đổ dầu đổ xăng vào nhà bạn giờ" + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: "Bạn vẫn không chịu ra à" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "Không ra nữa mình đốt nhà bạn thiệt đó" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "Mình bắn rap cho chết cụ bạn giờ" + " " + name, mentions: arraytag})}, 31000);
setTimeout(() => {a({body: "Á à rén rồi không dám ra à" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a({body: "Vậy thì để mình rap dis cho bạn nghe nè" + " " + name, mentions: arraytag})}, 39000);
setTimeout(() => {a({body: "Trước đó cho mình xin nghỉ 1p lấy hơi nhé" + " " + name, mentions: arraytag})}, 40000);
setTimeout(() => {a({body: "Xin phép mở đầu thì" + " " + name, mentions: arraytag})}, 65000);
setTimeout(() => {a({body: "Đầu tiên tao xin phép địt từ trên xuống dưới lồn mẹ bạn đó" + " " + name, mentions: arraytag})}, 70000);
setTimeout(() => {a({body: "Xong mình địt từ trên xuống dưới cái lồn bạn" + " " + name, mentions: arraytag})}, 75000);
setTimeout(() => {a({body: "Lồn thì to như lồn trâu thủ dâm ống cống ấy nhé" + " " + name, mentions: arraytag})}, 80000);
setTimeout(() => {a({body: "Một mình, mình địt bạn chắc chưa đủ lắp cái lồn sâu 1 mét của bạn đâu nhỉ" + " " + name, mentions: arraytag})}, 85000);
setTimeout(() => {a("Thôi mình mệt rồi mình đéo chửi nữa tha cho bạn đó")} , 90000);
setTimeout(() => {a({body: "Nào ông chủ update lyric thì chửi tiếp nhé" + " " + name, mentions: arraytag})}, 95000);
setTimeout(() => {a({body: "Cảm ơn bạn đã nghe mình chửi nha" + " " + name, mentions: arraytag})}, 100000);
setTimeout(() => {a({body: "Xin chào và hẹn gặp lại bạn ở chương trình lần sau nha" + " " + name, mentions: arraytag})}, 105000);
setTimeout(() => {a("Chào tạm biệt 🥺")} , 110000);


  
  }
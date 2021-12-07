module.exports.config = {
  name: "help",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Tiadals",
  description: "15 lệnh thường hay dùng",
  commandCategory: "other",
  cooldowns: 0
};

module.exports.run = ({ event, api }) => api.sendMessage(`
\n🍄➻❥ Đây là 10 lệnh thường hay sử dụng\n------------------------------------------------------\n\n1. Ping: Tag toàn bộ thành viên\n2. Callad: Liên lạc với admin\n3. Resend: Xem lại tin nhắn bị gỡ\n4. Ghepdoi: Ghép đôi\n5. Baucua: Chơi game bầu cua\n6. Trai: Xem random ảnh trai đẹp\n7. Gái: Xem random ảnh gái đẹp\n8. Checktt: xem số tin nhắn của chính bản thân\n9. Checktt all: Xem số tin nhắn của toàn bộ thành viên\n10. Sing: Nghe nhạc youtube và Souncloud`, event.threadID, event.messageID);

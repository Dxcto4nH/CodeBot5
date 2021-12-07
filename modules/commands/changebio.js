module.exports.config = {
	name: "changebio",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "NTKhang",
	description: "Đổi tiểu sử của bot",
	commandCategory: "admin",
	usages: "",
  cooldowns: 5
  
}
  module.exports.run = async ({ api, event, global, args, permssion, utils, client, Users }) => {
    api.changeBio(args.join(" "), true,(e) => {
      if(e) api.sendMessage("Đã xảy ra lỗi vui lòng thử lại !" + e, event.threadID); return api.sendMessage("Đã đổi thành công bio của bot thành:\n"+args.join(" "), event.threadID, event.messgaeID)
    }
    )
  }
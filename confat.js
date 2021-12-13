const fs = require('fs')
const chalk = require('chalk')

// Other
global.owner = ["94713195756","94713195756"]
global.packname = 'HYPER-MOD'
global.youtube = 'https://youtube.com/c/HYPERMOD'
global.author = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗 සාර්ථකයි~',
    admin: 'මෙම විධානය භාවිතා කළ හැක්කේ පරිපාලකයාට පමණි!',
    botAdmin: 'මෙම විධානය භාවිතා කළ හැක්කේ බොට් පරිපාලක වූ විට පමණි!',
    owner: 'මෙම විධානය භාවිතා කළ හැක්කේ අයිතිකරුට පමණි!',
    group: 'මෙම විධානය භාවිතා කළ හැක්කේ කණ්ඩායම් වශයෙන් පමණි!',
    private: 'මෙම විධානය භාවිතා කළ හැක්කේ පුද්ගලිකව පමණි!',
	bot: 'බොට් අංකය පරිශීලක විශේෂ විශේෂාංග',
    errtoimg: 'කණගාටුයි දැනට Gif ස්ටිකරයට සහය නොදක්වයි !',
    wait: '⏳ සකස් වෙමින් පවතී',
	lockCmd: 'හිමිකරු විසින් සක්රිය කර නොමැති විශේෂාංග!',
	example1: 'සාදරයෙන් පිළිගනිමු @user කණ්ඩායම තුළ @subject නීති කියවීමට අමතක නොකරන්න @desc\n\nසටහන :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}
global.thumb = fs.readFileSync('./image/lol.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

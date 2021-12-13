exports.wait = () => {
    return `⏳ කරුණාකර මොහොතක් ඉන්න~`
}

exports.ok = () => {
    return `✅ සාර්තකයි~`
}

exports.err = () => {
    return `‼️ දෝෂ විශේෂාංග‼️

⏳හිමිකරු-හයිපර් වෙත විශේෂාංග දෝෂයක් වාර්තා කිරීම⏳`
}
exports.erorLink = () => {
    return `⚠️ ලින්ක් එක දෝෂයකි`
}
exports.media = () => {
    return `කරුණාකර ඔබට බාගත කිරීමට අවශ්‍ය මාධ්‍යය තෝරන්න`
}

exports.wrongFormat = (prefix) => {
    return `වැරදි ආකෘතියක් කරුණාකර *${prefix}allmenu හිදී එය භාවිතා කරන්නේ කෙසේදැයි පරීක්ෂා කරන්න*.`
}

exports.emptyMess = () => {
    return `❎ කරුණාකර ඔබට පැවසීමට අවශ්‍ය පණිවිඩය ඇතුළත් කරන්න!`
}

exports.ownerOnly = () => {
    return `❎ මෙම විධානය අයිතිකරු සඳහා වේ!`
}

exports.doneOwner = () => {
    return `✅  ️ඒක ඉවරයි අයිතිකාරයා~`
}

exports.groupOnly = () => {
    return `👥  මෙම විධානය භාවිතා කළ හැක්කේ කණ්ඩායම් වශයෙන් පමණි!`
}

exports.adminOnly = () => {
    return `🙅  මෙම විධානය භාවිතා කළ හැක්කේ කණ්ඩායම් පරිපාලකයින්ට පමණි!`
}

exports.nhFalse = () => {
    return `වලංගු නොවන කේතය!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
සම්පූර්ණයෙන්ම අවහිර කර ඇති ගණන: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❎ පරිශීලක පරිපාලකයෙක් නොවේ! ❎`
}

exports.adminAlready = () => {
    return `❎ පරිපාලකයෙකු වන පරිශීලකයෙකු ප්‍රවර්ධනය කළ නොහැක!`
}

exports.botNotAdmin = () => {
    return `මුලින්ම bot එක admin කෙනෙක් කරන්න! 🙏`
}

exports.received = (pushname) => {
    return `
ආයුබෝවන් ${pushname}!
වාර්තා කිරීම ගැන ඔබට ස්තුතියි, ඔබගේ වාර්තාව අපට ඉක්මනින් ලැබෙනු ඇත.`
}

exports.videoLimit = () => {
    return `ගොනු ප්‍රමාණය ඉතා විශාලයි!`
}

exports.notNum = (q) => {
    return `"${q}", ඉලක්කම් නොවේ!`
}

exports.listMenu = (time, salam, pushname, prefix) => {
    return `*ආරක්ෂිතයි ${salam} ${pushname} 😖*
*⌚Time Server : ${time}*
*📚 List-Menu HyperbotMD :*

╭─❒ 「 Bot Info 」 ❒
├ ${prefix}owner
├ ${prefix}rules
├ ${prefix}botstatus
╰❒ ${prefix}donate


╭─❒ 「 Owner 」 ❒
├ < evaluate
├ > evaluate
├ $ exec
├ => exec
├ ${prefix}join [link]
├ ${prefix}self
├ ${prefix}public [only bot]
├ ${prefix}del [pesan bot]
╰❒ ${prefix}setppbot [reply image]

╭─❒ 「 Group 」 ❒
├ ${prefix}revoke
├ ${prefix}leave
├ ${prefix}add [62***]
├ ${prefix}kick @tag
├ ${prefix}revoke
├ ${prefix}leave
├ ${prefix}linkgc
├ ${prefix}group [open/close]
├ ${prefix}tagall [text]
╰❒ ${prefix}hidetag [text]

╭─❒ 「 Anime 」 ❒
├ ${prefix}quotesanime
├ ${prefix}anime [query]
├ ${prefix}manga [query]
╰❒ ${prefix}character [query]


╭─❒ 「 Search 」 ❒
├ ${prefix}ytsearch [query]
├ ${prefix}film [query]
├ ${prefix}wallpaper [query]
├ ${prefix}wikimedia [query]
├ ${prefix}hentai
├ ${prefix}wattpad [query]
├ ${prefix}webtoons [query]
├ ${prefix}drakor [query]
╰❒ ${prefix}pinterest [query]


╭─❒ 「 Converter 」 ❒
├ ${prefix}stiker [reply image]
╰❒${prefix}toimg [reply sticker]


╭─❒ 「 Download 」 ❒
├ ${prefix}tiktok [link]
├ ${prefix}tiktoknowm [link]
├ ${prefix}tiktokwm [link]
├ ${prefix}tiktokaudio [link]
├ ${prefix}ytdl [link]
├ ${prefix}play [query]
├ ${prefix}ytmp3 link
├ ${prefix}ytmp4 link
├ ${prefix}facebook link
├ ${prefix}igstory [username]
├ ${prefix}igdl [link]
├ ${prefix}igphoto [link]
├ ${prefix}igvideo [link]
├ ${prefix}igreels [link]
├ ${prefix}igtv [link]
╰❒ ${prefix}twitter link


╭─❒ 「 Random Anime 」 ❒
├ ${prefix}loli
├ ${prefix}neko
├ ${prefix}waifu
├ ${prefix}shinobu
├ ${prefix}megumin
├ ${prefix}bully
├ ${prefix}cuddle
├ ${prefix}cry
├ ${prefix}hug
├ ${prefix}awoo
├ ${prefix}kiss
├ ${prefix}lick
├ ${prefix}pat
├ ${prefix}smug
├ ${prefix}bonk
├ ${prefix}yeet
├ ${prefix}blush
├ ${prefix}smile
├ ${prefix}wave
├ ${prefix}highfive
├ ${prefix}handhold
├ ${prefix}nom
├ ${prefix}bite
├ ${prefix}glomp
├ ${prefix}slap
├ ${prefix}kill
├ ${prefix}happy
├ ${prefix}wink
├ ${prefix}poke
├ ${prefix}dance
╰❒ ${prefix}cringe


╭─❒ 「 Whatsapp Group 」 ❒
├
├ https://chat.whatsapp.com/DwrAShfWMAoESDA28hqnoP
├
╰❒ Hyper Mod Ofc

    `
}

exports.rules = (prefix) => {
    return `
*── 「 RULES AND FAQ 」 ──*

1. ස්පෑම් බොට් කරන්න එපා. ️ සම්බාධක: *⚠️ අනතුරු ඇඟවීම/මෘදු බ්ලොක්*

2. bots අමතන්න එපා. ️ සම්බාධක: *❎ SOFT Block*

3. බොට්ස් ගසාකන්න එපා.😖 සම්බාධක: *‼️ ස්ථිර අවහිරය ‼️️*

🗯️️ ප්‍රතිචාර දැක්වීමට ප්‍රමාද හෝ ප්‍රමාදද? ️ ජාලය, සංඥා, Whatsapp මගින් තහනම් කිරීම සහ අහඹු ලෙස බලපෑම් ඇති විය හැක. දිගටම නීති වලට අවනත වන්න‼️

🗯️ මට මේ bot එකෙන් script එක ගන්න පුළුවන් කොහෙන්ද? ️ මෙම ස්ක්‍රිප්ටය තවමත් පුද්ගලික වන අතර කිසිදා වෙළඳාම් කර නොමැත, වංචාකරුවන් දැනගැනීමේ බුද්ධිමත් වන්න.

🗯️ මට කණ්ඩායමට එකතු කළ හැකිද? ️ තත්ත්‍වය එක් කිරීමට බොට් තාවකාලිකව නොමිලේ.

🗯️ උපසර්ගය කුමක්ද? ️ මෙම බොට් බහු උපසර්ග භාවිතා කරයි. එයින් අදහස් වන්නේ ඔබට #, උපසර්ගය භාවිතා කළ හැකි බවයි. , සහ අනෙකුත් සාධාරණ උපසර්ග.

🗯️ සහෝදරිය, කතාබස් හිමිකරු ප්‍රතිචාර නොදක්වන්නේ කෙසේද? ️ හිමිකරු ප්‍රතිචාර දක්වන්නේ bots සහ Error ගැටලු පිළිබඳ ප්‍රශ්නවලට පමණි, හඳුනන අය සඳහා හෝ ස්ක්‍රිප්ට් හිඟාකෑමට නොවේ.


ඔබට නීති තේරෙන්නේ නම්, ආරම්භ කිරීමට කරුණාකර *${prefix}allmenu* ටයිප් කරන්න!

⚠️ hyperbot හි සියලුම ප්‍රතිපත්ති සහ ප්‍රතිපාදන හිමිකරු සතු වන අතර සියලුම ප්‍රතිපත්ති වෙනස් කිරීම්, ඕනෑම වේලාවක හිමිකරුට පරිශීලකයන් අවලංගු කිරීමට, අවහිර කිරීමට අයිතිය ඇත (*﹏*)

බොහොම ස්තූතියි! ඔබ සඳහා, මිත්‍රශීලී පරිශීලකයින් සහ හයිපර්-බොට් සෑදීමේ ව්‍යාපෘතියට උදව් කළ සමහර පුද්ගලයින් සඳහා 🙏
`
}
exports.source = () =>{
return`*── 「 SOURCE 」 ──*

Youtube : https://youtube.com/c/HYPERMOD
github link : https://github.com/HYPER-MOD/multidevice-bot
`
}
exports.tos = (ownernomer) => {
    return `
*── 「 DONATE 」 ──*

ආයුබෝවන් 👋 
ඔබට මෙම බොට් එක යාවත්කාලීනව තබා ගැනීමට මට සහාය විය හැක: 🏧  767043432 (OVO/Dana/GoPay)

ඔබේ පරිත්‍යාගයේ ඕනෑම ප්‍රමාණයක් බොහෝ දේ අදහස් කරයි 👍

hyper mod!

හිමිකරු අමතන්න:
wa.me/${ownerNumber} (Owner)

    `
}

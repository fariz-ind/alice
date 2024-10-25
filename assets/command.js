const chalk = require('chalk')
const fs = require('fs')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)


// MENU UTAMA
global.menuutama = (prefix, m, sender, command, latensi, isCreator, isPremium, Filesize, tag) => {
return `┈──────────────────────⏣
           ⏤͟͟͞͞ᵡ    *I N F O   B O T*   ᵡ͟͟͞͞⏤
┈──────────────────────⏣
   ⛩️• User Name : @${m.sender.split('@')[0]}
   ⛩️• Access : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
   ⛩️• Version : 1,6 *[ latest ]*
   ⛩️• Memory : ${FileSize(process.memoryUsage().rss)} / ${process.env.SERVER_MEMORY ?? 0} MB
   ⛩️• Speed : ${latensi.toFixed(4)} miliseconds
┈──────────────────────⏣
           ⏤͟͟͞͞ᵡ    *M E N U   B O T*   ᵡ͟͟͞͞⏤
┈──────────────────────⏣
${readmore}    ⏣ • ${prefix+command} all
    ⏣ • ${prefix+command} fun
    ⏣ • ${prefix+command} rpg
    ⏣ • ${prefix+command} tools
    ⏣ • ${prefix+command} shop
    ⏣ • ${prefix+command} game
    ⏣ • ${prefix+command} anime
    ⏣ • ${prefix+command} group
    ⏣ • ${prefix+command} owner
    ⏣ • ${prefix+command} primbon
    ⏣ • ${prefix+command} convert
    ⏣ • ${prefix+command} ephoto
    ⏣ • ${prefix+command} search
    ⏣ • ${prefix+command} chatbot
    ⏣ • ${prefix+command} jadibot
    ⏣ • ${prefix+command} photoxy
    ⏣ • ${prefix+command} random
    ⏣ • ${prefix+command} textpro
    ⏣ • ${prefix+command} audio
    ⏣ • ${prefix+command} sound
    ⏣ • ${prefix+command} download
    
┈──────────────────────⏣
           ⏤͟͟͞͞ᵡ          *A L I C E*            ᵡ͟͟͞͞⏤
┈──────────────────────⏣
`}

// MENU RANDOM PHOTO 
global.menurandom = (prefix) => {
return `┈──────────────────────⏣
            *R A N D O M   P H O T O*
┈──────────────────────⏣
    ⏣ • ${prefix}hijab
    ⏣ • ${prefix}indo
    ⏣ • ${prefix}japanese
    ⏣ • ${prefix}korean
    ⏣ • ${prefix}malay
    ⏣ • ${prefix}randomgirl
    ⏣ • ${prefix}randomboy
    ⏣ • ${prefix}thai
    ⏣ • ${prefix}vietnamese
    ⏣ • ${prefix}aesthetic
    ⏣ • ${prefix}chinese
    ⏣ • ${prefix}pubg
    ⏣ • ${prefix}antiwork
    ⏣ • ${prefix}blackpink2
    ⏣ • ${prefix}cosplay
    ⏣ • ${prefix}cat
    ⏣ • ${prefix}doggo
    ⏣ • ${prefix}justina
    ⏣ • ${prefix}kayes
    ⏣ • ${prefix}bike
    ⏣ • ${prefix}boneka
    ⏣ • ${prefix}kpop
    ⏣ • ${prefix}notnot
    ⏣ • ${prefix}car
    ⏣ • ${prefix}rose
    ⏣ • ${prefix}ryujin
    ⏣ • ${prefix}ulzangboy
    ⏣ • ${prefix}ulzanggirl
    ⏣ • ${prefix}mobilelegend

`}

// MENU NSFW
global.menunsfw = (prefix) => {
return `┈──────────────────────⏣
            *几丂千山        爪乇几ㄩ*
┈──────────────────────⏣
    ⏣ • ${prefix}hentai  
    ⏣ • ${prefix}gifhentai  
    ⏣ • ${prefix}gifblowjob  
    ⏣ • ${prefix}hentaivid  
    ⏣ • ${prefix}hneko  
    ⏣ • ${prefix}nwaifu  
    ⏣ • ${prefix}animespank  
    ⏣ • ${prefix}trap  
    ⏣ • ${prefix}gasm  
    ⏣ • ${prefix}ahegao  
    ⏣ • ${prefix}ass  
    ⏣ • ${prefix}bdsm  
    ⏣ • ${prefix}blowjob  
    ⏣ • ${prefix}cuckold  
    ⏣ • ${prefix}cum  
    ⏣ • ${prefix}milf  
    ⏣ • ${prefix}eba  
    ⏣ • ${prefix}ero  
    ⏣ • ${prefix}femdom  
    ⏣ • ${prefix}foot  
    ⏣ • ${prefix}gangbang  
    ⏣ • ${prefix}glasses  
    ⏣ • ${prefix}jahy  
    ⏣ • ${prefix}masturbation  
    ⏣ • ${prefix}manga  
    ⏣ • ${prefix}neko-hentai  
    ⏣ • ${prefix}neko-hentai2  
    ⏣ • ${prefix}nsfwloli  
    ⏣ • ${prefix}orgy  
    ⏣ • ${prefix}panties   
    ⏣ • ${prefix}pussy  
    ⏣ • ${prefix}tentacles  
    ⏣ • ${prefix}thights  
    ⏣ • ${prefix}yuri  
    ⏣ • ${prefix}zettai 
    
┈──────────────────────⏣
      *O T H E R S*
┈──────────────────────⏣
    ⏣ • ${prefix}bokep1-27
    ⏣ • ${prefix}art
    ⏣ • ${prefix}paptt
    ⏣ • ${prefix}awoo
    ⏣ • ${prefix}hentaivid
    ⏣ • ${prefix}hentaivid2
    ⏣ • ${prefix}xnxxs *judul*
    ⏣ • ${prefix}xnxxdl *link*

`}

// MENU TOOLS
global.menutools = (prefix) => {
return `┈──────────────────────⏣
            *O W N E R    T O O L S*
┈──────────────────────⏣
    ⏣ • ${prefix}ping
    ⏣ • ${prefix}runtime
    ⏣ • ${prefix}opsichatpc *nomor*
    ⏣ • ${prefix}opsichatgc *id*
    ⏣ • ${prefix}addcase *code*
    ⏣ • ${prefix}delcase *command*
    ⏣ • ${prefix}addsewa *link + time*
    ⏣ • ${prefix}listsewa
    ⏣ • ${prefix}checksewa
    ⏣ • ${prefix}delsewa
    ⏣ • ${prefix}ebase64 *text/code*
    ⏣ • ${prefix}debase64 *base64*
    ⏣ • ${prefix}ehex *text/code*
    ⏣ • ${prefix}dehex *hex*
    ⏣ • ${prefix}restart *restart bot*
    ⏣ • ${prefix}shutdown *mati*
    ⏣ • ${prefix}buatgc *namanya*
    ⏣ • ${prefix}ipbot
    ⏣ • ${prefix}shortlink *url*
    ⏣ • ${prefix}ebinary *text*
    ⏣ • ${prefix}dbinary *text*
    ⏣ • ${prefix}clearjdb
    ⏣ • ${prefix}getdb
    ⏣ • ${prefix}delsampah
    ⏣ • ${prefix}encrypt *text/code*
    ⏣ • ${prefix}ban
    ⏣ • ${prefix}nowa *nomor*
    ⏣ • ${prefix}banned *mention or reply*
    ⏣ • ${prefix}call *telepon*
    ⏣ • ${prefix}spamsms *pesan spam*
    ⏣ • ${prefix}gantifile *nama file*
    ⏣ • ${prefix}delfolder *nama folder*
    ⏣ • ${prefix}nomor-wa *nomornya*
    ⏣ • $ *exec*
    ⏣ • > 

`
}

// MENU ASUPAN
global.menuasupan = (prefix) => {
return `┈──────────────────────⏣
            *卂丂ㄩ卩卂几*
┈──────────────────────⏣
    ⏣ • ${prefix}asupan1-20
    ⏣ • ${prefix}tiktokgirl
    ⏣ • ${prefix}tiktoknukthy
    ⏣ • ${prefix}tiktokkayes
    ⏣ • ${prefix}tiktokpanrika
    ⏣ • ${prefix}tiktoknotnot
    ⏣ • ${prefix}tiktokghea 
    ⏣ • ${prefix}tiktoksantuy 
    ⏣ • ${prefix}tiktokbocil 

`
}

// MENU PHOTOOXY
global.menuphotoxy = (prefix) => {
return `┈──────────────────────⏣
            *P H O T O O X Y*
┈──────────────────────⏣
    ⏣ • ${prefix}shadow *text*
    ⏣ • ${prefix}write *text*
    ⏣ • ${prefix}romantic *text*
    ⏣ • ${prefix}burnpaper *text*
    ⏣ • ${prefix}smoke *text*
    ⏣ • ${prefix}narutobanner *text*
    ⏣ • ${prefix}love *text*
    ⏣ • ${prefix}undergrass *text*
    ⏣ • ${prefix}doublelove *text*
    ⏣ • ${prefix}coffecup *text*
    ⏣ • ${prefix}underwaterocean *text*
    ⏣ • ${prefix}smokyneon *text*
    ⏣ • ${prefix}starstext *text*
    ⏣ • ${prefix}rainboweffect *text*
    ⏣ • ${prefix}balloontext *text*
    ⏣ • ${prefix}metalliceffect *text*
    ⏣ • ${prefix}embroiderytext *text*
    ⏣ • ${prefix}flamingtext *text*
    ⏣ • ${prefix}stonetext *text*
    ⏣ • ${prefix}writeart *text*
    ⏣ • ${prefix}summertext *text*
    ⏣ • ${prefix}wolfmetaltext *text*
    ⏣ • ${prefix}nature3dtext *text*
    ⏣ • ${prefix}rosestext *text*
    ⏣ • ${prefix}naturetypography *text*
    ⏣ • ${prefix}quotesunder *text*
    ⏣ • ${prefix}shinetext *text*

`
}

// MENU CLONE BOT
global.menujadibot = (prefix) => {
return `┈──────────────────────⏣
            *ﾌ卂刀丨乃ㄖㄒ*
┈──────────────────────⏣
    ⏣ • ${prefix}jadibot *waktu*
    ⏣ • ${prefix}stop *mematikan*
    ⏣ • ${prefix}start *memulai*
    ⏣ • ${prefix}listjadibot
    ⏣ • ${prefix}delsession
    ⏣ • ${prefix}getsession
    ⏣ • ${prefix}carajadibot

`
}

// MENU TEXT PRO
global.menutextpro = (prefix) => {
return `┈──────────────────────⏣
            *ㄒ乇乂ㄒ       爪卂Ҝ乇尺*
┈──────────────────────⏣
    ⏣ • ${prefix}blackpink *text*
    ⏣ • ${prefix}neon *text*
    ⏣ • ${prefix}greenneon *text*
    ⏣ • ${prefix}advanceglow *text*
    ⏣ • ${prefix}futureneon *text*
    ⏣ • ${prefix}sandwriting *text*
    ⏣ • ${prefix}sandsummer *text*
    ⏣ • ${prefix}sandengraved *text*
    ⏣ • ${prefix}metaldark *text*
    ⏣ • ${prefix}neonlight *text*
    ⏣ • ${prefix}holographic *text*
    ⏣ • ${prefix}text1917 *text*
    ⏣ • ${prefix}minion *text*
    ⏣ • ${prefix}deluxesilver *text*
    ⏣ • ${prefix}newyearcard *text*
    ⏣ • ${prefix}bloodfrosted *text*
    ⏣ • ${prefix}halloween *text*
    ⏣ • ${prefix}jokerlogo *text*
    ⏣ • ${prefix}fireworksparkle *text*
    ⏣ • ${prefix}natureleaves *text*
    ⏣ • ${prefix}bokeh *text*
    ⏣ • ${prefix}toxic *text*
    ⏣ • ${prefix}strawberry *text*
    ⏣ • ${prefix}box3d *text*
    ⏣ • ${prefix}roadwarning *text*
    ⏣ • ${prefix}breakwall *text*
    ⏣ • ${prefix}icecold *text*
    ⏣ • ${prefix}luxury *text*
    ⏣ • ${prefix}cloud *text*
    ⏣ • ${prefix}summersand *text*
    ⏣ • ${prefix}horrorblood *text*
    ⏣ • ${prefix}thunder *text*

`
}

// MENU OWNER
global.menuowner = (prefix) => {
return `┈──────────────────────⏣
            *ㄖ山几乇尺      爪乇几ㄩ*
┈──────────────────────⏣
    ⏣ • ${prefix}public
    ⏣ • ${prefix}self
    ⏣ • ${prefix}warcallid *id|text*
    ⏣ • ${prefix}cleardb
    ⏣ • ${prefix}adduserdb *reply*
    ⏣ • ${prefix}deluserdb *reply*
    ⏣ • ${prefix}adduserdbgc
    ⏣ • ${prefix}listdbuser
    ⏣ • ${prefix}unbanned *mention or reply*
    ⏣ • ${prefix}addprem *mention or reply*
    ⏣ • ${prefix}delprem *mention or reply*
    ⏣ • ${prefix}setprefix *symbol*
    ⏣ • ${prefix}setcover *link photo*
    ⏣ • ${prefix}setppbot *reply photo*
    ⏣ • ${prefix}delppbot
    ⏣ • ${prefix}block *mention or reply*
    ⏣ • ${prefix}unblock *mention or reply*
    ⏣ • ${prefix}listblock
    ⏣ • ${prefix}listpc
    ⏣ • ${prefix}listgc
    ⏣ • ${prefix}listonline   
    ⏣ • ${prefix}delchat
    ⏣ • ${prefix}readvo *reply viewonce*
    ⏣ • ${prefix}setnamabot *nama*
    ⏣ • ${prefix}setbiobot *bionya*
    ⏣ • ${prefix}setthumb *gambar*
    ⏣ • ${prefix}welcome *on / off*
    ⏣ • ${prefix}anticall *on / off*
    ⏣ • ${prefix}antilink *on / off*
    ⏣ • ${prefix}autoai *on / off*
    ⏣ • ${prefix}autodownload *on / off*
    ⏣ • ${prefix}auto-ai *on / off*
    ⏣ • ${prefix}anticall *on / off*
    ⏣ • ${prefix}autoreadsw *on / off*

`
}

// MENU SEARCH
global.menusearch = (prefix) => {
return `┈──────────────────────⏣
            *M E N U    S E A R C H*
┈──────────────────────⏣
    ⏣ • ${prefix}play *text*
    ⏣ • ${prefix}spotify *title*
    ⏣ • ${prefix}spotifysearch *title*
    ⏣ • ${prefix}pinterest *text*
    ⏣ • ${prefix}ytvideo *text*
    ⏣ • ${prefix}yts *querry*
    ⏣ • ${prefix}ssweb *link*
    ⏣ • ${prefix}google *text*
    ⏣ • ${prefix}nontontv
    ⏣ • ${prefix}ghstalk *username*
    ⏣ • ${prefix}igstalk *username*
    ⏣ • ${prefix}tiktokstalk *username*
    ⏣ • ${prefix}npmsearch *pack name*
    ⏣ • ${prefix}weather *lokasi*
    ⏣ • ${prefix}aiimg *text*
    ⏣ • ${prefix}gimage *text*
    ⏣ • ${prefix}textimg *prompt*
    ⏣ • ${prefix}bingimg *prompt*
    ⏣ • ${prefix}translate *reply text*
    ⏣ • ${prefix}jarak *kota|kota*
    ⏣ • ${prefix}lirik *judul lagu*
    ⏣ • ${prefix}xnxxs *title*
    ⏣ • ${prefix}pornhubgif *judul*
    ⏣ • ${prefix}animesearch *title*
    ⏣ • ${prefix}otakudesu *title*
    ⏣ • ${prefix}hentaisearch *judul :D*

`
}
// MENU CHATBOT
global.menuchatbot = (prefix) => {
return `┈──────────────────────⏣
            *M E N U    C H A T  - G P T*
┈──────────────────────⏣
    ⏣ • ${prefix}ai *ask*
    ⏣ • ${prefix}hutao *ask*
    ⏣ • ${prefix}nobara *ask*
    ⏣ • ${prefix}elaina *ask*
    ⏣ • ${prefix}miku *ask*
    ⏣ • ${prefix}cai *char & text*
    
┈──────────────────────⏣
            *M E N U    D I F F U S I O N*
┈──────────────────────⏣
    ⏣ • ${prefix}toanime *reply foto*
    ⏣ • ${prefix}diffusion *prompt*
    ⏣ • ${prefix}remini *reply gambar*
    ⏣ • ${prefix}txt2img *prompt*
    ⏣ • ${prefix}jadi *modelnya*
    ⏣ • ${prefix}differentme *modelnya*

`
}

// MENU CONVERT
global.menuconvert = (prefix) => {
return `┈──────────────────────⏣
            *匚ㄖ几V乇尺ㄒ乇尺*
┈──────────────────────⏣
    ⏣ • ${prefix}say *text*
    ⏣ • ${prefix}toonce *media*
    ⏣ • ${prefix}smeme *image & text*
    ⏣ • ${prefix}qc *text*
    ⏣ • ${prefix}qcimg *text*
    ⏣ • ${prefix}smeta *reply sticker*
    ⏣ • ${prefix}sticker *reply image/video*
    ⏣ • ${prefix}toimg *reply sticker*
    ⏣ • ${prefix}toptv *reply video*
    ⏣ • ${prefix}tomp4 *reply sticker*
    ⏣ • ${prefix}toaudio *reply video*
    ⏣ • ${prefix}tomp3 *reply video*
    ⏣ • ${prefix}togif *reply video*
    ⏣ • ${prefix}toqr *link or text*
    ⏣ • ${prefix}tovn *reply audio*
    ⏣ • ${prefix}remini *reply gambar*

`
}

// MENU DOWNLOAD
global.menudownload = (prefix) => {
return `┈──────────────────────⏣
            *刀ㄖ山几ㄥㄖ卂刀乇尺*
┈──────────────────────⏣
    ⏣ • ${prefix}ytsearch *judul*
    ⏣ • ${prefix}ytreels *link*
    ⏣ • ${prefix}getmusic *reply yts*
    ⏣ • ${prefix}getvideo *reply yts*
    ⏣ • ${prefix}ytvideo *judul video*
    ⏣ • ${prefix}ytmp3 *link youtube*
    ⏣ • ${prefix}ytmp4 *link youtube*
    ⏣ • ${prefix}ytdok *link youtube*
    ⏣ • ${prefix}ytvn *link youtube*
    ⏣ • ${prefix}ytvideo *link youtube*
    ⏣ • ${prefix}tiktok *link tiktok*
    ⏣ • ${prefix}capcutdl *link*
    ⏣ • ${prefix}megadl *link*
    ⏣ • ${prefix}fbdl *link*
    ⏣ • ${prefix}spotifydl *link*
    ⏣ • ${prefix}igdl *link*
    ⏣ • ${prefix}gitclone *link*
    ⏣ • ${prefix}mediafire *link*
    ⏣ • ${prefix}happymod *game name*
    ⏣ • ${prefix}gdrive *link*

`
}

// MENU EPHOTO
global.menuephoto = (prefix) => {
return `┈──────────────────────⏣
            *モㄗ卄口匕口*
┈──────────────────────⏣
    ⏣ • ${prefix}credit
    ⏣ • ${prefix}glitchtext *text*
    ⏣ • ${prefix}writetext *text*
    ⏣ • ${prefix}advancedglow *text*
    ⏣ • ${prefix}typographytext *text*
    ⏣ • ${prefix}pixelglitch *text*
    ⏣ • ${prefix}neonglitch *text*
    ⏣ • ${prefix}flagtext *text*
    ⏣ • ${prefix}flag3dtext *text*
    ⏣ • ${prefix}deletingtext *text*
    ⏣ • ${prefix}blackpinkstyle *text*
    ⏣ • ${prefix}glowingtext *text*
    ⏣ • ${prefix}underwatertext *text*
    ⏣ • ${prefix}logomaker *text*
    ⏣ • ${prefix}cartoonstyle *text*
    ⏣ • ${prefix}papercutstyle *text*
    ⏣ • ${prefix}watercolortext *text*
    ⏣ • ${prefix}effectclouds *text*
    ⏣ • ${prefix}blackpinklogo *text*
    ⏣ • ${prefix}gradienttext *text*
    ⏣ • ${prefix}summerbeach *text*
    ⏣ • ${prefix}luxurygold *text*
    ⏣ • ${prefix}multicoloredneon *text*
    ⏣ • ${prefix}sandsummer *text*
    ⏣ • ${prefix}galaxywallpaper *text*
    ⏣ • ${prefix}1917style *text*
    ⏣ • ${prefix}makingneon *text*
    ⏣ • ${prefix}royaltext *text*
    ⏣ • ${prefix}freecreate *text*
    ⏣ • ${prefix}galaxystyle *text*
    ⏣ • ${prefix}lighteffects *text*

`
}

// MENU PRIMBON GAME
global.menuprimbon = (prefix) => {
return `┈──────────────────────⏣
            *ㄗ尺工爪乃口れ*
┈──────────────────────⏣
    ⏣ • ${prefix}credit
    ⏣ • ${prefix}artinama *text*
    ⏣ • ${prefix}artimimpi *text*
    ⏣ • ${prefix}kecocokanpasangan *text*
    ⏣ • ${prefix}kecocokannama *text*
    ⏣ • ${prefix}jadianpernikahan *text*
    ⏣ • ${prefix}rezeki *text*
    ⏣ • ${prefix}sifatusaha *text*
    ⏣ • ${prefix}pekerjaan *text*
    ⏣ • ${prefix}artitarot *text*
    ⏣ • ${prefix}potensipenyakit *text*
    ⏣ • ${prefix}ramalannasib *text*
    ⏣ • ${prefix}harisangar *text*
    ⏣ • ${prefix}haribaik *text*
    ⏣ • ${prefix}fengshui *text*
    ⏣ • ${prefix}nagahari *text*
    ⏣ • ${prefix}harinaas *text*
    ⏣ • ${prefix}weton *text*
    ⏣ • ${prefix}peruntungan *text*
    ⏣ • ${prefix}arahrejeki *text*
    ⏣ • ${prefix}sifat *text*
    ⏣ • ${prefix}kebetuntungan *text*
    ⏣ • ${prefix}memancing *text*
    ⏣ • ${prefix}masasubur *text*
    ⏣ • ${prefix}zodiak *text*
    ⏣ • ${prefix}shio *text*

`
}

// MENU GROUP
global.menugroup = (prefix) => {
return `┈──────────────────────⏣
            *爪乇几ㄩ     ム尺ㄖㄩ卩*
┈──────────────────────⏣
    ⏣ • ${prefix}credit
    ⏣ • ${prefix}rules
    ⏣ • ${prefix}getsider
    ⏣ • ${prefix}totalfitur
    ⏣ • ${prefix}boostgc
    ⏣ • ${prefix}warcall *text*
    ⏣ • ${prefix}getcontact *tag*
    ⏣ • ${prefix}sendcontact *tag*
    ⏣ • ${prefix}contacttag *tag*
    ⏣ • ${prefix}kontakme
    ⏣ • ${prefix}menfess *pesannya*
    ⏣ • ${prefix}setcmd *command*
    ⏣ • ${prefix}listcmd
    ⏣ • ${prefix}delcmd *command*
    ⏣ • ${prefix}timergc *waktu*
    ⏣ • ${prefix}afk *alasan*
    ⏣ • ${prefix}tagall *text*
    ⏣ • ${prefix}kudeta *berbahaya*
    ⏣ • ${prefix}idgc
    ⏣ • ${prefix}promoteall *adminkan semua*
    ⏣ • ${prefix}demoteall *unadmin semua*
    ⏣ • ${prefix}hidetag *text*
    ⏣ • ${prefix}cekgc *link*
    ⏣ • ${prefix}ppcp/couple
    ⏣ • ${prefix}getname *mention or reply*
    ⏣ • ${prefix}getpp *mention or reply*
    ⏣ • ${prefix}getbio *mention or reply*
    ⏣ • ${prefix}delete *reply pesan*
    ⏣ • ${prefix}promote *mention or reply*
    ⏣ • ${prefix}demote *mention or reply*
    ⏣ • ${prefix}add *number*
    ⏣ • ${prefix}kick *mention or reply*
    ⏣ • ${prefix}infogrup
    ⏣ • ${prefix}linkgrup
    ⏣ • ${prefix}grup *open / close*
    ⏣ • ${prefix}revoke 
    ⏣ • ${prefix}join *link group*
    ⏣ • ${prefix}left 
    ⏣ • ${prefix}setppgrup *reply photo*
    ⏣ • ${prefix}setgrupname *text*
    ⏣ • ${prefix}setdesc *text*
    ⏣ • ${prefix}pushkontakfrom *text*

`
}

// MENU ANIME
global.menuanime = (prefix) => {
return `┈──────────────────────⏣
            *丹れ工爪モ*
┈──────────────────────⏣
    ⏣ • ${prefix}cogan
    ⏣ • ${prefix}elaina2
    ⏣ • ${prefix}exo
    ⏣ • ${prefix}elf
    ⏣ • ${prefix}estetic
    ⏣ • ${prefix}kanna
    ⏣ • ${prefix}loli
    ⏣ • ${prefix}shota
    ⏣ • ${prefix}husbu
    ⏣ • ${prefix}sagiri
    ⏣ • ${prefix}shinobu
    ⏣ • ${prefix}megumin
    ⏣ • ${prefix}wallnime
    ⏣ • ${prefix}neko
    ⏣ • ${prefix}waifu
    ⏣ • ${prefix}kill
    ⏣ • ${prefix}pat
    ⏣ • ${prefix}lick
    ⏣ • ${prefix}bite
    ⏣ • ${prefix}yeet
    ⏣ • ${prefix}bonk
    ⏣ • ${prefix}wink
    ⏣ • ${prefix}poke
    ⏣ • ${prefix}nom
    ⏣ • ${prefix}slap
    ⏣ • ${prefix}smile
    ⏣ • ${prefix}wave
    ⏣ • ${prefix}blush
    ⏣ • ${prefix}smug
    ⏣ • ${prefix}glomp
    ⏣ • ${prefix}happy
    ⏣ • ${prefix}dance
    ⏣ • ${prefix}cringe
    ⏣ • ${prefix}highfive
    ⏣ • ${prefix}handhold
    ⏣ • ${prefix}akira 
    ⏣ • ${prefix}akiyama 
    ⏣ • ${prefix}ana 
    ⏣ • ${prefix}asuna 
    ⏣ • ${prefix}ayuzawa 
    ⏣ • ${prefix}boruto 
    ⏣ • ${prefix}chiho 
    ⏣ • ${prefix}chitoge 
    ⏣ • ${prefix}cosplayloli 
    ⏣ • ${prefix}cosplaysagiri 
    ⏣ • ${prefix}deidara 
    ⏣ • ${prefix}doraemon 
    ⏣ • ${prefix}elena
    ⏣ • ${prefix}emilia 
    ⏣ • ${prefix}erza 
    ⏣ • ${prefix}gremory 
    ⏣ • ${prefix}hestia 
    ⏣ • ${prefix}hinata 
    ⏣ • ${prefix}husbu 
    ⏣ • ${prefix}inori 
    ⏣ • ${prefix}isuzu 
    ⏣ • ${prefix}itachi 
    ⏣ • ${prefix}itori 
    ⏣ • ${prefix}kaga 
    ⏣ • ${prefix}kagura 
    ⏣ • ${prefix}kakasih 
    ⏣ • ${prefix}kaori 
    ⏣ • ${prefix}keneki 
    ⏣ • ${prefix}kotori 
    ⏣ • ${prefix}kurumi 
    ⏣ • ${prefix}loli 
    ⏣ • ${prefix}madara 
    ⏣ • ${prefix}megumin 
    ⏣ • ${prefix}mikasa 
    ⏣ • ${prefix}mikey 
    ⏣ • ${prefix}miku 
    ⏣ • ${prefix}minato 
    ⏣ • ${prefix}naruto 
    ⏣ • ${prefix}neko 
    ⏣ • ${prefix}neko2 
    ⏣ • ${prefix}nekonime 
    ⏣ • ${prefix}nezuko 
    ⏣ • ${prefix}onepiece 
    ⏣ • ${prefix}pokemon 
    ⏣ • ${prefix}randomnime 
    ⏣ • ${prefix}randomnime2 
    ⏣ • ${prefix}rize 
    ⏣ • ${prefix}sagiri 
    ⏣ • ${prefix}sakura 
    ⏣ • ${prefix}sasuke 
    ⏣ • ${prefix}shina 
    ⏣ • ${prefix}shinka 
    ⏣ • ${prefix}shinomiya 
    ⏣ • ${prefix}shizuka 
    ⏣ • ${prefix}shota 
    ⏣ • ${prefix}tejina 
    ⏣ • ${prefix}toukachan 
    ⏣ • ${prefix}tsunade 
    ⏣ • ${prefix}waifu 
    ⏣ • ${prefix}animewall 
    ⏣ • ${prefix}yotsuba 
    ⏣ • ${prefix}yuki 
    ⏣ • ${prefix}yulibocil 
    ⏣ • ${prefix}yumeko
    ⏣ • ${prefix}8ball
    ⏣ • ${prefix}tickle
    ⏣ • ${prefix}gecg
    ⏣ • ${prefix}feed

`
}

// MENU RPG GAMES
global.menurpg = (prefix) => {
return `┈──────────────────────⏣
            *R P G    G A M E S*
┈──────────────────────⏣
    ⏣ • ${prefix}claim
    ⏣ • ${prefix}jual
    ⏣ • ${prefix}openbo
    ⏣ • ${prefix}mancing
    ⏣ • ${prefix}mining
    ⏣ • ${prefix}inv
    ⏣ • ${prefix}berburu
    ⏣ • ${prefix}mulung
    ⏣ • ${prefix}kerja
    ⏣ • ${prefix}shop
    ⏣ • ${prefix}rpg
    ⏣ • ${prefix}joinrpg
    ⏣ • ${prefix}gajian
    ⏣ • ${prefix}me
    ⏣ • ${prefix}heal
    ⏣ • ${prefix}kerja
    ⏣ • ${prefix}leaderboard
    ⏣ • ${prefix}nebang
    ⏣ • ${prefix}cook *memasak*
    ⏣ • ${prefix}makanan *cek makanan*
    ⏣ • ${prefix}makan *exp up*
    ⏣ • ${prefix}tidur *heal up*
    ⏣ • ${prefix}pertanian
    ⏣ • ${prefix}gelud *tag*
    ⏣ • ${prefix}spin *jumlah*
    ⏣ • ${prefix}slot *jumlah*
    ⏣ • ${prefix}bunuh *tag*
    ⏣ • ${prefix}bansos *tag*
    ⏣ • ${prefix}petualang
    ⏣ • ${prefix}ngojek
    ⏣ • ${prefix}dungeon
    ⏣ • ${prefix}ngewe
    ⏣ • ${prefix}mydompet
    ⏣ • ${prefix}gacha

`
}

// MENU SOUND
global.menusound = (prefix) => {
return `┈──────────────────────⏣
            *丂ㄖㄩ几刀*
┈──────────────────────⏣
    ⏣ • ${prefix}sound1
    ⏣ • ${prefix}sound2
    ⏣ • ${prefix}sound3
    ⏣ • ${prefix}sound4
    ⏣ • ${prefix}sound5
    ⏣ • ${prefix}sound6
    ⏣ • ${prefix}sound7
    ⏣ • ${prefix}sound8
    ⏣ • ${prefix}sound9
    ⏣ • ${prefix}sound10
    ⏣ • ${prefix}sound11
    ⏣ • ${prefix}sound12
    ⏣ • ${prefix}sound13
    ⏣ • ${prefix}sound14
    ⏣ • ${prefix}sound15
    ⏣ • ${prefix}sound16
    ⏣ • ${prefix}sound17
    ⏣ • ${prefix}sound18
    ⏣ • ${prefix}sound19
    ⏣ • ${prefix}sound20
    ⏣ • ${prefix}sound21
    ⏣ • ${prefix}sound22
    ⏣ • ${prefix}sound23
    ⏣ • ${prefix}sound24
    ⏣ • ${prefix}sound25
    ⏣ • ${prefix}sound26
    ⏣ • ${prefix}sound27
    ⏣ • ${prefix}sound28
    ⏣ • ${prefix}sound29
    ⏣ • ${prefix}sound30
    ⏣ • ${prefix}sound31
    ⏣ • ${prefix}sound32
    ⏣ • ${prefix}sound33
    ⏣ • ${prefix}sound34
    ⏣ • ${prefix}sound36
    ⏣ • ${prefix}sound37
    ⏣ • ${prefix}sound38
    ⏣ • ${prefix}sound39
    ⏣ • ${prefix}sound40
    ⏣ • ${prefix}sound41
    ⏣ • ${prefix}sound42
    ⏣ • ${prefix}sound43
    ⏣ • ${prefix}sound44
    ⏣ • ${prefix}sound45
    ⏣ • ${prefix}sound46
    ⏣ • ${prefix}sound47
    ⏣ • ${prefix}sound48
    ⏣ • ${prefix}sound49
    ⏣ • ${prefix}sound50
    ⏣ • ${prefix}sound51
    ⏣ • ${prefix}sound52
    ⏣ • ${prefix}sound53
    ⏣ • ${prefix}sound54
    ⏣ • ${prefix}sound55
    ⏣ • ${prefix}sound56
    ⏣ • ${prefix}sound57
    ⏣ • ${prefix}sound58
    ⏣ • ${prefix}sound59
    ⏣ • ${prefix}sound60
    ⏣ • ${prefix}sound61
    ⏣ • ${prefix}sound62
    ⏣ • ${prefix}sound63
    ⏣ • ${prefix}sound64
    ⏣ • ${prefix}sound65
    ⏣ • ${prefix}sound66
    ⏣ • ${prefix}sound67
    ⏣ • ${prefix}sound68
    ⏣ • ${prefix}sound69
    ⏣ • ${prefix}sound70
    ⏣ • ${prefix}sound71
    ⏣ • ${prefix}sound72
    ⏣ • ${prefix}sound73
    ⏣ • ${prefix}sound74
    ⏣ • ${prefix}sound75
    ⏣ • ${prefix}sound76
    ⏣ • ${prefix}sound77
    ⏣ • ${prefix}sound78
    ⏣ • ${prefix}sound79
    ⏣ • ${prefix}sound80
    ⏣ • ${prefix}sound81
    ⏣ • ${prefix}sound82
    ⏣ • ${prefix}sound83
    ⏣ • ${prefix}sound84
    ⏣ • ${prefix}sound85
    ⏣ • ${prefix}sound86
    ⏣ • ${prefix}sound87
    ⏣ • ${prefix}sound88
    ⏣ • ${prefix}sound89
    ⏣ • ${prefix}sound90
    ⏣ • ${prefix}sound91
    ⏣ • ${prefix}sound92
    ⏣ • ${prefix}sound93
    ⏣ • ${prefix}sound94
    ⏣ • ${prefix}sound95
    ⏣ • ${prefix}sound96
    ⏣ • ${prefix}sound97
    ⏣ • ${prefix}sound98
    ⏣ • ${prefix}sound99
    ⏣ • ${prefix}sound100
    ⏣ • ${prefix}sound101
    ⏣ • ${prefix}sound102
    ⏣ • ${prefix}sound103
    ⏣ • ${prefix}sound104
    ⏣ • ${prefix}sound105
    ⏣ • ${prefix}sound106
    ⏣ • ${prefix}sound107
    ⏣ • ${prefix}sound108
    ⏣ • ${prefix}sound109
    ⏣ • ${prefix}sound110
    ⏣ • ${prefix}sound111
    ⏣ • ${prefix}sound112
    ⏣ • ${prefix}sound113
    ⏣ • ${prefix}sound114
    ⏣ • ${prefix}sound115
    ⏣ • ${prefix}sound116
    ⏣ • ${prefix}sound117
    ⏣ • ${prefix}sound118
    ⏣ • ${prefix}sound119
    ⏣ • ${prefix}sound120
    ⏣ • ${prefix}sound121
    ⏣ • ${prefix}sound122
    ⏣ • ${prefix}sound123
    ⏣ • ${prefix}sound124
    ⏣ • ${prefix}sound125
    ⏣ • ${prefix}sound126
    ⏣ • ${prefix}sound127
    ⏣ • ${prefix}sound128
    ⏣ • ${prefix}sound129
    ⏣ • ${prefix}sound130
    ⏣ • ${prefix}sound131
    ⏣ • ${prefix}sound132
    ⏣ • ${prefix}sound133
    ⏣ • ${prefix}sound134
    ⏣ • ${prefix}sound135
    ⏣ • ${prefix}sound136
    ⏣ • ${prefix}sound137
    ⏣ • ${prefix}sound138
    ⏣ • ${prefix}sound139
    ⏣ • ${prefix}sound140
    ⏣ • ${prefix}sound141
    ⏣ • ${prefix}sound142
    ⏣ • ${prefix}sound143
    ⏣ • ${prefix}sound144
    ⏣ • ${prefix}sound145
    ⏣ • ${prefix}sound146
    ⏣ • ${prefix}sound147
    ⏣ • ${prefix}sound148
    ⏣ • ${prefix}sound149
    ⏣ • ${prefix}sound150
    ⏣ • ${prefix}sound151
    ⏣ • ${prefix}sound152
    ⏣ • ${prefix}sound153
    ⏣ • ${prefix}sound154
    ⏣ • ${prefix}sound155
    ⏣ • ${prefix}sound156
    ⏣ • ${prefix}sound157
    ⏣ • ${prefix}sound158
    ⏣ • ${prefix}sound159
    ⏣ • ${prefix}sound160
    ⏣ • ${prefix}sound161

`}

// MENU AUDIO
global.menuaudio = (prefix) => {
return `┈──────────────────────⏣
            *卂ㄩ刀丨ㄖ       爪乇几ㄩ*  
┈──────────────────────⏣
    ⏣ • ${prefix}addvn *audio*
    ⏣ • ${prefix}listvn *audio*
    ⏣ • ${prefix}delvn *audio*
    ⏣ • ${prefix}bass *reply audio*
    ⏣ • ${prefix}deep *reply audio*
    ⏣ • ${prefix}slow *reply audio*
    ⏣ • ${prefix}blown
    ⏣ • ${prefix}smooth
    ⏣ • ${prefix}earrape
    ⏣ • ${prefix}fast
    ⏣ • ${prefix}fat
    ⏣ • ${prefix}reverse
    ⏣ • ${prefix}nightcore
    ⏣ • ${prefix}robot
    ⏣ • ${prefix}squirrel

`
}

// MENU GAME
global.menugame = (prefix) => {
return `┈──────────────────────⏣
             *ム卂爪乇       爪乇几ㄩ*  
┈──────────────────────⏣
    ⏣ • ${prefix}werewolf
    ⏣ • ${prefix}suit *tag atau reply*
    ⏣ • ${prefix}tictactoe *tag atau reply*
    ⏣ • ${prefix}delttt
    ⏣ • ${prefix}petakbom
    ⏣ • ${prefix}delpetakbom
    ⏣ • ${prefix}tebakgambar
    ⏣ • ${prefix}tebakanime
    ⏣ • ${prefix}tebakkabupaten
    ⏣ • ${prefix}tebaklagu
    ⏣ • ${prefix}kuis
    ⏣ • ${prefix}tebakkalimat
    ⏣ • ${prefix}tebakkata
    ⏣ • ${prefix}tebaklirik
    ⏣ • ${prefix}tebakkimia
    ⏣ • ${prefix}tebakbendera
    ⏣ • ${prefix}susunkata
    ⏣ • ${prefix}asahotak
    ⏣ • ${prefix}siapakahaku
    ⏣ • ${prefix}caklontong
    ⏣ • ${prefix}math
    ⏣ • ${prefix}family100

`
}

// MENU SHOP
global.menushop = (prefix) => {
return `┈──────────────────────⏣
            *S H O P   S H O P*  
┈──────────────────────⏣
    ⏣ • ${prefix}saldo *lihat saldo anda*
    ⏣ • ${prefix}ceksaldo *tag/reply*
    ⏣ • ${prefix}transfer *reply + nominal*
    ⏣ • ${prefix}topup *nominal*
    ⏣ • ${prefix}cekmin *bukti prabayar*
    ⏣ • ${prefix}belipanel *lakukan pembelian*
    ⏣ • ${prefix}addusr *beli user panel anda*
    ⏣ • ${prefix}buyserver *beli server user*
    ⏣ • ${prefix}addusr *gratis buat user*
    ⏣ • ${prefix}addsrv *gunakan saldo*
    ⏣ • ${prefix}addusradmin *untuk creator*
    ⏣ • ${prefix}addsaldo *untuk creator*
    ⏣ • ${prefix}listpanel *lihat harga*
    ⏣ • ${prefix}listvps  *lihat harga*
    ⏣ • ${prefix}listusr *data user*
    ⏣ • ${prefix}listsrv *data server*
    ⏣ • ${prefix}startsrv *ID server*
    ⏣ • ${prefix}stopsrv *ID server*
    ⏣ • ${prefix}addlist *tambah list*
    ⏣ • ${prefix}dellist *hapus list*
    ⏣ • ${prefix}updatelist *edit list*
    ⏣ • ${prefix}list *tampilkan list*
    ⏣ • ${prefix}tambah
    ⏣ • ${prefix}kali
    ⏣ • ${prefix}kurang
    ⏣ • ${prefix}bagi

`
}

// MENU FUN ASK
global.menufun = (prefix) => {
return `┈──────────────────────⏣
            *千ㄩ几       爪乇几ㄩ*  
┈──────────────────────⏣
    ⏣ • ${prefix}createqr *text*
    ⏣ • ${prefix}detectqr *reply qr*
    ⏣ • ${prefix}apakah *text*
    ⏣ • ${prefix}bagaimanakah *text*
    ⏣ • ${prefix}kapankah *text*
    ⏣ • ${prefix}bisakah *text
    ⏣ • ${prefix}sangecek *tag*
    ⏣ • ${prefix}cantikcek *tag*
    ⏣ • ${prefix}gantengcek *tag*
    ⏣ • ${prefix}jomokcek *tag*
    ⏣ • ${prefix}wangy *tag*
    ⏣ • ${prefix}rate
    ⏣ • ${prefix}tolol
    ⏣ • ${prefix}goblog
    ⏣ • ${prefix}goblok
    ⏣ • ${prefix}idiot
    ⏣ • ${prefix}gay
    ⏣ • ${prefix}jomok
    ⏣ • ${prefix}bajingan
    ⏣ • ${prefix}munafik
    ⏣ • ${prefix}kontol
    ⏣ • ${prefix}yatim
    ⏣ • ${prefix}poke
    ⏣ • ${prefix}pembokep
    ⏣ • ${prefix}hitam
    ⏣ • ${prefix}jawa
    ⏣ • ${prefix}wibu
    ⏣ • ${prefix}stress
    ⏣ • ${prefix}miskin
    ⏣ • ${prefix}cantik
    ⏣ • ${prefix}manis
    ⏣ • ${prefix}babi
    ⏣ • ${prefix}ganteng
    ⏣ • ${prefix}cina
    ⏣ • ${prefix}atheis
    ⏣ • ${prefix}papua
    ⏣ • ${prefix}nigga
    ⏣ • ${prefix}pengentot
    ⏣ • ${prefix}seksi
    ⏣ • ${prefix}kawai
    ⏣ • ${prefix}tercindo
    ⏣ • ${prefix}fembokef
    ⏣ • ${prefix}pengocok
    ⏣ • ${prefix}cabul
    ⏣ • ${prefix}fuckboy
    ⏣ • ${prefix}playboy
    ⏣ • ${prefix}sange
    ⏣ • ${prefix}sangean
    ⏣ • ${prefix}hot

`
}
let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : kenaa
*✉️ Nama RL* : Rahman 
*♂️ Gender* : Laki - laki
*🕋 Agama* : Secret
*⏰ Tanggal lahir* : 01 May 2004
*🎨 Umur* : Secret
*🧮 Kelas* : Secret
*🧩 Hobby* : Ngedit, Mager, Ngewibu, Hiling, Riding
*💬 Sifat* : Ngaco. Rada sedeng
*🗺️ Tinggal* : Taman, SIDOARJO-JAWA TIMUR-INDONESIA
*❤️ Suka* : kamu :3
*💔 Benci* : semuanya (kalo betmut)

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : instagram.com/sadkenn_
*🇫  Facebook* : sadyopii
*🏮 Chanel Youtube* : -
*🐈 Github:* onlykenn

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler

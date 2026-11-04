const PESAN = [
  'Sayang, udah upload hari ini? Satu video aja dulu, nggak harus sempurna 🎥',
  'Video yang keupload selalu lebih berguna daripada video yang masih di draft 😆',
  'Reminder harian: FYP nggak bisa nemuin video yang belum kamu posting 😌',
  'Nggak usah nunggu mood. Rekam 15 detik dulu, sisanya nyusul 💪',
  'Satu video hari ini bisa jadi video yang rame minggu depan. Gas upload!',
  'Views lagi sepi itu wajar. Yang penting kamu tetap konsisten ✨',
  'Hari ini pilih satu produk, bikin satu video, selesai. Simpel kan? 🛍️',
  'Inget, akun yang berkembang itu akun yang terus posting. Semangat ya!',
  'Video pertama hari ini boleh jelek kok, yang penting ada 🤭',
  'Calon pembeli kamu lagi scroll TikTok sekarang. Temuin mereka yuk 🛒',
  'Kamu udah makin jago dibanding video pertamamu. Lanjutin ya 🔥',
  'Capek boleh, istirahat boleh. Tapi kalau masih sanggup, satu video lagi yuk ❤️',
  'Komisi nggak datang dari draft, Sayang. Upload dulu 😄',
  'Nggak perlu viral hari ini. Cukup lebih rajin dari kemarin 🌱',
  'Aku bangga kamu terus nyoba. Sekarang waktunya upload video hari ini ya 🥰',
]

const webhook = process.env.DISCORD_WEBHOOK
const userId = process.env.DISCORD_USER_ID

const hari = Math.floor(Date.now() / 86400000)
const pesan = PESAN[hari % PESAN.length]

const res = await fetch(webhook, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username: 'Bot Semangat',
    content: `<@${userId}> ${pesan}`,
    allowed_mentions: { users: [userId] },
  }),
})

if (!res.ok) {
  console.error('Gagal kirim:', res.status, await res.text())
  process.exit(1)
}

console.log('Reminder terkirim')
const ip = '91.126.21.170';
const token = '025b91477a1d06';
const url =`https://ipinfo.io/${ip}?token=${token}`

const res = await fetch(url)
const json = await res.json()
console.log(json);
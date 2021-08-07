const url = "https://api.coincap.io/v2/assets?limit=20";
const url_asset = "https://api.coincap.io/v2";


function getAssets() {
    return fetch(`${url}`)
        .then(res => res.json())
        .then(res => res.data);
}


function getAsset(coin) {
    return fetch(`${url_asset}/assets/${coin}`)
      .then(res => res.json())
      .then(res => res.data)
}
  
function getAssetHistory(coin) {
  const now = new Date()
  const end = now.getTime()
  now.setDate(now.getDate() - 1)
  const start = now.getTime()

  return fetch(
    `${url_asset}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then(res => res.json())
    .then(res => res.data)
}


function getMarkets(coin) {
  return fetch(`${url_asset}/assets/${coin}/markets?limit=10`)
    .then(res => res.json())
    .then(res => res.data)
}

function getExchange(id) {
  return fetch(`${url_asset}/exchanges/${id}`)
    .then(res => res.json())
    .then(res => res.data)
}

export default {
  getAssets,
  getAsset,
  getMarkets,
  getExchange,
  getAssetHistory
}


//   Esos tres puntitos se llaman el spread operator y convierten un array en una lista. ;D

//api.js co async y await

  //CoinDetail.vue
//  created() {
//     this.getCoin();
//   },

//   methods: {
//     async getCoin() {
//       const id = this.$route.params.id;
//       let [asset, history] = await Promise.all([
//         getAsset(id),
//         getAssetHistory(id),
//       ]);
//       this.asset = asset;
//       this.history = history;
//     },
//   },
// };

//api.js co async y await

// const url = "https://api.coincap.io/v2";

// const getAssets = async () => {
//   try {
//     const req = await fetch(`${url}/assets?limit=20`);
//     const res = await req.json();
//     return await res.data;
//   } catch (error) {
//     console.error(error);
//     throw new Error(error);
//   }
// };

// const getAsset = async (coin) => {
//   try {
//     const req = await fetch(`${url}/assets/${coin}`);
//     const res = await req.json();
//     return await res.data;
//   } catch (error) {
//     console.error(error);
//     throw new Error(error);
//   }
// };

// const getAssetHistory = async (coin) => {
//   try {
//     const now = new Date();
//     const end = now.getTime();
//     now.setDate(now.getDate() - 1);
//     const start = now.getTime();
//     const req = await fetch(
//       `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
//     );
//     const res = await req.json();
//     return await res.data;
    
//   } catch (error) {
//     console.log(error);
//     throw new Error(error);
//   }
// };

// export { getAssets, getAsset, getAssetHistory };
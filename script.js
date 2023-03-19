      // Récupération du prix actuel du Bitcoin
      fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD')
        .then(response => response.json())
        .then(data => {
          const btcPrice = data.USD;
          const btcPriceElement = document.getElementById('btc-price');
          btcPriceElement.textContent = `${btcPrice} USD`;

          // Récupération du prix moyen des 50 derniers jours du Bitcoin
		  fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=50")
  .then(response => response.json())
  .then(data => {
    // Extraire les prix des 50 derniers jours
    const prices = data.prices;

    // Calculer le prix moyen des 50 derniers jours
    const sum = prices.reduce((acc, cur) => acc + cur[1], 0);
    const avgPrice = sum / prices.length;

    // Afficher le prix moyen des 50 derniers jours dans le tableau
    const avgPriceElement = document.getElementById("btc-avg-price");
    avgPriceElement.innerHTML = `
      <tr>
        <td>${avgPrice.toFixed(2)} USD</td>
      </tr>
    `;
  })
  .catch(error => console.error(error));
        })
        .catch(error => console.error(error));
		fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=200")
  .then(response => response.json())
  .then(data => {
    // Extraire les prix des 200 derniers jours
    const prices = data.prices;

    // Calculer le prix moyen des 200 derniers jours
    const sum = prices.reduce((acc, cur) => acc + cur[1], 0);
    const avgPrice = sum / prices.length;

    // Afficher le prix moyen des 200 derniers jours dans le tableau
    const avgPriceElement = document.getElementById("btc-avg-price-200");
    avgPriceElement.innerHTML += `
      <tr>
        <td>${avgPrice.toFixed(2)} USD</td>
      </tr>
    `;
  })
  .catch(error => console.error(error));


  fetch("https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=max&interval=daily")
  .then(response => response.json())
  .then(data => {
    // Récupérer le prix actuel de l'Ether
    const ethCurrentPrice = data.prices[data.prices.length - 1][1];
    const ethCurrentPriceElement = document.getElementById("eth-price");
    ethCurrentPriceElement.innerHTML = ethCurrentPrice.toFixed(2) + " USD";

    // Récupérer le prix moyen des 50 derniers jours de l'Ether
    const ethAvgPrice50 = getAveragePrice(data.prices, 50);
    const ethAvgPrice50Element = document.getElementById("eth-avg-price-50");
    ethAvgPrice50Element.innerHTML = ethAvgPrice50.toFixed(2) + " USD";

    // Récupérer le prix moyen des 200 derniers jours de l'Ether
    const ethAvgPrice200 = getAveragePrice(data.prices, 200);
    const ethAvgPrice200Element = document.getElementById("eth-avg-price-200");
    ethAvgPrice200Element.innerHTML = ethAvgPrice200.toFixed(2) + " USD";
  })
  .catch(error => console.error(error));

// Fonction utilitaire pour calculer la moyenne des prix pour les X derniers jours
function getAveragePrice(prices, days) {
  const pricesArray = prices.slice(-days);
  const pricesSum = pricesArray.reduce((total, price) => total + price[1], 0);
  const pricesAvg = pricesSum / pricesArray.length;
  return pricesAvg;
}


fetch("https://api.coingecko.com/api/v3/coins/binancecoin/market_chart?vs_currency=USD&days=200")
  .then(response => response.json())
  .then(data => {
    const prices = data.prices;
    const currentPrice = prices[prices.length - 1][1];
    const prices50 = prices.slice(-50);
    const prices200 = prices.slice(-200);
    const avgPrice50 = prices50.reduce((acc, curr) => acc + curr[1], 0) / prices50.length;
    const avgPrice200 = prices200.reduce((acc, curr) => acc + curr[1], 0) / prices200.length;

    const bnbPriceElement = document.getElementById("bnb-price");
    const bnbAvgPrice50Element = document.getElementById("bnb-avg-price-50");
    const bnbAvgPrice200Element = document.getElementById("bnb-avg-price-200");

    bnbPriceElement.innerHTML = currentPrice.toFixed(2) + " USD";
    bnbAvgPrice50Element.innerHTML = avgPrice50.toFixed(2) + " USD";
    bnbAvgPrice200Element.innerHTML = avgPrice200.toFixed(2) + " USD";
  })
  .catch(error => console.error(error));

  fetch("https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=USD&days=200")
  .then(response => response.json())
  .then(data => {
    const prices = data.prices;
    const currentPrice = prices[prices.length - 1][1];
    const prices50 = prices.slice(-50);
    const prices200 = prices.slice(-200);
    const avgPrice50 = prices50.reduce((acc, curr) => acc + curr[1], 0) / prices50.length;
    const avgPrice200 = prices200.reduce((acc, curr) => acc + curr[1], 0) / prices200.length;

    const dogePriceElement = document.getElementById("doge-price");
    const dogeAvgPrice50Element = document.getElementById("doge-avg-price-50");
    const dogeAvgPrice200Element = document.getElementById("doge-avg-price-200");

    dogePriceElement.innerHTML = currentPrice.toFixed(2) + " USD";
    dogeAvgPrice50Element.innerHTML = avgPrice50.toFixed(2) + " USD";
    dogeAvgPrice200Element.innerHTML = avgPrice200.toFixed(2) + " USD";
  })
  .catch(error => console.error(error));

  fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=SPY&apikey=NICODULIUN1S9843`)
  .then(response => response.json())
  .then(data => {
    // Extraire les données de la réponse JSON
    const spPrice = parseFloat(data["Global Quote"]["05. price"]);

    // Afficher les données dans le tableau
    const spPriceElement = document.getElementById("sp-price");
    spPriceElement.innerHTML = `
      <tr>
        <td>${spPrice.toFixed(2)} USD</td>
      </tr>
    `;
  })
  .catch(error => console.error(error));

fetch(`https://www.alphavantage.co/query?function=SMA&symbol=SPY&interval=daily&time_period=50&series_type=close&apikey=NICODULIUN1S9843`)
  .then(response => response.json())
  .then(data => {
    // Extraire les données de la réponse JSON
    const avgPrice50 = parseFloat(data["Technical Analysis: SMA"][Object.keys(data["Technical Analysis: SMA"])[0]]["SMA"]);

    // Afficher les données dans le tableau
    const avgPrice50Element = document.getElementById("sp-avg-price-50");
    avgPrice50Element.innerHTML = `
      <tr>
        <td>${avgPrice50.toFixed(2)} USD</td>
      </tr>
    `;
  })
  .catch(error => console.error(error));

fetch(`https://www.alphavantage.co/query?function=SMA&symbol=SPY&interval=daily&time_period=200&series_type=close&apikey=NICODULIUN1S9843`)
  .then(response => response.json())
  .then(data => {
    // Extraire les données de la réponse JSON
    const avgPrice200 = parseFloat(data["Technical Analysis: SMA"][Object.keys(data["Technical Analysis: SMA"])[0]]["SMA"]);

    // Afficher les données dans le tableau
    const avgPrice200Element = document.getElementById("sp-avg-price-200");
    avgPrice200Element.innerHTML = `
      <tr>
        <td>${avgPrice200.toFixed(2)} USD</td>
      </tr>
    `;
  })
  .catch(error => console.error(error));

  const apiKey = "NICODULIUN1S9843";
  const nasdaqPriceElement = document.getElementById("nasdaq-price");
  const nasdaqAvgPrice50Element = document.getElementById("nasdaq-avg-price-50");
  const nasdaqAvgPrice200Element = document.getElementById("nasdaq-avg-price-200");
  
  // Fonction pour récupérer les données du NASDAQ depuis l'API Alpha Vantage
  async function getNasdaqData() {
    try {
      const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=^IXIC&apikey=${apiKey}`);
      const data = await response.json();
      const nasdaqPrice = parseFloat(data["Global Quote"]["05. price"]).toFixed(2);
      const nasdaqAvgPrice50Response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=^IXIC&interval=1day&time_period=50&apikey=${apiKey}`);
      const nasdaqAvgPrice50Data = await nasdaqAvgPrice50Response.json();
      const nasdaqAvgPrice50 = parseFloat(nasdaqAvgPrice50Data["Technical Analysis: SMA"]["2022-03-01"]["SMA"]).toFixed(2);
      const nasdaqAvgPrice200Response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=^IXIC&interval=1day&time_period=200&apikey=${apiKey}`);
      const nasdaqAvgPrice200Data = await nasdaqAvgPrice200Response.json();
      const nasdaqAvgPrice200 = parseFloat(nasdaqAvgPrice200Data["Technical Analysis: SMA"]["2022-03-01"]["SMA"]).toFixed(2);
  
      nasdaqPriceElement.innerHTML = nasdaqPrice;
      nasdaqAvgPrice50Element.innerHTML = nasdaqAvgPrice50;
      nasdaqAvgPrice200Element.innerHTML = nasdaqAvgPrice200;
    } catch (error) {
      console.log(error);
      nasdaqPriceElement.innerHTML = "N/A";
      nasdaqAvgPrice50Element.innerHTML = "N/A";
      nasdaqAvgPrice200Element.innerHTML = "N/A";
    }
  }
  
  getNasdaqData();
  
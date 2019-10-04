# Wine More Time

_This project was generated with [create-instantsearch-app](https://github.com/algolia/create-instantsearch-app) by [Algolia](https://algolia.com)._

## Get started

To run this project locally, install the dependencies and run the local server:

```sh
npm install
npm start
```

Open http://localhost:3000 to see your app.

## About Wine More Time

This is a showcase of the take home assignment given by Michael Sokol from Algolia. The chosen data is a collection of wine from the area of Bordeaux.
The goal was to build a basic search user interface as well as setting basic search relevance.

The client is a small shop located in Bordeaux, called Wine More Time. After discussing with the client, we agreed on improving his website transactions by allowing his users to easily search and find his best products as if he was advising them in person at his local shop.
The client average customers are around 30-45 years old. Most are from Bordeaux and are educated to oenology. They have a flexible budget, between 20-50$. Most of the time they ask for a domain and Wine More Time will recommands several castles.

To reflect his process online, I decided to put forward the search bar so that regular customers can directly type there desired bottle. I chose to prioritize search results qualitatively by 1) the domain, 2) the name and 3) the year. Results are unordered to give equal chance to any domain, any castles or any year (i.e., the best bottles are not necessarely the oldest or the most known castles). The customer can follow up and filter price by ascending value or descending value. Or enter his budget on the left panel.

The ranking is done by quality which is a quantitative value, to illustrate the client's best recommandations.

The online orders are usualy shipped in the region, around Bordeaux but some are shipped outside of France. To help new customers, the left panel offers different filters. First the color of the desired wine, then the price and then the domain. If the customer is more aware, he can continue and select a range of years and ratings.


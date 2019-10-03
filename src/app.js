/* global algoliasearch instantsearch */

const searchClient = algoliasearch(
  'QSK1BDZGGZ',
  '12ea9428535f8d68c5c1c46846d5873d'
);

const search = instantsearch({
  indexName: 'test_WINE',
  searchClient,
});

const DomainListWithPanel = instantsearch.widgets.panel({
  templates: {
    header: 'Domain',
  }
})(instantsearch.widgets.refinementList);

search.addWidget(
  DomainListWithPanel({
    container: '#domain-list',
    attribute: 'domain',
  })
);

const TypeListWithPanel = instantsearch.widgets.panel({
  templates: {
    header: 'Color',
  }
})(instantsearch.widgets.refinementList);

search.addWidget(
  TypeListWithPanel({
    // those options are provided to the RefinementList
    container: '#color-list',
    attribute: 'type',
    // ...
  })
);

const RatingListWithPanel = instantsearch.widgets.panel({
  templates: {
    header: 'Rating',
  }
})(instantsearch.widgets.ratingMenu);

search.addWidget(
  RatingListWithPanel({
    container: '#rating-menu',
    attribute: 'quality',
    templates: {
      header: 'Rating',
    },
  })
);

const priceInputWithPanel = instantsearch.widgets.panel({
  templates: {
    header: 'Price',
  }
})(instantsearch.widgets.rangeInput);

search.addWidget(
  priceInputWithPanel({
    container: '#price-range-input',
    attribute: 'price',
    pips: false,
  })
);

const yearSliderWithPanel = instantsearch.widgets.panel({
  templates: {
    header: 'Year',
  }
})(instantsearch.widgets.rangeSlider);

search.addWidget(
  yearSliderWithPanel({
    container: '#year-range-slider',
    attribute: 'year',
    pips: false,
  })
);

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: 'e.g., Saint Emilion',
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <article class="wine-card">
          <img src={{src}}/>
          <div class="wine-tag">
            <h1>{{ name }}</h1>
            <p class="wine-domain">{{ domain }}, {{ year }}</p>
          </div>
          <div class="wine-transaction">
            <span>{{ price }}</span>          
            <button class="add-cart-button ais-RangeInput-submit">
              <i class="fas fa-cart-plus"></i>
            </button>
          </div>
        </article>
      `,
      empty: `
        <div class="no-results">
          <h3>Sorry no results found for <q>{{ query }}</q></h3>
          <iframe src="https://giphy.com/embed/1BXa2alBjrCXC" width="280" height="280" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/1BXa2alBjrCXC"></a></p>
        </div>
      `,
    },
    transformItems(items) {
      return items.map(item => ({
        ...item,
        price: item.price + ' $',
        src: item.type === 'red' ? 'https://products1.imgix.drizly.com/ci-joel-gott-815-cabernet-sauvignon-3d84cf48edfd51d7.jpeg?auto=format%2Ccompress&dpr=2&fm=jpeg&h=240&q=20' : 'https://sites.create-cdn.net/siteimages/40/9/8/409824/14/2/3/14234722/1200x2000.jpg?1483209278',
      }));
    },
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
  })
);
search.addWidget(
  instantsearch.widgets.sortBy({
    container: '#sort-by',
    items: [
      { label: 'Filter price', value: 'test_WINE' },
      { label: 'Ascending', value: 'instant_search_price_asc' },
      { label: 'Descending', value: 'instant_search_price_desc' },
    ],
  })
);

search.start();

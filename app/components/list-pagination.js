import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "section",
  // current page
  page: 1,
  // Returns the list of items for the current page only
  paginatedItems: Ember.computed('items', 'page', function () {
    var i = (parseInt(this.get('page')) - 1) * parseInt(this.get('paginateBy'));
    var j = i + parseInt(this.get('paginateBy'));
    return this.get('items').slice(i, j);
  }),
  // To find number of pages
  numberOfPages: Ember.computed('page', function () {
    var n = this.get('items.length');
    var c = parseInt(this.get('paginateBy'));
    var r = Math.floor(n / c);
    if (n % c > 0) {
      r += 1;
    }
    return r;
  }),
  // To specify no of pages the data holds
  pageNumbers: Ember.computed('numberOfPages', function () {
    var n = Array(this.get('numberOfPages'));
    for (var i = 0; i < n.length; i++) {
      n[i] = i + 1;
    }
    return n;
  }),
  // Disable next button if it is a last page
  showNext: Ember.computed('page', function () {
    return (this.get('page') < this.get('numberOfPages'));
  }),
  // Disable previous button if it is a first page
  showPrevious: Ember.computed('page', function () {
    return (this.get('page') > 1);
  }),

  actions: {
    // Show the next page of items
    nextClicked() {
      if (this.get('page') + 1 <= this.get('numberOfPages')) {
        this.set('page', this.get('page') + 1);
      }
    },
    // Show the previous page of items
    previousClicked() {
      if (this.get('page') > 0) {
        this.set('page', this.get('page') - 1);
      }
    },
    // Go to the clicked page of items
    pageClicked(pageNumber) {
      this.set('page', pageNumber);
    }
  }
});

// search_results.js
window.onload = function() {
    var params = new URLSearchParams(window.location.search);
    var searchQuery = params.get('q');
    if (searchQuery) {
      var searchResultsDiv = document.getElementById('searchResults');
      searchResultsDiv.textContent = 'Search results for: ' + searchQuery;
      // You can further process the search query and display search results here
    }
  };
  
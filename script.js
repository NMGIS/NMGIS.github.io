// Wait for the document to load before running the script 
(function ($) {
  
  // We use some Javascript and the URL #fragment to hide/show different parts of the page
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Linking_to_an_element_on_the_same_page
  $(window).on('load hashchange', function(){
    
    // First hide all content regions, then show the content-region specified in the URL hash 
    // (or if no hash URL is found, default to first menu item)
    $('.content-region').hide();
    
    // Remove any active classes on the main-menu
    $('.main-menu a').removeClass('active');
    var region = location.hash.toString() || $('.main-menu a:first').attr('href');
    
    // Now show the region specified in the URL hash
    $(region).show();
    
    // Highlight the menu link associated with this region by adding the .active CSS class
    $('.main-menu a[href="'+ region +'"]').addClass('active'); 

    // Alternate method: Use AJAX to load the contents of an external file into a div based on URL fragment
    // This will extract the region name from URL hash, and then load [region].html into the main #content div
    // var region = location.hash.toString() || '#first';
    // $('#content').load(region.slice(1) + '.html')
    
  });
  
})(jQuery);

function createRadarChart(canvasId, ratings) {
  var ctx = document.getElementById(canvasId).getContext('2d');
  var myRadarChart = new Chart(ctx, {
      type: 'radar',
      data: {
          labels: ["Replayability", "Complexity", "Difficulty", "Parts Quantity & Portability", "Expansions", "Affordability", "Art Style & Theme"],
          datasets: [{
              label: 'rating',
              data: ratings, // Input ratings array
              borderColor: 'rgba(239,109,61, 0.8)',
              backgroundColor: 'rgba(239,109,61,0.2)',
          }]
      },
      options: {
          plugins: {
              legend: {
                  display: false,
              }
          },
          scales: {
            r: {
                angleLines: {
                    display: true,
                    color: 'white'
                },
                grid: {
                  color: 'white' // Change grid line color to white
              },
                suggestedMin: 0,
                suggestedMax: 5
            }
        },
      }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  populateDropdown();
});

function clearDropdown(dropdown) {
  // Remove all options except the first one
  while (dropdown.options.length > 1) {
      dropdown.remove(1);
  }
}

function populateDropdown() {
  var gameItems = Array.from(document.querySelectorAll('.board-game .game-item'));
  var dropdown = document.getElementById('gameDropdown');

  clearDropdown(dropdown); // Clear existing options

  // Sort games by score
  gameItems.sort(function(a, b) {
      var scoreA = parseFloat(a.querySelector('.game-score').textContent);
      var scoreB = parseFloat(b.querySelector('.game-score').textContent);
      return scoreB - scoreA;
  });

  // Populate dropdown
  gameItems.forEach(function(item, index) {
      var gameName = item.querySelector('.game-name').textContent.trim();
      var gameScore = item.querySelector('.game-score').textContent.trim();
      var optionText = `${gameName} - ${gameScore}`;
      var option = new Option(optionText, index); // using index as value
      dropdown.add(option);
  });

  // Add event listener for dropdown change
  dropdown.addEventListener('change', function() {
      var selectedGame = gameItems[this.value];
      if (selectedGame) {
          selectedGame.scrollIntoView({ behavior: 'smooth' });
      }
  });
}

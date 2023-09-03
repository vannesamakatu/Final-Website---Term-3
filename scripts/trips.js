//when document loads
$(document).ready(function(){

    console.log("hello");



// Trips------------------------------------------------
// hide all description text from the trips cards
$("#descriptionText").hide();

});

// when trip card is clicked
$(".card").click(function(){

//Toggle the price & description text 
$("#priceText").toggle();
$("#descriptionText").toggle();

// Resize the image to fit the additional content
$(".card-img-top").toggleClass("small")
});


// --------------------------------------------------------------------------------------------------------
// Trips Array//
// -------------------------------------------------------------------------------------------------------

const trips = [
    {
      name: "Venice",
      days: 5,
      price: 30000,
      discount: "VFive",
      description: "This trip is a 5 day long trip all the way to the beautiful city in Italy!",
      imageSrc: "assets/venice.jpg",
    },
    {
      name: "Phuket",
      days: 10,
      price: 60000,
      discount: "PTen",
      description: "This trip is a 10 day long trip all the way to the beautiful city in the Thailand!",
      imageSrc: "assets/huket.jpg",
    },
    {
      name: "Sydney",
      days: 15,
      price: 100000,
      discount: "SFifteen",
      description: "This trip is a 15 day long trip all the way to the beautiful city in Australia!",
      imageSrc: "assets/sydney.jpg",
    },

    {
        name: "Singapore",
        days: 5,
        price: 400000,
        discount: "SFive",
        description: "This trip is a 15 day long trip all the way to the beautiful city in Singapore!",
        imageSrc: "assets/singapore.jpg",
      },

      {
        name: "Jeju-Island",
        days: 10,
        price: 60000,
        discount: "JTen",
        description: "This trip is a 10 day long trip all the way to the beautiful city in the South Korea!",
        imageSrc: "assets/jeju island.jpg",
      },

      {
        name: "Cebu",
        days: 15,
        price: 100000,
        discount: "CFifteen",
        description: "This trip is a 15 day long trip all the way to the beautiful city in the Philippines!",
        imageSrc: "assets/cebu.jpg",
      },
   
  ];
  
    
    
    // ----------------------------------------------------------------------------------------------------
    // when sort or filter is clicked//
    // ----------------------------------------------------------------------------------------------------
    document.addEventListener('DOMContentLoaded', function () {
        const filterDays = document.getElementById('filterDays');
        const sortCriteria = document.getElementById('sortCriteria');
        const applyFilterSort = document.getElementById('applyFilterSort');
        const tripContainer = document.getElementById('tripContainer');
      
        // Function to filter and sort cards
        applyFilterSort.addEventListener('click', function () {
          const selectedDays = filterDays.value;
          const selectedSort = sortCriteria.value;
          const cards = Array.from(tripContainer.querySelectorAll('.card-sm'));
      
          // Filter cards by days
          cards.forEach(function (card) {
            const days = parseInt(card.querySelector('.card-text#daysText').textContent);
      
            if (selectedDays === 'all' || days === parseInt(selectedDays)) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          });
      
          // Sort cards based on the selected criteria
          cards.sort(function (a, b) {
            const aData = a.querySelector(`#${selectedSort}Text`).textContent;
            const bData = b.querySelector(`#${selectedSort}Text`).textContent;
      
            if (selectedSort === 'name') {
              return aData.localeCompare(bData);
            } else if (selectedSort === 'days' || selectedSort === 'price') {
              return parseInt(aData) - parseInt(bData);
            }
          });
      
          // Clear the container and append sorted cards
          tripContainer.innerHTML = '';
          cards.forEach(function (card) {
            tripContainer.appendChild(card);
          });
        });
      });
      
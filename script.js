document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('.nav-link');
  var accountToggle = document.querySelector('.account-toggle');
  var settingToggle = document.querySelector('.setting-toggle');
  var dropdown = document.querySelector('.dropdown');
  var dropdown1 = document.querySelector('.dropdown1');
  var adminTitle = document.querySelector('.title_admin');
  var dashboardLink = document.querySelector('.dashboard-link');
  var canteenLink = document.querySelector('.canteen-link');
  var teacherLink = document.querySelector('.teacher-link');

  var dashboardContent = document.querySelector('.dashboard-content');
  var canteenContent = document.querySelector('.canteen-content');
  var teacherContent = document.querySelector('.teacher-content');
  var contentSections = document.querySelectorAll('.content');

    function setVerticalLayout(content) {
       content.classList.add('slideIn');
        content.style.display = 'block';
        adminTitle.style.marginBottom = '10px';
    }
   

  // Show dashboard content by default
  setVerticalLayout(contentSections[0]);

  adminTitle.addEventListener('click', function() {
    // Hide all content sections
    contentSections.forEach(function(content) {
        hideContent(content);
    });
});

contentSections.forEach(function(content) {
  content.addEventListener('click', function() {
      // Hide all content sections
      contentSections.forEach(function(content) {
      });
      // Show the clicked content section
      setVerticalLayout(content);
  });
});

  function showDashboard() {
    
      dashboardContent.style.display = 'block';
      canteenContent.style.display = 'none';
      teacherContent.style.display = 'none';
      adminTitle.textContent = 'Administration';
  }

  function showCanteen() {
      dashboardContent.style.display = 'none';
      canteenContent.style.display = 'block';
      teacherContent.style.display = 'none';
      adminTitle.textContent = 'Canteen';
  }

  function showTeacher() {
      dashboardContent.style.display = 'none';
      canteenContent.style.display = 'none';
      teacherContent.style.display = 'block';
      adminTitle.textContent = 'Teacher';
  }

  // Show dashboard content by default
  showDashboard();
 
  dashboardLink.addEventListener('click', function(e) {
    e.preventDefault();
    showDashboard();
});

canteenLink.addEventListener('click', function(e) {
    e.preventDefault();
    showCanteen();
});

teacherLink.addEventListener('click', function(e) {
    e.preventDefault();
    showTeacher();
});
   
  accountToggle.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the default action of the link
      var arrowIcon = settingToggle.querySelector(".arrow");
    // Toggle the 'active' class on the dropdown to show/hide it
  
       arrowIcon.classList.toggle("down");
      // Toggle the 'active' class on the dropdown to show/hide it
      dropdown.classList.toggle('active');
  });
 settingToggle.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default action of the link
    var arrowIcon = settingToggle.querySelector(".arrow");
    // Toggle the 'active' class on the dropdown to show/hide it
  
    arrowIcon.classList.toggle("down");
    dropdown1.classList.toggle('active');
});
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // Remove active class from all nav links
            navLinks.forEach(function(navLink) {
                navLink.classList.remove('active');
            });

            // Add active class to the clicked nav link
            link.classList.add('active');
        });
    });
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line', // Use line chart type
      data: {
        labels: ['Data 1', 'Data 2', 'Data 3', 'Data 4'],
        datasets: [{
          label: 'Column 1',
          data: [12, 19, 3, 17],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          tension: 0.4 // Set tension for curved lines
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });


    var canteenData = [
      {
          name: "John Doe",
          email: "john@example.com",
          phoneNumber: "123-456-7890",
          location: "Building A",
          canteenName: "Canteen 1"
      },
      {
          name: "Jane Smith",
          email: "jane@example.com",
          phoneNumber: "987-654-3210",
          location: "Building B",
          canteenName: "Canteen 2"
      },
      // Add more entries as needed
  ];

  function populateCanteenTable() {
    var tableBody = document.querySelector("#canteenTable tbody");

    // Clear existing rows
    tableBody.innerHTML = '';

    // Loop through canteen data and create table rows
    canteenData.forEach(function(entry) {
        var row = document.createElement("tr");
        row.innerHTML = `
            <td>${entry.name}</td>
            <td>${entry.email}</td>
            <td>${entry.phoneNumber}</td>
            <td>${entry.location}</td>
            <td>${entry.canteenName}</td>
            <td>
                <button class='canteen-content button'>View</button>
                <button class='canteen-content delete'>Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Call the function to populate the table
populateCanteenTable();

var teacherData = [
  {
      name: "Alice Smith",
      email: "alice@example.com",
      department: "Mathematics",
      phoneNumber: "123-456-7890"
  },
  {
      name: "Bob Johnson",
      email: "bob@example.com",
      department: "Science",
      phoneNumber: "987-654-3210"
  },
  // Add more entries as needed
];

// Function to populate the table with teacher data
function populateTeacherTable() {
  var tableBody = document.querySelector("#teacherTable tbody");

  // Clear existing rows
  tableBody.innerHTML = '';

  // Loop through teacher data and create table rows
  teacherData.forEach(function(entry) {
      var row = document.createElement("tr");
      row.innerHTML = `
          <td>${entry.name}</td>
          <td>${entry.email}</td>
          <td>${entry.department}</td>
          <td>${entry.phoneNumber}</td>
          <td>
            <button class='canteen-content button'>View</button>
            <button class='canteen-content delete'>Delete</button>
          </td>
      `;
      tableBody.appendChild(row);
  });
}

// Call the function to populate the teacher table
populateTeacherTable();

var modal = document.getElementById("logoutModal");

// Get the link that opens the modal
var link = document.querySelector(".logout-link");

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// When the user clicks on the link, open the modal
link.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

  });



  
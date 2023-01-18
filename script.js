function createID() {
    // Get the values from the form fields
    var name = document.getElementById("name").value;
    var studentID = document.getElementById("student-id").value;
    var email = document.getElementById("email").value;
    var department = document.getElementById("department").value;
    var year = document.getElementById("year").value;
   
    
  
    // Create the student card HTML
    var studentCard = '<div class="card">';
    studentCard += '<h2>Your introduction</h2>';
    studentCard += '<p>Name: ' + name + '</p>';
    studentCard += '<p>Student ID: ' + studentID + '</p>';
    studentCard += '<p>Email: ' + email + '</p>';
    studentCard += '<p>Department: ' + department + '</p>';
    studentCard += '<p>Year: ' + year + '</p>';
    studentCard += '</div>';
  
    // Display the student card in the "student-card" div
    document.getElementById("studentCard").innerHTML = studentCard;
  }
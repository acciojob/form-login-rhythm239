function getFormvalue(event) {
  // Prevent the form from submitting the traditional way
  event.preventDefault();

  // Get the form element from the event object
  const form = event.target;

  // Retrieve the values of the first and last name fields
  const firstName = form.elements['fname'].value;
  const lastName = form.elements['lname'].value;

  // Display the first and last name using alert
  alert(`First name: ${firstName}\nLast name: ${lastName}`);
}

// Attach the getFormvalue function to the form's submit event
document.getElementById('form1').addEventListener('submit', getFormvalue);


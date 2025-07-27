function showCustomAlert(message) {
  const alertBox = document.getElementById('custom-alert');
  const alertMessage = document.getElementById('alert-message');
  
  alertMessage.textContent = message;
  alertBox.classList.remove('alert-hidden');
  alertBox.classList.add('alert-visible');
}

function closeAlert() {
  const alertBox = document.getElementById('custom-alert');
  alertBox.classList.remove('alert-visible');
  alertBox.classList.add('alert-hidden');
}




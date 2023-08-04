const inputElement = document.getElementById('phone-number');
const requiredElement = document.querySelector('.star-phone');

inputElement.addEventListener('input', function() {
  if (inputElement.value !== '') {
    requiredElement.style.display = 'none';
  } else {
    requiredElement.style.display = 'block';
  }
});

const mailElement = document.getElementById('user-email');
const starElement = document.querySelector('.star-mail');

mailElement.addEventListener('input', function() {
  if (mailElement.value !== '') {
    starElement.style.display = 'none';
  } else {
    starElement.style.display = 'block';
  }
});

const messageElement = document.getElementById('message');
const messageStarElement = document.querySelector('.star-message');

messageElement.addEventListener('input', function() {
  if (messageElement.value !== '') {
    messageStarElement.style.display = 'none';
  } else {
    messageStarElement.style.display = 'block';
  }
});
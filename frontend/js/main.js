const form = document.getElementById('portfolioContactForm');
const responseStatus = document.getElementById('formResponse');
const statusElement = document.getElementById('api-status');
const responseElement = document.getElementById('api-response');

const apiBase = 'https://crexjulie-portifolio.onrender.com';
const apiStatusEndpoint = `${apiBase}/api/status`;
const apiContactEndpoint = `${apiBase}/api/contact`;

if (form && responseStatus) {
  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    responseStatus.style.color = varColor('--accent');
    responseStatus.innerText = 'Sending message...';

  try {
    const response = await fetch(apiContactEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });
    const data = await response.json();

    if (response.ok) {
      responseStatus.style.color = '#9dffdf';
      responseStatus.innerText = data.message;
      form.reset();
    } else {
      responseStatus.style.color = '#ff7b7b';
      responseStatus.innerText = data.message || 'Could not send message. Please try again.';
    }
  } catch (error) {
    responseStatus.style.color = '#ff7b7b';
    responseStatus.innerText = 'Could not send message. Please try again later.';
    console.error('Contact submit error:', error);
  }
  });
}

async function updateApiStatus() {
  try {
    const response = await fetch(apiStatusEndpoint);
    const data = await response.json();
    statusElement.innerText = data.status || 'Online';
    responseElement.innerText = data.timestamp ? new Date(data.timestamp).toLocaleString() : 'Ready';
  } catch (error) {
    statusElement.innerText = 'Offline';
    responseElement.innerText = 'Unable to reach API.';
    console.error('Status check error:', error);
  }
}

function varColor(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function setYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

setYear();
updateApiStatus();

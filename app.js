// AUTO REDIRECT LANDING → LOGIN
window.onload = function () {
  setTimeout(() => {
    goTo('login');
  }, 2000);
};

// SCREEN SWITCH
function goTo(id) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

// LOGIN VALIDATION
function submitLogin() {
  const name = document.getElementById('name').value;
  const mobile = document.getElementById('mobile').value;
  const terms = document.getElementById('terms').checked;

  if (!name || !mobile) {
    alert("Please fill all fields");
    return;
  }

  if (!terms) {
    alert("Please accept Terms & Conditions");
    return;
  }

  goTo('scan');
}

// SCAN FLOW
function startScan() {
  goTo('verify');

  setTimeout(() => {
    goTo('success');
  }, 2000);
}
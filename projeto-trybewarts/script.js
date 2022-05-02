const alerta = document.getElementById('alert');
const email = document.getElementById('email');
const senha = document.getElementById('password');

function showAlert() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

alerta.addEventListener('click', showAlert);

// https://stackoverflow.com/questions/5651933/what-is-the-opposite-of-evt-preventdefault

const agreement = document.getElementById('agreement');
const button = document.getElementById('submit-btn');
button.disabled = true;

function enable() {
  button.disabled = false;
}
agreement.addEventListener('click', enable);

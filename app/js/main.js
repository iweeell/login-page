const btnCreate = document.querySelector('#create');
const btnLogin = document.querySelector('#login');
const loginPage = document.querySelector('.login');
const createPage = document.querySelector('.register');
const formCreate = document.querySelector('.form-create');
const wrapper = document.querySelector('.wrapper');

formCreate.addEventListener('submit', checkForm);

function checkForm(e) {
  e.preventDefault();

  let form = document.querySelector('.form-create');

  let name = form.name.value;
  let pass = form.pass.value;
  let repass = form.repass.value;
  let email = form.email.value;

  let fail = '';

  if (name == '' || pass == '' || email == '')
    fail = 'error create';
    else if (name.lenght <= 1 || name.length > 16)
    fail = 'name error';
    else if (pass !== repass)
    fail = "error password";
    else if (email.includes('@') !== true)
    fail = "error email";


  if (fail != '') {
    document.querySelector('.error').innerHTML = `*${fail}`;
  } else {
    setTimeout(() => {
      location.reload();
    }, 2000);
  }

  return false;
};

btnCreate.addEventListener('click', () => {
  loginPage.classList.add('login-hidden');
  createPage.classList.remove('create-hidden');
  wrapper.classList.add('create-active');
});

btnLogin.addEventListener('click', () => {
  loginPage.classList.remove('login-hidden');
  createPage.classList.add('create-hidden');
  wrapper.classList.remove('create-active');
});



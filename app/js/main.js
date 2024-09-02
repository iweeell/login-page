const btnLogin = document.querySelectorAll('.link');
const loginPage = document.querySelector('.login');
const createPage = document.querySelector('.register');
const formCreate = document.querySelector('.form-create');
const wrapper = document.querySelector('.wrapper');
const formBtn = document.querySelectorAll('.btn');
const form = document.querySelectorAll('.form');

formBtn.forEach(el => {
  el.addEventListener('click', () => {
    formCreate.addEventListener('submit', checkForm);

  });
});


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
    setTimeout(() => {
      document.querySelector('.error').innerHTML = '';
    }, 5000);
  } else {
    setTimeout(() => {
      location.reload();
    }, 2000);
  }

  return false;
};


btnLogin.forEach(el => {
  el.addEventListener('click', () => {
    loginPage.classList.toggle('login-hidden');
    createPage.classList.toggle('create-hidden');
    wrapper.classList.toggle('create-active');
    form.forEach(el => {
      el.reset();
    });
  });
});


// btnCreate.addEventListener('click', () => {
//   loginPage.classList.toggle('login-hidden');
//   createPage.classList.toggle('create-hidden');
//   wrapper.classList.toggle('create-active');
//   formCreate.reset();
// });

// btnLogin.addEventListener('click', () => {
//   loginPage.classList.remove('login-hidden');
//   createPage.classList.add('create-hidden');
//   wrapper.classList.remove('create-active');
//   formCreate.reset();
// });

let input_toggle = document.querySelectorAll('.toggle_button')
let password_input = document.querySelectorAll('.input__password')


input_toggle.forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    toggle();
  })
});

function toggle() {

  for (let i = 0; i < password_input.length; i++) {

    if (password_input[i].type === 'password') {
      password_input[i].type = 'text'
      input_toggle.forEach(el => {
        el.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="15" height="15">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
            </svg>`
      });
    } else {
      password_input[i].type = 'password'
      input_toggle.forEach(el => {
        el.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="15" height="15">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>`
      });
    }
    
  }

}


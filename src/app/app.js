

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    document.getElementById("userEmail").innerText = user.email;
      
  } else {
      window.location.href = "index.html";
  }
})

function logout() {
  firebase.auth().signOut().then(() => {
     document.getElementById("btnSair").window.location.href = "index.html";
  }).catch(() => {
      alert('Erro ao fazer logout');
  })
}

function onChangeEmail() {
  toggleButtonsDisable();
  toggleEmailErrors();
}

function onChangePassword() {
  toggleButtonsDisable();
  togglePasswordErrors();
} 

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function toggleEmailErrors() {
  const email = form.email().value;
  form.emailRequiredError().style.display = email ? "none" : "block";
  
  form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

function togglePasswordErrors() {
  const password = form.password().value;
  form.passwordRequiredError().style.display = password ? "none" : "block";
}

function toggleButtonsDisable() {
  const emailValid = isEmailValid();
  form.recoverPasswordButton().disabled= !emailValid;

  const passwordValid = isPasswordValid();
  form.loginButton().disabled = !emailValid || !passwordValid;
}

function isEmailValid() {
  const email = form.email().value;
  if (!email) {
      return false;
  }
  return validateEmail(email);
}

function isPasswordValid() {
  return form.password().value ? true : false;
}



const form = {
 // confirmPassword: () => document.getElementById('confirmPassword'),
 // confirmPasswordDoesntMatchError: () => document.getElementById('password-doesnt-match-error'),
  email: () => document.getElementById("email"),
  emailInvalidError: () => document.getElementById("email-invalid-error"),
  emailRequiredError: () => document.getElementById("email-required-error"),
  loginButton: () => document.getElementById("login-button"),
  password: () => document.getElementById("password"),
  passwordRequiredError: () => document.getElementById("password-required-error"),
  recoverPasswordButton: () => document.getElementById("recover-password-button"),
 // passwordMinLengthError: () => document.getElementById('password-min-length-error'),
  //passwordRequiredError: () => document.getElementById('password-required-error'),
  //registerButton: () => document.getElementById('register-button')


}; 




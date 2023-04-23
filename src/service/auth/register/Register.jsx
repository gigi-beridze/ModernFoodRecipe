import Background from "../../images/background.png"
import "./register.css"

const Register = () => {



// const checkEmail = () => {
//   const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//   if (!emailInput.value.match(emaiPattern)) {
//     return emailField.classList.add("invalid");
//   }
//   emailField.classList.remove("invalid");
// }

// // Hide and show password
// const eyeIcons = document.querySelectorAll(".show-hide");

// eyeIcons.forEach((eyeIcon) => {
//   eyeIcon.addEventListener("click", () => {
//     const pInput = eyeIcon.parentElement.querySelector("input"); //getting parent element of eye icon and selecting the password input
//     if (pInput.type === "password") {
//       eyeIcon.classList.replace("bx-hide", "bx-show");
//       return (pInput.type = "text");
//     }
//     eyeIcon.classList.replace("bx-show", "bx-hide");
//     pInput.type = "password";
//   });
// });

// // Password Validation
// function createPass() {
//   const passPattern =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//   if (!passInput.value.match(passPattern)) {
//     return passField.classList.add("invalid"); //adding invalid class if password input value do not match with passPattern
//   }
//   passField.classList.remove("invalid"); //removing invalid class if password input value matched with passPattern
// }

// // Confirm Password Validtion
// function confirmPass() {
//   if (passInput.value !== cPassInput.value || cPassInput.value === "") {
//     return cPassField.classList.add("invalid");
//   }
//   cPassField.classList.remove("invalid");
// }

// // Calling Funtion on Form Sumbit
// form.addEventListener("submit", (e) => {
//   e.preventDefault(); //preventing form submitting
//   checkEmail();
//   createPass();
//   confirmPass();

//   //calling function on key up
//   emailInput.addEventListener("keyup", checkEmail);
//   passInput.addEventListener("keyup", createPass);
//   cPassInput.addEventListener("keyup", confirmPass);

//   if (
//     !emailField.classList.contains("invalid") &&
//     !passField.classList.contains("invalid") &&
//     !cPassField.classList.contains("invalid")
//   ) {
//     location.href = form.getAttribute("action");
//   }
// });



    return (
      <div className="login-auth">
        <div className="wrapper">
          <div class="left">
            <header>Register</header>
              <form action="https://www.codinglabweb.com/">
                <div class="field email-field">
                  <div class="input-field">
                    <input type="email" placeholder="Enter your email" class="email" />
                  </div>
                  <span class="error email-error">
                    <i class="bx bx-error-circle error-icon"></i>
                    <p class="error-text">Please enter a valid email</p>
                  </span>
                </div>
                <div class="field create-password">
                  <div class="input-field">
                    <input
                      type="password"
                      placeholder="Create password"
                      class="password"
                    />
                    <i class="bx bx-hide show-hide"></i>
                  </div>
                  <span class="error password-error">
                    <i class="bx bx-error-circle error-icon"></i>
                    <p class="error-text">
                      Please enter atleast 8 charatcer with number, symbol, small and
                      capital letter.
                    </p>
                  </span>
                </div>
                <div class="field confirm-password">
                  <div class="input-field">
                    <input
                      type="password"
                      placeholder="Confirm password"
                      class="cPassword"
                    />
                    <i class="bx bx-hide show-hide"></i>
                  </div>
                  <span class="error cPassword-error">
                    <i class="bx bx-error-circle error-icon"></i>
                    <p class="error-text">Password don't match</p>
                  </span>
                </div>
                <div class="input-field button">
                  <input type="submit" value="Submit Now" />
                </div>
              </form>
            </div>
            <div className="right">
              <h3 className="auth-right-text">გახადე ცხოვრება უფრო გემრიელი</h3>
              <img src={Background} className="auth-bg" alt="background-image" />
            </div>
        </div>
      </div>
    )
}

export default Register
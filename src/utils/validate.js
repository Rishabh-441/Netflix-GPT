export const validateData = (email, password) => {
    if (email.length === 0 || password.length  === 0) return "Fill the mandatory fields";
    const isValidEmail = /^[a-z0-9]+([._-]?[a-z0-9]+)*@[a-z0-9-]+(\.[a-z]{2,})+$/.test(email);
    const isValidPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.?/~_+\-=|\\]).{8,32}$/.test(password);

    if (!isValidEmail) return "Email ID is invalid";
    if (!isValidPassword) return "Password is invalid";
    return null;
};
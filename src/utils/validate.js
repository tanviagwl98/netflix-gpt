export const validateEmailAndPassword = (email, password) => {
    const emailRe =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const passwordRe = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!emailRe) return "Email is invalid";
    if(!passwordRe) return "Password is invalid";

    return null;
}
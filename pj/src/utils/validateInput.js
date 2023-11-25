export const validateUserName = (userName) => {
  const regex = /^[a-zA-Z0-9]+$/;
  return regex.test(userName);
};

export const validatePassword = (password) => {
  const regex =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
  return password.length > 0 && regex.test(password);
};

export const validateEmail = (email) => {
  const regex =
    /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  return email.length > 0 && regex.test(email);
};

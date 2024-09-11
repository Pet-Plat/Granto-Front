import './Registration.css';
import React, { useState } from 'react';

function Registration() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateLettersOnly = (value) => {
    const lettersOnlyRegex = /^[A-Za-zА-Яа-яЁё]+$/;
    return lettersOnlyRegex.test(value);
  };

  const validateBirthDate = (date) => {
    const today = new Date();
    const inputDate = new Date(date);
    const age = today.getFullYear() - inputDate.getFullYear();
    const monthDifference = today.getMonth() - inputDate.getMonth();
    const dayDifference = today.getDate() - inputDate.getDate();

    if (age > 12 || (age === 12 && (monthDifference > 0 || (monthDifference === 0 && dayDifference >= 0)))) {
      return true;
    }
    return false;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    let validationErrors = {};

    // Валидация имени пользователя
    if (!username) {
      validationErrors.username = "Имя пользователя обязательно";
    } else if (username.length < 3) {
      validationErrors.username = "Имя пользователя должно быть не короче 3 символов";
    }

    // Валидация email
    if (!email) {
      validationErrors.email = "Email обязателен";
    } else if (!validateEmail(email)) {
      validationErrors.email = "Неверный формат email";
    }

    // Валидация пароля
    if (!password) {
      validationErrors.password = "Пароль обязателен";
    } else if (password.length < 6) {
      validationErrors.password = "Пароль должен содержать не менее 6 символов";
    }

    // Валидация подтверждения пароля
    if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Пароли не совпадают";
    }

    // Валидация имени и фамилии (только буквы)
    if (!firstName) {
      validationErrors.firstName = "Имя обязательно";
    } else if (!validateLettersOnly(firstName)) {
      validationErrors.firstName = "Имя должно содержать только буквы";
    }

    if (!lastName) {
      validationErrors.lastName = "Фамилия обязательна";
    } else if (!validateLettersOnly(lastName)) {
      validationErrors.lastName = "Фамилия должна содержать только буквы";
    }

    if (middleName && !validateLettersOnly(middleName)) {
      validationErrors.middleName = "Отчество должно содержать только буквы";
    }

    // Валидация даты рождения (больше 12 лет)
    if (!birthDate) {
      validationErrors.birthDate = "Дата рождения обязательна";
    } else if (!validateBirthDate(birthDate)) {
      validationErrors.birthDate = "Вам должно быть не менее 12 лет";
    }

    // Если нет ошибок, регистрация продолжается
    if (Object.keys(validationErrors).length === 0) {
      console.log({
        username,
        email,
        password,
        firstName,
        lastName,
        middleName,
        birthDate,
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div id="wrapper">
      <div className="registration-wrapper">
        <div className="registration-box">
          <h2>Регистрация</h2>
          <form onSubmit={handleRegister}>
            <label htmlFor="username">Имя пользователя:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            {errors.username && <p className="error">{errors.username}</p>}

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <label htmlFor="password">Пароль:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <p className="error">{errors.password}</p>}

            <label htmlFor="confirmPassword">Повторите пароль:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

            <label htmlFor="firstName">Имя:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}

            <label htmlFor="lastName">Фамилия:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}

            <label htmlFor="middleName">Отчество:</label>
            <input
              type="text"
              id="middleName"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            />
            {errors.middleName && <p className="error">{errors.middleName}</p>}

            <label htmlFor="birthDate">Дата рождения:</label>
            <input
              type="date"
              id="birthDate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              required
            />
            {errors.birthDate && <p className="error">{errors.birthDate}</p>}

            <button type="submit">Зарегистрироваться</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;

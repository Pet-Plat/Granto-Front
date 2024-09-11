import './Profile.css';
import React, { useState } from 'react';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    username: 'user123',
    email: 'user@example.com',
    firstName: 'Иван',
    lastName: 'Иванов',
    middleName: 'Иванович',
    birthDate: '1990-01-01',
    password: '' 
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div id="profile-wrapper">
      <h1>Профиль</h1>
      {isEditing ? (
        <form onSubmit={handleSave}>
          <div className="profile-section">
            <label htmlFor="username">Имя пользователя:</label>
            <input
              type="text"
              id="username"
              value={userData.username}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={userData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="firstName">Имя:</label>
            <input
              type="text"
              id="firstName"
              value={userData.firstName}
              onChange={handleChange}
              required
            />

            <label htmlFor="lastName">Фамилия:</label>
            <input
              type="text"
              id="lastName"
              value={userData.lastName}
              onChange={handleChange}
              required
            />

            <label htmlFor="middleName">Отчество:</label>
            <input
              type="text"
              id="middleName"
              value={userData.middleName}
              onChange={handleChange}
            />

            <label htmlFor="birthDate">Дата рождения:</label>
            <input
              type="date"
              id="birthDate"
              value={userData.birthDate}
              onChange={handleChange}
              required
            />

            <label htmlFor="password">Новый пароль:</label>
            <input
              type="password"
              id="password"
              value={userData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Сохранить изменения</button>
          <button type="button" onClick={() => setIsEditing(false)}>Отмена</button>
        </form>
      ) : (
        <div className="profile-section">
          <p><strong>Имя пользователя:</strong> {userData.username}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Имя:</strong> {userData.firstName}</p>
          <p><strong>Фамилия:</strong> {userData.lastName}</p>
          <p><strong>Отчество:</strong> {userData.middleName}</p>
          <p><strong>Дата рождения:</strong> {userData.birthDate}</p>
          <button className="edit-button" onClick={() => setIsEditing(true)}>Редактировать профиль</button>
        </div>
      )}
    </div>
  );
}

export default Profile;

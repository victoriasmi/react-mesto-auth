class Auth {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  register(email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
      .then((response) => {
        return response.json();
      })
  }

  authorize(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
      .then((response) => {
        return response.json();
      })
  }

  getInfo(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      // body: JSON.stringify({ token:token })
    })
      .then((response) => {
        return response.json();
      })
  }
}

export const auth = new Auth({
  baseUrl: 'https://auth.nomoreparties.co',
});


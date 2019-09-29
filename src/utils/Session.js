const LOGIN_COOKIE_NAME = 'sessionId'

function getCookie(name) {
  let start; let
    end
  if (document.cookie.length > 0) {
    start = document.cookie.indexOf(`${name}=`)
    if (start !== -1) {
      start = start + name.length + 1
      end = document.cookie.indexOf(';', start)
      if (end === -1) {
        end = document.cookie.length
      }
      return unescape(document.cookie.substring(start, end))
    }
  }
  return ''
}

function setCookie(name, value, expire) {
  const date = new Date()
  date.setDate(date.getDate() + expire)
  document.cookie = `${name}=${escape(value)}; path=/${
    expire ? `;expires=${date.toGMTString()}` : ''}`
}


export function isAuthenticated() {
  return getCookie(LOGIN_COOKIE_NAME)
}

export function authenticateSuccess(token) {
  setCookie(LOGIN_COOKIE_NAME, token)
}

export function logout() {
  setCookie(LOGIN_COOKIE_NAME, '', 0)
}

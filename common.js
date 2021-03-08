function checkAuth() {
	const userName = localStorage.user
	if (userName !== undefined) return userName
	return false
}

const openPages = ['/index.html', '/auth.html']
const user = checkAuth()
const restricted = !openPages.includes(location.pathname)

if (restricted && !user) location.href = "/index.html"
if (!restricted && user) location.href = "/notes.html"

function logOut() {
	delete localStorage.user
	location.href = "/index.html"
}



async function fetchProfileData () {
  const url = 'https://github.com/thiagofeldner/Portfolio/blob/master/Data/profile.json';
  const response = await fetch(url)
  const profileData = await response.json()
  return profileData
}
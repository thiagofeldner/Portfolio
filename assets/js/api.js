
async function fetchProfileData () {
  const url = 'https://raw.githubusercontent.com/thiagofeldner/Portfolio/master/profile.json';
  const fetching = await fetch(url)
  return await fetching.json()
}
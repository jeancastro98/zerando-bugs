function togglemode() {
  const toggClass = "ligth"
  const anchorInstagram = document.querySelector("#anchor-instagram")
  const anchorYoutube = document.querySelector("#anchor-youtube")
  
  const instagramURL = "https://instagram.com/maykibrito"
  const youtubeURL = "https://youtube.com/maykibrito"
  const html = document.documentElement
  html.classList.toggle(toggClass)
  // pegar a tag  img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  const iconYoutube = `<ion-icon name="logo-youtube"><ion-icon>`
  const iconInstagram = `<ion-icon name="logo-instagram"></ion-icon>`

  if (html.classList.contains(toggClass)) {
    img.setAttribute("src", "./assets/avatar-light.png")
    anchorInstagram.setAttribute("href", youtubeURL)
    anchorInstagram.innerHTML = iconYoutube

    anchorYoutube.setAttribute("href", instagramURL)
    anchorYoutube.innerHTML = iconInstagram
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    anchorInstagram.setAttribute("href", instagramURL)
    anchorInstagram.innerHTML = iconInstagram

    anchorYoutube.setAttribute("href", youtubeURL)
    anchorYoutube.innerHTML = iconYoutube
  }
}

async function FetchPlayerInfo(name){
    let player = encodeURI(name)
    fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${player}`)
    .then(response => response.json())
    .then(data => renderPlayerInfo(data.player[0]))
    .catch(err => {
        console.log(err)
        document.querySelector('#spinner').style.display = 'none';
        document.querySelector('.dialog').style.display = 'block';
    })
}
function renderPlayerInfo(player){
    let html = `<img width="100%" src=${player.strBanner}><a href="/search.html"> Go Back to Search </a><h2> Results for: <span> ${player.strPlayer} </span></h2><div class="info"><h4> Player </h4><p> ${player.strPlayer} </p></div><div class="info"><h4> Nationality </h4><p> ${player.strNationality} </p></div><div class='info'><h4> Team </h4><p>${player.strTeam}</p></div><div class="info"><h4> Sport </h4><p> ${player.strSport} </p></div><div class="info"><h4> Date of Birth </h4><p> ${player.dateBorn} </p></div><div class="info"><h4> Wage </h4><p> ${player.strWage} </p></div><div class="info"><h4> Location of Birth </h4><p> ${player.strBirthLocation} </p></div><div class="info"><h4> Description </h4><p> ${player.strDescriptionEN}</p></div><div class="info"><h4> Gender </h4><p> ${player.strGender} </p></div><div class="info"><h4> ${player.strSide} </h4><p> Rodrick </p></div><div class="info"><h4> Position </h4><p> ${player.strPosition} </p></div><div class="social"><a href="https://${player.strWebsite}"><ion-icon name="globe"></ion-icon></a><a href="https://${player.strFacebook}"><ion-icon name="logo-facebook"></ion-icon></a><a href="https://${player.strInstagram}"><ion-icon name="logo-instagram"></ion-icon></a><a href="https://${player.strTwitter}"><ion-icon name="logo-twitter"></ion-icon></a><a href="https://${player.strYoutube}"><ion-icon name="logo-youtube"></ion-icon></a>
    </div>`
    document.getElementById('details').innerHTML = html
    document.querySelector('.player_img').style.background = `url(${player.strRender})`
    document.querySelector('.player_img').style.backgroundSize = "cover";
    document.querySelector('.player_img').style.backgroundPosition = "center";
    document.querySelector('#spinner').style.display = 'none'
}


function startSearch(){
    let val = document.getElementById('search').value
    if(val){
        document.querySelector('#spinner').style.display = 'block'
        FetchPlayerInfo(val)
        document.getElementById('infopage').style.display = 'grid'
    }
    return false
}
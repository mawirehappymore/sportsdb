async function FetchEvents(){
    document.querySelector('#spinner').style.display = 'block'
    fetch('https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=133602')
    .then(response => response.json())
    .then(data => renderEvents(data.results))
    .catch(err => {
        document.querySelector('.dialog').style.display = 'block'
        document.querySelector('#spinner').style.display = 'none'
    })
}
FetchEvents()
function renderEvents(events){
    document.querySelector('#spinner').style.display = 'none'
    let html = ""
    events.forEach(event => {
        let htm = `<tr>
        <td> ${event.strEvent} </td>
        <td> ${event.dateEvent} </td>
        <td> ${event.strLeague} </td>
        <td> ${event.strHomeTeam} <br><b> ${event.intHomeScore} </b></td>
        <td> ${event.strAwayTeam}<br><b> ${event.intAwayScore}</b></td>
        <td> ${event.strVenue} </td>
        </tr>`
        html+=htm
    })
    document.getElementById('eventsTableBody').innerHTML = html
}
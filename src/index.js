function updateTime() {
  let harareDateElement = document.querySelector("#harare .date");
  if (harareDateElement) {
    harareDateElement.innerHTML = moment()
      .tz("Africa/Harare")
      .format("dddd, DD MMMM, YYYY");
    let harareTimeElement = document.querySelector("#harare .time");
    harareTimeElement.innerHTML = moment()
      .tz("Africa/Harare")
      .format("HH:mm:ss [<small>]A[</small>]");
  }

  let fijiDateElement = document.querySelector("#fiji .date");
  if (fijiDateElement) {
    fijiDateElement.innerHTML = moment()
      .tz("Pacific/Fiji")
      .format("dddd, DD MMMM, YYYY");
    let fijiTimeElement = document.querySelector("#fiji .time");
    fijiTimeElement.innerHTML = moment()
      .tz("Pacific/Fiji")
      .format("HH:mm:ss [<small>]A[</small>]");
  }

  let newyorkDateElement = document.querySelector("#new-york .date");
  if (newyorkDateElement) {
    newyorkDateElement.innerHTML = moment()
      .tz("America/New_York")
      .format("dddd, DD MMMM, YYYY");
    let newyorkTimeElement = document.querySelector("#new-york .time");
    newyorkTimeElement.innerHTML = moment()
      .tz("America/New_York")
      .format("HH:mm:ss [<small>]A[</small>]");
  }
}
updateTime();
setInterval(updateTime, 1000);

function showCityInfo(event) {
  let citySelectorValue = cityselector.value;
  if (citySelectorValue) {
    if (citySelectorValue === "current") {
      citySelectorValue = moment.tz.guess();
    }
    let citySelectorValueDate = moment()
      .tz(citySelectorValue)
      .format("dddd, DD MMMM, YYYY");
    let citySelectorValueTime = moment()
      .tz(citySelectorValue)
      .format("HH:mm:ss [<small>]A[</small>]");
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `<div class="city">
          <div class="info">
            <h2>${citySelectorValue.replace("_", " ").split("/")[1]}</h2>
            <div class="date">${citySelectorValueDate}</div>
          </div>
          <div class="time">${citySelectorValueTime}</div>
        </div>
        <br/>
        <a href="index.html">All cities</a>`;
  }

  let citySelector = document.querySelector("#cityselector");
  citySelector.addEventListener("change", showCityInfo);
}
setInterval(showCityInfo, 1000);

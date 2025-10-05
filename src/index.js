function updateTime() {
  let harareDateElement = document.querySelector("#harare .date");
  harareDateElement.innerHTML = moment()
    .tz("Africa/Harare")
    .format("dddd, DD MMMM, YYYY");
  let harareTimeElement = document.querySelector("#harare .time");
  harareTimeElement.innerHTML = moment()
    .tz("Africa/Harare")
    .format("hh:mm:ss [<small>]A[</small>]");

  let berlinDateElement = document.querySelector("#berlin .date");
  berlinDateElement.innerHTML = moment()
    .tz("Europe/Berlin")
    .format("dddd, DD MMMM, YYYY");
  let berlinTimeElement = document.querySelector("#berlin .time");
  berlinTimeElement.innerHTML = moment()
    .tz("Europe/Berlin")
    .format("hh:mm:ss [<small>]A[</small>]");

  let newyorkDateElement = document.querySelector("#new-york .date");
  newyorkDateElement.innerHTML = moment()
    .tz("America/New_York")
    .format("dddd, DD MMMM, YYYY");
  let newyorkTimeElement = document.querySelector("#new-york .time");
  newyorkTimeElement.innerHTML = moment()
    .tz("America/New_York")
    .format("hh:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);

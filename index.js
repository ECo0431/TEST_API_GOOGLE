let myHeaders = new Headers();

let myInit = {
  method: "GET",
  headers: myHeaders,
  mode: "no-cors",
  cache: "default",
};

fetch(
  "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Paris,IL&key=AIzaSyDM4BGA6tu7wxB8oYJMROgQr_pSHYtXBTc&inputtype=textquery&fields=name,photos",
  myInit
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

const { REACT_APP_WEATHER_API_KEY, REACT_APP_LOCATION_API_KEY } = process.env;

export const fetchCity = async (setData, search = "") => {
  if (!search) {
    navigator.geolocation.getCurrentPosition((position) => {
      fetch(
        `https://us1.locationiq.com/v1/reverse.php?key=${REACT_APP_LOCATION_API_KEY}&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return data.address.town;
        })
        .then((city) => {
          fetchData(city, setData);
        });
    });
  }
  if (search) {
    fetchData(search, setData);
  }
};

const fetchData = async (city, setData) => {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=${REACT_APP_WEATHER_API_KEY}&q=${city}&aqi=no`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setData(data);
    });
};

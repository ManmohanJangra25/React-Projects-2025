const getLocationService = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting location:", error);
          reject(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
      reject("Geolocation not supported");
    }
  });
};

export const fetchData = async () => {
  try {
    const coords = await getLocationService();
    const { latitude, longitude } = coords;
    const apiKey = "9aabcc8a59c249a3bd8203132252401"; // Replace with your WeatherAPI key

    const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}&days=7`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + process.env.REACT_APP_API_KEY);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

export const fetchData = async (type) => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" + type,
      requestOptions
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

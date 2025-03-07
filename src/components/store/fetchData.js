const myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDg2MjkwN2EyYmE4NmMxZjc0ZTZiMTdhZTcwNjg2OSIsIm5iZiI6MTczODcwMzA1Mi44ODksInN1YiI6IjY3YTI4MGNjYThiNmZjZTU1ZDhhNjFkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tsCQL3FmWiK_iPosbS7xdVc3k8X8k2Oj2czRiNgQdV4"
);

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

import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;

export const authorizeAPI = async () => {
  const url = "https://api.themoviedb.org/3/authentication";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDg2MjkwN2EyYmE4NmMxZjc0ZTZiMTdhZTcwNjg2OSIsIm5iZiI6MTczODcwMzA1Mi44ODksInN1YiI6IjY3YTI4MGNjYThiNmZjZTU1ZDhhNjFkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tsCQL3FmWiK_iPosbS7xdVc3k8X8k2Oj2czRiNgQdV4",
    },
  };

  return await fetch(url, options)
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => console.error(err));
};

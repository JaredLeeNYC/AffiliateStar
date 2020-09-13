const APIURL = "https://conduit.productionready.io/api";

export const fetchArticles = async () => {
  const response = await fetch(APIURL + "/articles");
  return await response.json();
};

export const fetchTags = async () => {
  const response = await fetch(APIURL + "/tags");
  return await response.json();
};

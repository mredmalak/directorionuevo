export const getMusicbands = async (artist) => {
  const response = await fetch();
  const data = await response.json();
  console.log({ data });
};

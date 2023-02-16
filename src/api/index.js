import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;
    console.log(sw, ne);
    const options = {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Key": "bfbba6d9ebmsh5fef858a27cf96fp1c6805jsneccd9e5664e6",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    };

    const {
      data: { data },
    } = await axios.get(URL, options);

    return data;
  } catch (error) {
    console.error(error);
  }
};

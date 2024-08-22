import axios from "axios";

export async function getData(url: string) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_HOST}${url}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching:", error);
    return null;
  }
}

export async function getExternalData(url: string) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching:", error);
    return null;
  }
}

export async function postData(url: string, data: any) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_HOST}${url}/`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

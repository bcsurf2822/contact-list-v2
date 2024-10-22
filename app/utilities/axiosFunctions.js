import axios from "axios";

//axios to fetch contacts
export const fetchContacts = async () => {
  try {
    const response = await axios.get("/contacts.json");
    return response.data.contacts;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    throw error;
  }
};

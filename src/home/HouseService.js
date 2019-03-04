import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class HouseService{

  getHouses()
  {
      console.log("Get House List");
    const url = `${API_URL}/api/housee/`;
    return axios.get(url).then(response => response.data);
  }

  getHousesByURL(link){
    const url = `${API_URL}${link}`;
    return axios.get(url).then(response => response.data);
  }

  getHouse(pk)
  {
    const url = `${API_URL}/api/housee/${pk}`;
    return axios.get(url).then(response => response.data);
  }

  deleteHouse(housee)
  {
    const url = `${API_URL}/api/housee/${housee.pk}`;
    return axios.delete(url);
  }

  createHouse(housee){
    const url = `${API_URL}/api/housee/`;
    return axios.post(url,housee);
  }
  
  updateCustomer(housee){
    const url = `${API_URL}/api/housee/${housee.pk}`;
    return axios.put(url,housee);
   }
  
}

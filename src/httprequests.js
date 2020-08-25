import axios from "axios";
import authHeader from "./auth-header";
import { MAINURL } from 'common/constants';
//import authHeaderFile from "auth-headerfile";

function authRegHeader() {

  return {
    'Content-type': 'application/json',
    'Accept': 'application/json',
  };

}


export const downloadFile=async(endpoint)=>{
  return await axios({
    url: MAINURL + endpoint,
    method: 'GET',
    responseType: 'blob', // important
    headers: authHeader(),
    rejectUnauthorized: false
  }).then((response) => {
    console.log('download response', JSON.stringify(response));
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'file.pdf');
    document.body.appendChild(link);
    link.click();
  });
}



export const getLiveData = async (endpoint, payerId) => {
  return await axios.get(MAINURL + endpoint + '?payerId=' + payerId, { headers: authHeader() });
};


export const getData = async (endpoint) => {
  return await axios.get(MAINURL + endpoint, { headers: authHeader() });
};

export const postData = async (endpoint, data) => {
  console.log('headers',JSON.stringify( authHeader()))

  return await axios.post(MAINURL + endpoint, data, { headers: authHeader() ,rejectUnauthorized: false});
};

export const deleteData = async (endpoint) => {
  return await axios.delete(MAINURL + endpoint, { headers: authHeader(),rejectUnauthorized: false });

};

export const putData = async (endpoint) => {
  return await axios({ method: 'put', url: MAINURL + endpoint, headers: authHeader(),rejectUnauthorized: false })
  //axios.put(MAINURL+endpoint, { headers: authHeader() });

};

export const putDataLoad = async (endpoint,data) => {
  return await axios({ method: 'put', data:data, url: MAINURL + endpoint, headers: authHeader(),rejectUnauthorized: false })
  //axios.put(MAINURL+endpoint, { headers: authHeader() });

};


export const registerUser = async (endpoint, data) => {
  return await axios.post(MAINURL + endpoint, data, { headers: authRegHeader(),rejectUnauthorized: false });
};

export const getRegisterData = async (endpoint) => {
  return await axios.get(MAINURL + endpoint, { headers: authRegHeader(),rejectUnauthorized: false });
};

// export const uploadFiles= async(endpoint, data)=>{
//   return await axios.post(MAINURL + endpoint, data, { headers: authHeaderFile() });
// }




export default function authHeader() {
  const token = localStorage.getItem('access_token');


  return {
    'Authorization': 'Bearer'+ token,
   'Content-type': 'application/json',
  'Accept': 'application/json',
  };

}
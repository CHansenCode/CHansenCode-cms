import axios from 'axios';

export async function getMe(url, token) {
  let res = axios.get(url, { headers: { 'auth-token': token } });
  return res;
}
export async function postMe(url, formData, token) {
  let res = axios.post(url, formData, { headers: { 'auth-token': token } });
  return res;
}
export async function patchMe(url, id, formData, token) {
  let res = await axios.patch(`${url}/${id}`, formData, {
    headers: { 'auth-token': token },
  });
  return res;
}
export async function deleteMe(url, id, token) {
  let res = axios.delete(`${url}/${id}`, { headers: { 'auth-token': token } });
  return res;
}

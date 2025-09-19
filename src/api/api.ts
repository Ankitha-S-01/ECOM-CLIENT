import axios from 'axios';

const api = 'https://ecom-server-team-lxhu.onrender.com'

const getAllProducts=()=> axios.get(`${api}/products/all`)
const addNewProduct= (product :any)=> axios.post(`${api}/products/add`,product)
const editProduct = (id:string,product:any)=> axios.put(`${api}/products/product/edit/${id}`,product)
const deleteProduct = (id:string)=> axios.delete(`${api}/products/product/delete/${id}`)
export {getAllProducts,addNewProduct,editProduct,deleteProduct}
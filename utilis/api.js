import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get('token');

/**
 * 
 * @param {*} url 
 * @param {*} formData 
 */
export const postData = async(url, formData) => {
   try {
    const res = await fetch(`http://localhost:5050${url}`, {
      method : "POST",
      headers : {
        'Autherization' : `Bearer ${token}`,
        "Content-Type" : 'application/json'
      },
      body:JSON.stringify(formData)
    });

    // check response ok 
    if (res.ok) {
      const data = await res.json();
      return data; 
    }else{
      const errorData = await res.json();
      return errorData;
    }


   } catch (error) {
    console.log(error.message);
    
   }
}



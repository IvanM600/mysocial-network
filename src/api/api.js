import * as axios from "axios"


 const instance = axios.create({
        withCredentials: true,
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        headers: {  
            "API-KEY": "4f168b56-2b77-485e-ac7f-4971280d1b29"
        }
     
 });

 export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`) 
             .then (response => response.data);
     },
     getUsers2(pageNumber = 1, pageSize = 10) {
        return instance.get(`follow?page=${pageNumber}&count=${pageSize}`)
             .then (response => response.data);
     },
     follow (userId) {
       return instance.post(`follow/${userId}`)
     },
     unfollow (userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
       console.warn("Obsolete method. Please profileAPI object")
       return profileAPI.getProfile(userId)
          
    }

 }

 export const profileAPI = {
   getProfile(userId) {
      return instance.get(`profile/` + userId);
         
   },
   getStatus(userId) {
      return instance.get(`profile/status/` + userId);
   },
   updateStatus(status) {
      return instance.put(`profile/status`, {status: status});
   }

}

 export const authAPI = {
   me () {
   return instance.get(`auth/me`)
   },

   login (email, password, rememberMe = false) {
      return instance.post(`auth/login`, {email, password, rememberMe})
      },
      logout () {
         return instance.delete(`auth/login`)
         }
 }

 

 



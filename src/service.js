import axios from 'axios';


axios.defaults.baseURL='http://localhost:5059';
axios.interceptors.request.use(function(config){
  console.log(config);
  return config;
  },function(error){
   console.log(error);
  return Promise.reject(error);
})
;

export default {
  getTasks: async () => {
    const result = await axios.get(`/items`)    
    return result.data;
  },

  addTask: async(name)=>{
    
    console.log('addTask', name);
  
    const result=await axios.post(`/addTodo`,{name,isComplete:false});

    //TODO
    return result.data;
  },

  // setCompleted: async(id, isComplete)=>{
  //   console.log('setCompleted', {id, isComplete})
  //   //TODO
  //   await axios.put(`${apiUrl}/${id}?isComplete=${isComplete}`)
    
  // },
  setCompleted:async(id,isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    const result=await axios.put(`/addTodo/${id}?isComplete=${isComplete}`,{id,isComplete});
    return result;
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')
    const result=await axios.delete(`/deleteTodo/${id}`,id);
    return result.data;
  }
};

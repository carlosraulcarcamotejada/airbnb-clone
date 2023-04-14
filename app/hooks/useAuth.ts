import axios from 'axios'


export const useAuth = () => {
  

  const startSavingUser = async (data:any) => {
    try {
        await axios.post('/api/register',data)
    } catch (error) {
        
    }
  }


  return {
    //Methods
  }
} 

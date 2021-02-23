export const getArticles =() =>{
   axios.get('http://localhost:3000/shapes/list')
   .then((res)=>{
      console.log(res.data)
   })
   .catch((err)=>{
      console.log(err)
   })

}
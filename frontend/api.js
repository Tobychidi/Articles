export const getArticles = () => {
   const div = document.querySelector('#destination');
   div.innerHTML=''
   // const options = {
   //    method: 'GET',
   //    url: 'http://127.0.0.1:3000',
   // };

   axios.get('http://api.mediastack.com/v1/news?access_key=bac1ea8ad4ce9365a495b7deca5b96a9&languages=en')
   
   .then(function (response) {
      console.log(response)
   }).catch(function (error) {
      console.error(error);
   });
}





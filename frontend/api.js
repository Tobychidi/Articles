export const getArticles = () => {
   const div = document.querySelector('#destination');
   div.innerHTML=''
   // const options = {
   //    method: 'GET',
   //    url: 'http://127.0.0.1:3000',
   // };

   axios.get('http://127.0.0.1:3000').then(function (response) {
      console.log(response.data);
      const Data = response.data;
      const {name, school, age, height, weight, Class, language} = Data;
      const info = [name, school, age, height, weight, Class, language]

      info.forEach(el => {
         let p = document.createElement('p');
         p.innerHTML = el;
         div.appendChild(p)
      });
      // const {name, school, age, height, weight, Class, language} = Data;
      // console.log(name)
   }).catch(function (error) {
      console.error(error);
   });
}





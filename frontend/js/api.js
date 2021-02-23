export const getShapes = () => {
   axios.get('http://localhost:3000/shapes/list')
      .then((res) => {
         console.log(res.data)
      })
      .catch((err) => {
         console.log(err)
      })

}
export const addShapes = () => {
   let data = JSON.stringify({ "shape" : "triangle"});

   axios.post('http://localhost:3000/shapes/add', data)
      .then(function (response) {
         console.log(response);
      })
      .catch(function (error) {
         console.log(error);
      });

}



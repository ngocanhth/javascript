

const array = [
  {
    id: 1,
    count: 9,
  },
  {
    id: 2,
    count: 3,
  },
  {
    id: 1,
    count: 3,
  },
  {
    id: 2,
    count: 3,
  },
]
  function mergerArray(array){
    const obj = {};
    array.forEach(item => {

     
      console.log(" item.id: ", item.id);
      console.log(" obj[item.id]: ", obj[item.id]);

      obj[item.id] =   obj[item.id] ?   obj[item.id] + item.count : item.count;
     
    //  console.log( obj[item.id]);
    })

    return obj;
  }
mergerArray(array);

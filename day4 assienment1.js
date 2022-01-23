const object1 = {
    name: 'person1',
   age: '5'
  };
      
  const object2 = {
    age: '5',
    name: 'person1'
  };
      
  JSON.stringify(object1) === JSON.stringify(object2)
  
      
  _.isEqual(object1, object2)
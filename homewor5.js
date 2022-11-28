const data = [
    { text: 'First' },
    { text: 1 },
    { text: Math.PI },
    { text: 'Second' },
    { text: [] },
    { text: 'Third' },
    { text: 'Last' },
    { text: { text: 9 } },
  ];
  
    let items = [];
    

  // ================== Your code below ==================
  // Note: Вы можете обращаться к элементу массива по индексу, например items[2] -> { text: Math.PI },
  // Напишите код, который переложит из data в items только те элементы у которых поле text это строка
  // Вам понадобятся циклы и условия + немного знаний о массивах
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    
    if (typeof element.text === 'string') {
      items.push(element);
    }
  }
  console.log(items);
  
  
  
  // ================== End of your code ==================
  
//   renderList(items);

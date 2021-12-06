function cachingDecoratorNew(func) {
  let cache = {};
  return function wrapper(...args) {
  	let key = args.join(',');
  	if (key in cache) {
  		console.log(`Из кэша: ${cache[key]}`); 		
  		return `Из кэша: ${cache[key]}`
  	} else {
  		let result = func(...args);
  		cache[key] = result;
  		console.log(Object.keys(cache).length);
  		if (Object.keys(cache).length > 5) {
  			let keyList = Object.getOwnPropertyNames(cache);
  			delete cache[`${keyList[0]}`];
  		};
  		console.log(Object.keys(cache).length);
  		console.log(`Вычисляем: ${result}`);
  		return `Вычисляем: ${result}`
  	}
  }
}




function debounceDecoratorNew(func,ms) {
	let isSleeping = false;
	let lastArgs;
	
  	function wrapper(...args) {
  		if (isSleeping === false) {
  			func(...args)
  			isSleeping = true;
  			setTimeout(() => {
  				func(...lastArgs)
  				isSleeping = false}
  				,ms);
  		} else {
  			lastArgs = args;
  		}
  	} 
  	return wrapper
}




function debounceDecorator2(func,ms) {
	let isSleeping = false;
	let lastArgs;
	let sendingTime;
	wrapper.count = []; 
	
  	function wrapper(...args) {
  				
  		if (isSleeping === false) {
  			sendingTime = Date.now();
  			func(...args);
  			wrapper.count.push(sendingTime);
  			isSleeping = true;
  			console.log(`Сигнал был послан ${wrapper.count.length} раз(а)`);
  			setTimeout(() => {
  				sendingTime = Date.now();
  				func(...lastArgs);
  				wrapper.count.push(sendingTime);
  				isSleeping = false;
  				console.log(`Сигнал был послан ${wrapper.count.length} раз(а)`)},
  				ms)
  		} else {
  			lastArgs = args;
  		}

  	} 
  	return wrapper
}
function cachingDecoratorNew(func) {
  let cache = {};
  return function wrapper(...args) {
  	let key = args.join(',');
  	if (key in cache) {
  		console.log(`Из кэша: ${cache[key]}`); 		
  		return `Из кэша: ${cache[key]}`
  	} 
  	let result = func(...args);
  	cache[key] = result;
  	if (Object.keys(cache).length > 5) {
  		let keyList = Object.getOwnPropertyNames(cache);
  		delete cache[`${keyList[0]}`];
  	};
  	console.log(`В кэше: ${Object.keys(cache).length} записей`);
  	console.log(`Вычисляем: ${result}`);
  	return `Вычисляем: ${result}`
  }
}




function debounceDecoratorNew(func,ms) {
	let isSleeping;
	let timer;
  	return function (...args) {
		clearTimeout(timer);
		timer = setTimeout(()=>{
			func(...args);
		},ms)
		if (!isSleeping) {
			func(...args);
			isSleeping = true;
		}
  	} 
}




function debounceDecorator2(func,ms) {
	let isSleeping;
	let timer;

	 function shell (...args) {
		clearTimeout(timer);
		timer = setTimeout(()=>{
			func(...args);
			shell.count++;
			console.log(shell.count);
		},ms)
		if (!isSleeping) {
			func(...args);
			isSleeping = true;
			shell.count++
			console.log(shell.count);
		}
		
  	} 
	  shell.count = 0;
	  return shell;
}

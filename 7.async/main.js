function testCase() {
	let phoneAlarm = new AlarmClock();

	phoneAlarm.addClock("10:59", () => console.log("Пора работать!"), 1);
	phoneAlarm.addClock("11:00", () => {console.log("УВОЛЮ!!!"); phoneAlarm.removeClock(2)}, 2);
  	try {phoneAlarm.addClock("11:01", () => console.log("Обеда не получишь!!!"));}
  	finally {
	phoneAlarm.addClock("11:02", () => {console.log("Обеда не получишь!!!"); 
											phoneAlarm.clearAlarms();
											phoneAlarm.printAlarms();
										}, 3)
		phoneAlarm.addClock("11:03", () => console.log("Пора работать!"), 1)
		phoneAlarm.printAlarms();
		phoneAlarm.start();	
	}
}

testCase();
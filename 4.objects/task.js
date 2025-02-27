function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  	this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
	if(this.marks === undefined){ 
		this.marks = [];
  		this.marks.push(mark);
    } else {
    	this.marks.push(mark);
	}
}

Student.prototype.addMarks = function (...arguments) {
	let args = Array.from(arguments);
	if(this.marks === undefined){ 
		this.marks = [];
  		args.forEach((item) => this.marks.push(item));
    } else {
    	args.forEach((item) => this.marks.push(item));
	}
}

Student.prototype.getAverage = function () {
	let summ = 0;	
	this.marks.forEach((item) => summ += item);	 
	return summ / this.marks.length;
}


Student.prototype.exclude = function (reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = `${reason}`
}
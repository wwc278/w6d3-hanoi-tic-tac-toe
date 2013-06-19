function myBind (func, context) {
	return function () {
		func.apply(context, arguments)
	}
}

function Cat() {
	this.word = 'meow'
}

function Dog() {
	this.word = 'woof'
}

Cat.prototype.speak = function(saying){
	console.log(this.word + saying)
}

cat = new Cat()

dog = new Dog()

woof = myBind(cat.speak, dog)

console.log('Speak, cat.')

cat.speak(', I\'m a cat.')

console.log('Speak, dog.')

woof(', I\'m a dog.')

const assert = require('chai').assert;
const main = require('../main');

//result
const helloWorldText = main.helloWorld();
const subtractionResult = main.subtraction(4,2);
const arrayOfNumbers = main.arrayOfNumbers();
describe('Main suite', function(){
	
describe('Hello Word Method - Test Cases', function(){
	it('Hello word text is as expected', function(){
		assert.equal(helloWorldText, 'hello world');
	});
	
	it('Validate data type', function(){
		assert.typeOf(helloWorldText,'String', 'The expected data type is a string')
	});
});

describe('Substraction Method - Test Cases', function(){
	it('Less than 5', function(){
		assert.isBelow(subtractionResult, 5);
	});
	
	it('Validate data type', function(){
		assert.typeOf(subtractionResult,'number', 'The expected data type is a number')
	});
});
	
describe('Array Method - Test Cases', function(){
	it('Array includes the number 5', function(){
		assert.include(arrayOfNumbers, 5);
	});
	
	it('Validate Array length', function(){
		assert.lengthOf(arrayOfNumbers,6);
	});
});


});


//npm run test
//https://www.youtube.com/watch?v=-sn3H0V3PuY&t=1062s
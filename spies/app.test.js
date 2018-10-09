const expect=require('expect');

const rewire=require('rewire');

var app=rewire('./app');

describe('app',()=>{
	
	var db={
		saveuser:expect.createSpy()
	};
	app.__set__('db',db);
	
	it('should call the spy correctly',()=>{
		var spy=expect.createSpy();
		spy('sachu');
		expect(spy).toHaveBeenCalledWith('sachu');
	});
	
	it('should call saveuser with user object',()=>{
		var email="xxx@gmail.com";
		var password="gvgvi545";
		app.handlesignup(email,password);
		expect(db.saveuser).toHaveBeenCalledWith({email,password});
		
	});
});
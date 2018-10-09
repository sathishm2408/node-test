module.exports.add=(a,b)=>a+b;
module.exports.square=(a)=>a*a;

module.exports.setName=(user,fullname)=>{
	var name=fullname.split(" ");
	user.firstName=name[0];
	user.lastName=name[1];
	return user;
};

module.exports.AsyncSqr=(a,callback)=>{
	setTimeout(()=>{
		callback(a*a);
	},1000);
};
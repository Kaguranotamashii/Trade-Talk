const db=uniCloud.database()
exports.main = async (event, context) => {
	let {id}=event;
	//console.log(event)
	return await db.collection("article").doc(id).get();
	
};

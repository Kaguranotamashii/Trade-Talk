const db=uniCloud.database()
exports.main = async (event, context) => {
	//console.log("111event")
	//let {word}=event;
	var word=event.a
	//console.log(event)
	//return event.a;
	let {a}=event
	return await db.collection("dicts").where({
		headWord:a
	}).get()

}

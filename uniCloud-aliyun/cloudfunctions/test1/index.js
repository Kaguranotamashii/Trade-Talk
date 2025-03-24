const db=uniCloud.database();
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	return await db.collection("dicts").where({
		headWord:'apple'
	}).get()
	
	
	
	
	
	//返回数据给客户端
	//return event
};

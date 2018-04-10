var PouchDB=cordova.require("cordova-plugin-savofflite-sqlite.pouchdb")


module.exports = {
//     // scanDoc: function (sourceType, successCallback, errorCallback) {
//     //     cordova.exec(successCallback, errorCallback, "Scan", "scanDoc", [sourceType]);
//     // }
 

createDbOfflite : function (dbz) 
{
  db = new PouchDB(dbz, {auto_compaction: true,adapter: 'websql', location:'default'});
  db.info().then(console.log.bind(console));
  PouchDB.on('created', function (db) {
     console.log('Successfully created database!');
});
} ,



getOfflite : function (dbz, _id)
{
  db = new PouchDB(dbz, {auto_compaction: true,adapter: 'websql', location:'default'});
  db.get(_id).then(function (doc) {
  console.log('Successfully got data from database!');
  return doc.object;
}).catch(function (err) {
  console.log(err);
  return false;
});
} ,



putOfflite : function (dbz, _id, obj) 
{
  //put ids in alphebetical ordedr so we caan retrieve in alphabetical order automatically using getalldocsofflite()
  db = new PouchDB(dbz, {auto_compaction: true,adapter: 'websql', location:'default'});
  var doc = {
    _id: _id,
    object: obj    
  };
  db.put(doc).then(function (response) {
    console.log('Successfully put data in database!');
    return true;
}).catch(function (err) {
  console.log(err);
  return false;
});
} ,



remOfflite : function (dbz, _id) 
{
db = new PouchDB(dbz, {auto_compaction: true,adapter: 'websql', location:'default'});
db.get(_id).then(function(doc) {
  return db.remove(doc);
}).then(function (result) {
  console.log('Successfully removed data from database!');
  return true;
}).catch(function (err) {
  console.log(err);
  return false;
});
} ,



closeDbOfflite : function (dbz) 
{
db = new PouchDB(dbz, {auto_compaction: true,adapter: 'websql', location:'default'});
db.close().then(function () {
  console.log('Successfully closed databse connection!');
  return true
});
} ,



delDbOfflite : function (dbz) 
{
  db = new PouchDB(dbz, {auto_compaction: true,adapter: 'websql', location:'default'});
  db.destroy().then(function (response) {
  console.log(response);
  return response;
}).catch(function (err) {
  console.log(err);
  return false;
});
} ,



getAllDocIdsOfflite : function (dbz) 
{
    //If ID's were inserted in alphabetical order this fuction will return doc id's in alphabetical order.
db = new PouchDB(dbz, {auto_compaction: true,adapter: 'websql', location:'default'});
db.allDocs({
  // include_docs: true,
  // attachments: true
}).then(function (result) {
        console.log('Gooooooooooooot infoooooo!!');
      console.log(result);
}).catch(function (err) {
  console.log(err);
  console.log('errrrrrrrrrrrrrrrrrrrrrrrrrrrrrror!!');
});
} ,



getAllDocsOfflite : function (dbz) 
{
  //If ID's were inserted in alphabetical order this fuction will return docid's along with docs in alphabetical order.
db = new PouchDB(dbz, {auto_compaction: true,adapter: 'websql', location:'default'});
db.allDocs({
  include_docs: true,
  attachments: true
}).then(function (result) {
        console.log('Gooooooooooooot infoooooo!!');
      console.log(result);
}).catch(function (err) {
  console.log(err);
  console.log('errrrrrrrrrrrrrrrrrrrrrrrrrrrrrror!!');
});
} ,



infoDbOfflite : function (dbz) 
{
    db = new PouchDB(dbz, {auto_compaction: true,adapter: 'websql', location:'default'});
    db.info().then(function (result) {
      console.log('Gooooooooooooot infoooooo!!');
      console.log(result.doc_count);
    return result;
}).catch(function (err) {
   console.log(err);
    console.log('errrrrrrrrrrrrrrrrrrrrrrrrrrrrrror!!');
});
}

};
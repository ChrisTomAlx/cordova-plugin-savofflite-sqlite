# cordova-plugin-savofflite

This plugin uses pouchdb 5.4.5 to make use of the automatic detection of the sqlite plugin when using websql adapter to create or open databases. It also uses a forked version of the cordova-sqlite-storage plugin which was converted into a seperate plugin with id com.phonegap.plugins.sqlite. This forked plugin can be found at https://www.npmjs.com/package/com.phonegap.plugins.sqlite and uses version 0.7.0 of the original cordova-sqlite-storage plugin because of how well it works with pouchdb.


## Installation

npm link :- https://www.npmjs.com/package/cordova-plugin-savofflite

To add to your project :- cordova plugin add cordova-plugin-savofflite


## Functions

createDbOfflite(db)  // Function that creates the db with name that is passed in (here taht name is db)

putOfflite(dbz, _id, obj)  // Function to put data [obj] which is in JSON format into database [db] with an id [_id]

getOfflite(dbz, _id)  // Function to get data that was put into the database that has id = _id 

remOfflite(dbz, _id)  // Function to remove data that was put into the database with id = _id 

closeDbOfflite(dbz) // Fuction to close the database connection

delDbOfflite(dbz) // Fuction to delete database

getAllDocIdsOfflite(dbz) // Fuction to get doc ids alone of all saved data in database

getAllDocsOfflite(dbz) // Fuction to get all docs along with doc data and doc ids of all saved data in database

infoDbOfflite(dbz) // Fuction that returns information about the database
    

### How to use

Require the savofflite.js file using cordova.require("cordova-plugin-savofflite.savofflite"), after assinging this to a variable use that variable to access all the fuctions available in the javascript file.

__Supported Platforms__

- Android
- iOS

**Example**  

var savoff=cordova.require("cordova-plugin-savofflite.savofflite");
                    
var db= 'dbdoordiebrah';
savoff.createDbOfflite(db);
                    
var obj = 'one';
var _id= 'oneid';
savoff.putOfflite(db, _id, obj);

savoff.getOfflite(dbz, _id) 

savoff.remOfflite(dbz, _id)  

savoff.closeDbOfflite(dbz) 

savoff.delDbOfflite(dbz)

savoff.getAllDocIdsOfflite(dbz) 

savoff.getAllDocsOfflite(dbz) 

savoff.infoDbOfflite(dbz) 


## More about us!

Find out more or contact us directly here :- http://www.neutrinos.co/

Facebook :- https://www.facebook.com/Neutrinos.co/ <br/>
LinkedIn :- https://www.linkedin.com/company/25057297/ <br/>
Twitter :- https://twitter.com/Neutrinosco <br/>
Instagram :- https://www.instagram.com/neutrinos.co/
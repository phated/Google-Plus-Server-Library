var GooglePlusLibrary = require('../google-plus-api');

var gplus = new GooglePlusLibrary();
gplus.setApiKey('YOUR_API_KEY');
gplus.load('plus','v1');

/*
gplus.activities.list({userId: '102147307918874735077', collection: 'public', maxResults: '1'});
gplus.execute(function(resp) {
    console.log(resp);
});
*/

/*
gplus.activities.get({activityId: 'z12mijziozu0x5hrd04cfhnw1yymsn2o414', maxResults: '1'});
gplus.execute(function(resp) {
    console.log(resp);
});
*/

/*
gplus.activities.search({query: 'test', maxResults: '1'});
gplus.execute(function(resp) {
    console.log(resp);
});
*/

/*
gplus.comments.get({commentId: 'sTcuoWTR52tnNY9UpoW2TfNb0PnCiiutGuDoTzFyeoI7hNeoa-HBWHoDTQBA59pNvtVbsipeS_U', maxResults: '1'});
gplus.execute(function(resp) {
    console.log(resp);
});
*/

/*
gplus.comments.list({activityId: 'z12mijziozu0x5hrd04cfhnw1yymsn2o414', maxResults: '1'});
gplus.execute(function(resp) {
    console.log(resp);
});
*/

/*
gplus.people.get({userId: '102147307918874735077', maxResults: '1'});
gplus.execute(function(resp) {
    console.log(resp);
});
*/

/*
gplus.people.listByActivity({activityId: 'z12mijziozu0x5hrd04cfhnw1yymsn2o414', collection: 'plusoners', maxResults: '1'});
gplus.execute(function(resp) {
    console.log(resp);
});
*/

/*
gplus.people.search({query: 'Blaine%20Bublitz'});
gplus.execute(function(resp) {
    console.log(resp);
});
*/
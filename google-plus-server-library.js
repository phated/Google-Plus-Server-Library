var https = require('https');

function GooglePlus() {
    var req_options = {
            host: 'www.googleapis.com',
            port: 443,
            path: null,
            method: 'GET'
        },
        search = [], // querystring
        api = {
            key: null,
            name: 'plus',
            version: 'v1',
            path: null
        };
        
    var qstring = function(options) {
        var kv_pair, key;
        for(key in options) {
            kv_pair = ['&',key,'=',options[key]].join('');
            search.push(kv_pair);
        }
    };
    
    this.setApiKey = function(apiKey) {
        if(apiKey === undefined) {
            throw 'No API key defined';
        } else {
            api.key = ['&key=',apiKey].join('');
        }
    };
    
    this.load = function(api_name, api_version) {
        if(api_name === undefined || api_version === undefined) {
            throw 'API_NAME or API_VERSION not defined';
        } else {
            api.path = ['/',api_name,'/',api_version].join('');
        }
    };
    
    // Activities Namespace
    this.activities = function(){};
    this.activities.list = function(options) {
        if(options.userId && options.collection) {
            req_options.path = [api.path,'/people/',options.userId,'/activities/',options.collection].join('');
            delete options.userId;
            delete options.collection;
            qstring(options);
        } else {
            throw 'No userId or collection defined';
        }
    };
    this.activities.get = function(options) {
        if(options.activityId) {
            req_options.path = [api.path,'/activities/',options.activityId].join('');
            delete options.activityId;
            qstring(options);
        } else {
            throw 'No activityId defined';
        }
    };
    this.activities.search = function(options) {
        if(options.query) {
            req_options.path = [api.path,'/activities'].join('');
            qstring(options);
        } else {
            throw 'No query defined';
        }
    };
    
    // Comments Namespace
    this.comments = function(){};
    this.comments.get = function(options) {
        if(options.commentId) {
            req_options.path = [api.path,'/comments/',options.commentId].join('');
            delete options.commentId;
            qstring(options);
        } else {
            throw 'No commentId defined';
        }
    };
    this.comments.list = function(options) {
        if(options.activityId) {
            req_options.path = [api.path,'/activities/',options.activityId,'/comments'].join('');
            delete options.activityId;
            qstring(options);
        } else {
            throw 'No activityId defined';
        }
    };
    
    // People Namespace
    this.people = function(){};
    this.people.get = function(options) {
        if(options.userId) {
            req_options.path = [api.path,'/people/',options.userId].join('');
            delete options.userId;
            qstring(options);
        } else {
            throw 'No userId defined';
        }
    };
    this.people.listByActivity = function(options) {
        if(options.activityId && options.collection) {
            req_options.path = [api.path,'/activities/',options.activityId,'/people/',options.collection].join('');
            delete options.activityId;
            delete options.collection;
            qstring(options);
        } else {
            throw 'No userId or collection defined';
        }
    };
    this.people.search = function(options) {
        if(options.query) {
            req_options.path = [api.path,'/people'].join('');
            qstring(options);
        } else {
            throw 'No query defined';
        }
    };
    
    this.execute = function(callback) {
        if(callback === undefined) {
            throw 'No callback defined';
        }

        var querystring = ['?alt=json',api.key,search].join(''),
            data_buffer;

        req_options.path = [req_options.path,querystring].join('');

        var req = https.request(req_options, function(res) {
            res.on('data', function(data) {
                data_buffer += data;
            });
            res.on('end', function() {
                callback(data_buffer);
            });
            res.on('close', function() {
                res.emit('end');
            });
        });
        
        req.end();
        req.on('error', function(err) {
            callback(err);
        });
            
        return req;
    };
}

module.exports = GooglePlus;
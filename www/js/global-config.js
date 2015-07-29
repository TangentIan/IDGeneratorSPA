define(function () {
    "use strict";
    var BASE_URL = "http://localhost:58324/",
        API_GENERATE_ID = "api/idmanagement";

    return {
        getBaseUrl: function () { return  BASE_URL; },
        getIDGeneratorAPI: function (){return API_GENERATE_ID;}
    };
});
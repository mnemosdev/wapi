(function(window){
    // Wrap the library in a self-invoking function
    'use strict';
    
    // Library container
    function Wapi(){
        
        var _Wapi = {};
        
        // Private scope variables
        var __private__variable = 0;
        var __private__version = 0.1;
        var __private__author = "mnemosdev";
        var __private__description = "This library makes the use of the weather API a little simpler";
        
        // Setters and Getters
        _Wapi.version = function(){
            return __private__version;
        };
        
        _Wapi.author = function(){
            return __private__author;
        };
        
        _Wapi.description = function(){
            return __private__description;
        };
        
        _Wapi.info = function(){
            return {
                "version" : __private__version,
                "author" : __private__author,
                "description" : __private__description
            };
        };
        
        return _Wapi;
    }
    
    // Library globally accessible attached to window object
    if(typeof(window.Wapi) === 'undefined'){
        window.Wapi = Wapi();
    } else {
        window.__Wapi = Wapi();
        console.log('No conflict mode. You can use Wapi as __Wapi');
    }
})(window);
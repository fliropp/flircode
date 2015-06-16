/***
 * input object format:
 *  foo|bar
 *  baz|bath
 */


var IndexPrinter = function (object, separator) {
    this.separator = separator || /\|/;

    parse = function (text) {
        this.list = text.split('\n');
        this.file = new Object();
        for(i in this.list){
            this.file[this.list[i].split(this.separator)[0]] = this.list[i].split(this.separator)[1];
            document.write("<br>file: " + this.file[this.list[i].split(this.separator)[0]] + "<br>");
        }
    };

    
    /***
    * Returns true if the given key is found.
    */
    this.containsKey = function (key) {
        var found = false;
        if(key in this.file){
            found = true;
        }
        return found;
    };

    /***
    * Returns value if the given key is found.
    */
    this.getValue = function (key) {
        
        var result = null;
        if((key in this.file)){
            result = this.file[key];
        }
        
        return result;
    };

    parse.call(this, object);
};
/***
 * input object format:
 *  foo|bar
 *  baz|bath
 */


var IndexPrinter = function (object, separator) {
    this.separator = separator || /\|/;

    parse = function (text) {
        this.list = text.split('\n');
        var file = {};
        file['foo'] = 'bar';
        file['foo1'] = 'bar1';
        file['foo2'] = 'bar2';
        document.write(file['foo']);
    };

    map_parse = function (text) {

    }

    /***
    * Returns true if the given key is found.
    */
    this.containsKey = function (key) {
        var found = false;
        for (i in this.list) {
            var entryKey = this.list[i].split(this.separator)[0];
            if (entryKey == key) found = true;
        }
        //$('#results').append('<div>Found key: <span>' + key + '</span></div>');
        return found;
    };

    /***
    * Returns value if the given key is found.
    */
    this.getValue = function (key) {
        if (!this.containsKey(key)) return null;

        var result;

        for (i in this.list) {
            var entryKey = this.list[i].split(this.separator)[0];
            if (entryKey == key) {
                result = this.list[i].split(this.separator)[1];
            }
        }
        $('#results').append('<div>Got item: <span>' + result + '</span></div>');
        return result;
    };

    parse.call(this, object);
};
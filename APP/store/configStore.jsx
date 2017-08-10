/**
 * Created by boli on 2017/5/18.
 */
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./configStore.prod');
} else {
    module.exports = require('./configStore.dev');
}
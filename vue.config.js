module.exports = {
    publicPath: './',
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].chunksSortMode = 'none'
            return args
        })
    }
}
hexo.extend.helper.register('_src', function(args) {
    const fn = path => `${this.theme.isBuildFlag ? '' : '/temp'}/${path || ''}`
    if (Array.isArray(args)) {
        const result = [];
        args.forEach(item => {
            result.push(fn(item));
        });
        return result.length ? result : fn();
    } else {
        return fn(args);
    }
});
require.config({
    baseUrl: "js",
    packages: ['pop_register','simple_register'],
    paths: {
        jquery: "lib/jquery.1.11.0.min"
    }
});

require(['pop_register']);//弹出式注册表单 pop_register.html
require(['simple_register']);//最简单注册表单 simple_register.html
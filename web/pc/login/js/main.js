require.config({
    baseUrl: "js",
    packages: ['pop_login','simple_login'],
    paths: {
        jquery: "lib/jquery.1.11.0.min"
    }
});

require(['pop_login']);//弹出式登录表单 pop_login.html
require(['simple_login']);//最简单登录表单 simple_login.html
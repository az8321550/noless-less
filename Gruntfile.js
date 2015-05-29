module.exports=function(grunt){
    grunt.initConfig({
        clean:['css'],
        less:{
            build:{
                src: 'less/nobody.less',
                dest: 'dist/nobody.css'
            }
        },
        cssmin:{
            options:{
                keepSpecialComments: false
            },
            build:{
                src: 'dist/nobody.css',
                dest: 'dist/nobody.min.css'
            }
        }
    });
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.registerTask('default',['less','cssmin']);
}
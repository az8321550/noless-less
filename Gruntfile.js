module.exports=function(grunt){
    grunt.initConfig({
        clean:['css'],
        less:{
            build:{
                src: 'less/nobody.less',
                dest: 'dist/nobody.css'
            }
        }
    });
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.registerTask('default',['less']);
}
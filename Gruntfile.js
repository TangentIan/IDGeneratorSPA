module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

   
      requirejs: {
      compile: {
        options: {
          appDir: 'build',
          mainConfigFile: './build/scripts/common.js',
          optimize: "uglify",
          dir: './release/',
          removeCombined: true,
          modules: [
           
            {
             
              name: 'common'
            },
            
            {
              
                name: 'mainRewardEstimator',
                exclude: ['common']
            },

            {
              
                name: 'mainTierEstimator',
                exclude: ['common']
            }
          ]
        }
      }
    },


      copy: {
          dev: {
              files: [
                  {expand: true, cwd: './www', src: ['index.html'], dest: './build/'},
                  {expand: true, cwd: './www/js', src: ['controllers/*'], dest: './build/js/', filter: 'isFile'},
                  {expand: true, cwd: './www/js', src: ['services/*'], dest: './build/js/', filter: 'isFile'},
                  {expand: true, cwd: './www/js', src: ['*.js'], dest: './build/js/', filter: 'isFile'},
                  {expand: true, cwd: './bower_components/font-awesome/', src: ['fonts/*'], dest: './build/style/'},
                  {expand: true, cwd: './www/template', src: ['**/*'], dest: './build/template/'},
                  {expand: true, cwd: './www/assets', src: ['*'], dest: './build/assets/'},
                  {expand: true, cwd: './www/lib', src: ['*'], dest: './build/lib/'}

              ]
          }
      },


clean: {
  build: ["./build/**/*" ],
  release: ["./release/*"],
    js: ["./release/scripts/Controls/"]
},

      connect: {
          server: {
              options: {
                  port: 1234,
                  debug:true,
                  base: './build',
                  hostname: 'localhost',
                  open: 'http://localhost:1234/'

              }
          }
      },

  cssmin: {
  combine: {
    files: {
      './www/css/styles.css': [ './www/css/app.css', './www/css/style.css']
    }
  }
},   sass: {
          options: {
              style: 'expanded',
              compass: false
          },
          dist: {
              options: {
                  style: 'compressed'
              },
              files: {
                  'build/style/app.css': 'www/stylesheets/css/style.css'
              }
          }
      },
      less: {
          dev: {
              options: {
                 compress: true
              },
              files: {
                  'build/style/css/app.css': 'www/stylesheets/css/style.less'
              }
          }
      },
     

    watch: {
      grunt: { files: ['Gruntfile.js'] },

     sass: {
        files: './www/scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', ['clean:build', 'less',  'copy:dev']);

  grunt.registerTask('buildProd', 'Deploy the necessary files to production', function() {
  grunt.task.run(['build','clean:release',  'concat:release','copyto:release', 'requirejs', 'clean:js']);
  });
  grunt.registerTask('default', ['build','watch']);
  
  grunt.registerTask('serve', 'Start server locally', function () {
        grunt.task.run('connect','watch');
    });

  
};
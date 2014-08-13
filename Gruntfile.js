module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['../grunterie/bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss',
          'css/style.css': 'scss/style.scss'
        }        
      }
    },

    compass: {
      dist: {
        options: {
          importPath: '../grunterie/bower_components/foundation/scss',
          sassDir: 'scss',
          cssDir: 'css',
          environment: 'production',
          outputStyle: 'compressed'
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },

      compass: {
        files: 'scss/**/*.scss',
        tasks: ['compass']
      }

    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass']);
  //grunt.registerTask('build', ['compass']);
  grunt.registerTask('default', ['build','watch']);
}
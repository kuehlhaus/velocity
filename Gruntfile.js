module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['velocity.js', 'velocity.ui.js'],
			options: {
				browser: true,
				curly: true,
				eqeqeq: true,
				eqnull: true,
				esversion: 3, // Velocity 1.*
				forin: false, // Should really be true
				freeze: true,
				funcscope: true,
				futurehostile: true,
				laxbreak: true, // Makes it very hard to write readable code in some places without this option
				loopfunc: true, // Velocity 1.*
				nocomma: true,
				nonbsp: true,
				notypeof: true,
				strict: true,
				globals: {
					jQuery: true
				}
			}
		},
		concat: {
    		options: {
      			separator: ';',
    		},
    		dist: {
      			src: ['velocity.js', 'velocity.ui.js'],
      			dest: 'velocity.combined.js',
    		}
  		},
		uglify: {
			my_target: {
				options: {
					preserveComments: /^!/,
					screwIE8: false // Velocity 1.*
				},
				files: {
					'velocity.min.js': ['velocity.js'],
					'velocity.ui.min.js': ['velocity.ui.js'],
					'velocity.combined.min.js': ['velocity.combined.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};

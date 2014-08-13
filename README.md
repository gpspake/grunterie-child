#Grunterie Child Theme
### A child theme for the [Grunterie Wordpress theme](https://github.com/gpspake/grunterie).  
Based on the [Reverie child theme package](https://github.com/milohuang/reverie-child) by Zhen Huang.
## Required
- [Grunt](http://gruntjs.com/getting-started)
 - [Node.js](http://nodejs.org/)

## Recommended
- Ruby 1.9.3
  - Foundation Gem
  - Compass Gem

##Installation
- Place the child theme in your themes directory
- run npm update (Recommneded)
```
npm update
```
- Follow instructions beolw to get started with Grunt


##SASS
This child theme uses Grunt to compile SASS.
You can use __LibSass__ ([grunt-libsass](https://www.npmjs.org/package/grunt-libsass)) or unleash the power of __Compass__ ([grunt-contrib-compass](https://www.npmjs.org/package/grunt-contrib-compass)).  
Compass is really powerful and has a lot of great features but it requires the Compass Gem and takes a longer to compile than Libsass. The choice is yours.

###SCSS Include path
Depending on how you installed Grunterie, you may need to change the scss include path in the child theme's Gruntfile.js file to point to the correct location. (This path is included in the both the Sass and Compass options in the Grunt file.) 

- If you downloaded Grunterie using git, the folder will be named 'grunterie' so, by default the include path points to
```
'../grunterie/bower_components/foundation/scss'
```
- If used downloaded Grunterie directly from github and the Grunterie directory is named 'grunterie-master', you'll need to change the path to
```
'../grunterie-master/bower_components/foundation/scss'
```

###Using Compass
If you want to use Compass, you'll need the Compass Gem (Requires Ruby)
- Install the Compass Gem
```
gem install compass
```
grunt-contrib-compass is already loaded up and ready to go so, once you've installed the gem, just comment out the 'sass' build task in Gruntfile.js and uncomment the 
'compass' one.
- It should look like this
```
//grunt.registerTask('build', ['sass']);
grunt.registerTask('build', ['compass']);
```
- Then just run grunt
```
grunt
```
Note: Since Compass is handled by grunt, there's no need for a config.rb file but you can still use one if you want. For more information, check out [grunt-contrib-compass](https://www.npmjs.org/package/grunt-contrib-compass)

###Using Libsass
If you aren't interested in using Compass, there's no extra work required.
- Just run grunt.  
```
grunt
```

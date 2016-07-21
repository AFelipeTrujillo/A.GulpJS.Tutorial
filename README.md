#GulpJS

First of all, Gulp is a task runner and tool which helps us to run and deploy front-end or large-scale web applications. In addition, it uses NodeJS as a platform and builds an automated system to create CSS and HTML minification process, concatenating libraries, compiling SASS files.

As a result of Gulp itself has a few functions to help you build files or tests. Therefore, it is a shorter, simpler and faster than others task runner in comporarision. It uses SASS and LESS as CSS procesesssor. Also uses an automated refresh web tool (Live Reload) after editing a file and uses a simple javascript file called Gulpfile.js

## Advantages

* Faster than others (like Grunt).
* Coding is easier.
* Easy to test.
* Plugins are simple to add and use and focus to do only task a time.

## Disadvantages

* Needs a lot plugins and dependecies.
* No Multi-Tasking.
* Configuration is not as clean as Grunt.

## Installation

1. Install NodeJS
2. Run `npm install gulp -g`
3. Run:

```
#!javascript

gulp -v
```


## Gulpfile (gulpfile.js)
Gulpfile is the entry point that will be find when executing the commands `gulp nameTask`. A particular example is a task runner is siminar a factory, you know inputs, process, stock and what they will become at the end. In sum up, you will code a master plan.

## Preprocessors List

* CSS: SASS, LESS and Stylus
* JS: LiveScript, Tyscript and Babel.
* HTML: Markdown, HAML, Slim and Jade.
* Images: Imagemin

## Set up a Project

* Src
	* Images
	* Scripts
	* Styles

* Build
	* Images
	* Scripts
	* Styles
* gulpfile.js

### Minify Images (gulp-imagemin)

Install imagemin.

`npm install --save-dev gulp-imagemin`

Task code.
`
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

//Minify images process
gulp.task('imagemin',function(){

        gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'));

});
`
Run task
`gulp imagemin`

### CSS Minify, Autoprefixer and Concat

This is a very powerful task, we are goint to combine three tasks for minify, complete code to deal with vendors or third party styles sheets, delete unnecessary blocks and concatenate many files in just one.

`
gulp.task('styles',function(){
        gulp.src(['src/styles/*.css'])
        .pipe(concat('styles.css'))
        .pipe(autoprefix('last 2 versions'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/styles/'))
});
`

Run task:
`gulp styles`

### Combining Task

In order to run many tasks with a just command, we have to create a task named *default*. According to last two task we migth code:

`
gulp.task('default',['imagemin','styles'],function(){

});
`

Run task:
`gulp`

### Monitor Source File with Watch Function

The Watch function provides us a monitor tool for changes. For instance, when any changes file is made in our source code, the watch run specifics task that was decribe in gulpfile.js in advance. In the previously section, we learned combaning task with *default* task. We are going to apply the watch function into the deafault task.

`
gulp.task('default',['imagemin','styles'],function(){
        gulp.watch('src/styles/*.css',function(){
                gulp.run('styles');
        });
});

`

### Live Reload

If we want to detect changes in source code or running test automatically, the Browser Sync is proper plugin which you will need. It is simple, you only need create a instace on top of file (callings required files) with method *create()*. Then, invoke the *change* event via *on()* method and assing *reload* function.

```
gulp.watch('src/styles/*.css',['styles']).on('change',browserSync.reload);
```

Browser Sync has incorporate a simple server which you should assign the path destination.

```
gulp.task('browserSync',function(){
        browserSync.init({
                server : {
                        baseDir: 'build'
                }
        });
});

```

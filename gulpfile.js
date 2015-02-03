'use strict';

var gulp = require('gulp');
var autoprefix = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var bower = require('gulp-bower');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var htmlhint = require('gulp-htmlhint');
var minifyHTML = require('gulp-minify-html');
var strip = require('gulp-strip-comments');
var less = require('gulp-less');
var browserSync = require('browser-sync');
var del = require('del');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');
var to5 = require('gulp-6to5');
var watch = require('gulp-watch');
var assign = Object.assign || require('object-assign');
var stylish = require('jshint-stylish');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var spawn = require('child_process').spawn;
var vinylPaths = require('vinyl-paths');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var modRewrite = require('connect-modrewrite');

var node;
var config = require('./gulpconfig');

var onError = function(err) {
  console.log(err);
};

// Run Bower
gulp.task('bower', function() {
  return bower()
    .pipe(plumber({errorHandler: onError}))
    .pipe(gulp.dest(config.path.common.dir));
});

// Clean build
gulp.task('clean', function() {
  return gulp.src([
    config.path.build + '/*',
    config.path.build + '/**/*'
  ], {read:false})
    .pipe(vinylPaths(del));
});

// Copy files
gulp.task('copy:fonts', function() {
  return gulp.src([
    config.path.common.dir + '/font-awesome/fonts/**.*',
    config.path.app + '/css/fonts/**/**.*'
  ])
    .pipe(plumber({errorHandler: onError}))
    .pipe(changed(config.path.build + '/css/fonts'))
    .pipe(gulp.dest(config.path.build + '/css/fonts'));
});

gulp.task('copy:images:dev', function() {
  return gulp.src(config.path.app + '/img/**/*')
    .pipe(plumber({errorHandler: onError}))
    .pipe(changed(config.path.build + '/img'))
    .pipe(gulp.dest(config.path.build + '/img'));
});

gulp.task('copy:images:prod', function() {
  return gulp.src(config.path.app + '/img/**/**.*')
    .pipe(plumber({errorHandler: onError}))
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(config.path.build + '/img'));
});

gulp.task('copy:json', function() {
  return gulp.src(config.path.app + '/views/**/json/*.json')
    .pipe(plumber({errorHandler: onError}))
    .pipe(changed(config.path.build))
    .pipe(gulp.dest(config.path.build + '/views'));
});

gulp.task('copy:common', function() {
  return gulp.src(config.path.common.files, {cwd: config.path.common.dir + '/**'})
    .pipe(plumber({errorHandler: onError}))
    .pipe(changed(config.path.build + '/common'))
    .pipe(gulp.dest(config.path.build + '/common'));
});

gulp.task('copy:system', function() {
  return gulp.src(config.path.common.system, {cwd: config.path.common.dir + '/'})
    .pipe(plumber({errorHandler: onError}))
    .pipe(changed(config.path.build + '/js'))
    .pipe(gulp.dest(config.path.build + '/js'));
});

gulp.task('copy:js', function() {
  return gulp.src(config.path.app + '/js/*', {extension: '.js'})
    .pipe(plumber({errorHandler: onError}))
    .pipe(changed(config.path.app + '/js/*', {extension: '.js'}))
    .pipe(jshint({lookup:true}))
    .pipe(jshint.reporter(stylish))
    .pipe(gulp.dest(config.path.build + '/js'));
});

gulp.task('copy:robots', function() {
  return gulp.src(config.path.app + '/robots.txt')
    .pipe(plumber({errorHandler: onError}))
    .pipe(gulp.dest(config.path.build));
});

// CSS
gulp.task('css:dev', function() {
  return gulp.src([
    config.path.less + '/common.less',
    config.path.less + '/core.less'
  ])
    .pipe(plumber({errorHandler: onError}))
    .pipe(less())
    .pipe(autoprefix([
      'last 5 Chrome versions',
      'last 5 Firefox versions',
      'last 2 Safari versions',
      'Explorer >= 9']))
    .pipe(gulp.dest(config.path.build + '/css'))
    .pipe(reload({stream:true}));
});
gulp.task('css:prod', function() {
  return gulp.src([config.path.less + '/common.less', config.path.less + '/core.less'])
    .pipe(plumber({errorHandler: onError}))
    .pipe(less({compress: true}))
    .pipe(autoprefix([
      'last 5 Chrome versions',
      'last 5 Firefox versions',
      'last 2 Safari versions',
      'Explorer >= 9']))
    .pipe(gulp.dest(config.path.build + '/css'));
});

// JS
gulp.task('js:dev', function() {
  return gulp.src(config.path.app + '/views/**/*.js')
    .pipe(plumber({errorHandler: onError}))
    .pipe(changed(config.path.app, {extension: '.js'}))
    .pipe(jshint({lookup:true}))
    .pipe(jshint.reporter(stylish))
    .pipe(to5(assign({}, config.compiler, {modules: 'system'})))
    .pipe(gulp.dest(config.path.build + '/views'))
    .pipe(reload({stream:true}));
});

gulp.task('js:prod', function() {
  return gulp.src(config.path.app + '/views/**/*.js')
    .pipe(plumber({errorHandler: onError}))
    .pipe(jshint({lookup:true}))
    .pipe(jshint.reporter(stylish))
    .pipe(strip())
    .pipe(uglify())
    .pipe(to5(assign({}, config.compiler, {modules: 'system'})))
    .pipe(gulp.dest(config.path.build + '/views'));
});

// HTML
gulp.task('html:dev', function() {
  return gulp.src([
    config.path.app + '/views/**/*.html',
    config.path.app + '/*.html'
  ], {base: '.'})
    .pipe(plumber({errorHandler: onError}))
    .pipe(changed(config.path.app, {extension: '.html'}))
    .pipe(htmlhint({
      'doctype-first': false,
      'tag-pair': false,
      'tagname-lowercase': true,
      'attr-lowercase': false,
      'attr-value-double-quotes': false,
      'attr-no-duplication': true,
      'id-unique': true,
      'spec-char-escape': false,
      'img-alt-require': false,
      'attr-unsafe-chars': true
    }))
    .pipe(htmlhint.reporter())
    .pipe(gulp.dest(config.path.build + '/../'));
});

gulp.task('html:prod', function() {
  return gulp.src([
    config.path.app + '/views/**/*.html',
    config.path.app + '/*.html'
  ], {base: '.'})
    .pipe(plumber({errorHandler: onError}))
    .pipe(htmlhint({
      'doctype-first': false,
      'tag-pair': false,
      'tagname-lowercase': true,
      'attr-lowercase': false,
      'attr-value-double-quotes': false,
      'attr-no-duplication': true,
      'id-unique': true,
      'spec-char-escape': false,
      'img-alt-require': true,
      'attr-unsafe-chars': true
    }))
    .pipe(htmlhint.reporter())
    .pipe(minifyHTML({conditional: true}))
    .pipe(gulp.dest(config.path.build + '/../'));
});

// Reporting
function reportChange(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// Sync browser
gulp.task('browser-sync', function(cb) {
  browserSync({
    port: 9001,
    open: false,
    minify: false,
    server: {
      baseDir: './build/app',
      middleware: [
        function(req, res, next) {
          res.setHeader('Access-Control-Allow-Origin', '*');
          next();
        },
        modRewrite([
          '!\\.\\w+$ /index.html [L]'
        ])
      ]
    },
    ghostMode: {
      clicks: false,
      forms: false,
      scroll: false
    }
  }, cb);
});

gulp.task('bs:reload', function () {
  browserSync.reload();
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(config.path.less + '/**/*.less', ['css:dev']).on('change', reportChange);
  gulp.watch(config.path.app + '/js/*.js', ['copy:js']).on('change', reportChange);
  gulp.watch([
    config.path.app + '/views/**/*.html',
    config.path.app + '/*.html'
  ], ['html:dev', 'bs:reload']).on('change', reportChange);
  gulp.watch(config.path.app + '/views/**/*.js', ['js:dev']).on('change', reportChange);
});

gulp.task('default', function(cb){
  runSequence(
    'copy:fonts',
    'copy:images:dev',
    'copy:json',
    'copy:common',
    'copy:system',
    'copy:js',
    'copy:robots',
    'css:dev',
    'html:dev',
    'js:dev',
    'watch',
    'browser-sync',
    cb
  );
});

gulp.task('reload', ['bower', 'default']);

gulp.task('production', function(cb) {
  runSequence(
    'clean',
    'bower',
    'copy:fonts',
    'copy:images:prod',
    'copy:json',
    'copy:common',
    'copy:system',
    'copy:js',
    'copy:robots',
    'css:prod',
    'js:prod',
    'html:prod',
    cb
  );
});
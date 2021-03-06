import changed from 'gulp-changed';
import rename from 'gulp-rename';
import iconfont from 'gulp-iconfont';
import consolidate from 'gulp-consolidate';

var runTimestamp = Math.round(Date.now()/1000);

gulp.task('generate:IconFont', 'Create Icons Font', function() {
    return gulp.src(config.iconsfont.src)
        .pipe( changed(config.iconsfont.dest) ) // Ignore unchanged files
        .pipe(iconfont({
            fontName: config.iconsfont.name,
            normalize: true,
            prependUnicode: true, // recommended option
            formats: ['woff'], // default, 'woff2' and 'svg' are available
            timestamp: runTimestamp, // recommended to get consistent builds when watching files
        }))
        .on('glyphs', function(glyphs, options) {
            gulp.src(config.iconsfont.template)
                .pipe(consolidate('lodash', {
                    glyphs: glyphs,
                    fontName: config.iconsfont.name,
                    fontPath: '../fonts/',
                    className: 'icon'
                }))
                .pipe(rename(config.styles.icons))
                .pipe(gulp.dest(config.styles.dev));
        })
        .pipe(gulp.dest(config.iconsfont.dest))
        //.pipe(browserSync.stream());
});

import realFavicon from 'gulp-real-favicon';

var runTimestamp = Math.round(Date.now()/1000);

gulp.task('create:Favicons', 'Create all type favicons', function(cb) {
  realFavicon.generateFavicon({
    masterPicture: config.favicons.src,
    dest: config.favicons.dest,
    iconsPath: config.favicons.path,
    androidManifest: null,
    browserConfig: null,
    firefoxManifest: null,
    yandexManifest: null,
    design: {
      ios: {
        pictureAspect: 'backgroundAndMargin',
        backgroundColor: '#ffffff',
        margin: '25%',
        appName: config.app.name
      },
      desktopBrowser: {},
      windows: {
        pictureAspect: 'noChange',
        backgroundColor: '#00a300',
        onConflict: 'override',
        appName: config.app.name
      },
      androidChrome: {
        pictureAspect: 'shadow',
        themeColor: '#ffffff',
        manifest: {
          name: config.app.name,
          display: 'browser',
          orientation: 'notSet',
          onConflict: 'override',
          declared: true
        }
      },
      safariPinnedTab: {
        pictureAspect: 'silhouette',
        themeColor: '#5bbad5'
      }
    },
    settings: {
      compression: 2,
      scalingAlgorithm: 'Spline',
      errorOnImageTooSmall: false
    },
    versioning: {
      paramName: 'v',
      paramValue: Math.round(Date.now()/1000)
    },
    markupFile: config.favicons.data
  }, function() {
    cb();
  });
});

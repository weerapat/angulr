// lazyload config

angular.module('app')
    /**
   * jQuery plugin config use ui-jq directive , config the js and css files that required
   * key: function name of the jQuery plugin
   * value: array of the css js file located
   */
  .constant('JQ_CONFIG', {
      easyPieChart:   [   '../bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js'],
      sparkline:      [   '../bower_components/jquery.sparkline/dist/jquery.sparkline.retina.js'],
      plot:           [   '../bower_components/flot/jquery.flot.js',
                          '../bower_components/flot/jquery.flot.pie.js', 
                          '../bower_components/flot/jquery.flot.resize.js',
                          '../bower_components/flot.tooltip/js/jquery.flot.tooltip.js',
                          '../bower_components/flot.orderbars/js/jquery.flot.orderBars.js',
                          '../bower_components/flot-spline/js/jquery.flot.spline.js'],
      moment:         [   '../bower_components/moment/moment.js'],
      screenfull:     [   '../bower_components/screenfull/dist/screenfull.min.js'],
      slimScroll:     [   '../bower_components/slimscroll/jquery.slimscroll.min.js'],
      sortable:       [   '../bower_components/html5sortable/jquery.sortable.js'],
      nestable:       [   '../bower_components/nestable/jquery.nestable.js',
                          '../bower_components/nestable/jquery.nestable.css'],
      filestyle:      [   '../bower_components/bootstrap-filestyle/src/bootstrap-filestyle.js'],
      slider:         [   '../bower_components/bootstrap-slider/bootstrap-slider.js',
                          '../bower_components/bootstrap-slider/bootstrap-slider.css'],
      chosen:         [   '../bower_components/chosen/chosen.jquery.min.js',
                          '../bower_components/bootstrap-chosen/bootstrap-chosen.css'],
      TouchSpin:      [   '../bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js',
                          '../bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css'],
      wysiwyg:        [   '../bower_components/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
                          '../bower_components/bootstrap-wysiwyg/external/jquery.hotkeys.js'],
      dataTable:      [   '../bower_components/datatables/media/js/jquery.dataTables.min.js',
                          '../bower_components/plugins/integration/bootstrap/3/dataTables.bootstrap.js',
                          '../bower_components/plugins/integration/bootstrap/3/dataTables.bootstrap.css'],
      vectorMap:      [   '../bower_components/bower-jvectormap/jquery-jvectormap-1.2.2.min.js', 
                          '../bower_components/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
                          '../bower_components/bower-jvectormap/jquery-jvectormap-us-aea-en.js',
                          '../bower_components/bower-jvectormap/jquery-jvectormap-1.2.2.css'],
      footable:       [   '../bower_components/footable/dist/footable.all.min.js',
                          '../bower_components/footable/css/footable.core.css'],
      fullcalendar:   [   '../bower_components/moment/moment.js',
                          '../bower_components/fullcalendar/dist/fullcalendar.min.js',
                          '../bower_components/fullcalendar/dist/fullcalendar.css',
                          '../bower_components/fullcalendar/dist/fullcalendar.theme.css'],
      daterangepicker:[   '../bower_components/moment/moment.js',
                          '../bower_components/bootstrap-daterangepicker/daterangepicker.js',
                          '../bower_components/bootstrap-daterangepicker/daterangepicker-bs3.css'],
      tagsinput:      [   '../bower_components/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
                          '../bower_components/bootstrap-tagsinput/dist/bootstrap-tagsinput.css']
                      
    }
  )
  // oclazyload config
  .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
      // We configure ocLazyLoad to use the lib script.js as the async loader
      $ocLazyLoadProvider.config({
          debug:  true,
          events: true,
          modules: [
              {
                  name: 'ngGrid',
                  files: [
                      '../bower_components/ng-grid/build/ng-grid.min.js',
                      '../bower_components/ng-grid/ng-grid.min.css',
                      '../bower_components/ng-grid/ng-grid.bootstrap.css'
                  ]
              },
              {
                  name: 'ui.grid',
                  files: [
                      '../bower_components/angular-ui-grid/ui-grid.min.js',
                      '../bower_components/angular-ui-grid/ui-grid.min.css',
                      '../bower_components/angular-ui-grid/ui-grid.bootstrap.css'
                  ]
              },
              {
                  name: 'ui.select',
                  files: [
                      '../bower_components/angular-ui-select/dist/select.min.js',
                      '../bower_components/angular-ui-select/dist/select.min.css'
                  ]
              },
              {
                  name:'angularFileUpload',
                  files: [
                    '../bower_components/angular-file-upload/angular-file-upload.min.js'
                  ]
              },
              {
                  name:'ui.calendar',
                  files: ['../bower_components/angular-ui-calendar/src/calendar.js']
              },
              {
                  name: 'ngImgCrop',
                  files: [
                      '../bower_components/ngImgCrop/compile/minified/ng-img-crop.js',
                      '../bower_components/ngImgCrop/compile/minified/ng-img-crop.css'
                  ]
              },
              {
                  name: 'angularBootstrapNavTree',
                  files: [
                      '../bower_components/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
                      '../bower_components/angular-bootstrap-nav-tree/dist/abn_tree.css'
                  ]
              },
              {
                  name: 'toaster',
                  files: [
                      '../bower_components/angularjs-toaster/toaster.js',
                      '../bower_components/angularjs-toaster/toaster.css'
                  ]
              },
              {
                  name: 'textAngular',
                  files: [
                      '../bower_components/textAngular/dist/textAngular-sanitize.min.js',
                      '../bower_components/textAngular/dist/textAngular.min.js'
                  ]
              },
              {
                  name: 'vr.directives.slider',
                  files: [
                      '../bower_components/venturocket-angular-slider/build/angular-slider.min.js',
                      '../bower_components/venturocket-angular-slider/build/angular-slider.css'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular',
                  files: [
                      '../bower_components/videogular/videogular.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.controls',
                  files: [
                      '../bower_components/videogular-controls/controls.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.buffering',
                  files: [
                      '../bower_components/videogular-buffering/buffering.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.overlayplay',
                  files: [
                      '../bower_components/videogular-overlay-play/overlay-play.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.poster',
                  files: [
                      '../bower_components/videogular-poster/poster.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.imaads',
                  files: [
                      '../bower_components/videogular-ima-ads/ima-ads.min.js'
                  ]
              },
              {
                  name: 'xeditable',
                  files: [
                      '../bower_components/angular-xeditable/dist/js/xeditable.min.js',
                      '../bower_components/angular-xeditable/dist/css/xeditable.css'
                  ]
              },
              {
                  name: 'smart-table',
                  files: [
                      '../bower_components/angular-smart-table/dist/smart-table.min.js'
                  ]
              }
          ]
      });
  }])
;

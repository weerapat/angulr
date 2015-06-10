module.exports = {
	less: {
        files: {
          'src/css/app.css': [
            'src/css/less/app.less'
          ]
        },
        options: {
          compile: true
        }
    },
    angular: {
        files: {
            'angular/css/app.min.css': [
                'bower_components/bootstrap/dist/css/bootstrap.css',
                'bower_components/animate.css/animate.css',
                'bower_components/font-awesome/css/font-awesome.css',
                'bower_components/simple-line-icons/css/simple-line-icons.css',
                'src/css/*.css'
            ]
        },
        options: {
            compress: true
        }
    },
    html: {
        files: {
            'html/css/app.min.css': [
                'bower_components/bootstrap/dist/css/bootstrap.css',
                'bower_components/animate.css/animate.css',
                'bower_components/font-awesome/css/font-awesome.css',
                'bower_components/simple-line-icons/css/simple-line-icons.css',
                'src/css/*.css'
            ]
        },
        options: {
            compress: true
        }
    }
}

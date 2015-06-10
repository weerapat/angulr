module.exports = {
    angular: {
        files: [
            {expand: true, src: "**", cwd: 'bower_components/bootstrap/fonts',         dest: "angular/fonts"},
            {expand: true, src: "**", cwd: 'bower_components/font-awesome/fonts',      dest: "angular/fonts"},
            {expand: true, src: "**", cwd: 'bower_components/Simple-Line-Icons/fonts', dest: "angular/fonts"},
            {expand: true, src: "**", cwd: 'src/fonts',   dest: "angular/fonts"},
            {expand: true, src: "**", cwd: 'src/api',     dest: "angular/api"},
            {expand: true, src: "**", cwd: 'src/l10n',    dest: "angular/l10n"},
            {expand: true, src: "**", cwd: 'src/img',     dest: "angular/img"},
            {expand: true, src: "**", cwd: 'src/js',      dest: "angular/js"},
            {expand: true, src: "**", cwd: 'src/tpl',     dest: "angular/tpl"},
            {src: 'src/index.min.html', dest : 'angular/index.html'}
        ]
    },
    html: {
        files: [
            {expand: true, src: "**", cwd: 'bower_components/bootstrap/fonts',         dest: "html/fonts"},
            {expand: true, src: "**", cwd: 'bower_components/font-awesome/fonts',      dest: "html/fonts"},
            {expand: true, src: "**", cwd: 'bower_components/Simple-Line-Icons/fonts', dest: "html/fonts"},
            {expand: true, src: '**', cwd:'src/fonts/', dest: 'html/fonts/'},
            {expand: true, src: "**", cwd: 'src/api',     dest: "html/api"},
            {expand: true, src: '**', cwd:'src/img/', dest: 'html/img/'},
            {expand: true, src: '*.css', cwd:'src/css/', dest: 'html/css/'},
            {expand: true, src: '**', cwd:'swig/js/', dest: 'html/js/'}
        ]
    },
    landing: {
        files: [
            {expand: true, src: "**", cwd: 'bower_components/bootstrap/fonts',         dest: "landing/fonts"},
            {expand: true, src: "**", cwd: 'bower_components/font-awesome/fonts',      dest: "landing/fonts"},
            {expand: true, src: "**", cwd: 'bower_components/Simple-Line-Icons/fonts', dest: "landing/fonts"},
            {expand: true, src:'**', cwd:'src/fonts/', dest: 'landing/fonts/'},
            {expand: true, src:'*.css', cwd:'src/css/', dest: 'landing/css/'},
            {src:'html/css/app.min.css', dest: 'landing/css/app.min.css'}
        ]
    }

};

# grunt-resemble-cli
> Grunt wrapper around the resemble-cli image diffing tool

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-resemble-cli --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-resemble');
```

## The "resemble" task

### Overview
In your project's Gruntfile, add a section named `resemble` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  resemble: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

####Example Config

The resemble task supports 3 different Grunt Files Array configuration.  The src files are essentially converted to paths where screenshots should be taken.  By default the resemble plugin will always screenshot the root path for your application. The `dest` will specify the destination directory name within the screenshot root directory that will exist in the root of your application.

```js
grunt.initConfig({
  resemble: {
    options: {
      screenshotRoot: 'optimizely-screens',
      url: 'http://0.0.0.0:8000/dist',
      gm: true

    },
    desktop: {
      options: {
        width: 1100,
      },
      src: ['dist/about', 'dist/contact', 'dist/customers', 'dist/customers/customer-stories'],
      dest: 'desktop',
    },
    tablet: {
      options: {
        width: 800,
      },
      src: ['dist/**/*.html'],
      dest: 'tablet',
    },
    mobile: {
      options: {
        width: 450,
      },
      files: [
       { 
         cwd: 'dist/',
         expand: true,     
         src: ['**/*.html'],
         dest: 'mobile'
       },
      ]
    }
  }
});
```

### Options 

#### screenshotRoot
Type: `String`
Default value: `'screenshots'`

The name of the directory that will be created in the root of your application.

#### url
Type: `String`
Default value: `'http://optimizely.com/'`

A string value specifying the root url where you would like screenshots taken and paths referenced from.

#### width
Type: `number`
Default value: `1024`

A number specifying the width at which screenshots should be taken.

#### url
Type: `String`
Default value: `'http://optimizely.com/'`

A string value specifying the root url where you would like screenshots taken and paths referenced from.

#### width
Type: `number`
Default value: `1024`

A number specifying the width at which screenshots should be taken.

#### tolerance
Type: `Number`
Default value: `0`

Number for the allowable mismatch tolerance for overwriting.

#### selector
Type: `string`
Default value: `body`

Selector for screenshot to be based upon, ex: '#outer-wrapper'

#### gm
Type: `boolean`
Default value: `false`
*Note: If flagged as true ImageMagick or GraphicsMagick must be globally installed on the user's machine via HomeBrew or some other medium*

A flag specifying if you would like to compare screenshots with [GraphicsMagick](http://aheckmann.github.io/gm/). Resemble CLI was created in a way that the user does not have to globally install external dependencies such as PhantomJS, CasperJS, ImageMagick, and GraphicsMagick.  Therefore, default behavior is to compare images using [ResembleJS](http://huddle.github.io/Resemble.js/).  Comparing without GM is a much slower process as Phantom has to fire up a webpage to compare images within using Resemble.  

#### debug
Type: `boolean`
Default value: `false`

This flag was developed primarily for the [Resemble CLI](https://www.npmjs.org/package/resemble-cli) and it has not been tested in the grunt plugin.  It essentially will run the Phantom child process in debug mode.

If you would like to debug the grunt task I suggest using [build-debug](https://www.npmjs.org/package/build-debug)

```js
grunt.initConfig({
  injector: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

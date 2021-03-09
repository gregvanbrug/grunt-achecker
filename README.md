**DEPRECATED:** AChecker website is scheduled to shut down on April 30, 2021. See [W3C Web Accessibility Evaluation Tools List](https://www.w3.org/WAI/ER/tools) for a current lis of accessibility tools.

# grunt-achecker

> Check HTML pages with achecker.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-achecker --save-dev
```

You will also need a Web Service Id from [AChecker](http://www.atutor.ca/).

Or... Better yet a Web Service Id from a custom/local installation. The source is available here [atutor/AChecker](https://github.com/atutor/AChecker). Once you have cloned the repository, follow the instructions in the AChecker Readme to install your own copy. It's easy. And you should be done in under 5 min.

By default, this task is configured to use the Public Api. But, please be nice and don't abuse the service.

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-achecker');
```

## The "achecker" task

### Overview
In your project's Gruntfile, add a section named `achecker` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  achecker: {
    options: {
      id: 'YOUR WEB SERVICE ID'
    },
    urls: [
      'http://github.com/gregvanbrug/grunt-achecker'
    ]
  }
});
```

### Options

Aside from the host and dest options, all options follow the (Validation Request Format)[http://achecker.ca/documentation/web_service_api.php] provided by AChecker.

#### options.host

Default: `http://achecker.ca`

The API host.

#### options.id

Default: `undefined`

Your Web Service Id. This is Required.

#### options.dest

Default: `achecker`

The directory where the reports should be generated.

#### options.uri

Default: none

The Url to test.

#### options.guide

Default: `WCAG2-AA`

Allowed:
```
BITV1: abbreviation of guideline bitv-1.0-(level-2);
508: abbreviation of guideline section-508;
STANCA: abbreviation of guideline stanca-act;
WCAG1-A: abbreviation of guideline wcag-1.0-(level-a);
WCAG1-AA: abbreviation of guideline wcag-1.0-(level-aa);
WCAG1-AAA: abbreviation of guideline wcag-1.0-(level-aaa);
WCAG2-A: abbreviation of guideline wcag-2.0-l1;
WCAG2-AA: abbreviation of guideline wcag-2.0-l2;
WCAG2-AAA: abbreviation of guideline wcag-2.0-l3.
```

#### options.output

Default: `html`

Allowed: `html | rest`

The format of the output. html returns -- well -- HTML. rest returns XML.

#### options.offset

Defalut: none

The line offset to begin validation.

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/). You will also need to create a webServiceId.json file from the provided example. The Gruntfile also assumes your local/custom host is accessible at http://achecker.localhost.

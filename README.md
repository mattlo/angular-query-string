# Angular Query String
An angular service that easily allows you to extract a key/value pair from the URL query string.

## Install
Clone the repository and include directly into your project. You can also use bower and install as a dependency:

```
bower install angular-query-string
```

Add the dependency in your Angular's project dependency arguments:

```
var app = angular.module('MyApp', [
    'angular-query-string'
]);
```

## Usage

Dependency Injection Name: `UrlQueryString`

```
UrlQueryString.<KEY>;

// http://cnn.com
UrlQueryString.foo; // `undefined`

// http://cnn.com?
UrlQueryString.foo; // `undefined`

// http://cnn.com?foo
UrlQueryString.foo; // `null`

// http://cnn.com?foo=bar
UrlQueryString.foo; // `'bar'`
``` 

## License
View the [LICENSE](https://github.com/mattlo/angular-query-string/blob/master/LICENSE) file.
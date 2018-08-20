# angular-google-maps-mock
Karma Mock for Unit Testing with Angular Google Maps Services

## Adding to project
Can be simply to you project just by npm:
```
    npm i -sD dicbrus/google-maps-mock
```

## Including into angular testing confuguration (file angular.json)
```
{
  "projects": {
    "your project": {
      "architect": {
        "test": {
          "options": {
            "scripts": [
              "node_modules/google-maps-mock/google-maps-mock.js"
            ]
          }
        }
      }
    }
}
```

That's it!  If you run into other errors where methods are undefined, add them as methods in the correct spot in the mock google object's tree. Even open PR, I'll merge it after review.

Project based on https://github.com/ScottieR/angular-google-maps-mock, credits to @ScottieR

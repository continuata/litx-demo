# Todo app demo for lit-html and MobX with no building

This app will only run on browsers supporting ES6
It only requires 3 npm libraries which it imports dynamically via unpkg:-

- lit-html
- lit-router
- mobx

## installing

```
npm i -g polymer-cli
```

## running

```
polymer serve
```

Will run via any server without a build step.

## further work

- investigating ways of aliasing node_modules without explicit path
- making it into a full PWA with caching etc.

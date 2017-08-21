# Angular, the Good Parts
- Separation of concerns -- html templates, js services.
- `track by` in `ng-repeat`. Lack of `track by` in `ng-repeat` expressions is
  the primary source of all complaints about angular performance.
- $scope
  - $scope handles user input and asynchronous events very well. It requires
    some work (`$apply`, etc.) to handle non-angular asynchronous events, but
    this is intuitive and well worth the cost.
- Services
  - Singletons provide easy access to data and shared functionality.
  - No reasoning about instances.
  - No babying object references if all references are fully-qualified. 
    - This is a problem you encounter when you write `$scope.data = MyService.data`
      in a controller, then later replace `MyService.data` somewhere else, e.g.
      after an $http get to update the data).
  - $http
- Directives
  - Declarative reaction to user input events or model updates
- testing; no-fuss methods are provided by Angular 1 to help set up test cases

# The less-good parts
- `$scope` events.
- Angular "Controllers"
  - `$scope` *is* the controller in Angular. It reacts to user input or async
    changes in the data model, binding the UI and data together.
  - Input events should directly trigger logic in well-known and visible
    services.

# Bad practices
- Using event systems. This seriously inhibits predictability and the ability to
    causes additional bugs, because you don't know who is broadcasting or
    listening to events.
- Building complicated service hierarchies or relationships.
  - Instead, the relationship should be made obvious in the template. E.g.
      `<div class="username" with-service="{f: 'MyFriends', rp: '$routeParameters'}">{{ f.byUsername[rp.username] }}</div>`
- "Components" as replacement for native HTML elements.
  - Directives should very rarely use the element type, opting for augmenting
      the behavior of native HTML to avoid creating tribal DSLs.

# New Best Practices
- A [new
    directive](https://andrewstuart.github.io/ng-a11y/#/api/ng-a11y.directive:withService)
    that supports explicitly importing services into angular templates.
- Effective deprecation of "Controllers." Much more often than not, these add a
    layer of obscurity and end up taking references. This might seem to clean
    things up, but it creates bugs when the references become stale.
- 

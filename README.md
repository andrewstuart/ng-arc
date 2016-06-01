# Good Parts
- $scope
  - hierarchies for composition and encapsulation
- Services
  - Singletons provide easy access to data and shared functionality
  - $http
- Directives
  - Declarative reaction to view events or model updates
- testing

# Bad Parts
- `$scope` events.
- `module.controller`
  - $scope *is* the controller in Angular. It reacts to changes on the page and
    in the data model, binding the two together.
  - Reacting to changes should be handled by directives.
  - The reactions should directly trigger events in well-known and visible
    services

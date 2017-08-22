describe('with-service directive', function() {
  //Setup
  beforeEach(module('ng-arc'));

  var foo;

  beforeEach(module(function($provide) {
    $provide.service('foo', function() {
      foo = this;
      this.foo = 'bar';
    });}
  ));
  
  var $compile, $rootScope;

  var ele, $scope;

	beforeEach(inject(function($injector) {
	  $compile = $injector.get('$compile');
		$rootScope = $injector.get('$rootScope');

    $scope = $rootScope.$new();

	}));

  afterEach(function() {
    $scope.$destroy();
  });
	

  //Tests
  describe('when aliasing a service', function() {
    beforeEach(function() {
      var e = '<div with-service="foo as f"></div>';
      ele = $compile(e)($scope);
    });
    it('should expose a service on the scope as named', function() {
      expect(ele.scope().f).toBe(foo);
      expect(ele.scope().foo).not.toBeDefined();
    });
  });

  describe('without an alias', function() {
    beforeEach(function() {
      var e = '<div with-service="foo"></div>';
      ele = $compile(e)($scope);
    });

    it('should expose the service as named if no alias provided', function() {
      expect(ele.scope().foo).toBe(foo);
    });
  });

  describe('as an object', function() {
    beforeEach(function() {
      var e = '<div with-service="{f: \'foo\', g: \'foo\'}"></div>';
      ele = $compile(e)($scope);
    });

    it('should alias the service', function() {
      expect(ele.scope().f).toBe(foo);
      expect(ele.scope().g).toBe(foo);
    });
  });
});

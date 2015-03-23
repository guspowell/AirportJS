describe("plane", function() {

  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
  });

  describe("default", function() {

    it("should be flying on creation", function() {
      expect(plane.flying).toBe(true);
    });

  });

  describe("landing and taking off", function() {

    it("should be able to land", function() {
      plane.land();
      expect(plane.flying).toBe(false)
    });

    it("should be able to take-off", function() {
      plane.land();
      plane.takeOff();
      expect(plane.flying).toBe(true)
    });

    it("should not be able to land if it is not flying", function () {
      plane.land();
      expect(function(){ plane.land() }).toThrowError("plane already landed");
    });

    it("should not be able to take if it is flying", function () {
      expect(function(){ plane.takeOff() }).toThrowError("plane already flying");
    });

  });

});


describe('Airport', function() {

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  var landTwentyPlanes = function() {
    for(i=0; i<20; i++) {
      plane = new Plane();
      airport.accept_plane(plane);
    }
  };

  describe('default', function() {

    it('should have no planes on creation', function() {
      expect(airport.planes.length).toEqual(0)
    });

    it('number of planes should increase by one when the airport accepts a plane', function() {
      airport.accept_plane(plane);
      expect(airport.planes.length).toEqual(1)
    });

    it('number of planes should reduce by one when the airport launches a plane', function() {
      airport.accept_plane(plane);
      expect(airport.planes.length).toEqual(1);
      airport.launch_plane(plane);
      expect(airport.planes.length).toEqual(0);
    });

    it('should know the number of planes it has', function() {
      airport.accept_plane(plane);
      expect(airport.plane_count()).toEqual(1)
    });

    it('should know when it is at capacity', function() {
      expect(airport.full()).toEqual(false)
      landTwentyPlanes();
      var easyjet = new Plane();
      expect(function() { airport.accept_plane(easyjet) }).toThrowError("airport is full");
    });

  });

  // describe('accepting planes', function() {
  //
  //   it('should be able to accept a plane for landing', function() {
  //     plane.land
  //   });
  //
  // });


});

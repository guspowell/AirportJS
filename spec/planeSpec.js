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

  });

});


describe('Airport', function() {

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe('default', function() {

    it('should have no planes on creation', function() {
      expect(airport.planes.length).toEqual(0)
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

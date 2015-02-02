describe("plane", function() {

  var plane;

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

  });

});

describe('Airport', function() {

  var plane;
  var weather;

  beforeEach(function() {
    plane = new Plane();
    weather = new Weather();
    spyOn(weather, 'forecast').and.returnValue('sunny');
    airport = new Airport(weather);
  });

  var landTwentyPlanes = function() {
    for(i=0; i<20; i++) {
      plane = new Plane();
      airport.acceptPlane(plane);
    }
  };

  describe('default', function() {

    it('should have no planes on creation', function() {
      expect(airport.planes.length).toEqual(0)
    });

    it('number of planes should increase by one when the airport accepts a plane', function() {
      airport.acceptPlane(plane);
      expect(airport.planes.length).toEqual(1)
    });

    it('number of planes should reduce by one when the airport launches a plane', function() {
      airport.acceptPlane(plane);
      expect(airport.planes.length).toEqual(1);
      airport.launchPlane(plane);
      expect(airport.planes.length).toEqual(0);
    });

    it('should know the number of planes it has', function() {
      airport.acceptPlane(plane);
      expect(airport.planeCount()).toEqual(1)
    });

    it('should know when it is at capacity', function() {
      expect(airport.full()).toEqual(false)
      landTwentyPlanes();
      var easyjet = new Plane();
      expect(function() { airport.acceptPlane(easyjet) }).toThrowError("airport is full");
    });

    it('should have a current weather state', function() {
      airport = new Airport(weather);
      expect(airport.airportWeather).toEqual("sunny");
    });

  });

  describe('airport and weather conditions', function() {

    it('plane cannoot land if the weather is stormy', function() {
      var badWeather = new Weather();
      spyOn(badWeather, "forecast").and.returnValue("stormy");
      gatwick = new Airport(badWeather);
      expect(function() { gatwick.acceptPlane(plane) }).toThrowError("the weather is too stormy to land")
    });

    it('plane cannoot land if the weather is stormy', function() {
      var badWeather = new Weather();
      spyOn(badWeather, "forecast").and.returnValue("stormy");
      gatwick = new Airport(badWeather)
      expect(function() { gatwick.acceptPlane(plane) }).toThrowError("the weather is too stormy to land")
    });

  });

});

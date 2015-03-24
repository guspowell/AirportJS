describe('Airport', function() {

  var plane;
  var weather;

  beforeEach(function() {
    plane = new Plane();
    weather = new Weather();
    spyOn(weather, 'todaysWeather').and.returnValue('sunny');
    airport = new Airport();
  });

  var landTwentyPlanes = function() {
    for(i=0; i<20; i++) {
      plane = new Plane();
      airport.acceptPlane(plane, weather);
    }
  };

  describe('default', function() {

    it('should have no planes on creation', function() {
      expect(airport.planes.length).toEqual(0)
    });

    it('number of planes should increase by one when the airport accepts a plane', function() {
      airport.acceptPlane(plane, weather);
      expect(airport.planes.length).toEqual(1)
    });

    it('number of planes should reduce by one when the airport launches a plane', function() {
      airport.acceptPlane(plane, weather);
      expect(airport.planes.length).toEqual(1);
      airport.launchPlane(plane);
      expect(airport.planes.length).toEqual(0);
    });

    it('should know the number of planes it has', function() {
      airport.acceptPlane(plane, weather);
      expect(airport.planeCount()).toEqual(1)
    });

    it('should know when it is at capacity', function() {
      expect(airport.full()).toEqual(false)
      landTwentyPlanes();
      var easyjet = new Plane();
      expect(function() { airport.acceptPlane(easyjet, weather) }).toThrowError("airport is full");
    });

  });

  describe('airport and weather conditions', function() {

    it('plane cannoot land if the weather is stormy', function() {
      var badWeather = new Weather();
      spyOn(badWeather, "forecast").and.returnValue("stormy");
      gatwick = new Airport();
      expect(function() { gatwick.acceptPlane(plane, badWeather) }).toThrowError("the weather is too stormy to land")
    });

    it('plane cannoot land if the weather is stormy', function() {
      console.log(airport.airportWeather)
      var badWeather = new Weather();
      spyOn(badWeather, "forecast").and.returnValue("stormy");
      gatwick = new Airport()
      expect(function() { gatwick.acceptPlane(plane, badWeather) }).toThrowError("the weather is too stormy to land")
    });

  });

});

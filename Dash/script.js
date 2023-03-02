(function() {
  var tap;

  tap = "click";

  if (Modernizr.touch) {
    tap = "touchstart";
  }

  $(document).on(tap, '.brick.closed', function(event) {
    var $this;
    $this = $(this);
    $this.animate({
      'width': '100%'
    }, 'fast', function() {});
    $this.removeClass('closed');
    return $this.addClass('open');
  });

  $(document).on(tap, '.brick a.js-close', function(event) {
    var $brick;
    $brick = $(this).closest('.brick');
    return $brick.animate({
      'width': '120px'
    }, 'fast', function() {
      $brick.removeClass('open');
      return $brick.addClass('closed');
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLEdBQUEsR0FBTTs7RUFDTixJQUFxQixTQUFTLENBQUMsS0FBL0I7SUFBQSxHQUFBLEdBQUssYUFBTDs7O0VBRUEsQ0FBQSxDQUFFLFFBQUYsQ0FBVyxDQUFDLEVBQVosQ0FBZSxHQUFmLEVBQW9CLGVBQXBCLEVBQXFDLFFBQUEsQ0FBQyxLQUFELENBQUE7QUFDckMsUUFBQTtJQUFFLEtBQUEsR0FBUSxDQUFBLENBQUUsSUFBRjtJQUNSLEtBQUssQ0FBQyxPQUFOLENBQWM7TUFBRSxPQUFBLEVBQVM7SUFBWCxDQUFkLEVBQW1DLE1BQW5DLEVBQTJDLFFBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBM0M7SUFDQSxLQUFLLENBQUMsV0FBTixDQUFrQixRQUFsQjtXQUNBLEtBQUssQ0FBQyxRQUFOLENBQWUsTUFBZjtFQUptQyxDQUFyQzs7RUFNQSxDQUFBLENBQUUsUUFBRixDQUFXLENBQUMsRUFBWixDQUFlLEdBQWYsRUFBb0IsbUJBQXBCLEVBQXlDLFFBQUEsQ0FBQyxLQUFELENBQUE7QUFDekMsUUFBQTtJQUFFLE1BQUEsR0FBUyxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsT0FBUixDQUFnQixRQUFoQjtXQUNULE1BQU0sQ0FBQyxPQUFQLENBQWU7TUFBRSxPQUFBLEVBQVM7SUFBWCxDQUFmLEVBQXFDLE1BQXJDLEVBQTZDLFFBQUEsQ0FBQSxDQUFBO01BQzNDLE1BQU0sQ0FBQyxXQUFQLENBQW1CLE1BQW5CO2FBQ0EsTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsUUFBaEI7SUFGMkMsQ0FBN0M7RUFGdUMsQ0FBekM7QUFUQSIsInNvdXJjZXNDb250ZW50IjpbInRhcCA9IFwiY2xpY2tcIlxudGFwID1cInRvdWNoc3RhcnRcIiBpZiBNb2Rlcm5penIudG91Y2hcblxuJChkb2N1bWVudCkub24gdGFwLCAnLmJyaWNrLmNsb3NlZCcsIChldmVudCkgLT5cbiAgJHRoaXMgPSAkKHRoaXMpXG4gICR0aGlzLmFuaW1hdGUgeyAnd2lkdGgnOiAnMTAwJScgfSwgJ2Zhc3QnLCAoKSAtPlxuICAkdGhpcy5yZW1vdmVDbGFzcygnY2xvc2VkJylcbiAgJHRoaXMuYWRkQ2xhc3MoJ29wZW4nKVxuXG4kKGRvY3VtZW50KS5vbiB0YXAsICcuYnJpY2sgYS5qcy1jbG9zZScsIChldmVudCkgLT5cbiAgJGJyaWNrID0gJCh0aGlzKS5jbG9zZXN0KCcuYnJpY2snKVxuICAkYnJpY2suYW5pbWF0ZSB7ICd3aWR0aCc6ICcxMjBweCcgfSwgJ2Zhc3QnLCAoKSAtPlxuICAgICRicmljay5yZW1vdmVDbGFzcygnb3BlbicpXG4gICAgJGJyaWNrLmFkZENsYXNzKCdjbG9zZWQnKVxuIl19
//# sourceURL=coffeescript
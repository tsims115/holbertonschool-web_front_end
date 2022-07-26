let roomDimensions = {
  width: 50,
  length: 100,
  getArea: function() {
    return this.width * this.length
  }
};

const unbound = roomDimensions.getArea;
const boundGetArea = unbound.bind(roomDimensions);
console.log(boundGetArea());

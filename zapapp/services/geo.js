export const getLocation = () => {
    if ("geolocation" in navigator) {
        return navigator.geolocation.getCurrentPosition(function(position) {
            return [position.coords.latitude, position.coords.longitude];
          });
      } else {
        return null;
      }
}
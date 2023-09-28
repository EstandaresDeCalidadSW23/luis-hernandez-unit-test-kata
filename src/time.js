function time(seconds) {
    if (seconds >= 31536000) {
      const years = Math.floor(seconds / 31536000);
      seconds %= 31536000; 
      return years + "y";
    }
    if (seconds >= 604800) {
      const weeks = Math.floor(seconds / 604800);
      seconds %= 604800; 
      return weeks + "w";
    }
    if (seconds >= 86400) {
      const days = Math.floor(seconds / 86400);
      seconds %= 86400; 
      return days + "d";
    }
    if (seconds >= 3600) {
      const hours = Math.floor(seconds / 3600);
      seconds %= 3600; 
      return hours + "h";
    }
    if (seconds >= 60) {
      const minutes = Math.floor(seconds / 60);
      seconds %= 60; 
      return minutes + "m";
    }
    return seconds + "s";
  }
  
  module.exports = time;
  






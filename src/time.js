function time(seconds) {

    if (seconds === 0) {
      return "0s"
    }

    // la cadena empieza vacía
    let result = ""
    if (seconds >= 31536000) {
      const years = Math.floor(seconds / 31536000);
      seconds %= 31536000; 
      result += years + "y" + " ";
    }
    if (seconds >= 604800) {
      const weeks = Math.floor(seconds / 604800);
      seconds %= 604800; 
      result += weeks + "w ";
      if (seconds < 86400) {
        return result.trim()
      }
    }
    if (seconds >= 86400) {
      const days = Math.floor(seconds / 86400);
      seconds %= 86400; 
      result += days + "d ";
      if (seconds < 3600) {
        return result.trim()
      }
    }
    if (seconds >= 3600) {
      const hours = Math.floor(seconds / 3600);
      seconds %= 3600; 
      result += hours + "h ";

      if (seconds < 60) {
        return result.trim()
      }
    }

    if (seconds >= 60) {
      const minutes = Math.floor(seconds / 60);
      seconds %= 60; 
      result += minutes + "m ";
    }
    if (seconds > 0) {
      result += seconds + "s";
    }
    return result.trim()
  }
  
  module.exports = time;
  






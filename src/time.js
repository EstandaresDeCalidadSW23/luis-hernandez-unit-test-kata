function time(seconds) {
  let result = "";

  if (seconds >= 31536000) {
    const years = Math.floor(seconds / 31536000);
    seconds %= 31536000; // Restar los segundos equivalentes a los años
    result += years + "y ";
  }
  
  if (seconds >= 604800) {
    const weeks = Math.floor(seconds / 604800);
    seconds %= 604800; // Restar los segundos equivalentes a las semanas
    result += weeks + "w ";
  }
  
  if (seconds >= 86400) {
    const days = Math.floor(seconds / 86400);
    seconds %= 86400; // Restar los segundos equivalentes a los días
    result += days + "d ";
  }
  
  if (seconds >= 3600) {
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600; // Restar los segundos equivalentes a las horas
    result += hours + "h ";
  }
  
  if (seconds >= 60) {
    const minutes = Math.floor(seconds / 60);
    seconds %= 60; // Restar los segundos equivalentes a los minutos
    result += minutes + "m ";
  }
  
  if (seconds > 0) {
    result += seconds + "s";
  }

  return result.trim() || "0s"; // Devolver "0s" si no se agregó ninguna unidad
}

module.exports = time;





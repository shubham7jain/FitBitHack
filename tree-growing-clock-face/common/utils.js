// Add zero in front of numbers < 10
export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

//Formats the hour based on the user pref
export function formatHour(hour, clockPref) {
  if (clockPref == '12h'){
    if(hour > 12) {
      hour -= 12;
    } else if(hour == 0) {
      hour = "12";
    }
  }
  return hour;
}

export function goalToColor(value, total, low = 'fb-red', 
                                          medium = 'fb-peach', 
                                          high = 'fb-cyan', 
                                          complete = 'fb-mint', ){
  if (!value || !total){
    color = low;
    return color;
  }
  
  let percent = value*100/total;
  let color = 'white'; // #FFFFFF
  if (percent < 33){
    color = low; // #F83C40
  } else if (percent < 66){
    color = medium; // #FFCC33
  } else if (percent < 100){
    color = high;  // #14D3F5
  } else {
    color = complete; // #5BE37D
  }
  return color
}

//Localisation for Day and Month; the switch seems to be slower than the array...
export var weekday = {
	de: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
	da: ["sø", "ma", "ti", "on", "to", "fr", "lø"],
	en: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
	es: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
	fr: ["di", "lu", "ma", "me", "je", "ve", "sa"],
	nl: ["zo", "ma", "di", "wo", "do", "vr", "za"],
	it: ["do", "lu", "ma", "me", "gi", "ve", "sa"],
	pt: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
	pl: ["N", "Pn", "Wt", "Śr", "Cz", "Pt", "So"],
  sv: ["sö", "må", "ti", "on", "to", "fr", "lö"],
  ja: ["日", "月", "火", "水", "木", "金", "土"],
  ko: ["일", "월", "화", "수", "목", "금", "토"],
  zh: ["日", "一", "二", "三", "四", "五", "六"]
};
const input = "04/17/2025 05:08 pm";
const date = new Date(input);
const timeTag = date.getTime().toString();

console.log(timeTag); // e.g., "1744903680000"

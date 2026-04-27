export async function load() {
  const response = await fetch('https://api.erg.ic.ac.uk/AirQuality/Information/Groups/Json');
  const data = await response.json();
  const groups = data.Groups.Group;
  
  return { groups };
}
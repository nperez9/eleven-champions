/**
 * return a whatsApp api link to contact the person
 * @param {string} phone
 * @param {string} name
 */
export function buildWhatsAppUrl(phone: string, name: string): string {
  const url = `https://api.whatsapp.com/send/?phone=${phone}&text=Hola+%2C+%2A${name}%2A+como+estas%3F%2C+Vi+tu+perfil+en+BAgeisha.com+y+queria+saber+mas+de+tus+servicios&app_absent=0`;
  return url;
}

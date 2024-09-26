import { Price } from "./types/types"

export const formattedPrice = (currentLanguage: string, price: Price) => {
  const amount = Math.round(typeof price.amount === 'number' ? price.amount : 0);
  const decimals = 0; // Numeros redondos porque en los diseños (specs) no se ven los decimales
  return new Intl.NumberFormat(currentLanguage, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount);
};

//Keyboard handlers
export const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>, callback: () => void) => {
  if (event.key === 'Enter') {
    callback();
  }
};
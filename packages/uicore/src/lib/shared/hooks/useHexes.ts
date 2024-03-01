export const useHexes = () => {
  const formatHex = (hex?: string) => {
    if (hex?.toString()?.length === 9) {
      return hex?.slice(0, -2);
    } else if (hex?.toString()?.length === 7) {
      return hex;
    }
    return new Error("Invalid hex color");
  };

  const addMidOpacity = (hex?: string) => {
    return formatHex(hex) + "52";
  };

  const addLightOpacity = (hex?: string) => {
    return formatHex(hex) + "1a";
  };

  const addDeepOpacity = (hex?: string) => {
    return formatHex(hex) + "";
  };

  return {
    addMidOpacity,
    addLightOpacity,
    addDeepOpacity,
  };
};

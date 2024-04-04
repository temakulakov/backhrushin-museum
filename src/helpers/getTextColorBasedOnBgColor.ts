export function getTextColorBasedOnBgColor(rgb: string): string {
    const color = rgb.match(/\d+/g); // Извлечь числовые значения RGB из строки
    if (!color || color.length < 3) {
        throw new Error("Invalid RGB color value");
    }
    const brightness = Math.round(((parseInt(color[0], 10) * 299) + (parseInt(color[1], 10) * 587) + (parseInt(color[2], 10) * 114)) / 1000);
    return (brightness > 165) ? '#54565A' : 'white';
}

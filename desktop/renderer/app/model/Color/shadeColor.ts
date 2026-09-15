export function shadeColor(color: string, percent: number): string {
    let R = parseInt(color.substring(1, 3), 16);
    let G = parseInt(color.substring(3, 5), 16);
    let B = parseInt(color.substring(5, 7), 16);

    R = Math.min(Math.floor(R * (100 + percent) / 100), 255);
    G = Math.min(Math.floor(G * (100 + percent) / 100), 255);
    B = Math.min(Math.floor(B * (100 + percent) / 100), 255);

    const RR = `0${R.toString(16)}`.slice(-2);
    const GG = `0${G.toString(16)}`.slice(-2);
    const BB = `0${B.toString(16)}`.slice(-2);

    return `#${RR}${GG}${BB}`;
}

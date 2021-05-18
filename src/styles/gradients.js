export const rygGradient = (weight) => {
    // Red rgb Weights
    const redWeight = weight < 0.5 ? (1 - weight) : 0;
    const rrw = 0x75 * redWeight;
    const rgw = 0x19 * redWeight;
    const rbw = 0x0f * redWeight;

    // Yellow rgb Weights
    const yellowWeight = weight < 0.5 ? weight : (1 - weight);
    const yrw = 0x75 * yellowWeight;
    const ygw = 0x6b * yellowWeight;
    const ybw = 0x0f * yellowWeight;

    // Green rgb Weights
    let greenWeight = weight >= 0.5 ? weight : 0;

    // Make it obvious when values are close to max
    if(greenWeight < 1) greenWeight *= 0.8;

    const grw = 0x0f * greenWeight;
    const ggw = 0x75 * greenWeight;
    const gbw = 0x38 * greenWeight;

    // Combine each color
    const r = Math.round(grw + yrw + rrw);
    const g = Math.round(ggw + ygw + rgw);
    const b = Math.round(gbw + ybw + rbw);

    return {
        backgroundColor: `rgb(${r},${g},${b})`
    };
};

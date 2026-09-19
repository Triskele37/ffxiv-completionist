import { TaskLink, LinkTransform } from '../../../common/Features';

export function buildExternalUrl(
    term: string | string[],
    config: TaskLink,
): string {
    let [prefix, encodedTerm] = shiftPrefix(term, config);

    encodedTerm = transformPreEncoding(encodedTerm, config);
    encodedTerm = joinTerms(encodedTerm, config);

    // Encode
    if(prefix && !config.skipPrefixEncode) {
        prefix = encodeURIComponent(prefix);
    }

    if(!config.skipEncode) {
        encodedTerm = encodeURIComponent(encodedTerm);
    }

    encodedTerm = transformPostEncoding(encodedTerm, config);

    // Cleanup
    while(encodedTerm.indexOf('%20%20') > -1) {
        encodedTerm = encodedTerm.replace('%20%20', '%20');
    }

    return config.url + prefix + encodedTerm;
}

function shiftPrefix(term: string | string[], config: TaskLink): [string | undefined, string | string[]] {
    if(config.usePrefix && Array.isArray(term)) {
        return [term[0], term.slice(1)];
    }

    return ['', term];
}

function transformPreEncoding(term: string | string[], config: TaskLink): string | string[] {
    let transformed = term;

    for(const transform of config.preEncodeTransforms ?? []) {
        if(typeof transformed === 'string') {
            transformed = transformTerm(transformed, transform);
        }
        else {
            transformed = transformed.map((t) => transformTerm(t, transform));
        }
    }

    return transformed;
}

function joinTerms(term: string | string[], config: TaskLink): string {
    if(!Array.isArray(term)) return term;
    return term.join(config.join ?? '+');
}

function transformPostEncoding(term: string, config: TaskLink): string {
    let transformed = term;

    for(const transform of config.postEncodeTransforms ?? []) {
        transformed = transformTerm(transformed, transform);
    }

    return transformed;
}

function transformTerm(term: string, transform: LinkTransform): string {
    if('base64' in transform) {
        return Buffer.from(term).toString('base64');
    }
    else if('map' in transform) {
        return transform.map.replace('{term}', term)
    }
    else if('from' in transform && 'to' in transform) {
        return term.replaceAll(transform.from, transform.to);
    }

    return term;
}

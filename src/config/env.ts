const VITE_PREFIX = 'VITE_';

const getEnvVariable = (key: string, defaultValue?: string): string => {
    const viteKey = `${VITE_PREFIX}${key}`;
    const value = import.meta.env[viteKey];

    if (value !== undefined) {
        return value;
    }

    if (defaultValue !== undefined) {
        return defaultValue;
    }

    throw new Error(`Environment variable ${viteKey} is not defined`);
};

export const ENV = {
    MAP_ACCESS_TOKEN: getEnvVariable('MAP_ACCESS_TOKEN', '28c1ef6e-50c0-42c1-9cbf-b41516dd600e'),
    API_BASE_URL: getEnvVariable('API_BASE_URL', 'http://192.168.1.97:8000'),
    MAP_STYLE_URL: getEnvVariable('MAP_STYLE_URL', 'https://map-init.gallimap.com/styles/light/style.json'),
    SEARCH_API_URL: getEnvVariable('SEARCH_API_URL', 'https://route-init.gallimap.com/api/v1/search')
} as const;
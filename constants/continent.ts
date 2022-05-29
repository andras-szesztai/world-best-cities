export const continents = [
    'northAmerica',
    'europe',
    'asia',
    'oceania',
    'middleEast',
    'africa',
    'southAmerica',
] as const

export const continentMapper: Record<string, typeof continents[number]> = {
    'North America': 'northAmerica',
    'South America': 'southAmerica',
    Europe: 'europe',
    Asia: 'asia',
    Oceania: 'oceania',
    'Middle East': 'middleEast',
    Africa: 'africa',
}

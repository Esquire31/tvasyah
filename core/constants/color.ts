// Uranium Green color palette
const URANIUM_GREEN = '#17cfa1';
const URANIUM_GREEN_90 = '#17cfa1e6';
const URANIUM_GREEN_80 = '#17cfa1cc';
const URANIUM_GREEN_70 = '#17cfa1b3';
const URANIUM_GREEN_60 = '#17cfa19a';
const URANIUM_GREEN_50 = '#17cfa180';
const URANIUM_GREEN_40 = '#17cfa166';
const URANIUM_GREEN_30 = '#17cfa14d';
const URANIUM_GREEN_20 = '#17cfa133';
const URANIUM_GREEN_10 = '#17cfa11a';

const TERRACOTTA_GOLD = '#c7a17a';

const SAGE = '#7c9082';

const GOLD_MUTED = '#c5a059';

const EMERALD_GREEN = '#08211b'

export const COLOR = {
    TEXT: {
        BLACK: '#151515',
        MUTED: SAGE,
        HIGHLIGHT: TERRACOTTA_GOLD,
        SUBTLE: GOLD_MUTED,
        GREEN: URANIUM_GREEN
    },

    BACKGROUND: {
        GREEN: EMERALD_GREEN,
    },

    URANIUM_GREEN: {
        DEFAULT: URANIUM_GREEN,
        90: URANIUM_GREEN_90,
        80: URANIUM_GREEN_80,
        70: URANIUM_GREEN_70,
        60: URANIUM_GREEN_60,
        50: URANIUM_GREEN_50,
        40: URANIUM_GREEN_40,
        30: URANIUM_GREEN_30,
        20: URANIUM_GREEN_20,
        10: URANIUM_GREEN_10,
    },

} as const;
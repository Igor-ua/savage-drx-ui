export const ROUTES = {
    root: "/",
    homeWithPage: "/page/:p",
    online: "/online",
    history: "/history",
    historyTimestampTab: "/history/:timestamp/:tab",
    ladder: "/ladder",
    ladderWeekTab: "/ladder/week/:weekName/:tab",
    ladderLiveTab: "/ladder/live/:tab",
    stats: "/stats",
    searchStatsUid: "/stats/search/uid/:uid",
    searchStatsName: "/stats/search/name/:name",
    player: "/player/:id",
    playerWeekly: "/player/:weekName/:id",
    servers: "/servers",
    server: "/servers/:server",
    client: "/client/drx",
    about: "/about",
    login: "/auth/login",
    registration: "/auth/registration",
    confirmEmail: "/auth/email/confirm",
    registrationFinished: "/auth/registration/success",
    accountSettings: "/account/settings"
}

export const CLAN_ICON_URL = '/icons/drx/'
export const ITEMS_ICON_URL = process.env.PUBLIC_URL + '/images/weapons/'

export const LOCAL_STORAGE_TOKEN = 'remember-me'

export const GAMES_HISTORY_TTL_SECONDS = 10
export const DAILY_CHART_TTL_SECONDS = 60 * 5
export const WEEKLY_CHART_TTL_SECONDS = 60 * 10
export const GAME_HISTORY_TTL_SECONDS = 60 * 60 * 24
export const WEEKLY_LADDERS_LIST_TTL_SECONDS = 60 * 10
export const FINISHED_WEEKLY_LADDER_TTL_SECONDS = 60 * 60 * 24
export const LIVE_WEEKLY_LADDER_TTL_SECONDS = 60 * 2
export const SSF_TTL_SECONDS = 60 * 2
export const RESEND_EMAIL_TOKEN_TIMEOUT = 60 * 2

export const DEFAULT_GAMES_HISTORY_QUANTITY = 20

export const INFO_FIELDS = {
    COMM_POINTS: {key: 'comm_points', title: 'Points (Commanders)'},
    COMM_WINS: {key: 'comm_wins', title: 'Victories (Commanders)'},
    COMM_LOSE: {key: 'comm_lose', title: 'Defeats (Commanders)'},
    COMM_DRAW: {key: 'comm_draw', title: 'Draws (Commanders)'},

    KILLS: {key: 'kills', title: 'Kills'},
    MELEE_KILL: {key: 'melee_kill', title: 'Melee Kills'},
    RANGED_KILL: {key: 'ranged_kill', title: 'Ranged Kills'},
    DEATHS: {key: 'deaths', title: 'Deaths'},
    SIEGE_KILL: {key: 'siege_kill', title: 'Siege Kills'},
    NPC_KILL: {key: 'npc_kill', title: 'NPC Killed'},
    PEON_KILL: {key: 'peon_kill', title: 'Workers Killed'},
    BUILD_KILL: {key: 'build_kill', title: 'Buildings Killed'},
    SACRIFICE: {key: 'sacrifice', title: 'Sacrificed'},

    NPC_DAMAGE: {key: 'npc_damage', title: 'Damage on NPC'},
    CLIENT_DAMAGE: {key: 'client_damage', title: 'Damage on Players'},
    BUILD_DAMAGE: {key: 'build_damage', title: 'Damage on Buildings'},
    OUTPOST_DAMAGE: {key: 'outpost_damage', title: 'Damage on Outpost'},
    PEON_DAMAGE: {key: 'peon_damage', title: 'Damage on Workers'},

    MONEY_DELTA: {key: 'money_delta', title: 'Money Delta'},
    EXPERIENCE: {key: 'experience', title: 'Experience'},
    MINE: {key: 'mine', title: 'Mined'},
    BUILD: {key: 'build', title: 'Built'},

    ON_TEAM_TIME: {key: 'on_team_time', title: 'Game Time'},
    AUTO_BUFF: {key: 'auto_buff', title: 'Self Buffs'},
    FLAG_CAPTURE: {key: 'flag_capture', title: 'Flags Captured'},
    HEAL: {key: 'heal', title: 'Heal'},
    JUMPS: {key: 'jumps', title: 'Jumps'},
    BLOCKS: {key: 'blocks', title: 'Blocks'},
    ORDER_GIVEN: {key: 'order_give', title: 'Orders Given'},
    ORDER_OBEYED: {key: 'order_obeyed', title: 'Orders Obeyed'},

    CARN_HP: {key: 'carn_hp', title: 'Carnivorous'},
    KILL_STREAK: {key: 'kill_streak', title: 'Kill Streak'},
    MONEY_GAINED: {key: 'money_gained', title: 'Money Gained'},
    MONEY_SPENT: {key: 'money_spent', title: 'Money Spent'}
}

const SSF_INFO_FIELDS = {
    comm_points: 'Points (Commanders)',
    comm_wins: 'Victories (Commanders)',
    comm_lose: 'Defeats (Commanders)',
    comm_draw: 'Draws (Commanders)',
    kills: 'Kills',
    melee_kill: 'Melee Kills',
    ranged_kill: 'Ranged Kills',
    deaths: 'Deaths',
    siege_kill: 'Siege Kills',
    npc_kill: 'NPC Killed',
    peon_kill: 'Workers Killed',
    build_kill: 'Buildings Killed',
    sacrifice: 'Sacrificed',
    npc_damage: 'Damage on NPC',
    client_damage: 'Damage on Players',
    build_damage: 'Damage on Buildings',
    outpost_damage: 'Damage on Outpost',
    peon_damage: 'Damage on Workers',
    money_delta: 'Money Delta',
    experience: 'Experience',
    mine: 'Mined',
    build: 'Built',
    on_team_time: 'Game Time',
    auto_buff: 'Self Buffs',
    flag_capture: 'Flags Captured',
    heal: 'Heal',
    jumps: 'Jumps',
    blocks: 'Blocks',
    order_give: 'Orders Given',
    order_obeyed: 'Orders Obeyed',
    carn_hp: 'Carnivorous',
    kill_streak: 'Kill Streak',
    money_gained: 'Money Gained',
    money_spent: 'Money Spent'
}

export const getSsfInfoField = (field: string) => {
    // @ts-ignore
    return SSF_INFO_FIELDS[field]
}